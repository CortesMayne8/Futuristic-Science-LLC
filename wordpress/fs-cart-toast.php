<?php
/**
 * Futuristic Science — Branded "Added to Cart" Toast v1.0
 * -------------------------------------------------------
 * Rich toast card on desktop (product image, name, price, cart subtotal,
 * View Cart + Checkout buttons). Compact bar on mobile.
 *
 * INSTALL (WPCode): Code Snippets → Add New → "Add Your Custom Code" → type: PHP Snippet
 *   → paste this file WITHOUT the first "<?php" line → Insertion: Auto Insert,
 *   Location: Run Everywhere → Activate.
 * OR: paste everything below the opening "<?php" line at the end of the
 *   Futuristic Science child theme's functions.php (Appearance → Theme File Editor).
 *
 * IMPORTANT: Deactivate/remove the old small popup so they don't both show.
 * To find it: Plugins list (look for "side cart" / "added to cart notification"),
 * or WPCode → Snippets, or Elementor → Popups. If you can't find it, uncomment
 * the FS_HIDE_OLD_TOAST rule near the top of the CSS and set its selector.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_footer', 'fs_cart_toast_output', 99 );
function fs_cart_toast_output() {
	if ( ! class_exists( 'WooCommerce' ) || is_cart() || is_checkout() ) { return; }
	$cart_url     = esc_url( wc_get_cart_url() );
	$checkout_url = esc_url( wc_get_checkout_url() );
	?>
	<style id="fs-cart-toast-css">
	/* ============ Futuristic Science Cart Toast ============ */
	/* If the old popup is plugin-based and you can't disable it, target it here:
	.OLD-POPUP-SELECTOR { display: none !important; }  */

	#fs-toast{
		--fs-gold:#C8A24C; --fs-gold-hover:#B8933F; --fs-ink:#0B1B33;
		--fs-teal:#12877F; --fs-border:#E3E7ED; --fs-gray:#F7F8FA;
		position:fixed; right:24px; bottom:24px; z-index:999999;
		width:384px; max-width:calc(100vw - 32px);
		background:#fff; border:1px solid var(--fs-border); border-radius:14px;
		box-shadow:0 12px 40px rgba(11,27,51,.22), 0 2px 8px rgba(11,27,51,.10);
		font-family:'Manrope',system-ui,sans-serif; color:var(--fs-ink);
		opacity:0; transform:translateY(16px) scale(.98); pointer-events:none;
		transition:opacity .28s ease, transform .28s ease; overflow:hidden;
	}
	#fs-toast.fs-show{ opacity:1; transform:translateY(0) scale(1); pointer-events:auto; }

	.fs-toast-head{ display:flex; align-items:center; gap:10px; padding:14px 16px 0; }
	.fs-toast-check{
		width:26px; height:26px; flex:0 0 26px; border-radius:50%;
		background:var(--fs-teal); color:#fff; display:flex; align-items:center; justify-content:center;
	}
	.fs-toast-check svg{ width:14px; height:14px; }
	.fs-toast-title{
		font-size:12px; font-weight:800; letter-spacing:.14em; text-transform:uppercase;
	}
	.fs-toast-close{
		margin-left:auto; background:none; border:0; cursor:pointer; padding:6px;
		color:#8A94A6; line-height:0; border-radius:8px;
	}
	.fs-toast-close:hover{ background:var(--fs-gray); color:var(--fs-ink); }

	.fs-toast-product{ display:flex; align-items:center; gap:14px; padding:14px 16px; }
	.fs-toast-img{
		width:64px; height:64px; flex:0 0 64px; border-radius:10px; object-fit:cover;
		border:1px solid var(--fs-border); background:var(--fs-gray);
	}
	.fs-toast-name{
		font-family:'Newsreader',Georgia,serif; font-size:18px; font-weight:600;
		line-height:1.25; margin:0 0 4px; display:-webkit-box; -webkit-line-clamp:2;
		-webkit-box-orient:vertical; overflow:hidden;
	}
	.fs-toast-price{ font-family:'IBM Plex Mono',monospace; font-size:14px; color:var(--fs-gold-hover); font-weight:500; }

	.fs-toast-subtotal{
		display:flex; justify-content:space-between; align-items:center;
		margin:0 16px; padding:10px 0; border-top:1px solid var(--fs-border);
		font-size:13px; font-weight:600; color:#5A6577;
	}
	.fs-toast-subtotal b{ font-family:'IBM Plex Mono',monospace; font-size:15px; color:var(--fs-ink); }

	.fs-toast-actions{ display:flex; gap:10px; padding:4px 16px 16px; }
	.fs-toast-btn{
		flex:1; text-align:center; padding:12px 10px; border-radius:10px;
		font-size:14px; font-weight:700; text-decoration:none !important;
		transition:background .15s ease, color .15s ease; line-height:1.2;
	}
	.fs-toast-btn-outline{ border:1.5px solid var(--fs-ink); color:var(--fs-ink) !important; background:#fff; }
	.fs-toast-btn-outline:hover{ background:var(--fs-ink); color:#fff !important; }
	.fs-toast-btn-gold{ background:var(--fs-gold); color:var(--fs-ink) !important; border:1.5px solid var(--fs-gold); }
	.fs-toast-btn-gold:hover{ background:var(--fs-gold-hover); border-color:var(--fs-gold-hover); }
	.fs-toast-count{
		display:inline-flex; align-items:center; justify-content:center; margin-left:6px;
		min-width:20px; height:20px; padding:0 6px; border-radius:10px;
		background:var(--fs-ink); color:#fff; font-size:11px; font-weight:800; vertical-align:middle;
	}

	.fs-toast-progress{ height:3px; background:var(--fs-border); }
	.fs-toast-progress span{ display:block; height:100%; width:100%; background:var(--fs-gold); transform-origin:left; }
	#fs-toast.fs-show .fs-toast-progress span{ animation:fsToastBar var(--fs-duration,6s) linear forwards; }
	#fs-toast:hover .fs-toast-progress span{ animation-play-state:paused; }
	@keyframes fsToastBar{ from{ transform:scaleX(1);} to{ transform:scaleX(0);} }

	/* ---------- Mobile: keep it compact ---------- */
	@media (max-width:640px){
		#fs-toast{ right:12px; left:12px; bottom:12px; width:auto; border-radius:12px; }
		.fs-toast-head{ display:none; }
		.fs-toast-product{ padding:12px 44px 12px 12px; gap:12px; }
		.fs-toast-img{ width:44px; height:44px; flex-basis:44px; border-radius:8px; }
		.fs-toast-name{ font-size:15px; -webkit-line-clamp:1; margin-bottom:2px; }
		.fs-toast-price{ font-size:12px; }
		.fs-toast-price::before{ content:"Added to cart · "; font-family:'Manrope',sans-serif; color:var(--fs-teal); font-weight:700; }
		.fs-toast-subtotal{ display:none; }
		.fs-toast-actions{ padding:0 12px 12px; }
		.fs-toast-btn-outline{ display:none; }
		.fs-toast-btn{ padding:11px 10px; }
		.fs-toast-close{ position:absolute; top:8px; right:8px; }
	}
	@media (prefers-reduced-motion:reduce){
		#fs-toast{ transition:opacity .2s ease; transform:none; }
	}
	</style>

	<div id="fs-toast" role="status" aria-live="polite">
		<div class="fs-toast-head">
			<span class="fs-toast-check" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
			</span>
			<span class="fs-toast-title">Added to your cart</span>
			<button type="button" class="fs-toast-close" aria-label="Close notification">
				<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
			</button>
		</div>
		<div class="fs-toast-product">
			<img class="fs-toast-img" src="" alt="" loading="lazy">
			<div>
				<p class="fs-toast-name"></p>
				<span class="fs-toast-price"></span>
			</div>
		</div>
		<div class="fs-toast-subtotal"><span>Cart subtotal</span><b></b></div>
		<div class="fs-toast-actions">
			<a class="fs-toast-btn fs-toast-btn-outline" href="<?php echo $cart_url; ?>">View Cart<span class="fs-toast-count" hidden></span></a>
			<a class="fs-toast-btn fs-toast-btn-gold" href="<?php echo $checkout_url; ?>">Checkout</a>
		</div>
		<div class="fs-toast-progress"><span></span></div>
	</div>

	<script id="fs-cart-toast-js">
	(function(){
		var DURATION = 6000; // ms visible; hover pauses
		var $ = window.jQuery; if(!$) return;
		var toast = document.getElementById('fs-toast'); if(!toast) return;
		var hideTimer = null;

		function el(sel){ return toast.querySelector(sel); }
		function text(node){ return node ? (node.textContent||'').replace(/\s+/g,' ').trim() : ''; }

		function show(data){
			el('.fs-toast-name').textContent = data.name || 'Item added';
			var img = el('.fs-toast-img');
			if(data.img){ img.src = data.img; img.alt = data.name || ''; img.style.display=''; }
			else { img.style.display='none'; }
			el('.fs-toast-price').textContent = data.price || '';
			var sub = el('.fs-toast-subtotal');
			if(data.subtotal){ sub.style.display=''; sub.querySelector('b').textContent = data.subtotal; }
			else { sub.style.display='none'; }
			var count = el('.fs-toast-count');
			if(data.count){ count.hidden=false; count.textContent=data.count; } else { count.hidden=true; }

			// restart progress animation
			var bar = el('.fs-toast-progress span');
			toast.style.setProperty('--fs-duration', (DURATION/1000)+'s');
			bar.style.animation='none'; void bar.offsetWidth; bar.style.animation='';

			toast.classList.add('fs-show');
			clearTimeout(hideTimer);
			hideTimer = setTimeout(hide, DURATION);
		}
		function hide(){ toast.classList.remove('fs-show'); clearTimeout(hideTimer); }

		el('.fs-toast-close').addEventListener('click', hide);
		document.addEventListener('keydown', function(e){ if(e.key==='Escape') hide(); });
		// pause auto-hide while hovered, resume on leave
		toast.addEventListener('mouseenter', function(){ clearTimeout(hideTimer); });
		toast.addEventListener('mouseleave', function(){ hideTimer = setTimeout(hide, 2500); });

		// Pull cart count + subtotal out of WooCommerce mini-cart fragments
		function cartInfoFromFragments(fragments){
			var info = { count:'', subtotal:'', lastName:'', lastImg:'' };
			if(!fragments) return info;
			$.each(fragments, function(_, html){
				if(typeof html !== 'string') return;
				var $h = $('<div>').html(html);
				var t = $h.find('.woocommerce-mini-cart__total .amount').last();
				if(t.length) info.subtotal = text(t[0]);
				var items = $h.find('.woocommerce-mini-cart-item');
				if(items.length){
					var qty = 0;
					items.each(function(){
						var q = $(this).find('.quantity').text().match(/(\d+)\s*×/);
						qty += q ? parseInt(q[1],10) : 1;
					});
					info.count = qty;
					var last = items.first(); // Woo prepends newest in most themes; fallback only
					info.lastName = text(last.find('a').not('.remove')[0]);
					info.lastImg  = last.find('img').attr('src') || '';
				}
				var c = $h.find('.cart-contents-count, .count').first();
				if(c.length && text(c[0]).match(/^\d+/)) info.count = parseInt(text(c[0]),10);
			});
			return info;
		}

		// AJAX add-to-cart (shop/archive buttons and AJAX-enabled product pages)
		$(document.body).on('added_to_cart', function(e, fragments, cartHash, $button){
			var name='', img='', price='';
			if($button && $button.length){
				var $card = $button.closest('.product, li.product');
				if($card.length){
					name  = text($card.find('.woocommerce-loop-product__title, h2, h3').first()[0]);
					img   = $card.find('img').first().attr('src') || '';
					price = text($card.find('.price').first()[0]);
				}
			}
			// Single product page fallback
			if(!name){
				name  = text(document.querySelector('.product_title'));
				img   = ($('.woocommerce-product-gallery img').first().attr('src')) || '';
				price = text(document.querySelector('.summary .price, .elementor-widget-woocommerce-product-price'));
			}
			var info = cartInfoFromFragments(fragments);
			if(!name){ name = info.lastName; img = img || info.lastImg; }
			show({ name:name, img:img, price:price, subtotal:info.subtotal, count:info.count });
		});

		// Non-AJAX adds (page reload with "has been added to your cart" notice)
		$(function(){
			var $notice = $('.woocommerce-message').filter(function(){
				return /added to your cart/i.test($(this).text());
			}).first();
			if(!$notice.length) return;
			$notice.hide();
			var m = $notice.text().match(/[“"]?(.+?)[”"]?\s+has been added to your cart/i);
			var name = m ? m[1].replace(/^\d+\s*×\s*/,'') : '';
			var img  = ($('.woocommerce-product-gallery img').first().attr('src')) || '';
			var price= text(document.querySelector('.summary .price'));
			show({ name:name, img:img, price:price, subtotal:'', count:'' });
		});
	})();
	</script>
	<?php
}
