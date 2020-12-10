$(document).ready(function () {

	$('.slick-slider').slick({
		autoplay: true,
		utoplaySpeed: 3000,
		arrows: false,
		dots: true,
	});

	function enableSlickSliders() {
		$('.services__wrap').slick({
			autoplay: true,
			utoplaySpeed: 3000,
			arrows: false,
			dots: true,
		});

		$('.clients__wrap').slick({
			autoplay: true,
			utoplaySpeed: 3000,
			arrows: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});
	}
	// window resize 
	$(window).resize(function () {
		if ($(window).width() < 768) {
			enableSlickSliders();
		}
	});

	// ============== bureger=================
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__links').click(function (event) {
			$('.header__burger, .header__menu').removeClass('active');
		})
	});
	// =======================================

	// ===============popup===================
	$('.img-popup img, .video-wrapper iframe').magnificPopup({
		items: {
			src: 'https://www.youtube.com/embed/tgbNymZ7vqY'
		},
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: '//www.youtube.com/embed/tgbNymZ7vqY'
				}
			},
			srcAction: 'iframe_src',
		}
	});

	// cansel restart page when submiting form
	$('#form-submit').click(function (envent) {
		event.preventDefault();
	});


});