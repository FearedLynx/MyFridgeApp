import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FridgeItem, DailyPlan, Recipe } from '../types';
import { recipes as defaultRecipes } from '../data/recipes';

export interface UserPreferences {
  diet: string;           // 'none' | 'vegetarian' | 'vegan' | 'low-carb' | etc.
  cuisines: string[];     // e.g. ['Italian', 'Thai']
  excludeNonDiet: boolean;// hard-filter non-matching recipes
}

const DEFAULT_PREFS: UserPreferences = {
  diet: 'none',
  cuisines: [],
  excludeNonDiet: false,
};

interface AppContextType {
  fridge: FridgeItem[];
  addToFridge: (item: FridgeItem) => void;
  removeFromFridge: (ingredientId: string) => void;
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  dailyPlan: DailyPlan;
  setMealForTime: (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string | undefined) => void;
  allRecipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  preferences: UserPreferences;
  setPreferences: (prefs: UserPreferences) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const TODAY = new Date().toISOString().split('T')[0];

export function AppProvider({ children }: { children: ReactNode }) {
  const [fridge, setFridge]           = useState<FridgeItem[]>([]);
  const [favorites, setFavorites]     = useState<string[]>([]);
  const [dailyPlan, setDailyPlan]     = useState<DailyPlan>({ date: TODAY });
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([]);
  const [preferences, setPrefsState]  = useState<UserPreferences>(DEFAULT_PREFS);

  const allRecipes = [...defaultRecipes, ...userRecipes];

  useEffect(() => {
    (async () => {
      try {
        const [f, fav, plan, ur, prefs] = await Promise.all([
          AsyncStorage.getItem('fridge'),
          AsyncStorage.getItem('favorites'),
          AsyncStorage.getItem('dailyPlan'),
          AsyncStorage.getItem('userRecipes'),
          AsyncStorage.getItem('preferences'),
        ]);
        if (f)     setFridge(JSON.parse(f));
        if (fav)   setFavorites(JSON.parse(fav));
        if (plan)  {
          const parsed: DailyPlan = JSON.parse(plan);
          setDailyPlan(parsed.date === TODAY ? parsed : { date: TODAY });
        }
        if (ur)    setUserRecipes(JSON.parse(ur));
        if (prefs) setPrefsState({ ...DEFAULT_PREFS, ...JSON.parse(prefs) });
      } catch (_) {}
    })();
  }, []);

  const persist = async (key: string, value: unknown) =>
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

  const setMealForTime = (mealTime: keyof Omit<DailyPlan, 'date'>, recipeId: string | undefined) => {
    setDailyPlan(prev => {
      const next = { ...prev, [mealTime]: recipeId };
      persist('dailyPlan', next);
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

  return (
    <AppContext.Provider value={{
      fridge, addToFridge, removeFromFridge,
      favorites, toggleFavorite,
      dailyPlan, setMealForTime,
      allRecipes, addRecipe,
      preferences, setPreferences,
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
