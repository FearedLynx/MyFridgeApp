/**
 * Substitution groups — any ingredient within a group can replace another.
 * Key = group name, value = list of ingredient IDs belonging to that group.
 */
export const substitutionGroups: Record<string, string[]> = {

  // ─── FATS & OILS ─────────────────────────────────────────────────────────
  oil: [
    'olive-oil', 'vegetable-oil', 'sunflower-oil', 'coconut-oil',
    'rapeseed-oil', 'avocado-oil', 'canola-oil', 'grapeseed-oil',
  ],
  butter: [
    'butter', 'vegan-butter', 'margarine', 'ghee',
  ],

  // ─── DAIRY & ALTERNATIVES ────────────────────────────────────────────────
  milk: [
    'whole-milk', 'semi-skimmed-milk', 'skimmed-milk',
    'oat-milk', 'almond-milk', 'soy-milk', 'coconut-milk',
    'rice-milk', 'cashew-milk',
  ],
  cream: [
    'heavy-cream', 'double-cream', 'single-cream', 'whipping-cream',
    'sour-cream', 'creme-fraiche', 'coconut-cream',
  ],
  hardCheese: [
    'parmesan', 'pecorino', 'pecorino-romano', 'grana-padano',
    'gruyere', 'gruyère', 'manchego', 'aged-cheddar',
  ],
  softCheese: [
    'ricotta', 'cream-cheese', 'mascarpone', 'cottage-cheese',
    'labneh', 'quark',
  ],
  meltingCheese: [
    'mozzarella', 'cheddar', 'gruyere', 'gruyère', 'fontina',
    'provolone', 'gouda', 'edam',
  ],
  yogurt: [
    'greek-yogurt', 'plain-yogurt', 'yogurt', 'natural-yogurt',
    'skyr', 'sour-cream',
  ],

  // ─── FLOUR & STARCH ──────────────────────────────────────────────────────
  flour: [
    'all-purpose-flour', 'plain-flour', 'whole-wheat-flour',
    'spelt-flour', 'oat-flour', 'almond-flour', 'bread-flour',
  ],
  starch: [
    'cornstarch', 'cornflour', 'arrowroot', 'tapioca-starch', 'potato-starch',
  ],

  // ─── SWEETENERS ──────────────────────────────────────────────────────────
  sweetener: [
    'white-sugar', 'sugar', 'brown-sugar', 'caster-sugar',
    'honey', 'maple-syrup', 'agave-syrup', 'coconut-sugar',
    'golden-syrup',
  ],

  // ─── ACIDS & VINEGARS ────────────────────────────────────────────────────
  vinegar: [
    'white-wine-vinegar', 'apple-cider-vinegar', 'red-wine-vinegar',
    'balsamic-vinegar', 'rice-vinegar', 'sherry-vinegar',
  ],
  citrus: [
    'lemon', 'lime', 'orange', 'lemon-juice', 'lime-juice',
  ],

  // ─── STOCKS & BROTHS ─────────────────────────────────────────────────────
  stock: [
    'chicken-stock', 'vegetable-stock', 'beef-stock', 'fish-stock',
    'chicken-broth', 'vegetable-broth', 'beef-broth',
  ],

  // ─── PASTA & NOODLES ─────────────────────────────────────────────────────
  pasta: [
    'spaghetti', 'penne', 'fettuccine', 'rigatoni', 'tagliatelle',
    'linguine', 'fusilli', 'farfalle', 'pappardelle', 'bucatini',
    'orecchiette', 'conchiglie',
  ],
  noodles: [
    'egg-noodles', 'rice-noodles', 'soba-noodles', 'ramen-noodles',
    'udon-noodles', 'vermicelli-noodles',
  ],

  // ─── GRAINS & RICE ───────────────────────────────────────────────────────
  rice: [
    'white-rice', 'jasmine-rice', 'basmati-rice', 'long-grain-rice',
    'brown-rice', 'arborio-rice', 'paella-rice', 'short-grain-rice',
  ],
  grain: [
    'quinoa', 'farro', 'bulgur-wheat', 'couscous', 'barley',
    'freekeh', 'millet',
  ],
  oats: [
    'rolled-oats', 'oats', 'quick-oats', 'steel-cut-oats', 'porridge-oats',
  ],

  // ─── PROTEINS — POULTRY ──────────────────────────────────────────────────
  chicken: [
    'chicken-breast', 'chicken-breasts', 'chicken-thighs', 'chicken-thigh',
    'chicken-drumstick', 'chicken-leg', 'chicken', 'whole-chicken',
  ],
  turkey: [
    'turkey-breast', 'ground-turkey', 'turkey-mince', 'turkey-thigh',
  ],

  // ─── PROTEINS — RED MEAT ─────────────────────────────────────────────────
  beef: [
    'ground-beef', 'beef-mince', 'beef-mince-500g', 'beef-strips',
    'sirloin-steak', 'ribeye-steak', 'beef-steak', 'steak',
    'beef-chuck', 'beef-tenderloin',
  ],
  pork: [
    'pork-loin', 'pork-chop', 'pork-tenderloin', 'pork-fillet',
    'pork-belly', 'pork-shoulder', 'pork',
  ],
  lamb: [
    'lamb-chops', 'lamb-shoulder', 'lamb-leg', 'lamb', 'lamb-mince',
  ],

  // ─── PROTEINS — FISH & SEAFOOD ───────────────────────────────────────────
  whitefish: [
    'cod', 'tilapia', 'haddock', 'sea-bass', 'halibut',
    'sole', 'pollock', 'snapper', 'bream',
  ],
  salmonFish: [
    'salmon', 'salmon-fillet', 'salmon-fillets', 'trout', 'arctic-char',
  ],
  shellfish: [
    'shrimp', 'prawns', 'prawn', 'lobster', 'crab', 'scallops',
    'langoustine',
  ],
  tuna: [
    'tuna', 'canned-tuna', 'tuna-steak', 'swordfish',
  ],

  // ─── PROTEINS — PLANT ────────────────────────────────────────────────────
  legumes: [
    'chickpeas', 'black-beans', 'cannellini-beans', 'kidney-beans',
    'lentils', 'green-lentils', 'red-lentils', 'white-beans',
    'butter-beans', 'borlotti-beans', 'pinto-beans',
  ],
  tofu: [
    'tofu', 'firm-tofu', 'silken-tofu', 'tempeh',
  ],

  // ─── VEGETABLES — ALLIUMS ────────────────────────────────────────────────
  onion: [
    'onion', 'red-onion', 'white-onion', 'yellow-onion', 'brown-onion',
    'shallot', 'shallots', 'spring-onion', 'spring-onions',
    'green-onion', 'leek',
  ],
  greenOnion: [
    'spring-onion', 'spring-onions', 'chives', 'green-onion', 'scallion',
  ],

  // ─── VEGETABLES — LEAFY GREENS ───────────────────────────────────────────
  leafyGreens: [
    'spinach', 'baby-spinach', 'kale', 'curly-kale', 'arugula',
    'rocket', 'lettuce', 'romaine-lettuce', 'chard', 'swiss-chard',
    'bok-choy', 'pak-choi', 'watercress', 'cavolo-nero',
  ],

  // ─── VEGETABLES — SALAD / CRUNCHY ────────────────────────────────────────
  saladVeg: [
    'cucumber', 'radish', 'celery', 'fennel', 'endive',
    'kohlrabi',
  ],

  // ─── VEGETABLES — TOMATOES ───────────────────────────────────────────────
  tomato: [
    'tomato', 'tomatoes', 'large-tomatoes', 'cherry-tomatoes',
    'canned-tomatoes', 'diced-tomatoes', 'plum-tomatoes',
    'sun-dried-tomatoes', 'tomato-passata', 'crushed-tomatoes',
  ],

  // ─── VEGETABLES — PEPPERS ────────────────────────────────────────────────
  pepper: [
    'bell-pepper', 'red-bell-pepper', 'green-bell-pepper',
    'yellow-bell-pepper', 'orange-bell-pepper', 'red-pepper',
    'green-pepper', 'yellow-pepper', 'roasted-red-pepper',
  ],

  // ─── VEGETABLES — ZUCCHINI / SQUASH ─────────────────────────────────────
  zucchiniSquash: [
    'zucchini', 'courgette', 'yellow-squash', 'pattypan-squash',
  ],

  // ─── VEGETABLES — MUSHROOMS ──────────────────────────────────────────────
  mushroom: [
    'mushrooms', 'button-mushrooms', 'mixed-mushrooms', 'cremini-mushrooms',
    'shiitake', 'portobello', 'oyster-mushroom', 'chestnut-mushrooms',
  ],

  // ─── VEGETABLES — ROOT VEG ───────────────────────────────────────────────
  rootVeg: [
    'carrot', 'carrots', 'parsnip', 'turnip', 'celeriac',
    'sweet-potato', 'swede', 'beetroot',
  ],
  potato: [
    'potato', 'potatoes', 'sweet-potato', 'yukon-gold-potato',
    'russet-potato', 'new-potato',
  ],

  // ─── VEGETABLES — BRASSICAS ──────────────────────────────────────────────
  brassica: [
    'broccoli', 'cauliflower', 'cabbage', 'red-cabbage', 'savoy-cabbage',
    'brussels-sprouts', 'kale', 'kohlrabi',
  ],

  // ─── VEGETABLES — EGGPLANT ───────────────────────────────────────────────
  eggplant: [
    'eggplant', 'aubergine', 'zucchini', 'courgette',
  ],

  // ─── FRESH HERBS ─────────────────────────────────────────────────────────
  freshHerb: [
    'parsley', 'flat-leaf-parsley', 'coriander', 'cilantro',
    'basil', 'mint', 'dill', 'chives', 'tarragon', 'chervil',
  ],
  woodsyHerb: [
    'thyme', 'rosemary', 'oregano', 'sage', 'marjoram', 'bay-leaves',
  ],

  // ─── NUTS & SEEDS ────────────────────────────────────────────────────────
  nuts: [
    'walnuts', 'almonds', 'pine-nuts', 'pistachios', 'cashews',
    'pecans', 'hazelnuts', 'macadamia',
  ],
  seeds: [
    'sesame-seeds', 'sunflower-seeds', 'pumpkin-seeds', 'hemp-seeds',
    'chia-seeds', 'flaxseeds', 'poppy-seeds',
  ],
  nutButter: [
    'peanut-butter', 'almond-butter', 'cashew-butter', 'sunflower-butter',
    'tahini', 'nut-butter',
  ],

  // ─── CONDIMENTS ──────────────────────────────────────────────────────────
  soy: [
    'soy-sauce', 'tamari', 'coconut-aminos', 'liquid-aminos',
  ],
  hotSauce: [
    'sriracha', 'chipotle-sauce', 'tabasco', 'chili-sauce', 'harissa',
    'gochujang', 'sambal',
  ],
};

/** Returns the group name for a given ingredient ID, or undefined */
export function getSubstitutionGroup(ingredientId: string): string | undefined {
  for (const [group, members] of Object.entries(substitutionGroups)) {
    if (members.includes(ingredientId)) return group;
  }
  return undefined;
}
