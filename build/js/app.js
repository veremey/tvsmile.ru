$(document).ready(function() {
	// //хедер меню бутербродиком
	// $('.burger').on('click', function() {
	// 	$('.navigation').toggleClass('is_active');
	// });

	// скрыть панель поиска

	$('.role__up').on('click', function() {
		$('.search_wraper').slideToggle();
		return false;
	});

	// сортировка в каталог.хтмл

	$('.sorting').click(function() {
		$(this).toggleClass('is_active');
		return false;
	});
	// sidebar catalog.html
	$('.sidebar__catalog li a').click(function() {
		$(this).toggleClass('is_active');
		return false;
	});
	// расширеный поиск
	$('.search__go').click(function() {
		$(this).toggleClass('is_active');
		$('.search_big').slideToggle();
		return false;
	});
	// popup
	$('.js_popup').on('click', function() {
		$(this).removeClass('is_active');
		$('.js_popup_enter').removeClass('is_active');
		$('.js_popup_registr').removeClass('is_active');
		$('.js_navigation').removeClass('is_active');
		$('.crumbs600 li').removeClass('is_active');
	});
	// popup входа
	$('.js_enter').on('click', function() {
		$('.js_popup').toggleClass('is_active');
		$('.js_popup_enter').toggleClass('is_active');
	});
	// popup регистрации
	$('.js_registr').on('click', function() {
		$('.js_popup').toggleClass('is_active');
		$('.js_popup_registr').toggleClass('is_active');
	});
	// popup регистрации
	$('.js_burger').on('click', function() {
		$('.js_popup').toggleClass('is_active');
		$('.js_navigation').toggleClass('is_active');
	});

	// popup хлебные крошки
	$('.js_crumbs').on('click', function() {
		$('.js_popup').toggleClass('is_active');
		$('.crumbs600 li').toggleClass('is_active');
	});

	// скрыть награды
	$('.js_price__more').on('click', function() {
		$('.js_prise_hide').slideToggle();
		return false;
	});

	/* Разворачивание и сворачивание комментариев и формы ответа */
	$('.comment__more').click(function() {
		return false;
	});

	$('.comment__sub').each(function(){

		var comment = $(this).parents('.comment');
		var comments = $(this).children('.comment__sub_wrap');
		var button = $(this).siblings().children('.comment__more');

		button.click(function(){

			if (comment.hasClass('extended')) {
				comment.removeClass('extended');
				comments./*slideToggle(300)show(300).*/slideUp(300);
				button.html('<span>Показать комментарии</span> (' + comments.length + ')');
				return false;
			} else {
				comment.addClass('extended');
				comments/*.slideToggle(300)hide(300)*/.slideDown(300);
				button.html('<span>Скрыть комментарии</span>');
			}
			return false;
		});

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

$('.slider__great').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 10000
});