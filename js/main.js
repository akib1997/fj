$(document).ready(function() {
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

	$('.blog-slider').owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		mouseDrag: false,
		autoplay: true,
		navText: [ "<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>" ],
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 3
			}
		}
	});
});
