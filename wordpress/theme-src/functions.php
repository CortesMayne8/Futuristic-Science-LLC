<?php
/**
 * Futuristic Science Child theme functions.
 * Loads the Hello Elementor parent styles, the brand child styles,
 * and the brand Google Fonts (Newsreader / Manrope / IBM Plex Mono).
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_enqueue_scripts', function () {
	// Parent (Hello Elementor) style
	wp_enqueue_style( 'hello-elementor-parent', get_template_directory_uri() . '/style.css', array(), null );
	// Brand Google Fonts
	wp_enqueue_style(
		'fs-google-fonts',
		'https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap',
		array(),
		null
	);
	// Child (brand) style — loaded last so it wins
	wp_enqueue_style( 'fs-child', get_stylesheet_uri(), array( 'hello-elementor-parent', 'fs-google-fonts' ), '1.8.1' );
	// Cart page: +/- quantity stepper enhancement
	if ( function_exists( 'is_cart' ) && is_cart() ) {
		wp_enqueue_script( 'fs-cart-fx', get_stylesheet_directory_uri() . '/cart-fx.js', array(), '1.8.1', true );
	}
}, 20 );

/**
 * Cart page: a small trust row just above the "Proceed to checkout" button.
 */
add_action( 'woocommerce_proceed_to_checkout', function () {
	$shield = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
	$badge  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>';
	$clock  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
	echo '<div class="fs-cart-trust">'
		. '<span class="fs-trust">' . $shield . esc_html__( 'Secure checkout', 'woocommerce' ) . '</span>'
		. '<span class="fs-trust">' . $badge . 'COA verified</span>'
		. '<span class="fs-trust">' . $clock . 'Ships from USA</span>'
		. '</div>';
}, 15 );

/**
 * ---------------------------------------------------------------------------
 * Branded transactional email (WooCommerce)
 * Fixes the sender name shown in the inbox and the broken header logo.
 * ---------------------------------------------------------------------------
 */

// Sender display name — appears as the "From" name in the inbox.
// (Was showing the mailer default "Email Deliverability".)
add_filter( 'woocommerce_email_from_name', function () {
	return 'Futuristic Science';
}, 99 );

// Fallback for any non-WooCommerce site mail so the brand name is consistent.
add_filter( 'wp_mail_from_name', function () {
	return 'Futuristic Science';
}, 99 );

// Email header logo — serve the brand logo bundled in this theme so the URL
// always resolves to a valid, public asset (the previous header image 404'd,
// which is why it rendered as a broken-image icon).
add_filter( 'option_woocommerce_email_header_image', function () {
	return get_stylesheet_directory_uri() . '/email-logo.png';
} );
add_filter( 'default_option_woocommerce_email_header_image', function () {
	return get_stylesheet_directory_uri() . '/email-logo.png';
} );

// Keep the header logo a sensible size and centered on the dark header.
add_filter( 'woocommerce_email_styles', function ( $css ) {
	$css .= "\n#template_header_image img{ max-width:280px; width:auto; height:auto; margin:0 auto; display:block; }\n";
	return $css;
}, 20 );

/**
 * ---------------------------------------------------------------------------
 * Mini-cart / side-cart price breakdown
 * The slide-out cart showed a single "Subtotal" that silently bundled
 * shipping and tax, so the number didn't match the visible line items.
 * Replace the lone subtotal in WooCommerce's mini-cart with an itemized
 * Subtotal / Shipping / Tax / Total breakdown so the price is transparent.
 *
 * This targets the native WooCommerce mini-cart (used by the Elementor
 * Menu Cart widget, the classic cart widget, and side-cart plugins that
 * render woocommerce_mini_cart()). It degrades gracefully everywhere else.
 * ---------------------------------------------------------------------------
 */
add_action( 'after_setup_theme', function () {
	// Drop WooCommerce's default single "Subtotal" line in the mini-cart...
	remove_action( 'woocommerce_widget_shopping_cart_total', 'woocommerce_widget_shopping_cart_subtotal', 10 );
	// ...and print the full breakdown in its place.
	add_action( 'woocommerce_widget_shopping_cart_total', 'fs_minicart_breakdown', 10 );
} );

