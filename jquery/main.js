/*
$(document).ready(movil);

function movil(){
$(document).ready(function(){
	var altura = $('.menu_principal').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu_principal').addClass('menu-fixed');
		} else {
			$('.menu_principal').removeClass('menu-fixed');
		}
	});

});
};*/




$(document).ready(desktop);

function desktop(){
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


/*

$(document).ready(function(){
	$(".menu_principal").prepend('<div id="menu_entrada"></div>');
	$("#menu_entrada").click(function(){
		$("#menu").slideToggle();
	});
});
*/