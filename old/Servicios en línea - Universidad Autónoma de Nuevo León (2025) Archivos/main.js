$(document).ready(function(){

  // ================
  // Footer contactanos
  const preventDefault = e => e.preventDefault();

  $('.abrir a').click(function(){
    if ($(this).hasClass('active')){
      cierre_contactanos(window.innerWidth);
    }else {
      apertura_contactanos(window.innerWidth);
    }
  });

  // Cierre de Desktop
  $('.cerrar-footer').click(function(){
    $('#footer-links').animate({bottom: '-2000px'}, 350);
    $('#footer-links').removeClass('open');
    $('.abrir').fadeIn(400);
    $('.abrir a').removeClass('active');
    $('body').removeClass('noscroll');
  });

  function cierre_contactanos(screen_height){
    // Cierre de movil
    if (screen_height < 767){
      $('#footer-links').animate({bottom: '-500px'}, 350);
      $('.abrir a').removeClass('active');
      $('body').removeClass('noscroll');
      window.removeEventListener('touchmove', preventDefault);
    }
  }

  function apertura_contactanos(screen_height){
    // Apertura de Desktop
    if (screen_height > 767){
      $('#footer-links').css('height', $(window).height()).stop(true, true).animate({ bottom: '0' }, 350);
      $('.abrir').fadeOut(400);
      $('#footer-links').addClass('open');
    // Apertura de Móvil
    }else{
      $('#footer-links').animate({bottom: '40px'}, 350);
      window.addEventListener('touchmove', preventDefault, {
        passive: false
     });
    }

    $('body').addClass('noscroll');
    $('.abrir a').addClass('active');
  }

	// ================
	// Agrega la imagen de fondo en los templates
	$('section').each(function(){
		if( $(this).attr('data-bg') )
			$(this).css('background-image', 'url(' + $(this).attr('data-bg') + ')');
	});

	// ================
	// Agrega la clase ".table" si hay tablas dentro de .contenido-pagina
	if ($('.contenido-pagina').length) {
		$('table').addClass('table');
	}

	// ================
	// Animación del módulo Solicitar más información
	$('.ancla').click(function(){
    var $anchor = $(this);
    $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000);
    return false;
  });

	// ================
	//Hover de nota en secciones Home y Noticias
	$('#noticias article').hover(
		function(){ $(this).find('.nota-over').show(); },
		function(){ $(this).find('.nota-over').hide(); }
	);

});