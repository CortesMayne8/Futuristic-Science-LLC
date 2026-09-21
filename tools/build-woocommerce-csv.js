/* Regenerate exports/woocommerce-import-ready.csv from the storefront catalog.
   The catalog in ui_kits/website/data.js is the single source of truth for
   pricing; run this after changing it so the WooCommerce import stays in sync.

   Usage:  node tools/build-woocommerce-csv.js
*/
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CDN = 'https://cortesmayne8.github.io/Futuristic-Science-LLC/assets-min/';
const FALLBACK_IMAGE = 'vial-ghk-cu.png'; // brand supplied no photo for this SKU yet
const RUO_SHORT = 'For Research Purposes Only. Not for human use.';
const RUO_LONG = 'For Research Purposes Only. Not for human use. Not for human or animal consumption, or for any therapeutic or diagnostic use.';
const ASSAY = 'Each batch is assayed by an independent third-party laboratory for identity and purity and ships with a batch-specific Certificate of Analysis.';

// Purchase tiers, in the order WooCommerce should list them.
const TIERS = [
  { field: 'vial', suffix: 'V', label: 'Single Vial' },
  { field: 'half', suffix: 'H', label: 'Half Kit (5 Vials)' },
  { field: 'box', suffix: 'B', label: 'Full Kit (10 Vials)' },
];

const HEADER = ['Type', 'SKU', 'Name', 'Published', 'Is featured?', 'Visibility in catalog',
  'Short description', 'Description', 'Tax status', 'In stock?', 'Stock', 'Backorders allowed?',
  'Sold individually', 'Regular price', 'Categories', 'Tags', 'Images', 'Parent',
  'Attribute 1 name', 'Attribute 1 value(s)', 'Attribute 1 visible', 'Attribute 1 global',
  'Attribute 2 name', 'Attribute 2 value(s)', 'Attribute 2 visible', 'Attribute 2 global'];

global.window = {};
require(path.join(ROOT, 'ui_kits/website/data.js'));
const products = global.window.FS_DATA.products;

const imageFor = (p) => CDN + (p.image ? path.basename(p.image) : `vial-${p.id}.png`);
const hasAsset = (url) => fs.existsSync(path.join(ROOT, 'assets-min', path.basename(url)));

const cell = (v) => {
  const s = v == null ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};

const rows = [HEADER];
for (const p of products) {
  const tiers = TIERS.filter((t) => p.variants.some((v) => v[t.field] != null));
  let img = imageFor(p);
  if (!hasAsset(img)) img = CDN + FALLBACK_IMAGE;
  const detail = [p.purity ? `${p.purity} purity (HPLC), third-party tested.` : null,
    p.supplies ? null : 'Lyophilized powder.', RUO_SHORT].filter(Boolean).join(' ');
  const shortDesc = `${p.subtitle} \u00b7 ${detail}`;

  rows.push(['variable', `FS-${p.id.toUpperCase()}`, p.name, 1, p.featured ? 1 : 0, 'visible',
    shortDesc, `${p.blurb} ${p.supplies ? '' : ASSAY + ' '}${RUO_LONG}`.replace(/\s+/g, ' ').trim(),
    'taxable', p.inStock ? 1 : 0, '', 0, 0, '', p.category, 'research-use-only', img, '',
    'Strength', p.variants.map((v) => v.strength).join(' | '), 1, 1,
    'Format', tiers.map((t) => t.label).join(' | '), 1, 1]);

  for (const v of p.variants) {
    for (const t of TIERS) {
      if (v[t.field] == null) continue;
      rows.push(['variation', `FS-${p.id.toUpperCase()}-${v.strength}-${t.suffix}`,
        `${p.name} ${v.strength} — ${t.label}`, 1, '', 'visible', '', '', 'taxable',
        p.inStock ? 1 : 0, '', 0, 0, v[t.field], '', '', '', `FS-${p.id.toUpperCase()}`,
        'Strength', v.strength, 1, 1, 'Format', t.label, 1, 1]);
    }
  }
}

const out = path.join(ROOT, 'exports/woocommerce-import-ready.csv');
fs.writeFileSync(out, rows.map((r) => r.map(cell).join(',')).join('\n') + '\n');
console.log(`Wrote ${path.relative(ROOT, out)} — ${products.length} products, ${rows.length - 1} rows.`);
