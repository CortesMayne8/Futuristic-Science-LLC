# Strength-specific vial renders

One render per compound was not enough. Ten products sell the same peptide at two or three
strengths, and WooCommerce falls back to the **parent** product image whenever a variation has
none of its own — so the cart showed a vial labelled **10mg** for a **5mg, Single Vial** line item.
That mismatch is the kind of thing a first-time buyer of research material reads as sloppy.

This folder holds one render per strength, built from the compound's master render in `assets/`
with only the strength line on the label rewritten. Everything else — glass, cap, lighting,
logo, compound name — is the original pixel data.

- `assets/variants/` — 1200×1200 transparent PNG masters
- `assets-min/variants/` — 700×700 copies; these are the URLs the import CSV links to

## Regenerating

```bash
python3 tools/build_strength_variants.py    # all 10 multi-strength products, both sizes
python3 tools/link_variation_images.py      # fill the Images column on variation rows
```

One-off, any compound and any strength:

```bash
python3 tools/vial_strength.py assets/vial-tb-500.png 10mg \
    -o assets/variants/vial-tb-500-10mg.png --square 1200
```

The tick marks flanking the strength line are found automatically. If a future render breaks that
detection, pass `--box X0 X1 Y0 Y1` with the strength text's pixel bounds.

## Getting them onto the live store

The variation rows in `exports/woocommerce-import-ready.csv` now carry an `Images` URL, so the
fastest path is a re-import — WooCommerce matches on SKU and updates in place:

**Products → Import → upload `exports/woocommerce-import-ready.csv` →** on the mapping screen
confirm **Images** is mapped **→** tick **"Update existing products" → Run.**
Images download from GitHub Pages; nothing to upload by hand.

To set one by hand instead: **Products → (product) → Variations →** expand the variation **→**
click its image box **→** pick the matching `vial-<compound>-<strength>.png`.

## Coverage

| Product | Strengths |
|---|---|
| Retatrutide | 10mg · 20mg · 30mg |
| Tirzepatide | 10mg · 20mg · 30mg |
| NAD+ | 100mg · 500mg · 1000mg |
| GHK-Cu | 50mg · 100mg |
| BPC-157 | 5mg · 10mg |
| TB-500 | 5mg · 10mg |
| MOTS-c | 10mg · 20mg |
| Selank | 5mg · 10mg |
| Semax | 5mg · 10mg |
| Tesamorelin | 5mg · 10mg |

Single-strength products keep using their parent render — it already shows the right number.
