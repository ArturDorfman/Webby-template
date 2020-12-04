document.addEventListener('DOMContentLoaded', function (event) {
	new Swiper('.text-slider', {
		pagination: {
			el: '.swiper-pagination',
			clicable: true,
			type: 'bullets',
		},
		autoplay: true,
		loop: true,
	});

	if (window.innerWidth <= 768) {
		new Swiper('.clients-img-slider', {
			slidesPerView: 2,
			slidesPerGroup: 2,
			autoplay: true,
			loop: true,
		});
		new Swiper('.services-slider', {
			slidesPerView: 1,
			slidesPerGroup: 1,
			autoplay: true,
			loop: true,
			centeredSlides: true,
		});
	}
});
$(document).ready(function () {
	// ============== bureger=================
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	// =======================================

	// ===============popup===================
	$('.img-popup img, .video-wrapper iframe').magnificPopup({
		// type: 'image',
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
});


