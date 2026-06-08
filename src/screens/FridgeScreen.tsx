import React, { useState, useMemo, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView,
  TextInput, Alert, Animated,
} from 'react-native';
import { useApp } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';
import { FridgeItem } from '../types';
import { getSubstitutionGroup } from '../data/substitutionGroups';
import { parseTranscript, capitalize } from '../utils/voiceParser';

/**
 * Voice recognition requires a development build (not Expo Go).
 * Install: npm install @react-native-voice/voice
 * Then build with: npx expo prebuild && npx expo run:android
 */
let Voice: any = null;
try { Voice = require('@react-native-voice/voice').default; } catch (_) {}

// ── Substitution group display labels ────────────────────────────────────────
const GROUP_LABELS: Record<string, string> = {
  oil:        'Oils',
  flour:      'Flours',
  sweetener:  'Sweeteners',
  milk:       'Milks & Creams',
  butter:     'Butter & Spreads',
  vinegar:    'Vinegars',
  stock:      'Stocks',
  cheese:     'Cheeses',
  greenOnion: 'Green Onions',
  seasoning:  'Seasonings & Spices',
};

// Seasoning keywords — these go into the seasoning group
const SEASONING_KEYWORDS = [
  'salt', 'pepper', 'cumin', 'paprika', 'turmeric', 'cinnamon', 'oregano',
  'thyme', 'rosemary', 'basil', 'chili', 'cayenne', 'coriander', 'cardamom',
  'nutmeg', 'clove', 'bay', 'dill', 'parsley', 'sage', 'fennel', 'star anise',
  'curry', 'garam masala', 'sumac', 'za\'atar', 'allspice', 'mustard seed',
  'saffron', 'vanilla', 'chilli', 'flakes',
];

function isSeasoning(name: string): boolean {
  const n = name.toLowerCase();
  return SEASONING_KEYWORDS.some(k => n.includes(k));
}

function getEffectiveGroup(item: FridgeItem): string {
  if (isSeasoning(item.name)) return 'seasoning';
  return item.substitutionGroup ?? 'other';
}

// ── Quick add list ────────────────────────────────────────────────────────────
const QUICK_ADD = [
  { id: 'egg',            name: 'Eggs' },
  { id: 'whole-milk',     name: 'Milk' },
  { id: 'butter',         name: 'Butter' },
  { id: 'olive-oil',      name: 'Olive oil' },
  { id: 'vegetable-oil',  name: 'Vegetable oil' },
  { id: 'garlic',         name: 'Garlic' },
  { id: 'onion',          name: 'Onion' },
  { id: 'tomato',         name: 'Tomatoes' },
  { id: 'carrot',         name: 'Carrots' },
  { id: 'chicken-breast', name: 'Chicken breast' },
  { id: 'ground-beef',    name: 'Ground beef' },
  { id: 'spaghetti',      name: 'Spaghetti' },
  { id: 'all-purpose-flour', name: 'Flour' },
  { id: 'white-sugar',    name: 'Sugar' },
  { id: 'parmesan',       name: 'Parmesan' },
  { id: 'lemon',          name: 'Lemon' },
  { id: 'avocado',        name: 'Avocado' },
  { id: 'rolled-oats',    name: 'Oats' },
  { id: 'chickpeas',      name: 'Chickpeas' },
  { id: 'spinach',        name: 'Spinach' },
  { id: 'salt',           name: 'Salt' },
  { id: 'black-pepper',   name: 'Black pepper' },
  { id: 'cumin',          name: 'Cumin' },
  { id: 'paprika',        name: 'Paprika' },
  { id: 'broccoli',       name: 'Broccoli' },
  { id: 'red-bell-pepper', name: 'Red pepper' },
  { id: 'soy-sauce',      name: 'Soy sauce' },
  { id: 'honey',          name: 'Honey' },
  { id: 'coconut-milk',   name: 'Coconut milk' },
  { id: 'greek-yogurt',   name: 'Greek yogurt' },
  { id: 'salmon-fillet',  name: 'Salmon' },
];

