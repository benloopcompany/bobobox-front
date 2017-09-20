;(function ($) {

	// translate transitions
	var winTop = $(window).scrollTop(),
		winDown = winTop + $(window).height();

	$('.come-from-left').each(function() {
		var thisTop = $(this).offset().top,
			thisDown = thisTop + $(this).height();

		if ( (thisTop <= winTop || thisTop >= winDown) && (thisDown <= winTop || thisDown >= winDown) ) $(this).addClass('js-left');
	});

	$('.come-from-right').each(function() {
		var thisTop = $(this).offset().top,
			thisDown = thisTop + $(this).height();

		if ( (thisTop <= winTop || thisTop >= winDown) && (thisDown <= winTop || thisDown >= winDown) ) $(this).addClass('js-right');
	});

	$('.text-fade').each(function() {
		var thisTop = $(this).offset().top,
			thisDown = thisTop + $(this).height();

		if ((thisTop <= winTop || thisTop >= winDown) && (thisDown <= winTop || thisDown >= winDown)) $(this).addClass('js-fade');
	});

	$(window).scroll(function() {
		$('.js-left').each(function () {
			if ($(this).offset().top <= ( $(window).scrollTop() + $(window).height() * 0.95 ) && ( $(this).offset().top + $(this).height() ) >= ($(window).scrollTop() + $(window).height() * 0.05 )) {
				$(this).removeClass('js-left');
			}
		});

		$('.js-right').each(function () {
			if ($(this).offset().top <= ( $(window).scrollTop() + $(window).height() * 0.95 ) && ( $(this).offset().top + $(this).height() ) >= ($(window).scrollTop() + $(window).height() * 0.05 )) {
				$(this).removeClass('js-right');
			}
		});

		$('.js-fade').each(function () {
			if ($(this).offset().top <= ( $(window).scrollTop() + $(window).height() * 0.95 ) && ( $(this).offset().top + $(this).height() ) >= ($(window).scrollTop() + $(window).height() * 0.05 )) {
				$(this).removeClass('js-fade');
			}
		});
	});

})(jQuery);