export type DietTag =
  | 'low-calorie'
  | 'low-carb'
  | 'vegetarian'
  | 'vegan'
  | 'high-protein'
  | 'quick'
  | 'gluten-free';

export type MealTime = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type CutStyle =
  | 'julienne'
  | 'fine dice'
  | 'rough chop'
  | 'slice'
  | 'mince'
  | 'brunoise'
  | 'half-moon'
  | 'cube'
  | 'grate'
  | 'wedge';

export interface Ingredient {
  id: string;
  name: string;
  /** substitution group key, e.g. "oil", "flour", "sweetener" */
  substitutionGroup?: string;
}

export interface RecipeIngredient {
  ingredientId: string;
  name: string;
  quantity: string; // e.g. "2 tbsp", "1 medium"
  substitutionGroup?: string;
}

export type StepSectionType = 'cutting' | 'preparing' | 'cooking' | 'assembling' | 'baking';

export interface Step {
  instruction: string;
  /** Only for cutting steps */
  cutStyle?: CutStyle;
  /** Which ingredient is being cut */
  target?: string;
}

export interface StepSection {
  type: StepSectionType;
  durationMinutes: number;
  steps: Step[];
}

export interface TimeBreakdown {
  sections: { type: StepSectionType; minutes: number }[];
  totalMinutes: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  mealTimes: MealTime[];
  tags: DietTag[];
  calories: number;
  servings: number;
  ingredients: RecipeIngredient[];
  sections: StepSection[];
  timeBreakdown: TimeBreakdown;
  isUserCreated?: boolean;
  isCommunity?: boolean;
  author?: string;
  // SQLite / scraper field aliases
  image_file?: string;
  total_minutes?: number;
  meal_times?: MealTime[];
  source?: string;
  source_url?: string;
}

export interface FridgeItem {
  ingredientId: string;
  name: string;
  substitutionGroup?: string;
}

export interface DailyPlan {
  date: string;
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snack: string[];
}

export interface MatchResult {
  recipe: Recipe;
  matchType: 'exact' | 'near';
  missingIngredients: RecipeIngredient[];
  substitutions: { needed: string; using: string }[];
}
