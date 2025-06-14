var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

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

}
/*
     FILE ARCHIVED ON 15:47:46 Aug 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:55:11 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.694
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.015
  cdx.remote: 6.672
  LoadShardBlock: 54.521 (3)
  PetaboxLoader3.datanode: 72.109 (4)
  load_resource: 196.693
  PetaboxLoader3.resolve: 149.247
*/