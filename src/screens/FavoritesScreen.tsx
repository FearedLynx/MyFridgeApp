import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import RecipeCard from '../components/RecipeCard';
import { spacing, font } from '../utils/theme';

type Props = { navigation: NativeStackNavigationProp<any> };

export default function FavoritesScreen({ navigation }: Props) {
  const { favorites, userRecipes, dbRecipes } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const allRecipes = useMemo(() => [...userRecipes, ...dbRecipes], [userRecipes, dbRecipes]);
  const favRecipes = useMemo(
    () => allRecipes.filter(r => favorites.includes(r.id)),
    [allRecipes, favorites],
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Favorites</Text>
        <Text style={styles.subtitle}>
          {favRecipes.length === 0 ? 'No favorites saved yet.'
            : `${favRecipes.length} saved recipe${favRecipes.length > 1 ? 's' : ''}`}
        </Text>
        {favRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })} />
        ))}
        {favRecipes.length === 0 && (
          <Text style={styles.hint}>Tap the heart on any recipe to save it here.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:     { flex: 1, backgroundColor: colors.background },
  content:  { padding: spacing.md, paddingBottom: 80 },
  heading:  { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  subtitle: { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.lg },
  hint:     { textAlign: 'center', color: colors.textMuted, fontSize: font.sizes.md, marginTop: 40, lineHeight: 22 },
});
