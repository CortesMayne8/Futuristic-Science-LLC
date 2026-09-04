<?php
/**
 * Futuristic Science — Cart & Checkout Polish v1.0
 * ------------------------------------------------
 * Fixes two things that were cheapening the cart:
 *
 *   1. The trust badges ("Secure checkout" / "COA verified" / "Ships from USA")
 *      were rendering as three black bars with grey text — a dark chip style
 *      leaking onto a cream page. They become cream-and-gold pills with ink
 *      text and a teal mark.
 *   2. Low-contrast, low-craft summary chrome: a pale-gold TOTAL on cream, a
 *      heavy black rule, a washed-out white-on-tan CTA, a coupon button
 *      competing with the primary action.
 *
 * INSTALL (WPCode): Code Snippets → Add New → "Add Your Custom Code" → type: PHP Snippet
 *   → paste this file WITHOUT the first "<?php" line → Insertion: Auto Insert,
 *   Location: Run Everywhere → Activate.
 * OR: paste everything below the opening "<?php" line at the end of the
 *   Futuristic Science child theme's functions.php.
 *
 * Everything is scoped to the cart and checkout pages. Nothing else is touched.
 *
 * If the badges keep their old look after install, their markup sits outside
 * the scanned region — put their wrapper's selector in FS_CART_TRUST_SELECTOR
 * below and they will be picked up directly.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Optional escape hatch: a CSS selector matching each trust badge, used when
 * the automatic text match cannot reach them. Leave empty to rely on the scan.
 */
if ( ! defined( 'FS_CART_TRUST_SELECTOR' ) ) {
	define( 'FS_CART_TRUST_SELECTOR', '' );
}

function fs_cart_polish_active() {
	return function_exists( 'is_cart' ) && ( is_cart() || is_checkout() );
}

