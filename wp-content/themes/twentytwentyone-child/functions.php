<?php

add_action( 'wp_enqueue_scripts', 'codeq_enqueue_styles', 11);
function codeq_enqueue_styles() {
    wp_enqueue_style( 'codeq-style', get_bloginfo( 'stylesheet_directory' ) . '/dist/css/styles.min.css', );
    wp_enqueue_script( 'codeq-script', get_bloginfo( 'stylesheet_directory' ) . '/dist/js/script.min.js', array(), '1.0.0', true );
}