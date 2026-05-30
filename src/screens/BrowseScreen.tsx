import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView, TextInput, FlatList,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import RecipeCard from '../components/RecipeCard';
import { spacing, radius, font } from '../utils/theme';
import { DietTag, MealTime } from '../types';

// Set this to your VPS URL once images are uploaded
const IMAGE_BASE_URL = '';

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

export default function BrowseScreen({ navigation, route }: Props) {
  const { allRecipes, setMealForTime } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const assignTo: MealTime | undefined = route.params?.assignTo;

  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<DietTag[]>([]);
  const [selectedTime, setSelectedTime] = useState<MealTime | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleTag = (tag: DietTag) =>
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);

  // Smart autocomplete — match recipe names and ingredient names
  const suggestions = useMemo(() => {
    if (!search.trim() || search.length < 2) return [];
    const q = search.toLowerCase();
    const seen = new Set<string>();
    const results: string[] = [];

    for (const r of allRecipes) {
      if (r.name.toLowerCase().includes(q) && !seen.has(r.name)) {
        seen.add(r.name);
        results.push(r.name);
      }
      if (results.length >= 6) break;
    }
    return results;
  }, [search, allRecipes]);

  const filtered = useMemo(() => allRecipes.filter(r => {
    if (search && !r.name.toLowerCase().includes(search.toLowerCase()) &&
        !(r.ingredients ?? []).some((i: any) => i.name.toLowerCase().includes(search.toLowerCase()))) return false;
    if (selectedTime && !(r.mealTimes ?? r.meal_times ?? []).includes(selectedTime)) return false;
    if (selectedTags.length > 0 && !selectedTags.every(t => (r.tags ?? []).includes(t))) return false;
    return true;
  }), [allRecipes, search, selectedTime, selectedTags]);

  const handleSelect = (recipeId: string) => {
    if (assignTo) { setMealForTime(assignTo, recipeId); navigation.goBack(); }
    else navigation.navigate('RecipeDetail', { recipeId });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>
          {assignTo ? `Pick for ${assignTo.charAt(0).toUpperCase() + assignTo.slice(1)}` : 'Browse Recipes'}
        </Text>

        {/* Smart search */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Search recipes or ingredients..."
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

        {/* Autocomplete suggestions */}
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

        {/* Mealtime filter */}
        <Text style={styles.filterLabel}>Mealtime</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {TIMES.map(({ key, label }) => (
            <TouchableOpacity
              key={key}
              style={[styles.chip, selectedTime === key && styles.chipActive]}
              onPress={() => setSelectedTime(prev => prev === key ? null : key)}
            >
              <Text style={[styles.chipText, selectedTime === key && styles.chipTextActive]}>{label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Diet filter */}
        <Text style={styles.filterLabel}>Diet</Text>
        <View style={styles.tagsRow}>
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

        <Text style={styles.resultCount}>{filtered.length} recipe{filtered.length !== 1 ? 's' : ''}</Text>

        {filtered.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            showImage
            imageBaseUrl={IMAGE_BASE_URL}
            onPress={() => handleSelect(recipe.id)}
          />
        ))}

        {filtered.length === 0 && (
          <Text style={styles.empty}>No recipes match your filters.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:            { flex: 1, backgroundColor: colors.background },
  content:         { padding: spacing.md, paddingBottom: spacing.xl },
  heading:         { fontSize: font.sizes.xl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.md },
  searchContainer: { position: 'relative', marginBottom: spacing.sm },
  search:          { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, fontSize: font.sizes.md, color: colors.text, paddingRight: 40 },
  clearBtn:        { position: 'absolute', right: spacing.sm, top: 0, bottom: 0, justifyContent: 'center', paddingHorizontal: spacing.xs },
  clearBtnText:    { color: colors.textMuted, fontSize: 14 },
  suggestions:     { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.sm, overflow: 'hidden' },
  suggestion:      { paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, borderBottomWidth: 1, borderBottomColor: colors.border },
  suggestionText:  { fontSize: font.sizes.md, color: colors.text },
  filterLabel:     { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  filterRow:       { marginBottom: spacing.md },
  tagsRow:         { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.md },
  chip:            { paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2, borderRadius: radius.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, marginRight: spacing.xs },
  chipActive:      { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText:        { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
  chipTextActive:  { color: '#fff' },
  resultCount:     { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.sm },
  empty:           { textAlign: 'center', color: colors.textMuted, fontSize: font.sizes.md, marginTop: spacing.xl },
});
