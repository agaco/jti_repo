$(function() {
	$('.mark-header-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'slider-dots',
		autoplay: true,
		arrows: false
	});

	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		autoplay: false,
		arrows: true,
		responsive: [
			{
			  breakpoint: 768,
				settings: {
					arrows: false,
				}
			},
		],
	});

});