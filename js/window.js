/* Hamburger menu */
jQuery("a.hamburger").click(function(){
        jQuery("a.hamburger").toggleClass("menu-open");
    });
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
