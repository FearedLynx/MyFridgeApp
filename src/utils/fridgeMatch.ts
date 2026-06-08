import { Recipe, FridgeItem, MatchResult, RecipeIngredient } from '../types';
import { substitutionGroups } from '../data/substitutionGroups';

// ─── Pantry staples assumed to always be available ────────────────────────────
const SKIP_IDS = new Set([
  // Basic seasoning
  'salt', 'black-pepper', 'white-pepper', 'sea-salt', 'flaky-salt', 'water',
  // Dried spices — everyone's pantry
  'cumin', 'paprika', 'smoked-paprika', 'turmeric', 'coriander',
  'oregano', 'thyme', 'rosemary', 'bay-leaves', 'cinnamon', 'nutmeg',
  'chili-flakes', 'cayenne', 'garlic-powder', 'onion-powder',
  'garam-masala', 'cardamom', 'allspice', 'cloves', 'fennel-seeds',
  'cumin-seeds', 'mustard-seeds', 'herbs-de-provence', 'italian-herbs',
  'mixed-herbs', 'curry-powder', 'ras-el-hanout', 'za-atar', 'zaatar',
  'tikka-paste', 'shawarma-spice-blend', 'fajita-seasoning',
  'fajita-spice', 'greek-seasoning', 'tandoori-spice',
  // Baking staples
  'baking-powder', 'baking-soda', 'vanilla', 'vanilla-extract', 'cornstarch',
  // Garnishes / optional toppings
  'fresh-parsley', 'fresh-basil', 'fresh-dill', 'basil-leaves',
]);

// ─── Words to strip when fuzzy-matching ingredient names ─────────────────────
const STRIP_WORDS = new Set([
  'fresh', 'dried', 'canned', 'frozen', 'ground', 'baby', 'large', 'medium',
  'small', 'mini', 'cherry', 'whole', 'sliced', 'diced', 'chopped', 'minced',
  'shredded', 'boneless', 'skinless', 'cooked', 'raw', 'ripe', 'organic',
  'mixed', 'all-purpose', 'plain', 'self-raising', 'long-grain', 'short-grain',
]);

/** Extract core words from an ingredient name for fuzzy comparison */
function coreWords(name: string): string[] {
  return name
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STRIP_WORDS.has(w));
}

/** True if two ingredient names share at least one meaningful word */
function fuzzyNameMatch(a: string, b: string): boolean {
  const wa = coreWords(a);
  const wb = coreWords(b);
  return wa.some(w => wb.includes(w));
}

/** Resolve all substitution groups for a fridge item */
function fridgeGroups(item: FridgeItem): Set<string> {
  const groups = new Set<string>();
  for (const [group, members] of Object.entries(substitutionGroups)) {
    if (members.includes(item.ingredientId)) groups.add(group);
  }
  return groups;
}

/** Resolve substitution group for a recipe ingredient */
function recipeGroups(ing: RecipeIngredient): Set<string> {
  const groups = new Set<string>();
  // From explicit substitutionGroup field
  if (ing.substitutionGroup) groups.add(ing.substitutionGroup);
  // Auto-detect from ingredient ID
  for (const [group, members] of Object.entries(substitutionGroups)) {
    if (members.includes(ing.ingredientId)) groups.add(group);
  }
  return groups;
}

function checkIngredient(
  needed: RecipeIngredient,
  fridge: FridgeItem[],
): { satisfied: boolean; substitution?: { needed: string; using: string } } {

  // 1. Exact ID match
  if (fridge.some(f => f.ingredientId === needed.ingredientId)) {
    return { satisfied: true };
  }

  // 2. Fuzzy name match (e.g. "tomatoes" matches "canned tomatoes")
  const fuzzyHit = fridge.find(f => fuzzyNameMatch(f.name, needed.name));
  if (fuzzyHit) {
    return { satisfied: true };
  }

  // 3. Substitution group match — show a swap suggestion
  const neededGroups = recipeGroups(needed);
  if (neededGroups.size > 0) {
    for (const item of fridge) {
      const itemGroups = fridgeGroups(item);
      const sharedGroup = [...neededGroups].find(g => itemGroups.has(g));
      if (sharedGroup) {
        return {
          satisfied: true,
          substitution: { needed: needed.name, using: item.name },
        };
      }
    }
  }

  return { satisfied: false };
}

// ─── "Almost there" = missing at most 3 non-trivial ingredients ──────────────
const NEAR_THRESHOLD = 3;

export function matchRecipes(recipes: Recipe[], fridge: FridgeItem[]): MatchResult[] {
  const results: MatchResult[] = [];

  for (const recipe of recipes) {
    const missing: RecipeIngredient[] = [];
    const substitutions: { needed: string; using: string }[] = [];

    for (const ing of recipe.ingredients) {
      // Skip pantry staples
      if (SKIP_IDS.has(ing.ingredientId)) continue;
      // Also skip by name for generated IDs that might differ slightly
      const nameLower = ing.name.toLowerCase().replace(/\s+/g, '-');
      if (SKIP_IDS.has(nameLower)) continue;

      const check = checkIngredient(ing, fridge);
      if (check.satisfied) {
        if (check.substitution) substitutions.push(check.substitution);
      } else {
        missing.push(ing);
      }
    }

    if (missing.length === 0) {
      results.push({ recipe, matchType: 'exact', missingIngredients: [], substitutions });
    } else if (missing.length <= NEAR_THRESHOLD) {
      results.push({ recipe, matchType: 'near', missingIngredients: missing, substitutions });
    }
  }

  results.sort((a, b) => {
    if (a.matchType !== b.matchType) return a.matchType === 'exact' ? -1 : 1;
    return a.missingIngredients.length - b.missingIngredients.length;
  });

  return results;
}
