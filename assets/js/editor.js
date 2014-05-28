/* global tinymce */
( function () {
	tinymce.PluginManager.add( 'woocommerce_shortcodes', function ( editor ) {
		var ed = tinymce.activeEditor;
		editor.addButton( 'woocommerce_shortcodes', {
			text: false,
			icon: false,
			type: 'menubutton',
			menu: [
				{
					text: ed.getLang( 'woocommerce_shortcodes.order_tracking' ),
					onclick: function () {
						editor.insertContent( '[' + ed.getLang('woocommerce_shortcodes.order_tracking_shortcode') + ']' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.price_button' ),
					onclick: function () {
						editor.insertContent( '[add_to_cart id="" sku=""]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.product_by_sku' ),
					onclick: function () {
						editor.insertContent( '[product id="" sku=""]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.products_by_sku' ),
					onclick: function () {
						editor.insertContent( '[products ids="" skus=""]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.product_categories' ),
					onclick: function () {
						editor.insertContent( '[product_categories number=""]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.products_by_cat_slug' ),
					onclick: function () {
						editor.insertContent( '[product_category category="" per_page="12" columns="4" orderby="date" order="desc"]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.recent_products' ),
					onclick: function () {
						editor.insertContent( '[recent_products per_page="12" columns="4" orderby="date" order="desc"]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.featured_products' ),
					onclick: function () {
						editor.insertContent( '[featured_products per_page="12" columns="4" orderby="date" order="desc"]' );
					}
				},
				{
					text: ed.getLang( 'woocommerce_shortcodes.shop_messages' ),
					onclick: function () {
						editor.insertContent( '[' + ed.getLang('woocommerce_shortcodes.shop_messages_shortcode') + ']' );
					}
				}
			]
		});
	});
})();
