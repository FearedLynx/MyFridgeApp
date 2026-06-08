import React, { useState, useMemo, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView,
  TouchableOpacity, LayoutAnimation, Platform, UIManager, Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { StepSectionType } from '../types';
import { getRecipeColor } from '../utils/recipeColor';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
};

const SECTION_LABELS: Record<StepSectionType, string> = {
  cutting: 'Cutting', preparing: 'Preparing', cooking: 'Cooking',
  assembling: 'Assembling', baking: 'Baking',
};

const TAG_LABELS: Record<string, string> = {
  'low-calorie': 'Low Cal', 'low-carb': 'Low Carb', vegetarian: 'Vege',
  vegan: 'Vegan', 'high-protein': 'Protein', quick: 'Quick', 'gluten-free': 'GF',
};

export default function RecipeDetailScreen({ navigation, route }: Props) {
  const { favorites, toggleFavorite, userRecipes, dbRecipes, trackViewed, logCooked } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const recipeId: string = route.params?.recipeId;
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});
  const [madeit, setMadeit] = useState(false);

  const recipe = useMemo(() => {
    const all = [...userRecipes, ...dbRecipes];
    return all.find(r => r.id === recipeId) ?? null;
  }, [recipeId, userRecipes, dbRecipes]);

  useEffect(() => { if (recipeId) trackViewed(recipeId); }, [recipeId]);

  const toggleSection = (i: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(prev => ({ ...prev, [i]: !prev[i] }));
  };

  if (!recipe) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.notFound}>Recipe not found.</Text>
      </SafeAreaView>
    );
  }

  const isFav = favorites.includes(recipe.id);
  const sections = recipe.sections ?? [];
  const ingredients = recipe.ingredients ?? [];
  const tags = recipe.tags ?? [];
  const totalMins = recipe.total_minutes ?? recipe.timeBreakdown?.totalMinutes ?? 0;
  const timeBreakdown = recipe.timeBreakdown ?? { sections: [], totalMinutes: totalMins };
  const accentColor = getRecipeColor(recipe);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Color banner */}
        <View style={[styles.hero, { backgroundColor: accentColor }]} />

        <View style={styles.titleRow}>
          <Text style={styles.title}>{recipe.name}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(recipe.id)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={[styles.heart, isFav && styles.heartActive]}>{isFav ? '♥' : '♡'}</Text>
          </TouchableOpacity>
        </View>
        {recipe.author && <Text style={styles.author}>by {recipe.author}</Text>}
        {recipe.description ? <Text style={styles.description}>{recipe.description}</Text> : null}

        {tags.length > 0 && (
          <View style={styles.tags}>
            {tags.map(tag => (
              <View key={tag} style={[styles.tag, { backgroundColor: colors.tag[tag]?.bg ?? colors.primaryLight }]}>
                <Text style={[styles.tagText, { color: colors.tag[tag]?.text ?? colors.primary }]}>
                  {TAG_LABELS[tag] ?? tag}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.metaRow}>
          <View style={styles.metaBox}>
            <Text style={styles.metaValue}>{totalMins}</Text>
            <Text style={styles.metaUnit}>min total</Text>
          </View>
          <View style={styles.metaSep} />
          <View style={styles.metaBox}>
            <Text style={styles.metaValue}>{recipe.calories ?? '–'}</Text>
            <Text style={styles.metaUnit}>kcal</Text>
          </View>
          <View style={styles.metaSep} />
          <View style={styles.metaBox}>
            <Text style={styles.metaValue}>{recipe.servings ?? 2}</Text>
            <Text style={styles.metaUnit}>servings</Text>
          </View>
        </View>

        {timeBreakdown.sections.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Time Breakdown</Text>
            <View style={styles.timeTable}>
              {timeBreakdown.sections.map((s: any, i: number) => (
                <View key={i} style={[styles.timeRow, i < timeBreakdown.sections.length - 1 && styles.timeRowBorder]}>
                  <Text style={styles.timeLabel}>{SECTION_LABELS[s.type as StepSectionType] ?? s.type}</Text>
                  <Text style={styles.timeValue}>{s.minutes} min</Text>
                </View>
              ))}
              <View style={[styles.timeRow, styles.timeTotalRow]}>
                <Text style={styles.timeTotalLabel}>Total</Text>
                <Text style={styles.timeTotalValue}>{totalMins} min</Text>
              </View>
            </View>
          </>
        )}

        {ingredients.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Ingredients</Text>
            <View style={styles.ingredientList}>
              {ingredients.map((ing: any, i: number) => (
                <View key={i} style={[styles.ingredientRow, i < ingredients.length - 1 && styles.ingredientBorder]}>
                  <Text style={styles.ingredientName}>{ing.name}</Text>
                  <Text style={styles.ingredientQty}>{ing.quantity}</Text>
                </View>
              ))}
            </View>
          </>
        )}

        {sections.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>Steps</Text>
            {sections.map((section: any, si: number) => {
              const isCollapsed = collapsed[si] ?? false;
              const bg = colors.section[section.type] ?? colors.primaryLight;
              const textColor = colors.sectionText[section.type] ?? colors.primary;
              return (
                <View key={si} style={styles.stepSection}>
                  <TouchableOpacity
                    style={[styles.stepSectionHeader, { backgroundColor: bg }]}
                    onPress={() => toggleSection(si)}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.stepSectionTitle, { color: textColor }]}>
                      {SECTION_LABELS[section.type as StepSectionType]?.toUpperCase() ?? section.type?.toUpperCase()}
                    </Text>
                    <Text style={[styles.stepSectionMeta, { color: textColor }]}>
                      {section.durationMinutes} min
                    </Text>
                    <Text style={[styles.chevron, { color: textColor }]}>
                      {isCollapsed ? '›' : '⌄'}
                    </Text>
                  </TouchableOpacity>
                  {!isCollapsed && (
                    <View style={styles.stepList}>
                      {(section.steps ?? []).map((step: any, i: number) => (
                        <View key={i} style={[styles.step, i < section.steps.length - 1 && styles.stepBorder]}>
                          <Text style={styles.stepNumber}>{i + 1}</Text>
                          <View style={styles.stepContent}>
                            <Text style={styles.stepInstruction}>{step.instruction}</Text>
                            {step.cutStyle && (
                              <View style={styles.cutBadge}>
                                <Text style={styles.cutBadgeText}>{step.cutStyle}</Text>
                              </View>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </>
        )}
        {/* I Made This */}
        <View style={styles.madeitSection}>
          {madeit ? (
            <View style={styles.madeitDone}>
              <Text style={styles.madeitDoneText}>Logged {recipe.calories} kcal to today's tracker</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.madeitBtn}
              onPress={() => {
                Alert.alert(
                  'Finished this meal?',
                  `This will log ${recipe.calories} kcal to today's calorie tracker.`,
                  [
                    { text: 'Cancel', style: 'cancel' },
                    {
                      text: 'I Made This',
                      onPress: () => {
                        logCooked(new Date().toISOString().split('T')[0], recipe.calories ?? 0);
                        setMadeit(true);
                      },
                    },
                  ]
                );
              }}
            >
              <Text style={styles.madeitBtnText}>I Made This</Text>
            </TouchableOpacity>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:              { flex: 1, backgroundColor: colors.background },
  content:           { paddingBottom: 80 },
  notFound:          { padding: spacing.lg, color: colors.textMuted, fontSize: font.sizes.md },
  hero:              { width: '100%', height: 180, alignItems: 'center', justifyContent: 'center' },
  titleRow:          { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: spacing.md, paddingBottom: spacing.xs },
  title:             { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, flex: 1, marginRight: spacing.sm },
  heart:             { fontSize: 26, color: colors.textMuted },
  heartActive:       { color: colors.accent },
  author:            { fontSize: font.sizes.sm, color: colors.textMuted, paddingHorizontal: spacing.md, marginBottom: spacing.xs },
  description:       { fontSize: font.sizes.md, color: colors.textSecondary, lineHeight: 22, paddingHorizontal: spacing.md, marginBottom: spacing.md },
  tags:              { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, paddingHorizontal: spacing.md, marginBottom: spacing.md },
  tag:               { paddingHorizontal: 8, paddingVertical: 3, borderRadius: radius.sm },
  tagText:           { fontSize: font.sizes.xs, fontWeight: font.weights.semibold, letterSpacing: 0.3 },
  metaRow:           { flexDirection: 'row', backgroundColor: colors.surface, marginHorizontal: spacing.md, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.lg, overflow: 'hidden' },
  metaBox:           { flex: 1, alignItems: 'center', paddingVertical: spacing.md },
  metaSep:           { width: 1, backgroundColor: colors.border },
  metaValue:         { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text },
  metaUnit:          { fontSize: font.sizes.xs, color: colors.textMuted, marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.5 },
  sectionHeading:    { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.sm, marginTop: spacing.lg, paddingHorizontal: spacing.md },
  timeTable:         { backgroundColor: colors.surface, marginHorizontal: spacing.md, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  timeRow:           { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  timeRowBorder:     { borderBottomWidth: 1, borderBottomColor: colors.border },
  timeTotalRow:      { backgroundColor: colors.primaryLight },
  timeLabel:         { fontSize: font.sizes.md, color: colors.textSecondary },
  timeValue:         { fontSize: font.sizes.md, color: colors.textSecondary, fontWeight: font.weights.medium },
  timeTotalLabel:    { fontSize: font.sizes.md, fontWeight: font.weights.bold, color: colors.primary },
  timeTotalValue:    { fontSize: font.sizes.md, fontWeight: font.weights.bold, color: colors.primary },
  ingredientList:    { backgroundColor: colors.surface, marginHorizontal: spacing.md, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  ingredientRow:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2 },
  ingredientBorder:  { borderBottomWidth: 1, borderBottomColor: colors.border },
  ingredientName:    { fontSize: font.sizes.md, color: colors.text, flex: 1 },
  ingredientQty:     { fontSize: font.sizes.sm, color: colors.textMuted, fontWeight: font.weights.medium, marginLeft: spacing.sm },
  stepSection:       { marginHorizontal: spacing.md, borderRadius: radius.md, overflow: 'hidden', borderWidth: 1, borderColor: colors.border, marginBottom: spacing.sm },
  stepSectionHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2 },
  stepSectionTitle:  { fontSize: font.sizes.sm, fontWeight: font.weights.bold, letterSpacing: 1.5, flex: 1 },
  stepSectionMeta:   { fontSize: font.sizes.sm, fontWeight: font.weights.medium, marginRight: spacing.sm },
  chevron:           { fontSize: 18, fontWeight: font.weights.bold },
  stepList:          { backgroundColor: colors.surface },
  step:              { flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  stepBorder:        { borderBottomWidth: 1, borderBottomColor: colors.border },
  stepNumber:        { width: 24, fontSize: font.sizes.sm, fontWeight: font.weights.bold, color: colors.textMuted, marginTop: 1 },
  stepContent:       { flex: 1 },
  stepInstruction:   { fontSize: font.sizes.md, color: colors.text, lineHeight: 22 },
  cutBadge:          { marginTop: 4, alignSelf: 'flex-start', backgroundColor: colors.primaryLight, borderRadius: radius.sm, paddingHorizontal: 8, paddingVertical: 2 },
  cutBadgeText:      { fontSize: font.sizes.xs, color: colors.primary, fontWeight: font.weights.semibold, letterSpacing: 0.5 },
  madeitSection:    { marginHorizontal: spacing.md, marginTop: spacing.xl, marginBottom: spacing.lg },
  madeitBtn:        { backgroundColor: colors.primary, borderRadius: radius.md, padding: spacing.md + 2, alignItems: 'center' },
  madeitBtnText:    { color: '#fff', fontSize: font.sizes.lg, fontWeight: font.weights.bold },
  madeitDone:       { backgroundColor: colors.primaryLight, borderRadius: radius.md, padding: spacing.md, alignItems: 'center' },
  madeitDoneText:   { color: colors.primary, fontSize: font.sizes.md, fontWeight: font.weights.semibold },
});
