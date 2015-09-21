$(function(){


	// 768
	//боковое меню index.html ХЕДЕР

	$('.burger__menu').on('click', function() {
		$('.side__menu').slideToggle();
		$('.everybody_in_shadow').fadeToggle();
	});

	$('.side__menu li').on('click', function() {
		$(this).children('.side__submenu').slideToggle();
		return false;
	});

	// select 480  //поиск на главной странице


	// 	$('.ui-field-contain select:selected').click(function() {

	// 		console.log($(this).text());

	// });
	// 	$('.ui-field-contain select').click(function() {

	// 		console.log($(this).children('option').filter(':selected'));

	// });


	//мы рекомендуем слайдер


	$('.slider__slick').slick({
			dots: false,
			infinite: true,
			centerMode: true,
			centerPadding: '20px',
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			variableWidth: true,
			adaptiveHeight: true,
			prevArrow: $(".js-page__back"),
			nextArrow: $(".js-page__next")
		});










	// //перезагрузка страницы при изменении размера
	// $(window).on('resize',function(){
	// 		$(".owl-carousel").data('owlCarousel').reinit();
	// 	});












	// $('.category_slider_inner').slick({
	// 		dots: false,
	// 		infinite: true,
	// 		centerPadding: '20px',
	// 		speed: 500,
	// 		slidesToShow: 2,
	// 		slidesToScroll: 1,
	// 		variableWidth: true,
	// 		adaptiveHeight: true,
	// 		prevArrow: $(".js-back"),
	// 		nextArrow: $(".js-next")
	// 	});

	// film_poster
	$('.film_about_details').on('click', function() {
		$('.film_info').slideToggle();
		$(this).toggleClass('is_active');
		$('.film_prize').toggleClass('film_prize_width');
		$('.film_descr').toggleClass('film_descr_width');
		return false;
	});


	if ($(document).width() <= 480) {
		$('.film_rating .stars .descr').addClass('stars__show');
		$('.submenu__right_coner').removeClass('submenu__right_coner');
	};

	$('.stars__show').on('click', function () {
		$('.film_rating .stars__rank').slideToggle();
		});
	$('.radio').on('click', function () {
		$('.film_rating .stars__rank').slideUp();
	});

	//480
	//хлебные крошки  ХЕДЕР

	$('.js_gime__more').on('click', function() {
		$(this).parents('#container').find('.side__bread, .everybody_in_shadow').slideToggle('fast');
		return false;
	});

	$('.everybody_in_shadow').click(function() {
		$(this).parents('#container').find('.side__bread, .side__menu').slideUp();
		$(this).fadeOut();
	});
	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
				    $(this).removeClass("is-active");
				    select_list.slideUp("fast");
				}
				else {
				    $(".js-select").removeClass("is-active");
				    $(".js-select-list").hide();
				    select_list.slideDown("fast");
				    $(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parent().parent().find(".js-select-text").text(text);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
	    event.stopPropagation();
	});


	$('.footer__butter').on('click', function() {
		$('.footer_bottom_propose').slideToggle(500);
		return false;
	});

	/* Меню входа и регистрации */

	$('.account .account_icon_1').click(function(){

		var popup = $('#popup_login');

		$('.error span', popup).removeClass('left');

		var offset = $(this).offset().left;
		var popup_width = popup.outerWidth();
		var error_width = $('.error span', popup).outerWidth();
		var site_width = $('#site').width();

		if ((offset + error_width + popup_width) > site_width) {
			$('.error span', popup).addClass('left');
		}

		popup.css('left', offset-146);

		$('#popup_login, #modal').fadeIn();

		return false;

	});

	$('.account .account_icon_2').click(function(){

		var popup = $('#popup_register');

		$('.error span', popup).removeClass('left');

		var offset = $(this).offset().left;
		var popup_width = popup.outerWidth();
		var error_width = $('.error span', popup).outerWidth();
		var site_width = $('#site').width();

		if ((offset + error_width + popup_width) > site_width) {
			$('.error span', popup).addClass('left');
		}

		popup.css('left', offset-135);

		$('#popup_register, #modal').fadeIn();

		return false;

	});


	/*  Реализация модальных окон */

	$('.modal, #modal, .simple_popup .close').click(function(){
			$('.popup, .simple_popup, #modal').fadeOut();
		});

	$(document).keyup(function(e) {
		if (e.which == 27) {
			$('#modal, .popup, .simple_popup').fadeOut();
		}
	});


	/* Реализация плейсхолдеров через value */

	$('input[type="text"], input[type="password"], textarea').each(function(){

		if ($(this).parents('.skip_placeholder').length == 0) {

			if ($(this).is('input')) {
				var value = $(this).val();
			} else {
				var value = $(this).text();
			}

			if (value) {
				$(this).data('placeholder', value);
				$(this).focus(function(){
					if ($(this).val() == value) $(this).val('');
				}).blur(function(){
					if ($(this).val() == '' | $(this).val() == value) $(this).val(value);
				});
			}

		}

	});

	$("form").submit(function() {
		$(this).find('input').each(function() {
			if ($(this).val() == $(this).data('placeholder')) $(this).val('');
		});
		$(this).find('textarea').each(function() {
			if ($(this).text() == $(this).data('placeholder')) $(this).text('');
		});
	});


	/* Слайдеры для фильмов со всплывающим описанием */

	if ($.fn.owlCarousel && $('.category_slider_inner').length > 0) {

		$('.category_slider_item').each(function(){
			$(this).css('width', $(this).outerWidth());
		});

		$('.category_slider_inner').on('translate.owl.carousel', function(event){

			var element = event.target;

			var carousel_width = $(element).width();
			var left_offset = $(element).offset().left;
			var right_offset = left_offset + carousel_width;

			$('.owl-item', element).each(function(){

				if ($('.double_slide', this).length) {

					var item = $(this);

					var offset_start = item.offset().left;

					var timer = setTimeout(function(){

						if (offset_start > left_offset && (!item.hasClass('cloned') || item.hasClass('active'))){

							var offset_end = item.offset().left;

							var center = false;

							if (offset_start < offset_end) {
								/* Пролистывание влево */
								var slide_shift = $('.owl-item.active', element).first().width();
								center = (offset_end > (right_offset-slide_shift-256));
							} else {
								/* Пролистывание вправо */
								center = (offset_end < (right_offset+256) && offset_end > (right_offset-256));
							}

							if (center) {
								item.addClass('centered');
							} else {
								item.removeClass('centered');
							}

						} else {
							item.removeClass('centered');
						}
					}, 200);

					item.data('timer', timer);
				}
			});
		}).owlCarousel({
			loop: true,
			autoWidth: true,
			autoplay: false,
			autoplaySpeed: 700,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			nav: true,
			navSpeed: 700,
			dots: false,
			responsive: {
				0: {
					items: 1,
				},
				550: {
					items: 2,
				},
				768: {
					items: 4,
				},
				1280: {
					items: 5,
				}
			}
		});

		$('.category_slider .arrow_l').click(function(){
			var parent = $(this).parents('.category_slider');
			parent.find('.owl-prev').trigger('click');
			parent.find('.category_slider_inner > .description').fadeOut(300, function(){$(this).remove();});
		});

		$('.category_slider .arrow_r').click(function(){
			var parent = $(this).parents('.category_slider');
			parent.find('.owl-next').trigger('click');
			parent.find('.category_slider_inner > .description').fadeOut(300, function(){$(this).remove();});
		});
			//baxazar -> if wrap
		if ($(document).width() >=768) {
			$('.category_slider_item .description').parents('.category_slider_item').mouseenter(function(){

				var item = $(this);
				var item_width = item.outerWidth();
				var item_offset = item.offset().left;

				var carousel = item.parents('.category_slider_inner');
				var carousel_width = carousel.width();
				var carousel_offset = carousel.offset().left;

				var clone = item.find('.description').clone();

				carousel.children('.description').fadeOut(300, function(){$(this).remove();});
				carousel.trigger('autoplay.stop.owl').append(clone);

				var clone_width = clone.show().outerWidth();

				clone.hide().fadeIn(300);

				var direction = (item_offset > (carousel_offset + clone_width));
				var lack_space = (carousel_offset < clone_width);


				if ((direction && lack_space) || (!direction && !lack_space)) {
					clone.removeClass('side_r').addClass('side_l').css('left', item_offset - carousel_offset - clone_width);
				} else {
					clone.removeClass('side_l').addClass('side_r').css('left', item_offset - carousel_offset + item_width);
				}

				carousel.parents('.category_slider').mouseleave(function(){

					clone.fadeOut(300, function(){clone.remove();});

					carousel.trigger('autoplay.play.owl');

				});

			});
		}; // end baxazar -> if wrap


	}   // END   if ($.fn.owlCarousel && $('.category_slider_inner')

});

	// baxazar comment 06.08

	/*if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
		(function(win, doc) {

			// change viewport to landscape size (device-height)
			var viewport = doc.querySelector('meta[name=viewport]');
			viewport.content = 'width=device-height';

			// creates height guard
			var heightGuard = doc.createElement('div');
			heightGuard.id = 'heightGuard';
			doc.body.appendChild(heightGuard);

			// must know if it's an iPad since it has a different screen proportion
			var isiPad = /iPad/.test(navigator.platform);

			// new style element
			var css = doc.createElement('style');
			doc.body.appendChild(css);
			css.innerText =
				"@media screen and (orientation:portrait){" +
					"body{"+
						"position:relative;"+
					"}"+
					"#heightGuard{" +
						"position:absolute;" +
						"top:0;" +
						"left:0;" +
						"width:1px;" +
						"zIndex:-1;" +
						"visibility:hidden;" +
						"height:" + (isiPad? '133.333%' : '150%') + ";" +
					"}" +
					"#" + (doc.body.getAttribute('data-container') || 'container') + "{" +
						"-webkit-transform:" + (isiPad? 'scale(1.33333)' : 'scale(1.5)') + ";" +
						"-webkit-transform-origin:top left;" +
						"width:" + (isiPad? '768px' : '320px') + ";" +
					"}" +
				"}";

		})(window, document);
	}
	*/
	// baxazar comment 06.08



function reload_carousel(carousel, item_width) {

	var items_width = 0;
	var skip_set_width = !(item_width);

	$('li', carousel).each(function(){

		if (skip_set_width) {
			item_width = $(this).outerWidth(true);
		} else {
			$(this).css('width', item_width);
		}

		items_width += item_width;

	});

	$('ul', carousel).css('width', items_width);

	return items_width;

}


	//перезагрузка страницы при изменении размера
	$(window).on('resize',function(){
			reload_carousel($('.category_slider_inner'));
		});

function center_carousel(carousel) {

	var carousel = $(carousel);
	var carousel_width = carousel.outerWidth();
	var item_width = carousel.jcarousel('items').outerWidth();

	if (item_width > 0 && carousel_width > item_width) {
		var carousel_shift = parseInt(carousel_width % item_width)/2 - item_width;
		carousel.css('left', carousel_shift);
	}

}

