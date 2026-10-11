# Futuristic Science — Brand, Design System & Storefront

This repository holds everything for the **Futuristic Science, LLC** website: the brand/design
system (tokens, components, foundation cards), a full WooCommerce-style storefront UI kit, all
brand and product photography, and audit/export artifacts.

> Research-use-only peptide brand. Every product surface must carry
> **"For Research Purposes Only. Not for human use."** No medical, dosing, or human-use claims.

---

## Quick start — run the storefront locally

The storefront is a static, React-in-the-browser app (React + Babel via CDN), so it needs to be
served over HTTP (opening the file directly with `file://` will not load the `.jsx` screens).

```bash
# from the repo root
python3 -m http.server 8000
# then open:
#   http://localhost:8000/ui_kits/website/index.html
```

Or, if you prefer Node:

```bash
npx serve .
# then open the same /ui_kits/website/index.html path on the port it prints
```

The app boots with an 18+ age gate, then a click-through store (Home, Shop, Product, COA,
Cart, Checkout).

### Other things you can open
- `Futuristic Science USA.html` — a single-file, fully self-contained export of the storefront
  (no server needed; just open it in a browser).
- `cards/*.html` — design-system foundation specimens (color, type, spacing, brand).

---

## Repository structure

```
styles.css              Global CSS entry point (imports the token files)
tokens/                 Design tokens: colors, typography, spacing, effects, base
components/
  core/                 Button, Badge, Input, Select (JSX + .d.ts + .prompt.md)
  commerce/             ProductCard, TrustBadges, DisclaimerBanner, COASearch, QuantityStepper
cards/                  Design-system foundation specimen cards (HTML)
ui_kits/website/        The full storefront UI kit — start here (index.html)
assets/                 Full-resolution logos and product-vial photography
assets-min/             Optimized/minified versions used by the live site
uploads/                Raw source images (originals, no-background cutouts, drafts)
exports/                Audit screenshots + the WooCommerce product CSV (generated)
tools/                  Build scripts: WooCommerce CSV export, design-system bundle rebuild
_ds_bundle.js           Compiled design-system bundle loaded by the storefront
readme.md               This file
DESIGN-SYSTEM.md        Full brand + design-system guidelines (colors, voice, motion, etc.)
SKILL.md                Agent skill definition for generating on-brand interfaces
```

## Updating prices

`ui_kits/website/data.js` is the single source of truth for the catalog. Each strength variant
carries three tiers — `vial` (single), `half` (5-vial kit) and `box` (10-vial kit); a tier set to
`null` is simply not offered for that strength.

After editing it, regenerate the two artifacts that derive from it:

```bash
npm install            # once — pulls @babel/standalone for the build scripts
npm run build:bundle   # refresh _ds_bundle.js from the JSX/JS sources
npm run build:csv      # refresh exports/woocommerce-import-ready.csv
```

`npm run check:bundle` reports whether the bundle has drifted from the sources without writing.

## Affiliate / referral codes

`ui_kits/website/referrals.js` holds the registry. Adding an affiliate is one line:

```js
var CODES = {
  MICHELLE15: { affiliate: 'Michelle', percent: 15, active: true },
};
```

Each code gets a shareable link — `…/index.html?ref=MICHELLE15`. Arriving on it stores
the code for 30 days and strips the parameter from the address bar; the discount then
applies at checkout whether or not the visitor comes back by the same link. Customers can
also type the code in at checkout. The discount comes off the goods subtotal, never
shipping, and the code plus the affiliate's name are posted with the order record, so each
sale is attributable.

Set `active: false` to switch a code off without deleting it — stored copies stop working
the next time they are checked.

## Where to go next
- **Building the site?** Start in `ui_kits/website/` — `README.md` there maps every screen.
- **Brand rules, color/type/motion, voice & compliance?** See `DESIGN-SYSTEM.md`.
- **Component APIs?** Each component ships a `*.prompt.md` next to its `.jsx`.

---

