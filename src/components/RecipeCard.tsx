import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Recipe } from '../types';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { useApp } from '../context/AppContext';
import { getRecipeColor } from '../utils/recipeColor';

interface Props {
  recipe: Recipe;
  onPress: () => void;
  substitutions?: { needed: string; using: string }[];
  missingIngredients?: { name: string }[];
  showImage?: boolean;
  imageBaseUrl?: string;
}

const TAG_LABELS: Record<string, string> = {
  'low-calorie': 'Low Cal',
  'low-carb':    'Low Carb',
  vegetarian:    'Vege',
  vegan:         'Vegan',
  'high-protein':'Protein',
  quick:         'Quick',
  'gluten-free': 'GF',
};

export default function RecipeCard({
  recipe, onPress, substitutions, missingIngredients,
}: Props) {
  const { colors } = useTheme();
  const { favorites, toggleFavorite, ratings } = useApp();
  const myRating = ratings[recipe.id] ?? 0;
  const isFav = favorites.includes(recipe.id);
  const accentColor = useMemo(() => getRecipeColor(recipe), [recipe]);
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: accentColor }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.titleRow}>
        <Text style={styles.name} numberOfLines={2}>{recipe.name}</Text>
        <TouchableOpacity
          onPress={() => toggleFavorite(recipe.id)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={[styles.heart, isFav && styles.heartActive]}>
            {isFav ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.meta}>
        <Text style={styles.metaItem}>
          {recipe.total_minutes ?? recipe.timeBreakdown?.totalMinutes ?? '?'} min
        </Text>
        <Text style={styles.dot}>·</Text>
        <Text style={styles.metaItem}>{recipe.calories ?? '–'} kcal</Text>
        {(recipe.servings ?? 0) > 1 && (
          <>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.metaItem}>{recipe.servings} srv</Text>
          </>
        )}
        {myRating > 0 && (
          <>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.ratingBadge}>{'★'.repeat(myRating)}</Text>
          </>
        )}
      </View>

      {(recipe.tags ?? []).length > 0 && (
        <View style={styles.tags}>
          {(recipe.tags ?? []).slice(0, 3).map(tag => (
            <View key={tag} style={[styles.tag, { backgroundColor: colors.tag[tag]?.bg ?? colors.primaryLight }]}>
              <Text style={[styles.tagText, { color: colors.tag[tag]?.text ?? colors.primary }]}>
                {TAG_LABELS[tag] ?? tag}
              </Text>
            </View>
          ))}
        </View>
      )}

      {substitutions && substitutions.length > 0 && (
        <View style={styles.subBox}>
          {substitutions.map((s, i) => (
            <Text key={i} style={styles.subText}>swap  {s.needed}  →  {s.using}</Text>
          ))}
        </View>
      )}

      {missingIngredients && missingIngredients.length > 0 && (
        <View style={styles.missingBox}>
          <Text style={styles.missingLabel}>Missing: </Text>
          <Text style={styles.missingText}>
            {missingIngredients.map(i => i.name).join(', ')}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  card:        { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.sm, marginBottom: spacing.sm, borderWidth: 1, borderColor: colors.border, borderLeftWidth: 4 },
  titleRow:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  name:        { fontSize: font.sizes.md, fontWeight: font.weights.semibold, color: colors.text, flex: 1, marginRight: spacing.xs, lineHeight: 20 },
  heart:       { fontSize: 18, color: colors.textMuted },
  heartActive: { color: colors.accent },
  meta:        { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  metaItem:    { fontSize: font.sizes.xs, color: colors.textMuted, fontWeight: font.weights.medium },
  dot:         { color: colors.border, marginHorizontal: 4 },
  ratingBadge: { fontSize: font.sizes.xs, color: '#F59E0B', letterSpacing: 1 },
  tags:        { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  tag:         { paddingHorizontal: 6, paddingVertical: 2, borderRadius: radius.sm },
  tagText:     { fontSize: font.sizes.xs, fontWeight: font.weights.semibold, letterSpacing: 0.3 },
  subBox:      { marginTop: spacing.xs, backgroundColor: '#FFFBEB', borderRadius: radius.sm, padding: spacing.xs, borderLeftWidth: 3, borderLeftColor: '#F59E0B' },
  subText:     { fontSize: font.sizes.xs, color: '#92400E', fontWeight: font.weights.medium },
  missingBox:  { marginTop: spacing.xs, backgroundColor: '#FEF2F2', borderRadius: radius.sm, padding: spacing.xs, borderLeftWidth: 3, borderLeftColor: '#EF4444', flexDirection: 'row', flexWrap: 'wrap' },
  missingLabel:{ fontSize: font.sizes.xs, color: '#9B1C1C', fontWeight: font.weights.bold },
  missingText: { fontSize: font.sizes.xs, color: '#9B1C1C' },
});
