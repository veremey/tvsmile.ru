
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