---
name: futuristic-science-design
description: Use this skill to generate well-branded interfaces and assets for Futuristic Science, LLC (a research-use-only peptide brand) — production code or throwaway prototypes/mocks. Contains brand guidelines, colors, type, fonts, logo assets, reusable components, and a full storefront UI kit. Premium biotech aesthetic: metallic gold, deep navy ink, crisp white, teal accent.
user-invocable: true
---

Read the `DESIGN-SYSTEM.md` file within this skill first — it covers brand context, content/voice
rules, visual foundations, and iconography. Then explore the other files.

**Hard compliance rule (never violate):** Futuristic Science sells *research-use-only* peptides.
Every product surface must carry **"For Research Purposes Only. Not for human use."** Never write
medical, treatment, weight-loss, dosing, or human-use claims. Frame any reconstitution/handling
content strictly as lab-handling information for qualified researchers.

## What's here
- `styles.css` → `tokens/` — colors, typography (Sora / Manrope / IBM Plex Mono), spacing, effects, base.
- `assets/` — logo (full, transparent, emblem mark) and GHK-Cu vial photography.
- `components/core/` — Button, Badge, Input, Select.
- `components/commerce/` — ProductCard, TrustBadges, DisclaimerBanner, COASearch, QuantityStepper.
- `ui_kits/website/` — full WooCommerce-style storefront (Home, Shop, Product, COA, Checkout, + chrome).
- `cards/` — foundation specimen cards for the Design System tab.

## How to use
- **Visual artifacts** (slides, mocks, throwaway prototypes): copy assets out and build static HTML
  for the user to view. Link `styles.css` for tokens; pull the logo/vial from `assets/`.
- **Production code**: read the token CSS and component prompts to design fluently in-brand.
  Reuse the component APIs (see each `*.prompt.md`).
- If invoked with no guidance, ask the user what they want to build, ask a few focused questions,
  then act as an expert designer producing HTML artifacts or production code as needed.

## Brand quick-reference
- **Colors:** gold `#C8A24C` (primary accent/CTA), ink `#0B1B33` (dark), white/gray surfaces, teal `#12877F` (verified/links).
- **Type:** Sora (display), Manrope (body), IBM Plex Mono (batch/COA/lab data). Eyebrows = uppercase, gold, wide-tracked.
- **Feel:** premium, clinical, high-trust, lots of whitespace, soft cool shadows, gold glow reserved for primary CTA. No emoji, no purple gradients.
- **Trust pillars:** 99%+ Purity · Third-Party Tested · Batch COAs · Measured Accuracy · Fast Shipping.
- **Contact:** FuturisticScienceUSA@gmail.com · 920-265-2896 · Madison, WI.
