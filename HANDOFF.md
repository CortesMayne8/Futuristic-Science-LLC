# Handoff — Futuristic Science storefront

Handoff for the next assistant (Fable). Read the **START HERE** section first.

---

## ⚠️ START HERE — the single most important thing

**Nothing built in this session is live on the website yet.** Everything is
committed to GitHub as files. The owner's live site (`futuristicscienceusa.com`)
is a separate WordPress install with **no connection to this repo** — no CI, no
deploy pipeline. Changes only appear after the theme file is **manually uploaded
and activated in WordPress**, and that has **not happened**.

**The owner is non-technical and frustrated.** They believed the AI was applying
changes to their live site directly (it can't — no access to their WordPress or
hosting). They do not know how to install a theme. **Do not hand them more things
to build.** The #1 job now is to gently help them **deploy** what already exists,
one tap at a time, or route it to whoever manages their hosting.

- Owner may not know who set up the site. Ask calmly; offer to write a note their
  host's support can act on ("please install + activate this theme zip").
- Lead with empathy. Avoid jargon. Confirm each step landed before the next.

---

## The deliverable that turns on ~90% of the work

**`wordpress/futuristic-science-child.zip`** — the WordPress child theme (child of
Hello Elementor). Installing + **activating** this one file enables everything below.

**Install steps (WordPress admin):**
Appearance → Themes → Add New → Upload Theme → choose the zip → Install →
(if it exists, "Replace current with uploaded") → **Activate "Futuristic Science
Child."** Hard-refresh the site.

**Diagnostic if "nothing changes" after upload:** the theme's code injects a gold
"Age & Research Verification" popup on every page (no cache/Elementor dependency).
If that popup does NOT appear in a fresh/incognito visit, the child theme is **not
the Active theme** (most likely cause), or a caching plugin/Cloudflare is serving
old pages. First thing to confirm: which theme shows **"Active"** in Appearance →
Themes — it must say "Futuristic Science Child."

### What's inside the theme zip (all done, awaiting deploy)
Files: `style.css`, `functions.php`, `cart-fx.js`, `gate-logo.png`, `email-logo.png`, `screenshot.png`.
1. **Cart page redesign** — card line items, pill `− [n] +` quantity stepper
   (`cart-fx.js`), trust row (Secure checkout · COA verified · Ships from USA),
   teal discount line, gold pill "Proceed to checkout."
