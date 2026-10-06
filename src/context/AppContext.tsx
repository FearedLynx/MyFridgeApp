import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FridgeItem, DailyPlan, Recipe } from '../types';
import { recipes as STATIC_RECIPES } from '../data/recipes';

const RECENTLY_VIEWED_MAX = 10;

export interface ShoppingItem {
  id: string;
  name: string;
  checked: boolean;
  source: 'auto' | 'manual';
  recipeNames?: string[];
}

export interface UserPreferences {
  diet: string;
  cuisines: string[];
  excludeNonDiet: boolean;
  mergeProduceGroups: boolean;
  calorieGoal: number;
}

const DEFAULT_PREFS: UserPreferences = {
  diet: 'none',
  cuisines: [],
  excludeNonDiet: false,
  mergeProduceGroups: false,
  calorieGoal: 2000,
};

interface AppContextType {
  dbRecipes: Recipe[];
  fridge: FridgeItem[];
  addToFridge: (item: FridgeItem) => void;
  removeFromFridge: (ingredientId: string) => void;
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  /** Today's plan — derived from weekPlan[today] */
  dailyPlan: DailyPlan;
  addMealForTime: (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string) => void;
  removeMealFromSlot: (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string) => void;
  weekPlan: Record<string, DailyPlan>;
  setDayPlan: (date: string, plan: DailyPlan) => void;
  cookedLog: Record<string, number>;
  logCooked: (date: string, calories: number) => void;
  userRecipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  preferences: UserPreferences;
  setPreferences: (prefs: UserPreferences) => void;
  recentlyViewed: string[];
  trackViewed: (recipeId: string) => void;
  ratings: Record<string, number>;
  rateRecipe: (recipeId: string, stars: number) => void;
  shoppingList: ShoppingItem[];
  addShoppingItem: (name: string, recipeNames?: string[]) => void;
  toggleShoppingItem: (id: string) => void;
  removeShoppingItem: (id: string) => void;
  clearChecked: () => void;
  refreshShoppingList: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const TODAY = new Date().toISOString().split('T')[0];

function emptyPlan(date: string): DailyPlan {
  return { date, breakfast: [], lunch: [], dinner: [], snack: [] };
}

function migratePlan(raw: any): DailyPlan {
  const migrate = (v: any): string[] =>
    Array.isArray(v) ? v : (v ? [v] : []);
  return {
    date:      raw.date ?? TODAY,
    breakfast: migrate(raw.breakfast),
    lunch:     migrate(raw.lunch),
    dinner:    migrate(raw.dinner),
    snack:     migrate(raw.snack),
  };
}

const PANTRY_SKIP = new Set([
  'salt','black-pepper','white-pepper','sea-salt','water','cumin','paprika',
  'smoked-paprika','turmeric','coriander','oregano','thyme','rosemary',
  'bay-leaves','cinnamon','nutmeg','chili-flakes','cayenne','garlic-powder',
  'onion-powder','garam-masala','baking-powder','baking-soda','vanilla',
  'vanilla-extract','cornstarch','fresh-parsley','fresh-basil','fresh-dill',
]);

const STRIP_WORDS_SET = new Set([
  'fresh','dried','canned','frozen','ground','baby','large','medium','small',
  'mini','cherry','whole','sliced','diced','chopped','minced','shredded',
  'boneless','skinless','cooked','raw','ripe','organic',
]);

function coreWords(name: string): string[] {
  return name.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/)
    .filter(w => w.length > 1 && !STRIP_WORDS_SET.has(w));
}

