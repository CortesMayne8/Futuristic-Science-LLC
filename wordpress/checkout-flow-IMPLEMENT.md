# Implementing the multi-step checkout flow

The prototype (`checkout-flow-prototype.html`) is the **design**. To make your
live WooCommerce checkout look and behave like it, you add a **multi-step
checkout plugin** (the engine) and then style it to match (I do that part).

Do NOT try to replace WooCommerce's checkout by pasting the prototype HTML —
it can't process orders, shipping, tax, coupons, or your payment gateways.

---

## Step 1 — Pick a multi-step checkout plugin

| Plugin | Cost | Why |
|---|---|---|
| **CheckoutWC** (recommended) | Paid (~$99/yr) | Purpose-built. Gives a real multi-step checkout, keeps every WooCommerce gateway working, and is very styleable — I can make it look just like the prototype. Least risk, best result. |
| **FunnelKit (Funnel Builder)** | Free + Pro | Has a checkout builder with steps. Good if you also want upsells/order bumps later. |
| **Multi-Step Checkout for WooCommerce** (Silkypress) | Free | Splits the existing checkout into steps with a progress bar. Lower polish, but $0 and safe to try first. |

**My recommendation:** start with **CheckoutWC** if you can spend a little — the
result matches the prototype most closely with the least fuss. If you want to
try free first, install the Silkypress one and we'll style it.

## Step 2 — Turn on the multi-step layout

After installing, in the plugin's settings enable the **multi-step / stepped**
checkout layout (each plugin has a toggle or template for this). Set the steps to
**Information/Shipping → Shipping/Delivery → Payment** to mirror the prototype.

## Step 3 — Set up the delivery options (WooCommerce, native)

WooCommerce → **Settings → Shipping → Add shipping zone** (e.g. "United States"),
then add these **Flat rate** methods so the Delivery step has real options:

1. **Standard Shipping** — cost `7.99`
2. **Two-Day Shipping** — cost `14.99`
3. **Overnight Shipping** — cost `39.99`

For **"Free on orders over $150,"** add a **Free shipping** method to the same
zone with requirement *"A minimum order amount"* = `150`. (Native WooCommerce
shows this as its own "Free shipping" option. Making *Two-Day specifically*
become free over $150 needs a conditional-shipping plugin or a small code
snippet — tell me if you want that exact behavior and I'll write the snippet.)

> **Arrival dates** ("Arrives Thu, Jul 16") aren't native. If you want them,
> add a free estimated-delivery plugin like *"Order Delivery Date for
> WooCommerce."* Optional — the flow works fine without them.

## Step 4 — I style it to match the prototype

Once the plugin is installed and multi-step is on:

1. Send me a screenshot of the new checkout **and** tell me which plugin you
   chose (the CSS targets each plugin's own classes, so I tailor it to yours).
2. I'll give you a block of brand CSS — gold/ink/teal, the progress bar, the
   card-style delivery + payment options, the shipment-protection banner, and
   the gold "Place order" button — to paste into **Appearance → Customize →
   Additional CSS** (or the plugin's custom-CSS box).
3. We tweak from screenshots until it matches the prototype.

## What you get

A live checkout that looks like the prototype **and** actually takes orders —
real shipping/tax/coupons and your Zelle / Cash App / Bitcoin / BTCPay / Crypto
gateways, all intact. The `For Research Purposes Only. Not for human use.` notice
stays on the payment step.

---

### TL;DR
1. Install a multi-step checkout plugin (CheckoutWC recommended; a free one works too).
2. Enable its stepped layout; set the 3 shipping methods above.
3. Send me a screenshot + the plugin name → I hand you the brand CSS to make it match.
