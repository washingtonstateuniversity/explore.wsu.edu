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

	// Flag browsers that don't support background-blend-mode
	document.addEventListener('DOMContentLoaded', function() {
		var supportsBackgroundBlendMode = window.getComputedStyle(document.body).backgroundBlendMode;
		if(typeof supportsBackgroundBlendMode == 'undefined') {
			document.documentElement.classList.add('no-bbm');
		}
	}, false);

	// Carousel
	// Add the 'ready' class to the carousel after the page is loaded.
	// This class is used in the selector for the CSS transitions
	// to prevent them from firing while the page is loading.
	$(window).load(function () {
		$('.carousel').addClass('ready');
	});

	// Add divs around the carousel items. While the default markup could be used,
	// doing this instead will help avoid potential conflicts with custom styles
	// and preclude the need to fight against the default Spine styles.
	$('.carousel').wrapInner('<div class="carousel-container"><div class="carousel-items"></div></div>');

	var item_count = $('.carousel-items figure').length,
		easing = 'easeInOutCubic';

	// Remove 'class' and 'style' attributes from the items to avoid style conflicts,
	// and remove the 'id' attribute because these elements may be cloned below.
	$('.carousel-items figure').removeAttr('id class style').attr('aria-hidden', 'true');

	// Set images as backgrounds on figures.
	$('.carousel-items').find('figure').each(function () {
		var figure = $(this),
			image = figure.children('img').attr('src');

		figure.css('background-image', 'url(' + image + ')');
	});

	// Because at least five items are required in order to achieve the 'inifite' effect,
	// clone and append them as needed if there are fewer than that.
	if (4 >= item_count) {
		var clones = $('.carousel-items figure').clone();

		$('.carousel-items').append(clones);

		if (2 >= item_count) {
			$('.carousel-items').append(clones.clone());
		}
		if (1 === item_count) {
			$('.carousel-items').append(clones.clone(), clones.clone());
		}
	}

	// Move the last two items to the beginning.
	$('.carousel-items figure:first').attr('aria-hidden', 'false').
		before($('.carousel-items figure:nth-last-child(2)')).
		before($('.carousel-items figure:last'));

	// Add 'previous' and 'next' control buttons.
	$('.carousel-items').
		before('<button class="controls prev">Previous</button><button class="controls next">Next</button>');

	// Handling for when the 'previous' control button has been clicked.
	$('.carousel').on('click', '.carousel-container .prev', function () {
		$('.carousel-items:not(:animated)').animate({
			'left' : '-100%'
		}, {
			duration: 500,
			easing: easing,
			start: function () {
				$('.carousel-items [aria-hidden="false"]').attr('aria-hidden', 'true').
					prev('figure').attr('aria-hidden', 'false');
			},
			complete: function () {
				$('.carousel-items figure:first').before($('.carousel figure:last'));
				$('.carousel-items').css({'left' : '-200%'});
			}
		});
	});

	// Handling for when the 'next' control button has been clicked.
	$('.carousel').on('click', '.carousel-container .next', function () {
		$('.carousel-items:not(:animated)').animate({
			'left' : '-300%'
		}, {
			duration: 500,
			easing: easing,
			start: function () {
				$('.carousel-items [aria-hidden="false"]').attr('aria-hidden', 'true').
					next('figure').attr('aria-hidden', 'false');
			},
			complete: function () {
				$('.carousel-items figure:last').after($('.carousel figure:first'));
				$('.carousel-items').css({'left' : '-200%'});
			}
		});
	});
}(jQuery));
