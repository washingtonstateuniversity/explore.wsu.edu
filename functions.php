<?php

add_action( 'wp_enqueue_scripts', 'wsu_exlpre_enque_scripts');

function wsu_explore_enque_scripts(){

		wp_enqueue_script( 'wsu-explore-ie-polyfill', get_stylesheet_directory_uri() . '/js/polyfill.js', array( 'jquery' ), spine_get_script_version(), false );
}
/*
* Add HTML5 search box on the side bar menu
*/
add_theme_support( 'html5', array( 'sb-search' ) );
