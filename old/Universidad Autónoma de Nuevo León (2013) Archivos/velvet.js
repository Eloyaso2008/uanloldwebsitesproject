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

$(function() {
	
	/* Slider principal */
	if($(".front-slider").length) {
		$(".front-slider").cycle({		
			fx: "fade",
			timeout: 10000,
			speed: 800,
			height: "auto"
		});   
	}

    /* Pestañas de redes sociales */
	if($(".social-tabs").length) {
		$(".social-tabs").jqtabs();
	}
	
	/* COLORBOX */
	/* Mapa del sitio y organigramas */
	if($(".overlay-trigger").length) {
		$(".overlay-trigger").colorbox({			
			width: "60%",
			close: "Cerrar"			
		});
	}
	/* Galería de noticias */
	if($(".text.noticia .cycle-slideshow a").length) {
		$(".text.noticia .cycle-slideshow a").colorbox({
			maxHeight: "80%",
			close: "Cerrar"
		});
	}
	
	/* Menú toggler, para versión móvil */
	if($(".menu-toggler").length) {
		$(".menu-toggler").click(function() {
			$(this).toggleClass("open");
			$(".nav-side .menu").toggle('flip');
		});
	}
	
});

/* Abre ventana, para radio y televisión */
function abre_ventana(url, nombre, parametros) {
	window.open (url, nombre, parametros);
}
function nva_ventana(url) {
	window.location=url;
}

}
/*
     FILE ARCHIVED ON 15:40:29 Aug 05, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:51:17 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.459
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 69.847
  LoadShardBlock: 285.754 (3)
  PetaboxLoader3.datanode: 184.0 (4)
  PetaboxLoader3.resolve: 183.458 (2)
  load_resource: 132.468
*/