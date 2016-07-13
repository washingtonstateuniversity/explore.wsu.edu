(function ($) {
	'use strict';

	// Toggle menu
	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('menu-open');
	});

	// Navigation item click handling (scroll, toggle menu)
	$('.site-nav').on('click', 'a', function () {
		var target = $(this.hash),
			burger = $(this).closest('ul').prev('.hamburger');

		if (target.length) {
			burger.toggleClass('menu-open');
			$('html, body').animate({
				scrollTop: target.offset().top - 90
			}, 500);
			return false;
		}
	});

	// JS Reveal
	window.sr = ScrollReveal();
	if (sr.isSupported()) {
		document.documentElement.classList.add('sr');
	}
	sr.reveal('.icon-wrap');
}(jQuery));
