/**
 * MealPlanner Recipe Scraper
 *
 * Usage:
 *   node index.js                  — runs all 3 scrapers
 *   node index.js food-illustrated — runs only food-illustrated.com
 *   node index.js inspiredtaste    — runs only inspiredtaste.net
 *   node index.js cooking-ez       — runs only cooking-ez.com
 *   node index.js stats            — show current DB stats
 */

const fi = require('./sites/food-illustrated');
const it = require('./sites/inspiredtaste');
const cez = require('./sites/cooking-ez');
const { getStats } = require('./db');

const SCRAPERS = {
  'food-illustrated': fi,
  'inspiredtaste': it,
  'cooking-ez': cez,
};

async function main() {
  const arg = process.argv[2];

  if (arg === 'stats') {
    const s = getStats();
    console.log(`\nDatabase stats:`);
    console.log(`  Recipes saved : ${s.total}`);
    console.log(`  URLs scraped  : ${s.done}`);
    console.log(`  Errors        : ${s.errors}\n`);
    return;
  }

  if (arg && SCRAPERS[arg]) {
    console.log(`\nRunning scraper: ${arg}\n`);
    await SCRAPERS[arg].run();
  } else {
    console.log('\nRunning all scrapers...\n');
    for (const [name, scraper] of Object.entries(SCRAPERS)) {
      console.log(`\n=== ${name} ===`);
      await scraper.run();
    }
  }

  const s = getStats();
  console.log(`\n=== Finished ===`);
  console.log(`Recipes in database : ${s.total}`);
  console.log(`URLs scraped        : ${s.done}`);
  console.log(`Errors              : ${s.errors}`);
  console.log(`Database            : scraper/recipes.db`);
  console.log(`Images              : scraper/images/\n`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
