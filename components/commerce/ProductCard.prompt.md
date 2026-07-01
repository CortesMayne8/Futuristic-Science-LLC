Shop-grid card for a research peptide vial. Composes `Badge` + `Button`.

```jsx
<ProductCard
  name="GHK-Cu" subtitle="Copper Peptide" size="100mg"
  price={64} purity="99%+" image="/assets/vial-ghk-cu.png"
  badge={{ tone:'gold', label:'Featured' }}
  onSelect={openProduct}
/>
```

- Image well with soft gradient; vial scales 1.04 on hover, whole card lifts.
- Purity badge top-right; optional `badge` top-left. Mono price. `inStock={false}` → disabled "Out of Stock".
- Designed for a 3–4-up responsive grid (see `ProductGrid` usage in the website UI kit).
