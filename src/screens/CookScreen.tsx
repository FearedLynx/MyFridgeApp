import React, { useMemo, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { matchRecipes } from '../utils/fridgeMatch';
import RecipeCard from '../components/RecipeCard';
import { spacing, radius, font } from '../utils/theme';
import { DietTag } from '../types';

type Props = { navigation: NativeStackNavigationProp<any> };

const TAGS: { key: DietTag; label: string }[] = [
  { key: 'vegetarian',   label: 'Vege' },
  { key: 'vegan',        label: 'Vegan' },
  { key: 'low-calorie',  label: 'Low Cal' },
  { key: 'low-carb',     label: 'Low Carb' },
  { key: 'high-protein', label: 'Protein' },
  { key: 'quick',        label: 'Quick' },
  { key: 'gluten-free',  label: 'GF' },
];

export default function CookScreen({ navigation }: Props) {
  const { dbRecipes, fridge, userRecipes, addShoppingItem } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [selectedTags, setSelectedTags] = useState<DietTag[]>([]);

  const toggleTag = (tag: DietTag) =>
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  const allRecipes = useMemo(() => [...dbRecipes, ...userRecipes], [dbRecipes, userRecipes]);
  const results    = useMemo(() => matchRecipes(allRecipes, fridge), [allRecipes, fridge]);

  const filtered = useMemo(() => {
    if (selectedTags.length === 0) return results;
    return results.filter(r =>
      selectedTags.every(t => (r.recipe.tags ?? []).includes(t))
    );
  }, [results, selectedTags]);

  const exact = filtered.filter(r => r.matchType === 'exact');
  const near  = filtered.filter(r => r.matchType === 'near');

  const addMissingToList = useCallback((missingIngredients: { name: string }[], recipeName: string) => {
    for (const ing of missingIngredients) {
      addShoppingItem(ing.name, [recipeName]);
    }
  }, [addShoppingItem]);

  if (fridge.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Your fridge is empty</Text>
          <Text style={styles.emptyText}>Add ingredients to your fridge so we can suggest what to cook.</Text>
          <TouchableOpacity style={styles.goBtn} onPress={() => navigation.navigate('Fridge')}>
            <Text style={styles.goBtnText}>Go to My Fridge</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} stickyHeaderIndices={[0]}>

        {/* Sticky header with tag filters */}
        <View style={styles.header}>
          <Text style={styles.heading}>What Can I Cook?</Text>
          <Text style={styles.subtitle}>
            {fridge.length} ingredient{fridge.length > 1 ? 's' : ''} in fridge
            {selectedTags.length > 0 ? ` · ${exact.length + near.length} match${exact.length + near.length !== 1 ? 'es' : ''}` : ''}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tagRow}>
            {TAGS.map(({ key, label }) => {
              const active = selectedTags.includes(key);
              return (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, active && styles.chipActive]}
                  onPress={() => toggleTag(key)}
                >
                  <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {exact.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.dot, { backgroundColor: '#22C55E' }]} />
              <Text style={styles.sectionLabel}>Can make now</Text>
              <Text style={styles.sectionCount}>{exact.length}</Text>
            </View>
            {exact.map(r => (
              <RecipeCard key={r.recipe.id} recipe={r.recipe}
                substitutions={r.substitutions}
                onPress={() => navigation.navigate('RecipeDetail', { recipeId: r.recipe.id })} />
            ))}
          </View>
        )}

        {near.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.dot, { backgroundColor: '#F59E0B' }]} />
              <Text style={styles.sectionLabel}>Almost there</Text>
              <Text style={styles.sectionCount}>{near.length}</Text>
            </View>
            {near.map(r => (
              <View key={r.recipe.id}>
                <RecipeCard recipe={r.recipe}
                  substitutions={r.substitutions} missingIngredients={r.missingIngredients}
                  onPress={() => navigation.navigate('RecipeDetail', { recipeId: r.recipe.id })} />
                {r.missingIngredients.length > 0 && (
                  <TouchableOpacity
                    style={styles.addMissingBtn}
                    onPress={() => addMissingToList(r.missingIngredients, r.recipe.name)}
                  >
                    <Text style={styles.addMissingBtnText}>
                      + Add {r.missingIngredients.length} missing to shopping list
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        )}

        {exact.length === 0 && near.length === 0 && (
          <View style={styles.noMatch}>
            <Text style={styles.noMatchTitle}>No matches</Text>
            <Text style={styles.noMatchText}>
              {selectedTags.length > 0
                ? 'No recipes match these filters with your current fridge.'
                : 'Try adding more ingredients to your fridge.'}
            </Text>
            {selectedTags.length > 0 && (
              <TouchableOpacity style={styles.clearBtn} onPress={() => setSelectedTags([])}>
                <Text style={styles.clearBtnText}>Clear filters</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:           { flex: 1, backgroundColor: colors.background },
  content:        { paddingBottom: spacing.xl },
  header:         { backgroundColor: colors.background, paddingHorizontal: spacing.md, paddingTop: spacing.md, paddingBottom: spacing.sm },
  heading:        { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: 2 },
  subtitle:       { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.sm },
  tagRow:         { flexDirection: 'row', gap: spacing.xs, paddingBottom: spacing.xs },
  chip:           { paddingHorizontal: spacing.md, paddingVertical: spacing.xs, borderRadius: radius.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  chipActive:     { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText:       { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
  chipTextActive: { color: '#fff' },
  section:        { marginBottom: spacing.lg, paddingHorizontal: spacing.md },
  sectionHeader:  { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.sm, gap: spacing.xs },
  dot:            { width: 8, height: 8, borderRadius: 4 },
  sectionLabel:   { fontSize: font.sizes.sm, fontWeight: font.weights.bold, color: colors.text, textTransform: 'uppercase', letterSpacing: 0.8, flex: 1 },
  sectionCount:   { fontSize: font.sizes.sm, fontWeight: font.weights.semibold, color: colors.textMuted },
  empty:          { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.xl },
  emptyTitle:     { fontSize: font.sizes.xl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.sm, textAlign: 'center' },
  emptyText:      { fontSize: font.sizes.md, color: colors.textSecondary, textAlign: 'center', lineHeight: 22, marginBottom: spacing.lg },
  goBtn:          { backgroundColor: colors.primary, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm + 4 },
  goBtnText:      { color: '#fff', fontWeight: font.weights.semibold, fontSize: font.sizes.md },
  noMatch:        { padding: spacing.xl, alignItems: 'center' },
  noMatchTitle:   { fontSize: font.sizes.lg, fontWeight: font.weights.semibold, color: colors.text, marginBottom: spacing.xs },
  noMatchText:    { fontSize: font.sizes.md, color: colors.textSecondary, textAlign: 'center', marginBottom: spacing.md },
  clearBtn:       { backgroundColor: colors.primaryLight, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm },
  clearBtnText:   { color: colors.primary, fontWeight: font.weights.semibold, fontSize: font.sizes.sm },
  addMissingBtn:  { marginTop: -spacing.xs, marginBottom: spacing.sm, marginHorizontal: 1, backgroundColor: colors.primaryLight, borderRadius: radius.sm, paddingVertical: spacing.xs + 2, paddingHorizontal: spacing.md, alignSelf: 'flex-start' },
  addMissingBtnText: { fontSize: font.sizes.xs, color: colors.primary, fontWeight: font.weights.semibold },
});
