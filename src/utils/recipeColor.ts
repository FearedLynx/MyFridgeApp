import { Recipe } from '../types';

const CATEGORY_COLORS: Record<string, string> = {
  vegan:       '#10B981',
  vegetarian:  '#22C55E',
  chicken:     '#F59E0B',
  beef:        '#EF4444',
  pork:        '#EC4899',
  fish:        '#3B82F6',
  egg:         '#EAB308',
  pasta:       '#F97316',
  rice:        '#8B5CF6',
  dessert:     '#A855F7',
  bread:       '#D97706',
};

const DEFAULT_COLOR = '#94A3B8';

const KEYWORD_MAP: [string, string][] = [
  // Protein — checked first
  ['chicken', 'chicken'], ['turkey', 'chicken'], ['duck', 'chicken'],
  ['beef', 'beef'], ['steak', 'beef'], ['brisket', 'beef'], ['veal', 'beef'],
  ['ground beef', 'beef'], ['short rib', 'beef'],
  ['pork', 'pork'], ['bacon', 'pork'], [' ham', 'pork'], ['sausage', 'pork'],
  ['chorizo', 'pork'], ['prosciutto', 'pork'], ['pancetta', 'pork'],
  ['salmon', 'fish'], ['tuna', 'fish'], ['cod', 'fish'], ['tilapia', 'fish'],
  ['sea bass', 'fish'], ['halibut', 'fish'], ['anchovy', 'fish'],
  ['shrimp', 'fish'], ['prawn', 'fish'], ['lobster', 'fish'], ['crab', 'fish'],
  ['squid', 'fish'], ['calamari', 'fish'], ['seafood', 'fish'], ['mussels', 'fish'],
  ['lamb', 'beef'], ['mutton', 'beef'],
  // Egg dishes
  ['egg', 'egg'], ['omelette', 'egg'], ['omelette', 'egg'],
  ['frittata', 'egg'], ['quiche', 'egg'], ['shakshuka', 'egg'],
  // Pasta / noodles
  ['pasta', 'pasta'], ['spaghetti', 'pasta'], ['penne', 'pasta'],
  ['fettuccine', 'pasta'], ['linguine', 'pasta'], ['tagliatelle', 'pasta'],
  ['lasagna', 'pasta'], ['lasagne', 'pasta'], ['noodle', 'pasta'],
  ['ramen', 'pasta'], ['udon', 'pasta'], ['gnocchi', 'pasta'], ['ravioli', 'pasta'],
  // Specific dishes
  ['pizza', 'bread'], ['burger', 'beef'], ['hamburger', 'beef'],
  ['rice', 'rice'], ['risotto', 'rice'], ['paella', 'rice'], ['biryani', 'rice'],
  ['pilaf', 'rice'], ['fried rice', 'rice'],
  ['bread', 'bread'], ['toast', 'bread'], ['sandwich', 'bread'],
  ['bagel', 'bread'], ['baguette', 'bread'], ['croissant', 'bread'],
  ['focaccia', 'bread'], ['pita', 'bread'], ['waffle', 'bread'], ['pancake', 'bread'],
  // Desserts
  ['cake', 'dessert'], ['cookie', 'dessert'], ['brownie', 'dessert'],
  ['muffin', 'dessert'], ['cupcake', 'dessert'], ['dessert', 'dessert'],
  ['pudding', 'dessert'], ['mousse', 'dessert'], ['tart', 'dessert'],
  ['pastry', 'dessert'], ['cheesecake', 'dessert'], ['ice cream', 'dessert'],
  ['sorbet', 'dessert'], ['macaron', 'dessert'], ['tiramisu', 'dessert'],
  ['chocolate', 'dessert'], ['oatmeal', 'bread'], ['granola', 'bread'],
];

export function getRecipeColor(recipe: Recipe): string {
  const tags = recipe.tags ?? [];

  if (tags.includes('vegan')) return CATEGORY_COLORS.vegan;
  if (tags.includes('vegetarian')) return CATEGORY_COLORS.vegetarian;

  const nameLower = (recipe.name ?? '').toLowerCase();
  const ingredientText = (recipe.ingredients ?? [])
    .map((i: any) => (i.name ?? '').toLowerCase())
    .join(' ');
  const searchText = `${nameLower} ${ingredientText}`;

  for (const [keyword, category] of KEYWORD_MAP) {
    if (searchText.includes(keyword)) {
      return CATEGORY_COLORS[category] ?? DEFAULT_COLOR;
    }
  }

  return DEFAULT_COLOR;
}
