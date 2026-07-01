# Futuristic Science — Design System

A complete brand & UI design system for **Futuristic Science, LLC**, a research-use-only
peptide brand. This system encodes the brand's luxurious-biotech aesthetic — metallic gold,
deep navy ink, and crisp white — into tokens, components, and full-screen UI kits so any
agent can produce on-brand, compliance-safe interfaces and assets.

> **Compliance is part of the brand.** Every product surface carries the mandatory notice
> **"For Research Purposes Only. Not for human use."** No medical, treatment, weight-loss,
> dosing, or human-use claims appear anywhere. "Reconstitution" is framed strictly as
> *lab-handling information for qualified researchers.*

---

## 1. Company & product context

**Futuristic Science, LLC** sells research-grade peptides (research-use-only / RUO) through a
premium WooCommerce-style storefront. The positioning is **trust through proof**: third-party
testing, batch COAs, measured-accuracy labeling, and 99%+ purity.

- **Tagline:** *"Peptides you can trust. Purity you can prove."*
- **Trust pillars:** 99%+ Purity · Third-Party Tested · Batch COAs · Measured Accuracy · Fast Shipping
- **Contact:** FuturisticScienceUSA@gmail.com · 920-265-2896 · Madison, WI
- **Catalog (sample research products):** BPC-157, TB-500, GHK-Cu, Selank, Semax,
  Tesamorelin, MOTS-c, KPV, Epitalon, Sermorelin.

### Sources provided
- `uploads/Futuristic Science Logo.png` → `assets/logo-full.png` (+ transparent & emblem crops)
- `uploads/Photos_GoOsjPWFnb.png`, `uploads/image (1).jpg` → GHK-CU vial product photography
- `uploads/Images for website.png` → hero vial with annotated trust callouts
- Written brief: brand description, compliance language, color direction, feature list,
  product list, and the WooCommerce/Next.js intended tech stack.

No codebase or Figma file was provided; the system is derived from the brand brief and the
supplied logo + product photography.

---

## 2. Content fundamentals (voice & copy)

**Tone:** confident, precise, clinical-but-premium. We sound like a serious lab, not a
supplement marketer. Trust is earned with evidence, never with hype.

