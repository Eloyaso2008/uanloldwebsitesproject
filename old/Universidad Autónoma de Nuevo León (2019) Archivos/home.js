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
  // Pantalla completa en slider principal
  $('#stage .full').toggle(function(){
    // Ocultar todos los elementos excepto el slider
    $('div#content').children().not('section#stage').hide();
    $('div#page').children().not('div#content').hide();
    
    // Hacer el slider pantalla completa
    $('.slider-principal').css('height', '100%');
    $('.slider-principal .item').css('height', '100%');
    $('.slider-principal .item div.container .detalle').css('height', $(window).height());
  }, function(){
    // Salir de la pantalla completa
    $('section#stage div.slider-principal').css('height', '615px');
    $('section#stage div.slider-principal .item').css('height', '615px');
    $('section#stage div.slider-principal .item div.container .detalle').css('height', '615px');

    // Mostrar todos los elementos ocultos anteriormente
    $('div#page').children().not('.pum').show();
    $('section#eventos').show();
    $('section#noticias').show();
    $('section#repositorio').show();
    $('section#enlaces-externos').show();
  });

  // ================
  // Agrega imagen de fondo en el div de enlaces externos (en Inicio)
  $('.nota2').each(function(){
    var img = $(this).find('img').attr('src');
    $(this).find('img').hide();
    $(this).find('div:eq(0)').css('background-image','url(' + img + ')');
  });

});

}
/*
     FILE ARCHIVED ON 15:47:46 Aug 05, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:55:13 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.7
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 15.067
  LoadShardBlock: 1241.031 (3)
  PetaboxLoader3.resolve: 1232.87 (3)
  PetaboxLoader3.datanode: 67.787 (4)
  load_resource: 79.381
*/