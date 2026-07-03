#!/usr/bin/env node
// Validate an interactive dashboard DATA object or a generated dashboard HTML file.
//
// Usage:
//   node validate-dashboard.mjs <dashboard.html | data.json>
//
// Checks: ID cross-reference integrity, heatmap shape, budget consistency,
// message completeness, asset gate, leftover placeholders, inline script syntax.
// Exit code 0 = pass (warnings allowed), 1 = errors found.

import { readFileSync } from "node:fs";
import vm from "node:vm";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node validate-dashboard.mjs <dashboard.html | data.json>");
  process.exit(1);
}

const raw = readFileSync(file, "utf-8");
const errors = [];
const warnings = [];

let data;
if (file.endsWith(".json")) {
  data = JSON.parse(raw);
} else {
  const leftover = raw.match(/__[A-Z][A-Z0-9_]+__/g);
  if (leftover) errors.push(`Leftover placeholders in HTML: ${[...new Set(leftover)].join(", ")}`);

  const scriptMatch = raw.match(/<script>([\s\S]*?)<\/script>/);
  if (!scriptMatch) {
    errors.push("No inline <script> block found.");
  } else {
    try {
      new vm.Script(scriptMatch[1]);
    } catch (e) {
      errors.push(`Inline script has a syntax error: ${e.message}`);
    }
    const dataMatch = scriptMatch[1].match(/const DATA = ([\s\S]*?);\n\n\s*const state/);
    if (!dataMatch) {
      errors.push("Could not locate `const DATA = ...;` before `const state` — is this a generated dashboard?");
    } else {
      try {
        data = JSON.parse(dataMatch[1]);
      } catch (e) {
        errors.push(`DATA block is not valid JSON: ${e.message}`);
      }
    }
  }
}

if (data) {
  const need = ["product", "dimensions", "sellingPoints", "platforms", "treatments",
    "budgets", "messageContexts", "heatmapColumns", "heatmapRows", "kpis", "sources"];
  for (const key of need) {
    if (data[key] === undefined) errors.push(`DATA.${key} is missing.`);
  }
}