add_action( 'wp_head', 'fs_cart_polish_css', 99 );
function fs_cart_polish_css() {
	if ( ! fs_cart_polish_active() ) { return; }
	?>
	<style id="fs-cart-polish-css">
	/* ============ Futuristic Science — Cart & Checkout Polish ============ */
	.woocommerce-cart, .woocommerce-checkout{
		--fs-gold:#C8A24C; --fs-gold-deep:#8F6E2B; --fs-gold-light:#FBF6E9;
		--fs-ink:#0B1B33; --fs-ink-deep:#08111F; --fs-teal:#12877F;
		--fs-line:rgba(11,27,51,.10); --fs-muted:#6B7686;
	}

	/* ---------- 1. Trust badges: black bars → cream/gold pills ---------- */
	/* .fs-trust is applied by the script below to whatever element currently
	   holds each badge, so this works regardless of the original markup. */
	.woocommerce-cart .fs-trust,
	.woocommerce-checkout .fs-trust{
		display:inline-flex !important; align-items:center !important; gap:8px !important;
		background:linear-gradient(180deg,#FFFFFF 0%, var(--fs-gold-light) 100%) !important;
		background-color:#FFFFFF !important;
		border:1px solid rgba(200,162,76,.42) !important;
		border-radius:999px !important;
		padding:9px 16px !important;
		color:var(--fs-ink) !important;
		font-size:12.5px !important; font-weight:700 !important;
		letter-spacing:.01em !important; line-height:1.2 !important;
		text-shadow:none !important; text-transform:none !important;
		box-shadow:0 1px 2px rgba(11,27,51,.06), inset 0 1px 0 rgba(255,255,255,.9) !important;
		white-space:nowrap !important;
	}
	/* Kill any dark chip styling that survived on the inner nodes. */
	.woocommerce-cart .fs-trust *,
	.woocommerce-checkout .fs-trust *{
		background:none !important; background-color:transparent !important;
		color:inherit !important; text-shadow:none !important; box-shadow:none !important;
		border:0 !important;
	}
	.woocommerce-cart .fs-trust svg,
	.woocommerce-checkout .fs-trust svg{
		width:16px !important; height:16px !important; flex:0 0 16px !important;
		color:var(--fs-teal) !important; stroke:var(--fs-teal) !important;
		opacity:1 !important;
	}
	.woocommerce-cart .fs-trust-row,
	.woocommerce-checkout .fs-trust-row{
		display:flex !important; flex-wrap:wrap !important;
		justify-content:center !important; align-items:center !important;
		gap:10px !important; margin:20px 0 16px !important; padding:0 !important;
		background:none !important; border:0 !important;
	}

	/* ---------- 2. Order summary typography ---------- */
	.woocommerce-cart .cart_totals table.shop_table th,
	.woocommerce-cart .cart_totals table.shop_table td{
		border:0 !important; padding:13px 0 !important;
		border-bottom:1px solid var(--fs-line) !important;
		vertical-align:middle !important;
	}
	.woocommerce-cart .cart_totals table.shop_table th{
		font-size:12px !important; font-weight:700 !important;
		letter-spacing:.12em !important; text-transform:uppercase !important;
		color:var(--fs-muted) !important; text-align:left !important;
	}
	.woocommerce-cart .cart_totals table.shop_table td{
		text-align:right !important; font-weight:600 !important;
		color:var(--fs-ink) !important; font-variant-numeric:tabular-nums !important;
	}
	/* The total was pale gold on cream — barely readable. Deep gold, one size up. */
	.woocommerce-cart .cart_totals table.shop_table tr.order-total th{
		font-size:13px !important; letter-spacing:.14em !important;
		color:var(--fs-ink) !important;
	}
	.woocommerce-cart .cart_totals table.shop_table tr.order-total td,
	.woocommerce-cart .cart_totals table.shop_table tr.order-total .amount{
		font-size:26px !important; font-weight:800 !important;
		color:var(--fs-gold-deep) !important; letter-spacing:-.01em !important;
	}
	.woocommerce-cart .cart_totals table.shop_table tr.order-total th,
	.woocommerce-cart .cart_totals table.shop_table tr.order-total td{
		border-bottom:0 !important; border-top:1px solid var(--fs-line) !important;
		padding-top:18px !important;
	}
	.woocommerce-cart .cart_totals .woocommerce-shipping-destination{
		font-size:13px !important; color:var(--fs-muted) !important;
	}
	.woocommerce-cart .cart_totals .shipping-calculator-button{
		color:var(--fs-teal) !important; font-weight:700 !important;
		text-decoration:none !important;
		border-bottom:1px solid rgba(18,135,127,.35) !important;
	}
	.woocommerce-cart #shipping_method li{
		display:flex !important; align-items:center !important; gap:10px !important;
		padding:11px 14px !important; margin:0 0 8px !important;
		border:1px solid var(--fs-line) !important; border-radius:12px !important;
		background:#fff !important;
	}
	.woocommerce-cart #shipping_method li label{
		display:flex !important; width:100% !important;
		justify-content:space-between !important; gap:12px !important;
		font-size:14px !important; color:var(--fs-ink) !important; margin:0 !important;
	}

	/* ---------- 3. Primary CTA: gold with ink type, per the brand button ---------- */
	.woocommerce-cart .wc-proceed-to-checkout a.checkout-button,
	.woocommerce-checkout #place_order{
		display:block !important; width:100% !important; box-sizing:border-box !important;
		text-align:center !important; text-decoration:none !important;
		background:linear-gradient(135deg,#E0C277 0%, #C8A24C 45%, #AE8838 100%) !important;
		color:var(--fs-ink-deep) !important;
		border:1px solid rgba(143,110,43,.55) !important; border-radius:14px !important;
		padding:17px 24px !important;
		font-size:16px !important; font-weight:800 !important; letter-spacing:.02em !important;
		text-transform:none !important; text-shadow:none !important;
		box-shadow:0 8px 24px rgba(200,162,76,.32) !important;
		transition:transform .18s cubic-bezier(.22,1,.36,1), box-shadow .18s ease !important;
	}
	.woocommerce-cart .wc-proceed-to-checkout a.checkout-button:hover,
	.woocommerce-checkout #place_order:hover{
		transform:translateY(-1px) !important;
		box-shadow:0 10px 30px rgba(200,162,76,.45) !important;
	}

	/* ---------- 4. Coupon: secondary, so it stops competing with checkout ---------- */
	.woocommerce-cart .coupon .button{
		background:#fff !important; color:var(--fs-ink) !important;
		border:1.5px solid rgba(11,27,51,.18) !important; border-radius:12px !important;
		font-weight:700 !important; box-shadow:none !important;
		padding:13px 20px !important; text-shadow:none !important;
	}
	.woocommerce-cart .coupon .button:hover{
		border-color:var(--fs-gold) !important; color:var(--fs-gold-deep) !important;
	}
	.woocommerce-cart .coupon #coupon_code{
		border:1px solid var(--fs-line) !important; border-radius:12px !important;
		padding:13px 16px !important; font-size:15px !important;
	}
	.woocommerce-cart .coupon #coupon_code:focus{
		border-color:var(--fs-gold) !important;
		box-shadow:0 0 0 3px rgba(200,162,76,.25) !important; outline:0 !important;
	}

	/* ---------- 5. Line item: product photo reads as product, not as a sticker ---------- */
	.woocommerce-cart .product-thumbnail img{
		border:0 !important; border-radius:14px !important;
		background:linear-gradient(180deg,#FFFFFF 0%,#F7F8FA 100%) !important;
		padding:6px !important; box-shadow:0 1px 3px rgba(11,27,51,.08) !important;
		object-fit:contain !important;
	}
	.woocommerce-cart td.product-name a{
		color:var(--fs-ink) !important; font-weight:700 !important;
		text-decoration:none !important;
	}
	.woocommerce-cart td.product-name a:hover{ color:var(--fs-gold-deep) !important; }
	.woocommerce-cart .product-remove a.remove{
		width:26px !important; height:26px !important; line-height:24px !important;
		font-size:16px !important; color:var(--fs-muted) !important;
		background:#fff !important; border:1px solid var(--fs-line) !important;
		box-shadow:none !important;
	}
	.woocommerce-cart .product-remove a.remove:hover{
		background:#FBE7E5 !important; color:#C8403A !important; border-color:#F0C8C5 !important;
	}

	@media (max-width:640px){
		.woocommerce-cart .fs-trust, .woocommerce-checkout .fs-trust{
			font-size:12px !important; padding:8px 13px !important;
		}
		.woocommerce-cart .cart_totals .order-total td,
		.woocommerce-cart .cart_totals .order-total .amount{ font-size:23px !important; }
	}
	@media (prefers-reduced-motion:reduce){
		.woocommerce-cart .wc-proceed-to-checkout a.checkout-button,
		.woocommerce-checkout #place_order{ transition:none !important; }
	}
	</style>
	<?php
}

