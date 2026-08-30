# Theme source — Futuristic Science Child v1.8.1

**Deployed LIVE on futuristicscienceusa.com on 2026-07-14** (uploaded + activated via WP admin).

## What changed in 1.8.1 (vs the 1.8.0 zip in `wordpress/futuristic-science-child.zip`)

1. `functions.php` — **bug fix**: the `FS_Gateway_Card_Onramp` payment gateway class was defined on the `plugins_loaded` hook, but theme code loads *after* that hook fires, so the class never existed and the gateway never appeared in WooCommerce → Payments. Changed to `after_setup_theme`. Also bumped enqueue `ver` strings to `1.8.1`.
2. `style.css` — Version header bumped `1.8.0` → `1.8.1` (no other changes).

## Rebuilding the install zip

The zip in `wordpress/futuristic-science-child.zip` is still **1.8.0** (binary files can't be updated through the API used for this commit). To rebuild 1.8.1: unzip the 1.8.0 zip, replace `functions.php` with the copy in this folder, bump the `Version:` line in `style.css` to `1.8.1`, re-zip the 6 files flat (no folder): `style.css, functions.php, cart-fx.js, gate-logo.png, email-logo.png, screenshot.png`.

## Live-site state after the 2026-07-14 deploy session

- Theme v1.8.1 active; soft age gate verified on the live homepage; checkout hard gate present.
- "Credit / Debit Card (hosted)" gateway **enabled** (Source gateway ID blank = auto-detects RizzPay). Owner still needs to place one small real test order + refund.
- RizzPay checkout title renamed "Pay with Crypto" → "Cryptocurrency".
- **Elementor Pro is NOT installed** on the live site — there are no Elementor popups at all. So: (a) there is no old Elementor age-gate popup to remove (verified: zero popup modals on the front end), and (b) the welcome-offer popup does not exist yet; it must be built via Omnisend (script already loaded on site) or by installing Elementor Pro. The "60s → 15s popup timing" task is therefore N/A until that popup is created.
- Known caching quirk: some optimizer on the site strips `?ver=` query strings from all enqueued CSS/JS, and static CSS is browser-cached 7 days (`max-age=604800`), so repeat visitors may see stale styles for up to 7 days after any CSS change. LiteSpeed "Remove Query Strings" is OFF; culprit not identified (not Code Snippets — all 31 inactive). Consider filename-based cache busting for future CSS changes.
