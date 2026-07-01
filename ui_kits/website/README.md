# Website UI Kit — Futuristic Science Storefront

A high-fidelity, interactive recreation of the WooCommerce-style research-peptide storefront.
Open `index.html` — it boots with the **18+ age gate**, then a click-through store.

## Screens
- **Home** (`HomeScreen.jsx`) — hero ("Peptides you can trust. Purity you can prove."), trust band,
  featured product grid, and a proof/COA teaser with a sample Certificate of Analysis.
- **Shop** (`ShopScreen.jsx`) — category + price filters, sort, responsive product grid.
- **Product** (`ProductScreen.jsx`) — gallery, specs, quantity + add-to-cart, tabs
  (Description / Storage & Lab Handling / Shipping), COA link, trust strip.
- **Test Results / COA** (`COAScreen.jsx`) — batch-number search over the COASearch component.
- **Checkout** (`CheckoutScreen.jsx`) — contact, shipping, payment, sticky order summary.
- **Simple pages** (`SimplePage.jsx`) — About, FAQ, Contact, Account, Privacy, Terms, Research Disclaimer.

## Chrome & overlays
- `Header.jsx` — sticky nav, translucent-on-scroll, cart count.
- `Footer.jsx` — ink footer with RUO warning band, contact, legal links.
- `AgeGate.jsx` — first-visit 18+ gate (Enter / Exit).
- `CartDrawer.jsx` — slide-in cart with quantity steppers and subtotal.

## Composition
Screens compose the design-system primitives from the bundle namespace
(`window.FuturisticScienceDesignSystem_2ca7b0`): `Button`, `Badge`, `Input`, `Select`,
`ProductCard`, `TrustBadges`, `DisclaimerBanner`, `COASearch`, `QuantityStepper`.

## Notes / caveats
- All product cards reuse the **GHK-Cu vial photo** — it is the only product image supplied.
  Swap `window.FS_DATA.image` / per-product images once real photography exists.
- Catalog data (`data.js`) is mock and compliance-safe: no dosing, medical, or human-use copy.
