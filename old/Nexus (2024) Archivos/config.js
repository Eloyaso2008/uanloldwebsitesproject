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

var CONFIG = (function() {
    var PROD_DOMAIN = {
		URL:    "https://web.archive.org/web/20240606034029/https://plataformanexus.uanl.mx",
		SSL:    "https://web.archive.org/web/20240606034029/https://plataformanexus.uanl.mx",
		SCORM:  "https://web.archive.org/web/20240606034029/https://scorm.nexus.uanl.mx",
		SCORM_API:"https://web.archive.org/web/20240606034029/https://api.dti.uanl.mx/SCORMApi/",
		WEBAPI:    "https://web.archive.org/web/20240606034029/https://api.nexus.uanl.mx/WebApi/",
		BITACORAAPI:"https://web.archive.org/web/20240606034029/https://apib.nexus.uanl.mx/BitacoraApi/",
		LTIAPI:    "https://web.archive.org/web/20240606034029/https://api.dti.uanl.mx/LTIApi/",
		OFFICEAPI: "https://web.archive.org/web/20240606034029/https://api.dti.uanl.mx/OfficeApi/"
    }
	
	var PROD_IP = {
		URL:    "https://web.archive.org/web/20240606034029/https://148.234.2.184",
		SSL:    "https://web.archive.org/web/20240606034029/https://148.234.2.184",
		SCORM:  "https://web.archive.org/web/20240606034029/http://148.234.2.189",
		SCORM_API:"https://web.archive.org/web/20240606034029/https://api.nexus.uanl.mx/SCORMApi/",
		WEBAPI:    "https://web.archive.org/web/20240606034029/http://148.234.2.183/WebApi/",
		BITACORAAPI:"https://web.archive.org/web/20240606034029/http://148.234.2.192/BitacoraApi/",
		LTIAPI:    "https://web.archive.org/web/20240606034029/http://148.234.2.193/LTIApi/",
		OFFICEAPI: "https://web.archive.org/web/20240606034029/http://148.234.2.193/OfficeApi/"
    }

    var SERVER = PROD_DOMAIN;

    return {
        get_URL: function()       { return SERVER.URL },
        get_URL_SSL: function()   { return SERVER.SSL },
		get_URL_SCORM: function() { return SERVER.SCORM },
		get_URL_API_SCORM: function() { return SERVER.SCORM_API },
        get_URL_API: function()   { return SERVER.WEBAPI },
        get_URL_LTI: function() { return SERVER.LTIAPI },
		get_URL_OFFICE: function() { return SERVER.OFFICEAPI },
		get_URL_BITACORA: function() { return SERVER.BITACORAAPI },
		
		SIASE_Portafolio_Config: function() { 
            return {
                BotonEnviarCalificacionesSIASE: true,
                ColumnaCalificacionSIASE: true,
            }
        },
    }

})(CONFIG||{})

}
/*
     FILE ARCHIVED ON 03:40:29 Jun 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:22 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.499
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.013
  esindex: 0.01
  cdx.remote: 10.34
  LoadShardBlock: 96.656 (3)
  PetaboxLoader3.datanode: 142.931 (5)
  load_resource: 425.888 (2)
  PetaboxLoader3.resolve: 278.564 (2)
*/