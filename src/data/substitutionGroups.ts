/**
 * Substitution groups — any ingredient within a group can replace another.
 * Key = group name, value = list of ingredient IDs belonging to that group.
 */
export const substitutionGroups: Record<string, string[]> = {
  oil: [
    'olive-oil',
    'vegetable-oil',
    'sunflower-oil',
    'coconut-oil',
    'rapeseed-oil',
    'avocado-oil',
  ],
  flour: [
    'all-purpose-flour',
    'whole-wheat-flour',
    'spelt-flour',
    'oat-flour',
    'almond-flour',
  ],
  sweetener: [
    'white-sugar',
    'brown-sugar',
    'honey',
    'maple-syrup',
    'agave-syrup',
    'coconut-sugar',
  ],
  milk: [
    'whole-milk',
    'semi-skimmed-milk',
    'oat-milk',
    'almond-milk',
    'soy-milk',
    'coconut-milk',
  ],
  butter: [
    'butter',
    'vegan-butter',
    'margarine',
    'coconut-oil',
  ],
  vinegar: [
    'white-wine-vinegar',
    'apple-cider-vinegar',
    'red-wine-vinegar',
    'balsamic-vinegar',
  ],
  stock: [
    'chicken-stock',
    'vegetable-stock',
    'beef-stock',
  ],
  cheese: [
    'parmesan',
    'pecorino',
    'grana-padano',
  ],
  greenOnion: [
    'spring-onion',
    'chives',
    'green-onion',
  ],
};

/** Returns the group name for a given ingredient ID, or undefined */
export function getSubstitutionGroup(ingredientId: string): string | undefined {
  for (const [group, members] of Object.entries(substitutionGroups)) {
    if (members.includes(ingredientId)) return group;
  }
  return undefined;
}
