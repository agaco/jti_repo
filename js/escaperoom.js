$(function() {

	// Popup
	$('.reward__show-popup').on('click', function(event) {
		$('.reward__popup').removeClass('active');
		$(this).parent().next().addClass('active');
		
	});

	$('.close span').on('click', function(event) {
		$('.reward__popup').removeClass('active');
	});

});
