import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes, AppTheme, ThemeColors } from '../utils/theme';

interface ThemeContextType {
  theme: AppTheme;
  colors: ThemeColors;
  setThemeId: (id: string) => void;
  allThemes: AppTheme[];
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.classic,
  colors: themes.classic.colors,
  setThemeId: () => {},
  allThemes: Object.values(themes),
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState('classic');

  useEffect(() => {
    AsyncStorage.getItem('themeId').then(id => {
      if (id && themes[id]) setThemeIdState(id);
    });
  }, []);

  const setThemeId = (id: string) => {
    if (!themes[id]) return;
    setThemeIdState(id);
    AsyncStorage.setItem('themeId', id);
  };

  const theme = themes[themeId] ?? themes.classic;

  return (
    <ThemeContext.Provider value={{ theme, colors: theme.colors, setThemeId, allThemes: Object.values(themes) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
