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
		$('.js_search_open').slideToggle();
		$('.search_btn').toggleClass('is_hide');
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
	// при клике на'.js_burger' страница прокруч вверх
	$(document).on('click', '.js_burger', function() {
      $('html, body').animate({ scrollTop: $('.header').offset().top }, 1000 );
      return false;
    });

	// popup хлебные крошки
	$('.js_crumbs').on('click', function() {
		$('.js_popup').toggleClass('is_active');
		$('.crumbs600 li').toggleClass('is_active');
	});

	// // скрыть награды
	// $('.js_price__more').on('click', function() {
	// 	$('.js_prise_hide').slideToggle();
	// 	return false;
	// });
	// скрыть карточку фильма инфо награды
	$('.js_price__more').on('click', function() {
		if($(this).hasClass('is_active')){
			$(this).toggleClass('is_active');
			$(this).html(' Показать все награды актера')
			$('.js_prise_hide').slideToggle();
		} else {
			$(this).toggleClass('is_active');
			$(this).html('Скрыть все награды актера');
			$('.js_prise_hide').slideToggle();
		}
		return false;
	});

	// скрыть карточку фильма инфо
	$('.js_detale').on('click', function() {
		if($(this).hasClass('is_active')){
			$(this).toggleClass('is_active');
			$(this).html('<span> Показать <i class="icon-arrow"></i> </span>')
			$('.js_detale_open').slideToggle();
		} else {
			$(this).toggleClass('is_active');
			$(this).html('<span> Скрыть <i class="icon-arrow"></i> </span>');
			$('.js_detale_open').slideToggle();
		}
		return false;
	});

	// скрыть или показать изменяем текст
	$('.role__up').on('click', function() {
		if($(this).hasClass('is_active')){
			$(this).toggleClass('is_active');
			$(this).html('<span> Показать <i class="icon-arrow"></i> </span>')
			$('.js_detale_open').slideToggle();
		} else {
			$(this).toggleClass('is_active');
			$(this).html('<span> Свернуть <i class="icon-arrow"></i> </span>');
			$('.js_detale_open').slideToggle();
		}
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

	/* Скрипт для рейтинга */

	$('.stars').each(function(){

		var rating = $(this);
		var rating_input = rating.parents('form').find('input[name="rating"]');
		var stars = $('.star > span', rating);

		rating.find('.descr').hover(function(){
			stars.removeClass('active');
			rating_input.val(0);
		});

		stars.each(function(index){
			var current = index + 1;

			$(this).hover (
				function(){
					stars.removeClass('active').slice(0, current).addClass('active');
				},
				function(){
					rating_input.val(parseFloat($('.active', rating).length/2));
				}
			);

		});
	});

	// TАБЫ
	$('.js_tab').on('click', function() {
		$(this).toggleClass('is_active');
		$(this).next('.js_tab_contant').slideToggle();
		return false;
	});


	//  ../../bower_components/tether/dist/js/tether.min.js

	// ../../bower_components/tether-select/dist/js/select.min.js

	// выпадалка на звезды карточка фильма
	$('.js_stars').on('click', function() {
		$(this).toggleClass('is_active');
	});


	// new Select({
	//   el: red
	// });

		$('.more, .btn_comment').on('click', function(){
			if($(this).siblings('.more__text, .more__text_film').hasClass('is_visible')){
				$(this).siblings('.more__text, .more__text_film').toggleClass('is_visible');
				$(this).html(' Показать <i class="icon-arrow"></i>')

			} else{
				$(this).siblings('.more__text, .more__text_film').toggleClass('is_visible');
				$(this).html(' Свернуть <i class="icon-arrow"></i>');
			}
			return false;
			// $(this).siblings('.more__text, .more__text_film').toggleClass('is_visible');
			// return false;
		});

		// $('.role__up').on('click', function() {
		// 	if($(this).hasClass('is_active')){
		// 		$(this).toggleClass('is_active');
		// 		$(this).html('<span> Показать <i class="icon-arrow"></i> </span>')
		// 		$('.js_detale_open').slideToggle();
		// 	} else {
		// 		$(this).toggleClass('is_active');
		// 		$(this).html('<span> Свернуть <i class="icon-arrow"></i> </span>');
		// 		$('.js_detale_open').slideToggle();
		// 	}
		// 	return false;
		// });


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
	centerMode: false,
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
	// centerMode: false,
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

$('.tab_slider1').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 10000
});

$('.tab_slider2').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// centerMode: true,
	autoplay: true,
	autoplaySpeed: 13000,
	responsive: [
	{
		breakpoint: 755,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
		}
	}
	]
});


$('.tab_slider3').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	// centerMode: true,
	autoplay: true,
	autoplaySpeed: 8000,
	responsive: [
	{
		breakpoint: 755,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 520,
		settings: {
			slidesToShow: 2,
			// centerMode: true,
		}
	}
	]
});

$('.tab_slider4').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 8000
});


$('.tab_slider5').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 8000,
	responsive: [
	{
		breakpoint: 685,
		settings: {
			slidesToShow: 3,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
		}
	}
	]
});