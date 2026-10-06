const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'recipes.db');

let db;

function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initSchema();
  }
  return db;
}

function initSchema() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS recipes (
      id          TEXT PRIMARY KEY,
      name        TEXT NOT NULL,
      description TEXT,
      source_url  TEXT,
      image_file  TEXT,
      calories    INTEGER,
      servings    INTEGER,
      total_minutes INTEGER,
      meal_times  TEXT,
      tags        TEXT,
      ingredients TEXT,
      sections    TEXT,
      time_breakdown TEXT,
      source      TEXT
    );

    CREATE TABLE IF NOT EXISTS scraped_urls (
      url  TEXT PRIMARY KEY,
      done INTEGER DEFAULT 0,
      error TEXT
    );
  `);
}

function recipeExists(id) {
  const row = getDb().prepare('SELECT 1 FROM recipes WHERE id = ?').get(id);
  return !!row;
}

function urlScraped(url) {
  const row = getDb().prepare('SELECT done FROM scraped_urls WHERE url = ?').get(url);
  return row && row.done === 1;
}

function markUrlDone(url) {
  getDb().prepare('INSERT OR REPLACE INTO scraped_urls (url, done) VALUES (?, 1)').run(url);
}

function markUrlError(url, error) {
  getDb().prepare('INSERT OR REPLACE INTO scraped_urls (url, done, error) VALUES (?, 0, ?)').run(url, error);
}

function insertRecipe(recipe) {
  getDb().prepare(`
    INSERT OR REPLACE INTO recipes
      (id, name, description, source_url, image_file, calories, servings, total_minutes,
       meal_times, tags, ingredients, sections, time_breakdown, source)
    VALUES
      (@id, @name, @description, @source_url, @image_file, @calories, @servings, @total_minutes,
       @meal_times, @tags, @ingredients, @sections, @time_breakdown, @source)
  `).run({
    ...recipe,
    meal_times: JSON.stringify(recipe.meal_times || []),
    tags: JSON.stringify(recipe.tags || []),
    ingredients: JSON.stringify(recipe.ingredients || []),
    sections: JSON.stringify(recipe.sections || []),
    time_breakdown: JSON.stringify(recipe.time_breakdown || {}),
  });
}

function getStats() {
  const total = getDb().prepare('SELECT COUNT(*) as n FROM recipes').get().n;
  const done = getDb().prepare('SELECT COUNT(*) as n FROM scraped_urls WHERE done = 1').get().n;
  const errors = getDb().prepare('SELECT COUNT(*) as n FROM scraped_urls WHERE done = 0 AND error IS NOT NULL').get().n;
  return { total, done, errors };
}

module.exports = { getDb, recipeExists, urlScraped, markUrlDone, markUrlError, insertRecipe, getStats };
