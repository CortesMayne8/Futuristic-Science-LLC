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
 * WooCommerce product images: never hard-crop.
 *
 * The brand vial photos are tall (807 x 1956). WooCommerce's default
 * 1:1 hard crop slices straight through the label, which is what
 * produced the blown-up GHK-Cu close-up on the product page.
 * Forcing crop => 0 makes WP generate uncropped (aspect-preserved)
 * sizes. After activating, run Regenerate Thumbnails once so the
 * already-cropped files get rebuilt.
 */
add_filter( 'woocommerce_get_image_size_single', function ( $size ) {
	$size['width']  = 800;
	$size['height'] = '';
	$size['crop']   = 0;
	return $size;
} );

add_filter( 'woocommerce_get_image_size_thumbnail', function ( $size ) {
	$size['width']  = 500;
	$size['height'] = '';
	$size['crop']   = 0;
	return $size;
} );

add_filter( 'woocommerce_get_image_size_gallery_thumbnail', function ( $size ) {
	$size['width']  = 150;
	$size['height'] = '';
	$size['crop']   = 0;
	return $size;
} );
