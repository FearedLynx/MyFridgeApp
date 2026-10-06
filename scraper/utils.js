const axios = require('axios');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'images');
if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
};

/** Polite delay between requests */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Fetch HTML with retries */
async function fetchHtml(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await axios.get(url, {
        headers: HEADERS,
        timeout: 15000,
        maxRedirects: 5,
      });
      return res.data;
    } catch (err) {
      if (i === retries - 1) throw err;
      await sleep(2000 * (i + 1));
    }
  }
}

/** Download and save an image. Returns filename or null on failure. */
async function downloadImage(imageUrl, recipeId) {
  try {
    const ext = imageUrl.split('?')[0].split('.').pop().replace(/[^a-z]/gi, '') || 'jpg';
    const filename = `${recipeId}.${ext}`;
    const filepath = path.join(IMAGES_DIR, filename);

    if (fs.existsSync(filepath)) return filename;

    const res = await axios.get(imageUrl, {
      responseType: 'stream',
      headers: HEADERS,
      timeout: 20000,
    });

    await new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(filepath);
      res.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    return filename;
  } catch (err) {
    console.warn(`  Image download failed for ${recipeId}: ${err.message}`);
    return null;
  }
}

/** Generate a slug-based ID from a URL and source name */
function makeId(source, url) {
  const slug = url
    .replace(/https?:\/\/[^/]+/, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 80);
  return `${source}-${slug}`;
}

/**
 * Detect diet tags from ingredient/title/tag text.
 * Returns array of DietTag strings.
 */
function detectTags(text, existingTags = []) {
  const t = text.toLowerCase();
  const tags = new Set(existingTags);

  if (t.includes('vegetarian') || t.includes('veggie')) tags.add('vegetarian');
  if (t.includes('vegan')) { tags.add('vegan'); tags.add('vegetarian'); }
  if (t.includes('low carb') || t.includes('low-carb') || t.includes('keto')) tags.add('low-carb');
  if (t.includes('low calorie') || t.includes('low-calorie') || t.includes('light')) tags.add('low-calorie');
  if (t.includes('high protein') || t.includes('high-protein')) tags.add('high-protein');
  if (t.includes('gluten-free') || t.includes('gluten free')) tags.add('gluten-free');
  if (t.includes('quick') || t.includes('15 min') || t.includes('20 min')) tags.add('quick');

  return [...tags];
}

/**
 * Guess mealtime from recipe name and tags.
 */
function guessMealTimes(name, tags = [], totalMinutes = 0) {
  const t = (name + ' ' + tags.join(' ')).toLowerCase();
  const times = new Set();

  if (t.includes('breakfast') || t.includes('brunch') || t.includes('pancake') ||
      t.includes('oatmeal') || t.includes('egg') || t.includes('waffle') || t.includes('toast')) {
    times.add('breakfast');
  }
  if (t.includes('lunch') || t.includes('salad') || t.includes('sandwich') || t.includes('wrap')) {
    times.add('lunch');
  }
  if (t.includes('dinner') || t.includes('roast') || t.includes('stew') || t.includes('casserole')) {
    times.add('dinner');
  }
  if (t.includes('snack') || t.includes('dip') || t.includes('appetizer') || t.includes('bite')) {
    times.add('snack');
  }
  if (t.includes('dessert') || t.includes('cake') || t.includes('cookie') ||
      t.includes('brownie') || t.includes('ice cream')) {
    times.add('snack');
  }
  if (t.includes('soup') || t.includes('pasta') || t.includes('rice') || t.includes('curry')) {
    times.add('lunch');
    times.add('dinner');
  }

  if (times.size === 0) {
    if (totalMinutes <= 20) { times.add('breakfast'); times.add('snack'); }
    else { times.add('lunch'); times.add('dinner'); }
  }

  return [...times];
}

/**
 * Convert flat steps into our section format.
 * Tries to detect cutting vs cooking steps.
 */
function buildSections(steps, timeBreakdownHint = {}) {
  // Group all steps into sections by keyword detection
  const sectionMap = {
    cutting: [],
    preparing: [],
    cooking: [],
    assembling: [],
    baking: [],
  };

  for (const step of steps) {
    const t = step.toLowerCase();
    if (t.includes('cut') || t.includes('chop') || t.includes('slice') ||
        t.includes('dice') || t.includes('mince') || t.includes('julienne') ||
        t.includes('grate') || t.includes('shred')) {
      sectionMap.cutting.push(step);
    } else if (t.includes('bake') || t.includes('oven') || t.includes('roast') ||
               t.includes('preheat')) {
      sectionMap.baking.push(step);
    } else if (t.includes('mix') || t.includes('combine') || t.includes('stir') ||
               t.includes('whisk') || t.includes('blend') || t.includes('season') ||
               t.includes('marinate') || t.includes('coat')) {
      sectionMap.preparing.push(step);
    } else if (t.includes('serve') || t.includes('plate') || t.includes('garnish') ||
               t.includes('top with') || t.includes('drizzle') || t.includes('assemble')) {
      sectionMap.assembling.push(step);
    } else {
      sectionMap.cooking.push(step);
    }
  }

  const sections = [];
  const totalSteps = steps.length;

  for (const [type, sectionSteps] of Object.entries(sectionMap)) {
    if (sectionSteps.length === 0) continue;
    const ratio = sectionSteps.length / totalSteps;
    const duration = Math.round((timeBreakdownHint.totalMinutes || 30) * ratio);

    sections.push({
      type,
      durationMinutes: Math.max(duration, 1),
      steps: sectionSteps.map(instruction => {
        const step = { instruction };
        // Detect cut style
        const lower = instruction.toLowerCase();
        if (lower.includes('julienne')) step.cutStyle = 'julienne';
        else if (lower.includes('fine dice') || lower.includes('finely dice')) step.cutStyle = 'fine dice';
        else if (lower.includes('mince') || lower.includes('minced')) step.cutStyle = 'mince';
        else if (lower.includes('slice') || lower.includes('sliced')) step.cutStyle = 'slice';
        else if (lower.includes('grate') || lower.includes('grated')) step.cutStyle = 'grate';
        else if (lower.includes('chop') || lower.includes('chopped')) step.cutStyle = 'rough chop';
        else if (lower.includes('dice') || lower.includes('diced')) step.cutStyle = 'fine dice';
        else if (lower.includes('wedge')) step.cutStyle = 'wedge';
        return step;
      }),
    });
  }

  return sections;
}

module.exports = { sleep, fetchHtml, downloadImage, makeId, detectTags, guessMealTimes, buildSections, IMAGES_DIR };
