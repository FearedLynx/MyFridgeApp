import { SQLiteDatabase } from 'expo-sqlite';
import { Recipe } from '../types';

export const PAGE_SIZE = 50;

export const QUALITY_FILTER = `
  image_file IS NOT NULL
  AND ingredients IS NOT NULL AND ingredients != '[]'
  AND sections IS NOT NULL AND sections != '[]'
  AND total_minutes IS NOT NULL AND total_minutes > 0 AND total_minutes <= 240
  AND name NOT LIKE '%recipes%'
  AND name NOT LIKE '% ways %'
  AND name NOT LIKE '% ideas%'
  AND name NOT LIKE '% tips%'
  AND name NOT LIKE '% days%'
  AND name NOT LIKE '% weekend%'
  AND name NOT LIKE '% visiting%'
  AND name NOT LIKE '% coast%'
  AND name NOT LIKE '% guide%'
  AND name NOT LIKE '% menu%'
  AND name NOT LIKE '%everyone will%'
  AND name NOT LIKE 'How to %'
  AND length(name) < 80
`;

export function truncateName(name: string, maxWords = 5): string {
  const words = name.trim().split(/\s+/);
  return words.length <= maxWords ? name : words.slice(0, maxWords).join(' ');
}

export function decodeHtml(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#\d+;/g, '');
}

export function parseRow(row: any): Recipe | null {
  try {
    return {
      id:            row.id,
      name:          truncateName(decodeHtml(row.name ?? '')),
      description:   decodeHtml(row.description ?? ''),
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

function parseRowLite(row: any): Recipe | null {
  try {
    return {
      id:            row.id,
      name:          truncateName(decodeHtml(row.name ?? '')),
      description:   '',
      mealTimes:     row.meal_times  ? JSON.parse(row.meal_times)  : [],
      tags:          row.tags        ? JSON.parse(row.tags)        : [],
      calories:      row.calories    ?? 0,
      servings:      row.servings    ?? 2,
      ingredients:   row.ingredients ? JSON.parse(row.ingredients) : [],
      sections:      [],
      timeBreakdown: { sections: [], totalMinutes: row.total_minutes ?? 0 },
      image_file:    row.image_file,
      total_minutes: row.total_minutes,
    };
  } catch {
    return null;
  }
}

export async function queryRecipes(
  db: SQLiteDatabase,
  options: { search?: string; mealTime?: string; tags?: string[]; offset?: number } = {}
): Promise<Recipe[]> {
  const { search, mealTime, tags, offset = 0 } = options;
  const conditions: string[] = [QUALITY_FILTER];
  const params: any[] = [];

  if (search) {
    conditions.push('name LIKE ?');
    params.push(`%${search}%`);
  }
  if (mealTime) {
    conditions.push('meal_times LIKE ?');
    params.push(`%${mealTime}%`);
  }
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      conditions.push('tags LIKE ?');
      params.push(`%${tag}%`);
    }
  }

  params.push(PAGE_SIZE, offset);
  const rows = await db.getAllAsync(
    `SELECT * FROM recipes WHERE ${conditions.join(' AND ')} ORDER BY name LIMIT ? OFFSET ?`,
    params
  ) as any[];
  return rows.map(parseRow).filter((r): r is Recipe => r !== null);
}

export async function querySuggestions(db: SQLiteDatabase, search: string): Promise<string[]> {
  if (!search || search.length < 2) return [];
  const rows = await db.getAllAsync(
    `SELECT name FROM recipes WHERE ${QUALITY_FILTER} AND name LIKE ? ORDER BY name LIMIT 6`,
    [`%${search}%`]
  ) as any[];
  return rows.map((r: any) => decodeHtml(r.name));
}

export async function getRecipeById(db: SQLiteDatabase, id: string): Promise<Recipe | null> {
  const row = await db.getFirstAsync('SELECT * FROM recipes WHERE id = ?', [id]) as any;
  return row ? parseRow(row) : null;
}

export async function getRecipesByIds(db: SQLiteDatabase, ids: string[]): Promise<Recipe[]> {
  if (ids.length === 0) return [];
  const placeholders = ids.map(() => '?').join(', ');
  const rows = await db.getAllAsync(
    `SELECT * FROM recipes WHERE id IN (${placeholders})`,
    ids
  ) as any[];
  return rows.map(parseRow).filter((r): r is Recipe => r !== null);
}

export async function queryRecipesForMatching(db: SQLiteDatabase): Promise<Recipe[]> {
  const rows = await db.getAllAsync(
    `SELECT id, name, meal_times, tags, calories, servings, ingredients, image_file, total_minutes
     FROM recipes WHERE ${QUALITY_FILTER} ORDER BY name`,
    []
  ) as any[];
  return rows.map(parseRowLite).filter((r): r is Recipe => r !== null);
}
