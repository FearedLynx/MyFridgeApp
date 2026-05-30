import React, { useState, useMemo } from 'react';
import {
  View, Text, StyleSheet, ScrollView, SafeAreaView,
  TouchableOpacity, TextInput, Alert, Switch,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useApp } from '../context/AppContext';
import { spacing, radius, font } from '../utils/theme';

const CUISINES = [
  'Italian', 'Asian', 'Mexican', 'Indian', 'Mediterranean',
  'French', 'American', 'Thai', 'Japanese', 'Middle Eastern',
  'Greek', 'Spanish', 'Chinese', 'Korean', 'Vietnamese',
];

const DIET_OPTIONS = [
  { id: 'none',       label: 'No restriction' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan',      label: 'Vegan' },
  { id: 'low-carb',   label: 'Low Carb' },
  { id: 'low-calorie',label: 'Low Calorie' },
  { id: 'high-protein',label: 'High Protein' },
  { id: 'gluten-free',label: 'Gluten-Free' },
];

export default function AccountScreen() {
  const { colors, allThemes, setThemeId, theme } = useTheme();
  const { preferences, setPreferences } = useApp();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [excludeNonDiet, setExcludeNonDiet] = useState(preferences?.excludeNonDiet ?? false);

  const selectedDiet = preferences?.diet ?? 'none';
  const selectedCuisines: string[] = preferences?.cuisines ?? [];

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing fields', 'Please enter your email and password.');
      return;
    }
    // TODO: wire to VPS backend
    Alert.alert('Coming soon', 'Community login will be available once the backend is set up.');
  };

  const toggleCuisine = (c: string) => {
    const next = selectedCuisines.includes(c)
      ? selectedCuisines.filter(x => x !== c)
      : [...selectedCuisines, c];
    setPreferences({ ...preferences, cuisines: next });
  };

  const selectDiet = (d: string) => {
    setPreferences({ ...preferences, diet: d });
    if (d !== 'none' && !excludeNonDiet) {
      Alert.alert(
        'Exclude non-matching recipes?',
        'Would you like to hide recipes that don\'t match your diet preference? You can change this later in Account → Preferences.',
        [
          { text: 'Keep all recipes', style: 'cancel' },
          {
            text: 'Exclude them',
            onPress: () => {
              setExcludeNonDiet(true);
              setPreferences({ ...preferences, diet: d, excludeNonDiet: true });
            },
          },
        ]
      );
    }
  };

  const handleExcludeToggle = (val: boolean) => {
    setExcludeNonDiet(val);
    setPreferences({ ...preferences, excludeNonDiet: val });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>My Account</Text>

        {/* ── Login ──────────────────────────────────────────── */}
        {!isLoggedIn ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sign in</Text>
            <Text style={styles.cardSubtitle}>Log in to share recipes and like community posts</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={colors.textMuted}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={colors.textMuted}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginBtnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn} onPress={handleLogin}>
              <Text style={styles.registerBtnText}>Create account</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{email}</Text>
            <TouchableOpacity onPress={() => setIsLoggedIn(false)}>
              <Text style={styles.logoutText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ── Preferences ────────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Preferences</Text>

        <Text style={styles.label}>Diet</Text>
        <View style={styles.chipGrid}>
          {DIET_OPTIONS.map(opt => (
            <TouchableOpacity
              key={opt.id}
              style={[styles.chip, selectedDiet === opt.id && styles.chipActive]}
              onPress={() => selectDiet(opt.id)}
            >
              <Text style={[styles.chipText, selectedDiet === opt.id && styles.chipTextActive]}>
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedDiet !== 'none' && (
          <View style={styles.toggleRow}>
            <View style={styles.toggleInfo}>
              <Text style={styles.toggleLabel}>Exclude non-matching recipes</Text>
              <Text style={styles.toggleHint}>Hide recipes that don't fit your diet</Text>
            </View>
            <Switch
              value={excludeNonDiet}
              onValueChange={handleExcludeToggle}
              trackColor={{ false: colors.border, true: colors.primaryLight }}
              thumbColor={excludeNonDiet ? colors.primary : colors.textMuted}
            />
          </View>
        )}

        <Text style={styles.label}>Favourite cuisines</Text>
        <Text style={styles.labelHint}>These appear first in Browse</Text>
        <View style={styles.chipGrid}>
          {CUISINES.map(c => (
            <TouchableOpacity
              key={c}
              style={[styles.chip, selectedCuisines.includes(c) && styles.chipActive]}
              onPress={() => toggleCuisine(c)}
            >
              <Text style={[styles.chipText, selectedCuisines.includes(c) && styles.chipTextActive]}>
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ── Theme picker ───────────────────────────────────── */}
        <Text style={styles.sectionTitle}>Theme</Text>
        <View style={styles.themeGrid}>
          {allThemes.map(t => (
            <TouchableOpacity
              key={t.id}
              style={[styles.themeCard, theme.id === t.id && styles.themeCardActive]}
              onPress={() => setThemeId(t.id)}
            >
              {/* Mini palette preview */}
              <View style={styles.themeSwatch}>
                <View style={[styles.swatchBlock, { backgroundColor: t.colors.background, flex: 2 }]} />
                <View style={[styles.swatchBlock, { backgroundColor: t.colors.primary, flex: 1 }]} />
                <View style={[styles.swatchBlock, { backgroundColor: t.colors.accent, flex: 1 }]} />
              </View>
              <Text style={[styles.themeName, { color: theme.id === t.id ? colors.primary : colors.textSecondary }]}>
                {t.name}
              </Text>
              {theme.id === t.id && (
                <View style={[styles.activeThemeDot, { backgroundColor: colors.primary }]} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:            { flex: 1, backgroundColor: colors.background },
  content:         { padding: spacing.md, paddingBottom: spacing.xl },
  heading:         { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.lg },

  card:            { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.lg },
  cardTitle:       { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  cardSubtitle:    { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.md },
  input:           { backgroundColor: colors.background, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, fontSize: font.sizes.md, color: colors.text, marginBottom: spacing.sm },
  loginBtn:        { backgroundColor: colors.primary, borderRadius: radius.md, padding: spacing.sm + 2, alignItems: 'center', marginBottom: spacing.sm },
  loginBtnText:    { color: '#fff', fontWeight: font.weights.semibold, fontSize: font.sizes.md },
  registerBtn:     { padding: spacing.sm, alignItems: 'center' },
  registerBtnText: { color: colors.primary, fontWeight: font.weights.medium, fontSize: font.sizes.sm },
  logoutText:      { color: colors.accent, fontWeight: font.weights.medium, fontSize: font.sizes.sm, marginTop: spacing.xs },

  sectionTitle:    { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.md, marginTop: spacing.sm },
  label:           { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  labelHint:       { fontSize: font.sizes.xs, color: colors.textMuted, marginBottom: spacing.sm, marginTop: -4 },

  chipGrid:        { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginBottom: spacing.md },
  chip:            { paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2, borderRadius: radius.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  chipActive:      { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText:        { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
  chipTextActive:  { color: '#fff' },

  toggleRow:       { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md, gap: spacing.md },
  toggleInfo:      { flex: 1 },
  toggleLabel:     { fontSize: font.sizes.md, fontWeight: font.weights.medium, color: colors.text },
  toggleHint:      { fontSize: font.sizes.xs, color: colors.textMuted, marginTop: 2 },

  themeGrid:       { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  themeCard:       { width: '30%', backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.border, overflow: 'hidden', alignItems: 'center', paddingBottom: spacing.sm },
  themeCardActive: { borderColor: colors.primary },
  themeSwatch:     { flexDirection: 'row', width: '100%', height: 40, marginBottom: spacing.xs },
  swatchBlock:     { height: '100%' },
  themeName:       { fontSize: font.sizes.xs, fontWeight: font.weights.semibold },
  activeThemeDot:  { width: 6, height: 6, borderRadius: 3, marginTop: 4 },
});
