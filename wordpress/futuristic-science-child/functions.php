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
	wp_enqueue_style( 'fs-child', get_stylesheet_uri(), array( 'hello-elementor-parent', 'fs-google-fonts' ), '1.1.0' );
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
