$(document).ready(movil);

function movil(){
$(document).ready(function(){
	var altura = $('.menu_bar').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu_bar').addClass('menu-fixed');
		} else {
			$('.menu_bar').removeClass('menu-fixed');
		}
	});

});
};



var contador = 1;


	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});
	