2. **Order email fix** — forces the From name to "Futuristic Science" and serves a
   working header logo (old one 404'd). Fixes the "Email Deliverability" sender.
3. **Mini-cart price breakdown** — Subtotal / Shipping / Tax / Total in the slide-out cart.
4. **Form inputs** — compact rounded "bubble" fields on account/checkout/Elementor forms.
5. **Mobile overflow fix** — home-page chat block no longer bleeds off the right edge.
6. **Payment methods** — consistent selectable cards; PLUS a new gateway
   `FS_Gateway_Card_Onramp` = a separate **"Credit / Debit Card"** option (with
   Visa+Mastercard icons) that routes to the SAME hosted crypto/card portal.
   ▸ Must be enabled + configured: WooCommerce → Settings → Payments → enable
     "Credit / Debit Card (hosted)"; set Source gateway ID or leave blank to
     auto-detect the crypto gateway; recommend renaming the crypto method to
     "Cryptocurrency." **Owner should place one small real test order + refund.**
7. **Checkout hard gate** — required "I am 21+ and a qualified researcher…"
   checkbox before Place Order; blocks the order server-side; saved to the order.
8. **Soft front gate** — site-wide age/researcher overlay (one checkbox + Enter,
   remembers via localStorage) injected in code, so browsing is unblocked after
   acknowledging. Enforcement lives at checkout (#7).
9. **Old-popup remover** — JS that auto-removes any leftover Elementor age-gate
   popup (matched by wording) so the code gate is the only entry gate. If the old
   gate still shows, it may use different wording — get its popup ID to target it.

---

## Standalone design files (need Elementor/plugin placement — NOT auto-applied)

All in `wordpress/`. These are self-contained HTML the owner pastes into Elementor
HTML widgets / popups, or uses as the visual spec.

- **`welcome-offer-popup.html`** + **`welcome-offer-SETUP.md`** — "Get 10% off your
  first order" email+SMS opt-in popup (validation + success state). Setup guide
  covers creating a `WELCOME10` coupon and wiring email+SMS. **Owner chose Omnisend**
  — still needs the native-form/automation setup (Omnisend docs were unreachable
  from the tooling; guide the owner through Omnisend's signup form + welcome
  automation, styled to this design). Popup show-timing (currently 60s → wants
  **15s**) is an Elementor Popup trigger setting.
- **`age-gate-popup.html`** — branded front gate for an Elementor HTML widget.
  (The theme now injects an equivalent soft gate in code, so this is optional.)
- **`checkout-flow-prototype.html`** + **`checkout-flow-IMPLEMENT.md`** — a working
  3-step (Shipping → Delivery → Payment) checkout wizard PROTOTYPE. Owner loves it.
  Making it the LIVE checkout needs a multi-step checkout plugin (CheckoutWC
  recommended) styled to match — WooCommerce's single-page checkout shouldn't be
  hand-split on a live store. BTCPay was removed from this file per owner.
- **`signin-page-prototype.html`** — branded account/sign-in page (Create Account /
  Sign In tabs, Google button, 21+ checkbox). Live version = rebuild in Elementor +
  a Google social-login plugin (e.g. Nextend); WooCommerce still powers real auth.

## Product descriptions
- **`content/product-descriptions.md`** + updated **`exports/woocommerce-import-ready.csv`**
  — research-focus descriptions for all 30 products (what each is *studied for*; no
  dosing, no human-use/benefit claims). Deploy by re-importing the CSV (Products →
  Import, match by SKU).

---

## Repo / branch / PR
- Repo: `CortesMayne8/Futuristic-Science-LLC`
- Branch: `claude/review-cart-redesign-6zjffk` (all work is here)
- PR: **#2** ("Storefront polish: cart, checkout, emails, forms, mobile fit & welcome offer") — open, not merged.
- Theme zip version: ~1.8.0 (bumped as features were added).

## Hard compliance rule (never violate)
Research-use-only peptide brand. Every product/cart/checkout surface must carry
**"For Research Purposes Only. Not for human use."** No medical, dosing, weight-loss,
or human-use claims — ever. Frame everything as laboratory research.

## Brand
Colors: gold `#C8A24C`, gold-700 `#A07F35`, gold-50 `#F7F1E2`, ink navy `#0B1B33`,
teal `#12877F`. Fonts: Newsreader (headings/display), Manrope (body), IBM Plex Mono (prices/lab data).

## Stack
WordPress + Hello Elementor (parent) + this child theme + WooCommerce + Elementor Pro
(Popups, Forms). Payments: Zelle, Cash App, Venmo, Bitcoin, "Pay with Crypto" (hosted
crypto/card on-ramp). BTCPay was removed by the owner.

---

## Suggested next actions for Fable (in order)
1. **Get the theme deployed.** Hand-hold the owner (or their host) through Upload +
   Activate; verify via the age-gate popup litmus test. This unblocks ~90%.
2. Confirm the **Active theme** is "Futuristic Science Child"; check caching/Cloudflare if stale.
3. After deploy: enable the **Credit/Debit Card** gateway + test order; set the welcome
   popup to 15s; unpublish the old age-gate popup (or confirm the remover handled it).
4. Then tackle the Elementor/plugin pieces (Omnisend welcome flow, checkout plugin,
   sign-in page) one at a time — only after the theme itself is confirmed live.
5. Keep it gentle and jargon-free. The owner does not manage WordPress day-to-day.