if (data && errors.length === 0) {
  const ids = (list) => new Set((list || []).map((x) => x.id));
  const dimIds = ids(data.dimensions);
  const spIds = ids(data.sellingPoints);
  const platIds = ids(data.platforms);
  const treatIds = ids(data.treatments);
  const budgetIds = ids(data.budgets);
  const msgIds = ids(data.messageContexts);
  const kolIds = ids(data.kol);

  for (const [name, list, set] of [
    ["dimensions", data.dimensions, dimIds], ["sellingPoints", data.sellingPoints, spIds],
    ["platforms", data.platforms, platIds], ["treatments", data.treatments, treatIds],
    ["budgets", data.budgets, budgetIds], ["messageContexts", data.messageContexts, msgIds],
    ["kol", data.kol || [], kolIds]
  ]) {
    if (list && list.length !== set.size) errors.push(`Duplicate ids in DATA.${name}.`);
  }

  const check = (idList, universe, where) => {
    for (const id of idList || []) {
      if (!universe.has(id)) errors.push(`${where}: "${id}" does not exist.`);
    }
  };

  for (const d of data.dimensions || []) {
    check(d.sellingPointIds, spIds, `dimension ${d.id}.sellingPointIds`);
    check(d.treatmentIds, treatIds, `dimension ${d.id}.treatmentIds`);
    if (!["main", "test", "quote", "holdout", "suppress"].includes(d.status)) {
      warnings.push(`dimension ${d.id}.status "${d.status}" is not a known status.`);
    }
  }
  for (const sp of data.sellingPoints || []) {
    check(sp.linkedAudienceIds, dimIds, `sellingPoint ${sp.id}.linkedAudienceIds`);
    check(sp.linkedPlatformIds, platIds, `sellingPoint ${sp.id}.linkedPlatformIds`);
    check(sp.linkedTreatmentIds, treatIds, `sellingPoint ${sp.id}.linkedTreatmentIds`);
  }
  for (const p of data.platforms || []) {
    check(p.linkedTreatmentIds, treatIds, `platform ${p.id}.linkedTreatmentIds`);
    check(p.linkedSellingPointIds, spIds, `platform ${p.id}.linkedSellingPointIds`);
  }
  for (const t of data.treatments || []) {
    check(t.audienceIds, dimIds, `treatment ${t.id}.audienceIds`);
    check(t.platformIds, platIds, `treatment ${t.id}.platformIds`);
    check(t.sellingPointIds, spIds, `treatment ${t.id}.sellingPointIds`);
    for (const field of ["name", "hypothesis", "metric", "holdout"]) {
      if (!t[field]) warnings.push(`treatment ${t.id}.${field} is empty.`);
    }
  }
  for (const b of data.budgets || []) {
    check(b.treatmentIds, treatIds, `budget ${b.id}.treatmentIds`);
    check(b.platformIds, platIds, `budget ${b.id}.platformIds`);
    check(b.audienceIds, dimIds, `budget ${b.id}.audienceIds`);
  }
  for (const m of data.messageContexts || []) {
    check(m.platformIds, platIds, `message ${m.id}.platformIds`);
    check(m.audienceIds, dimIds, `message ${m.id}.audienceIds`);
    check(m.sellingPointIds, spIds, `message ${m.id}.sellingPointIds`);
    check(m.treatmentIds, treatIds, `message ${m.id}.treatmentIds`);
    for (const field of ["buyerQuestion", "say", "avoid", "proofPacket", "measurement", "claimBoundary"]) {
      if (!m[field]) warnings.push(`message ${m.id}.${field} is empty.`);
    }
  }
  for (const k of data.kol || []) {
    check(k.audienceIds, dimIds, `kol ${k.id}.audienceIds`);
    check(k.treatmentIds, treatIds, `kol ${k.id}.treatmentIds`);
  }
  for (const id of Object.keys(data.kolMeta || {})) {
    if (!kolIds.has(id)) errors.push(`kolMeta key "${id}" has no matching kol row.`);
  }
  for (const tk of data.tasks || []) {
    check(tk.platformIds, platIds, `task ${tk.id}.platformIds`);
    check(tk.treatmentIds, treatIds, `task ${tk.id}.treatmentIds`);
  }
  for (const pl of data.plays || []) {
    check(pl.platformIds, platIds, `play ${pl.id}.platformIds`);
    check(pl.audienceIds, dimIds, `play ${pl.id}.audienceIds`);
    if (typeof pl.roiMin !== "number" || typeof pl.roiMax !== "number") {
      warnings.push(`play ${pl.id} roiMin/roiMax should be numbers.`);
    }
  }

  // Heatmap shape
  const cols = data.heatmapColumns || [];
  check(cols, dimIds, "heatmapColumns");
  for (const d of data.dimensions || []) {
    if (!cols.includes(d.id)) warnings.push(`dimension ${d.id} is not shown in heatmapColumns.`);
  }
  for (const row of data.heatmapRows || []) {
    if (!platIds.has(row.platformId)) errors.push(`heatmapRow platform "${row.platformId}" does not exist.`);
    if ((row.grades || []).length !== cols.length) {
      errors.push(`heatmapRow ${row.platformId} has ${row.grades.length} grades, expected ${cols.length}.`);
    }
    for (const g of row.grades || []) {
      if (!["H", "T", "S", "N", "A"].includes(g)) errors.push(`heatmapRow ${row.platformId} has invalid grade "${g}".`);
    }
  }
  const rowPlatforms = new Set((data.heatmapRows || []).map((r) => r.platformId));
  for (const p of data.platforms || []) {
    if (!rowPlatforms.has(p.id)) warnings.push(`platform ${p.id} has no heatmap row.`);
  }

  // Budget consistency
  const budgetSum = (data.budgets || []).reduce((s, b) => s + (b.amount || 0), 0);
  if (data.product?.budget && budgetSum !== data.product.budget) {
    errors.push(`budgets sum to ${budgetSum}, but product.budget is ${data.product.budget}.`);
  }
  const pctSum = (data.budgets || []).reduce((s, b) => s + (b.pct || 0), 0);
  if (Math.abs(pctSum - 100) > 1) warnings.push(`budget pct values sum to ${pctSum}, expected ~100.`);
  const treatSum = (data.treatments || []).reduce((s, t) => s + (t.budget || 0), 0);
  if (data.product?.budget && treatSum !== data.product.budget) {
    warnings.push(`treatment budgets sum to ${treatSum}, product.budget is ${data.product.budget}.`);
  }

  // Every budgeted platform needs at least one message row
  for (const p of data.platforms || []) {
    if ((p.budget || 0) > 0 && !(data.messageContexts || []).some((m) => (m.platformIds || []).includes(p.id))) {
      warnings.push(`platform ${p.id} has budget but no message context row.`);
    }
  }

  // Asset gate
  const icons = data.assets?.icons || {};
  if (Object.keys(icons).length === 0) {
    warnings.push("assets.icons is empty — main platform rows should carry logos or labeled placeholders.");
  } else {
    const wanted = new Set([
      ...(data.platforms || []).flatMap((p) => p.logoIds || []),
      ...(data.messageContexts || []).flatMap((m) => m.logoIds || []),
      ...Object.values(data.kolMeta || {}).flatMap((m) => m.logoIds || [])
    ]);
    for (const id of wanted) {
      if (!icons[id]) warnings.push(`logo id "${id}" is referenced but missing from assets.icons.`);
    }
  }
  for (const k of data.kol || []) {
    const meta = (data.kolMeta || {})[k.id] || {};
    if (meta.avatar && !meta.avatarSource) warnings.push(`kol ${k.id} has an avatar but no avatarSource.`);
  }
}

for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
