/**
 * Scraper for food-illustrated.com
 * Uses JSON-LD schema.org/Recipe markup — cleanest source.
 */
const cheerio = require('cheerio');
const { fetchHtml, downloadImage, makeId, detectTags, guessMealTimes, buildSections, sleep } = require('../utils');
const { urlScraped, markUrlDone, markUrlError, insertRecipe } = require('../db');

const BASE = 'https://food-illustrated.com';
const SITEMAP = `${BASE}/recipe-sitemap.xml`;
const SOURCE = 'fi';

async function getRecipeUrls() {
  console.log('[food-illustrated] Fetching sitemap...');
  const xml = await fetchHtml(SITEMAP);
  const urls = [...xml.matchAll(/<loc>(https:\/\/food-illustrated\.com\/recipe\/[^<]+)<\/loc>/g)]
    .map(m => m[1]);
  console.log(`[food-illustrated] Found ${urls.length} recipe URLs`);
  return urls;
}

function extractJsonLd(html) {
  const $ = cheerio.load(html);
  let data = null;
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const json = JSON.parse($(el).html());
      const candidates = Array.isArray(json) ? json : [json];
      for (const c of candidates) {
        if (c['@type'] === 'Recipe' || (Array.isArray(c['@type']) && c['@type'].includes('Recipe'))) {
          data = c;
        }
      }
    } catch (_) {}
  });
  return data;
}

function parseIngredients(raw = []) {
  return raw.map((line, i) => {
    const cleaned = line.trim();
    // Try to split quantity from name: "2 tbsp olive oil" → qty="2 tbsp", name="olive oil"
    const match = cleaned.match(/^([\d¼½¾⅓⅔\s\/\.]+(?:cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|cloves|slice|slices|piece|pieces|large|medium|small|pinch|handful|bunch)?s?\.?)\s+(.+)$/i);
    const ingredientId = cleaned.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
    if (match) {
      return { ingredientId, name: match[2].trim(), quantity: match[1].trim() };
    }
    return { ingredientId, name: cleaned, quantity: '' };
  });
}

function parseTags(recipe) {
  const tagSources = [
    recipe.keywords || '',
    recipe.recipeCategory || '',
    recipe.recipeCuisine || '',
    ...(recipe.suitableForDiet || []),
  ].join(' ');
  return detectTags(tagSources);
}

async function scrapeRecipe(url) {
  if (urlScraped(url)) { console.log(`  [skip] ${url}`); return; }

  try {
    await sleep(1200);
    const html = await fetchHtml(url);
    const data = extractJsonLd(html);

    if (!data) {
      markUrlError(url, 'No JSON-LD found');
      console.warn(`  [no JSON-LD] ${url}`);
      return;
    }

    const id = makeId(SOURCE, url);
    const name = data.name || 'Untitled';

    // Time
    const parseIso = (iso) => {
      if (!iso) return 0;
      const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
      if (!match) return 0;
      return (parseInt(match[1] || 0) * 60) + parseInt(match[2] || 0);
    };
    const prepMins = parseIso(data.prepTime);
    const cookMins = parseIso(data.cookTime);
    const totalMinutes = parseIso(data.totalTime) || prepMins + cookMins || 30;

    // Ingredients
    const ingredients = parseIngredients(data.recipeIngredient || []);

    // Steps
    let rawSteps = [];
    if (data.recipeInstructions) {
      if (typeof data.recipeInstructions === 'string') {
        rawSteps = data.recipeInstructions.split(/\.\s+/).filter(Boolean);
      } else if (Array.isArray(data.recipeInstructions)) {
        rawSteps = data.recipeInstructions.map(s =>
          typeof s === 'string' ? s : (s.text || s.name || '')
        ).filter(Boolean);
      }
    }

    const timeBreakdown = {
      sections: [],
      totalMinutes,
    };
    if (prepMins) timeBreakdown.sections.push({ type: 'preparing', minutes: prepMins });
    if (cookMins) timeBreakdown.sections.push({ type: 'cooking', minutes: cookMins });

    const sections = buildSections(rawSteps, { totalMinutes });

    // Tags & mealtime
    const tags = parseTags(data);
    const mealTimes = guessMealTimes(name, tags, totalMinutes);

    // Calories
    const calories = data.nutrition?.calories
      ? parseInt(data.nutrition.calories.toString().replace(/[^0-9]/g, ''))
      : null;

    const servings = data.recipeYield
      ? parseInt(data.recipeYield.toString().replace(/[^0-9]/g, '')) || 2
      : 2;

    // Image
    let imageFile = null;
    const imageUrl = Array.isArray(data.image)
      ? (data.image[0]?.url || data.image[0])
      : (data.image?.url || data.image);
    if (imageUrl) {
      imageFile = await downloadImage(imageUrl, id);
    }

    insertRecipe({
      id, name,
      description: data.description || '',
      source_url: url,
      image_file: imageFile,
      calories,
      servings,
      total_minutes: totalMinutes,
      meal_times: mealTimes,
      tags,
      ingredients,
      sections,
      time_breakdown: timeBreakdown,
      source: 'food-illustrated',
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
    process.stdout.write(`[food-illustrated] ${i + 1}/${urls.length} `);
    await scrapeRecipe(urls[i]);
  }
  console.log('[food-illustrated] Done.');
}

module.exports = { run };
