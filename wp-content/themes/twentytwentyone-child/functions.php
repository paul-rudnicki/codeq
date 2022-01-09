<?php

add_action( 'wp_enqueue_scripts', 'codeq_enqueue_styles', 20);
function codeq_enqueue_styles() {
    wp_dequeue_style('twenty-twenty-one-style');
    wp_enqueue_style( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', );
    wp_enqueue_style( 'codeq-style', get_bloginfo( 'stylesheet_directory' ) . '/dist/css/styles.min.css?ver=1.0', );
    wp_enqueue_script( 'codeq-script', get_bloginfo( 'stylesheet_directory' ) . '/dist/js/scripts.min.js', array(), '1.0.0', true );
}

add_filter('acf/settings/save_json', function() {
  return get_stylesheet_directory() . '/acf-json';
});

add_filter('acf/settings/load_json', function($paths) {
  // $paths will already include the result of get_stylesheet_directory ie. parent theme's acf-json
  if(is_child_theme()) {
    $paths[] = get_stylesheet_directory() . '/acf-json';
  }
  return $paths;
});
 
add_action('wp_ajax_list_employees' , 'list_employees');
add_action('wp_ajax_nopriv_list_employees','list_employees');

function list_employees(){
        
    if ( ! wp_verify_nonce( $_POST['nonce'], 'ajax-nonce' ) ) {
        die ( 'Busted!');
    }
    $id = sanitize_text_field($_POST['id']);
    if ($id) {
        if( have_rows('employees', $id) ):
        ob_start();
        ?>
            <div class="employees__items">
                <div class="row">
                    <?php while( have_rows('employees', $id) ) : the_row(); ?>
                        <div class="column col-xs-12 col-sm-6 col-lg-4">
                            <div class="employees__item">
                                <?php if ($image = get_sub_field('image')): ?>
                                    <img src="<?php echo $image['url'] ?>" alt="<?php echo $image['title'] ?>" width="416" height="270">
                                <?php endif ?>
                                <h3 class="h3"><?php echo get_sub_field('name') ?></h3>
                            </div>
                        </div>
                    <?php endwhile ?>
                </div>
            </div>
            <?php endif ?>
        <?php
        $output = ob_get_contents();
        ob_end_clean();
        echo $output;
    }
    die();
}