- **Person:** Speak about the product and the science in the third person ("Every vial displays
  the measured mg content"). Address the researcher directly as **"you"** only for handling and
  account actions ("Track your order", "Search your batch number"). Never "we cure / we help you…".
- **Casing:** Sentence case for body and most headings. **UPPERCASE** is reserved for eyebrows,
  trust labels, and the wordmark (with wide letter-spacing). Product codes are written exactly:
  *GHK-Cu*, *BPC-157*, *TB-500*.
- **Numbers as proof:** Lead with verifiable specifics — "99%+ purity", "Batch #FS-2024-0312",
  "Third-party tested". Avoid vague superlatives ("the best", "miracle").
- **Compliance voice:** Disclaimers are stated plainly and without apology. Standard line:
  **"For Research Purposes Only. Not for human use."** Handling copy stays neutral and lab-framed:
  *"Store lyophilized powder at -20°C. Handle in accordance with institutional safety guidelines."*
- **Forbidden:** dosing amounts/schedules, therapeutic or cosmetic benefit claims, before/after,
  weight-loss language, "safe to use", testimonials about effects.
- **Emoji:** never. The brand communicates with iconography and typography, not emoji.

**Example copy**
- Hero: *"Peptides you can trust. Purity you can prove."* / sub: *"Research-grade peptides,
  third-party tested with batch-specific Certificates of Analysis."*
- Product blurb: *"GHK-Cu is a copper-binding tripeptide studied in laboratory research. Supplied
  as lyophilized powder for in-vitro investigation by qualified researchers."*
- CTA labels: *Select Options · View COA · Search Batch · Add to Cart · Proceed to Checkout*

---

## 3. Visual foundations

### Color
The palette is drawn directly from the logo and vial: **metallic gold**, **deep navy/ink**,
and **crisp white**, with a **teal** accent that signals science and "verified".
- **Gold** (`--gold-500 #C8A24C`) — the primary brand accent. Used for CTAs, the wordmark,
  hairline rules, label banding, and featured emphasis. Often rendered as a metallic gradient
  (`--gradient-gold-sheen`) on wordmarks and the logo, but flat gold for UI controls.
- **Ink / Navy** (`--ink-800 #0B1B33`) — primary dark. Headlines, dark sections, footer, hero.
- **White / light gray** (`#FFFFFF`, `--gray-50/100`) — dominant surfaces; whitespace is a feature.
- **Teal** (`--teal-500 #12877F`) — links, verified/COA badges, secondary accent. Used sparingly.
- **Semantic:** success (green), warning (amber), danger (red), info (blue) — muted, never neon.

Imagery skews **bright, clean, and cool-neutral** (white seamless product photography with soft
reflections). Gold is the only warm note. No heavy color grading, no grain, no duotone.

### Typography
- **Display — Sora** (600/700/800): headlines, hero, section titles. Geometric, modern, premium-tech.
- **Body — Manrope** (400/500/600/700): all running text, UI labels, buttons. Humanist, legible.
- **Mono — IBM Plex Mono** (400/500): batch numbers, COA IDs, lab data, prices in tables.
- Eyebrows/trust labels: Manrope bold, uppercase, `letter-spacing: 0.16em`, gold.
- *Substitution note: brand supplied no font files; these are the closest Google Fonts. Flag for
  replacement if official type exists.*

### Spacing & layout
- 4px base unit; generous section rhythm (`--section-y: 96px`). Whitespace is core to the premium feel.
- Containers: `1200px` main, `680px` for legal/prose. 24px gutter.
- Grids: product grid is 3–4 up on desktop, 2 up tablet, 1 up mobile.

### Backgrounds
- Default surfaces are flat white / `--gray-50`. **No purple gradients, ever.**
- Signature texture: **subtle molecular node pattern** (faint gray dots + connecting lines),
  used behind hero and product cutouts — see `.bg-molecular` and the hero callout image.
- Dark sections use `--gradient-ink` (navy, near-flat). Gold appears only as accents on dark.

### Corners, borders, cards
- Radii: controls `--radius-md (10px)`, cards `--radius-lg (14px)`, pills for badges/filters.
- **Cards:** white, `14px` radius, hairline border (`--border-subtle`) **or** soft shadow
  (`--shadow-md`) — not both heavy. On hover, cards lift with `--shadow-lg` and a 2–3px translate.
- Borders are hairline and cool-gray. Gold borders are reserved for featured/active states.

### Elevation & shadows
- Soft, low, cool-neutral shadows (`--shadow-sm → xl`). Never harsh or dark.
- **Gold glow** (`--glow-gold`) is reserved for the primary CTA and featured product only.

### Motion
- Restrained and premium. `--ease-out` (cubic-bezier .22,1,.36,1), 120–360ms.
- Hover: subtle lift + shadow increase + color shift. Press: slight scale-down (0.98) + darker gold.
- Fades and short translates on scroll-in. **No bounces, no infinite decorative loops.**
- Always honor `prefers-reduced-motion`.

### Hover / press states
- **Buttons (primary):** hover → `--gold-600`; press → `--gold-700` + `scale(.98)`.
- **Buttons (secondary/outline):** hover → gold border + `--gold-50` fill.
- **Links:** teal → darker teal on hover; underline optional.
- **Cards/product:** hover → lift + shadow; image scales 1.02 within its frame.

### Transparency & blur
- Used lightly: sticky header gets a translucent white with `backdrop-filter: blur(10px)` once scrolled.
- Glass effects are restrained — this is a clinical brand, not a flashy one.

---

## 4. Iconography

- **System:** [Lucide](https://lucide.dev) — outline icons, ~1.75px stroke, rounded joins.
  Loaded from CDN (`lucide@latest`). They match the brand's clean, modern, scientific feel.
- **Usage:** trust badges (shield-check, flask-conical, file-badge, ruler, truck), nav (search,
  shopping-cart, user), product/lab (test-tube, thermometer-snowflake, package). Icon color is
  usually `--ink-700` or `--teal-500`; on gold/CTA contexts, white or ink.
- **No emoji.** No hand-drawn SVG illustration. The only bespoke vector mark is the **logo emblem**
  (DNA-helix-in-globe), shipped as PNG in `assets/`.
- Unicode is not used for iconography. Decorative bullets/rules use the gold hairline (`.rule-gold`).
- *Substitution note: brand specified no icon set; Lucide is the chosen match. Flag if a different
  set is preferred.*

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry (import this). `@import`s the token files below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `assets/` — `logo-full.png`, `logo-transparent.png`, `emblem-mark.png`,
  `vial-ghk-cu.png`, `vial-ghk-cu-wide.jpg`, `hero-vial-callouts.png`
- `readme.md` (this file), `SKILL.md`

**Foundation cards** (`cards/`) — Design System tab specimens for Type, Colors, Spacing, Brand.

**Components** (`components/`)
- `core/` — Button, IconButton, Badge, Tag, Input, Select
- `commerce/` — ProductCard, PriceTag, TrustBadges, DisclaimerBanner, COASearch, QuantityStepper

**UI kit** (`ui_kits/website/`) — full-screen WooCommerce-style storefront recreations:
Home (hero), Shop, Product Detail, Test Results / COA.

See each component's `.prompt.md` for usage, and the Design System tab for live specimens.