function toIngredientId(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, '-');
}

// ── Voice confirmation modal ──────────────────────────────────────────────────
interface VoiceResult {
  toAdd: string[];
  toRemove: string[];
}

function VoiceConfirmSheet({
  result, onConfirm, onDismiss, colors, styles,
}: {
  result: VoiceResult;
  onConfirm: (toAdd: string[], toRemove: string[]) => void;
  onDismiss: () => void;
  colors: any;
  styles: any;
}) {
  const [selectedAdd, setSelectedAdd] = useState<Set<string>>(new Set(result.toAdd));
  const [selectedRemove, setSelectedRemove] = useState<Set<string>>(new Set(result.toRemove));

  const toggle = (set: Set<string>, setter: any, item: string) => {
    const next = new Set(set);
    next.has(item) ? next.delete(item) : next.add(item);
    setter(next);
  };

  return (
    <View style={styles.sheet}>
      <Text style={styles.sheetTitle}>Heard you say...</Text>

      {result.toAdd.length > 0 && (
        <View style={styles.sheetSection}>
          <Text style={styles.sheetSectionLabel}>Adding to fridge</Text>
          {result.toAdd.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.sheetItem}
              onPress={() => toggle(selectedAdd, setSelectedAdd, item)}
            >
              <View style={[styles.checkbox, selectedAdd.has(item) && styles.checkboxActive]}>
                {selectedAdd.has(item) && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.sheetItemText}>{capitalize(item)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {result.toRemove.length > 0 && (
        <View style={styles.sheetSection}>
          <Text style={[styles.sheetSectionLabel, { color: '#EF4444' }]}>Removing from fridge</Text>
          {result.toRemove.map(item => (
            <TouchableOpacity
              key={item}
              style={styles.sheetItem}
              onPress={() => toggle(selectedRemove, setSelectedRemove, item)}
            >
              <View style={[styles.checkbox, styles.checkboxRemove, selectedRemove.has(item) && styles.checkboxRemoveActive]}>
                {selectedRemove.has(item) && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.sheetItemText}>{capitalize(item)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={styles.sheetActions}>
        <TouchableOpacity style={styles.sheetDismiss} onPress={onDismiss}>
          <Text style={styles.sheetDismissText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sheetConfirm}
          onPress={() => onConfirm([...selectedAdd], [...selectedRemove])}
        >
          <Text style={styles.sheetConfirmText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ── Main screen ───────────────────────────────────────────────────────────────
export default function FridgeScreen() {
  const { fridge, addToFridge, removeFromFridge } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [voiceResult, setVoiceResult] = useState<VoiceResult | null>(null);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // ── Voice recording ──────────────────────────────────────────────────────
  const startPulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.2, duration: 500, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1,   duration: 500, useNativeDriver: true }),
      ])
    ).start();
  };

  const stopPulse = () => {
    pulseAnim.stopAnimation();
    Animated.timing(pulseAnim, { toValue: 1, duration: 150, useNativeDriver: true }).start();
  };

  const stopRecording = async () => {
    if (!Voice) return;
    try { await Voice.stop(); } catch (_) {}
    setIsRecording(false);
    stopPulse();
  };

  const handleVoiceToggle = async () => {
    if (!Voice) {
      Alert.alert(
        'Voice not available',
        'Voice recognition requires a development build. Run:\n\nnpx expo prebuild\nnpx expo run:android',
      );
      return;
    }

    if (isRecording) {
      await stopRecording();
      return;
    }

    try {
      // Wire up all event handlers before starting
      Voice.onSpeechResults = (e: any) => {
        const transcript = e.value?.[0] ?? '';
        if (transcript) processTranscript(transcript);
        stopRecording();
      };
      Voice.onSpeechEnd = () => {
        setIsRecording(false);
        stopPulse();
      };
      Voice.onSpeechError = () => {
        setIsRecording(false);
        stopPulse();
      };

      await Voice.start('en-US');
      setIsRecording(true);
      startPulse();
    } catch (err) {
      setIsRecording(false);
      stopPulse();
    }
  };

  const processTranscript = (transcript: string) => {
    const actions = parseTranscript(transcript);
    const toAdd: string[] = [];
    const toRemove: string[] = [];
    for (const a of actions) {
      if (a.action === 'add') toAdd.push(...a.items);
      else toRemove.push(...a.items);
    }
    if (toAdd.length > 0 || toRemove.length > 0) {
      setVoiceResult({ toAdd, toRemove });
    }
  };

  const applyVoiceResult = (toAdd: string[], toRemove: string[]) => {
    for (const name of toAdd) {
      const id = toIngredientId(name);
      addToFridge({ ingredientId: id, name: capitalize(name), substitutionGroup: getSubstitutionGroup(id) });
    }
    for (const name of toRemove) {
      const id = toIngredientId(name);
      removeFromFridge(id);
    }
    setVoiceResult(null);
  };

  // ── Manual add ──────────────────────────────────────────────────────────
  const handleAdd = () => {
    const name = inputText.trim();
    if (!name) return;
    const id = toIngredientId(name);
    addToFridge({ ingredientId: id, name, substitutionGroup: getSubstitutionGroup(id) });
    setInputText('');
  };

  const handleRemove = (id: string) => {
    Alert.alert('Remove ingredient', 'Remove this from your fridge?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Remove', style: 'destructive', onPress: () => removeFromFridge(id) },
    ]);
  };

  // ── Group fridge items ───────────────────────────────────────────────────
  const grouped = useMemo(() => {
    const map: Record<string, FridgeItem[]> = {};
    for (const item of fridge) {
      const group = getEffectiveGroup(item);
      if (!map[group]) map[group] = [];
      map[group].push(item);
    }
    return map;
  }, [fridge]);

  const groupKeys = Object.keys(grouped).sort((a, b) => {
    if (a === 'seasoning') return 1;
    if (b === 'seasoning') return -1;
    if (a === 'other') return 1;
    if (b === 'other') return -1;
    return (GROUP_LABELS[a] ?? a).localeCompare(GROUP_LABELS[b] ?? b);
  });

  const quickAddFiltered = QUICK_ADD.filter(q => !fridge.find(f => f.ingredientId === q.id));

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>My Fridge</Text>
        <Text style={styles.subtitle}>
          {fridge.length === 0
            ? 'Add ingredients you have at home.'
            : `${fridge.length} ingredient${fridge.length > 1 ? 's' : ''} stored`}
        </Text>

        {/* Manual input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="e.g. olive oil, eggs..."
            placeholderTextColor={colors.textMuted}
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>

        {/* Voice button */}
        <View style={styles.voiceRow}>
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <TouchableOpacity
              style={[styles.voiceBtn, isRecording && styles.voiceBtnActive]}
              onPress={handleVoiceToggle}
              activeOpacity={0.85}
            >
              <Text style={styles.voiceIcon}>{isRecording ? '●' : '○'}</Text>
              <Text style={[styles.voiceBtnText, isRecording && styles.voiceBtnTextActive]}>
                {isRecording ? 'Tap to stop' : 'Tap to speak'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.voiceHint}>
            "I have butter and garlic" · "I ran out of flour"
          </Text>
        </View>

        {/* Voice confirmation sheet */}
        {voiceResult && (
          <VoiceConfirmSheet
            result={voiceResult}
            onConfirm={applyVoiceResult}
            onDismiss={() => setVoiceResult(null)}
            colors={colors}
            styles={styles}
          />
        )}

        {/* Grouped fridge contents */}
        {groupKeys.map(group => (
          <View key={group} style={styles.section}>
            <Text style={styles.sectionLabel}>
              {GROUP_LABELS[group] ?? group.charAt(0).toUpperCase() + group.slice(1)}
            </Text>
            <View style={styles.itemList}>
              {grouped[group].map((item, i) => (
                <View
                  key={item.ingredientId}
                  style={[styles.fridgeItem, i < grouped[group].length - 1 && styles.fridgeItemBorder]}
                >
                  <Text style={styles.fridgeItemName}>{item.name}</Text>
                  <TouchableOpacity
                    onPress={() => handleRemove(item.ingredientId)}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.removeText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Quick add */}
        {quickAddFiltered.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Quick add</Text>
            <View style={styles.quickGrid}>
              {quickAddFiltered.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.quickChip}
                  onPress={() => addToFridge({
                    ingredientId: item.id,
                    name: item.name,
                    substitutionGroup: getSubstitutionGroup(item.id),
                  })}
                >
                  <Text style={styles.quickChipText}>+ {item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:              { flex: 1, backgroundColor: colors.background },
  content:           { padding: spacing.md, paddingBottom: spacing.xl },
  heading:           { fontSize: font.sizes.xxl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  subtitle:          { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.lg },
  inputRow:          { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  input:             { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, fontSize: font.sizes.md, color: colors.text },
  addBtn:            { backgroundColor: colors.primary, borderRadius: radius.md, paddingHorizontal: spacing.md, justifyContent: 'center' },
  addBtnText:        { color: '#fff', fontWeight: font.weights.semibold, fontSize: font.sizes.md },

  // Voice
  voiceRow:          { marginBottom: spacing.lg, alignItems: 'center', gap: spacing.xs },
  voiceBtn:          { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.surface, borderRadius: radius.lg, paddingHorizontal: spacing.lg, paddingVertical: spacing.sm + 2, borderWidth: 1.5, borderColor: colors.border },
  voiceBtnActive:    { backgroundColor: colors.primaryLight, borderColor: colors.primary },
  voiceIcon:         { fontSize: 16, color: colors.primary },
  voiceBtnText:      { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.semibold },
  voiceBtnTextActive:{ color: colors.primary },
  voiceHint:         { fontSize: font.sizes.xs, color: colors.textMuted, textAlign: 'center', paddingHorizontal: spacing.md },

  // Voice confirmation sheet
  sheet:             { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, padding: spacing.md, marginBottom: spacing.md },
  sheetTitle:        { fontSize: font.sizes.lg, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.md },
  sheetSection:      { marginBottom: spacing.md },
  sheetSectionLabel: { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.primary, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  sheetItem:         { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xs + 2 },
  checkbox:          { width: 22, height: 22, borderRadius: 6, borderWidth: 1.5, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  checkboxActive:    { backgroundColor: colors.primary, borderColor: colors.primary },
  checkboxRemove:    { borderColor: '#EF4444' },
  checkboxRemoveActive: { backgroundColor: '#EF4444', borderColor: '#EF4444' },
  checkmark:         { color: '#fff', fontSize: 13, fontWeight: font.weights.bold },
  sheetItemText:     { fontSize: font.sizes.md, color: colors.text },
  sheetActions:      { flexDirection: 'row', gap: spacing.sm, marginTop: spacing.sm },
  sheetDismiss:      { flex: 1, padding: spacing.sm, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.border, alignItems: 'center' },
  sheetDismissText:  { color: colors.textSecondary, fontWeight: font.weights.medium },
  sheetConfirm:      { flex: 1, padding: spacing.sm, borderRadius: radius.sm, backgroundColor: colors.primary, alignItems: 'center' },
  sheetConfirmText:  { color: '#fff', fontWeight: font.weights.semibold },

  // Groups
  section:           { marginBottom: spacing.lg },
  sectionLabel:      { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs },
  itemList:          { backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' },
  fridgeItem:        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2 },
  fridgeItemBorder:  { borderBottomWidth: 1, borderBottomColor: colors.border },
  fridgeItemName:    { fontSize: font.sizes.md, color: colors.text, fontWeight: font.weights.medium },
  removeText:        { fontSize: 14, color: colors.textMuted },
  quickGrid:         { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs },
  quickChip:         { backgroundColor: colors.surface, borderRadius: radius.lg, paddingHorizontal: spacing.md, paddingVertical: spacing.xs + 2, borderWidth: 1, borderColor: colors.border },
  quickChipText:     { fontSize: font.sizes.sm, color: colors.textSecondary, fontWeight: font.weights.medium },
});
