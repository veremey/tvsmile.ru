$(document).ready(function() {
	//хедер меню бутербродиком
	$('.burger').on('click', function() {
		$('.navigation').toggleClass('is_active');
	});

	// скрыть панель поиска

	$('.role__up').on('click', function() {
		$('.search_wraper').slideToggle();
		return false;
	});

});


	//  recomended slider


$('.slider__recomend').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// speed: 600,
	adaptiveHeight: true,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-page__back'),
	nextArrow: $('.js-page__next')
});


$('.slider__video').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	// speed: 600,
	adaptiveHeight: true,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-video__back'),
	nextArrow: $('.js-video__next')
});

$('.slider__mult').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	// speed: 600,
	adaptiveHeight: true,
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 20000,
	prevArrow: $('.js-mult__back'),
	nextArrow: $('.js-mult__next')
});



/* Слайдер для выбора года */

var price_slider = $('.ruler').noUiSlider({
	start: [1994, 2001],
	step: 1,
	connect: true,
	range: {
		'min': [1980],
		'max': [2020]
	},
	format: wNumb({
		decimals: 0,
		thousand: '',
		postfix: '',
	})
});

price_slider.Link('lower').to($('input[name="year_start"]'));

price_slider.Link('lower').to($('.noUi-handle-lower'), 'text');

price_slider.Link('upper').to($('input[name="year_end"]'));

price_slider.Link('upper').to($('.noUi-handle-upper'), 'text');