if ( ! function_exists( 'fs_minicart_breakdown' ) ) {
	/**
	 * Render an itemized total for the mini-cart. Uses <span>s (not block
	 * elements) because WooCommerce wraps this hook inside a <p>.
	 */
	function fs_minicart_breakdown() {
		if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
			return;
		}
		$cart = WC()->cart;

		$row = function ( $label, $value, $extra = '' ) {
			printf(
				'<span class="fs-mc-row%1$s"><span class="fs-mc-label">%2$s</span><span class="fs-mc-val">%3$s</span></span>',
				$extra ? ' ' . esc_attr( $extra ) : '',
				esc_html( $label ),
				wp_kses_post( $value )
			);
		};

		echo '<span class="fs-minicart-breakdown">';

		// Items subtotal (before shipping/tax).
		$row( __( 'Subtotal', 'woocommerce' ), $cart->get_cart_subtotal() );

		// Shipping — show the amount if it's been calculated, otherwise be
		// honest that it's determined once an address is entered.
		if ( $cart->needs_shipping() ) {
			if ( $cart->show_shipping() && WC()->shipping() ) {
				$row( __( 'Shipping', 'woocommerce' ), $cart->get_cart_shipping_total() );
			} else {
				$row( __( 'Shipping', 'woocommerce' ), __( 'Calculated at checkout', 'woocommerce' ), 'fs-mc-muted' );
			}
		}

		// Tax — only as a separate line when prices are shown excluding tax.
		if ( wc_tax_enabled() && ! $cart->display_prices_including_tax() ) {
			$tax_total = (float) $cart->get_taxes_total();
			if ( $tax_total > 0 ) {
				$row( __( 'Tax', 'woocommerce' ), wc_price( $tax_total ) );
			}
		}

		// Grand total (this is the figure the checkout button charges).
		$row( __( 'Total', 'woocommerce' ), $cart->get_total(), 'fs-mc-total' );

		echo '</span>';
	}
}

// Optional: expose the brand palette to the block editor.
add_action( 'after_setup_theme', function () {
	add_theme_support( 'editor-color-palette', array(
		array( 'name' => 'Gold',  'slug' => 'fs-gold', 'color' => '#C8A24C' ),
		array( 'name' => 'Ink',   'slug' => 'fs-ink',  'color' => '#0B1B33' ),
		array( 'name' => 'Teal',  'slug' => 'fs-teal', 'color' => '#12877F' ),
		array( 'name' => 'White', 'slug' => 'fs-white','color' => '#FFFFFF' ),
	) );
} );

/**
 * ---------------------------------------------------------------------------
 * Checkout hard gate — 21+ / qualified-researcher acknowledgment.
 * Required checkbox just above "Place order"; the order cannot be placed
 * until it is ticked, and the acknowledgment is saved to the order.
 * ---------------------------------------------------------------------------
 */
add_action( 'woocommerce_review_order_before_submit', function () {
	$checked = ( WC()->checkout() && WC()->checkout()->get_value( 'fs_age_researcher' ) ) ? true : false;
	woocommerce_form_field( 'fs_age_researcher', array(
		'type'     => 'checkbox',
		'class'    => array( 'fs-gate-field form-row' ),
		'required' => true,
		'label'    => 'I confirm I am 21 years of age or older and a qualified researcher, and that these products are purchased strictly for laboratory research use only — not for human or animal consumption.',
	), $checked );
}, 9 );

add_action( 'woocommerce_checkout_process', function () {
	if ( empty( $_POST['fs_age_researcher'] ) ) {
		wc_add_notice( __( 'Please confirm you are 21 or older and a qualified researcher before placing your order.', 'woocommerce' ), 'error' );
	}
} );

// Save the acknowledgment on the order (HPOS-safe).
add_action( 'woocommerce_checkout_create_order', function ( $order ) {
	if ( ! empty( $_POST['fs_age_researcher'] ) ) {
		$order->update_meta_data( '_fs_age_researcher_ack', 'yes' );
	}
}, 10, 1 );

