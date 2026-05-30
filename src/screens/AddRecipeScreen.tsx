import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView,
  TextInput, TouchableOpacity, Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { DietTag, MealTime, Recipe, StepSection, StepSectionType } from '../types';

type Props = { navigation: NativeStackNavigationProp<any> };

const DIET_TAGS: DietTag[] = ['low-calorie', 'low-carb', 'vegetarian', 'vegan', 'high-protein', 'quick'];
const TAG_LABELS: Record<DietTag, string> = {
  'low-calorie': 'Low Cal', 'low-carb': 'Low Carb', vegetarian: 'Vege',
  vegan: 'Vegan', 'high-protein': 'Protein', quick: 'Quick',
};
const MEAL_TIMES: MealTime[] = ['breakfast', 'lunch', 'dinner', 'snack'];
const SECTION_TYPES: StepSectionType[] = ['cutting', 'preparing', 'cooking', 'assembling', 'baking'];

function uid() {
  return Math.random().toString(36).slice(2);
}

export default function AddRecipeScreen({ navigation }: Props) {
  const { addRecipe } = useApp();
  const { colors } = useTheme();
  const styles = React.useMemo(() => createStyles(colors), [colors]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('2');
  const [selectedTags, setSelectedTags] = useState<DietTag[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<MealTime[]>([]);
  const [ingredients, setIngredients] = useState<{ name: string; quantity: string }[]>([
    { name: '', quantity: '' },
  ]);
  const [sections, setSections] = useState<{ type: StepSectionType; minutes: string; steps: string[] }[]>([
    { type: 'cooking', minutes: '', steps: [''] },
  ]);

  const toggleTag = (tag: DietTag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const toggleTime = (t: MealTime) => {
    setSelectedTimes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const addIngredient = () => setIngredients(prev => [...prev, { name: '', quantity: '' }]);
  const updateIngredient = (i: number, field: 'name' | 'quantity', val: string) => {
    setIngredients(prev => prev.map((ing, idx) => idx === i ? { ...ing, [field]: val } : ing));
  };
  const removeIngredient = (i: number) => {
    setIngredients(prev => prev.filter((_, idx) => idx !== i));
  };

  const addSection = () => setSections(prev => [...prev, { type: 'cooking', minutes: '', steps: [''] }]);
  const updateSection = (si: number, field: 'type' | 'minutes', val: string) => {
    setSections(prev => prev.map((s, i) => i === si ? { ...s, [field]: val } : s));
  };
  const addStep = (si: number) => {
    setSections(prev => prev.map((s, i) => i === si ? { ...s, steps: [...s.steps, ''] } : s));
  };
  const updateStep = (si: number, stepIdx: number, val: string) => {
    setSections(prev => prev.map((s, i) => i === si
      ? { ...s, steps: s.steps.map((st, j) => j === stepIdx ? val : st) }
      : s
    ));
  };
  const removeStep = (si: number, stepIdx: number) => {
    setSections(prev => prev.map((s, i) => i === si
      ? { ...s, steps: s.steps.filter((_, j) => j !== stepIdx) }
      : s
    ));
  };

  const handleSave = () => {
    if (!name.trim()) { Alert.alert('Missing name', 'Please enter a recipe name.'); return; }
    if (selectedTimes.length === 0) { Alert.alert('Missing mealtime', 'Select at least one mealtime.'); return; }

    const builtSections: StepSection[] = sections
      .filter(s => s.steps.some(st => st.trim()))
      .map(s => ({
        type: s.type,
        durationMinutes: parseInt(s.minutes) || 0,
        steps: s.steps.filter(st => st.trim()).map(st => ({ instruction: st })),
      }));

    const totalMinutes = builtSections.reduce((sum, s) => sum + s.durationMinutes, 0);

    const recipe: Recipe = {
      id: uid(),
      name: name.trim(),
      description: description.trim(),
      mealTimes: selectedTimes,
      tags: selectedTags,
      calories: parseInt(calories) || 0,
      servings: parseInt(servings) || 1,
      ingredients: ingredients
        .filter(i => i.name.trim())
        .map(i => ({
          ingredientId: i.name.trim().toLowerCase().replace(/\s+/g, '-'),
          name: i.name.trim(),
          quantity: i.quantity.trim(),
        })),
      sections: builtSections,
      timeBreakdown: {
        sections: builtSections.map(s => ({ type: s.type, minutes: s.durationMinutes })),
        totalMinutes,
      },
      isUserCreated: true,
    };

    addRecipe(recipe);
    Alert.alert('Recipe saved!', '', [{ text: 'OK', onPress: () => navigation.goBack() }]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>New Recipe</Text>

        {/* Basic info */}
        <Text style={styles.label}>Recipe name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Mushroom Risotto" placeholderTextColor={colors.textMuted} />

        <Text style={styles.label}>Short description</Text>
        <TextInput style={[styles.input, styles.multiline]} value={description} onChangeText={setDescription} placeholder="What's special about it?" placeholderTextColor={colors.textMuted} multiline numberOfLines={2} />

        <View style={styles.row}>
          <View style={styles.halfField}>
            <Text style={styles.label}>Calories</Text>
            <TextInput style={styles.input} value={calories} onChangeText={setCalories} keyboardType="numeric" placeholder="kcal" placeholderTextColor={colors.textMuted} />
          </View>
          <View style={styles.halfField}>
            <Text style={styles.label}>Servings</Text>
            <TextInput style={styles.input} value={servings} onChangeText={setServings} keyboardType="numeric" placeholder="2" placeholderTextColor={colors.textMuted} />
          </View>
        </View>

        {/* Mealtime */}
        <Text style={styles.label}>Mealtime</Text>
        <View style={styles.chipRow}>
          {MEAL_TIMES.map(t => (
            <TouchableOpacity key={t} style={[styles.chip, selectedTimes.includes(t) && styles.chipActive]} onPress={() => toggleTime(t)}>
              <Text style={[styles.chipText, selectedTimes.includes(t) && styles.chipTextActive]}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tags */}
        <Text style={styles.label}>Diet tags</Text>
        <View style={styles.chipRow}>
          {DIET_TAGS.map(tag => (
            <TouchableOpacity key={tag} style={[styles.chip, selectedTags.includes(tag) && styles.chipActive]} onPress={() => toggleTag(tag)}>
              <Text style={[styles.chipText, selectedTags.includes(tag) && styles.chipTextActive]}>
                {TAG_LABELS[tag]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ingredients */}
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {ingredients.map((ing, i) => (
          <View key={i} style={styles.ingredientRow}>
            <TextInput style={[styles.input, { flex: 2 }]} value={ing.name} onChangeText={v => updateIngredient(i, 'name', v)} placeholder="Ingredient" placeholderTextColor={colors.textMuted} />
            <TextInput style={[styles.input, { flex: 1 }]} value={ing.quantity} onChangeText={v => updateIngredient(i, 'quantity', v)} placeholder="Amount" placeholderTextColor={colors.textMuted} />
            {ingredients.length > 1 && (
              <TouchableOpacity onPress={() => removeIngredient(i)} style={styles.removeBtn}>
                <Text style={styles.removeBtnText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.addBtn} onPress={addIngredient}>
          <Text style={styles.addBtnText}>+ Add ingredient</Text>
        </TouchableOpacity>

        {/* Steps */}
        <Text style={styles.sectionTitle}>Steps</Text>
        {sections.map((section, si) => (
          <View key={si} style={styles.stepSection}>
            <View style={styles.stepSectionHeader}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {SECTION_TYPES.map(type => (
                  <TouchableOpacity
                    key={type}
                    style={[styles.typeChip, section.type === type && styles.typeChipActive]}
                    onPress={() => updateSection(si, 'type', type)}
                  >
                    <Text style={[styles.typeChipText, section.type === type && styles.typeChipTextActive]}>
                      {type.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TextInput
                style={styles.durationInput}
                value={section.minutes}
                onChangeText={v => updateSection(si, 'minutes', v)}
                placeholder="min"
                placeholderTextColor={colors.textMuted}
                keyboardType="numeric"
              />
            </View>

            {section.steps.map((step, stepIdx) => (
              <View key={stepIdx} style={styles.stepRow}>
                <Text style={styles.stepNum}>{stepIdx + 1}.</Text>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={step}
                  onChangeText={v => updateStep(si, stepIdx, v)}
                  placeholder="Describe this step..."
                  placeholderTextColor={colors.textMuted}
                  multiline
                />
                {section.steps.length > 1 && (
                  <TouchableOpacity onPress={() => removeStep(si, stepIdx)} style={styles.removeBtn}>
                    <Text style={styles.removeBtnText}>✕</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            <TouchableOpacity style={styles.addBtn} onPress={() => addStep(si)}>
              <Text style={styles.addBtnText}>+ Add step</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.addBtn} onPress={addSection}>
          <Text style={styles.addBtnText}>+ Add section</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Save Recipe</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flex: 1 },
  content: { padding: spacing.md, paddingBottom: 80 },
  heading: {
    fontSize: font.sizes.xxl,
    fontWeight: font.weights.bold,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: font.sizes.xs,
    fontWeight: font.weights.bold,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
    marginTop: spacing.sm,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs + 2,
    fontSize: font.sizes.md,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  multiline: { minHeight: 60, textAlignVertical: 'top' },
  row: { flexDirection: 'row', gap: spacing.sm },
  halfField: { flex: 1 },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
  chipTextActive: { color: '#fff' },
  sectionTitle: {
    fontSize: font.sizes.lg,
    fontWeight: font.weights.bold,
    color: colors.text,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  ingredientRow: { flexDirection: 'row', gap: spacing.xs, alignItems: 'center' },
  stepSection: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  stepSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  typeChip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.sm,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.xs,
  },
  typeChipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  typeChipText: { fontSize: font.sizes.xs, color: colors.textSecondary, fontWeight: font.weights.semibold },
  typeChipTextActive: { color: '#fff' },
  durationInput: {
    width: 52,
    backgroundColor: colors.background,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    fontSize: font.sizes.sm,
    color: colors.text,
    textAlign: 'center',
  },
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.xs, marginBottom: spacing.xs },
  stepNum: { fontSize: font.sizes.sm, color: colors.textMuted, fontWeight: font.weights.bold, marginTop: 10 },
  removeBtn: { justifyContent: 'center', padding: spacing.xs },
  removeBtnText: { color: colors.textMuted, fontSize: 13 },
  addBtn: {
    paddingVertical: spacing.xs + 2,
    alignItems: 'center',
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    marginBottom: spacing.sm,
  },
  addBtnText: { color: colors.textSecondary, fontSize: font.sizes.sm, fontWeight: font.weights.medium },
  saveBtn: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  saveBtnText: { color: '#fff', fontSize: font.sizes.md, fontWeight: font.weights.semibold },
});
