import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import { File, Directory } from 'expo-file-system';
import { Recipe } from '../types';

const DB_NAME = 'recipes.db';

let _db: SQLite.SQLiteDatabase | null = null;

async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (_db) return _db;

  const dbDir = new Directory(
    `${File.documentDirectory?.uri ?? ''}SQLite/`
  );
  if (!dbDir.exists) {
    dbDir.create();
  }

  const dbFile = new File(`${dbDir.uri}${DB_NAME}`);
  if (!dbFile.exists) {
    const asset = Asset.fromModule(require('../../assets/recipes.db'));
    await asset.downloadAsync();
    const src = new File(asset.localUri!);
    src.copy(dbFile);
  }

  _db = await SQLite.openDatabaseAsync(DB_NAME);
  return _db;
}

function parseRow(row: any): Recipe | null {
  try {
    return {
      id:            row.id,
      name:          row.name,
      description:   row.description ?? '',
      mealTimes:     row.meal_times     ? JSON.parse(row.meal_times)     : [],
      tags:          row.tags           ? JSON.parse(row.tags)           : [],
      calories:      row.calories       ?? 0,
      servings:      row.servings       ?? 2,
      ingredients:   row.ingredients    ? JSON.parse(row.ingredients)    : [],
      sections:      row.sections       ? JSON.parse(row.sections)       : [],
      timeBreakdown: row.time_breakdown ? JSON.parse(row.time_breakdown) : { sections: [], totalMinutes: row.total_minutes ?? 0 },
      image_file:    row.image_file,
      total_minutes: row.total_minutes,
      source:        row.source,
      source_url:    row.source_url,
    };
  } catch {
    return null;
  }
}

export async function loadRecipes(): Promise<Recipe[]> {
  const db = await getDb();
  const rows = await db.getAllAsync(
    'SELECT * FROM recipes WHERE name IS NOT NULL ORDER BY name'
  ) as any[];
  return rows.map(parseRow).filter((r): r is Recipe => r !== null);
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  const db = await getDb();
  const row = await db.getFirstAsync(
    'SELECT * FROM recipes WHERE id = ?', [id]
  ) as any;
  return row ? parseRow(row) : null;
}
