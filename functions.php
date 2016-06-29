<?php

add_action( 'wp_enqueue_scripts', 'wsu_exlpre_enque_scripts');

function wsu_explore_enque_scripts(){

		wp_enqueue_script( 'wsu-explore-ie-polyfill', get_stylesheet_directory_uri() . '/js/polyfill.js', array( 'jquery' ), spine_get_script_version(), false );
}
/*
* Add HTML5 search box on the side bar menu
*/
add_theme_support( 'html5', array( 'sb-search' ) );
/*
* Add inline SVG
*/
add_action( 'wsu_register_inline_svg', 'my_theme_register_inline_svg' );
function my_theme_register_inline_svg() {
    ob_start();
    ?><svg><!-- complete SVG is pasted here --></svg><?php
    $svg_data = ob_get_contents();
    ob_end_clean();

    // SVG is registered with an ID of "my-inline-svg"
    wsu_register_inline_svg( 'my-inline-svg', $svg_data );
}
