import { Recipe } from '../types';

export const recipes: Recipe[] = [
  // ─── BREAKFAST ───────────────────────────────────────────────────────────────
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Crispy sourdough topped with smashed avocado, lemon, and chili flakes.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie'],
    calories: 320,
    servings: 1,
    ingredients: [
      { ingredientId: 'sourdough-bread', name: 'Sourdough bread', quantity: '2 slices' },
      { ingredientId: 'avocado', name: 'Avocado', quantity: '1 ripe' },
      { ingredientId: 'lemon', name: 'Lemon', quantity: '½' },
      { ingredientId: 'olive-oil', name: 'Olive oil', quantity: '1 tsp', substitutionGroup: 'oil' },
      { ingredientId: 'chili-flakes', name: 'Chili flakes', quantity: 'a pinch' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
      { ingredientId: 'black-pepper', name: 'Black pepper', quantity: 'to taste' },
    ],
    sections: [
      {
        type: 'preparing',
        durationMinutes: 5,
        steps: [
          { instruction: 'Halve the avocado, remove the pit, and scoop the flesh into a bowl.' },
          { instruction: 'Add lemon juice, salt, and pepper. Mash with a fork to your preferred texture.' },
        ],
      },
      {
        type: 'cooking',
        durationMinutes: 5,
        steps: [
          { instruction: 'Toast the sourdough slices until golden and crispy.' },
          { instruction: 'Drizzle each slice lightly with olive oil.' },
        ],
      },
      {
        type: 'assembling',
        durationMinutes: 2,
        steps: [
          { instruction: 'Spread the avocado mixture generously over each toast.' },
          { instruction: 'Finish with chili flakes and an extra pinch of salt.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'preparing', minutes: 5 },
        { type: 'cooking', minutes: 5 },
        { type: 'assembling', minutes: 2 },
      ],
      totalMinutes: 12,
    },
  },

  {
    id: 'oatmeal-berries',
    name: 'Oatmeal with Berries',
    description: 'Creamy oats with mixed berries and a drizzle of honey.',
    mealTimes: ['breakfast'],
    tags: ['vegetarian', 'low-calorie', 'high-protein'],
    calories: 280,
    servings: 1,
    ingredients: [
      { ingredientId: 'rolled-oats', name: 'Rolled oats', quantity: '80g' },
      { ingredientId: 'whole-milk', name: 'Milk', quantity: '200ml', substitutionGroup: 'milk' },
      { ingredientId: 'mixed-berries', name: 'Mixed berries', quantity: 'a handful' },
      { ingredientId: 'honey', name: 'Honey', quantity: '1 tbsp', substitutionGroup: 'sweetener' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'a pinch' },
    ],
    sections: [
      {
        type: 'cooking',
        durationMinutes: 8,
        steps: [
          { instruction: 'Combine oats, milk, and a pinch of salt in a small saucepan.' },
          { instruction: 'Cook over medium heat, stirring regularly, for 5–7 minutes until the oats are soft and creamy.' },
          { instruction: 'If too thick, add a splash more milk.' },
        ],
      },
      {
        type: 'assembling',
        durationMinutes: 2,
        steps: [
          { instruction: 'Pour into a bowl. Top with mixed berries.' },
          { instruction: 'Drizzle with honey and serve immediately.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cooking', minutes: 8 },
        { type: 'assembling', minutes: 2 },
      ],
      totalMinutes: 10,
    },
  },

  // ─── LUNCH ───────────────────────────────────────────────────────────────────
  {
    id: 'chicken-stir-fry',
    name: 'Chicken Stir-Fry',
    description: 'Quick and colourful stir-fry with chicken, peppers, and soy sauce.',
    mealTimes: ['lunch', 'dinner'],
    tags: ['high-protein', 'low-carb'],
    calories: 480,
    servings: 2,
    ingredients: [
      { ingredientId: 'chicken-breast', name: 'Chicken breast', quantity: '300g' },
      { ingredientId: 'red-bell-pepper', name: 'Red bell pepper', quantity: '1' },
      { ingredientId: 'yellow-bell-pepper', name: 'Yellow bell pepper', quantity: '1' },
      { ingredientId: 'broccoli', name: 'Broccoli', quantity: '150g' },
      { ingredientId: 'garlic', name: 'Garlic', quantity: '3 cloves' },
      { ingredientId: 'ginger', name: 'Fresh ginger', quantity: '1 tsp' },
      { ingredientId: 'soy-sauce', name: 'Soy sauce', quantity: '3 tbsp' },
      { ingredientId: 'vegetable-oil', name: 'Vegetable oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'sesame-oil', name: 'Sesame oil', quantity: '1 tsp' },
      { ingredientId: 'spring-onion', name: 'Spring onion', quantity: '2 stalks', substitutionGroup: 'greenOnion' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 10,
        steps: [
          { instruction: 'Red bell pepper', cutStyle: 'julienne', target: 'red bell pepper' },
          { instruction: 'Yellow bell pepper', cutStyle: 'julienne', target: 'yellow bell pepper' },
          { instruction: 'Chicken breast', cutStyle: 'slice', target: 'chicken breast' },
          { instruction: 'Broccoli into bite-sized florets', cutStyle: 'rough chop', target: 'broccoli' },
          { instruction: 'Garlic cloves', cutStyle: 'mince', target: 'garlic' },
          { instruction: 'Fresh ginger', cutStyle: 'mince', target: 'ginger' },
          { instruction: 'Spring onion', cutStyle: 'slice', target: 'spring onion' },
        ],
      },
      {
        type: 'cooking',
        durationMinutes: 12,
        steps: [
          { instruction: 'Heat vegetable oil in a wok or large pan over high heat until shimmering.' },
          { instruction: 'Add chicken slices in a single layer. Cook without stirring for 2 minutes, then toss. Cook another 2 minutes until golden. Remove and set aside.' },
          { instruction: 'In the same pan, add garlic and ginger. Stir-fry for 30 seconds.' },
          { instruction: 'Add broccoli and peppers. Stir-fry on high heat for 4 minutes until just tender.' },
          { instruction: 'Return chicken to the pan. Pour in soy sauce and sesame oil. Toss everything together for 1 minute.' },
          { instruction: 'Garnish with sliced spring onion and serve immediately.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 10 },
        { type: 'cooking', minutes: 12 },
      ],
      totalMinutes: 22,
    },
  },

  {
    id: 'caprese-salad',
    name: 'Caprese Salad',
    description: 'Classic Italian salad with mozzarella, tomato, and fresh basil.',
    mealTimes: ['lunch', 'snack'],
    tags: ['vegetarian', 'low-calorie', 'low-carb', 'quick'],
    calories: 240,
    servings: 2,
    ingredients: [
      { ingredientId: 'mozzarella', name: 'Fresh mozzarella', quantity: '200g' },
      { ingredientId: 'tomato', name: 'Large tomatoes', quantity: '3' },
      { ingredientId: 'fresh-basil', name: 'Fresh basil', quantity: 'a handful' },
      { ingredientId: 'olive-oil', name: 'Olive oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'balsamic-vinegar', name: 'Balsamic vinegar', quantity: '1 tbsp', substitutionGroup: 'vinegar' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
      { ingredientId: 'black-pepper', name: 'Black pepper', quantity: 'to taste' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 5,
        steps: [
          { instruction: 'Tomatoes', cutStyle: 'slice', target: 'tomatoes' },
          { instruction: 'Fresh mozzarella', cutStyle: 'slice', target: 'mozzarella' },
        ],
      },
      {
        type: 'assembling',
        durationMinutes: 3,
        steps: [
          { instruction: 'Alternate tomato and mozzarella slices on a large plate.' },
          { instruction: 'Tuck fresh basil leaves between each slice.' },
          { instruction: 'Drizzle generously with olive oil and balsamic vinegar.' },
          { instruction: 'Season with salt and freshly ground pepper. Serve at room temperature.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 5 },
        { type: 'assembling', minutes: 3 },
      ],
      totalMinutes: 8,
    },
  },

  // ─── DINNER ──────────────────────────────────────────────────────────────────
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Slow-cooked beef ragu on al dente spaghetti, finished with parmesan.',
    mealTimes: ['dinner'],
    tags: ['high-protein'],
    calories: 620,
    servings: 4,
    ingredients: [
      { ingredientId: 'spaghetti', name: 'Spaghetti', quantity: '400g' },
      { ingredientId: 'ground-beef', name: 'Ground beef', quantity: '500g' },
      { ingredientId: 'onion', name: 'Onion', quantity: '1 large' },
      { ingredientId: 'carrot', name: 'Carrot', quantity: '1' },
      { ingredientId: 'celery', name: 'Celery stalk', quantity: '1' },
      { ingredientId: 'garlic', name: 'Garlic', quantity: '3 cloves' },
      { ingredientId: 'tomato-passata', name: 'Tomato passata', quantity: '400g' },
      { ingredientId: 'tomato-paste', name: 'Tomato paste', quantity: '2 tbsp' },
      { ingredientId: 'olive-oil', name: 'Olive oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'parmesan', name: 'Parmesan', quantity: '50g', substitutionGroup: 'cheese' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
      { ingredientId: 'black-pepper', name: 'Black pepper', quantity: 'to taste' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 10,
        steps: [
          { instruction: 'Onion', cutStyle: 'fine dice', target: 'onion' },
          { instruction: 'Carrot', cutStyle: 'fine dice', target: 'carrot' },
          { instruction: 'Celery stalk', cutStyle: 'fine dice', target: 'celery' },
          { instruction: 'Garlic cloves', cutStyle: 'mince', target: 'garlic' },
        ],
      },
      {
        type: 'cooking',
        durationMinutes: 40,
        steps: [
          { instruction: 'Heat olive oil in a large heavy-bottomed pot over medium heat.' },
          { instruction: 'Add onion, carrot, and celery. Cook for 8 minutes, stirring occasionally, until softened.' },
          { instruction: 'Add garlic and cook for 1 minute until fragrant.' },
          { instruction: 'Increase heat to high. Add ground beef and cook, breaking it apart, until fully browned — about 8 minutes.' },
          { instruction: 'Add tomato paste. Stir and cook for 2 minutes.' },
          { instruction: 'Pour in passata. Season with salt and pepper. Reduce heat to low, cover partially, and simmer for 20 minutes.' },
          { instruction: 'Cook spaghetti in heavily salted boiling water according to package instructions until al dente. Reserve a cup of pasta water.' },
          { instruction: 'Drain pasta and toss with the ragu, adding a splash of pasta water to loosen the sauce.' },
        ],
      },
      {
        type: 'assembling',
        durationMinutes: 2,
        steps: [
          { instruction: 'Divide into bowls. Finish with freshly grated parmesan.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 10 },
        { type: 'cooking', minutes: 40 },
        { type: 'assembling', minutes: 2 },
      ],
      totalMinutes: 52,
    },
  },

  {
    id: 'veggie-curry',
    name: 'Vegetable Curry',
    description: 'Aromatic chickpea and vegetable curry in a rich tomato-coconut sauce.',
    mealTimes: ['lunch', 'dinner'],
    tags: ['vegan', 'vegetarian', 'high-protein'],
    calories: 390,
    servings: 3,
    ingredients: [
      { ingredientId: 'chickpeas', name: 'Cooked chickpeas', quantity: '400g' },
      { ingredientId: 'onion', name: 'Onion', quantity: '1 large' },
      { ingredientId: 'garlic', name: 'Garlic', quantity: '4 cloves' },
      { ingredientId: 'ginger', name: 'Fresh ginger', quantity: '2 tsp' },
      { ingredientId: 'tomato', name: 'Tomatoes', quantity: '3 medium' },
      { ingredientId: 'coconut-milk', name: 'Coconut milk', quantity: '200ml', substitutionGroup: 'milk' },
      { ingredientId: 'spinach', name: 'Baby spinach', quantity: '100g' },
      { ingredientId: 'vegetable-oil', name: 'Vegetable oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'curry-powder', name: 'Curry powder', quantity: '2 tsp' },
      { ingredientId: 'cumin', name: 'Ground cumin', quantity: '1 tsp' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 8,
        steps: [
          { instruction: 'Onion', cutStyle: 'fine dice', target: 'onion' },
          { instruction: 'Tomatoes', cutStyle: 'rough chop', target: 'tomatoes' },
          { instruction: 'Garlic cloves', cutStyle: 'mince', target: 'garlic' },
          { instruction: 'Fresh ginger', cutStyle: 'mince', target: 'ginger' },
        ],
      },
      {
        type: 'cooking',
        durationMinutes: 25,
        steps: [
          { instruction: 'Heat oil in a large pan over medium heat.' },
          { instruction: 'Cook onion for 6 minutes until golden and soft.' },
          { instruction: 'Add garlic, ginger, curry powder, and cumin. Stir for 1 minute until fragrant.' },
          { instruction: 'Add tomatoes. Cook for 5 minutes, stirring, until they break down.' },
          { instruction: 'Add chickpeas and coconut milk. Stir well. Simmer for 10 minutes.' },
          { instruction: 'Stir in spinach and cook for 2 minutes until just wilted. Season with salt.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 8 },
        { type: 'cooking', minutes: 25 },
      ],
      totalMinutes: 33,
    },
  },

  // ─── SNACK ───────────────────────────────────────────────────────────────────
  {
    id: 'greek-yogurt-parfait',
    name: 'Greek Yogurt Parfait',
    description: 'Layered Greek yogurt with granola and fresh fruit.',
    mealTimes: ['breakfast', 'snack'],
    tags: ['vegetarian', 'low-calorie', 'high-protein', 'quick'],
    calories: 210,
    servings: 1,
    ingredients: [
      { ingredientId: 'greek-yogurt', name: 'Greek yogurt', quantity: '150g' },
      { ingredientId: 'granola', name: 'Granola', quantity: '40g' },
      { ingredientId: 'mixed-berries', name: 'Mixed berries', quantity: 'a handful' },
      { ingredientId: 'honey', name: 'Honey', quantity: '1 tsp', substitutionGroup: 'sweetener' },
    ],
    sections: [
      {
        type: 'assembling',
        durationMinutes: 3,
        steps: [
          { instruction: 'Spoon half the yogurt into a glass or bowl.' },
          { instruction: 'Add a layer of granola, then half the berries.' },
          { instruction: 'Repeat the layers with remaining yogurt, granola, and berries.' },
          { instruction: 'Drizzle with honey and serve.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [{ type: 'assembling', minutes: 3 }],
      totalMinutes: 3,
    },
  },

  {
    id: 'hummus-veggie-sticks',
    name: 'Hummus with Veggie Sticks',
    description: 'Creamy hummus served with fresh-cut crunchy vegetables.',
    mealTimes: ['snack'],
    tags: ['vegan', 'vegetarian', 'low-calorie', 'high-protein', 'quick'],
    calories: 180,
    servings: 2,
    ingredients: [
      { ingredientId: 'hummus', name: 'Hummus', quantity: '150g' },
      { ingredientId: 'carrot', name: 'Carrots', quantity: '2 medium' },
      { ingredientId: 'cucumber', name: 'Cucumber', quantity: '½' },
      { ingredientId: 'red-bell-pepper', name: 'Red bell pepper', quantity: '1' },
      { ingredientId: 'celery', name: 'Celery stalks', quantity: '2' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 6,
        steps: [
          { instruction: 'Carrots', cutStyle: 'julienne', target: 'carrots' },
          { instruction: 'Cucumber', cutStyle: 'julienne', target: 'cucumber' },
          { instruction: 'Red bell pepper', cutStyle: 'julienne', target: 'red bell pepper' },
          { instruction: 'Celery stalks', cutStyle: 'slice', target: 'celery' },
        ],
      },
      {
        type: 'assembling',
        durationMinutes: 1,
        steps: [
          { instruction: 'Spoon hummus into a bowl. Arrange veggie sticks around it and serve.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 6 },
        { type: 'assembling', minutes: 1 },
      ],
      totalMinutes: 7,
    },
  },

  // ─── COMMUNITY RECIPE ────────────────────────────────────────────────────────
  {
    id: 'shakshuka',
    name: 'Shakshuka',
    description: 'Eggs poached in a spiced tomato and pepper sauce — a Middle Eastern classic.',
    mealTimes: ['breakfast', 'lunch'],
    tags: ['vegetarian', 'low-calorie', 'high-protein'],
    calories: 310,
    servings: 2,
    isCommunity: true,
    author: 'marta_k',
    ingredients: [
      { ingredientId: 'egg', name: 'Eggs', quantity: '4' },
      { ingredientId: 'tomato', name: 'Tomatoes', quantity: '4 medium' },
      { ingredientId: 'red-bell-pepper', name: 'Red bell pepper', quantity: '1' },
      { ingredientId: 'onion', name: 'Onion', quantity: '1' },
      { ingredientId: 'garlic', name: 'Garlic', quantity: '3 cloves' },
      { ingredientId: 'olive-oil', name: 'Olive oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'cumin', name: 'Ground cumin', quantity: '1 tsp' },
      { ingredientId: 'paprika', name: 'Smoked paprika', quantity: '1 tsp' },
      { ingredientId: 'chili-flakes', name: 'Chili flakes', quantity: '½ tsp' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
      { ingredientId: 'fresh-parsley', name: 'Fresh parsley', quantity: 'to garnish' },
    ],
    sections: [
      {
        type: 'cutting',
        durationMinutes: 7,
        steps: [
          { instruction: 'Onion', cutStyle: 'fine dice', target: 'onion' },
          { instruction: 'Red bell pepper', cutStyle: 'fine dice', target: 'red bell pepper' },
          { instruction: 'Tomatoes', cutStyle: 'rough chop', target: 'tomatoes' },
          { instruction: 'Garlic cloves', cutStyle: 'mince', target: 'garlic' },
        ],
      },
      {
        type: 'cooking',
        durationMinutes: 20,
        steps: [
          { instruction: 'Heat olive oil in a wide pan over medium heat.' },
          { instruction: 'Cook onion and pepper for 6 minutes until softened.' },
          { instruction: 'Add garlic, cumin, paprika, and chili flakes. Stir for 1 minute.' },
          { instruction: 'Add tomatoes and a pinch of salt. Cook for 8 minutes, stirring, until sauce thickens.' },
          { instruction: 'Make 4 wells in the sauce. Crack an egg into each well.' },
          { instruction: 'Cover the pan and cook on low heat for 5–6 minutes until whites are set but yolks remain runny.' },
          { instruction: 'Scatter fresh parsley over the top and serve directly from the pan.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'cutting', minutes: 7 },
        { type: 'cooking', minutes: 20 },
      ],
      totalMinutes: 27,
    },
  },

  {
    id: 'baked-salmon',
    name: 'Baked Lemon Herb Salmon',
    description: 'Oven-baked salmon fillet with garlic, lemon, and fresh herbs.',
    mealTimes: ['dinner'],
    tags: ['high-protein', 'low-carb', 'low-calorie'],
    calories: 410,
    servings: 2,
    isCommunity: true,
    author: 'pawel_gotuje',
    ingredients: [
      { ingredientId: 'salmon-fillet', name: 'Salmon fillet', quantity: '2 × 180g' },
      { ingredientId: 'lemon', name: 'Lemon', quantity: '1' },
      { ingredientId: 'garlic', name: 'Garlic', quantity: '3 cloves' },
      { ingredientId: 'fresh-dill', name: 'Fresh dill', quantity: '2 tbsp' },
      { ingredientId: 'olive-oil', name: 'Olive oil', quantity: '2 tbsp', substitutionGroup: 'oil' },
      { ingredientId: 'salt', name: 'Salt', quantity: 'to taste' },
      { ingredientId: 'black-pepper', name: 'Black pepper', quantity: 'to taste' },
    ],
    sections: [
      {
        type: 'preparing',
        durationMinutes: 8,
        steps: [
          { instruction: 'Preheat oven to 200°C (fan 180°C).' },
          { instruction: 'Pat salmon fillets dry with kitchen paper.' },
          { instruction: 'Mince the garlic. Zest half the lemon, then slice the rest into rounds.' },
          { instruction: 'Mix olive oil, garlic, lemon zest, dill, salt, and pepper in a small bowl.' },
          { instruction: 'Coat salmon fillets with the herb mixture on both sides.' },
        ],
      },
      {
        type: 'baking',
        durationMinutes: 15,
        steps: [
          { instruction: 'Place salmon on a lined baking tray. Lay lemon slices on top.' },
          { instruction: 'Bake for 12–15 minutes until the flesh flakes easily with a fork.' },
          { instruction: 'Rest for 2 minutes before serving.' },
        ],
      },
    ],
    timeBreakdown: {
      sections: [
        { type: 'preparing', minutes: 8 },
        { type: 'baking', minutes: 15 },
      ],
      totalMinutes: 23,
    },
  },
];
