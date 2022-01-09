
jQuery(function($){

	$('body').on('click', '.employees__button span', function(e){
		e.preventDefault();
		var id = $(this).data('id');
		if (id) {
				$.ajax({
		    type: "POST",
		    url: admin_ajax_url,
		    data: {
						action: "list_employees",
						id: id,
						nonce: ajax_nonce,
				},
		    beforeSend: function(response){
		    	$('.employees__wrapper').addClass('preloader').text('ładowanie...');
		    },
		    success: function(response)
		    {
		    	$('.employees__wrapper')
		    		.removeClass('preloader')
		    		.html(response)
		    }
		  });
		}
	})
	
})