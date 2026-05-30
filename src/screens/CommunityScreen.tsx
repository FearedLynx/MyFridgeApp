import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import RecipeCard from '../components/RecipeCard';
import { spacing, font } from '../utils/theme';

const IMAGE_BASE_URL = '';
type Props = { navigation: NativeStackNavigationProp<any> };

export default function CommunityScreen({ navigation }: Props) {
  const { allRecipes } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const communityRecipes = allRecipes.filter(r => r.isCommunity);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Community</Text>
        <Text style={styles.subtitle}>Recipes shared by other cooks</Text>
        {communityRecipes.map(recipe => (
          <View key={recipe.id}>
            {recipe.author && <Text style={styles.author}>by {recipe.author}</Text>}
            <RecipeCard recipe={recipe} showImage imageBaseUrl={IMAGE_BASE_URL}
              onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })} />
          </View>
        ))}
        {communityRecipes.length === 0 && (
          <Text style={styles.empty}>No community recipes yet.</Text>
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
  author:   { fontSize: font.sizes.xs, color: colors.textMuted, fontWeight: font.weights.medium, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 },
  empty:    { color: colors.textMuted, fontSize: font.sizes.md, textAlign: 'center', marginTop: 40 },
});
