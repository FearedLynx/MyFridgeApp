import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, SafeAreaView,
  FlatList, TextInput, Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useApp, ShoppingItem } from '../context/AppContext';
import { useTheme } from '../context/ThemeContext';
import { spacing, radius, font } from '../utils/theme';

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ShoppingListScreen({ navigation }: Props) {
  const {
    shoppingList, addShoppingItem, toggleShoppingItem,
    removeShoppingItem, clearChecked, refreshShoppingList,
  } = useApp();
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [input, setInput] = useState('');

  useEffect(() => { refreshShoppingList(); }, []);

  const unchecked = useMemo(() => shoppingList.filter(i => !i.checked), [shoppingList]);
  const checked   = useMemo(() => shoppingList.filter(i => i.checked),  [shoppingList]);

  const handleAdd = useCallback(() => {
    if (!input.trim()) return;
    addShoppingItem(input.trim());
    setInput('');
  }, [input, addShoppingItem]);

  const handleClearChecked = useCallback(() => {
    if (checked.length === 0) return;
    Alert.alert('Clear checked', `Remove ${checked.length} checked item${checked.length > 1 ? 's' : ''}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: clearChecked },
    ]);
  }, [checked.length, clearChecked]);

  const renderItem = useCallback(({ item }: { item: ShoppingItem }) => (
    <View style={[styles.item, item.checked && styles.itemChecked]}>
      <TouchableOpacity
        style={[styles.checkbox, item.checked && styles.checkboxChecked]}
        onPress={() => toggleShoppingItem(item.id)}
      >
        {item.checked && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.itemBody}>
        <Text style={[styles.itemName, item.checked && styles.itemNameChecked]}>{item.name}</Text>
        {item.recipeNames && item.recipeNames.length > 0 && (
          <Text style={styles.itemRecipe}>{item.recipeNames.join(', ')}</Text>
        )}
      </View>

      {item.source === 'manual' && (
        <TouchableOpacity onPress={() => removeShoppingItem(item.id)} style={styles.deleteBtn}>
          <Text style={styles.deleteBtnText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  ), [toggleShoppingItem, removeShoppingItem]);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={unchecked}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.heading}>Shopping List</Text>
            <Text style={styles.subtext}>
              {unchecked.length === 0
                ? 'Nothing needed — your fridge covers today\'s plan.'
                : `${unchecked.length} item${unchecked.length !== 1 ? 's' : ''} needed`}
            </Text>

            {/* Add item row */}
            <View style={styles.addRow}>
              <TextInput
                style={styles.input}
                placeholder="Add item..."
                placeholderTextColor={colors.textMuted}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={handleAdd}
                returnKeyType="done"
              />
              <TouchableOpacity
                style={[styles.addBtn, !input.trim() && styles.addBtnDisabled]}
                onPress={handleAdd}
                disabled={!input.trim()}
              >
                <Text style={styles.addBtnText}>Add</Text>
              </TouchableOpacity>
            </View>

            {unchecked.length > 0 && <Text style={styles.sectionLabel}>Needed</Text>}
          </View>
        }
        ListFooterComponent={
          checked.length > 0 ? (
            <View>
              <View style={styles.checkedHeader}>
                <Text style={styles.sectionLabel}>Got it ({checked.length})</Text>
                <TouchableOpacity onPress={handleClearChecked}>
                  <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
              </View>
              {checked.map(item => (
                <View key={item.id} style={[styles.item, styles.itemChecked]}>
                  <TouchableOpacity
                    style={[styles.checkbox, styles.checkboxChecked]}
                    onPress={() => toggleShoppingItem(item.id)}
                  >
                    <Text style={styles.checkmark}>✓</Text>
                  </TouchableOpacity>
                  <View style={styles.itemBody}>
                    <Text style={[styles.itemName, styles.itemNameChecked]}>{item.name}</Text>
                    {item.recipeNames && item.recipeNames.length > 0 && (
                      <Text style={styles.itemRecipe}>{item.recipeNames.join(', ')}</Text>
                    )}
                  </View>
                  {item.source === 'manual' && (
                    <TouchableOpacity onPress={() => removeShoppingItem(item.id)} style={styles.deleteBtn}>
                      <Text style={styles.deleteBtnText}>✕</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyAuto}>
            <Text style={styles.emptyText}>
              No missing ingredients from today's plan. Add items manually above.
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  safe:              { flex: 1, backgroundColor: colors.background },
  header:            { padding: spacing.md, paddingBottom: 0 },
  heading:           { fontSize: font.sizes.xl, fontWeight: font.weights.bold, color: colors.text, marginBottom: spacing.xs },
  subtext:           { fontSize: font.sizes.sm, color: colors.textMuted, marginBottom: spacing.md },
  addRow:            { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md },
  input:             { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md, paddingVertical: spacing.sm + 2, fontSize: font.sizes.md, color: colors.text },
  addBtn:            { backgroundColor: colors.primary, borderRadius: radius.md, paddingHorizontal: spacing.md, justifyContent: 'center' },
  addBtnDisabled:    { opacity: 0.4 },
  addBtnText:        { color: '#fff', fontWeight: font.weights.bold, fontSize: font.sizes.md },
  sectionLabel:      { fontSize: font.sizes.xs, fontWeight: font.weights.bold, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: spacing.xs, paddingHorizontal: spacing.md },
  checkedHeader:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.lg },
  clearText:         { fontSize: font.sizes.sm, color: colors.primary, fontWeight: font.weights.semibold, paddingHorizontal: spacing.md },
  item:              { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, marginHorizontal: spacing.md, marginBottom: spacing.xs, borderRadius: radius.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border },
  itemChecked:       { opacity: 0.5 },
  checkbox:          { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: colors.border, marginRight: spacing.md, alignItems: 'center', justifyContent: 'center' },
  checkboxChecked:   { backgroundColor: colors.primary, borderColor: colors.primary },
  checkmark:         { color: '#fff', fontSize: 12, fontWeight: font.weights.bold },
  itemBody:          { flex: 1 },
  itemName:          { fontSize: font.sizes.md, fontWeight: font.weights.medium, color: colors.text },
  itemNameChecked:   { textDecorationLine: 'line-through', color: colors.textMuted },
  itemRecipe:        { fontSize: font.sizes.xs, color: colors.textMuted, marginTop: 2 },
  deleteBtn:         { paddingLeft: spacing.sm },
  deleteBtnText:     { color: colors.textMuted, fontSize: 14 },
  emptyAuto:         { paddingHorizontal: spacing.md, paddingTop: spacing.sm },
  emptyText:         { fontSize: font.sizes.sm, color: colors.textMuted },
  listContent:       { paddingBottom: spacing.xl },
});
