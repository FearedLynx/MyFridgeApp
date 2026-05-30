/**
 * Scraper for inspiredtaste.net
 * Uses post-sitemap.xml + cheerio HTML parsing.
 */
const cheerio = require('cheerio');
const { fetchHtml, downloadImage, makeId, detectTags, guessMealTimes, buildSections, sleep } = require('../utils');
const { urlScraped, markUrlDone, markUrlError, insertRecipe } = require('../db');

const BASE = 'https://www.inspiredtaste.net';
const SITEMAP = `${BASE}/post-sitemap.xml`;
const SOURCE = 'it';

async function getRecipeUrls() {
  console.log('[inspiredtaste] Fetching sitemap...');
  const xml = await fetchHtml(SITEMAP);
  const urls = [...xml.matchAll(/<loc>(https:\/\/www\.inspiredtaste\.net\/\d+\/[^<]+)<\/loc>/g)]
    .map(m => m[1])
    .filter(u => !u.includes('category') && !u.includes('tag') && !u.includes('author'));
  console.log(`[inspiredtaste] Found ${urls.length} recipe URLs`);
  return urls;
}

function parseIngredientsFromHtml($) {
  const ingredients = [];

  // Try structured ingredient list
  $('.itr-ingredients li, .wprm-recipe-ingredient, .tasty-recipes-ingredients li').each((_, el) => {
    const text = $(el).text().trim();
    if (text) {
      const ingredientId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
      // Try to split quantity
      const match = text.match(/^([\d¼½¾⅓⅔\/\s\.]+(?:cup|cups|tbsp|tsp|oz|lb|lbs|g|kg|ml|l|clove|cloves|slice|slices|piece|pieces|large|medium|small|pinch|handful|bunch)?s?\.?)\s+(.+)$/i);
      if (match) {
        ingredients.push({ ingredientId, name: match[2].trim(), quantity: match[1].trim() });
      } else {
        ingredients.push({ ingredientId, name: text, quantity: '' });
      }
    }
  });

  return ingredients;
}

function parseStepsFromHtml($) {
  const steps = [];
  $('.itr-instructions li, .wprm-recipe-instruction-text, .tasty-recipes-instructions li').each((_, el) => {
    const text = $(el).text().trim();
    if (text) steps.push(text);
  });
  return steps;
}

function parseTimeFromHtml($) {
  const prep = $('.wprm-recipe-prep_time, .itr-prep-time').first().text().trim();
  const cook = $('.wprm-recipe-cook_time, .itr-cook-time').first().text().trim();
  const total = $('.wprm-recipe-total_time, .itr-total-time').first().text().trim();
  const toMin = (s) => {
    if (!s) return 0;
    const h = s.match(/(\d+)\s*hour/i);
    const m = s.match(/(\d+)\s*min/i);
    return (h ? parseInt(h[1]) * 60 : 0) + (m ? parseInt(m[1]) : 0);
  };
  return {
    prepMins: toMin(prep),
    cookMins: toMin(cook),
    totalMinutes: toMin(total),
  };
}

function tryJsonLd(html) {
  const match = html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  if (!match) return null;
  for (const m of match) {
    try {
      const inner = m.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      const json = JSON.parse(inner);
      const candidates = Array.isArray(json) ? json : [json];
      for (const c of candidates) {
        if (c['@type'] === 'Recipe') return c;
      }
    } catch (_) {}
  }
  return null;
}

async function scrapeRecipe(url) {
  if (urlScraped(url)) { console.log(`  [skip] ${url}`); return; }

  try {
    await sleep(1500);
    const html = await fetchHtml(url);
    const $ = cheerio.load(html);
    const id = makeId(SOURCE, url);

    // Try JSON-LD first
    const jsonLd = tryJsonLd(html);

    let name, description, ingredients, rawSteps, time, calories, servings, imageUrl;

    if (jsonLd) {
      name = jsonLd.name || $('h1').first().text().trim();
      description = jsonLd.description || '';
      ingredients = (jsonLd.recipeIngredient || []).map(line => {
        const cleaned = line.trim();
        const ingredientId = cleaned.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
        const match = cleaned.match(/^([\d¼½¾⅓⅔\/\s\.]+(?:cup|cups|tbsp|tsp|oz|lb|g|kg|ml|clove|cloves|large|medium|small|pinch|handful)?s?\.?)\s+(.+)$/i);
        if (match) return { ingredientId, name: match[2].trim(), quantity: match[1].trim() };
        return { ingredientId, name: cleaned, quantity: '' };
      });
      rawSteps = Array.isArray(jsonLd.recipeInstructions)
        ? jsonLd.recipeInstructions.map(s => typeof s === 'string' ? s : (s.text || ''))
        : [];
      const parseIso = (iso) => {
        if (!iso) return 0;
        const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        return m ? (parseInt(m[1] || 0) * 60) + parseInt(m[2] || 0) : 0;
      };
      time = {
        prepMins: parseIso(jsonLd.prepTime),
        cookMins: parseIso(jsonLd.cookTime),
        totalMinutes: parseIso(jsonLd.totalTime),
      };
      calories = jsonLd.nutrition?.calories
        ? parseInt(jsonLd.nutrition.calories.toString().replace(/[^0-9]/g, ''))
        : null;
      servings = jsonLd.recipeYield
        ? parseInt(jsonLd.recipeYield.toString().replace(/[^0-9]/g, '')) || 2
        : 2;
      imageUrl = Array.isArray(jsonLd.image)
        ? (jsonLd.image[0]?.url || jsonLd.image[0])
        : (jsonLd.image?.url || jsonLd.image);
    } else {
      name = $('h1').first().text().trim() || 'Untitled';
      description = $('meta[name="description"]').attr('content') || '';
      ingredients = parseIngredientsFromHtml($);
      rawSteps = parseStepsFromHtml($);
      time = parseTimeFromHtml($);
      imageUrl = $('meta[property="og:image"]').attr('content');
    }

    const totalMinutes = time.totalMinutes || time.prepMins + time.cookMins || 30;
    const timeBreakdown = {
      sections: [],
      totalMinutes,
    };
    if (time.prepMins) timeBreakdown.sections.push({ type: 'preparing', minutes: time.prepMins });
    if (time.cookMins) timeBreakdown.sections.push({ type: 'cooking', minutes: time.cookMins });

    const sections = buildSections(rawSteps.filter(Boolean), { totalMinutes });
    const allText = [name, description, ...rawSteps].join(' ');
    const tags = detectTags(allText);
    const mealTimes = guessMealTimes(name, tags, totalMinutes);

    let imageFile = null;
    if (imageUrl) imageFile = await downloadImage(imageUrl, id);

    insertRecipe({
      id, name,
      description,
      source_url: url,
      image_file: imageFile,
      calories: calories || null,
      servings: servings || 2,
      total_minutes: totalMinutes,
      meal_times: mealTimes,
      tags,
      ingredients,
      sections,
      time_breakdown: timeBreakdown,
      source: 'inspiredtaste',
    });

    markUrlDone(url);
    console.log(`  [ok] ${name}`);
  } catch (err) {
    markUrlError(url, err.message);
    console.error(`  [error] ${url}: ${err.message}`);
  }
}

async function run() {
  const urls = await getRecipeUrls();
  for (let i = 0; i < urls.length; i++) {
    process.stdout.write(`[inspiredtaste] ${i + 1}/${urls.length} `);
    await scrapeRecipe(urls[i]);
  }
  console.log('[inspiredtaste] Done.');
}

module.exports = { run };
