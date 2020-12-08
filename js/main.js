$(document).ready(function () {

	$('.flickity-carusel').flickity({
		cellAlign: 'left',
		contain: true,
		autoPlay: 3000,
	});

	if ($(window).width() <= 768) {
		$('.services__wrap').flickity({
			cellAlign: 'left',
			contain: true,
			autoPlay: 3000,
		});

		$('.clients__wrap').flickity({
			cellAlign: 'left',
			contain: true,
			autoPlay: 3000,
		});
	}

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