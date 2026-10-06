import { Recipe } from '../types';

export const recipes: Recipe[] = [
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Avocado Toast — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie'],
    calories: 320,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'pinch' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mash avocado with lemon, salt, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 7,
      steps: [
        { instruction: `Toast bread until golden.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with avocado mixture and chili flakes.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 7 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'oatmeal-with-berries',
    name: 'Oatmeal with Berries',
    description: 'Oatmeal with Berries — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegan', 'low-calorie'],
    calories: 280,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'oat-milk', name: 'oat milk', quantity: '1 cup' },
    { ingredientId: 'mixed-berries', name: 'mixed berries', quantity: '½ cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '½ tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Simmer oats in milk 5 min stirring.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with berries, drizzle honey, dust cinnamon.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs',
    description: 'Scrambled Eggs — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'quick', 'high-protein'],
    calories: 310,
    servings: 2,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '4' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'milk', name: 'milk', quantity: '2 tbsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' },
    { ingredientId: 'chives', name: 'chives', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Whisk eggs with milk, salt, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Melt butter over low heat.` },
        { instruction: `Add eggs, fold slowly until just set.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Top with chives.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'classic-pancakes',
    name: 'Classic Pancakes',
    description: 'Classic Pancakes — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 380,
    servings: 2,
    ingredients: [
    { ingredientId: 'all-purpose-flour', name: 'all-purpose flour', quantity: '1 cup' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' },
    { ingredientId: 'milk', name: 'milk', quantity: '¾ cup' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'baking-powder', name: 'baking powder', quantity: '1 tsp' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '1 tbsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Mix dry ingredients.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Whisk wet ingredients separately.` },
        { instruction: `Combine gently.` },
        { instruction: `Cook ¼ cup portions on medium heat 2 min per side.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Serve with maple syrup.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    description: 'French Toast — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '4 slices' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'milk', name: 'milk', quantity: '¼ cup' },
    { ingredientId: 'vanilla-extract', name: 'vanilla extract', quantity: '1 tsp' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '½ tsp' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'maple-syrup', name: 'maple syrup', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Whisk eggs, milk, vanilla, cinnamon.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Dip bread slices.` },
        { instruction: `Cook in butter 3 min per side until golden.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve with maple syrup.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'greek-yogurt-parfait',
    name: 'Greek Yogurt Parfait',
    description: 'Greek Yogurt Parfait — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegetarian', 'low-calorie', 'high-protein'],
    calories: 290,
    servings: 1,
    ingredients: [
    { ingredientId: 'greek-yogurt', name: 'Greek yogurt', quantity: '1 cup' },
    { ingredientId: 'granola', name: 'granola', quantity: '¼ cup' },
    { ingredientId: 'strawberries', name: 'strawberries', quantity: '½ cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'blueberries', name: 'blueberries', quantity: '¼ cup' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Drizzle honey on top.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Layer yogurt, granola, and berries in a glass.` },
        { instruction: `Serve immediately.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'veggie-omelette',
    name: 'Veggie Omelette',
    description: 'Veggie Omelette — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie', 'high-protein'],
    calories: 260,
    servings: 1,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'bell-pepper', name: 'bell pepper', quantity: '½' },
    { ingredientId: 'mushrooms', name: 'mushrooms', quantity: '4' },
    { ingredientId: 'spinach', name: 'spinach', quantity: 'handful' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Whisk eggs with salt and pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 7,
      steps: [
        { instruction: `Sauté vegetables in oil 3 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Pour eggs over, cook 2 min, fold and serve.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 7 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    description: 'Breakfast Burrito — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein'],
    calories: 520,
    servings: 1,
    ingredients: [
    { ingredientId: 'flour-tortilla', name: 'flour tortilla', quantity: '1 large' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'cheddar-cheese', name: 'cheddar cheese', quantity: '30g' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '2 strips' },
    { ingredientId: 'salsa', name: 'salsa', quantity: '2 tbsp' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '½' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Cook bacon until crisp.` },
        { instruction: `Scramble eggs.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Warm tortilla, layer with eggs, bacon, cheese, avocado, salsa.` },
        { instruction: `Roll tightly.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'granola-bowl',
    name: 'Granola Bowl',
    description: 'Granola Bowl — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegan'],
    calories: 350,
    servings: 1,
    ingredients: [
    { ingredientId: 'granola', name: 'granola', quantity: '½ cup' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '½ cup' },
    { ingredientId: 'banana', name: 'banana', quantity: '1' },
    { ingredientId: 'nut-butter', name: 'nut butter', quantity: '1 tbsp' },
    { ingredientId: 'chia-seeds', name: 'chia seeds', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Pour coconut milk into bowl.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Top with granola, sliced banana, nut butter, and chia seeds.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    description: 'Eggs Benedict — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein'],
    calories: 550,
    servings: 2,
    ingredients: [
    { ingredientId: 'english-muffins', name: 'English muffins', quantity: '2' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '4' },
    { ingredientId: 'back-bacon', name: 'back bacon', quantity: '4 slices' },
    { ingredientId: 'hollandaise-sauce', name: 'hollandaise sauce', quantity: '4 tbsp' },
    { ingredientId: 'white-vinegar', name: 'white vinegar', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Poach eggs in simmering water with vinegar 3 min.` },
        { instruction: `Toast muffins, warm bacon.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Assemble: muffin, bacon, egg, hollandaise.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'shakshuka',
    name: 'Shakshuka',
    description: 'Shakshuka — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'lunch'],
    tags: ['vegetarian', 'low-calorie'],
    calories: 340,
    servings: 2,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '4' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'bell-pepper', name: 'bell pepper', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'paprika', name: 'paprika', quantity: '1 tsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Sauté onion, pepper, garlic in oil.` },
        { instruction: `Add tomatoes and spices, simmer 10 min.` },
        { instruction: `Create wells, crack in eggs, cover and cook 8 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'overnight-oats',
    name: 'Overnight Oats',
    description: 'Overnight Oats — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegan', 'low-calorie'],
    calories: 310,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'almond-milk', name: 'almond milk', quantity: '¾ cup' },
    { ingredientId: 'chia-seeds', name: 'chia seeds', quantity: '1 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '½ tsp' },
    { ingredientId: 'berries', name: 'berries', quantity: '½ cup' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Combine oats, milk, chia, honey, vanilla in jar.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Refrigerate overnight.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with berries before serving.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'banana-pancakes',
    name: 'Banana Pancakes',
    description: 'Banana Pancakes — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'gluten-free'],
    calories: 280,
    servings: 1,
    ingredients: [
    { ingredientId: 'banana', name: 'banana', quantity: '1 ripe' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'almond-butter', name: 'almond butter', quantity: '1 tbsp' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '¼ tsp' },
    { ingredientId: 'coconut-oil', name: 'coconut oil', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mash banana thoroughly.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 7,
      steps: [
        { instruction: `Mix in eggs, almond butter, cinnamon.` },
        { instruction: `Cook small rounds on oiled pan 2 min per side.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 7 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'smoked-salmon-bagel',
    name: 'Smoked Salmon Bagel',
    description: 'Smoked Salmon Bagel — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'lunch'],
    tags: ['high-protein'],
    calories: 440,
    servings: 1,
    ingredients: [
    { ingredientId: 'bagel', name: 'bagel', quantity: '1' },
    { ingredientId: 'smoked-salmon', name: 'smoked salmon', quantity: '80g' },
    { ingredientId: 'cream-cheese', name: 'cream cheese', quantity: '2 tbsp' },
    { ingredientId: 'capers', name: 'capers', quantity: '1 tbsp' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '2 slices' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'dill', name: 'dill', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Toast bagel.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Spread cream cheese.` },
        { instruction: `Layer salmon, red onion, capers.` },
        { instruction: `Squeeze lemon, top with dill.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'mushroom-omelette',
    name: 'Mushroom Omelette',
    description: 'Mushroom Omelette — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-carb', 'high-protein'],
    calories: 270,
    servings: 1,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'mushrooms', name: 'mushrooms', quantity: '100g' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '½ tsp' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'gruy-re', name: 'gruyère', quantity: '20g' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Whisk eggs.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Sauté sliced mushrooms with thyme in butter until golden.` },
        { instruction: `Cook eggs in butter, add mushrooms and cheese, fold.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 9 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'chia-pudding',
    name: 'Chia Pudding',
    description: 'Chia Pudding — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 250,
    servings: 1,
    ingredients: [
    { ingredientId: 'chia-seeds', name: 'chia seeds', quantity: '3 tbsp' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '1 cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '½ tsp' },
    { ingredientId: 'mango', name: 'mango', quantity: '½' },
    { ingredientId: 'kiwi', name: 'kiwi', quantity: '1' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix chia, milk, honey, vanilla.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Refrigerate 4h or overnight.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with diced mango and kiwi.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'huevos-rancheros',
    name: 'Huevos Rancheros',
    description: 'Huevos Rancheros — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'corn-tortillas', name: 'corn tortillas', quantity: '4' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '4' },
    { ingredientId: 'black-beans', name: 'black beans', quantity: '200g' },
    { ingredientId: 'tomato-salsa', name: 'tomato salsa', quantity: '100g' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' },
    { ingredientId: 'feta', name: 'feta', quantity: '30g' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Warm tortillas.` },
        { instruction: `Fry beans with salsa.` },
        { instruction: `Fry eggs sunny side.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Assemble: tortilla, beans, egg.` },
        { instruction: `Top with avocado, feta, coriander.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'apple-cinnamon-oatmeal',
    name: 'Apple Cinnamon Oatmeal',
    description: 'Apple Cinnamon Oatmeal — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegan', 'low-calorie'],
    calories: 290,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'apple', name: 'apple', quantity: '1' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '1 tsp' },
    { ingredientId: 'maple-syrup', name: 'maple syrup', quantity: '1 tbsp' },
    { ingredientId: 'oat-milk', name: 'oat milk', quantity: '1 cup' },
    { ingredientId: 'walnuts', name: 'walnuts', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Dice apple, sauté with cinnamon 3 min.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Simmer oats in milk.` },
        { instruction: `Top oats with apple, drizzle maple syrup, add walnuts.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 9 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'breakfast-tacos',
    name: 'Breakfast Tacos',
    description: 'Breakfast Tacos — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein', 'quick'],
    calories: 390,
    servings: 2,
    ingredients: [
    { ingredientId: 'small-corn-tortillas', name: 'small corn tortillas', quantity: '4' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'chorizo', name: 'chorizo', quantity: '60g' },
    { ingredientId: 'cheddar', name: 'cheddar', quantity: '30g' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '½' },
    { ingredientId: 'salsa-verde', name: 'salsa verde', quantity: '2 tbsp' },
    { ingredientId: 'lime', name: 'lime', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Crumble and cook chorizo.` },
        { instruction: `Scramble eggs together with chorizo.` },
        { instruction: `Warm tortillas.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Fill with egg mixture, cheese, avocado.` },
        { instruction: `Serve with salsa and lime.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'ricotta-toast-with-honey',
    name: 'Ricotta Toast with Honey',
    description: 'Ricotta Toast with Honey — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegetarian', 'quick'],
    calories: 310,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' },
    { ingredientId: 'ricotta', name: 'ricotta', quantity: '4 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'walnuts', name: 'walnuts', quantity: '1 tbsp' },
    { ingredientId: 'figs', name: 'figs', quantity: '2' },
    { ingredientId: 'lemon-zest', name: 'lemon zest', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Toast bread.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Spread ricotta generously.` },
        { instruction: `Top with sliced figs, walnuts, drizzle honey, add lemon zest.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'smoothie-bowl',
    name: 'Smoothie Bowl',
    description: 'Smoothie Bowl — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegan', 'low-calorie'],
    calories: 320,
    servings: 1,
    ingredients: [
    { ingredientId: 'frozen-acai', name: 'frozen acai', quantity: '100g' },
    { ingredientId: 'frozen-banana', name: 'frozen banana', quantity: '1' },
    { ingredientId: 'almond-milk', name: 'almond milk', quantity: '¼ cup' },
    { ingredientId: 'granola', name: 'granola', quantity: '¼ cup' },
    { ingredientId: 'coconut-flakes', name: 'coconut flakes', quantity: '1 tbsp' },
    { ingredientId: 'fresh-berries', name: 'fresh berries', quantity: '½ cup' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Blend acai, banana, almond milk until thick.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Pour into bowl.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with granola, coconut flakes, berries.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'baked-eggs-in-tomatoes',
    name: 'Baked Eggs in Tomatoes',
    description: 'Baked Eggs in Tomatoes — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie'],
    calories: 280,
    servings: 2,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '4' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'feta', name: 'feta', quantity: '40g' },
    { ingredientId: 'basil', name: 'basil', quantity: 'to taste' },
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Simmer tomatoes with garlic in oil 10 min.` },
        { instruction: `Create wells, add eggs.` },
        { instruction: `Bake 180°C 10 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Top with feta and basil.` },
        { instruction: `Serve with bread.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'ham-egg-cheese-sandwich',
    name: 'Ham Egg Cheese Sandwich',
    description: 'Ham Egg Cheese Sandwich — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein', 'quick'],
    calories: 450,
    servings: 1,
    ingredients: [
    { ingredientId: 'english-muffin', name: 'English muffin', quantity: '1' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' },
    { ingredientId: 'ham-slice', name: 'ham slice', quantity: '2' },
    { ingredientId: 'cheddar', name: 'cheddar', quantity: '1 slice' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tsp' },
    { ingredientId: 'dijon-mustard', name: 'dijon mustard', quantity: '½ tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 6,
      steps: [
        { instruction: `Fry egg in butter, salt and pepper.` },
        { instruction: `Toast muffin.` },
        { instruction: `Warm ham.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Assemble with mustard, ham, egg, cheese.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 6 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'savory-oatmeal',
    name: 'Savory Oatmeal',
    description: 'Savory Oatmeal — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 310,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '1 cup' },
    { ingredientId: 'poached-egg', name: 'poached egg', quantity: '1' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '2 tbsp' },
    { ingredientId: 'chives', name: 'chives', quantity: '1 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Cook oats in stock.` },
        { instruction: `Drizzle olive oil.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with poached egg, parmesan, chives.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'cottage-cheese-bowl',
    name: 'Cottage Cheese Bowl',
    description: 'Cottage Cheese Bowl — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['high-protein', 'low-calorie', 'gluten-free'],
    calories: 260,
    servings: 1,
    ingredients: [
    { ingredientId: 'cottage-cheese', name: 'cottage cheese', quantity: '1 cup' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'za-atar', name: 'za\'atar', quantity: '1 tsp' },
    { ingredientId: 'sourdough-croutons', name: 'sourdough croutons', quantity: '¼ cup' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Spoon cottage cheese into bowl.` },
        { instruction: `Drizzle oil, dust za\'atar.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Top with halved tomatoes, sliced cucumber.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'protein-smoothie',
    name: 'Protein Smoothie',
    description: 'Protein Smoothie — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegan', 'high-protein'],
    calories: 350,
    servings: 1,
    ingredients: [
    { ingredientId: 'banana', name: 'banana', quantity: '1 frozen' },
    { ingredientId: 'almond-milk', name: 'almond milk', quantity: '1 cup' },
    { ingredientId: 'peanut-butter', name: 'peanut butter', quantity: '2 tbsp' },
    { ingredientId: 'protein-powder', name: 'protein powder', quantity: '1 scoop' },
    { ingredientId: 'cocoa-powder', name: 'cocoa powder', quantity: '1 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Blend all ingredients until smooth.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Pour into glass and serve immediately.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'waffles-with-berries',
    name: 'Waffles with Berries',
    description: 'Waffles with Berries — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 410,
    servings: 2,
    ingredients: [
    { ingredientId: 'all-purpose-flour', name: 'all-purpose flour', quantity: '1 cup' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'milk', name: 'milk', quantity: '¾ cup' },
    { ingredientId: 'butter', name: 'butter', quantity: '3 tbsp' },
    { ingredientId: 'baking-powder', name: 'baking powder', quantity: '2 tsp' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '2 tbsp' },
    { ingredientId: 'mixed-berries', name: 'mixed berries', quantity: '1 cup' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Separate eggs, whisk whites to stiff peaks.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Mix yolks with milk, butter, dry ingredients.` },
        { instruction: `Fold whites in.` },
        { instruction: `Cook in waffle iron.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with berries.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'bircher-muesli',
    name: 'Bircher Muesli',
    description: 'Bircher Muesli — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian'],
    calories: 330,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'apple', name: 'apple', quantity: '½ grated' },
    { ingredientId: 'plain-yogurt', name: 'plain yogurt', quantity: '½ cup' },
    { ingredientId: 'milk', name: 'milk', quantity: '¼ cup' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '1 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'almonds', name: 'almonds', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix oats, grated apple, yogurt, milk, lemon, honey.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Refrigerate overnight.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with almonds before serving.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'poached-eggs-on-spinach',
    name: 'Poached Eggs on Spinach',
    description: 'Poached Eggs on Spinach — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie', 'high-protein'],
    calories: 240,
    servings: 1,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'baby-spinach', name: 'baby spinach', quantity: '100g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '1 clove' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'white-vinegar', name: 'white vinegar', quantity: '1 tbsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Sauté spinach with garlic in oil until wilted.` },
        { instruction: `Poach eggs in simmering water with vinegar 3 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve eggs on spinach, chili flakes on top.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'blueberry-smoothie-bowl',
    name: 'Blueberry Smoothie Bowl',
    description: 'Blueberry Smoothie Bowl — a delicious homemade recipe.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegan', 'low-calorie'],
    calories: 300,
    servings: 1,
    ingredients: [
    { ingredientId: 'frozen-blueberries', name: 'frozen blueberries', quantity: '1 cup' },
    { ingredientId: 'frozen-banana', name: 'frozen banana', quantity: '½' },
    { ingredientId: 'oat-milk', name: 'oat milk', quantity: '¼ cup' },
    { ingredientId: 'granola', name: 'granola', quantity: '3 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tsp' },
    { ingredientId: 'hemp-seeds', name: 'hemp seeds', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Blend blueberries, banana, oat milk thick.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Pour into bowl.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with granola, hemp seeds, drizzle honey.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'sweet-potato-toast',
    name: 'Sweet Potato Toast',
    description: 'Sweet Potato Toast — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 290,
    servings: 1,
    ingredients: [
    { ingredientId: 'sweet-potato', name: 'sweet potato', quantity: '1 large' },
    { ingredientId: 'almond-butter', name: 'almond butter', quantity: '2 tbsp' },
    { ingredientId: 'banana', name: 'banana', quantity: '½ sliced' },
    { ingredientId: 'hemp-seeds', name: 'hemp seeds', quantity: '1 tsp' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '¼ tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Slice sweet potato lengthwise ½ inch thick.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Toast in toaster twice until cooked.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with almond butter, banana, seeds, cinnamon.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'turkey-breakfast-hash',
    name: 'Turkey Breakfast Hash',
    description: 'Turkey Breakfast Hash — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein', 'low-carb'],
    calories: 380,
    servings: 2,
    ingredients: [
    { ingredientId: 'ground-turkey', name: 'ground turkey', quantity: '200g' },
    { ingredientId: 'sweet-potato', name: 'sweet potato', quantity: '1 diced' },
    { ingredientId: 'bell-pepper', name: 'bell pepper', quantity: '1' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' },
    { ingredientId: 'paprika', name: 'paprika', quantity: '1 tsp' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 20,
      steps: [
        { instruction: `Cook turkey, drain.` },
        { instruction: `Sauté potato, pepper, onion in oil until tender 10 min.` },
        { instruction: `Add garlic, paprika, turkey.` },
        { instruction: `Make wells, cook eggs in pan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 20 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'matcha-overnight-oats',
    name: 'Matcha Overnight Oats',
    description: 'Matcha Overnight Oats — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['vegan'],
    calories: 310,
    servings: 1,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '½ cup' },
    { ingredientId: 'matcha-powder', name: 'matcha powder', quantity: '1 tsp' },
    { ingredientId: 'oat-milk', name: 'oat milk', quantity: '¾ cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '½ tsp' },
    { ingredientId: 'banana', name: 'banana', quantity: '½' },
    { ingredientId: 'pistachios', name: 'pistachios', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix oats, matcha, milk, honey, vanilla.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Refrigerate overnight.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Top with banana and pistachios.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'egg-white-frittata',
    name: 'Egg White Frittata',
    description: 'Egg White Frittata — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein', 'low-calorie', 'low-carb'],
    calories: 220,
    servings: 2,
    ingredients: [
    { ingredientId: 'egg-whites', name: 'egg whites', quantity: '6' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '80g' },
    { ingredientId: 'feta', name: 'feta', quantity: '30g' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'basil', name: 'basil', quantity: 'to taste' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Whisk egg whites with salt.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Sauté spinach and tomatoes in oiled oven-safe pan.` },
        { instruction: `Pour whites over.` },
        { instruction: `Bake 180°C 12 min until set.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with feta and basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'keto-breakfast-bowl',
    name: 'Keto Breakfast Bowl',
    description: 'Keto Breakfast Bowl — a delicious homemade recipe.',
    mealTimes: ['breakfast'],
    tags: ['high-protein', 'low-carb', 'gluten-free'],
    calories: 450,
    servings: 1,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '3 strips' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '½' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '6' },
    { ingredientId: 'cheddar', name: 'cheddar', quantity: '30g' },
    { ingredientId: 'spinach', name: 'spinach', quantity: 'handful' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Fry bacon crisp.` },
        { instruction: `Scramble eggs in bacon fat.` },
        { instruction: `Add avocado, tomatoes, cheese.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Plate on bed of spinach.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Caesar Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'low-calorie'],
    calories: 320,
    servings: 2,
    ingredients: [
    { ingredientId: 'romaine-lettuce', name: 'romaine lettuce', quantity: '1 head' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '40g' },
    { ingredientId: 'croutons', name: 'croutons', quantity: '½ cup' },
    { ingredientId: 'caesar-dressing', name: 'Caesar dressing', quantity: '3 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Tear lettuce into bowl.` },
        { instruction: `Toss with dressing, parmesan, croutons.` },
        { instruction: `Squeeze lemon, crack black pepper.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'blt-sandwich',
    name: 'BLT Sandwich',
    description: 'BLT Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['quick'],
    calories: 410,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '3 strips' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: '2 leaves' },
    { ingredientId: 'mayonnaise', name: 'mayonnaise', quantity: '1 tbsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Cook bacon crisp.` },
        { instruction: `Toast bread.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread mayo.` },
        { instruction: `Layer lettuce, tomato, bacon.` },
        { instruction: `Season, close sandwich.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'chicken-caesar-wrap',
    name: 'Chicken Caesar Wrap',
    description: 'Chicken Caesar Wrap — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein'],
    calories: 480,
    servings: 1,
    ingredients: [
    { ingredientId: 'flour-tortilla', name: 'flour tortilla', quantity: '1 large' },
    { ingredientId: 'chicken-breast', name: 'chicken breast', quantity: '1 cooked' },
    { ingredientId: 'romaine', name: 'romaine', quantity: '2 leaves' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '20g' },
    { ingredientId: 'caesar-dressing', name: 'Caesar dressing', quantity: '2 tbsp' },
    { ingredientId: 'croutons', name: 'croutons', quantity: '¼ cup' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Grill or slice cooked chicken.` },
        { instruction: `Warm tortilla.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Layer lettuce, chicken, parmesan, croutons, dressing.` },
        { instruction: `Roll tightly.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'tomato-soup',
    name: 'Tomato Soup',
    description: 'Tomato Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 220,
    servings: 2,
    ingredients: [
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '800g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '400ml' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'basil', name: 'basil', quantity: 'handful' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 6,
      steps: [
        { instruction: `Blend smooth.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 15,
      steps: [
        { instruction: `Sauté onion and garlic.` },
        { instruction: `Add tomatoes, stock, sugar.` },
        { instruction: `Simmer 15 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Top with basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 6 },
      { type: 'cooking', minutes: 15 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    description: 'Greek Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'gluten-free', 'low-calorie'],
    calories: 290,
    servings: 2,
    ingredients: [
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' },
    { ingredientId: 'kalamata-olives', name: 'kalamata olives', quantity: '½ cup' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '½' },
    { ingredientId: 'feta', name: 'feta', quantity: '100g' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'oregano', name: 'oregano', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Dice cucumber, halve tomatoes.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 7,
      steps: [
        { instruction: `Combine all vegetables.` },
        { instruction: `Add olives and feta.` },
        { instruction: `Dress with oil and oregano.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 7 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'tuna-sandwich',
    name: 'Tuna Sandwich',
    description: 'Tuna Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein', 'quick'],
    calories: 390,
    servings: 1,
    ingredients: [
    { ingredientId: 'canned-tuna', name: 'canned tuna', quantity: '1 tin' },
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' },
    { ingredientId: 'mayonnaise', name: 'mayonnaise', quantity: '1 tbsp' },
    { ingredientId: 'celery', name: 'celery', quantity: '1 stick' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '1 tsp' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: 'to taste' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '2 slices' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Drain tuna, mix with mayo, celery, lemon, salt, pepper.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread on bread with lettuce and onion.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'quinoa-buddha-bowl',
    name: 'Quinoa Buddha Bowl',
    description: 'Quinoa Buddha Bowl — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'gluten-free', 'high-protein'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'quinoa', name: 'quinoa', quantity: '½ cup dry' },
    { ingredientId: 'chickpeas', name: 'chickpeas', quantity: '200g' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'tahini', name: 'tahini', quantity: '2 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Cook quinoa.` },
        { instruction: `Roast chickpeas with oil and paprika 20 min.` },
        { instruction: `Dress with tahini-lemon sauce.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Assemble bowls.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'lentil-soup',
    name: 'Lentil Soup',
    description: 'Lentil Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'high-protein'],
    calories: 310,
    servings: 4,
    ingredients: [
    { ingredientId: 'red-lentils', name: 'red lentils', quantity: '200g' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '2' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'turmeric', name: 'turmeric', quantity: '½ tsp' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '1L' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Sauté onion, carrot, garlic.` },
        { instruction: `Add lentils, spices, stock.` },
        { instruction: `Simmer 20 min until lentils are soft.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Season and serve.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'chicken-noodle-soup',
    name: 'Chicken Noodle Soup',
    description: 'Chicken Noodle Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein'],
    calories: 340,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-breast', name: 'chicken breast', quantity: '2' },
    { ingredientId: 'egg-noodles', name: 'egg noodles', quantity: '150g' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '2' },
    { ingredientId: 'celery', name: 'celery', quantity: '3 sticks' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '1.5L' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '2 sprigs' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Simmer chicken in stock with veg and thyme 20 min.` },
        { instruction: `Remove chicken, shred.` },
        { instruction: `Cook noodles in broth.` },
        { instruction: `Return chicken.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Top with parsley.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'falafel-pita',
    name: 'Falafel Pita',
    description: 'Falafel Pita — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'pita-bread', name: 'pita bread', quantity: '2' },
    { ingredientId: 'falafel', name: 'falafel', quantity: '8' },
    { ingredientId: 'hummus', name: 'hummus', quantity: '4 tbsp' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: 'to taste' },
    { ingredientId: 'tahini', name: 'tahini', quantity: '2 tbsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Warm falafel and pita.` },
        { instruction: `Drizzle tahini and lemon.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread hummus inside pita.` },
        { instruction: `Fill with falafel, cucumber, tomato, lettuce.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'turkey-club-sandwich',
    name: 'Turkey Club Sandwich',
    description: 'Turkey Club Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein'],
    calories: 480,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '3 slices' },
    { ingredientId: 'turkey-breast', name: 'turkey breast', quantity: '80g' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '2 strips' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: '2 leaves' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '½' },
    { ingredientId: 'mayo', name: 'mayo', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Toast all bread slices.` },
        { instruction: `Cook bacon.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Layer: bread, turkey, lettuce, tomato; second bread; bacon, avocado, mayo; top bread.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'minestrone-soup',
    name: 'Minestrone Soup',
    description: 'Minestrone Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan'],
    calories: 290,
    servings: 4,
    ingredients: [
    { ingredientId: 'cannellini-beans', name: 'cannellini beans', quantity: '200g' },
    { ingredientId: 'diced-tomatoes', name: 'diced tomatoes', quantity: '400g' },
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '1' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1' },
    { ingredientId: 'celery', name: 'celery', quantity: '2' },
    { ingredientId: 'pasta', name: 'pasta', quantity: '100g' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '1L' },
    { ingredientId: 'basil', name: 'basil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 30,
      steps: [
        { instruction: `Sauté vegetables in oil.` },
        { instruction: `Add stock, tomatoes, beans.` },
        { instruction: `Simmer 15 min.` },
        { instruction: `Add pasta, cook 10 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Top with basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 30 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'shrimp-tacos',
    name: 'Shrimp Tacos',
    description: 'Shrimp Tacos — a delicious homemade recipe.',
    mealTimes: ['lunch', 'dinner'],
    tags: ['quick'],
    calories: 390,
    servings: 2,
    ingredients: [
    { ingredientId: 'shrimp', name: 'shrimp', quantity: '300g' },
    { ingredientId: 'corn-tortillas', name: 'corn tortillas', quantity: '6' },
    { ingredientId: 'lime', name: 'lime', quantity: '1' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'red-cabbage', name: 'red cabbage', quantity: '1 cup shredded' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '2 tbsp' },
    { ingredientId: 'chipotle-sauce', name: 'chipotle sauce', quantity: '1 tbsp' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Season and cook shrimp 2 min per side.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Warm tortillas.` },
        { instruction: `Lime and coriander on top.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Fill with shrimp, cabbage, avocado, sour cream, chipotle.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'french-onion-soup',
    name: 'French Onion Soup',
    description: 'French Onion Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian'],
    calories: 380,
    servings: 4,
    ingredients: [
    { ingredientId: 'onions', name: 'onions', quantity: '4 large' },
    { ingredientId: 'beef-stock', name: 'beef stock', quantity: '1L' },
    { ingredientId: 'gruy-re', name: 'gruyère', quantity: '100g' },
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '4 slices' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '2 sprigs' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '100ml' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 42,
      steps: [
        { instruction: `Caramelize onions in butter 30 min.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add stock and thyme, simmer 15 min.` },
        { instruction: `Broil until melted.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 8,
      steps: [
        { instruction: `Ladle into bowls, top with bread and gruyère.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 42 },
      { type: 'assembling', minutes: 8 }
      ],
      totalMinutes: 50,
    },
  },
  {
    id: 'hummus-veggie-wrap',
    name: 'Hummus Veggie Wrap',
    description: 'Hummus Veggie Wrap — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 340,
    servings: 1,
    ingredients: [
    { ingredientId: 'flour-tortilla', name: 'flour tortilla', quantity: '1' },
    { ingredientId: 'hummus', name: 'hummus', quantity: '3 tbsp' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'roasted-red-pepper', name: 'roasted red pepper', quantity: '2' },
    { ingredientId: 'baby-spinach', name: 'baby spinach', quantity: 'handful' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '½' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 6,
      steps: [
        { instruction: `Squeeze lemon.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread hummus on tortilla.` },
        { instruction: `Layer spinach, cucumber, roasted pepper, avocado.` },
        { instruction: `Roll tightly.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 6 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'cobb-salad',
    name: 'Cobb Salad',
    description: 'Cobb Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['gluten-free', 'high-protein'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'romaine-lettuce', name: 'romaine lettuce', quantity: '1 head' },
    { ingredientId: 'grilled-chicken', name: 'grilled chicken', quantity: '1 breast' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '4 strips' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2 hard-boiled' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'blue-cheese', name: 'blue cheese', quantity: '40g' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Arrange lettuce in rows.` },
        { instruction: `Crumble blue cheese.` },
        { instruction: `Dress with vinaigrette.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with chicken, bacon, sliced eggs, avocado, tomatoes.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'grilled-cheese-sandwich',
    name: 'Grilled Cheese Sandwich',
    description: 'Grilled Cheese Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'quick'],
    calories: 450,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '2 slices' },
    { ingredientId: 'cheddar', name: 'cheddar', quantity: '60g' },
    { ingredientId: 'gruy-re', name: 'gruyère', quantity: '30g' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'dijon-mustard', name: 'dijon mustard', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Butter outside of bread.` },
        { instruction: `Grill on medium heat 3 min per side until golden and melted.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread mustard on bread.` },
        { instruction: `Layer cheeses.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'thai-peanut-noodles',
    name: 'Thai Peanut Noodles',
    description: 'Thai Peanut Noodles — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'rice-noodles', name: 'rice noodles', quantity: '200g' },
    { ingredientId: 'peanut-butter', name: 'peanut butter', quantity: '3 tbsp' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '2 tbsp' },
    { ingredientId: 'lime-juice', name: 'lime juice', quantity: '1 tbsp' },
    { ingredientId: 'sesame-oil', name: 'sesame oil', quantity: '1 tsp' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Whisk peanut butter, soy, lime, sesame into sauce with warm water.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 11,
      steps: [
        { instruction: `Cook noodles.` },
        { instruction: `Toss noodles with sauce, veg, coriander.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 11 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'pesto-pasta-salad',
    name: 'Pesto Pasta Salad',
    description: 'Pesto Pasta Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian'],
    calories: 410,
    servings: 4,
    ingredients: [
    { ingredientId: 'fusilli-pasta', name: 'fusilli pasta', quantity: '200g' },
    { ingredientId: 'basil-pesto', name: 'basil pesto', quantity: '4 tbsp' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' },
    { ingredientId: 'mozzarella', name: 'mozzarella', quantity: '150g' },
    { ingredientId: 'pine-nuts', name: 'pine nuts', quantity: '2 tbsp' },
    { ingredientId: 'basil-leaves', name: 'basil leaves', quantity: 'to taste' },
    { ingredientId: 'lemon', name: 'lemon', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Cook pasta, cool under cold water.` },
        { instruction: `Toss with pesto, tomatoes, mozzarella.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with pine nuts and basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chicken-tortilla-soup',
    name: 'Chicken Tortilla Soup',
    description: 'Chicken Tortilla Soup — a delicious homemade recipe.',
    mealTimes: ['lunch', 'dinner'],
    tags: ['high-protein'],
    calories: 350,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '2' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'black-beans', name: 'black beans', quantity: '200g' },
    { ingredientId: 'corn', name: 'corn', quantity: '200g' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '800ml' },
    { ingredientId: 'jalape-o', name: 'jalapeño', quantity: '1' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'tortilla-chips', name: 'tortilla chips', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Simmer chicken in stock with tomatoes, beans, corn, jalapeño, cumin 20 min.` },
        { instruction: `Shred chicken.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with tortilla chips.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'mediterranean-grain-bowl',
    name: 'Mediterranean Grain Bowl',
    description: 'Mediterranean Grain Bowl — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'farro', name: 'farro', quantity: '½ cup dry' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'kalamata-olives', name: 'kalamata olives', quantity: '¼ cup' },
    { ingredientId: 'feta', name: 'feta', quantity: '60g' },
    { ingredientId: 'hummus', name: 'hummus', quantity: '2 tbsp' },
    { ingredientId: 'lemon-herb-dressing', name: 'lemon-herb dressing', quantity: '2 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Cook farro per package.` },
        { instruction: `Add hummus on side.` },
        { instruction: `Dress with lemon.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Assemble bowls with farro, chopped vegetables, olives, feta.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'egg-salad-sandwich',
    name: 'Egg Salad Sandwich',
    description: 'Egg Salad Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'quick'],
    calories: 400,
    servings: 2,
    ingredients: [
    { ingredientId: 'eggs', name: 'eggs', quantity: '4 hard-boiled' },
    { ingredientId: 'mayonnaise', name: 'mayonnaise', quantity: '2 tbsp' },
    { ingredientId: 'dijon-mustard', name: 'dijon mustard', quantity: '1 tsp' },
    { ingredientId: 'celery', name: 'celery', quantity: '1 stick' },
    { ingredientId: 'chives', name: 'chives', quantity: '1 tbsp' },
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '4 slices' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix with mayo, mustard, celery, chives, salt, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Chop hard-boiled eggs.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread on bread with lettuce.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'butternut-squash-soup',
    name: 'Butternut Squash Soup',
    description: 'Butternut Squash Soup — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'gluten-free'],
    calories: 260,
    servings: 4,
    ingredients: [
    { ingredientId: 'butternut-squash', name: 'butternut squash', quantity: '1 large' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '800ml' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '200ml' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tsp' },
    { ingredientId: 'nutmeg', name: 'nutmeg', quantity: '¼ tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 9,
      steps: [
        { instruction: `Blend all with stock, coconut milk, ginger.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 26,
      steps: [
        { instruction: `Roast cubed squash and garlic 25 min.` },
        { instruction: `Sauté onion.` },
        { instruction: `Season with nutmeg.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 9 },
      { type: 'cooking', minutes: 26 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'soba-noodle-salad',
    name: 'Soba Noodle Salad',
    description: 'Soba Noodle Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan'],
    calories: 380,
    servings: 2,
    ingredients: [
    { ingredientId: 'soba-noodles', name: 'soba noodles', quantity: '200g' },
    { ingredientId: 'edamame', name: 'edamame', quantity: '1 cup' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1 julienned' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: '3' },
    { ingredientId: 'sesame-dressing', name: 'sesame dressing', quantity: '3 tbsp' },
    { ingredientId: 'nori', name: 'nori', quantity: '2 sheets' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Cook soba noodles, rinse cold.` },
        { instruction: `Toss with edamame, carrot, cucumber, spring onion.` },
        { instruction: `Dress with sesame dressing.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with shredded nori.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'steak-salad',
    name: 'Steak Salad',
    description: 'Steak Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein', 'low-carb', 'gluten-free'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'sirloin-steak', name: 'sirloin steak', quantity: '300g' },
    { ingredientId: 'mixed-greens', name: 'mixed greens', quantity: '4 cups' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '¼' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '30g' },
    { ingredientId: 'balsamic-dressing', name: 'balsamic dressing', quantity: '2 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Season and sear steak 3 min per side for medium.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Rest, slice thin.` },
        { instruction: `Toss greens with tomatoes, onion, dressing.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with steak and parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'spiced-lentil-bowl',
    name: 'Spiced Lentil Bowl',
    description: 'Spiced Lentil Bowl — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'high-protein'],
    calories: 380,
    servings: 2,
    ingredients: [
    { ingredientId: 'green-lentils', name: 'green lentils', quantity: '200g' },
    { ingredientId: 'sweet-potato', name: 'sweet potato', quantity: '1' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '80g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'coriander', name: 'coriander', quantity: '1 tsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Cook lentils.` },
        { instruction: `Roast cubed sweet potato.` },
        { instruction: `Sauté garlic and spices, add spinach until wilted.` },
        { instruction: `Combine with lemon juice.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'waldorf-salad',
    name: 'Waldorf Salad',
    description: 'Waldorf Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'quick', 'low-calorie'],
    calories: 310,
    servings: 2,
    ingredients: [
    { ingredientId: 'apple', name: 'apple', quantity: '2' },
    { ingredientId: 'celery', name: 'celery', quantity: '3 sticks' },
    { ingredientId: 'walnuts', name: 'walnuts', quantity: '½ cup' },
    { ingredientId: 'grapes', name: 'grapes', quantity: '½ cup' },
    { ingredientId: 'mayonnaise', name: 'mayonnaise', quantity: '2 tbsp' },
    { ingredientId: 'greek-yogurt', name: 'Greek yogurt', quantity: '2 tbsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: 'to taste' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Dice apple and celery.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Halve grapes.` },
        { instruction: `Mix mayo and yogurt dressing.` },
        { instruction: `Combine with apple, celery, grapes, walnuts.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Serve on lettuce.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'salmon-quinoa-bowl',
    name: 'Salmon Quinoa Bowl',
    description: 'Salmon Quinoa Bowl — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein', 'gluten-free'],
    calories: 510,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillet', name: 'salmon fillet', quantity: '2x150g' },
    { ingredientId: 'quinoa', name: 'quinoa', quantity: '½ cup dry' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'edamame', name: 'edamame', quantity: '½ cup' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'miso-dressing', name: 'miso dressing', quantity: '2 tbsp' },
    { ingredientId: 'sesame-seeds', name: 'sesame seeds', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Cook quinoa.` },
        { instruction: `Pan-fry salmon 4 min per side.` },
        { instruction: `Dress with miso, sesame seeds.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Assemble bowls with quinoa, avocado, edamame, cucumber.` },
        { instruction: `Top with salmon.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'corn-chowder',
    name: 'Corn Chowder',
    description: 'Corn Chowder — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian'],
    calories: 360,
    servings: 4,
    ingredients: [
    { ingredientId: 'corn-kernels', name: 'corn kernels', quantity: '400g' },
    { ingredientId: 'potato', name: 'potato', quantity: '2 diced' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'milk', name: 'milk', quantity: '400ml' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '400ml' },
    { ingredientId: 'bacon-optional', name: 'bacon (optional', quantity: 'to taste' },
    { ingredientId: '2-strips', name: '2 strips)', quantity: 'to taste' },
    { ingredientId: 'cheddar', name: 'cheddar', quantity: '40g' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Sauté onion, garlic, optional bacon.` },
        { instruction: `Add potato, corn, stock.` },
        { instruction: `Simmer 15 min.` },
        { instruction: `Add milk, simmer 5 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Top with cheese.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'kale-salad',
    name: 'Kale Salad',
    description: 'Kale Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie', 'gluten-free'],
    calories: 280,
    servings: 2,
    ingredients: [
    { ingredientId: 'curly-kale', name: 'curly kale', quantity: '4 cups' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'apple', name: 'apple', quantity: '1' },
    { ingredientId: 'pumpkin-seeds', name: 'pumpkin seeds', quantity: '2 tbsp' },
    { ingredientId: 'cranberries', name: 'cranberries', quantity: '2 tbsp' },
    { ingredientId: 'tahini-dressing', name: 'tahini dressing', quantity: '3 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Massage kale with dressing until softened.` },
        { instruction: `Add sliced apple, avocado chunks, seeds, cranberries.` },
        { instruction: `Toss gently.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'vietnamese-spring-rolls',
    name: 'Vietnamese Spring Rolls',
    description: 'Vietnamese Spring Rolls — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 250,
    servings: 2,
    ingredients: [
    { ingredientId: 'rice-paper', name: 'rice paper', quantity: '8 sheets' },
    { ingredientId: 'vermicelli-noodles', name: 'vermicelli noodles', quantity: '100g' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1 julienned' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'mint', name: 'mint', quantity: 'handful' },
    { ingredientId: 'sweet-chili-sauce', name: 'sweet chili sauce', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Soak rice paper one at a time.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 15,
      steps: [
        { instruction: `Fill with noodles, carrot, cucumber, avocado, mint.` },
        { instruction: `Roll tightly.` },
        { instruction: `Serve with sweet chili.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'assembling', minutes: 15 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'tabbouleh',
    name: 'Tabbouleh',
    description: 'Tabbouleh — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 260,
    servings: 4,
    ingredients: [
    { ingredientId: 'bulgur-wheat', name: 'bulgur wheat', quantity: '½ cup dry' },
    { ingredientId: 'flat-leaf-parsley', name: 'flat-leaf parsley', quantity: '2 bunches' },
    { ingredientId: 'mint', name: 'mint', quantity: '½ bunch' },
    { ingredientId: 'tomatoes', name: 'tomatoes', quantity: '3' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '3 tbsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '3 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Dice tomatoes and cucumber.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 11,
      steps: [
        { instruction: `Cook bulgur, cool.` },
        { instruction: `Finely chop parsley and mint.` },
        { instruction: `Combine all, dress with oil and lemon.` },
        { instruction: `Season well.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 11 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'asian-slaw-salad',
    name: 'Asian Slaw Salad',
    description: 'Asian Slaw Salad — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 220,
    servings: 2,
    ingredients: [
    { ingredientId: 'red-cabbage', name: 'red cabbage', quantity: '2 cups shredded' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1 julienned' },
    { ingredientId: 'edamame', name: 'edamame', quantity: '½ cup' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: '3' },
    { ingredientId: 'sesame-oil', name: 'sesame oil', quantity: '1 tbsp' },
    { ingredientId: 'rice-vinegar', name: 'rice vinegar', quantity: '1 tbsp' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '1 tbsp' },
    { ingredientId: 'sesame-seeds', name: 'sesame seeds', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Whisk dressing.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Combine cabbage, carrot, edamame, spring onion.` },
        { instruction: `Toss.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with sesame seeds.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'pork-b-nh-m',
    name: 'Pork Bánh Mì',
    description: 'Pork Bánh Mì — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['quick'],
    calories: 460,
    servings: 1,
    ingredients: [
    { ingredientId: 'baguette', name: 'baguette', quantity: '1 small' },
    { ingredientId: 'pork-belly', name: 'pork belly', quantity: '100g sliced' },
    { ingredientId: 'pickled-daikon', name: 'pickled daikon', quantity: '2 tbsp' },
    { ingredientId: 'carrot-pickled', name: 'carrot (pickled', quantity: 'to taste' },
    { ingredientId: '2-tbsp', name: '2 tbsp)', quantity: 'to taste' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'jalape-o', name: 'jalapeño', quantity: '½' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' },
    { ingredientId: 'mayo', name: 'mayo', quantity: '1 tbsp' },
    { ingredientId: 'sriracha', name: 'sriracha', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Warm pork belly in pan.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Slice baguette, spread mayo and sriracha.` },
        { instruction: `Fill with pork, pickled veg, cucumber, jalapeño, coriander.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'cold-sesame-noodles',
    name: 'Cold Sesame Noodles',
    description: 'Cold Sesame Noodles — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan'],
    calories: 400,
    servings: 2,
    ingredients: [
    { ingredientId: 'ramen-noodles', name: 'ramen noodles', quantity: '200g' },
    { ingredientId: 'tahini', name: 'tahini', quantity: '2 tbsp' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '2 tbsp' },
    { ingredientId: 'sesame-oil', name: 'sesame oil', quantity: '1 tbsp' },
    { ingredientId: 'rice-vinegar', name: 'rice vinegar', quantity: '1 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '1 clove' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Whisk tahini, soy, sesame oil, vinegar, garlic with water.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Cook noodles, cool.` },
        { instruction: `Toss noodles.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with cucumber and spring onion.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'roasted-veggie-wrap',
    name: 'Roasted Veggie Wrap',
    description: 'Roasted Veggie Wrap — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'low-calorie'],
    calories: 360,
    servings: 1,
    ingredients: [
    { ingredientId: 'flour-tortilla', name: 'flour tortilla', quantity: '1 large' },
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '1' },
    { ingredientId: 'bell-pepper', name: 'bell pepper', quantity: '1' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '½' },
    { ingredientId: 'hummus', name: 'hummus', quantity: '2 tbsp' },
    { ingredientId: 'baby-spinach', name: 'baby spinach', quantity: 'handful' },
    { ingredientId: 'balsamic-glaze', name: 'balsamic glaze', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Roast sliced vegetables with oil at 200°C 20 min.` },
        { instruction: `Add spinach, vegetables, drizzle balsamic.` },
        { instruction: `Roll.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Spread hummus on tortilla.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'caprese-sandwich',
    name: 'Caprese Sandwich',
    description: 'Caprese Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegetarian', 'quick'],
    calories: 390,
    servings: 1,
    ingredients: [
    { ingredientId: 'ciabatta', name: 'ciabatta', quantity: '1 roll' },
    { ingredientId: 'fresh-mozzarella', name: 'fresh mozzarella', quantity: '80g' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1 large' },
    { ingredientId: 'basil', name: 'basil', quantity: 'handful' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'balsamic-vinegar', name: 'balsamic vinegar', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Season.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Slice ciabatta, drizzle oil.` },
        { instruction: `Drizzle balsamic.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Layer mozzarella, tomato, basil.` },
        { instruction: `Close sandwich.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'beef-stir-fry-bowl',
    name: 'Beef Stir-Fry Bowl',
    description: 'Beef Stir-Fry Bowl — a delicious homemade recipe.',
    mealTimes: ['lunch', 'dinner'],
    tags: ['high-protein', 'quick'],
    calories: 480,
    servings: 2,
    ingredients: [
    { ingredientId: 'beef-strips', name: 'beef strips', quantity: '300g' },
    { ingredientId: 'jasmine-rice', name: 'jasmine rice', quantity: '½ cup dry' },
    { ingredientId: 'broccoli', name: 'broccoli', quantity: '1 head' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '2 tbsp' },
    { ingredientId: 'oyster-sauce', name: 'oyster sauce', quantity: '1 tbsp' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'sesame-oil', name: 'sesame oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Cook rice.` },
        { instruction: `Stir-fry beef in hot wok 3 min.` },
        { instruction: `Add garlic, ginger, broccoli.` },
        { instruction: `Sauce with soy and oyster.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve over rice.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chickpea-salad-wrap',
    name: 'Chickpea Salad Wrap',
    description: 'Chickpea Salad Wrap — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['vegan', 'high-protein'],
    calories: 390,
    servings: 1,
    ingredients: [
    { ingredientId: 'flour-tortilla', name: 'flour tortilla', quantity: '1' },
    { ingredientId: 'chickpeas', name: 'chickpeas', quantity: '200g' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '½' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '½ cup' },
    { ingredientId: 'tahini', name: 'tahini', quantity: '2 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '½ tsp' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix tahini with water and lemon.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Drain chickpeas, toss with lemon, cumin, salt.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Fill tortilla with chickpeas, veg, tahini sauce, coriander.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'club-sandwich',
    name: 'Club Sandwich',
    description: 'Club Sandwich — a delicious homemade recipe.',
    mealTimes: ['lunch'],
    tags: ['high-protein'],
    calories: 530,
    servings: 1,
    ingredients: [
    { ingredientId: 'sourdough-bread', name: 'sourdough bread', quantity: '3 slices toasted' },
    { ingredientId: 'turkey', name: 'turkey', quantity: '60g' },
    { ingredientId: 'bacon', name: 'bacon', quantity: '2 strips' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1' },
    { ingredientId: 'lettuce', name: 'lettuce', quantity: '2 leaves' },
    { ingredientId: 'egg', name: 'egg', quantity: '1 fried' },
    { ingredientId: 'mayo', name: 'mayo', quantity: '1 tbsp' },
    { ingredientId: 'mustard', name: 'mustard', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Toast bread.` },
        { instruction: `Cook bacon.` },
        { instruction: `Fry egg.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Build layers: mayo/mustard bread, turkey, lettuce; middle bread; bacon, tomato, egg, top bread.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 12,
    },
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Spaghetti Bolognese — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 580,
    servings: 4,
    ingredients: [
    { ingredientId: 'spaghetti', name: 'spaghetti', quantity: '400g' },
    { ingredientId: 'beef-mince', name: 'beef mince', quantity: '500g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1' },
    { ingredientId: 'celery', name: 'celery', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'red-wine', name: 'red wine', quantity: '100ml' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 38,
      steps: [
        { instruction: `Sauté veg in oil.` },
        { instruction: `Brown beef.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add tomatoes, simmer 25 min.` },
        { instruction: `Cook pasta.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 7,
      steps: [
        { instruction: `Serve with parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 38 },
      { type: 'assembling', minutes: 7 }
      ],
      totalMinutes: 45,
    },
  },
  {
    id: 'roast-chicken-with-veg',
    name: 'Roast Chicken with Veg',
    description: 'Roast Chicken with Veg — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free'],
    calories: 520,
    servings: 4,
    ingredients: [
    { ingredientId: 'whole-chicken', name: 'whole chicken', quantity: '1.5kg' },
    { ingredientId: 'potatoes', name: 'potatoes', quantity: '4' },
    { ingredientId: 'carrots', name: 'carrots', quantity: '3' },
    { ingredientId: 'onion', name: 'onion', quantity: '2' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '1 head' },
    { ingredientId: 'rosemary', name: 'rosemary', quantity: '3 sprigs' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '3 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 20,
      steps: [
        { instruction: `Rub chicken with oil, lemon, rosemary, salt, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 60,
      steps: [
        { instruction: `Surround with vegetables.` },
        { instruction: `Roast 200°C 70 min until juices run clear.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 20 },
      { type: 'cooking', minutes: 60 }
      ],
      totalMinutes: 80,
    },
  },
  {
    id: 'grilled-salmon-with-lemon',
    name: 'Grilled Salmon with Lemon',
    description: 'Grilled Salmon with Lemon — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free', 'low-carb'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillets', name: 'salmon fillets', quantity: '2x180g' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'dill', name: 'dill', quantity: 'handful' },
    { ingredientId: 'asparagus', name: 'asparagus', quantity: '200g' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Season salmon with garlic, lemon, oil, salt.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Grill 4 min per side.` },
        { instruction: `Grill asparagus alongside.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve with fresh dill.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    description: 'Chicken Tikka Masala — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 540,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '150ml' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'tikka-paste', name: 'tikka paste', quantity: '3 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tsp' },
    { ingredientId: 'basmati-rice', name: 'basmati rice', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 9,
      steps: [
        { instruction: `Marinate chicken in tikka paste.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Sear until charred.` },
        { instruction: `Sauté onion, garlic, ginger.` },
        { instruction: `Add tomatoes, simmer 15 min.` },
        { instruction: `Add cream, simmer 5 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with rice.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 9 },
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'pasta-carbonara',
    name: 'Pasta Carbonara',
    description: 'Pasta Carbonara — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 620,
    servings: 2,
    ingredients: [
    { ingredientId: 'spaghetti', name: 'spaghetti', quantity: '200g' },
    { ingredientId: 'guanciale', name: 'guanciale', quantity: '100g' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '80g' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'generous' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '1 clove' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Whisk eggs with parmesan, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 15,
      steps: [
        { instruction: `Cook pasta.` },
        { instruction: `Fry guanciale and garlic until crispy.` },
        { instruction: `Remove pan from heat, combine pasta, guanciale, egg mixture quickly.` },
        { instruction: `Stir vigorously.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 15 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'vegetable-curry',
    name: 'Vegetable Curry',
    description: 'Vegetable Curry — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan', 'gluten-free'],
    calories: 350,
    servings: 4,
    ingredients: [
    { ingredientId: 'chickpeas', name: 'chickpeas', quantity: '400g' },
    { ingredientId: 'cauliflower', name: 'cauliflower', quantity: '1' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '100g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '400ml' },
    { ingredientId: 'curry-paste', name: 'curry paste', quantity: '2 tbsp' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'basmati-rice', name: 'basmati rice', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Sauté onion and curry paste.` },
        { instruction: `Add cauliflower, chickpeas, tomatoes.` },
        { instruction: `Simmer 15 min.` },
        { instruction: `Add coconut milk, spinach.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with rice.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'chicken-parmesan',
    name: 'Chicken Parmesan',
    description: 'Chicken Parmesan — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 580,
    servings: 2,
    ingredients: [
    { ingredientId: 'chicken-breasts', name: 'chicken breasts', quantity: '2' },
    { ingredientId: 'breadcrumbs', name: 'breadcrumbs', quantity: '½ cup' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '60g' },
    { ingredientId: 'marinara-sauce', name: 'marinara sauce', quantity: '200ml' },
    { ingredientId: 'mozzarella', name: 'mozzarella', quantity: '100g' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' },
    { ingredientId: 'basil', name: 'basil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 8,
      steps: [
        { instruction: `Coat chicken in beaten egg then breadcrumb-parmesan mix.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Fry 5 min per side.` },
        { instruction: `Bake 180°C 15 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Transfer to baking dish, top with marinara and mozzarella.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 8 },
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'beef-stew',
    name: 'Beef Stew',
    description: 'Beef Stew — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 490,
    servings: 4,
    ingredients: [
    { ingredientId: 'beef-chuck', name: 'beef chuck', quantity: '800g' },
    { ingredientId: 'potatoes', name: 'potatoes', quantity: '3' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '3' },
    { ingredientId: 'onion', name: 'onion', quantity: '2' },
    { ingredientId: 'beef-stock', name: 'beef stock', quantity: '500ml' },
    { ingredientId: 'red-wine', name: 'red wine', quantity: '200ml' },
    { ingredientId: 'tomato-paste', name: 'tomato paste', quantity: '2 tbsp' },
    { ingredientId: 'thyme', name: 'thyme', quantity: 'to taste' },
    { ingredientId: 'garlic', name: 'garlic', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 120,
      steps: [
        { instruction: `Brown beef in batches.` },
        { instruction: `Sauté veg.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add stock, tomato paste, herbs, beef.` },
        { instruction: `Braise 90 min until tender.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 120 }
      ],
      totalMinutes: 120,
    },
  },
  {
    id: 'mushroom-risotto',
    name: 'Mushroom Risotto',
    description: 'Mushroom Risotto — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegetarian'],
    calories: 450,
    servings: 2,
    ingredients: [
    { ingredientId: 'arborio-rice', name: 'arborio rice', quantity: '200g' },
    { ingredientId: 'mixed-mushrooms', name: 'mixed mushrooms', quantity: '300g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '100ml' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '60g' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'vegetable-stock', name: 'vegetable stock', quantity: '1L' },
    { ingredientId: 'thyme', name: 'thyme', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 35,
      steps: [
        { instruction: `Sauté mushrooms, set aside.` },
        { instruction: `Fry onion, garlic.` },
        { instruction: `Add rice, toast.` },
        { instruction: `Add wine, stir.` },
        { instruction: `Add stock ladle by ladle stirring constantly 20 min.` },
        { instruction: `Finish with butter, parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 35 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'thai-green-curry',
    name: 'Thai Green Curry',
    description: 'Thai Green Curry — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['gluten-free'],
    calories: 480,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '400ml' },
    { ingredientId: 'green-curry-paste', name: 'green curry paste', quantity: '3 tbsp' },
    { ingredientId: 'eggplant', name: 'eggplant', quantity: '1' },
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '1' },
    { ingredientId: 'fish-sauce', name: 'fish sauce', quantity: '1 tbsp' },
    { ingredientId: 'basil', name: 'basil', quantity: 'handful' },
    { ingredientId: 'jasmine-rice', name: 'jasmine rice', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Cook curry paste in oil 1 min.` },
        { instruction: `Add chicken, sear.` },
        { instruction: `Pour in coconut milk, add veg, fish sauce.` },
        { instruction: `Simmer 15 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Top with basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'eggplant-parmesan',
    name: 'Eggplant Parmesan',
    description: 'Eggplant Parmesan — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegetarian'],
    calories: 430,
    servings: 4,
    ingredients: [
    { ingredientId: 'eggplant', name: 'eggplant', quantity: '2 large' },
    { ingredientId: 'marinara-sauce', name: 'marinara sauce', quantity: '400ml' },
    { ingredientId: 'mozzarella', name: 'mozzarella', quantity: '200g' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '80g' },
    { ingredientId: 'breadcrumbs', name: 'breadcrumbs', quantity: '½ cup' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' },
    { ingredientId: 'basil', name: 'basil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 11,
      steps: [
        { instruction: `Coat in egg and breadcrumbs.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 27,
      steps: [
        { instruction: `Slice eggplant, salt 10 min, pat dry.` },
        { instruction: `Fry until golden.` },
        { instruction: `Bake 180°C 20 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 7,
      steps: [
        { instruction: `Layer with marinara and cheeses.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 11 },
      { type: 'cooking', minutes: 27 },
      { type: 'assembling', minutes: 7 }
      ],
      totalMinutes: 45,
    },
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Butter Chicken — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free'],
    calories: 520,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-breasts', name: 'chicken breasts', quantity: '600g' },
    { ingredientId: 'butter', name: 'butter', quantity: '3 tbsp' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '150ml' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'garam-masala', name: 'garam masala', quantity: '2 tsp' },
    { ingredientId: 'cardamom', name: 'cardamom', quantity: '½ tsp' },
    { ingredientId: 'naan', name: 'naan', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 9,
      steps: [
        { instruction: `Marinate chicken in yogurt and spices.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 26,
      steps: [
        { instruction: `Sear in butter.` },
        { instruction: `Blend tomatoes, ginger, garlic, fry sauce.` },
        { instruction: `Add chicken, cream.` },
        { instruction: `Simmer 15 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 9 },
      { type: 'cooking', minutes: 26 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'grilled-steak-chimichurri',
    name: 'Grilled Steak Chimichurri',
    description: 'Grilled Steak Chimichurri — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'gluten-free'],
    calories: 510,
    servings: 2,
    ingredients: [
    { ingredientId: 'ribeye-steak', name: 'ribeye steak', quantity: '2x250g' },
    { ingredientId: 'flat-parsley', name: 'flat parsley', quantity: '1 cup' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '4 tbsp' },
    { ingredientId: 'red-wine-vinegar', name: 'red wine vinegar', quantity: '2 tbsp' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'to taste' },
    { ingredientId: 'oregano', name: 'oregano', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Make chimichurri: blend parsley, garlic, oil, vinegar, chili, oregano.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Rest steak at room temp.` },
        { instruction: `Grill 3 min per side for medium-rare.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Rest, serve with chimichurri.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'korean-bbq-beef-bulgogi',
    name: 'Korean BBQ Beef (Bulgogi)',
    description: 'Korean BBQ Beef (Bulgogi) — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 490,
    servings: 4,
    ingredients: [
    { ingredientId: 'beef-sirloin', name: 'beef sirloin', quantity: '600g thinly sliced' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '3 tbsp' },
    { ingredientId: 'sesame-oil', name: 'sesame oil', quantity: '2 tbsp' },
    { ingredientId: 'brown-sugar', name: 'brown sugar', quantity: '2 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tbsp' },
    { ingredientId: 'pear', name: 'pear', quantity: '½ grated' },
    { ingredientId: 'jasmine-rice', name: 'jasmine rice', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Marinate beef 1h in soy, sesame, sugar, garlic, ginger, pear.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Grill on high heat 2-3 min per side.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Serve with rice and lettuce wraps.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'miso-glazed-salmon',
    name: 'Miso Glazed Salmon',
    description: 'Miso Glazed Salmon — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillets', name: 'salmon fillets', quantity: '2x180g' },
    { ingredientId: 'white-miso', name: 'white miso', quantity: '2 tbsp' },
    { ingredientId: 'mirin', name: 'mirin', quantity: '1 tbsp' },
    { ingredientId: 'sake', name: 'sake', quantity: '1 tbsp' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '1 tsp' },
    { ingredientId: 'bok-choy', name: 'bok choy', quantity: '2' },
    { ingredientId: 'sesame-seeds', name: 'sesame seeds', quantity: 'to taste' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Mix miso, mirin, sake, sugar.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Marinate salmon 30 min.` },
        { instruction: `Broil 10 min until caramelized.` },
        { instruction: `Steam bok choy.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with sesame seeds and spring onion.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'pasta-puttanesca',
    name: 'Pasta Puttanesca',
    description: 'Pasta Puttanesca — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'spaghetti', name: 'spaghetti', quantity: '200g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'kalamata-olives', name: 'kalamata olives', quantity: '100g' },
    { ingredientId: 'capers', name: 'capers', quantity: '2 tbsp' },
    { ingredientId: 'anchovy-fillets', name: 'anchovy fillets', quantity: '4' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'to taste' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 20,
      steps: [
        { instruction: `Fry anchovies, garlic, chili in oil.` },
        { instruction: `Add tomatoes, olives, capers.` },
        { instruction: `Simmer 15 min.` },
        { instruction: `Toss with cooked pasta.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 20 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'beef-stroganoff',
    name: 'Beef Stroganoff',
    description: 'Beef Stroganoff — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 560,
    servings: 4,
    ingredients: [
    { ingredientId: 'beef-strips', name: 'beef strips', quantity: '500g' },
    { ingredientId: 'mushrooms', name: 'mushrooms', quantity: '300g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '150ml' },
    { ingredientId: 'beef-stock', name: 'beef stock', quantity: '200ml' },
    { ingredientId: 'dijon-mustard', name: 'dijon mustard', quantity: '1 tsp' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'egg-noodles', name: 'egg noodles', quantity: '300g' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Cook noodles.` },
        { instruction: `Sear beef strips.` },
        { instruction: `Sauté mushrooms and onion in butter.` },
        { instruction: `Add stock, mustard, simmer 5 min.` },
        { instruction: `Stir in sour cream.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Serve over noodles.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'shrimp-fajitas',
    name: 'Shrimp Fajitas',
    description: 'Shrimp Fajitas — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['quick'],
    calories: 450,
    servings: 2,
    ingredients: [
    { ingredientId: 'shrimp', name: 'shrimp', quantity: '400g' },
    { ingredientId: 'flour-tortillas', name: 'flour tortillas', quantity: '6' },
    { ingredientId: 'bell-peppers', name: 'bell peppers', quantity: '2' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'fajita-seasoning', name: 'fajita seasoning', quantity: '1 tbsp' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '2 tbsp' },
    { ingredientId: 'lime', name: 'lime', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Add shrimp and seasoning, cook 3 min.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Sauté peppers and onion until soft.` },
        { instruction: `Warm tortillas.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve with avocado and sour cream.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma',
    description: 'Chicken Shawarma — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 500,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'shawarma-spice-blend', name: 'shawarma spice blend', quantity: '2 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'pita-bread', name: 'pita bread', quantity: '4' },
    { ingredientId: 'tahini-sauce', name: 'tahini sauce', quantity: '4 tbsp' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '2' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 8,
      steps: [
        { instruction: `Marinate chicken in spices and oil.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Grill or roast until cooked.` },
        { instruction: `Slice thin.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve in pita with tahini, tomato, cucumber, onion.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 8 },
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'baked-cod-with-vegetables',
    name: 'Baked Cod with Vegetables',
    description: 'Baked Cod with Vegetables — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-calorie', 'gluten-free'],
    calories: 330,
    servings: 2,
    ingredients: [
    { ingredientId: 'cod-fillets', name: 'cod fillets', quantity: '2x180g' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' },
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '1' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'capers', name: 'capers', quantity: '1 tbsp' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Arrange veg in baking dish.` },
        { instruction: `Place cod on top.` },
        { instruction: `Drizzle with oil and lemon.` },
        { instruction: `Add capers, garlic.` },
        { instruction: `Bake 200°C 20 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Top with parsley.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'vegetable-lasagna',
    name: 'Vegetable Lasagna',
    description: 'Vegetable Lasagna — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegetarian'],
    calories: 480,
    servings: 6,
    ingredients: [
    { ingredientId: 'lasagna-sheets', name: 'lasagna sheets', quantity: '12' },
    { ingredientId: 'ricotta', name: 'ricotta', quantity: '400g' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '200g' },
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '2' },
    { ingredientId: 'marinara-sauce', name: 'marinara sauce', quantity: '600ml' },
    { ingredientId: 'mozzarella', name: 'mozzarella', quantity: '200g' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '80g' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 15,
      steps: [
        { instruction: `Mix ricotta, spinach, egg.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 36,
      steps: [
        { instruction: `Bake 180°C 40 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 9,
      steps: [
        { instruction: `Layer: marinara, lasagna, ricotta mix, veg, repeat.` },
        { instruction: `Top with mozzarella, parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 15 },
      { type: 'cooking', minutes: 36 },
      { type: 'assembling', minutes: 9 }
      ],
      totalMinutes: 60,
    },
  },
  {
    id: 'pork-carnitas',
    name: 'Pork Carnitas',
    description: 'Pork Carnitas — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 510,
    servings: 6,
    ingredients: [
    { ingredientId: 'pork-shoulder', name: 'pork shoulder', quantity: '1.5kg' },
    { ingredientId: 'orange-juice', name: 'orange juice', quantity: '½ cup' },
    { ingredientId: 'lime-juice', name: 'lime juice', quantity: '2 tbsp' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'oregano', name: 'oregano', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'tortillas', name: 'tortillas', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 23,
      steps: [
        { instruction: `Season pork.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 53,
      steps: [
        { instruction: `Braise with juices, garlic, spices 60-90 min until tender.` },
        { instruction: `Shred.` },
        { instruction: `Broil 5 min to crisp edges.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 14,
      steps: [
        { instruction: `Serve in tortillas.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 23 },
      { type: 'cooking', minutes: 53 },
      { type: 'assembling', minutes: 14 }
      ],
      totalMinutes: 90,
    },
  },
  {
    id: 'prawn-linguine',
    name: 'Prawn Linguine',
    description: 'Prawn Linguine — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'quick'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'linguine', name: 'linguine', quantity: '200g' },
    { ingredientId: 'prawns', name: 'prawns', quantity: '300g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '100ml' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 20,
      steps: [
        { instruction: `Cook pasta.` },
        { instruction: `Sauté garlic and chili in oil.` },
        { instruction: `Add prawns, cook 2 min.` },
        { instruction: `Add tomatoes, wine, reduce.` },
        { instruction: `Toss with pasta and parsley.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 20 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'chicken-marsala',
    name: 'Chicken Marsala',
    description: 'Chicken Marsala — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'chicken-breasts', name: 'chicken breasts', quantity: '2' },
    { ingredientId: 'marsala-wine', name: 'marsala wine', quantity: '150ml' },
    { ingredientId: 'mushrooms', name: 'mushrooms', quantity: '200g' },
    { ingredientId: 'shallots', name: 'shallots', quantity: '2' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '100ml' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'flour', name: 'flour', quantity: '2 tbsp' },
    { ingredientId: 'thyme', name: 'thyme', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Dredge chicken in flour.` },
        { instruction: `Pan-fry 5 min per side.` },
        { instruction: `Set aside.` },
        { instruction: `Sauté shallots, mushrooms.` },
        { instruction: `Add marsala, stock, thyme.` },
        { instruction: `Simmer 5 min.` },
        { instruction: `Return chicken to sauce.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'bbq-baby-back-ribs',
    name: 'BBQ Baby Back Ribs',
    description: 'BBQ Baby Back Ribs — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 650,
    servings: 4,
    ingredients: [
    { ingredientId: 'baby-back-ribs', name: 'baby back ribs', quantity: '1.5kg' },
    { ingredientId: 'bbq-sauce', name: 'BBQ sauce', quantity: '200ml' },
    { ingredientId: 'brown-sugar', name: 'brown sugar', quantity: '2 tbsp' },
    { ingredientId: 'paprika', name: 'paprika', quantity: '1 tbsp' },
    { ingredientId: 'garlic-powder', name: 'garlic powder', quantity: '1 tsp' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 45,
      steps: [
        { instruction: `Rub ribs with spice mix.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 135,
      steps: [
        { instruction: `Wrap in foil.` },
        { instruction: `Bake 150°C 2h until tender.` },
        { instruction: `Brush with BBQ sauce.` },
        { instruction: `Broil 10 min until caramelized.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 45 },
      { type: 'cooking', minutes: 135 }
      ],
      totalMinutes: 180,
    },
  },
  {
    id: 'spaghetti-aglio-e-olio',
    name: 'Spaghetti Aglio e Olio',
    description: 'Spaghetti Aglio e Olio — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan', 'quick'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'spaghetti', name: 'spaghetti', quantity: '200g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '6 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '4 tbsp' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: '1 tsp' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'handful' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: 'to serve' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Cook pasta.` },
        { instruction: `Gently warm garlic and chili in oil until golden.` },
        { instruction: `Toss.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Add pasta, reserved pasta water, parsley.` },
        { instruction: `Top with parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'honey-garlic-salmon',
    name: 'Honey Garlic Salmon',
    description: 'Honey Garlic Salmon — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free', 'quick'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillets', name: 'salmon fillets', quantity: '2x180g' },
    { ingredientId: 'honey', name: 'honey', quantity: '2 tbsp' },
    { ingredientId: 'soy-sauce', name: 'soy sauce', quantity: '2 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'sesame-seeds', name: 'sesame seeds', quantity: 'to taste' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Mix honey, soy, minced garlic.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Pan-sear salmon 4 min per side, basting with glaze.` },
        { instruction: `Rest 2 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with sesame and spring onion.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Tandoori Chicken — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free'],
    calories: 420,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'yogurt', name: 'yogurt', quantity: '150ml' },
    { ingredientId: 'tandoori-spice', name: 'tandoori spice', quantity: '2 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tbsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '2 tbsp' },
    { ingredientId: 'naan', name: 'naan', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 15,
      steps: [
        { instruction: `Marinate in yogurt, spices, garlic, ginger, lemon 4h minimum.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 36,
      steps: [
        { instruction: `Score chicken.` },
        { instruction: `Grill or bake 200°C 35 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 9,
      steps: [
        { instruction: `Serve with naan and mint chutney.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 15 },
      { type: 'cooking', minutes: 36 },
      { type: 'assembling', minutes: 9 }
      ],
      totalMinutes: 60,
    },
  },
  {
    id: 'veggie-pad-thai',
    name: 'Veggie Pad Thai',
    description: 'Veggie Pad Thai — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan'],
    calories: 440,
    servings: 2,
    ingredients: [
    { ingredientId: 'rice-noodles', name: 'rice noodles', quantity: '200g' },
    { ingredientId: 'tofu', name: 'tofu', quantity: '200g' },
    { ingredientId: 'bean-sprouts', name: 'bean sprouts', quantity: '1 cup' },
    { ingredientId: 'egg', name: 'egg', quantity: '2' },
    { ingredientId: 'spring-onion', name: 'spring onion', quantity: '4' },
    { ingredientId: 'peanuts', name: 'peanuts', quantity: '3 tbsp' },
    { ingredientId: 'tamarind-paste', name: 'tamarind paste', quantity: '2 tbsp' },
    { ingredientId: 'fish-sauce', name: 'fish sauce', quantity: '1 tbsp' },
    { ingredientId: 'lime', name: 'lime', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Soak noodles.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Pan-fry tofu until golden.` },
        { instruction: `Push aside, scramble eggs.` },
        { instruction: `Add noodles, tamarind, fish sauce.` },
        { instruction: `Toss with sprouts, spring onion.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Top with peanuts and lime.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'chicken-piccata',
    name: 'Chicken Piccata',
    description: 'Chicken Piccata — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'chicken-breasts', name: 'chicken breasts', quantity: '2' },
    { ingredientId: 'flour', name: 'flour', quantity: '3 tbsp' },
    { ingredientId: 'butter', name: 'butter', quantity: '3 tbsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '3 tbsp' },
    { ingredientId: 'capers', name: 'capers', quantity: '2 tbsp' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '100ml' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '100ml' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 20,
      steps: [
        { instruction: `Pound chicken thin, dredge in flour.` },
        { instruction: `Sear in butter 3 min per side.` },
        { instruction: `Set aside.` },
        { instruction: `Deglaze with wine, add stock, lemon, capers.` },
        { instruction: `Simmer 5 min.` },
        { instruction: `Pour over chicken.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 20 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'stuffed-bell-peppers',
    name: 'Stuffed Bell Peppers',
    description: 'Stuffed Bell Peppers — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 450,
    servings: 4,
    ingredients: [
    { ingredientId: 'bell-peppers', name: 'bell peppers', quantity: '4 large' },
    { ingredientId: 'beef-mince', name: 'beef mince', quantity: '400g' },
    { ingredientId: 'cooked-rice', name: 'cooked rice', quantity: '1 cup' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '200g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'mozzarella', name: 'mozzarella', quantity: '80g' },
    { ingredientId: 'italian-herbs', name: 'Italian herbs', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 11,
      steps: [
        { instruction: `Mix with rice, tomatoes, herbs.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 27,
      steps: [
        { instruction: `Cut pepper tops, remove seeds.` },
        { instruction: `Brown beef with onion, garlic.` },
        { instruction: `Bake 180°C 30 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 7,
      steps: [
        { instruction: `Fill peppers, top with cheese.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 11 },
      { type: 'cooking', minutes: 27 },
      { type: 'assembling', minutes: 7 }
      ],
      totalMinutes: 45,
    },
  },
  {
    id: 'seafood-paella',
    name: 'Seafood Paella',
    description: 'Seafood Paella — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['gluten-free'],
    calories: 560,
    servings: 4,
    ingredients: [
    { ingredientId: 'paella-rice', name: 'paella rice', quantity: '300g' },
    { ingredientId: 'mixed-seafood', name: 'mixed seafood', quantity: '400g' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '1L' },
    { ingredientId: 'saffron', name: 'saffron', quantity: 'pinch' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'tomatoes', name: 'tomatoes', quantity: '2' },
    { ingredientId: 'paprika', name: 'paprika', quantity: '1 tsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 45,
      steps: [
        { instruction: `Fry onion, garlic in oil.` },
        { instruction: `Add paprika, tomatoes.` },
        { instruction: `Toast rice.` },
        { instruction: `Add saffron stock, cook 15 min.` },
        { instruction: `Nestle seafood in rice, cook 10 min uncovered.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 45 }
      ],
      totalMinutes: 45,
    },
  },
  {
    id: 'lemon-herb-roast-salmon',
    name: 'Lemon Herb Roast Salmon',
    description: 'Lemon Herb Roast Salmon — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'gluten-free'],
    calories: 400,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillet', name: 'salmon fillet', quantity: '2x180g' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'fresh-dill', name: 'fresh dill', quantity: 'handful' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'capers', name: 'capers', quantity: '1 tbsp' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Mix oil, lemon, garlic, dill.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 15,
      steps: [
        { instruction: `Arrange salmon and tomatoes in baking dish.` },
        { instruction: `Pour over salmon.` },
        { instruction: `Scatter capers.` },
        { instruction: `Bake 200°C 15 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 15 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'pork-schnitzel',
    name: 'Pork Schnitzel',
    description: 'Pork Schnitzel — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 520,
    servings: 2,
    ingredients: [
    { ingredientId: 'pork-loin', name: 'pork loin', quantity: '2 pieces' },
    { ingredientId: 'breadcrumbs', name: 'breadcrumbs', quantity: '1 cup' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'flour', name: 'flour', quantity: '¼ cup' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'oil-for-frying', name: 'oil for frying', quantity: 'to taste' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' },
    { ingredientId: 'potato-salad', name: 'potato salad', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Pound pork thin, season.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Coat in flour, beaten egg, breadcrumbs.` },
        { instruction: `Fry in oil 3-4 min per side until golden brown.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Serve with lemon wedges.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'one-pot-lemon-chicken',
    name: 'One-Pot Lemon Chicken',
    description: 'One-Pot Lemon Chicken — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free', 'quick'],
    calories: 460,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '5 cloves' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '300ml' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '3 sprigs' },
    { ingredientId: 'olives', name: 'olives', quantity: '½ cup' },
    { ingredientId: 'capers', name: 'capers', quantity: '2 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 30,
      steps: [
        { instruction: `Sear chicken skin-side down 8 min.` },
        { instruction: `Flip, add garlic, thyme, stock, lemon slices, olives, capers.` },
        { instruction: `Cover and cook 20 min until tender.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 30 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'vegan-buddha-bowl',
    name: 'Vegan Buddha Bowl',
    description: 'Vegan Buddha Bowl — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan', 'gluten-free'],
    calories: 480,
    servings: 2,
    ingredients: [
    { ingredientId: 'roasted-sweet-potato', name: 'roasted sweet potato', quantity: '1' },
    { ingredientId: 'quinoa', name: 'quinoa', quantity: '½ cup dry' },
    { ingredientId: 'kale', name: 'kale', quantity: '2 cups' },
    { ingredientId: 'chickpeas', name: 'chickpeas', quantity: '200g roasted' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'tahini-dressing', name: 'tahini dressing', quantity: '3 tbsp' },
    { ingredientId: 'pumpkin-seeds', name: 'pumpkin seeds', quantity: '2 tbsp' },
    { ingredientId: 'turmeric', name: 'turmeric', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Roast chickpeas and sweet potato.` },
        { instruction: `Cook quinoa.` },
        { instruction: `Massage kale.` },
        { instruction: `Drizzle tahini dressing.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Assemble bowls.` },
        { instruction: `Top with seeds.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'creamy-garlic-shrimp',
    name: 'Creamy Garlic Shrimp',
    description: 'Creamy Garlic Shrimp — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'quick'],
    calories: 430,
    servings: 2,
    ingredients: [
    { ingredientId: 'shrimp', name: 'shrimp', quantity: '400g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '150ml' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '40g' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '80g' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: 'to taste' },
    { ingredientId: 'chili-flakes', name: 'chili flakes', quantity: 'to taste' },
    { ingredientId: 'pasta', name: 'pasta', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Sear shrimp 2 min per side, set aside.` },
        { instruction: `Fry garlic in butter.` },
        { instruction: `Add cream, parmesan, spinach.` },
        { instruction: `Simmer 3 min.` },
        { instruction: `Return shrimp.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve over pasta.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'pasta-cacio-e-pepe',
    name: 'Pasta Cacio e Pepe',
    description: 'Pasta Cacio e Pepe — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegetarian', 'quick'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'spaghetti', name: 'spaghetti', quantity: '200g' },
    { ingredientId: 'pecorino-romano', name: 'pecorino romano', quantity: '80g' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '40g' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: '1 tbsp freshly ground' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'pasta-water', name: 'pasta water', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 15,
      steps: [
        { instruction: `Cook pasta al dente.` },
        { instruction: `Toast pepper in dry pan.` },
        { instruction: `Add butter, pasta water.` },
        { instruction: `Add pasta, toss.` },
        { instruction: `Remove from heat, add cheese gradually, toss vigorously.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 15 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chicken-fajita-bowl',
    name: 'Chicken Fajita Bowl',
    description: 'Chicken Fajita Bowl — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free'],
    calories: 490,
    servings: 2,
    ingredients: [
    { ingredientId: 'chicken-breast', name: 'chicken breast', quantity: '2' },
    { ingredientId: 'bell-peppers', name: 'bell peppers', quantity: '2' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'fajita-spice', name: 'fajita spice', quantity: '1 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'jasmine-rice', name: 'jasmine rice', quantity: '½ cup dry' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '2 tbsp' },
    { ingredientId: 'lime', name: 'lime', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Season chicken with fajita spice.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Grill with peppers and onion.` },
        { instruction: `Slice chicken.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Serve over rice with avocado, sour cream, lime.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'fish-tacos',
    name: 'Fish Tacos',
    description: 'Fish Tacos — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['quick'],
    calories: 420,
    servings: 2,
    ingredients: [
    { ingredientId: 'white-fish-fillets', name: 'white fish fillets', quantity: '400g' },
    { ingredientId: 'corn-tortillas', name: 'corn tortillas', quantity: '8' },
    { ingredientId: 'red-cabbage', name: 'red cabbage', quantity: '1 cup shredded' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '3 tbsp' },
    { ingredientId: 'lime', name: 'lime', quantity: '1' },
    { ingredientId: 'avocado', name: 'avocado', quantity: '1' },
    { ingredientId: 'chipotle-sauce', name: 'chipotle sauce', quantity: '1 tbsp' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Coat fish in seasoned flour.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Fry 3 min per side.` },
        { instruction: `Warm tortillas.` },
        { instruction: `Drizzle sour cream and chipotle.` },
        { instruction: `Lime and coriander.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Fill with fish, cabbage, avocado.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'vegan-lentil-curry',
    name: 'Vegan Lentil Curry',
    description: 'Vegan Lentil Curry — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan', 'high-protein'],
    calories: 380,
    servings: 4,
    ingredients: [
    { ingredientId: 'red-lentils', name: 'red lentils', quantity: '200g' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '400ml' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'ginger', name: 'ginger', quantity: '1 tbsp' },
    { ingredientId: 'curry-powder', name: 'curry powder', quantity: '2 tbsp' },
    { ingredientId: 'spinach', name: 'spinach', quantity: '100g' },
    { ingredientId: 'naan', name: 'naan', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Sauté onion, garlic, ginger.` },
        { instruction: `Add curry powder, tomatoes, lentils, coconut milk.` },
        { instruction: `Simmer 20 min.` },
        { instruction: `Stir in spinach.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with naan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'chicken-alfredo-pasta',
    name: 'Chicken Alfredo Pasta',
    description: 'Chicken Alfredo Pasta — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 620,
    servings: 2,
    ingredients: [
    { ingredientId: 'fettuccine', name: 'fettuccine', quantity: '200g' },
    { ingredientId: 'chicken-breast', name: 'chicken breast', quantity: '2' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '200ml' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '80g' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'nutmeg', name: 'nutmeg', quantity: 'pinch' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Cook pasta.` },
        { instruction: `Sear chicken 6 min per side.` },
        { instruction: `Slice.` },
        { instruction: `Fry garlic in butter, add cream, parmesan, nutmeg.` },
        { instruction: `Simmer 3 min.` },
        { instruction: `Toss with pasta and chicken.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'moroccan-chicken-tagine',
    name: 'Moroccan Chicken Tagine',
    description: 'Moroccan Chicken Tagine — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['gluten-free'],
    calories: 480,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'preserved-lemon', name: 'preserved lemon', quantity: '½' },
    { ingredientId: 'olives', name: 'olives', quantity: '½ cup' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'ras-el-hanout', name: 'ras el hanout', quantity: '2 tbsp' },
    { ingredientId: 'chicken-stock', name: 'chicken stock', quantity: '200ml' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' },
    { ingredientId: 'couscous', name: 'couscous', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 42,
      steps: [
        { instruction: `Brown chicken.` },
        { instruction: `Sauté onion, garlic, ras el hanout.` },
        { instruction: `Simmer covered 35 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 8,
      steps: [
        { instruction: `Add stock, preserved lemon, olives.` },
        { instruction: `Serve with couscous.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 42 },
      { type: 'assembling', minutes: 8 }
      ],
      totalMinutes: 50,
    },
  },
  {
    id: 'lamb-ragu-pasta',
    name: 'Lamb Ragu Pasta',
    description: 'Lamb Ragu Pasta — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 590,
    servings: 4,
    ingredients: [
    { ingredientId: 'lamb-shoulder', name: 'lamb shoulder', quantity: '600g minced' },
    { ingredientId: 'pappardelle', name: 'pappardelle', quantity: '300g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'red-wine', name: 'red wine', quantity: '200ml' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '1' },
    { ingredientId: 'celery', name: 'celery', quantity: '1' },
    { ingredientId: 'rosemary', name: 'rosemary', quantity: '2 sprigs' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 76,
      steps: [
        { instruction: `Brown lamb with veg.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add tomatoes, rosemary.` },
        { instruction: `Braise 60 min low.` },
        { instruction: `Toss with pasta.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 14,
      steps: [
        { instruction: `Top with parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 76 },
      { type: 'assembling', minutes: 14 }
      ],
      totalMinutes: 90,
    },
  },
  {
    id: 'grilled-veggie-skewers',
    name: 'Grilled Veggie Skewers',
    description: 'Grilled Veggie Skewers — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 260,
    servings: 4,
    ingredients: [
    { ingredientId: 'zucchini', name: 'zucchini', quantity: '2' },
    { ingredientId: 'bell-peppers', name: 'bell peppers', quantity: '2' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '1' },
    { ingredientId: 'mushrooms', name: 'mushrooms', quantity: '200g' },
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '1 cup' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'balsamic-vinegar', name: 'balsamic vinegar', quantity: '1 tbsp' },
    { ingredientId: 'herbs-de-provence', name: 'herbs de Provence', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 17,
      steps: [
        { instruction: `Thread vegetables on skewers.` },
        { instruction: `Brush with oil-balsamic mix, herbs.` },
        { instruction: `Grill 4 min per side.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Serve with couscous or flatbread.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 17 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'beef-meatballs-in-tomato',
    name: 'Beef Meatballs in Tomato',
    description: 'Beef Meatballs in Tomato — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 520,
    servings: 4,
    ingredients: [
    { ingredientId: 'beef-mince', name: 'beef mince', quantity: '500g' },
    { ingredientId: 'breadcrumbs', name: 'breadcrumbs', quantity: '½ cup' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'basil', name: 'basil', quantity: 'handful' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '40g' },
    { ingredientId: 'pasta', name: 'pasta', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 30,
      steps: [
        { instruction: `Roll meatballs, sear in oil.` },
        { instruction: `Make sauce: sauté onion, add tomatoes, basil, simmer 15 min.` },
        { instruction: `Add meatballs, cook 15 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with pasta.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 30 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'pan-seared-scallops',
    name: 'Pan-Seared Scallops',
    description: 'Pan-Seared Scallops — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'gluten-free'],
    calories: 370,
    servings: 2,
    ingredients: [
    { ingredientId: 'scallops', name: 'scallops', quantity: '400g' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'capers', name: 'capers', quantity: '1 tbsp' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '50ml' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'to taste' },
    { ingredientId: 'pea-pur-e', name: 'pea purée', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Pat scallops very dry.` },
        { instruction: `Sear in hot butter 2 min per side until golden.` },
        { instruction: `Remove.` },
        { instruction: `Add garlic, wine, capers to pan.` },
        { instruction: `Reduce 1 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve scallops with sauce.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'chicken-gyros',
    name: 'Chicken Gyros',
    description: 'Chicken Gyros — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 510,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'pita-bread', name: 'pita bread', quantity: '4' },
    { ingredientId: 'tzatziki', name: 'tzatziki', quantity: '4 tbsp' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '2' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '1' },
    { ingredientId: 'fries', name: 'fries', quantity: 'optional' },
    { ingredientId: 'greek-seasoning', name: 'Greek seasoning', quantity: '1 tbsp' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 6,
      steps: [
        { instruction: `Marinate chicken in Greek seasoning and oil.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 15,
      steps: [
        { instruction: `Grill until cooked through, 6 min per side.` },
        { instruction: `Slice.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Fill pitas with chicken, tomato, onion, tzatziki.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 6 },
      { type: 'cooking', minutes: 15 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'creamy-mushroom-pasta',
    name: 'Creamy Mushroom Pasta',
    description: 'Creamy Mushroom Pasta — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['vegetarian'],
    calories: 510,
    servings: 2,
    ingredients: [
    { ingredientId: 'tagliatelle', name: 'tagliatelle', quantity: '200g' },
    { ingredientId: 'mixed-mushrooms', name: 'mixed mushrooms', quantity: '300g' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '150ml' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: '50g' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '1 tsp' },
    { ingredientId: 'butter', name: 'butter', quantity: '1 tbsp' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '50ml' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 20,
      steps: [
        { instruction: `Cook pasta.` },
        { instruction: `Sauté mushrooms with garlic and thyme in butter until golden.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add cream, simmer 3 min.` },
        { instruction: `Toss with pasta and parmesan.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 20 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'baked-chicken-thighs',
    name: 'Baked Chicken Thighs',
    description: 'Baked Chicken Thighs — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'gluten-free', 'quick'],
    calories: 440,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '8 bone-in' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '4 cloves' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'paprika', name: 'paprika', quantity: '1 tsp' },
    { ingredientId: 'thyme', name: 'thyme', quantity: '1 tsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' },
    { ingredientId: 'green-beans', name: 'green beans', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 9,
      steps: [
        { instruction: `Mix oil, garlic, paprika, thyme, lemon, salt, pepper.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Coat chicken.` },
        { instruction: `Bake 200°C 30 min until skin is golden and crisp.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 5,
      steps: [
        { instruction: `Serve with green beans.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 9 },
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 5 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'steamed-mussels-white-wine',
    name: 'Steamed Mussels White Wine',
    description: 'Steamed Mussels White Wine — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['quick', 'gluten-free'],
    calories: 380,
    servings: 2,
    ingredients: [
    { ingredientId: 'mussels', name: 'mussels', quantity: '1kg cleaned' },
    { ingredientId: 'white-wine', name: 'white wine', quantity: '200ml' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'shallots', name: 'shallots', quantity: '2' },
    { ingredientId: 'butter', name: 'butter', quantity: '2 tbsp' },
    { ingredientId: 'parsley', name: 'parsley', quantity: 'handful' },
    { ingredientId: 'cream', name: 'cream', quantity: '50ml' },
    { ingredientId: 'sourdough', name: 'sourdough', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Sauté shallots and garlic in butter.` },
        { instruction: `Add wine and cream, bring to boil.` },
        { instruction: `Add mussels, cover 4-5 min until open.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Top with parsley.` },
        { instruction: `Serve with bread.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'italian-sausage-pasta',
    name: 'Italian Sausage Pasta',
    description: 'Italian Sausage Pasta — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 560,
    servings: 4,
    ingredients: [
    { ingredientId: 'italian-sausage', name: 'Italian sausage', quantity: '400g' },
    { ingredientId: 'rigatoni', name: 'rigatoni', quantity: '300g' },
    { ingredientId: 'canned-tomatoes', name: 'canned tomatoes', quantity: '400g' },
    { ingredientId: 'onion', name: 'onion', quantity: '1' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '2 cloves' },
    { ingredientId: 'fennel-seeds', name: 'fennel seeds', quantity: '½ tsp' },
    { ingredientId: 'red-wine', name: 'red wine', quantity: '100ml' },
    { ingredientId: 'parmesan', name: 'parmesan', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 25,
      steps: [
        { instruction: `Remove sausage from casing, brown in pan.` },
        { instruction: `Sauté onion, garlic, fennel.` },
        { instruction: `Add wine, reduce.` },
        { instruction: `Add tomatoes, simmer 15 min.` },
        { instruction: `Toss with pasta.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 25 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'thai-red-curry-chicken',
    name: 'Thai Red Curry Chicken',
    description: 'Thai Red Curry Chicken — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['gluten-free'],
    calories: 490,
    servings: 4,
    ingredients: [
    { ingredientId: 'chicken-thighs', name: 'chicken thighs', quantity: '600g' },
    { ingredientId: 'coconut-milk', name: 'coconut milk', quantity: '400ml' },
    { ingredientId: 'red-curry-paste', name: 'red curry paste', quantity: '3 tbsp' },
    { ingredientId: 'bamboo-shoots', name: 'bamboo shoots', quantity: '200g' },
    { ingredientId: 'fish-sauce', name: 'fish sauce', quantity: '1 tbsp' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '1 tsp' },
    { ingredientId: 'thai-basil', name: 'Thai basil', quantity: 'to taste' },
    { ingredientId: 'jasmine-rice', name: 'jasmine rice', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 21,
      steps: [
        { instruction: `Cook curry paste in oil 1 min.` },
        { instruction: `Add chicken, cook 5 min.` },
        { instruction: `Add coconut milk, bamboo shoots, fish sauce, sugar.` },
        { instruction: `Simmer 15 min.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 4,
      steps: [
        { instruction: `Serve with rice and basil.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 21 },
      { type: 'assembling', minutes: 4 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'garlic-butter-salmon',
    name: 'Garlic Butter Salmon',
    description: 'Garlic Butter Salmon — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'quick'],
    calories: 440,
    servings: 2,
    ingredients: [
    { ingredientId: 'salmon-fillets', name: 'salmon fillets', quantity: '2x180g' },
    { ingredientId: 'butter', name: 'butter', quantity: '3 tbsp' },
    { ingredientId: 'garlic', name: 'garlic', quantity: '3 cloves' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '1' },
    { ingredientId: 'capers', name: 'capers', quantity: '1 tbsp' },
    { ingredientId: 'dill', name: 'dill', quantity: 'handful' },
    { ingredientId: 'asparagus', name: 'asparagus', quantity: '200g' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 13,
      steps: [
        { instruction: `Pan-sear salmon in butter 4 min per side.` },
        { instruction: `Add garlic, capers, lemon juice in last minute.` },
        { instruction: `Grill asparagus.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve with fresh dill.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 13 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'pork-belly-tacos',
    name: 'Pork Belly Tacos',
    description: 'Pork Belly Tacos — a delicious homemade recipe.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 580,
    servings: 4,
    ingredients: [
    { ingredientId: 'pork-belly', name: 'pork belly', quantity: '600g' },
    { ingredientId: 'corn-tortillas', name: 'corn tortillas', quantity: '8' },
    { ingredientId: 'lime', name: 'lime', quantity: '1' },
    { ingredientId: 'red-cabbage', name: 'red cabbage', quantity: '1 cup' },
    { ingredientId: 'pickled-jalape-os', name: 'pickled jalapeños', quantity: '2 tbsp' },
    { ingredientId: 'sour-cream', name: 'sour cream', quantity: '3 tbsp' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'to taste' },
    { ingredientId: 'soy-hoisin-glaze', name: 'soy-hoisin glaze', quantity: '3 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 76,
      steps: [
        { instruction: `Braise pork belly in soy-hoisin glaze 60 min until tender.` },
        { instruction: `Slice, caramelize cut side in pan.` },
        { instruction: `Warm tortillas.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 14,
      steps: [
        { instruction: `Fill with pork, cabbage, jalapeños, sour cream.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 76 },
      { type: 'assembling', minutes: 14 }
      ],
      totalMinutes: 90,
    },
  },
  {
    id: 'chocolate-mousse',
    name: 'Chocolate Mousse',
    description: 'Chocolate Mousse — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian', 'gluten-free'],
    calories: 320,
    servings: 4,
    ingredients: [
    { ingredientId: 'dark-chocolate', name: 'dark chocolate', quantity: '200g' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '4 separated' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '2 tbsp' },
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '50ml' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '½ tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Whisk yolks with sugar, fold into chocolate.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 11,
      steps: [
        { instruction: `Melt chocolate.` },
        { instruction: `Whip cream, fold in.` },
        { instruction: `Whip egg whites to peaks, fold gently.` },
        { instruction: `Chill 2h.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 11 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'apple-crumble',
    name: 'Apple Crumble',
    description: 'Apple Crumble — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 380,
    servings: 4,
    ingredients: [
    { ingredientId: 'apples', name: 'apples', quantity: '4 large' },
    { ingredientId: 'oats', name: 'oats', quantity: '1 cup' },
    { ingredientId: 'butter', name: 'butter', quantity: '80g' },
    { ingredientId: 'brown-sugar', name: 'brown sugar', quantity: '60g' },
    { ingredientId: 'flour', name: 'flour', quantity: '½ cup' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '1 tsp' },
    { ingredientId: 'lemon-juice', name: 'lemon juice', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 10,
      steps: [
        { instruction: `Peel and slice apples, toss with lemon and cinnamon.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 30,
      steps: [
        { instruction: `Place in dish.` },
        { instruction: `Mix oats, flour, sugar, butter into crumble.` },
        { instruction: `Top apples.` },
        { instruction: `Bake 180°C 30 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 10 },
      { type: 'cooking', minutes: 30 }
      ],
      totalMinutes: 40,
    },
  },
  {
    id: 'chocolate-brownies',
    name: 'Chocolate Brownies',
    description: 'Chocolate Brownies — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 340,
    servings: 16,
    ingredients: [
    { ingredientId: 'dark-chocolate', name: 'dark chocolate', quantity: '200g' },
    { ingredientId: 'butter', name: 'butter', quantity: '100g' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '150g' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'flour', name: 'flour', quantity: '80g' },
    { ingredientId: 'cocoa-powder', name: 'cocoa powder', quantity: '2 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '1 tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 8,
      steps: [
        { instruction: `Whisk with sugar.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 22,
      steps: [
        { instruction: `Melt chocolate and butter.` },
        { instruction: `Add eggs one at a time.` },
        { instruction: `Fold in flour, cocoa, salt.` },
        { instruction: `Bake 180°C 20-22 min until just set.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 8 },
      { type: 'cooking', minutes: 22 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'mango-sorbet',
    name: 'Mango Sorbet',
    description: 'Mango Sorbet — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 180,
    servings: 4,
    ingredients: [
    { ingredientId: 'frozen-mango', name: 'frozen mango', quantity: '600g' },
    { ingredientId: 'lime-juice', name: 'lime juice', quantity: '2 tbsp' },
    { ingredientId: 'honey', name: 'honey', quantity: '2 tbsp' },
    { ingredientId: 'coconut-water', name: 'coconut water', quantity: '¼ cup' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Blend all ingredients until smooth.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve immediately as soft-serve, or freeze 2h for firmer texture.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    description: 'Tiramisu — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 420,
    servings: 6,
    ingredients: [
    { ingredientId: 'mascarpone', name: 'mascarpone', quantity: '500g' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '4 separated' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '80g' },
    { ingredientId: 'espresso', name: 'espresso', quantity: '200ml' },
    { ingredientId: 'ladyfinger-biscuits', name: 'ladyfinger biscuits', quantity: '200g' },
    { ingredientId: 'cocoa-powder', name: 'cocoa powder', quantity: 'to taste' },
    { ingredientId: 'kahl-a', name: 'Kahlúa', quantity: '2 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 5,
      steps: [
        { instruction: `Whisk yolks with sugar until pale.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 12,
      steps: [
        { instruction: `Fold in mascarpone.` },
        { instruction: `Whip whites, fold in.` },
        { instruction: `Dip biscuits in espresso-Kahlúa.` },
        { instruction: `Dust cocoa.` },
        { instruction: `Chill 4h.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 3,
      steps: [
        { instruction: `Layer biscuits and cream.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 5 },
      { type: 'cooking', minutes: 12 },
      { type: 'assembling', minutes: 3 }
      ],
      totalMinutes: 20,
    },
  },
  {
    id: 'greek-yogurt-bark',
    name: 'Greek Yogurt Bark',
    description: 'Greek Yogurt Bark — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian', 'gluten-free', 'low-calorie'],
    calories: 190,
    servings: 4,
    ingredients: [
    { ingredientId: 'greek-yogurt', name: 'Greek yogurt', quantity: '400g' },
    { ingredientId: 'honey', name: 'honey', quantity: '2 tbsp' },
    { ingredientId: 'mixed-berries', name: 'mixed berries', quantity: '1 cup' },
    { ingredientId: 'granola', name: 'granola', quantity: '¼ cup' },
    { ingredientId: 'pistachios', name: 'pistachios', quantity: '2 tbsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Drizzle honey.` },
        { instruction: `Scatter berries, granola, pistachios.` },
        { instruction: `Freeze 3h.` },
        { instruction: `Break into pieces.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Spread yogurt on lined tray.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'hummus-with-veg',
    name: 'Hummus with Veg',
    description: 'Hummus with Veg — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 200,
    servings: 2,
    ingredients: [
    { ingredientId: 'hummus', name: 'hummus', quantity: '200g' },
    { ingredientId: 'carrot', name: 'carrot', quantity: '2' },
    { ingredientId: 'cucumber', name: 'cucumber', quantity: '1' },
    { ingredientId: 'bell-pepper', name: 'bell pepper', quantity: '1' },
    { ingredientId: 'celery', name: 'celery', quantity: '2 sticks' },
    { ingredientId: 'pita-chips', name: 'pita chips', quantity: '½ cup' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tsp' },
    { ingredientId: 'paprika', name: 'paprika', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Arrange vegetables cut into sticks around hummus.` },
        { instruction: `Drizzle oil on hummus, dust paprika.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Serve with pita chips.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'roasted-chickpeas',
    name: 'Roasted Chickpeas',
    description: 'Roasted Chickpeas — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free'],
    calories: 210,
    servings: 4,
    ingredients: [
    { ingredientId: 'chickpeas', name: 'chickpeas', quantity: '2 tins drained' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '2 tbsp' },
    { ingredientId: 'smoked-paprika', name: 'smoked paprika', quantity: '1 tsp' },
    { ingredientId: 'cumin', name: 'cumin', quantity: '½ tsp' },
    { ingredientId: 'garlic-powder', name: 'garlic powder', quantity: '½ tsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'cayenne', name: 'cayenne', quantity: 'pinch' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 35,
      steps: [
        { instruction: `Pat chickpeas very dry.` },
        { instruction: `Toss with oil and spices.` },
        { instruction: `Roast 200°C 25-30 min shaking halfway, until crispy.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 35 }
      ],
      totalMinutes: 35,
    },
  },
  {
    id: 'guacamole-and-chips',
    name: 'Guacamole and Chips',
    description: 'Guacamole and Chips — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free'],
    calories: 290,
    servings: 2,
    ingredients: [
    { ingredientId: 'avocados', name: 'avocados', quantity: '2 ripe' },
    { ingredientId: 'lime', name: 'lime', quantity: '1' },
    { ingredientId: 'red-onion', name: 'red onion', quantity: '¼' },
    { ingredientId: 'tomato', name: 'tomato', quantity: '1' },
    { ingredientId: 'jalape-o', name: 'jalapeño', quantity: '½' },
    { ingredientId: 'coriander', name: 'coriander', quantity: 'handful' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'tortilla-chips', name: 'tortilla chips', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mash avocados.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Mix in lime juice, finely diced onion, tomato, jalapeño, coriander, salt.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 0,
      steps: [
        { instruction: `Serve with chips.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: 0 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'protein-energy-balls',
    name: 'Protein Energy Balls',
    description: 'Protein Energy Balls — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free', 'high-protein'],
    calories: 180,
    servings: 12,
    ingredients: [
    { ingredientId: 'rolled-oats', name: 'rolled oats', quantity: '1 cup' },
    { ingredientId: 'peanut-butter', name: 'peanut butter', quantity: '½ cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '3 tbsp' },
    { ingredientId: 'protein-powder', name: 'protein powder', quantity: '1 scoop' },
    { ingredientId: 'dark-chocolate-chips', name: 'dark chocolate chips', quantity: '50g' },
    { ingredientId: 'chia-seeds', name: 'chia seeds', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix all ingredients until combined.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 7,
      steps: [
        { instruction: `Roll into balls.` },
        { instruction: `Refrigerate 30 min to set.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 7 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'banana-ice-cream',
    name: 'Banana Ice Cream',
    description: 'Banana Ice Cream — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 150,
    servings: 2,
    ingredients: [
    { ingredientId: 'frozen-bananas', name: 'frozen bananas', quantity: '3' },
    { ingredientId: 'peanut-butter', name: 'peanut butter', quantity: '1 tbsp' },
    { ingredientId: 'cocoa-powder', name: 'cocoa powder', quantity: '1 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '½ tsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Blend frozen bananas until smooth and creamy.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Add peanut butter, cocoa, vanilla.` },
        { instruction: `Blend again.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Serve immediately.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'dark-chocolate-bark',
    name: 'Dark Chocolate Bark',
    description: 'Dark Chocolate Bark — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free'],
    calories: 220,
    servings: 8,
    ingredients: [
    { ingredientId: 'dark-chocolate', name: 'dark chocolate', quantity: '300g' },
    { ingredientId: 'pistachios', name: 'pistachios', quantity: '50g' },
    { ingredientId: 'dried-cranberries', name: 'dried cranberries', quantity: '50g' },
    { ingredientId: 'sea-salt-flakes', name: 'sea salt flakes', quantity: '½ tsp' },
    { ingredientId: 'orange-zest', name: 'orange zest', quantity: '1 tsp' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 8,
      steps: [
        { instruction: `Melt chocolate over bain-marie.` },
        { instruction: `Scatter pistachios, cranberries, orange zest, sea salt.` },
        { instruction: `Chill until set.` },
        { instruction: `Break into shards.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Spread thin on lined tray.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 8 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'caprese-bites',
    name: 'Caprese Bites',
    description: 'Caprese Bites — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian', 'gluten-free', 'low-calorie'],
    calories: 160,
    servings: 2,
    ingredients: [
    { ingredientId: 'cherry-tomatoes', name: 'cherry tomatoes', quantity: '250g' },
    { ingredientId: 'mini-mozzarella-balls', name: 'mini mozzarella balls', quantity: '200g' },
    { ingredientId: 'basil-leaves', name: 'basil leaves', quantity: 'handful' },
    { ingredientId: 'olive-oil', name: 'olive oil', quantity: '1 tbsp' },
    { ingredientId: 'balsamic-glaze', name: 'balsamic glaze', quantity: '1 tbsp' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' },
    { ingredientId: 'black-pepper', name: 'black pepper', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Season.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Thread tomato, basil, mozzarella onto skewers.` },
        { instruction: `Drizzle with oil and balsamic glaze.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'frozen-yogurt-bark',
    name: 'Frozen Yogurt Bark',
    description: 'Frozen Yogurt Bark — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian', 'gluten-free', 'low-calorie'],
    calories: 170,
    servings: 4,
    ingredients: [
    { ingredientId: 'plain-yogurt', name: 'plain yogurt', quantity: '400g' },
    { ingredientId: 'honey', name: 'honey', quantity: '2 tbsp' },
    { ingredientId: 'strawberries', name: 'strawberries', quantity: '1 cup sliced' },
    { ingredientId: 'kiwi', name: 'kiwi', quantity: '2 sliced' },
    { ingredientId: 'shredded-coconut', name: 'shredded coconut', quantity: '2 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Mix yogurt and honey.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Freeze 3h.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: -3,
      steps: [
        { instruction: `Spread on tray.` },
        { instruction: `Top with fruit and coconut.` },
        { instruction: `Break into pieces and serve.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 },
      { type: 'assembling', minutes: -3 }
      ],
      totalMinutes: 5,
    },
  },
  {
    id: 'panna-cotta-with-berries',
    name: 'Panna Cotta with Berries',
    description: 'Panna Cotta with Berries — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian', 'gluten-free'],
    calories: 290,
    servings: 4,
    ingredients: [
    { ingredientId: 'heavy-cream', name: 'heavy cream', quantity: '400ml' },
    { ingredientId: 'milk', name: 'milk', quantity: '100ml' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '50g' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '1 pod' },
    { ingredientId: 'gelatin', name: 'gelatin', quantity: '3 sheets' },
    { ingredientId: 'mixed-berries', name: 'mixed berries', quantity: '200g' },
    { ingredientId: 'honey', name: 'honey', quantity: '1 tbsp' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 4,
      steps: [
        { instruction: `Dissolve soaked gelatin.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 9,
      steps: [
        { instruction: `Heat cream, milk, sugar, vanilla.` },
        { instruction: `Pour into moulds.` },
        { instruction: `Chill 4h.` }
      ],
    },
    {
      type: 'assembling',
      durationMinutes: 2,
      steps: [
        { instruction: `Serve with berries and honey.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 4 },
      { type: 'cooking', minutes: 9 },
      { type: 'assembling', minutes: 2 }
      ],
      totalMinutes: 15,
    },
  },
  {
    id: 'almond-energy-bites',
    name: 'Almond Energy Bites',
    description: 'Almond Energy Bites — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free'],
    calories: 190,
    servings: 12,
    ingredients: [
    { ingredientId: 'almond-flour', name: 'almond flour', quantity: '1 cup' },
    { ingredientId: 'almond-butter', name: 'almond butter', quantity: '½ cup' },
    { ingredientId: 'honey', name: 'honey', quantity: '2 tbsp' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '1 tsp' },
    { ingredientId: 'dark-chocolate-chips', name: 'dark chocolate chips', quantity: '50g' },
    { ingredientId: 'sea-salt', name: 'sea salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'cooking',
      durationMinutes: 10,
      steps: [
        { instruction: `Combine all ingredients.` },
        { instruction: `Roll into 12 balls.` },
        { instruction: `Refrigerate 20 min to firm up.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'cooking', minutes: 10 }
      ],
      totalMinutes: 10,
    },
  },
  {
    id: 'mini-cheesecakes',
    name: 'Mini Cheesecakes',
    description: 'Mini Cheesecakes — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 310,
    servings: 6,
    ingredients: [
    { ingredientId: 'cream-cheese', name: 'cream cheese', quantity: '300g' },
    { ingredientId: 'digestive-biscuits', name: 'digestive biscuits', quantity: '150g' },
    { ingredientId: 'butter', name: 'butter', quantity: '60g' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '60g' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '2' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '1 tsp' },
    { ingredientId: 'lemon', name: 'lemon', quantity: '½' },
    { ingredientId: 'berry-compote', name: 'berry compote', quantity: 'to serve' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 8,
      steps: [
        { instruction: `Crush biscuits with butter for base.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 22,
      steps: [
        { instruction: `Press into lined muffin tin.` },
        { instruction: `Beat cream cheese, sugar, eggs, vanilla, lemon.` },
        { instruction: `Pour over bases.` },
        { instruction: `Bake 160°C 20 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 8 },
      { type: 'cooking', minutes: 22 }
      ],
      totalMinutes: 30,
    },
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Chocolate Chip Cookies — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 280,
    servings: 12,
    ingredients: [
    { ingredientId: 'flour', name: 'flour', quantity: '200g' },
    { ingredientId: 'butter', name: 'butter', quantity: '125g' },
    { ingredientId: 'brown-sugar', name: 'brown sugar', quantity: '100g' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '50g' },
    { ingredientId: 'egg', name: 'egg', quantity: '1' },
    { ingredientId: 'vanilla', name: 'vanilla', quantity: '1 tsp' },
    { ingredientId: 'baking-soda', name: 'baking soda', quantity: '½ tsp' },
    { ingredientId: 'dark-chocolate-chips', name: 'dark chocolate chips', quantity: '150g' },
    { ingredientId: 'salt', name: 'salt', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 6,
      steps: [
        { instruction: `Cream butter and sugars.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 19,
      steps: [
        { instruction: `Beat in egg and vanilla.` },
        { instruction: `Fold in flour, soda, salt, chips.` },
        { instruction: `Scoop onto tray.` },
        { instruction: `Bake 180°C 10-12 min.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 6 },
      { type: 'cooking', minutes: 19 }
      ],
      totalMinutes: 25,
    },
  },
  {
    id: 'popcorn-with-sea-salt',
    name: 'Popcorn with Sea Salt',
    description: 'Popcorn with Sea Salt — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegan', 'gluten-free', 'low-calorie'],
    calories: 130,
    servings: 4,
    ingredients: [
    { ingredientId: 'popcorn-kernels', name: 'popcorn kernels', quantity: '½ cup' },
    { ingredientId: 'coconut-oil', name: 'coconut oil', quantity: '1 tbsp' },
    { ingredientId: 'sea-salt-flakes', name: 'sea salt flakes', quantity: '½ tsp' },
    { ingredientId: 'nutritional-yeast-1-tbsp', name: 'nutritional yeast (1 tbsp', quantity: 'to taste' },
    { ingredientId: 'optional', name: 'optional)', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 3,
      steps: [
        { instruction: `Season with sea salt and nutritional yeast.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 5,
      steps: [
        { instruction: `Heat oil in large pot over medium heat.` },
        { instruction: `Add kernels, cover.` },
        { instruction: `Shake often until popping stops.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 3 },
      { type: 'cooking', minutes: 5 }
      ],
      totalMinutes: 8,
    },
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    description: 'Carrot Cake — a delicious homemade recipe.',
    mealTimes: ['snack'],
    tags: ['vegetarian'],
    calories: 350,
    servings: 12,
    ingredients: [
    { ingredientId: 'grated-carrot', name: 'grated carrot', quantity: '300g' },
    { ingredientId: 'flour', name: 'flour', quantity: '250g' },
    { ingredientId: 'sugar', name: 'sugar', quantity: '200g' },
    { ingredientId: 'vegetable-oil', name: 'vegetable oil', quantity: '150ml' },
    { ingredientId: 'eggs', name: 'eggs', quantity: '3' },
    { ingredientId: 'cinnamon', name: 'cinnamon', quantity: '1½ tsp' },
    { ingredientId: 'baking-soda', name: 'baking soda', quantity: '1 tsp' },
    { ingredientId: 'walnuts', name: 'walnuts', quantity: '80g' },
    { ingredientId: 'cream-cheese-frosting', name: 'cream cheese frosting', quantity: 'to taste' }
    ],
    sections: [
    {
      type: 'preparing',
      durationMinutes: 11,
      steps: [
        { instruction: `Whisk oil, sugar, eggs.` }
      ],
    },
    {
      type: 'cooking',
      durationMinutes: 34,
      steps: [
        { instruction: `Add grated carrot.` },
        { instruction: `Fold in flour, cinnamon, soda, walnuts.` },
        { instruction: `Bake 180°C 30 min.` },
        { instruction: `Cool, frost with cream cheese icing.` }
      ],
    }
    ],
    timeBreakdown: {
      sections: [
      { type: 'preparing', minutes: 11 },
      { type: 'cooking', minutes: 34 }
      ],
      totalMinutes: 45,
    },
  },
];
