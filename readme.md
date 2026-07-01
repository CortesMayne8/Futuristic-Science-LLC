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
exports/                Audit screenshots + a WooCommerce product CSV
_ds_bundle.js           Compiled design-system bundle loaded by the storefront
readme.md               This file
DESIGN-SYSTEM.md        Full brand + design-system guidelines (colors, voice, motion, etc.)
SKILL.md                Agent skill definition for generating on-brand interfaces
```

## Where to go next
- **Building the site?** Start in `ui_kits/website/` — `README.md` there maps every screen.
- **Brand rules, color/type/motion, voice & compliance?** See `DESIGN-SYSTEM.md`.
- **Component APIs?** Each component ships a `*.prompt.md` next to its `.jsx`.

---

