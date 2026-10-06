import { Recipe } from '../types';

export interface RecipeIconInfo {
  name: string;   // MaterialCommunityIcons icon name
  bg: string;     // background color
  color: string;  // icon color
}

const ICONS: Record<string, RecipeIconInfo> = {
  vegan:    { name: 'leaf',           bg: '#D1FAE5', color: '#059669' },
  veg:      { name: 'carrot',         bg: '#FFF7ED', color: '#EA580C' },
  chicken:  { name: 'food-drumstick', bg: '#FEF3C7', color: '#D97706' },
  beef:     { name: 'food-steak',     bg: '#FEE2E2', color: '#DC2626' },
  pork:     { name: 'pig',            bg: '#FCE7F3', color: '#DB2777' },
  fish:     { name: 'fish',           bg: '#DBEAFE', color: '#2563EB' },
  egg:      { name: 'egg-fried',      bg: '#FEFCE8', color: '#CA8A04' },
  pasta:    { name: 'noodles',        bg: '#FFF7ED', color: '#C2410C' },
  rice:     { name: 'rice',           bg: '#F3F4F6', color: '#6B7280' },
  pizza:    { name: 'pizza',          bg: '#FEF3C7', color: '#B45309' },
  burger:   { name: 'hamburger',      bg: '#FEF9C3', color: '#92400E' },
  taco:     { name: 'taco',           bg: '#FFF7ED', color: '#C2410C' },
  bread:    { name: 'bread-slice',    bg: '#FEF3C7', color: '#92400E' },
  dessert:  { name: 'cake-variant',   bg: '#FAE8FF', color: '#9333EA' },
  default:  { name: 'food',           bg: '#F1F5F9', color: '#64748B' },
};

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
  ['squid', 'fish'], ['calamari', 'fish'], ['seafood', 'fish'],
  ['lamb', 'chicken'],   // closest drumstick icon
  ['mutton', 'chicken'],
  // Egg dishes
  ['egg', 'egg'], ['omelette', 'egg'], ['omelette', 'egg'],
  ['frittata', 'egg'], ['quiche', 'egg'], ['shakshuka', 'egg'],
  // Pasta / noodles
  ['pasta', 'pasta'], ['spaghetti', 'pasta'], ['penne', 'pasta'],
  ['fettuccine', 'pasta'], ['linguine', 'pasta'], ['tagliatelle', 'pasta'],
  ['lasagna', 'pasta'], ['lasagne', 'pasta'], ['noodle', 'pasta'],
  ['ramen', 'pasta'], ['udon', 'pasta'], ['gnocchi', 'pasta'], ['ravioli', 'pasta'],
  // Specific dishes
  ['pizza', 'pizza'],
  ['burger', 'burger'], ['hamburger', 'burger'],
  ['taco', 'taco'], ['burrito', 'taco'], ['wrap', 'taco'], ['fajita', 'taco'],
  ['rice', 'rice'], ['risotto', 'rice'], ['paella', 'rice'], ['biryani', 'rice'],
  ['pilaf', 'rice'], ['fried rice', 'rice'],
  ['bread', 'bread'], ['toast', 'bread'], ['sandwich', 'bread'],
  ['bagel', 'bread'], ['baguette', 'bread'], ['croissant', 'bread'],
  ['focaccia', 'bread'], ['pita', 'bread'],
  // Desserts
  ['cake', 'dessert'], ['cookie', 'dessert'], ['brownie', 'dessert'],
  ['muffin', 'dessert'], ['cupcake', 'dessert'], ['dessert', 'dessert'],
  ['pudding', 'dessert'], ['mousse', 'dessert'], ['tart', 'dessert'],
  ['pastry', 'dessert'], ['cheesecake', 'dessert'], ['ice cream', 'dessert'],
  ['sorbet', 'dessert'], ['macaron', 'dessert'], ['tiramisu', 'dessert'],
  ['chocolate', 'dessert'],
];

export function getRecipeIcon(recipe: Recipe): RecipeIconInfo {
  const tags = recipe.tags ?? [];

  // Tags take priority
  if (tags.includes('vegan')) return ICONS.vegan;
  if (tags.includes('vegetarian')) return ICONS.veg;

  // Build a single search string from name + ingredient names
  const nameLower = (recipe.name ?? '').toLowerCase();
  const ingredientText = (recipe.ingredients ?? [])
    .map((i: any) => (i.name ?? '').toLowerCase())
    .join(' ');
  const searchText = `${nameLower} ${ingredientText}`;

  for (const [keyword, category] of KEYWORD_MAP) {
    if (searchText.includes(keyword)) {
      return ICONS[category] ?? ICONS.default;
    }
  }

  return ICONS.default;
}
