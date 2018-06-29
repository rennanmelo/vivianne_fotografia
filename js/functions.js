$(function(){

//////////////// Page 1 ////////////////

	var indiceSlideAtual = 0;
	var indiceSlideMaximo = $('.slider img').length;
	var delay = 5000;
	var imgSlider = ('.slider img');

	initSlider();
	

	//Adicionando spans dinamicamente
	for(var i=0; i < indiceSlideMaximo; i++){
		if(i==0){
			$('.bullets').append('<span style="background-color:rgb(247, 120, 56);"></span>');
		}
		else{
			$('.bullets').append('<span></span>');
		}
	}

	//Iniciando o slider
	function initSlider(){
		$(imgSlider).eq(0).fadeIn();
			setInterval(function(){
				alternarSlider();
			},delay);
	}

	//Eventos do slider
	cliqueSlider();
	function cliqueSlider(){
		$('.bullets span').click(function(){
			$(imgSlider).eq(indiceSlideAtual).stop().fadeOut(2000);
			indiceSlideAtual = $(this).index();
			$(imgSlider).eq(indiceSlideAtual).stop().fadeIn(2000);
			$('.bullets span').css('background-color','rgb(50,50,50)');
			$(this).css('background-color','rgb(247, 120, 56)');
			
		})
	}

	function alternarSlider(){
		$(imgSlider).eq(indiceSlideAtual).fadeOut(2000);
		indiceSlideAtual++;
		if(indiceSlideAtual == indiceSlideMaximo){
			indiceSlideAtual = 0;
		}
		$('.bullets span').css('background-color','rgb(50,50,50)');
		$('.bullets span').eq(indiceSlideAtual).css('background-color','rgb(247, 120, 56)');
		$(imgSlider).eq(indiceSlideAtual).fadeIn(2000);
	}

	


//////////////// Slider Pages ////////////////
	
//Config iniciais do site

	var indicePageAtual = 0;

	initPageSlider();
	function initPageSlider(){
		$('section.pages .page').eq(0).fadeIn();
		$('.menu ul li').eq(0).css('background-color','rgba(247, 120, 56, 0.6)');
	}

		

//Menu e Mudança de paginas
	menuHover();	
	function menuHover(){
		$('.menu li').hover(
			function(){
				$(this).css('color','#ff6600');
			},
			function(){
				$(this).css('color','white');
			}
		);
	}	

	cliquePageSlider();
	function cliquePageSlider(){
		$('.menu ul li').click(function(){
			$('section.pages .page').eq(indicePageAtual).stop().fadeOut(1000);
			indicePageAtual = $(this).index();
			$('section.pages .page').eq(indicePageAtual).stop().fadeIn(1000);
			$('.menu ul li').css('background-color','rgba(50,50,50,0.4)');
			$(this).css('background-color','rgba(247, 120, 56, 0.6)');
		})
	}

// Config. Page 2
	
	categoriasHover();
	function categoriasHover(){
		$('.mosaico-single').hover(
			function(){
				$(this).css('opacity','1');
			},
			function(){
				$(this).css('opacity','0.6');
			}
		);
	}




	//BUG

	//Qnd sai de um tipo de menu pro outro o background não mantém nos icones do menu
	// ver nos exemplos anteriores, mas não precisa fazer isso, não há essa troca de tela, porém precisa fazer o mobile iniciar do mesmo jeito do desktop.
	

})