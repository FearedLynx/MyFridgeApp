const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'recipesBackup.txt'), 'utf8');

function toId(name) {
  return name.toLowerCase().replace(/[()]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, "'").replace(/\${/g, '\\${');
}

const VALID_TAGS = ['low-calorie', 'low-carb', 'vegetarian', 'vegan', 'high-protein', 'quick', 'gluten-free'];
const VALID_TIMES = ['breakfast', 'lunch', 'dinner', 'snack'];

const lines = text.split('\n').filter(l => {
  const t = l.trim();
  return t && t.includes('|') && t.split('|').length >= 9;
});

const recipes = [];

for (const line of lines) {
  const parts = line.split('|').map(p => p.trim());
  const [, name, mealtimesRaw, tagsRaw, calRaw, minsRaw, srvRaw, ingredientsRaw, stepsRaw] = parts;

  if (!name || !stepsRaw) continue;

  const id = toId(name);
  const mealTimes = mealtimesRaw.split(',').map(t => t.trim()).filter(t => VALID_TIMES.includes(t));
  const tags = tagsRaw.split(',').map(t => t.trim()).filter(t => VALID_TAGS.includes(t));
  const calories = parseInt(calRaw) || 400;
  const totalMinutes = parseInt(minsRaw) || 20;
  const servings = parseInt(srvRaw) || 2;

  // Parse ingredients
  const ingredients = ingredientsRaw.split(',').map(i => i.trim()).filter(Boolean).map(i => {
    const m = i.match(/^(.+?)\s*\((.+?)\)\s*$/);
    if (m) {
      return { id: toId(m[1].trim()), name: m[1].trim(), qty: m[2].trim() };
    }
    return { id: toId(i), name: i, qty: 'to taste' };
  });

  // Split steps into sentences
  const rawSteps = stepsRaw.split(/\.\s+/).map(s => s.trim().replace(/\.$/, '')).filter(s => s.length > 3);

  // Distribute into sections
  const prepKeywords = ['marinate', 'mash', 'whisk', 'mix dry', 'combine oats', 'mix oats', 'soak', 'peel', 'dice', 'slice sweet potato', 'separate eggs', 'rub', 'season', 'coat', 'mix ', 'blend', 'crush', 'grate', 'beat', 'cream butter'];
  const assembleKeywords = ['serve', 'assemble', 'layer', 'top with', 'plate ', 'roll tight', 'build', 'fill ', 'spread ', 'close sandwich'];

  const prepSteps = [];
  const cookSteps = [];
  const assembleSteps = [];

  for (const step of rawSteps) {
    const sl = step.toLowerCase();
    const isAssemble = assembleKeywords.some(k => sl.includes(k));
    const isPrep = !isAssemble && prepKeywords.some(k => sl.includes(k)) && prepSteps.length === 0;
    if (isAssemble) assembleSteps.push(step);
    else if (isPrep) prepSteps.push(step);
    else cookSteps.push(step);
  }

  // If nothing sorted into cook, put everything there
  if (cookSteps.length === 0 && prepSteps.length === 0) {
    cookSteps.push(...rawSteps);
    assembleSteps.length = 0;
  }

  // Build sections with proportional times
  const sections = [];
  if (prepSteps.length > 0) {
    sections.push({ type: 'preparing', minutes: Math.max(3, Math.round(totalMinutes * 0.25)), steps: prepSteps });
  }
  if (cookSteps.length > 0) {
    const remaining = totalMinutes - sections.reduce((a, s) => a + s.minutes, 0) - (assembleSteps.length > 0 ? Math.max(2, Math.round(totalMinutes * 0.15)) : 0);
    sections.push({ type: 'cooking', minutes: Math.max(5, remaining), steps: cookSteps });
  }
  if (assembleSteps.length > 0) {
    sections.push({ type: 'assembling', minutes: Math.max(2, Math.round(totalMinutes * 0.15)), steps: assembleSteps });
  }
  if (sections.length === 0) {
    sections.push({ type: 'cooking', minutes: totalMinutes, steps: rawSteps.length > 0 ? rawSteps : ['Follow the recipe instructions.'] });
  }

  // Fix total to match
  const assigned = sections.reduce((a, s) => a + s.minutes, 0);
  if (assigned !== totalMinutes) sections[sections.length - 1].minutes += (totalMinutes - assigned);

  recipes.push({ id, name, mealTimes, tags, calories, totalMinutes, servings, ingredients, sections });
}

// Generate TypeScript
let out = `import { Recipe } from '../types';\n\nexport const recipes: Recipe[] = [\n`;

for (const r of recipes) {
  const ingsTs = r.ingredients.map(i =>
    `    { ingredientId: '${i.id}', name: '${esc(i.name)}', quantity: '${esc(i.qty)}' }`
  ).join(',\n');

  const sectionsTs = r.sections.map(s => {
    const stepsTs = s.steps.map(step => `        { instruction: \`${esc(step)}.\` }`).join(',\n');
    return `    {\n      type: '${s.type}',\n      durationMinutes: ${s.minutes},\n      steps: [\n${stepsTs}\n      ],\n    }`;
  }).join(',\n');

  const tbTs = r.sections.map(s => `      { type: '${s.type}', minutes: ${s.minutes} }`).join(',\n');

  const mtStr = r.mealTimes.map(m => `'${m}'`).join(', ');
  const tagStr = r.tags.map(t => `'${t}'`).join(', ');

  out += `  {\n    id: '${r.id}',\n    name: '${esc(r.name)}',\n    description: '${esc(r.name)} — a delicious homemade recipe.',\n    mealTimes: [${mtStr}],\n    tags: [${tagStr}],\n    calories: ${r.calories},\n    servings: ${r.servings},\n    ingredients: [\n${ingsTs}\n    ],\n    sections: [\n${sectionsTs}\n    ],\n    timeBreakdown: {\n      sections: [\n${tbTs}\n      ],\n      totalMinutes: ${r.totalMinutes},\n    },\n  },\n`;
}

out += `];\n`;

fs.writeFileSync(path.join(__dirname, 'src/data/recipes.ts'), out);
console.log(`✓ Generated ${recipes.length} recipes → src/data/recipes.ts`);
