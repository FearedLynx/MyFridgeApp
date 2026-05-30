"""
Image quality filter for recipe images.

Rejects images that are:
  1. Too small / low resolution
  2. Blurry
  3. Single ingredient / prep shots (not a finished dish)
  4. Contain text overlay

Rejected images are deleted and recipe image_file set to NULL in the DB.

Usage:
    python filterImages.py             -- process and delete bad images
    python filterImages.py --dry-run   -- show results, no deletions
"""

import os
import sys
import cv2
import numpy as np
import sqlite3

# ── Config ────────────────────────────────────────────────────────────────────

IMAGES_DIR  = os.path.join(os.path.dirname(__file__), 'images')
DB_PATH     = os.path.join(os.path.dirname(__file__), 'recipes.db')
DRY_RUN     = '--dry-run' in sys.argv

# Resolution: reject if either dimension is below these
MIN_WIDTH   = 250
MIN_HEIGHT  = 200

# Sharpness: Laplacian variance — below this = blurry
MIN_SHARPNESS = 35.0

# Color entropy: measure of how "complex" the image is colorwise
# Low = likely a single ingredient on a plain background
MIN_COLOR_ENTROPY = 3.2

# Color variety: number of distinct dominant colors
MIN_DOMINANT_COLORS = 3

# Text detection (requires Tesseract installed)
USE_TESSERACT = False
TESSERACT_PATH = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
TEXT_CONFIDENCE = 75   # raised — reduces false positives from food textures
MAX_TEXT_WORDS  = 3   # allow up to 3 "words" before rejecting (OCR noise tolerance)

# ── Try loading Tesseract ─────────────────────────────────────────────────────

try:
    import pytesseract
    pytesseract.pytesseract.tesseract_cmd = TESSERACT_PATH
    pytesseract.get_tesseract_version()
    USE_TESSERACT = True
    print('[Tesseract] Found — text detection enabled')
except Exception:
    print('[Tesseract] Not found — text detection skipped (install Tesseract binary to enable)')

# ── Checks ────────────────────────────────────────────────────────────────────

def check_resolution(img):
    h, w = img.shape[:2]
    if w < MIN_WIDTH or h < MIN_HEIGHT:
        return False, f'too small ({w}x{h})'
    return True, f'{w}x{h}'


def check_sharpness(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    score = cv2.Laplacian(gray, cv2.CV_64F).var()
    if score < MIN_SHARPNESS:
        return False, f'blurry (sharpness={score:.1f})'
    return True, f'sharpness={score:.1f}'


def color_entropy(img):
    """Shannon entropy of the hue channel histogram."""
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    hist = cv2.calcHist([hsv], [0], None, [180], [0, 180]).flatten()
    hist = hist[hist > 0]
    hist = hist / hist.sum()
    return -np.sum(hist * np.log2(hist))


def dominant_color_count(img, k=8):
    """K-means clustering on pixels — count clusters with >2% of pixels."""
    small = cv2.resize(img, (100, 100))
    pixels = small.reshape(-1, 3).astype(np.float32)
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 20, 1.0)
    _, labels, _ = cv2.kmeans(pixels, k, None, criteria, 5, cv2.KMEANS_RANDOM_CENTERS)
    counts = np.bincount(labels.flatten())
    significant = np.sum(counts > (pixels.shape[0] * 0.02))
    return int(significant)


def check_composition(img):
    """
    Rejects single-ingredient / prep shots.
    Looks for: color variety, multiple distinct regions.
    """
    entropy = color_entropy(img)
    if entropy < MIN_COLOR_ENTROPY:
        return False, f'single ingredient (color entropy={entropy:.2f})'

    dom_colors = dominant_color_count(img)
    if dom_colors < MIN_DOMINANT_COLORS:
        return False, f'too simple ({dom_colors} dominant colors)'

    return True, f'entropy={entropy:.2f}, colors={dom_colors}'


def check_text(img):
    if not USE_TESSERACT:
        return True, 'skipped'
    data = pytesseract.image_to_data(img, output_type=pytesseract.Output.DICT, config='--psm 11')
    words = [
        data['text'][i] for i in range(len(data['text']))
        if (int(data['conf'][i]) if str(data['conf'][i]).lstrip('-').isdigit() else -1) >= TEXT_CONFIDENCE
        and len(data['text'][i].strip()) >= 2
        and any(c.isalpha() for c in data['text'][i])
    ]
    if len(words) > MAX_TEXT_WORDS:
        return False, f'text detected: {", ".join(words[:5])}'
    return True, 'no text'


# ── DB helpers ────────────────────────────────────────────────────────────────

def clear_image_in_db(filename):
    conn = sqlite3.connect(DB_PATH)
    conn.execute('UPDATE recipes SET image_file = NULL WHERE image_file = ?', (filename,))
    conn.commit()
    conn.close()


# ── Main ──────────────────────────────────────────────────────────────────────

def process(filepath):
    img = cv2.imread(filepath)
    if img is None:
        return 'error', 'could not read file'

    # Run checks in order (cheapest first)
    for name, fn in [
        ('resolution',   check_resolution),
        ('sharpness',    check_sharpness),
        ('composition',  check_composition),
        ('text',         check_text),
    ]:
        ok, detail = fn(img)
        if not ok:
            return 'reject', f'{name}: {detail}'

    return 'keep', 'ok'


def main():
    if not os.path.exists(IMAGES_DIR):
        print('No images folder found.')
        return

    files = sorted([
        f for f in os.listdir(IMAGES_DIR)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
    ])

    total  = len(files)
    kept   = 0
    rejected = 0
    errors = 0

    print(f'\nFiltering {total} images...')
    if DRY_RUN:
        print('DRY RUN — nothing will be deleted\n')
    else:
        print()

    for i, filename in enumerate(files):
        filepath = os.path.join(IMAGES_DIR, filename)
        verdict, reason = process(filepath)

        if verdict == 'keep':
            kept += 1
            print(f'[{i+1}/{total}] KEEP    {filename}')
        elif verdict == 'reject':
            rejected += 1
            print(f'[{i+1}/{total}] REJECT  {filename}  —  {reason}')
            if not DRY_RUN:
                os.remove(filepath)
                clear_image_in_db(filename)
        else:
            errors += 1
            print(f'[{i+1}/{total}] ERROR   {filename}  —  {reason}')

    print(f'\n=== Done ===')
    print(f'Kept     : {kept}')
    print(f'Rejected : {rejected}')
    print(f'Errors   : {errors}')
    if DRY_RUN:
        print('\nRe-run without --dry-run to apply deletions.')


if __name__ == '__main__':
    main()
