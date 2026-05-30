/**
 * Post-processing image cleaner.
 *
 * Scans every downloaded image using OCR (Tesseract.js).
 * If ANY text is detected → deletes the image file and sets image_file = NULL in the DB.
 *
 * Usage:
 *   node cleanImages.js           — process all images
 *   node cleanImages.js --dry-run — show what would be deleted, don't actually delete
 */

const { createWorker } = require('tesseract.js');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const IMAGES_DIR = path.join(__dirname, 'images');
const DB_PATH = path.join(__dirname, 'recipes.db');
const DRY_RUN = process.argv.includes('--dry-run');

// Minimum OCR confidence to count a word as "real text"
const CONFIDENCE_THRESHOLD = 60;
// Minimum number of confident words to reject the image
const WORD_COUNT_THRESHOLD = 1;

async function analyzeImage(filepath) {
  try {
    // Pre-process: resize to max 800px wide for speed, convert to greyscale
    const buffer = await sharp(filepath)
      .resize({ width: 800, withoutEnlargement: true })
      .greyscale()
      .toBuffer();

    return buffer;
  } catch (err) {
    console.warn(`  [sharp error] ${path.basename(filepath)}: ${err.message}`);
    return null;
  }
}

function hasText(ocrData) {
  if (!ocrData || !ocrData.data || !ocrData.data.words) return false;

  const confidentWords = ocrData.data.words.filter(w =>
    w.confidence >= CONFIDENCE_THRESHOLD &&
    w.text.trim().length >= 2 &&          // ignore single chars
    /[a-zA-Z]/.test(w.text)              // must contain a letter
  );

  return confidentWords.length >= WORD_COUNT_THRESHOLD;
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.log('No images folder found. Run the scraper first.');
    process.exit(0);
  }

  const db = new Database(DB_PATH);
  const clearImageStmt = db.prepare('UPDATE recipes SET image_file = NULL WHERE image_file = ?');

  const files = fs.readdirSync(IMAGES_DIR).filter(f =>
    /\.(jpg|jpeg|png|webp|gif)$/i.test(f)
  );

  if (files.length === 0) {
    console.log('No images found yet. Run after scraper completes.');
    process.exit(0);
  }

  console.log(`\nScanning ${files.length} images for text...`);
  if (DRY_RUN) console.log('DRY RUN — nothing will be deleted\n');

  const worker = await createWorker('eng', 1, {
    logger: () => {},          // suppress tesseract logs
  });

  let removed = 0;
  let kept = 0;
  let errors = 0;

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const filepath = path.join(IMAGES_DIR, filename);

    process.stdout.write(`[${i + 1}/${files.length}] ${filename} — `);

    const buffer = await analyzeImage(filepath);
    if (!buffer) {
      console.log('skipped (read error)');
      errors++;
      continue;
    }

    try {
      const result = await worker.recognize(buffer);
      const textFound = hasText(result);

      if (textFound) {
        const words = result.data.words
          .filter(w => w.confidence >= CONFIDENCE_THRESHOLD && /[a-zA-Z]/.test(w.text))
          .map(w => w.text)
          .slice(0, 6)
          .join(', ');

        console.log(`REJECTED — text detected: "${words}"`);

        if (!DRY_RUN) {
          fs.unlinkSync(filepath);
          clearImageStmt.run(filename);
        }
        removed++;
      } else {
        console.log('ok');
        kept++;
      }
    } catch (err) {
      console.log(`error: ${err.message}`);
      errors++;
    }
  }

  await worker.terminate();

  console.log(`\n=== Done ===`);
  console.log(`Images kept    : ${kept}`);
  console.log(`Images removed : ${removed}`);
  console.log(`Errors         : ${errors}`);
  if (DRY_RUN) console.log('\n(Dry run — nothing was deleted. Re-run without --dry-run to apply.)');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
