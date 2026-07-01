# Futuristic Science — Go-Live Guide (WordPress)

How to take this from prototype to a real, live store. Pair with `ELEMENTOR-BUILD-PLAN.md`
(the build steps), `DESIGN-SYSTEM.md` (brand), and the `screenshots/` folders (visual target).

> **What "live" means:** the current repo is a high-fidelity prototype (sample data, mock
> checkout). A live store = WordPress + WooCommerce + Elementor, on real hosting with a domain,
> real products, and a working payment method.

---

## ⚠️ Read this first: payments for peptides/research chemicals

This is the single biggest go-live blocker, so decide it early. Mainstream processors —
**Stripe, PayPal, Square, Shopify Payments** — generally **prohibit research chemicals /
peptides** and can freeze funds or close accounts. You will most likely need a **high-risk
merchant account / high-risk payment gateway** that explicitly allows this category.

- Search for "high-risk payment processor for research chemicals / peptides" and get quotes.
- Expect higher fees, underwriting, and possibly a rolling reserve.
- Confirm the processor integrates with **WooCommerce** before committing.
- Until a processor is approved, you can launch in "catalog / inquiry" mode (no live checkout).

Also confirm your **business setup** (registered LLC, EIN, business bank account) — high-risk
underwriting will ask for it.

---

## Step 1 — Domain + hosting

You need a domain (e.g. futuristicscienceusa.com) and WordPress hosting that runs WooCommerce well.

**What to look for:** managed WordPress hosting, PHP 8+, free SSL, daily backups, staging site,
enough resources for WooCommerce (avoid the very cheapest shared tiers).

**Common managed hosts to compare** (check current pricing yourself): Cloudways, SiteGround,
Kinsta, WP Engine, Hostinger, DreamHost. Any reputable WooCommerce-capable host is fine to start.

Tip: buy the domain where you like, point DNS at the host. Most hosts offer 1-click WordPress.

## Step 2 — Install WordPress + core plugins

1. Install WordPress (1-click from the host).
2. Set the theme to **Hello Elementor**.
3. Install plugins: **Elementor** + **Elementor Pro** (paid license), **WooCommerce**, plus the
   helpers listed in `ELEMENTOR-BUILD-PLAN.md` §1 (age-gate popup, side-cart, order tracking,
   COA table, Polylang/WPML for the EN switcher, Rank Math/Yoast for SEO).
4. Run the WooCommerce setup wizard (store address, currency USD, shipping zones, tax).

## Step 3 — Brand + templates

1. In Elementor → Site Settings, enter the **Global Kit** (colors, fonts, layout) from the
   build plan §2.
2. Build the global **Header** and **Footer** (build plan §3).
3. Build the **Single Product** and **Shop/Archive** WooCommerce templates.

## Step 4 — Products & content

1. Import `exports/woocommerce-products.csv` (WooCommerce → Products → Import), then refine into
   **variable products** (strength + single-vial/box options) and add COA meta (batch #, purity,
   PDF).
2. Upload product images from `assets-min/` and logos.
3. Create the pages and paste the copy from `content/` (About, FAQ, Research Disclaimer,
   Shipping, Returns & Refunds, Privacy, Terms). **Have a lawyer review the legal pages.**
4. Build **Home**, **COA Library**, **Track Order**, **Contact** per build plan §4.

## Step 5 — Cart, checkout, gate

1. Configure the side-cart drawer and the WooCommerce **Checkout** (with the researcher
   compliance checkboxes).
2. Connect your **payment gateway** (see the payments warning above) and **shipping** rates.
3. Add the **age (21+) + researcher** gate popups (cookie, once per session).

## Step 6 — Pre-launch checklist

- [ ] Payment gateway approved and tested (or launch in catalog mode)
- [ ] Test order end-to-end on staging
- [ ] "For Research Purposes Only. Not for human use." on every product + checkout
- [ ] Legal pages reviewed by counsel and linked in the footer
- [ ] Mobile QA against `screenshots/mobile/`
- [ ] SSL active, backups on, SEO titles set, analytics installed
- [ ] Shipping rates, tax, and order-confirmation emails configured

## Step 7 — Launch

Point the domain to the live site, take it out of "coming soon"/maintenance, place a real test
order, then announce.

---

### Fastest way to see it in WordPress before full build
Spin up a **free staging/sandbox** (e.g. a host's free trial, or a local install with LocalWP)
and do Steps 2–3 there first. That gets you a clickable WordPress version to react to without
committing to hosting — then promote it to production when you're happy.

Want to start? Tell me which host you pick (or say "recommend one") and I'll walk you through
Steps 2–5 screen by screen.
