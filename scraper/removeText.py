"""
Text removal from food images.
Uses Tesseract to detect text regions, then OpenCV inpainting to fill them.

Usage:
    python removeText.py             -- process all images
    python removeText.py --dry-run   -- preview detections only, no changes
"""

import os
import sys
import cv2
import numpy as np
import pytesseract
from PIL import Image

# ── Tesseract path (Windows default) ─────────────────────────────────────────
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

IMAGES_DIR = os.path.join(os.path.dirname(__file__), 'images')
DRY_RUN = '--dry-run' in sys.argv

# Minimum OCR confidence to treat a word as real text
CONFIDENCE = 55
# Padding around detected text box (pixels) — helps catch anti-aliased edges
PADDING = 6


def detect_text_mask(img_bgr):
    """
    Returns a binary mask (same size as img_bgr) where text regions are white.
    """
    h, w = img_bgr.shape[:2]
    mask = np.zeros((h, w), dtype=np.uint8)

    # Run OCR with bounding box data
    data = pytesseract.image_to_data(
        img_bgr,
        output_type=pytesseract.Output.DICT,
        config='--psm 11'   # sparse text — best for overlays
    )

    n = len(data['text'])
    found = 0
    for i in range(n):
        try:
            conf = int(data['conf'][i])
        except (ValueError, TypeError):
            continue

        word = data['text'][i].strip()
        if conf < CONFIDENCE or len(word) < 2 or not any(c.isalpha() for c in word):
            continue

        x, y, bw, bh = data['left'][i], data['top'][i], data['width'][i], data['height'][i]
        # Apply padding, clamp to image bounds
        x1 = max(0, x - PADDING)
        y1 = max(0, y - PADDING)
        x2 = min(w, x + bw + PADDING)
        y2 = min(h, y + bh + PADDING)
        mask[y1:y2, x1:x2] = 255
        found += 1

    return mask, found


def remove_text(img_bgr, mask):
    """
    Inpaint the masked regions using Telea algorithm.
    """
    # Dilate mask slightly to cover text edges
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    mask_dilated = cv2.dilate(mask, kernel, iterations=2)
    result = cv2.inpaint(img_bgr, mask_dilated, inpaintRadius=4, flags=cv2.INPAINT_TELEA)
    return result


def process_image(filepath, dry_run=False):
    img = cv2.imread(filepath)
    if img is None:
        return 'read_error', 0

    # Resize large images for OCR speed, keep original for inpainting
    h, w = img.shape[:2]
    scale = min(1.0, 1200 / max(h, w))
    small = cv2.resize(img, (int(w * scale), int(h * scale))) if scale < 1.0 else img

    mask_small, word_count = detect_text_mask(small)

    if word_count == 0:
        return 'clean', 0

    # Scale mask back up if we resized
    if scale < 1.0:
        mask = cv2.resize(mask_small, (w, h), interpolation=cv2.INTER_NEAREST)
    else:
        mask = mask_small

    if dry_run:
        return 'has_text', word_count

    cleaned = remove_text(img, mask)

    # Save — keep original format
    ext = os.path.splitext(filepath)[1].lower()
    if ext == '.webp':
        # OpenCV webp save
        cv2.imwrite(filepath, cleaned, [cv2.IMWRITE_WEBP_QUALITY, 92])
    else:
        cv2.imwrite(filepath, cleaned, [cv2.IMWRITE_JPEG_QUALITY, 92])

    return 'cleaned', word_count


def main():
    if not os.path.exists(IMAGES_DIR):
        print('No images folder found.')
        return

    files = [
        f for f in os.listdir(IMAGES_DIR)
        if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))
    ]

    if not files:
        print('No images found.')
        return

    total = len(files)
    print(f'\nProcessing {total} images...')
    if DRY_RUN:
        print('DRY RUN — no files will be modified\n')

    counts = {'clean': 0, 'cleaned': 0, 'has_text': 0, 'read_error': 0}

    for i, filename in enumerate(files):
        filepath = os.path.join(IMAGES_DIR, filename)
        status, words = process_image(filepath, dry_run=DRY_RUN)
        counts[status] = counts.get(status, 0) + 1

        label = {
            'clean': 'clean',
            'cleaned': f'cleaned ({words} word{"s" if words != 1 else ""} removed)',
            'has_text': f'HAS TEXT ({words} word{"s" if words != 1 else ""}) [dry run]',
            'read_error': 'ERROR reading file',
        }.get(status, status)

        print(f'[{i+1}/{total}] {filename} — {label}')

    print(f'\n=== Done ===')
    print(f'Clean (no text)  : {counts["clean"]}')
    print(f'Text removed     : {counts["cleaned"]}')
    if DRY_RUN:
        print(f'Would be cleaned : {counts["has_text"]}')
    print(f'Read errors      : {counts["read_error"]}')


if __name__ == '__main__':
    main()
