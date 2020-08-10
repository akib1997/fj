$(document).ready(function() {
	$('.intro-content').addClass('draw');

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.header').addClass('added');
		} else {
			$('.header').removeClass('added');
		}
	});

	$('.banner-slider').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: false,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 5000,
		// animateOut: 'slideOutUp',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	// $('.text-slider').owlCarousel({
	// 	loop: true,
	// 	autoplay: true,
	// 	autoplayTimeout: 5000,
	// 	dots: false,
	// 	nav: false,
	// 	items: 1,
	// 	singleItem: true,
	// 	animateOut: 'fadeOut',
	// 	animateIn: 'fadeIn',
	// 	smartSpeed: 450
	// });
});
