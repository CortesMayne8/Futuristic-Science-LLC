# Welcome Offer Popup — Setup (email + text, end-to-end)

This gets the **"Get 10% off your first order"** popup working for real:
capture the email + phone, add them to your lists, and email each signup
their discount code.

There are 3 pieces. Do them in order. Plan on ~30–40 minutes.

- **File:** `welcome-offer-popup.html` (the designed, working popup)
- **You provide:** a free email/SMS account + a coupon (only you can create these —
  they live in *your* accounts, not in code)

---

## Piece 1 — Create the coupon (WooCommerce) · 5 min

1. WordPress admin → **Marketing → Coupons → Add coupon**.
2. Code: **`WELCOME10`**  ·  Discount type: **Percentage**  ·  Amount: **10**.
3. **Usage restriction** tab → tick **"Individual use only"**.
4. **Usage limits** tab → **Usage limit per user: 1** (so it's first-order only).
5. Save. (You can rename the code or change 10 → any number; just match it in the popup text.)

The popup and its emails will tell customers to use this code at checkout.

---

## Piece 2 — Connect the email (and text) list

Pick **one** provider. All have free tiers. **Omnisend** is the easiest for
doing email **and** text together; **Mailchimp** is the fastest for email-only.

### Option A — Omnisend (recommended: email + SMS + auto-coupon)

1. Create a free account at omnisend.com and install its **WooCommerce** plugin
   (Plugins → Add New → search "Omnisend").
2. In Omnisend, build a **Signup Form** (or Popup) with an **email field**, a
   **phone field**, and the **SMS consent** checkbox. Paste the copy/colors from
   `welcome-offer-popup.html` so it matches the brand (gold `#C8A24C`, ink
   `#0B1B33`, teal `#12877F`; fonts Newsreader + Manrope). Omnisend hosts and
   shows this form for you — you can skip the Elementor step below.
3. Automations → **Welcome** → have it **email (and text) the coupon `WELCOME10`**
   to every new subscriber. Turn it on.
4. Done — Omnisend handles the list, the texts (STOP/HELP compliance included),
   and the coupon delivery.

> Prefer to keep the exact popup in this file instead of Omnisend's form?
> Use Option B for email now; texts still need a provider like Omnisend.

### Option B — Mailchimp (email works with the popup in this file, no plugin)

1. Create a free Mailchimp account → **Audience**.
2. Audience → **Signup forms → Embedded form**. In the generated code, copy two things:
   - the `<form action="https://xxxxx.us21.list-manage.com/subscribe/post?u=...&id=...">` **URL**
   - the hidden field near the bottom: `<input type="text" name="b_XXXXXXXX_YYYYYYYY" ...>` — copy that **name**.
3. Open `welcome-offer-popup.html` and replace:
   - `PASTE_YOUR_MAILCHIMP_POST_URL_HERE` → the form **action URL**
   - `b_REPLACE_WITH_YOUR_MAILCHIMP_HIDDEN_FIELD` → the **hidden field name** you copied
   - (Make sure your Mailchimp audience has a **Phone** field so the `PHONE` value is saved.)
4. Mailchimp → **Automations → Welcome new subscribers** → send an email containing
   the code **`WELCOME10`**. Turn it on.
5. Email now works end-to-end. **Texts:** Mailchimp SMS is US-only/add-on — if you
   want real texting, add Omnisend (Option A) later for the phone numbers.

---

## Piece 3 — Show the popup on the site (Elementor) · 5 min

*(Skip if you used Omnisend's hosted form in Option A.)*

1. Elementor → **Templates → Popups → Add New**. Name it "Welcome Offer".
2. Drag in an **HTML** widget.
3. Open `welcome-offer-popup.html`, copy everything **between** the two comment
   lines `PASTE FROM HERE …` and `PASTE TO HERE`, and paste it into the HTML widget.
4. Publish → set **Conditions:** Entire site. **Triggers:** on page load after
   3–5s (or on exit intent). **Advanced Rules:** show up to once every few days
   and hide for logged-in users, so it isn't naggy.
5. The popup's × button already closes the Elementor popup.

---

## Notes

- **Change the discount %:** edit `WELCOME10`/`10%`/`10% Off` in the popup text
  (3 spots) and use a matching coupon amount.
- **Compliance:** the SMS consent language (recurring automated messages, "consent
  is not a condition of purchase," STOP/HELP, Privacy/Terms links) is required for
  text marketing — keep it. Point the `/privacy-policy/` and `/terms/` links at your
  real pages. The **"For Research Purposes Only. Not for human use."** line stays.
- **Logo** is embedded in the file so it can't break; swap the `src` for a hosted
  URL if you prefer a smaller file.
- The popup validates the email, requires a phone only when the text box is ticked,
  and shows a "check your inbox" success screen after submit.
