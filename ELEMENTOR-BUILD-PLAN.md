# Futuristic Science — WordPress / Elementor Build Plan

A step-by-step plan for rebuilding the storefront in this repo (`ui_kits/website/`) as a
production **WordPress + WooCommerce + Elementor** site. Pair this document with the visual
references in `screenshots/` (desktop) and `screenshots/mobile/`, and the brand rules in
`DESIGN-SYSTEM.md`.

> **Compliance is non-negotiable.** Every product and checkout surface must carry
> **"For Research Purposes Only. Not for human use."** No medical, dosing, weight-loss,
> or human-use claims anywhere. Reconstitution/handling copy stays framed as lab information
> for qualified researchers.

---

## 1. Stack & plugins

| Purpose | Recommendation |
|---|---|
| Theme | **Hello Elementor** (blank canvas, fast) |
| Page builder | **Elementor Pro** (needed for Theme Builder, WooCommerce Builder, Popups, Forms) |
| Store | **WooCommerce** |
| Product data | Import from `exports/woocommerce-products.csv` (WooCommerce -> Products -> Import) |
| Age / researcher gate | Elementor **Popup** (cookie-based) — two-step: 21+ gate, then researcher acknowledgment |
| Side-cart drawer | Elementor **Menu Cart** widget, or a side-cart plugin (e.g. XT / CartFlows mini-cart) |
| Order tracking | WooCommerce order status + a tracking plugin (e.g. AfterShip / Advanced Shipment Tracking) |
| COA library / batch search | Searchable table plugin (e.g. TablePress + search) or a custom ACF post type "COA" |
| Language switcher (EN) | Polylang or WPML (the header shows an EN selector) |
| Forms | Elementor **Form** widget (Contact, newsletter) |
| SEO | Rank Math or Yoast |

---

## 2. Global Kit (Elementor -> Site Settings)

### Global Colors
Map these to Elementor's global color slots so every widget inherits them:

- **Primary / CTA — Gold** `#C8A24C` (hover `#B8933F` / `#A07F35`)
- **Secondary / Dark — Ink Navy** `#0B1B33`
- **Text** `#0B1B33` on light, `#FFFFFF` / `#E9EDF3` on dark
- **Accent / Verified — Teal** `#12877F`
- **Surfaces** White `#FFFFFF`, Gray-50 `#F7F8FA`, Gray-100 `#EEF1F5`, hairline border `#E3E7ED`

### Global Fonts
The live storefront uses a **serif display face** for big headings and a humanist sans for body:

- **Display / Headings — Newsreader** (500–600), used for hero and section titles (e.g. *"Tomorrow's Science, Today."*). *DESIGN-SYSTEM.md lists Sora as the geometric alternative — pick one and stay consistent.*
- **Body / UI — Manrope** (400–700)
- **Mono — IBM Plex Mono** (400–500) for prices, batch numbers, COA IDs, lab data
- **Eyebrows / trust labels** — Manrope, UPPERCASE, letter-spacing `0.16–0.22em`, gold

### Layout & style defaults
- Content width **1200px**; prose width **680px** for legal pages; column gap **24px**
- Section vertical padding ~ **96px** desktop / **56px** mobile (4px base scale)
- Radii: controls **10px**, cards **14px**, pills for badges/filters
- Shadows: soft, low, cool-neutral. Reserve the **gold glow only for the primary CTA & featured product**
- Buttons (global): primary = gold fill, ink text, 10px radius; hover darkens gold + slight lift; secondary = outline that fills gold-50 on hover
- Motion: 120–360ms ease-out; subtle lift on hover; honor `prefers-reduced-motion`

---

## 3. Theme Builder templates (build these first)

### Header (global, all pages)
- Left: logo (`assets-min/logo-horizontal.png`; light version on dark sections)
- Center: nav menu — **Home / Shop / COA Library / Track Order / Contact**
- Right: **EN** language switcher, search icon, account icon, **cart icon with count** (Menu Cart widget -> opens side-cart)
- Behavior: sticky; translucent white with `backdrop-filter: blur(10px)` once scrolled
- Mobile: collapse nav to a hamburger drawer (see `screenshots/mobile/`)

### Footer (global)
- Newsletter band "Stay in the loop" — email field + gold **Subscribe** (Elementor Form -> Mailchimp/Brevo)
- Four columns: brand blurb + contact; **SHOP** (All Peptides, COA Library); **COMPANY** (FAQ, Contact); **LEGAL** (Research Disclaimer/RUO, Privacy, Terms, Returns & Refunds, Shipping)
- Contact: FuturisticScienceUSA@gmail.com / 920-265-2896 / Madison, WI
- Bottom RUO disclaimer bar: *"Products are sold for laboratory research use only and are not intended to diagnose, treat, cure, or prevent any condition. Not for human or veterinary use."*

### Age / researcher gate (Elementor Popups)
- **Popup 1 — Age gate:** "You must be at least 21…" with *I Disagree* / *I Agree* + Remember me. Conditions: entire site; trigger on load; show once per session/cookie.
- **Popup 2 — Researcher access:** "Sign in to continue" style acknowledgment with the required "I am a qualified researcher…" checkbox before entry. (If real accounts are wanted, use WooCommerce login; otherwise a gate acknowledgment is enough.)

