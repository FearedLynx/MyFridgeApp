import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { MealTime } from '../types';

type Props = { navigation: NativeStackNavigationProp<any> };

const MEAL_SLOTS: { key: MealTime; label: string }[] = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',    label: 'Lunch' },
  { key: 'dinner',   label: 'Dinner' },
  { key: 'snack',    label: 'Snack' },
];

export default function HomeScreen({ navigation }: Props) {
  const { dailyPlan, allRecipes, setMealForTime } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long',
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Today's Plan</Text>
        <Text style={styles.date}>{today}</Text>

        {MEAL_SLOTS.map(({ key, label }) => {
          const recipeId = dailyPlan[key];
          const recipe = recipeId ? allRecipes.find(r => r.id === recipeId) : null;

          return (
            <View key={key} style={styles.slot}>
              <Text style={styles.slotLabel}>{label}</Text>
              {recipe ? (
                <TouchableOpacity
                  style={styles.assignedCard}
                  onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
                  activeOpacity={0.85}
                >
                  <View style={styles.assignedInfo}>
                    <Text style={styles.assignedName}>{recipe.name}</Text>
                    <Text style={styles.assignedMeta}>
                      {recipe.timeBreakdown?.totalMinutes ?? recipe.total_minutes ?? '?'} min
                      · {recipe.calories ?? '–'} kcal
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setMealForTime(key, undefined)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.removeBtn}>✕</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.emptySlot}
                  onPress={() => navigation.navigate('Browse', { assignTo: key })}
                >
                  <Text style={styles.emptyText}>+ Add meal</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}

        <TouchableOpacity style={styles.fridgeBtn} onPress={() => navigation.navigate('Fridge')}>
          <Text style={styles.fridgeBtnText}>Open My Fridge</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:         { flex: 1, backgroundColor: colors.background },
  content:      { padding: spacing.md, paddingBottom: spacing.xl },
  heading:      { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  date:         { fontSize: font.sizes.xs, color: colors.textMuted, marginBottom: spacing.lg, textTransform: 'uppercase', letterSpacing: 0.8 },
  slot:         { marginBottom: spacing.md },
  slotLabel:    { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  assignedCard: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border },
  assignedInfo: { flex: 1 },
  assignedName: { fontSize: font.sizes.md, fontWeight: font.weights.semibold, color: colors.text, marginBottom: 2 },
  assignedMeta: { fontSize: font.sizes.sm, color: colors.textMuted },
  removeBtn:    { fontSize: 16, color: colors.textMuted, marginLeft: spacing.md },
  emptySlot:    { borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border, borderStyle: 'dashed', padding: spacing.md, alignItems: 'center' },
  emptyText:    { fontSize: font.sizes.md, color: colors.textMuted, fontWeight: font.weights.medium },
  fridgeBtn:    { marginTop: spacing.lg, backgroundColor: colors.primary, borderRadius: radius.md, padding: spacing.md, alignItems: 'center' },
  fridgeBtnText:{ color: '#fff', fontSize: font.sizes.md, fontWeight: font.weights.semibold },
});
