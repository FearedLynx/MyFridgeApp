import React, { useState, useMemo, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, TextInput, FlatList, ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import RecipeCard from '../components/RecipeCard';
import { spacing, radius, font } from '../utils/theme';
import { DietTag, MealTime, Recipe } from '../types';

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
};

const TAGS: { key: DietTag; label: string }[] = [
  { key: 'low-calorie', label: 'Low Cal' },
  { key: 'low-carb',    label: 'Low Carb' },
  { key: 'vegetarian',  label: 'Vege' },
  { key: 'vegan',       label: 'Vegan' },
  { key: 'high-protein',label: 'Protein' },
  { key: 'quick',       label: 'Quick' },
];

const TIMES: { key: MealTime; label: string }[] = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',     label: 'Lunch' },
  { key: 'dinner',    label: 'Dinner' },
  { key: 'snack',     label: 'Snack' },
];

type SortKey = 'default' | 'cal-asc' | 'cal-desc' | 'time-asc' | 'time-desc';
const SORTS: { key: SortKey; label: string }[] = [
  { key: 'default',   label: 'Default' },
  { key: 'cal-asc',   label: 'Cal ↑' },
  { key: 'cal-desc',  label: 'Cal ↓' },
  { key: 'time-asc',  label: 'Time ↑' },
  { key: 'time-desc', label: 'Time ↓' },
];

function sortRecipes(recipes: Recipe[], sort: SortKey): Recipe[] {
  if (sort === 'default') return recipes;
  return [...recipes].sort((a, b) => {
    if (sort === 'cal-asc')  return a.calories - b.calories;
    if (sort === 'cal-desc') return b.calories - a.calories;
    const ta = a.timeBreakdown?.totalMinutes ?? a.total_minutes ?? 0;
    const tb = b.timeBreakdown?.totalMinutes ?? b.total_minutes ?? 0;
    if (sort === 'time-asc')  return ta - tb;
    if (sort === 'time-desc') return tb - ta;
    return 0;
  });
}

// Map preference diet id → DietTag
const DIET_TAG_MAP: Record<string, DietTag> = {
  vegetarian:   'vegetarian',
  vegan:        'vegan',
  'low-carb':   'low-carb',
  'low-calorie':'low-calorie',
  'high-protein':'high-protein',
  'gluten-free':'gluten-free',
};

