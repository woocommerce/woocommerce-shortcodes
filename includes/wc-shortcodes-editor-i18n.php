<?php
$strings = 'tinyMCE.addI18n({' . _WP_Editors::$mce_locale . ': {
	woocommerce_shortcodes: {
		insert: "' . esc_js( __( 'Insert Shortcode', 'woocommerce-shortcodes' ) ) . '",
		price_button: "' . esc_js( __( 'Product price/cart button', 'woocommerce-shortcodes' ) ) . '",
		product_by_sku: "' . esc_js( __( 'Product by SKU/ID', 'woocommerce-shortcodes' ) ) . '",
		products_by_sku: "' . esc_js( __( 'Products by SKU/ID', 'woocommerce-shortcodes' ) ) . '",
		product_categories: "' . esc_js( __( 'Product categories', 'woocommerce-shortcodes' ) ) . '",
		products_by_cat_slug: "' . esc_js( __( 'Products by category slug', 'woocommerce-shortcodes' ) ) . '",
		recent_products: "' . esc_js( __( 'Recent products', 'woocommerce-shortcodes' ) ) . '",
		featured_products: "' . esc_js( __( 'Featured products', 'woocommerce-shortcodes' ) ) . '",
		shop_messages: "' . esc_js( __( 'Shop Messages', 'woocommerce-shortcodes' ) ) . '",
		order_tracking: "' . esc_js( __( 'Order tracking', 'woocommerce-shortcodes' ) ) . '",
		my_account: "' . esc_js( __( 'My Account', 'woocommerce-shortcodes' ) ) . '",
		shop_messages_shortcode: "' . esc_js( apply_filters( 'shop_messages_shortcode_tag', 'woocommerce_shop_messages' ) ) . '",
		order_tracking_shortcode: "' . esc_js( apply_filters( 'woocommerce_order_tracking_shortcode_tag', 'woocommerce_order_tracking' ) ) . '"
	}
}});';
