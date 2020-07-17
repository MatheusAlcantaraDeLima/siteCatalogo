$('nav a').click(function(e){
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset
	}, 1000);
});