export default function BrowseScreen({ navigation, route }: Props) {
  const { dbRecipes, userRecipes, addMealForTime, recentlyViewed, trackViewed, preferences } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const assignTo: MealTime | undefined = route.params?.assignTo;

  const [search, setSearch]             = useState('');
  const [selectedTags, setSelectedTags] = useState<DietTag[]>([]);
  const [selectedTime, setSelectedTime] = useState<MealTime | null>(assignTo ?? null);
  const [sort, setSort]                 = useState<SortKey>('default');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allRecipes: Recipe[] = useMemo(
    () => [...userRecipes, ...dbRecipes],
    [userRecipes, dbRecipes],
  );

  const suggestions = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = search.toLowerCase();
    return allRecipes
      .map(r => r.name)
      .filter(n => n.toLowerCase().includes(q))
      .slice(0, 8);
  }, [search, allRecipes]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const prefDietTag = DIET_TAG_MAP[preferences.diet] as DietTag | undefined;
    const excludeNonDiet = preferences.excludeNonDiet && !!prefDietTag;
    const favouriteCuisines = preferences.cuisines ?? [];

    let base = allRecipes.filter(r => {
      if (q && !r.name.toLowerCase().includes(q)) return false;
      if (selectedTime) {
        const mt = r.mealTimes ?? r.meal_times ?? [];
        if (!mt.includes(selectedTime)) return false;
      }
      if (selectedTags.length > 0 && !selectedTags.every(t => (r.tags ?? []).includes(t))) return false;
      // Exclude recipes that don't match the user's diet preference
      if (excludeNonDiet && !(r.tags ?? []).includes(prefDietTag!)) return false;
      return true;
    });

    // Boost favourite cuisines to the top (keyword match in name/description)
    if (sort === 'default' && favouriteCuisines.length > 0) {
      const haystack = (r: Recipe) => (r.name + ' ' + (r.description ?? '')).toLowerCase();
      const isFavCuisine = (r: Recipe) =>
        favouriteCuisines.some(c => haystack(r).includes(c.toLowerCase()));
      base = [
        ...base.filter(isFavCuisine),
        ...base.filter(r => !isFavCuisine(r)),
      ];
    }

    return sortRecipes(base, sort);
  }, [allRecipes, search, selectedTime, selectedTags, sort, preferences]);

  const isFiltered = search.trim().length > 0 || selectedTags.length > 0 || selectedTime !== null;

  const recentRecipes = useMemo(() => {
    if (isFiltered) return [];
    return recentlyViewed
      .map(id => allRecipes.find(r => r.id === id))
      .filter((r): r is Recipe => r !== undefined);
  }, [recentlyViewed, allRecipes, isFiltered]);

  const toggleTag = (tag: DietTag) =>
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  const handleSelect = useCallback((recipeId: string) => {
    if (assignTo) {
      addMealForTime(assignTo, recipeId);
      navigation.goBack();
    } else {
      trackViewed(recipeId);
      navigation.navigate('RecipeDetail', { recipeId });
    }
  }, [assignTo, addMealForTime, navigation, trackViewed]);

  const handleSurprise = useCallback(() => {
    if (filtered.length === 0) return;
    const pick = filtered[Math.floor(Math.random() * filtered.length)];
    trackViewed(pick.id);
    navigation.navigate('RecipeDetail', { recipeId: pick.id });
  }, [filtered, navigation, trackViewed]);

  const renderItem = useCallback(({ item }: { item: Recipe }) => (
    <RecipeCard recipe={item} onPress={() => handleSelect(item.id)} />
  ), [handleSelect]);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={styles.empty}>No recipes match your filters.</Text>}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.heading}>
              {assignTo ? `Pick for ${assignTo.charAt(0).toUpperCase() + assignTo.slice(1)}` : 'Browse Recipes'}
            </Text>

            {/* Search */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.search}
                placeholder="Search recipes..."
                placeholderTextColor={colors.textMuted}
                value={search}
                onChangeText={t => { setSearch(t); setShowSuggestions(true); }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              />
              {search.length > 0 && (
                <TouchableOpacity style={styles.clearBtn} onPress={() => setSearch('')}>
                  <Text style={styles.clearBtnText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {showSuggestions && suggestions.length > 0 && (
              <View style={styles.suggestions}>
                {suggestions.map(s => (
                  <TouchableOpacity
                    key={s}
                    style={styles.suggestion}
                    onPress={() => { setSearch(s); setShowSuggestions(false); }}
                  >
                    <Text style={styles.suggestionText}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Mealtime */}
            <Text style={styles.filterLabel}>Mealtime</Text>
            <View style={styles.chipRow}>
              {TIMES.map(({ key, label }) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, selectedTime === key && styles.chipActive]}
                  onPress={() => setSelectedTime(prev => prev === key ? null : key)}
                >
                  <Text style={[styles.chipText, selectedTime === key && styles.chipTextActive]}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Diet */}
            <Text style={styles.filterLabel}>Diet</Text>
            <View style={styles.chipRow}>
              {TAGS.map(({ key, label }) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, selectedTags.includes(key) && styles.chipActive]}
                  onPress={() => toggleTag(key)}
                >
                  <Text style={[styles.chipText, selectedTags.includes(key) && styles.chipTextActive]}>{label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Sort */}
            <Text style={styles.filterLabel}>Sort</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sortRow}>
              {SORTS.map(({ key, label }) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, sort === key && styles.chipActive, styles.sortChip]}
                  onPress={() => setSort(key)}
                >
                  <Text style={[styles.chipText, sort === key && styles.chipTextActive]}>{label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Recently viewed */}
            {recentRecipes.length > 0 && (
              <View style={styles.recentSection}>
                <Text style={styles.filterLabel}>Recently Viewed</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {recentRecipes.map(r => (
                    <TouchableOpacity
                      key={r.id}
                      style={[styles.recentCard, { borderLeftColor: colors.primary }]}
                      onPress={() => handleSelect(r.id)}
                    >
                      <Text style={styles.recentName} numberOfLines={2}>{r.name}</Text>
                      <Text style={styles.recentCal}>{r.calories} kcal</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            )}

            {/* Result count + Surprise me */}
            <View style={styles.countRow}>
              <Text style={styles.resultCount}>{filtered.length} recipe{filtered.length !== 1 ? 's' : ''}</Text>
              {!assignTo && (
                <TouchableOpacity style={styles.surpriseBtn} onPress={handleSurprise}>
                  <Text style={styles.surpriseBtnText}>Surprise me</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:            { flex: 1, backgroundColor: colors.background },
  header:          { padding: spacing.md, paddingBottom: 0 },
  heading:         { fontSize: font.sizes.xl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.md },
  searchContainer: { position: 'relative', marginBottom: spacing.sm },
  search:          { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, fontSize: font.sizes.md, color: colors.text, paddingRight: 40 },
  clearBtn:        { position: 'absolute', right: spacing.sm, top: 0, bottom: 0, justifyContent: 'center', paddingHorizontal: spacing.xs },
  clearBtnText:    { color: colors.textMuted, fontSize: 14 },
  suggestions:     { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.sm, overflow: 'hidden' },
  suggestion:      { paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, borderBottomWidth: 1, borderBottomColor: colors.border },
  suggestionText:  { fontSize: font.sizes.md, color: colors.text },
  filterLabel:     { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  chipRow:         { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.md },
  sortRow:         { marginBottom: spacing.md },
  sortChip:        { marginRight: spacing.xs },
  chip:            { paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2, borderRadius: radius.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  chipActive:      { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText:        { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
  chipTextActive:  { color: '#fff' },
  recentSection:   { marginBottom: spacing.md },
  recentCard:      { backgroundColor: colors.surface, borderRadius: radius.md, borderLeftWidth: 4, padding: spacing.sm, marginRight: spacing.sm, width: 120 },
  recentName:      { fontSize: font.sizes.sm, fontWeight: font.weights.bold, color: colors.text, marginBottom: 2 },
  recentCal:       { fontSize: font.sizes.xs, color: colors.textMuted },
  countRow:        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.sm },
  resultCount:     { fontSize: font.sizes.sm, color: colors.textMuted },
  surpriseBtn:     { backgroundColor: colors.primary, paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2, borderRadius: radius.lg },
  surpriseBtnText: { color: '#fff', fontSize: font.sizes.sm, fontWeight: font.weights.bold },
  listContent:     { paddingHorizontal: spacing.md, paddingBottom: spacing.xl },
  empty:           { textAlign: 'center', color: colors.textMuted, fontSize: font.sizes.md, marginTop: spacing.xl },
});
