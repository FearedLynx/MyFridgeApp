import React, { useMemo, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useApp, TODAY } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { DailyPlan, MealTime, Recipe } from '../types';
import { getRecipeColor } from '../utils/recipeColor';

type Props = { navigation: NativeStackNavigationProp<any> };

const MEAL_SLOTS: { key: MealTime; label: string }[] = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch',     label: 'Lunch' },
  { key: 'dinner',    label: 'Dinner' },
  { key: 'snack',     label: 'Snack' },
];

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getWeekDates(): string[] {
  const d = new Date();
  const day = d.getDay(); // 0=Sun
  const monday = new Date(d);
  monday.setDate(d.getDate() - ((day + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date.toISOString().split('T')[0];
  });
}

function dateLabel(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.getDate().toString();
}

function totalPlannedCalories(plan: DailyPlan, recipeById: Record<string, Recipe>): number {
  const slots: (keyof Omit<DailyPlan, 'date'>)[] = ['breakfast','lunch','dinner','snack'];
  let total = 0;
  for (const slot of slots) {
    for (const id of plan[slot] ?? []) {
      total += recipeById[id]?.calories ?? 0;
    }
  }
  return total;
}

function mealCount(plan: DailyPlan): number {
  return (plan.breakfast?.length ?? 0) + (plan.lunch?.length ?? 0) +
         (plan.dinner?.length ?? 0) + (plan.snack?.length ?? 0);
}

export default function HomeScreen({ navigation }: Props) {
  const {
    dailyPlan, removeMealFromSlot, addMealForTime,
    userRecipes, dbRecipes,
    weekPlan, setDayPlan,
    cookedLog, preferences,
  } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const weekDates = useMemo(() => getWeekDates(), []);
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const calorieGoal = preferences.calorieGoal ?? 2000;
  const todayCooked = cookedLog[TODAY] ?? 0;
  const caloriePercent = Math.min(todayCooked / calorieGoal, 1);

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long',
  });

  const allRecipes: Recipe[] = useMemo(() => [...userRecipes, ...dbRecipes], [userRecipes, dbRecipes]);
  const recipeById = useMemo(() => {
    const m: Record<string, Recipe> = {};
    for (const r of allRecipes) m[r.id] = r;
    return m;
  }, [allRecipes]);

  const addMealForDay = useCallback((date: string, mealTime: MealTime, recipeId: string) => {
    if (date === TODAY) {
      addMealForTime(mealTime, recipeId);
    } else {
      const day = weekPlan[date] ?? { date, breakfast: [], lunch: [], dinner: [], snack: [] };
      const current = day[mealTime] ?? [];
      if (!current.includes(recipeId)) {
        setDayPlan(date, { ...day, [mealTime]: [...current, recipeId] });
      }
    }
  }, [weekPlan, addMealForTime, setDayPlan]);

  const removeMealForDay = useCallback((date: string, mealTime: MealTime, recipeId: string) => {
    if (date === TODAY) {
      removeMealFromSlot(mealTime, recipeId);
    } else {
      const day = weekPlan[date] ?? { date, breakfast: [], lunch: [], dinner: [], snack: [] };
      setDayPlan(date, { ...day, [mealTime]: (day[mealTime] ?? []).filter(id => id !== recipeId) });
    }
  }, [weekPlan, removeMealFromSlot, setDayPlan]);

  // ── Weekly bar chart data ───────────────────────────────────────────────────
  const weekBars = useMemo(() => weekDates.map(date => {
    const cooked = cookedLog[date] ?? 0;
    const fill = Math.min(cooked / calorieGoal, 1);
    return { date, cooked, fill };
  }), [weekDates, cookedLog, calorieGoal]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* ── Header ─────────────────────────────────────────── */}
        <Text style={styles.heading}>Today's Plan</Text>
        <Text style={styles.date}>{today}</Text>

        {/* ── Calorie widgets ────────────────────────────────── */}
        <View style={styles.calorieRow}>

          {/* Daily circle */}
          <View style={styles.calorieCircleCard}>
            <View style={[styles.calorieRing, { borderColor: colors.border }]}>
              <View style={[styles.calorieRingFill, {
                borderColor: todayCooked > 0 ? colors.primary : 'transparent',
                opacity: caloriePercent,
              }]} />
              <View style={styles.calorieCenter}>
                <Text style={styles.calorieNumber}>{todayCooked}</Text>
                <Text style={styles.calorieUnit}>kcal</Text>
              </View>
            </View>
            <View style={styles.calorieGoalRow}>
              <View style={[styles.calorieBar, { backgroundColor: colors.border }]}>
                <View style={[styles.calorieBarFill, {
                  backgroundColor: colors.primary,
                  width: `${Math.round(caloriePercent * 100)}%`,
                }]} />
              </View>
            </View>
            <Text style={styles.calorieGoalText}>Goal: {calorieGoal} kcal</Text>
          </View>

          {/* Weekly bars */}
          <View style={styles.weekBarsCard}>
            <Text style={styles.weekBarsTitle}>This Week</Text>
            <View style={styles.weekBarsRow}>
              {weekBars.map(({ date, fill }, i) => {
                const isToday = date === TODAY;
                return (
                  <View key={date} style={styles.weekBarCol}>
                    <View style={styles.weekBarTrack}>
                      <View style={[
                        styles.weekBarFill,
                        { height: `${Math.max(fill * 100, fill > 0 ? 4 : 0)}%`, backgroundColor: isToday ? colors.primary : colors.accent },
                      ]} />
                    </View>
                    <Text style={[styles.weekBarLabel, isToday && { color: colors.primary, fontWeight: font.weights.bold }]}>
                      {DAY_LABELS[i][0]}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        {/* ── Today's meal slots ─────────────────────────────── */}
        <Text style={styles.sectionTitle}>Meals</Text>
        {MEAL_SLOTS.map(({ key, label }) => {
          const recipeIds = dailyPlan[key] ?? [];
          return (
            <View key={key} style={styles.slot}>
              <View style={styles.slotHeader}>
                <Text style={styles.slotLabel}>{label}</Text>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => navigation.navigate('Browse', { assignTo: key })}
                >
                  <Icon name="plus" size={14} color={colors.primary} />
                  <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
              </View>

              {recipeIds.length === 0 ? (
                <TouchableOpacity
                  style={styles.emptySlot}
                  onPress={() => navigation.navigate('Browse', { assignTo: key })}
                >
                  <Text style={styles.emptyText}>+ Add meal</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.recipeList}>
                  {recipeIds.map(id => {
                    const recipe = recipeById[id];
                    if (!recipe) return null;
                    const color = getRecipeColor(recipe);
                    return (
                      <TouchableOpacity
                        key={id}
                        style={styles.recipeRow}
                        onPress={() => navigation.navigate('RecipeDetail', { recipeId: id })}
                        activeOpacity={0.8}
                      >
                        <View style={[styles.colorDot, { backgroundColor: color }]} />
                        <View style={styles.recipeInfo}>
                          <Text style={styles.recipeName} numberOfLines={1}>{recipe.name}</Text>
                          <Text style={styles.recipeMeta}>
                            {recipe.total_minutes ?? recipe.timeBreakdown?.totalMinutes ?? '?'} min
                            · {recipe.calories ?? '–'} kcal
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => removeMealFromSlot(key, id)}
                          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                          <Text style={styles.removeBtn}>✕</Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}

        {/* ── Shortcuts ──────────────────────────────────────── */}
        <View style={styles.shortcutRow}>
          <TouchableOpacity style={[styles.shortcutBtn, { flex: 1 }]} onPress={() => navigation.navigate('Fridge')}>
            <Text style={styles.shortcutBtnText}>My Fridge</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.shortcutBtn, styles.shortcutBtnOutline, { flex: 1 }]}
            onPress={() => navigation.navigate('ShoppingList')}
          >
            <Text style={[styles.shortcutBtnText, styles.shortcutBtnOutlineText]}>Shopping List</Text>
          </TouchableOpacity>
        </View>

        {/* ── Week planner ───────────────────────────────────── */}
        <Text style={styles.sectionTitle}>This Week</Text>
        {weekDates.map((date, i) => {
          const isToday = date === TODAY;
          const plan = weekPlan[date] ?? { date, breakfast: [], lunch: [], dinner: [], snack: [] };
          const count = mealCount(plan);
          const planned = totalPlannedCalories(plan, recipeById);
          const cooked = cookedLog[date] ?? 0;
          const isExpanded = expandedDay === date;

          return (
            <View key={date} style={[styles.dayCard, isToday && styles.dayCardToday]}>
              <TouchableOpacity
                style={styles.dayCardHeader}
                onPress={() => setExpandedDay(isExpanded ? null : date)}
                activeOpacity={0.7}
              >
                <View style={styles.dayCardLeft}>
                  <Text style={[styles.dayName, isToday && { color: colors.primary }]}>
                    {isToday ? 'Today' : DAY_LABELS[i]}
                  </Text>
                  <Text style={styles.dayNum}>{dateLabel(date)}</Text>
                </View>
                <View style={styles.dayCardRight}>
                  {count > 0 && (
                    <View style={styles.mealCountChip}>
                      <Text style={styles.mealCountText}>{count} meal{count !== 1 ? 's' : ''}</Text>
                    </View>
                  )}
                  {planned > 0 && (
                    <Text style={styles.dayCalText}>{planned} kcal</Text>
                  )}
                  {cooked > 0 && (
                    <Text style={[styles.dayCalText, { color: colors.primary }]}>{cooked} cooked</Text>
                  )}
                  <Text style={styles.chevron}>{isExpanded ? '▲' : '▼'}</Text>
                </View>
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.daySlots}>
                  {MEAL_SLOTS.map(({ key, label }) => {
                    const recipeIds = plan[key] ?? [];
                    return (
                      <View key={key} style={styles.daySlot}>
                        <View style={styles.daySlotHeader}>
                          <Text style={styles.daySlotLabel}>{label}</Text>
                          <TouchableOpacity
                            style={styles.addBtn}
                            onPress={() => {
                              if (isToday) {
                                navigation.navigate('Browse', { assignTo: key });
                              } else {
                                navigation.navigate('Browse', {
                                  assignTo: key,
                                  onSelect: (recipeId: string) => addMealForDay(date, key, recipeId),
                                });
                              }
                            }}
                          >
                            <Icon name="plus" size={12} color={colors.primary} />
                            <Text style={styles.addBtnText}>Add</Text>
                          </TouchableOpacity>
                        </View>
                        {recipeIds.length === 0 ? (
                          <Text style={styles.daySlotEmpty}>Empty</Text>
                        ) : (
                          recipeIds.map(id => {
                            const recipe = recipeById[id];
                            if (!recipe) return null;
                            return (
                              <View key={id} style={styles.dayRecipeRow}>
                                <View style={[styles.colorDot, { backgroundColor: getRecipeColor(recipe) }]} />
                                <Text style={styles.dayRecipeName} numberOfLines={1}>{recipe.name}</Text>
                                <TouchableOpacity
                                  onPress={() => removeMealForDay(date, key, id)}
                                  hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                                >
                                  <Text style={styles.removeBtn}>✕</Text>
                                </TouchableOpacity>
                              </View>
                            );
                          })
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          );
        })}

      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:         { flex: 1, backgroundColor: colors.background },
  content:      { padding: spacing.md, paddingBottom: spacing.xl },
  heading:      { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  date:         { fontSize: font.sizes.xs, color: colors.textMuted, marginBottom: spacing.md, textTransform: 'uppercase', letterSpacing: 0.8 },
  sectionTitle: { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.sm, marginTop: spacing.lg },

  // Calorie widgets
  calorieRow:        { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  calorieCircleCard: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.md, alignItems: 'center' },
  calorieRing:       { width: 80, height: 80, borderRadius: 40, borderWidth: 6, alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: spacing.sm },
  calorieRingFill:   { position: 'absolute', width: 80, height: 80, borderRadius: 40, borderWidth: 6 },
  calorieCenter:     { alignItems: 'center' },
  calorieNumber:     { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text },
  calorieUnit:       { fontSize: font.sizes.xs, color: colors.textMuted },
  calorieGoalRow:    { width: '100%', marginBottom: 4 },
  calorieBar:        { height: 4, borderRadius: 2, width: '100%', overflow: 'hidden' },
  calorieBarFill:    { height: '100%', borderRadius: 2 },
  calorieGoalText:   { fontSize: font.sizes.xs, color: colors.textMuted },

  weekBarsCard:  { flex: 1.2, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.md },
  weekBarsTitle: { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.sm },
  weekBarsRow:   { flexDirection: 'row', alignItems: 'flex-end', height: 60, gap: 4 },
  weekBarCol:    { flex: 1, alignItems: 'center' },
  weekBarTrack:  { flex: 1, width: '100%', backgroundColor: colors.border, borderRadius: 3, justifyContent: 'flex-end', overflow: 'hidden', marginBottom: 4 },
  weekBarFill:   { width: '100%', borderRadius: 3 },
  weekBarLabel:  { fontSize: 10, color: colors.textMuted },

  // Today's meal slots
  slot:         { marginBottom: spacing.sm },
  slotHeader:   { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.xs },
  slotLabel:    { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1 },
  addBtn:       { flexDirection: 'row', alignItems: 'center', gap: 3, paddingHorizontal: spacing.sm, paddingVertical: 3, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.primary },
  addBtnText:   { fontSize: font.sizes.xs, color: colors.primary, fontWeight: font.weights.semibold },
  emptySlot:    { borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border, borderStyle: 'dashed', padding: spacing.md, alignItems: 'center' },
  emptyText:    { fontSize: font.sizes.md, color: colors.textMuted, fontWeight: font.weights.medium },
  recipeList:   { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  recipeRow:    { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.sm, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border, gap: spacing.sm },
  colorDot:     { width: 10, height: 10, borderRadius: 5, flexShrink: 0 },
  recipeInfo:   { flex: 1 },
  recipeName:   { fontSize: font.sizes.sm, fontWeight: font.weights.semibold, color: colors.text, marginBottom: 1 },
  recipeMeta:   { fontSize: font.sizes.xs, color: colors.textMuted },
  removeBtn:    { fontSize: 14, color: colors.textMuted, paddingLeft: spacing.xs },

  // Shortcuts
  shortcutRow:             { marginTop: spacing.md, flexDirection: 'row', gap: spacing.sm },
  shortcutBtn:             { backgroundColor: colors.primary, borderRadius: radius.md, padding: spacing.md, alignItems: 'center' },
  shortcutBtnOutline:      { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: colors.primary },
  shortcutBtnText:         { color: '#fff', fontSize: font.sizes.md, fontWeight: font.weights.semibold },
  shortcutBtnOutlineText:  { color: colors.primary },

  // Week planner
  dayCard:        { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.xs, overflow: 'hidden' },
  dayCardToday:   { borderColor: colors.primary, borderWidth: 1.5 },
  dayCardHeader:  { flexDirection: 'row', alignItems: 'center', padding: spacing.md },
  dayCardLeft:    { flexDirection: 'row', alignItems: 'baseline', gap: spacing.xs, flex: 1 },
  dayName:        { fontSize: font.sizes.md, fontWeight: font.weights.bold, color: colors.text },
  dayNum:         { fontSize: font.sizes.sm, color: colors.textMuted },
  dayCardRight:   { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  mealCountChip:  { backgroundColor: colors.border, borderRadius: radius.sm, paddingHorizontal: spacing.sm, paddingVertical: 2 },
  mealCountText:  { fontSize: font.sizes.xs, color: colors.textSecondary, fontWeight: font.weights.medium },
  dayCalText:     { fontSize: font.sizes.xs, color: colors.textMuted },
  chevron:        { fontSize: 10, color: colors.textMuted, marginLeft: spacing.xs },
  daySlots:       { borderTopWidth: 1, borderTopColor: colors.border, padding: spacing.md, gap: spacing.md },
  daySlot:        {},
  daySlotHeader:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  daySlotLabel:   { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 0.8 },
  daySlotEmpty:   { fontSize: font.sizes.xs, color: colors.textMuted, paddingLeft: 2 },
  dayRecipeRow:   { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, paddingVertical: 3 },
  dayRecipeName:  { flex: 1, fontSize: font.sizes.sm, color: colors.text },
});
