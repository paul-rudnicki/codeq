<?php

add_action( 'wp_enqueue_scripts', 'codeq_enqueue_styles', 20);
function codeq_enqueue_styles() {
    wp_dequeue_style('twenty-twenty-one-style');
    wp_enqueue_style( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', );
    wp_enqueue_style( 'codeq-style', get_bloginfo( 'stylesheet_directory' ) . '/dist/css/styles.min.css', );
    wp_enqueue_script( 'codeq-script', get_bloginfo( 'stylesheet_directory' ) . '/dist/js/script.min.js', array(), '1.0.0', true );
}