function inFridge(ingredientId: string, name: string, fridgeItems: FridgeItem[]): boolean {
  if (PANTRY_SKIP.has(ingredientId)) return true;
  return fridgeItems.some(f =>
    f.ingredientId === ingredientId ||
    coreWords(f.name).some(w => coreWords(name).includes(w))
  );
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [fridge, setFridge]                 = useState<FridgeItem[]>([]);
  const [favorites, setFavorites]           = useState<string[]>([]);
  const [weekPlan, setWeekPlanState]        = useState<Record<string, DailyPlan>>({ [TODAY]: emptyPlan(TODAY) });
  const [cookedLog, setCookedLog]           = useState<Record<string, number>>({});
  const [userRecipes, setUserRecipes]       = useState<Recipe[]>([]);
  const [preferences, setPrefsState]        = useState<UserPreferences>(DEFAULT_PREFS);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [ratings, setRatings]               = useState<Record<string, number>>({});
  const [shoppingList, setShoppingList]     = useState<ShoppingItem[]>([]);

  const dailyPlan: DailyPlan = weekPlan[TODAY] ?? emptyPlan(TODAY);

  useEffect(() => {
    (async () => {
      try {
        const [f, fav, wp, oldPlan, ur, prefs, rv, cl, rt] = await Promise.all([
          AsyncStorage.getItem('fridge'),
          AsyncStorage.getItem('favorites'),
          AsyncStorage.getItem('weekPlan'),
          AsyncStorage.getItem('dailyPlan'),
          AsyncStorage.getItem('userRecipes'),
          AsyncStorage.getItem('preferences'),
          AsyncStorage.getItem('recentlyViewed'),
          AsyncStorage.getItem('cookedLog'),
          AsyncStorage.getItem('ratings'),
        ]);
        if (f)   setFridge(JSON.parse(f));
        if (fav) setFavorites(JSON.parse(fav));
        if (rv)  setRecentlyViewed(JSON.parse(rv));
        if (cl)  setCookedLog(JSON.parse(cl));
        if (rt)  setRatings(JSON.parse(rt));
        if (ur)  setUserRecipes(JSON.parse(ur));
        if (prefs) setPrefsState({ ...DEFAULT_PREFS, ...JSON.parse(prefs) });

        if (wp) {
          const parsed: Record<string, DailyPlan> = {};
          const raw = JSON.parse(wp);
          for (const [date, plan] of Object.entries(raw)) {
            parsed[date] = migratePlan(plan);
          }
          if (!parsed[TODAY]) parsed[TODAY] = emptyPlan(TODAY);
          setWeekPlanState(parsed);
        } else if (oldPlan) {
          // Migrate from old dailyPlan storage
          const raw = JSON.parse(oldPlan);
          const plan = migratePlan(raw);
          const wp: Record<string, DailyPlan> = {
            [TODAY]: plan.date === TODAY ? plan : emptyPlan(TODAY),
          };
          setWeekPlanState(wp);
          AsyncStorage.setItem('weekPlan', JSON.stringify(wp));
        }
      } catch (_) {}
    })();
  }, []);

  const persist = (key: string, value: unknown) =>
    AsyncStorage.setItem(key, JSON.stringify(value));

  const addToFridge = (item: FridgeItem) => {
    setFridge(prev => {
      if (prev.find(i => i.ingredientId === item.ingredientId)) return prev;
      const next = [...prev, item];
      persist('fridge', next);
      return next;
    });
  };

  const removeFromFridge = (ingredientId: string) => {
    setFridge(prev => {
      const next = prev.filter(i => i.ingredientId !== ingredientId);
      persist('fridge', next);
      return next;
    });
  };

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => {
      const next = prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId];
      persist('favorites', next);
      return next;
    });
  };

  const addMealForTime = (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string) => {
    setWeekPlanState(prev => {
      const day = prev[TODAY] ?? emptyPlan(TODAY);
      const current = day[mealTime] ?? [];
      if (current.includes(recipeId)) return prev;
      const next = { ...prev, [TODAY]: { ...day, [mealTime]: [...current, recipeId] } };
      persist('weekPlan', next);
      return next;
    });
  };

  const removeMealFromSlot = (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string) => {
    setWeekPlanState(prev => {
      const day = prev[TODAY] ?? emptyPlan(TODAY);
      const next = { ...prev, [TODAY]: { ...day, [mealTime]: (day[mealTime] ?? []).filter(id => id !== recipeId) } };
      persist('weekPlan', next);
      return next;
    });
  };

  const setDayPlan = (date: string, plan: DailyPlan) => {
    setWeekPlanState(prev => {
      const next = { ...prev, [date]: plan };
      persist('weekPlan', next);
      return next;
    });
  };

  const logCooked = (date: string, calories: number) => {
    setCookedLog(prev => {
      const next = { ...prev, [date]: (prev[date] ?? 0) + calories };
      persist('cookedLog', next);
      return next;
    });
  };

  const addRecipe = (recipe: Recipe) => {
    setUserRecipes(prev => {
      const next = [...prev, recipe];
      persist('userRecipes', next);
      return next;
    });
  };

  const setPreferences = (prefs: UserPreferences) => {
    setPrefsState(prefs);
    persist('preferences', prefs);
  };

  // ─── Shopping list ────────────────────────────────────────────────────────────

  const refreshShoppingList = () => {
    const todayPlan = weekPlan[TODAY] ?? emptyPlan(TODAY);
    const slots: (keyof Omit<DailyPlan, 'date'>)[] = ['breakfast','lunch','dinner','snack'];
    const missingMap = new Map<string, { name: string; recipeNames: string[] }>();

    for (const slot of slots) {
      for (const recipeId of todayPlan[slot] ?? []) {
        const recipe = STATIC_RECIPES.find(r => r.id === recipeId);
        if (!recipe) continue;
        for (const ing of recipe.ingredients) {
          if (!inFridge(ing.ingredientId, ing.name, fridge)) {
            if (!missingMap.has(ing.ingredientId)) {
              missingMap.set(ing.ingredientId, { name: ing.name, recipeNames: [] });
            }
            const entry = missingMap.get(ing.ingredientId)!;
            if (!entry.recipeNames.includes(recipe.name)) {
              entry.recipeNames.push(recipe.name);
            }
          }
        }
      }
    }

    setShoppingList(prev => {
      const manualItems = prev.filter(i => i.source === 'manual');
      const existingAutoChecked = new Set(
        prev.filter(i => i.source === 'auto' && i.checked).map(i => i.id)
      );
      const autoItems: ShoppingItem[] = Array.from(missingMap.entries()).map(([id, { name, recipeNames }]) => ({
        id,
        name,
        checked: existingAutoChecked.has(id),
        source: 'auto' as const,
        recipeNames,
      }));
      return [...autoItems, ...manualItems];
    });
  };

  const addShoppingItem = (name: string, recipeNames?: string[]) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setShoppingList(prev => {
      // Don't duplicate existing items with same name
      if (prev.some(i => i.name.toLowerCase() === trimmed.toLowerCase())) return prev;
      const next = [...prev, { id: `manual-${Date.now()}-${Math.random()}`, name: trimmed, checked: false, source: 'manual' as const, recipeNames }];
      persist('shoppingListManual', next.filter(i => i.source === 'manual'));
      return next;
    });
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => {
      const next = prev.map(i => i.id === id ? { ...i, checked: !i.checked } : i);
      persist('shoppingListManual', next.filter(i => i.source === 'manual'));
      return next;
    });
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList(prev => {
      const next = prev.filter(i => i.id !== id);
      persist('shoppingListManual', next.filter(i => i.source === 'manual'));
      return next;
    });
  };

  const clearChecked = () => {
    setShoppingList(prev => {
      const next = prev.filter(i => !i.checked);
      persist('shoppingListManual', next.filter(i => i.source === 'manual'));
      return next;
    });
  };

  const rateRecipe = (recipeId: string, stars: number) => {
    setRatings(prev => {
      const next = { ...prev, [recipeId]: stars };
      persist('ratings', next);
      return next;
    });
  };

  const trackViewed = (recipeId: string) => {
    setRecentlyViewed(prev => {
      const next = [recipeId, ...prev.filter(id => id !== recipeId)].slice(0, RECENTLY_VIEWED_MAX);
      persist('recentlyViewed', next);
      return next;
    });
  };

  return (
    <AppContext.Provider value={{
      dbRecipes: STATIC_RECIPES,
      fridge, addToFridge, removeFromFridge,
      favorites, toggleFavorite,
      dailyPlan, addMealForTime, removeMealFromSlot,
      weekPlan, setDayPlan,
      cookedLog, logCooked,
      userRecipes, addRecipe,
      preferences, setPreferences,
      recentlyViewed, trackViewed,
      ratings, rateRecipe,
      shoppingList, addShoppingItem, toggleShoppingItem, removeShoppingItem, clearChecked, refreshShoppingList,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
