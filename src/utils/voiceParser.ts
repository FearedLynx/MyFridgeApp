/**
 * Parses a speech transcript into ingredient add/remove actions.
 *
 * Examples:
 *   "I've got butter, olive oil and some garlic"
 *   → { action: 'add', items: ['butter', 'olive oil', 'garlic'] }
 *
 *   "I ran out of butter, coriander and carrots"
 *   → { action: 'remove', items: ['butter', 'coriander', 'carrots'] }
 *
 *   "I have eggs and milk but I've run out of flour"
 *   → [{ action: 'add', items: ['eggs', 'milk'] }, { action: 'remove', items: ['flour'] }]
 */

export interface ParsedAction {
  action: 'add' | 'remove';
  items: string[];
}

// Phrases that switch context to REMOVE
const REMOVE_TRIGGERS = [
  "run out of", "ran out of", "out of", "no more", "used up", "finished the",
  "finished my", "don't have", "dont have", "haven't got", "havent got",
  "no longer have", "all out of", "used the last", "none left",
];

// Phrases that switch context to ADD
const ADD_TRIGGERS = [
  "i have", "i've got", "i got", "i see", "there's", "there is",
  "i can see", "i also have", "also got", "got some", "got a",
  "there's also", "i still have", "still got",
];

// Words to ignore / strip
const FILLER_WORDS = new Set([
  "a", "an", "the", "some", "maybe", "perhaps", "probably", "also",
  "and", "but", "or", "with", "plus", "got", "have", "see", "there",
  "i", "its", "it's", "my", "our", "like", "bit", "little", "few",
  "quite", "pretty", "very", "just", "only", "ive", "i've",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z\s']/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 0);
}

function extractIngredientName(phrase: string): string {
  const words = tokenize(phrase).filter(w => !FILLER_WORDS.has(w));
  return words.join(' ').trim();
}

function splitOnTriggers(text: string): { part: string; context: 'add' | 'remove' }[] {
  const lower = text.toLowerCase();
  const segments: { index: number; trigger: string; action: 'add' | 'remove' }[] = [];

  for (const t of REMOVE_TRIGGERS) {
    let idx = lower.indexOf(t);
    while (idx !== -1) {
      segments.push({ index: idx, trigger: t, action: 'remove' });
      idx = lower.indexOf(t, idx + 1);
    }
  }

  for (const t of ADD_TRIGGERS) {
    let idx = lower.indexOf(t);
    while (idx !== -1) {
      segments.push({ index: idx, trigger: t, action: 'add' });
      idx = lower.indexOf(t, idx + 1);
    }
  }

  if (segments.length === 0) {
    return [{ part: text, context: 'add' }];
  }

  segments.sort((a, b) => a.index - b.index);

  const parts: { part: string; context: 'add' | 'remove' }[] = [];
  let currentContext: 'add' | 'remove' = 'add';
  let lastEnd = 0;

  for (const seg of segments) {
    const before = text.slice(lastEnd, seg.index).trim();
    if (before) parts.push({ part: before, context: currentContext });
    currentContext = seg.action;
    lastEnd = seg.index + seg.trigger.length;
  }

  const remaining = text.slice(lastEnd).trim();
  if (remaining) parts.push({ part: remaining, context: currentContext });

  return parts;
}

function parseItems(text: string): string[] {
  // Split on commas, "and", "or", semicolons
  const raw = text
    .split(/,|;|\band\b|\bor\b/i)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return raw
    .map(s => extractIngredientName(s))
    .filter(s => s.length > 0 && !FILLER_WORDS.has(s));
}

export function parseTranscript(transcript: string): ParsedAction[] {
  const segments = splitOnTriggers(transcript);
  const actions: ParsedAction[] = [];

  for (const seg of segments) {
    const items = parseItems(seg.part);
    if (items.length === 0) continue;

    const last = actions[actions.length - 1];
    if (last && last.action === seg.context) {
      last.items.push(...items);
    } else {
      actions.push({ action: seg.context, items });
    }
  }

  return actions;
}

/** Capitalise first letter of each word */
export function capitalize(s: string): string {
  return s.replace(/\b\w/g, c => c.toUpperCase());
}
