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
	wp_enqueue_style( 'fs-child', get_stylesheet_uri(), array( 'hello-elementor-parent', 'fs-google-fonts' ), '1.3.0' );
}, 20 );

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
 * WooCommerce transactional emails use a dark header band, and the standard
 * horizontal logo has black "FUTURISTIC" / "RESEARCH PEPTIDES" lettering that
 * disappears against it. Force the email header image to the light (white-text)
 * logo variant so the brand mark stays legible in every mail client.
 *
 * Filtering the option value wins over whatever is set in
 * WooCommerce → Settings → Emails → Header image, so the fix survives config
 * changes without needing a Media Library upload.
 */
add_filter( 'option_woocommerce_email_header_image', 'fs_email_header_logo' );
add_filter( 'default_option_woocommerce_email_header_image', 'fs_email_header_logo' );
function fs_email_header_logo() {
	return get_stylesheet_directory_uri() . '/assets/logo-email.png';
}

/**
 * Launch guard — hide the card-to-crypto payment gateway at checkout.
 *
 * The card→crypto option still needs testing, so keep it off the storefront
 * for now. This removes it from the payment choices customers see while
 * NEVER touching manual / offline methods (Zelle, bank transfer, etc.), so
 * checkout keeps working. It only hides the option — no gateway settings are
 * deleted, so re-enabling later is just removing this block (or toggling the
 * FS_HIDE_CARD_CRYPTO switch to false).
 *
 * If you know the exact gateway id from WooCommerce → Settings → Payments,
 * add it to $exact_ids for a precise match; otherwise the keyword check below
 * catches typical card / crypto gateway names.
 */
define( 'FS_HIDE_CARD_CRYPTO', true );
add_filter( 'woocommerce_available_payment_gateways', 'fs_hide_card_crypto_gateway', 99 );
function fs_hide_card_crypto_gateway( $gateways ) {
	if ( ! FS_HIDE_CARD_CRYPTO || is_admin() || ! is_array( $gateways ) ) {
		return $gateways;
	}

	// Pin exact gateway id(s) here for a precise match (optional).
	$exact_ids = array();

	// Manual / peer-to-peer methods that must always stay available.
	$protected = array( 'bacs', 'cheque', 'cod', 'zelle', 'venmo', 'cashapp', 'cash', 'bank', 'transfer', 'manual', 'paypal' );

	// Keywords that identify the card-to-crypto option.
	$hide_words = array( 'crypto', 'coin', 'card', 'bitcoin', 'btc', 'usdt', 'onramp', 'on-ramp' );

	foreach ( $gateways as $id => $gateway ) {
		if ( in_array( $id, $exact_ids, true ) ) {
			unset( $gateways[ $id ] );
			continue;
		}

		$haystack = strtolower( $id . ' ' . $gateway->get_title() . ' ' . $gateway->get_method_title() );

		// Never hide a protected manual/offline method, even on a keyword hit.
		$is_protected = false;
		foreach ( $protected as $safe ) {
			if ( strpos( $haystack, $safe ) !== false ) { $is_protected = true; break; }
		}
		if ( $is_protected ) { continue; }

		foreach ( $hide_words as $word ) {
			if ( strpos( $haystack, $word ) !== false ) {
				unset( $gateways[ $id ] );
				break;
			}
		}
	}

	return $gateways;
}
