/* Hamburger menu */
(function($) {
	$('.hamburger').click(function(){
		$('a.hamburger').toggleClass('menu-open');
	});
	$('.site-nav').on('click', 'a', function() {
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
}(jQuery));

(function($,window) {
	var check_sticky = function() {
		var $sticky_images = $('.stick-image');
		$sticky_images.each(function(){
			var $this = $(this);
			var dist = $this.offset().top - $(window).scrollTop();

			if ( dist <= 0 && ! $this.hasClass('sticky') ) {
				$this.addClass('sticky');
			}

			if ( dist > 0 && $this.hasClass('sticky') ) {
				$this.removeClass('sticky');
			}
		});
	};

	$(window).on("load scroll resize", check_sticky );
}(jQuery,window));

/* JS Reveal */
window.sr = ScrollReveal();

// Add class to <html> if ScrollReveal is supported
if (sr.isSupported()) {
	document.documentElement.classList.add('sr');
}
sr.reveal('.icon-wrap');
