# WordPress Setup Runbook (exact steps)

Fast, click-by-click setup for the Futuristic Science store. Do these in order once WordPress is
installed. For design/template detail, see `ELEMENTOR-BUILD-PLAN.md`.

## 0. Before you start
- WordPress installed on your host, and you can reach `yoursite.com/wp-admin`.
- Elementor Pro license purchased (you'll need the license key or connect your Elementor account).

## 1. Theme + plugins (Plugins → Add New)
Install & activate, in this order:
1. **Hello Elementor** (Appearance → Themes → Add New → search "Hello Elementor" → Activate)
2. **Elementor** (free core)
3. **Elementor Pro** (upload the plugin zip from your Elementor account, then activate + connect license)
4. **WooCommerce**
5. Helpers: an **age-gate/popup** (Elementor Pro Popups can do this — no extra plugin needed),
   **side-cart** (Elementor menu-cart works; or a side-cart plugin), **order tracking**
   (e.g. Advanced Shipment Tracking), **Polylang** (EN switcher), **Rank Math** (SEO).

## 2. WooCommerce setup wizard
- Store address: Madison, WI, USA · Currency: **USD**
- Product type: physical products
- Skip/av oid the marketplace add-on upsells for now
- Leave payments unset for now (see the payment note at the bottom)

## 3. Create global product attributes (Products → Attributes)
Create these two **before** importing so variations map cleanly:
- **Strength** (slug `strength`)
- **Format** (slug `format`) — add terms: `Single Vial`, `Box of 10 Vials`

## 4. Import the catalog (Products → Import)
1. Upload **`exports/woocommerce-import-ready.csv`** from this repo (30 products, 86 variations).
2. On the mapping screen, confirm columns map (Type, SKU, Name, Short description, Description,
   Regular price, Categories, **Images**, Parent, Attribute 1 = Strength, Attribute 2 = Format).
3. Run the import. **Images auto-download** from the GitHub Pages URLs in the file into your Media
   Library — no manual upload needed. (Give it a minute; 30 images.)
4. Spot-check a product (e.g. TIRZ-2): it should be a **variable product** with strength options,
   Single Vial / Box of 10 pricing, an image, category, and the RUO short description.

Categories created by the import: Tissue Repair, Dermal, Metabolic, Secretagogue, Cellular,
Neuro, Circadian Research.

## 5. Global Kit (Elementor → Site Settings) — exact values

**Global Colors**
- Primary (CTA) Gold `#C8A24C`
- Secondary Ink/Navy `#0B1B33`
- Text `#0B1B33`
- Accent Teal `#12877F`
- (add) Gold-hover `#B8933F`, Gray-50 `#F7F8FA`, Border `#E3E7ED`

**Global Fonts** (Site Settings → Global Fonts; all are free Google Fonts)
- Primary / Headings: **Newsreader** (500–600)
- Secondary / Text: **Manrope** (400–700)
- Accent (prices, batch/COA, lab data): **IBM Plex Mono** (400–500)
- Eyebrows: Manrope, UPPERCASE, letter-spacing 0.16em, color = Gold

**Layout** (Site Settings → Layout)
- Content width **1200px**, widget spacing ~20–24px
- Buttons: gold background, ink text, radius **10px**

## 6. Templates & pages
Now follow `ELEMENTOR-BUILD-PLAN.md`:
- Build **Header** + **Footer** (Templates → Theme Builder)
- Build **Single Product** + **Shop/Archive** (Theme Builder → WooCommerce)
- Build **Home**, **COA Library**, **Track Order**, **Contact**
- Paste legal/content from `content/` (About, FAQ, Research Disclaimer, Shipping, Returns, Privacy,
  Terms). **Lawyer-review the legal pages.**
- Add the **age (21+) + researcher** gate as Elementor Popups (show once per session via cookie)

## 7. Reference while building
- Desktop look: `screenshots/` · Mobile look: `screenshots/mobile/`
- Brand rules: `DESIGN-SYSTEM.md`

---

### ⚠️ Payments (do in parallel, has a lead time)
Stripe/PayPal/Square/Shopify **prohibit peptides**. Apply for a **high-risk merchant account /
gateway** that supports WooCommerce and this category. Until it's approved, you can launch in
**catalog mode** (browse + inquiry, no live checkout) so the site can go up without waiting.
