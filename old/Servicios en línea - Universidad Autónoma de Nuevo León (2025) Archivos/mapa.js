// ================
//Funciones para Mapa Ciudad Universitaria

$(document).ready(function() {
  $(document).ready(function() {

    // Cerramos cualquier categoria que este abierta para que se abra la categoria del pin que se esta seleccionando.
    function cerrar_categoria(){
      $('.mapplic-list li').removeClass('mapplic-opened');
      $('.mapplic-list li > ol').css('display', 'none');
    }
    // Abrimos la categoria del pin seleccionado y la movemos en el top del sidebar del mapa.
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
});