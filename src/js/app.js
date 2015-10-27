$(document).ready(function() {
	//хедер меню бутербродиком
	$('.burger').on('click', function() {
		$('.navigation').toggleClass('is_active');
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