add_action( 'wp_footer', 'fs_cart_polish_js', 99 );
function fs_cart_polish_js() {
	if ( ! fs_cart_polish_active() ) { return; }
	$manual = wp_json_encode( (string) FS_CART_TRUST_SELECTOR );
	?>
	<script id="fs-cart-polish-js">
	(function(){
		/* The badges are styled by whatever built them, so match them by their
		   wording and hand them our own class. Both languages, since the store
		   ships EN/ES copy. */
		var PHRASES = [
			'secure checkout', 'coa verified', 'ships from usa', 'ships from the usa',
			'third-party tested', 'third party tested',
			'pago seguro', 'coa verificado', 'envios desde ee uu', 'envios desde estados unidos',
			'probado por terceros'
		];
		var MANUAL = <?php echo $manual; ?>;

		function norm(s){
			return (s || '')
				.replace(/\s+/g, ' ')
				.trim()
				.toLowerCase()
				.replace(/[.,·•!]/g, '')
				.replace(/\s+/g, ' ')
				.trim();
		}
		function isBadge(text){ return PHRASES.indexOf(norm(text)) !== -1; }

		function promote(el){
			/* Climb to the outermost node whose text is still just this badge:
			   that wrapper is the pill, and it carries the icon with it. */
			var phrase = norm(el.textContent);
			var badge = el;
			while (badge.parentElement
				&& badge.parentElement !== document.body
				&& norm(badge.parentElement.textContent) === phrase) {
				badge = badge.parentElement;
			}
			badge.classList.add('fs-trust');
			if (badge.parentElement) { badge.parentElement.classList.add('fs-trust-row'); }
		}

		function apply(){
			if (MANUAL) {
				document.querySelectorAll(MANUAL).forEach(promote);
			}
			var scope = document.querySelector('.woocommerce, .wc-block-cart, main') || document.body;
			var nodes = scope.querySelectorAll('span, div, li, p, small, a, strong, em, td');
			for (var i = 0; i < nodes.length; i++) {
				var el = nodes[i];
				if (el.classList.contains('fs-trust')) { continue; }
				if (!isBadge(el.textContent)) { continue; }
				/* Only the innermost node carrying the phrase starts the climb. */
				var nested = false;
				for (var c = 0; c < el.children.length; c++) {
					if (isBadge(el.children[c].textContent)) { nested = true; break; }
				}
				if (!nested) { promote(el); }
			}
		}

		apply();
		document.addEventListener('DOMContentLoaded', apply);
		/* Woo repaints the totals over AJAX on quantity, coupon and shipping changes. */
		if (window.jQuery) {
			jQuery(document.body).on(
				'updated_cart_totals updated_checkout updated_shipping_method wc_fragments_refreshed',
				apply
			);
		}
		if (window.MutationObserver) {
			var pending = null;
			new MutationObserver(function(){
				clearTimeout(pending);
				pending = setTimeout(apply, 120);
			}).observe(document.body, { childList: true, subtree: true });
		}
	})();
	</script>
	<?php
}