/**
 * ---------------------------------------------------------------------------
 * Front-of-site SOFT age/researcher gate (browse-friendly).
 * Printed site-wide in code so it doesn't depend on an Elementor popup.
 * One checkbox + Enter; remembers the visitor (localStorage) so it shows
 * once. This is the light acknowledgment — the enforceable gate is at
 * checkout (see the fs_age_researcher field above).
 *
 * NOTE: if an OLD Elementor age-gate popup still exists, unpublish it so
 * this is the only gate shown.
 * ---------------------------------------------------------------------------
 */
add_action( 'wp_body_open', function () {
	if ( is_admin() ) { return; }
	if ( isset( $_GET['elementor-preview'] ) ) { return; } // don't run in the Elementor editor
	$logo = esc_url( get_stylesheet_directory_uri() . '/gate-logo.png' );
	?>
<div class="fs-gate-overlay" id="fsGate" role="dialog" aria-modal="true" aria-label="Age and research verification">
  <div class="fs-gate-card">
    <span class="fs-gate-bar"></span>
    <img class="fs-gate-logo" src="<?php echo $logo; ?>" alt="Futuristic Science — Research Peptides">
    <span class="fs-gate-eyebrow">Age &amp; Research Verification</span>
    <h2 class="fs-gate-title">Confirm before you enter.</h2>
    <p class="fs-gate-sub">This site offers <strong>research-use-only</strong> materials. Please confirm the statement below to browse.</p>
    <label class="fs-gate-check">
      <input type="checkbox" id="fsGateAgree">
      <span>I am <strong>21 years of age or older</strong> and a <strong>qualified researcher</strong>, and I understand these products are for laboratory research use only &mdash; not for human or animal consumption.</span>
    </label>
    <button type="button" class="fs-gate-enter" id="fsGateEnter" disabled>Enter site</button>
    <button type="button" class="fs-gate-leave" id="fsGateLeave">I do not qualify &mdash; leave</button>
    <p class="fs-gate-fine">For Research Purposes Only. Not for human use.</p>
  </div>
</div>
<style>
  .fs-gate-overlay{ position:fixed; inset:0; z-index:2147483000; display:none;
    align-items:center; justify-content:center; padding:22px 14px;
    background:rgba(8,17,31,.72); -webkit-backdrop-filter:blur(4px); backdrop-filter:blur(4px);
    font-family:'Manrope',system-ui,-apple-system,sans-serif; }
  .fs-gate-overlay.on{ display:flex; }
  .fs-gate-card{ position:relative; width:100%; max-width:460px; background:#fff; border-radius:22px;
    padding:32px 26px 26px; box-shadow:0 30px 80px rgba(8,17,31,.5); overflow:hidden; text-align:center; color:#0B1B33; }
  .fs-gate-bar{ position:absolute; top:0; left:0; right:0; height:5px; background:linear-gradient(90deg,#C8A24C,#E4C876 45%,#12877F); }
  .fs-gate-logo{ display:block; height:44px; width:auto; margin:6px auto 20px; }
  .fs-gate-eyebrow{ display:inline-block; background:#F7F1E2; color:#A07F35; font-weight:700; font-size:12px;
    letter-spacing:.15em; text-transform:uppercase; padding:8px 15px; border-radius:999px; margin-bottom:14px; }
  .fs-gate-title{ font-family:'Newsreader',Georgia,serif; font-weight:600; font-size:29px; line-height:1.12; margin:0 0 10px; }
  .fs-gate-sub{ font-size:15px; line-height:1.55; color:#4A5566; margin:0 0 20px; }
  .fs-gate-check{ display:flex; align-items:flex-start; gap:12px; text-align:left; background:#F7F8FA;
    border:1.5px solid #E3E7ED; border-radius:14px; padding:15px 16px; margin:0 0 18px; cursor:pointer; }
  .fs-gate-check:has(input:checked){ border-color:#C8A24C; background:#F7F1E2; }
  .fs-gate-check input{ width:22px; height:22px; margin:1px 0 0; flex:none; accent-color:#C8A24C; }
  .fs-gate-check span{ font-size:13.5px; line-height:1.5; font-weight:600; color:#0B1B33; }
  .fs-gate-enter{ width:100%; height:56px; border:none; border-radius:14px; cursor:pointer; color:#0B1B33;
    font-family:'Manrope',sans-serif; font-weight:800; font-size:16px;
    background:linear-gradient(135deg,#E2C879,#C8A24C 46%,#A67C2E); box-shadow:0 12px 28px rgba(200,162,76,.4); }
  .fs-gate-enter:disabled{ opacity:.45; cursor:not-allowed; box-shadow:none; }
  .fs-gate-leave{ display:inline-block; margin-top:14px; background:none; border:none; cursor:pointer;
    font-weight:600; font-size:13.5px; color:#8A93A0; text-decoration:underline; }
  .fs-gate-fine{ margin:16px 0 0; font-size:11.5px; line-height:1.5; color:#98A0AC; }
</style>
<script>
(function(){
  var KEY='fs-age-researcher-ok', g=document.getElementById('fsGate');
  if(!g){ return; }
  try{ if(localStorage.getItem(KEY)==='1'){ if(g.parentNode){ g.parentNode.removeChild(g); } return; } }catch(e){}
  document.documentElement.style.overflow='hidden';
  g.classList.add('on');
  var a=document.getElementById('fsGateAgree'), e=document.getElementById('fsGateEnter'), l=document.getElementById('fsGateLeave');
  a.addEventListener('change', function(){ e.disabled=!a.checked; });
  e.addEventListener('click', function(){
    if(!a.checked){ return; }
    try{ localStorage.setItem(KEY,'1'); }catch(x){}
    document.documentElement.style.overflow='';
    if(g.parentNode){ g.parentNode.removeChild(g); }
  });
  l.addEventListener('click', function(){ window.location.href='https://www.google.com'; });
})();
</script>
	<?php
}, 5 );

/**
 * ---------------------------------------------------------------------------
 * Auto-remove any leftover Elementor age-gate popup.
 * The site's old "hard gate" is an Elementor popup stored in the database
 * (not a theme file). This finds any Elementor popup whose text reads like
 * an age/researcher gate and removes it on sight — so the code soft-gate
 * above is the only gate visitors see, without editing Elementor by hand.
 * Matches only age-gate wording, so the welcome-offer popup is untouched.
 * ---------------------------------------------------------------------------
 */
add_action( 'wp_footer', function () {
	if ( is_admin() ) { return; }
	?>
<script>
(function(){
  var RE=/(at least 21|21\s*years|21\s*\+|21 or older|must be 21|qualified researcher|verify your age|human consumption|i disagree)/i;
  function scan(){
    var mods=document.querySelectorAll('.elementor-popup-modal, .dialog-type-lightbox');
    for(var i=0;i<mods.length;i++){
      var m=mods[i];
      if(RE.test(m.textContent||'')){
        m.style.display='none';
        if(m.parentNode){ m.parentNode.removeChild(m); }
        document.body.classList.remove('dialog-prevent-scroll');
        document.documentElement.style.overflow='';
      }
    }
  }
  if(window.jQuery){ jQuery(document).on('elementor/popup/show', function(){ setTimeout(scan,10); setTimeout(scan,250); }); }
  document.addEventListener('DOMContentLoaded', function(){ [50,400,1000,2000].forEach(function(t){ setTimeout(scan,t); }); });
})();
</script>
	<?php
}, 100 );

/**
 * ---------------------------------------------------------------------------
 * Split the crypto/card portal into a separate "Credit / Debit Card" option.
 * Registers a second WooCommerce payment method that routes the order through
 * the existing crypto gateway's processing — so customers see a distinct
 * "Credit / Debit Card" choice that lands on the same hosted payment portal.
 * Enable + configure it under WooCommerce → Settings → Payments.
 * ---------------------------------------------------------------------------
 */
add_filter( 'woocommerce_payment_gateways', function ( $gateways ) {
	$gateways[] = 'FS_Gateway_Card_Onramp';
	return $gateways;
} );

add_action( 'after_setup_theme', function () {
	if ( ! class_exists( 'WC_Payment_Gateway' ) || class_exists( 'FS_Gateway_Card_Onramp' ) ) { return; }

	class FS_Gateway_Card_Onramp extends WC_Payment_Gateway {

		public function __construct() {
			$this->id                 = 'fs_card_onramp';
			$this->method_title       = 'Credit / Debit Card (hosted)';
			$this->method_description = 'Adds a separate "Credit / Debit Card" option at checkout that routes to the same hosted crypto/card payment portal as your existing crypto gateway.';
			$this->has_fields         = false;

			$this->init_form_fields();
			$this->init_settings();

			$this->title       = $this->get_option( 'title', 'Credit / Debit Card' );
			$this->description = $this->get_option( 'description' );
			$this->enabled     = $this->get_option( 'enabled', 'no' );

			add_action( 'woocommerce_update_options_payment_gateways_' . $this->id, array( $this, 'process_admin_options' ) );
		}

		public function init_form_fields() {
			$this->form_fields = array(
				'enabled'     => array(
					'title'   => 'Enable / Disable',
					'type'    => 'checkbox',
					'label'   => 'Show a separate "Credit / Debit Card" option at checkout',
					'default' => 'no',
				),
				'title'       => array(
					'title'       => 'Title',
					'type'        => 'text',
					'default'     => 'Credit / Debit Card',
					'desc_tip'    => true,
					'description' => 'Label customers see at checkout.',
				),
				'description' => array(
					'title'   => 'Description',
					'type'    => 'textarea',
					'default' => 'Pay by credit or debit card on our secure hosted checkout. You will be redirected to complete your payment.',
				),
				'source_id'   => array(
					'title'       => 'Source gateway ID',
					'type'        => 'text',
					'default'     => '',
					'desc_tip'    => true,
					'description' => 'The ID of your existing crypto/card gateway (WooCommerce → Settings → Payments → open that method → the id in the URL, e.g. "section=xxxx"). Leave blank to auto-detect.',
				),
			);
		}

		/** Find the underlying crypto/card gateway to route through. */
		private function resolve_source() {
			$all = ( WC()->payment_gateways() ) ? WC()->payment_gateways()->payment_gateways() : array();
			$set = trim( (string) $this->get_option( 'source_id', '' ) );
			if ( $set && isset( $all[ $set ] ) && $set !== $this->id ) {
				return $all[ $set ];
			}
			foreach ( $all as $id => $gw ) {
				if ( $id === $this->id ) { continue; }
				$hay = strtolower( $id . ' ' . $gw->get_title() . ' ' . $gw->get_method_title() );
				if ( preg_match( '/crypto|btcpay|nowpayments|plisio|coinbase|cryptomus|coinpayments|confirmo|onramp|blockonomics/', $hay ) ) {
					return $gw;
				}
			}
			return null;
		}

		public function process_payment( $order_id ) {
			$order  = wc_get_order( $order_id );
			$source = $this->resolve_source();
			if ( $order && $source ) {
				// Route the order through the real gateway so its redirect + webhooks line up.
				$order->set_payment_method( $source );
				$order->add_order_note( 'Customer chose "Credit / Debit Card"; routed to ' . $source->get_method_title() . '.' );
				$order->save();
				return $source->process_payment( $order_id );
			}
			wc_add_notice( 'Card payment is temporarily unavailable — please choose another method.', 'error' );
			return array( 'result' => 'failure' );
		}

		public function get_icon() {
			$visa = "data:image/svg+xml;utf8," . rawurlencode( "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 26'><rect width='40' height='26' rx='4' fill='#fff' stroke='#E3E7ED'/><text x='20' y='18' font-family='Arial,Helvetica,sans-serif' font-size='11' font-weight='bold' font-style='italic' fill='#1A1F71' text-anchor='middle'>VISA</text></svg>" );
			$mc   = "data:image/svg+xml;utf8," . rawurlencode( "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 26'><rect width='40' height='26' rx='4' fill='#fff' stroke='#E3E7ED'/><circle cx='17' cy='13' r='7' fill='#EB001B'/><circle cx='23' cy='13' r='7' fill='#F79E1B' fill-opacity='.85'/></svg>" );
			$s = "max-height:22px;width:auto;border-radius:4px;display:inline-block;vertical-align:middle";
			return '<img src="' . $visa . '" alt="Visa" style="' . $s . '" />'
				. '<img src="' . $mc . '" alt="Mastercard" style="' . $s . ';margin-left:5px" />';
		}
	}
}, 11 );
