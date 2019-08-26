$(function() {

	// Fixed header change class
	var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
			$('.main .site-header__header').addClass('shrink');
		} else {
			$('.main .site-header__header').removeClass('shrink');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	// My account
	$('.my-acc').on('click', function(event) {
		$(this).toggleClass('open');
	});

	$('.header-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		dotsClass: 'slider-dots',
		autoplay: true,
	});

	// Scroll
	$('[data-scroll]').on('click', function(event) {
		$([document.documentElement, document.body]).animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
	});

	// Hamburger
	$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    $('.horizontal-menu').toggleClass('open');
  });
  $('.horizontal-menu__item_link').click(function() {
  	$('.hamburger').toggleClass("is-active");
    $('.horizontal-menu').toggleClass('open');
  });

  // Brands
  $('.s-brands-content:not(:first)').hide();
  $('.s-brands__item').on('click', function(event) {
  	if ($(this).hasClass('active')) {return}
  	$('.s-brands__item').removeClass('active');
  	$(this).addClass('active');
  	$('.s-brands-content').slideUp('1000');
  	$('.s-brands-content--' + $(this).data('brand') +'').slideDown('1000');
  });


  // Timer
  var deadLineCount = $('[data-deadline]');
  for (var i = 0; i < deadLineCount.length; i++) {
  	$(deadLineCount[i]).attr('id', 'deadLineDate' + i + '');
  }
	var interval = 1000 * 60;
  (function countdown() {
	  for (var i = 0; i < deadLineCount.length; i++) {
			var deadline = moment($('#deadLineDate' + i + '').text());
		  var now = moment();
			var duration = moment.duration(deadline.diff(now));
		  if (duration <= 0) {
		    $('#deadLineDate' + i + '').attr('id', 'deadLineDone');
		    $('#deadLineDone').nextAll('.btn').text('Konkurs zakończony').css({
		    	'z-index': '-1',
		    	'background': '#ccc'
		    });;
		    clearInterval(countdown);
		  }
		  duration = moment.duration(duration - interval);
		  duration.months() < 10 ? durationMonth = '0' + duration.months() : durationMonth = duration.months()
		  duration.days() < 10 ? durationDays = '0' + duration.days() : durationDays = duration.days()
		  duration.hours() < 10 ? durationHours = '0' + duration.hours() : durationHours = duration.hours()
		  duration.minutes() < 10 ? durationMinutes = '0' + duration.minutes() : durationMinutes = duration.minutes()
		  $('#deadLineDate' + i + '').parents('.competitions__deadline').find('.competitions__timer .m').text(durationMonth);
		  $('#deadLineDate' + i + '').parents('.competitions__deadline').find('.competitions__timer .d').text(durationDays)
		  $('#deadLineDate' + i + '').parents('.competitions__deadline').find('.competitions__timer .h').text(durationHours);
		  $('#deadLineDate' + i + '').parents('.competitions__deadline').find('.competitions__timer .min').text(durationMinutes);
			setInterval(countdown, interval);
	  }
	})();

	// Consent
	$('#consentAccept').on('click', function(event) {
		event.preventDefault();
		if ($('.test').is(':checked')) {
			$(this).parents('#consentPanel').remove()
		}
	});

	// Infobox
	$('.more-info').hide();
	$('.more-button').on('click', function(event) {
		var dataMore = $(this).data('more-open')
		$('.more-info[data-more="' + dataMore + '"]').slideToggle(300);
		$(this).toggleClass('open');
		if ($(this).hasClass('open')) {
			$(this).text('Mniej informacji');
		} else {
			$(this).text('Więcej informacji');
		}
	});
	// Accordeon
	$('.accordeon-form__content').not('[data-accordeon-open]').hide();
	if ($('[data-accordeon-open]')) {
		var accordeonContent = $('[data-accordeon-open]').data('accordeon-content');
		$('[data-accordeon-title="' + accordeonContent + '"]').addClass('open');
	}
	$('[data-accordeon-title]').on('click', function(event) {
		var accordeonTitle = $(this).data('accordeon-title')
		$('[data-accordeon-content="' + accordeonTitle + '"]').slideToggle(300);
		$(this).toggleClass('open');
	});

	// Comment info
	$('.comment-info').hide();
	$('.comment-button').on('click', function(event) {
		var dataComment = $(this).data('comment-open');
		$('.comment-info').not('.comment-info[data-comment="' + dataComment + '"]').slideUp(300);
		$('.comment-info[data-comment="' + dataComment + '"]').slideToggle(300);
		$(this).toggleClass('open');
	});

	// Avatar
	$('.avatar').on('click', function(event) {
		$('.avatar').removeClass('active');
		$(this).addClass('active');
	});

});
