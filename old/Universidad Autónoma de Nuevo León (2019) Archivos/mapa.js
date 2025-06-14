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

// ================
//Funciones para Mapa Ciudad Universitaria

$(document).ready(function() {

  // Cerramos cualquier categoría que esté abierta para que se abra la categoría del pin que se está seleccionando.
  function cerrar_categoria(){
    $('.mapplic-list li').removeClass('mapplic-opened');
    $('.mapplic-list li > ol').css('display',	 'none');
  }
  // Abrimos la categoría del pin seleccionado y la movemos en el top del sidebar del mapa.
  function mostrar_categoria(id_facultad){
    $('.mapplic-list li[data-category="'+id_facultad+'"]').addClass('mapplic-opened');
    $('.mapplic-list li[data-category="'+id_facultad+'"] > ol').css('display', 'block');
    $('.mapplic-list').animate({
      scrollTop: $('.mapplic-list li[data-category="'+id_facultad+'"]').offset().top - $('.mapplic-list').offset().top + $('.mapplic-list').scrollTop()
    });
  }

  // facultad-de-ciencias-biologicas
  $('.mapplic-layer a[data-location="facultad-de-ciencias-biologicas"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-ciencias-biologicas");
  });

  // facultad-de-ciencias-quimicas
  $('.mapplic-layer a[data-location="facultad-de-ciencias-quimicas"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-ciencias-quimicas");
  });

  // facultad-de-ciencias-fisico-matematicas
  $('.mapplic-layer a[data-location="facultad-de-ciencias-fisico-matematicas"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-ciencias-fisico-matematicas");
  });

  // facultad-de-ingenieria-civil
  $('.mapplic-layer a[data-location="facultad-de-ingenieria-civil"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-ingenieria-civil");
  });

  // facultad-de-ingenieria-mecanica-y-electrica
  $('.mapplic-layer a[data-location="facultad-de-ingenieria-mecanica-y-electrica"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-ingenieria-mecanica-y-electrica");
  });

  // facultad-de-arquitectura
  $('.mapplic-layer a[data-location="facultad-de-arquitectura"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-arquitectura");
  });

  // facultad-de-derecho-y-criminologia
  $('.mapplic-layer a[data-location="facultad-de-derecho-y-criminologia"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-derecho-y-criminologia");
  });

  // facultad-de-filosofia-y-letras
  $('.mapplic-layer a[data-location="facultad-de-filosofia-y-letras"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-filosofia-y-letras");
  });

  // facultad-de-contaduria-publica-y-administracion
  $('.mapplic-layer a[data-location="facultad-de-contaduria-publica-y-administracion"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-contaduria-publica-y-administracion");
  });

  // facultad-de-trabajo-social-y-desarrollo-humano
  $('.mapplic-layer a[data-location="facultad-de-trabajo-social-y-desarrollo-humano"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-trabajo-social-y-desarrollo-humano");
  });

  // facultad-de-organizacion-deportiva
  $('.mapplic-layer a[data-location="facultad-de-organizacion-deportiva"]').click(function() {
    cerrar_categoria();
    mostrar_categoria("facultad-de-organizacion-deportiva");
  });
});

}
/*
     FILE ARCHIVED ON 15:47:46 Aug 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:55:12 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.517
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.012
  cdx.remote: 6.506
  LoadShardBlock: 131.18 (3)
  PetaboxLoader3.resolve: 190.17 (2)
  PetaboxLoader3.datanode: 100.349 (4)
  load_resource: 209.516
*/