### Single Product template (WooCommerce Builder)
Reference: `screenshots/05-product.png`. Two-column: gallery left; right column = COA Verified / In Stock badges, title, `Dual Receptor Peptide - 10mg` subtitle, price, short description, **Strength** + **Purchase Option** variation selectors, quantity + **Add to Cart**, **View Certificate of Analysis** link. Below: tabs **Description / Storage & Lab Handling / Shipping**, trust strip (99%+ Purity / Third-Party Tested / Measured Accuracy / Fast Shipping), and the "Important Research Notice" compliance block.

### Shop / Archive template (WooCommerce Builder)
Reference: `screenshots/04-shop.png`. Eyebrow "CATALOG" + "Research Peptides" title, category filter pills, product count + **Sort by**, responsive product grid (4-up desktop / 2-up tablet / 2-up mobile) with **Featured** and **99%+ Purity** badges.

---

## 4. Pages -> Elementor section breakdown

### Home (`screenshots/03-home.png`)
1. **Hero** — 2-col: left eyebrow "THIRD-PARTY TESTED - 99%+ PURITY", serif H1 + gold italic sub, paragraph, **Shop Peptides** (primary) + **View Test Results** (secondary), small RUO shield note; right = vial trio image (`assets-min/vial-trio-hero-v3.png`) on the faint molecular-node background.
2. **Trust band** (ink navy) — icon list: 99%+ Purity / Third-Party Tested / Batch COAs / Measured Accuracy / Fast Shipping.
3. **Featured products** — "Research peptides, in stock" + WooCommerce Products widget (featured, 4-up) with "View all".
4. **Proof / COA** — "Every batch is tested. Every result is published." + three check points + **Search Batch Numbers** button.
5. Footer (global).

### Shop (`04-shop.png`)
Archive template + category filter pills (product categories: Tissue Repair, Dermal, Metabolic, Secretagogue, Cellular, Neuro, Circadian Research) and sort.

### Product (`05-product.png`)
Single Product template. Model products as **WooCommerce variable products**: attribute **Strength** (e.g. 10mg) and **Purchase Option** (Single Vial / Box of 10 — Box priced ~40% off per vial). Add COA fields (batch #, purity %, PDF) via ACF or product meta.

### Cart drawer (`06-cart-drawer.png`)
Side-cart: line items, quantity steppers, RUO notice, subtotal, **Proceed to Checkout**.

### Checkout (`07-checkout.png`)
WooCommerce Checkout: Contact (email, phone), Shipping (full name, institution/lab, address), sticky **Order Summary** (subtotal, shipping, total), **Place Order**, and the **researcher compliance checkboxes** (use WooCommerce terms + a custom-checkout-fields plugin to add the multiple acknowledgments and the "Order Record" consent). Keep the RUO notice + legal links in the summary.

### COA Library (`08-coa-library.png`)
Gold header "SEARCH YOUR BATCH NUMBER INSTANTLY" + batch search field; below, an accordion/table of products -> COAs. Implement with a "COA" custom post type (ACF: product, batch #, purity, PDF) + a searchable table, or TablePress.

### Track Order (`09-track-order.png`)
"Track Your Order" + tracking-number field -> order-tracking plugin result. Note: tracking numbers emailed on ship.

### Contact (`10-contact.png`)
Eyebrow "GET IN TOUCH" + note that support can't advise on research protocols; Elementor Form: First/Last name, Email, Phone, Subject (dropdown), message -> send to FuturisticScienceUSA@gmail.com.

### Simple pages
About, FAQ, Privacy Policy, Terms & Conditions, Returns & Refunds, Shipping Policy, Research Disclaimer (RUO). Use the 680px prose width.

---

## 5. Content & assets
- **Product images:** use `assets-min/vial-*.png` (optimized). Full-res originals in `assets/`.
- **Logos:** `assets-min/logo-horizontal.png`, `logo-horizontal-light.png` (dark bg), `emblem-mark.png`.
- **Catalog data:** import `exports/woocommerce-products.csv`; refine categories, variations, and COA meta after import.
- **Copy voice:** confident, clinical-but-premium, third person about the product; numbers as proof; never emoji; never dosing/therapeutic claims (see `DESIGN-SYSTEM.md` section 2).

---

## 6. Suggested build order
1. Install stack (Hello theme, Elementor Pro, WooCommerce) and set the **Global Kit** (colors, fonts, layout).
2. Build **Header** + **Footer** global templates.
3. Import products (CSV) and configure variable products + COA meta.
4. Build **Single Product** and **Shop/Archive** WooCommerce templates.
5. Build **Home**, then **COA Library**, **Track Order**, **Contact**, and the simple/legal pages.
6. Configure **Cart drawer** + **Checkout** (with compliance checkboxes).
7. Add the **age/researcher gate** popups (cookie once-per-session).
8. Add the **EN** language switcher, SEO, and analytics.
9. **Compliance pass:** confirm the RUO line appears on every product + checkout, no dosing/medical claims anywhere, all legal pages linked in the footer.
10. Responsive QA against `screenshots/mobile/`; accessibility + `prefers-reduced-motion` check.

---

## 7. Compliance checklist (do not ship without)
- [ ] "For Research Purposes Only. Not for human use." on every product + cart + checkout
- [ ] Age (21+) gate and researcher acknowledgment before entry
- [ ] No dosing amounts/schedules, no therapeutic/cosmetic/weight-loss claims, no testimonials about effects
- [ ] Reconstitution/handling copy framed as lab information only
- [ ] Footer legal set complete: RUO Disclaimer, Privacy, Terms, Returns & Refunds, Shipping
- [ ] COA/batch numbers verifiable; purity stated as measured, not promised
