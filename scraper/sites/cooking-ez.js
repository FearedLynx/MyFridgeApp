/**
 * Scraper for cooking-ez.com
 * Parses the PHP-based site with numbered recipe stages.
 */
const cheerio = require('cheerio');
const { fetchHtml, downloadImage, makeId, detectTags, guessMealTimes, buildSections, sleep } = require('../utils');
const { urlScraped, markUrlDone, markUrlError, insertRecipe } = require('../db');

const BASE = 'https://cooking-ez.com';
const SITEMAP = `${BASE}/sitemap.xml`;
const SOURCE = 'cez';

async function getRecipeUrls() {
  console.log('[cooking-ez] Fetching sitemap...');
  const xml = await fetchHtml(SITEMAP);
  const urls = [...xml.matchAll(/<loc>(https:\/\/cooking-ez\.com\/[^<]+recipe-[^<]+\.php)<\/loc>/g)]
    .map(m => m[1]);
  console.log(`[cooking-ez] Found ${urls.length} recipe URLs`);
  return urls;
}

function parseTime($) {
  const times = { prepMins: 0, cookMins: 0, totalMinutes: 0 };
  $('td, li, span, div').each((_, el) => {
    const text = $(el).text().trim();
    const prep = text.match(/preparation[:\s]+(\d+)\s*(?:min|minute)/i);
    const cook = text.match(/cooking[:\s]+(\d+)\s*(?:min|minute)/i);
    const total = text.match(/total[:\s]+(\d+)\s*(?:min|minute)/i);
    if (prep) times.prepMins = parseInt(prep[1]);
    if (cook) times.cookMins = parseInt(cook[1]);
    if (total) times.totalMinutes = parseInt(total[1]);
  });
  times.totalMinutes = times.totalMinutes || times.prepMins + times.cookMins || 30;
  return times;
}

function parseIngredients($) {
  const ingredients = [];
  // cooking-ez uses an ingredients section with images + text
  $('li, .ingredient, [class*="ingred"]').each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    // Filter: must look like an ingredient (short, has quantity or food word)
    if (!text || text.length > 100 || text.length < 3) return;
    if (/^\d+\./.test(text)) return; // skip numbered steps

    const ingredientId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60);
    const match = text.match(/^([\d¼½¾⅓⅔\/\s\.]+(?:g|kg|ml|l|tablespoon|teaspoon|tbsp|tsp|cup|cups|oz|lb|glass|handful|pinch|clove|cloves)?s?\.?)\s+(.+)$/i);
    if (match && match[2].length > 2) {
      ingredients.push({ ingredientId: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 60), name: match[2].trim(), quantity: match[1].trim() });
    } else if (text.length < 60) {
      ingredients.push({ ingredientId, name: text, quantity: '' });
    }
  });
  return ingredients.slice(0, 30); // cap at 30 ingredients
}

function parseSteps($) {
  const steps = [];
  // Stages are numbered divs/sections
  $('[class*="etape"], [id*="stage"], [class*="stage"], ol li').each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text && text.length > 10 && text.length < 600) {
      steps.push(text);
    }
  });
  // Fallback: numbered list items
  if (steps.length < 2) {
    $('ol li').each((_, el) => {
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (text && text.length > 10) steps.push(text);
    });
  }
  return steps;
}

function parseCalories($) {
  let cal = null;
  $('td, span, div').each((_, el) => {
    const text = $(el).text();
    const match = text.match(/(\d{2,4})\s*kcal/i);
    if (match) { cal = parseInt(match[1]); return false; }
  });
  return cal;
}

function parseServings($) {
  let servings = 4;
  $('td, span, div').each((_, el) => {
    const text = $(el).text();
    const match = text.match(/(\d+)\s*(?:serving|person|people|portion)/i);
    if (match) { servings = parseInt(match[1]); return false; }
  });
  return servings;
}

function findImage($, url) {
  // cooking-ez has zoom images at /images/recettes/zoom/...
  const zoom = $('img[src*="/zoom/"]').first().attr('src');
  if (zoom) return zoom.startsWith('http') ? zoom : `${BASE}${zoom}`;
  const og = $('meta[property="og:image"]').attr('content');
  if (og) return og;
  const firstImg = $('img[src*="recettes"]').first().attr('src');
  if (firstImg) return firstImg.startsWith('http') ? firstImg : `${BASE}${firstImg}`;
  return null;
}

async function scrapeRecipe(url) {
  if (urlScraped(url)) { console.log(`  [skip] ${url}`); return; }

  try {
    await sleep(1500);
    const html = await fetchHtml(url);
    const $ = cheerio.load(html);
    const id = makeId(SOURCE, url);

    const name = $('h1').first().text().trim() || $('title').text().split('-')[0].trim() || 'Untitled';
    const description = $('meta[name="description"]').attr('content') || '';

    const time = parseTime($);
    const ingredients = parseIngredients($);
    const rawSteps = parseSteps($);
    const calories = parseCalories($);
    const servings = parseServings($);
    const imageUrl = findImage($, url);

    const timeBreakdown = {
      sections: [],
      totalMinutes: time.totalMinutes,
    };
    if (time.prepMins) timeBreakdown.sections.push({ type: 'preparing', minutes: time.prepMins });
    if (time.cookMins) timeBreakdown.sections.push({ type: 'cooking', minutes: time.cookMins });
    if (!timeBreakdown.sections.length) timeBreakdown.sections.push({ type: 'cooking', minutes: time.totalMinutes });

    const sections = buildSections(rawSteps, { totalMinutes: time.totalMinutes });
    const allText = [name, description, ...rawSteps].join(' ');
    const tags = detectTags(allText);
    const mealTimes = guessMealTimes(name, tags, time.totalMinutes);

    let imageFile = null;
    if (imageUrl) imageFile = await downloadImage(imageUrl, id);

    insertRecipe({
      id, name,
      description,
      source_url: url,
      image_file: imageFile,
      calories,
      servings,
      total_minutes: time.totalMinutes,
      meal_times: mealTimes,
      tags,
      ingredients,
      sections,
      time_breakdown: timeBreakdown,
      source: 'cooking-ez',
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
    process.stdout.write(`[cooking-ez] ${i + 1}/${urls.length} `);
    await scrapeRecipe(urls[i]);
  }
  console.log('[cooking-ez] Done.');
}

module.exports = { run };
