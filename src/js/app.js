$(document).ready(function() {
	//хедер меню бутербродиком
	$('.burger').on('click', function() {
		$('.navigation').toggleClass('is_active');
	});
});