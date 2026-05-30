import { Recipe, FridgeItem, MatchResult, RecipeIngredient } from '../types';
import { substitutionGroups } from '../data/substitutionGroups';

/**
 * For a given ingredient needed by a recipe, check if the fridge satisfies it.
 * Returns: { satisfied: true } or { satisfied: false }
 * If satisfied via substitution, returns the substitution used.
 */
function checkIngredient(
  needed: RecipeIngredient,
  fridge: FridgeItem[]
): { satisfied: boolean; substitution?: { needed: string; using: string } } {
  // Direct match
  const direct = fridge.find(f => f.ingredientId === needed.ingredientId);
  if (direct) return { satisfied: true };

  // Substitution match — find the group for the needed ingredient
  if (needed.substitutionGroup) {
    const groupMembers = substitutionGroups[needed.substitutionGroup] ?? [];
    const sub = fridge.find(f => groupMembers.includes(f.ingredientId));
    if (sub) {
      return {
        satisfied: true,
        substitution: { needed: needed.name, using: sub.name },
      };
    }
  }

  return { satisfied: false };
}

const SKIP_INGREDIENTS = ['salt', 'black-pepper', 'water'];

export function matchRecipes(recipes: Recipe[], fridge: FridgeItem[]): MatchResult[] {
  const results: MatchResult[] = [];

  for (const recipe of recipes) {
    const missing: RecipeIngredient[] = [];
    const substitutions: { needed: string; using: string }[] = [];

    for (const ing of recipe.ingredients) {
      if (SKIP_INGREDIENTS.includes(ing.ingredientId)) continue;
      const check = checkIngredient(ing, fridge);
      if (check.satisfied) {
        if (check.substitution) substitutions.push(check.substitution);
      } else {
        missing.push(ing);
      }
    }

    if (missing.length === 0) {
      results.push({ recipe, matchType: 'exact', missingIngredients: [], substitutions });
    } else if (missing.length <= 2) {
      results.push({ recipe, matchType: 'near', missingIngredients: missing, substitutions });
    }
  }

  // Exact matches first, then near matches
  results.sort((a, b) => {
    if (a.matchType === b.matchType) return a.missingIngredients.length - b.missingIngredients.length;
    return a.matchType === 'exact' ? -1 : 1;
  });

  return results;
}
