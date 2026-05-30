import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { matchRecipes } from '../utils/fridgeMatch';
import RecipeCard from '../components/RecipeCard';
import { spacing, radius, font } from '../utils/theme';

const IMAGE_BASE_URL = '';

type Props = { navigation: NativeStackNavigationProp<any> };

export default function CookScreen({ navigation }: Props) {
  const { fridge, allRecipes } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const results = matchRecipes(allRecipes, fridge);
  const exact = results.filter(r => r.matchType === 'exact');
  const near  = results.filter(r => r.matchType === 'near');

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
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>What Can I Cook?</Text>
        <Text style={styles.subtitle}>Based on {fridge.length} ingredient{fridge.length > 1 ? 's' : ''} in your fridge</Text>

        {exact.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.dot, { backgroundColor: '#22C55E' }]} />
              <Text style={styles.sectionLabel}>Can make now</Text>
              <Text style={styles.sectionCount}>{exact.length}</Text>
            </View>
            {exact.map(r => (
              <RecipeCard key={r.recipe.id} recipe={r.recipe} showImage imageBaseUrl={IMAGE_BASE_URL}
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
              <RecipeCard key={r.recipe.id} recipe={r.recipe} showImage imageBaseUrl={IMAGE_BASE_URL}
                substitutions={r.substitutions} missingIngredients={r.missingIngredients}
                onPress={() => navigation.navigate('RecipeDetail', { recipeId: r.recipe.id })} />
            ))}
          </View>
        )}

        {exact.length === 0 && near.length === 0 && (
          <View style={styles.noMatch}>
            <Text style={styles.noMatchTitle}>No matches yet</Text>
            <Text style={styles.noMatchText}>Try adding more ingredients to your fridge.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:          { flex: 1, backgroundColor: colors.background },
  content:       { padding: spacing.md, paddingBottom: spacing.xl },
  heading:       { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  subtitle:      { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.lg },
  section:       { marginBottom: spacing.lg },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.sm, gap: spacing.xs },
  dot:           { width: 8, height: 8, borderRadius: 4 },
  sectionLabel:  { fontSize: font.sizes.sm, fontWeight: font.weights.bold, color: colors.text, textTransform: 'uppercase', letterSpacing: 0.8, flex: 1 },
  sectionCount:  { fontSize: font.sizes.sm, fontWeight: font.weights.semibold, color: colors.textMuted },
  empty:         { flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.xl },
  emptyTitle:    { fontSize: font.sizes.xl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.sm, textAlign: 'center' },
  emptyText:     { fontSize: font.sizes.md, color: colors.textSecondary, textAlign: 'center', lineHeight: 22, marginBottom: spacing.lg },
  goBtn:         { backgroundColor: colors.primary, borderRadius: radius.md, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm + 4 },
  goBtnText:     { color: '#fff', fontWeight: font.weights.semibold, fontSize: font.sizes.md },
  noMatch:       { padding: spacing.xl, alignItems: 'center' },
  noMatchTitle:  { fontSize: font.sizes.lg, fontWeight: font.weights.semibold, color: colors.text, marginBottom: spacing.xs },
  noMatchText:   { fontSize: font.sizes.md, color: colors.textSecondary, textAlign: 'center' },
});
