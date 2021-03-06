<?php
/* Template name: Figma */
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible">
    <link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <title>Codeq</title>
    <script>
			var admin_ajax_url = '<?php echo admin_url('admin-ajax.php') ?>';
			var ajax_nonce = '<?php echo wp_create_nonce('ajax-nonce') ?>';
		</script>
    <?php wp_head() ?>
  </head>
  <body>
  	<header class="header">
  		<div class="container">
  			<div class="row">
  				<div class="col-12">
  					<div class="header__wrapper">
  						<h1>Lorem ipsum dolor sit amet</h1>
  						<p>Lorem ipsum, dolor sit amet</p>
  					</div>
  				</div>
  			</div>
  		</div>
  	</header>
		<section class="container">
			<div class="row">
				<div class="col-12">
					<div class="content">
						<div class="content__item">
							<div class="wrapper">
								<p>Lorem <a href="#">ipsum</a> dolor, sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
								<div class="number">1</div>
							</div>
							<div class="shapes">
								<span class="circle"></span>
								<span class="parallelogram"></span>
								<span class="line"></span>
							</div>
						</div>
						<div class="content__item">						
							<div class="shapes">
								<span class="circle"></span>
								<span class="parallelogram"></span>
								<span class="line"></span>
							</div>
							<div class="wrapper">
								<div class="number">2</div>
								<p>Lorem <a href="#">ipsum</a> dolor, sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
							</div>
						</div>
						<div class="content__item">
							<div class="wrapper">
								<p>Lorem <a href="#">ipsum</a> dolor, sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
								<div class="number">3</div>
							</div>
							<div class="shapes">
								<span class="circle"></span>
								<span class="parallelogram"></span>
								<span class="line"></span>
							</div>
						</div>
						<div class="content__item">							
							<div class="shapes">
								<span class="circle"></span>
								<span class="parallelogram"></span>
								<span class="line"></span>
							</div>
							<div class="wrapper">
								<div class="number">4</div>
								<p>Lorem <a href="#">ipsum</a> dolor, sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
							</div>
						</div>
						<div class="content__item">
							<div class="wrapper">
								<p>Lorem <a href="#">ipsum</a> dolor, sit amet consectetur adipisicing elit. sed do eiusmod tempor</p>
								<div class="number">5</div>
							</div>
							<div class="shapes">
								<span class="circle"></span>
								<span class="parallelogram"></span>
								<span class="line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="employees">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="employees__wrapper">
							<div class="employees__button"><span class="btn btn-primary" data-id="<?php echo get_the_ID() ?>"><?php _e('Poka?? pracownik??w', 'codeq') ?></span></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<?php wp_footer() ?>
  </body>
</html>
