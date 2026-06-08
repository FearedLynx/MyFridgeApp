import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

import { AppProvider } from './src/context/AppContext';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { font } from './src/utils/theme';

import HomeScreen         from './src/screens/HomeScreen';
import BrowseScreen       from './src/screens/BrowseScreen';
import FridgeScreen       from './src/screens/FridgeScreen';
import CookScreen         from './src/screens/CookScreen';
import CommunityScreen    from './src/screens/CommunityScreen';
import FavoritesScreen    from './src/screens/FavoritesScreen';
import AddRecipeScreen    from './src/screens/AddRecipeScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import AccountScreen      from './src/screens/AccountScreen';
import ShoppingListScreen from './src/screens/ShoppingListScreen';

const Tab   = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TAB_ICONS: Record<string, string> = {
  Home:      '⊞',
  Browse:    '⊟',
  Fridge:    '❄',
  Cook:      '⊙',
  Account:   '◯',
};

function MoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountMain"  component={AccountScreen} />
      <Stack.Screen name="Community"    component={CommunityScreen} />
      <Stack.Screen name="Favorites"    component={FavoritesScreen} />
      <Stack.Screen name="AddRecipe"    component={AddRecipeScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor:   colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          fontSize: font.sizes.xs,
          fontWeight: font.weights.semibold,
        },
        tabBarIcon: ({ color }) => (
          <Text style={{ fontSize: 18, color }}>{TAB_ICONS[route.name]}</Text>
        ),
      })}
    >
      <Tab.Screen name="Home"    component={HomeScreen} />
      <Tab.Screen name="Browse"  component={BrowseScreen} />
      <Tab.Screen name="Fridge"  component={FridgeScreen} />
      <Tab.Screen name="Cook"    component={CookScreen} />
      <Tab.Screen name="Account" component={MoreStack} />
    </Tab.Navigator>
  );
}

function AppInner() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '',
            headerStyle: { backgroundColor: colors.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: colors.primary, fontSize: font.sizes.md, fontWeight: font.weights.semibold }}>
                  ← Back
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddRecipe"
          component={AddRecipeScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'New Recipe',
            headerStyle: { backgroundColor: colors.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: colors.primary, fontSize: font.sizes.md, fontWeight: font.weights.semibold }}>
                  ← Back
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingListScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: 'Shopping List',
            headerStyle: { backgroundColor: colors.background },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: colors.primary, fontSize: font.sizes.md, fontWeight: font.weights.semibold }}>
                  ← Back
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </ThemeProvider>
  );
}
