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

// Archivo JScript

//Lo de AJAX v----------------------------------------------------------------------------
function getHTTPObject() {
    var xmlhttp;
    /*@cc_on
    @if (@_jscript_version >= 5)
       try {
          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
          try {
             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (E) { xmlhttp = false; }
       }
    @else
    xmlhttp = false;
    @end @*/
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
       try {
          xmlhttp = new XMLHttpRequest();
       } catch (e) { xmlhttp = false; }
    }
    return xmlhttp;
}



var enProceso = false; // lo usamos para ver si hay un proceso activo
var enProcesoBotones = false; // lo usamos para ver si hay un proceso activo
var enProcesoBotonesLink = false; // lo usamos para ver si hay un proceso activo
var enProcesoPrograma = false; // lo usamos para ver si hay un proceso activo
var enProcesoMenu = false; // lo usamos para ver si hay un proceso activo
var enProcesoContenido = false; // lo usamos para ver si hay un proceso activo
var enProcesoMes = false; // lo usamos para ver si hay un proceso activo
var http = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpBotones = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpBotonesLink = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpPrograma = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpMenu = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpContenido = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var httpMes = getHTTPObject(); // Creamos el objeto XMLHttpRequest
var pat= '/<script[^>]*>([\S\s]*?)<\/script[^>]*>/ig'; //Expresion regular tag script
var Mes;
/* Ejecutar javascript que viene de ajax */
function evalScript(scripts)
    {	
        try
	    {	
	        if(scripts != '')	
		    {	
		        var script = "";
			    scripts = scripts.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(){
                          if (scripts !== null) script += arguments[1] + '\n';
 	        	          return '';});
			    if(script) (window.execScript) ? window.execScript(script) : window.setTimeout(script, 0);
		    }
		return false;
	    }
	    catch(e)
	    {	
	        alert(e)
	    }
    }

/*Idioma*/
//----------------
var idiomaActual='ES';
var idioma;
function cambiaAparienciaControl(Idioma) 
{
                  
    idioma = Idioma;

    if(idiomaActual != idioma)//Si el idioma solicitado es diferente al actual entonces se cambia
    {
    
        if(cadenaIdsLabels.length > 0) cambiaIdiomaLabels(idioma,cadenaIdsLabels);
        if(cadenaIdsBotones.length > 0) cambiaIdiomaBotones(idioma,cadenaIdsBotones);
        if(cadenaIdsBotonesLink.length > 0) cambiaIdiomaBotonesLink(idioma,cadenaIdsBotonesLink);
        idiomaActual = idioma;
    }
}  
function asignaIdiomaInicial() {
//alert("I="+ String(leeCookie())+"--");
    if(String(leeCookie())!="")
    {
     if(validaCrossSS(String(leeCookie()))) {
       
    cambiaAparienciaControl(String(leeCookie()));
        
        }
    }
//cambiaAparienciaControl('EN');

}
function leeCookie() {
         name = 'PlataformaUANL-Idioma';
         name_index = document.cookie.indexOf(name+'=');
         
         if(name_index == -1)
            return('');
         
         cookie_value =  document.cookie.substr(name_index + name.length + 1, 
                                                document.cookie.length);
         
         //All cookie name-value pairs end with a semi-colon, except the last one.
         end_of_cookie = cookie_value.indexOf(';');
         if(end_of_cookie != -1)
            cookie_value = cookie_value.substr(0, end_of_cookie);

         //Restores all the blank spaces.
         space = cookie_value.indexOf('+');
         while(space != -1)
              { 
              cookie_value = cookie_value.substr(0, space) + ' ' + 
              cookie_value.substr(space + 1, cookie_value.length);
							 
              space = cookie_value.indexOf('+');
              }

         return(cookie_value);
}
//------------------------------------------
function handleHttpResponse() {//alert("Llegue al handle1");
    if (http.readyState == 4) {
       if (http.status == 200) {
          if (http.responseText.indexOf('invalid') == -1) {
        //  Aqui para ver los Labes cadena  alert(cadenaIdsLabels);
            resultsIds = cadenaIdsLabelsCI.split("-*-");
		    results = http.responseText.split("-*-");
		    if(results.length-1 == 0)
		    {
		    if(document.getElementById(resultsIds[0]) != null)
		        {
		            document.getElementById(resultsIds[0]).innerHTML = results;
		        }	  
		       
		    }  
		    for(i=0;i<results.length-1;i++)
		    {
		        if (resultsIds[i] == "ctl00_ContentPlaceHolder2_btnEntrar")
		        {
		        document.getElementById(resultsIds[i]).innerHTML = "<span>" + results[i] + "</span>";
		        }
		        else
		        {
		        document.getElementById(resultsIds[i]).innerHTML = results[i];
		        }
		  	} 
		  	  
		  	   if(document.getElementById(resultsIds) != null)
		     {
		         document.getElementById(resultasIds).innerHTML = results;
		     }  
		   
		    //alert("termine el for");
			enProceso = false;
			
          }
       }
    }
}
//******************************************
function handleHttpResponseBotones() {//alert("Llegue al handle1");
    if (httpBotones.readyState == 4) {
       if (httpBotones.status == 200) {
          if (httpBotones.responseText.indexOf('invalid') == -1) 
          {
            resultsIds = cadenaIdsBotones.split("-*-");
		    results = httpBotones.responseText.split("-*-");
		    if(results.length-1 == 0)
		    {
		        if(document.getElementById(resultsIds[0]) != null)
		        {
		            document.getElementById(resultsIds[0]).innerHTML = results;
		        }
		        
		    } 
		    for(i=0;i<results.length-1;i++)
		    {
		        if(document.getElementById(resultsIds[i]) != null)
	            {
	                document.getElementById(resultsIds[i]).innerHTML = results[i];
	            }
		    }
		    enProceso = false;
		  }
       }
    }
}
//***************************************************

function handleHttpResponseBotonesLink() {
    if (httpBotonesLink.readyState == 4) {
       if (httpBotonesLink.status == 200) {
          if (httpBotonesLink.responseText.indexOf('invalid') == -1) {
            
            resultsIds = cadenaIdsBotonesLinkCI.split("-*-");
		    results = httpBotonesLink.responseText.split("-*-");
		    
		    if((results.length)>2) //si trae más de 1 control
		    {
		       
		        for(i=0;i<results.length-1;i++)
		        {
		        document.getElementById(resultsIds[i]).innerHTML = results[i];
		        }
		     }
		     else
		     {
		        
		        document.getElementById(resultsIds).innerHTML = results;
		     }
			enProcesoBotonesLink = false;
          }
       }
    }
}

//***************************************************

function handleHttpResponsePrograma() {
    if (httpPrograma.readyState == 4) {
       if (httpPrograma.status == 200) {
          if (httpPrograma.responseText.indexOf('invalid') == -1) {
            
		    results = httpPrograma.responseText;
		    //alert("Esto es el results:\n\n"+results);
		    //results = "Hi....";
		    //window.setTimeout('document.getElementById("divPrograma").innerHTML = results;',2000);
            document.getElementById("divPrograma").innerHTML = results;
            evalScript(results);
			enProcesoPrograma = false;
          }
       }
    }
}


//***************************************************

function handleHttpResponseMenu() {
    if (httpMenu.readyState == 4) {
       if (httpMenu.status == 200) {
          if (httpMenu.responseText.indexOf('invalid') == -1) {
            
		    results = httpMenu.responseText;
		    //window.setTimeout('document.getElementById("divMenu").innerHTML = results;',3000);
            document.getElementById("divMenu").innerHTML = results;
            evalScript(results);
			enProcesoMenu = false;
          }
       }
    }
}

//***************************************************

function handleHttpResponseContenido() 
{
   
    
    if (httpContenido.readyState == 4) 
    {
        if (httpContenido.status == 200) 
        {
            if (httpContenido.responseText.indexOf('invalid') == -1) 
            {
                results = httpContenido.responseText;
                document.getElementById("divContenido").innerHTML = results;
                evalScript(results);
                enProcesoContenido = false;
            }
       }
    }
}


function cambiaIdiomaLabels(idioma,cadenaIds) {
  
    if (!enProceso && http) {
	   var idioma = String(idioma);
	   var cadenaIds = String(cadenaIds);
	// alert("cadenaIds="+cadenaIds);
	   if(validaCrossSS(idioma) && validaCrossSS(cadenaIds))//Valida cadenas para evitar CSS
	    {   
	  
	        var url = "../Idiomas/cambiaIdioma.aspx?idioma="+idioma+"&cadenaIds="+cadenaIds;
	        http.open("GET", url, true);
            http.onreadystatechange = handleHttpResponse;
            enProceso = true;
            http.send(null);
         }
        else
        {
         //Llamada a función de mensajes
         alert("Cambiar por Llamada a función de mensajes");
        }
         
    }
}
function cambiaIdiomaBotones(idioma,cadenaIds) {

	if (!enProcesoBotones && httpBotones) {
	   var idioma = String(idioma);
	   var cadenaIds = String(cadenaIds);
	   if(validaCrossSS(idioma) && validaCrossSS(cadenaIds))//Valida cadenas para evitar CSS
	    {
	        var url = "../Idiomas/cambiaIdioma.aspx?idioma="+idioma+"&cadenaIds="+cadenaIds;
            httpBotones.open("GET", url, true);
            httpBotones.onreadystatechange = handleHttpResponseBotones;
            enProcesoBotones = true;
            httpBotones.send(null);
            
         }
        else
        {
         //Llamada a función de mensajes
         alert("Cambiar por Llamada a función de mensajes");
        }
         
    }
}

//*******************************************************************************************

function cambiaIdiomaBotonesLink(idioma,cadenaIds) {

	if (!enProcesoBotonesLink && httpBotonesLink) {
	   var idioma = String(idioma);
	   var cadenaIds = String(cadenaIds);
	   if(validaCrossSS(idioma) && validaCrossSS(cadenaIds))//Valida cadenas para evitar CSS
	    {
	        var url = "../Idiomas/cambiaIdioma.aspx?idioma="+idioma+"&cadenaIds="+cadenaIds;
            httpBotonesLink.open("GET", url, true);
            httpBotonesLink.onreadystatechange = handleHttpResponseBotonesLink;
            enProcesoBotonesLink = true;
            httpBotonesLink.send(null);
          
         }
        else
        {
         //Llamada a función de mensajes
         alert("Cambiar por Llamada a función de mensajes");
        }
         
    }
}

function validaCrossSS(cadena) {
//Función que recibe una cadena y valida la existencia de algún TAG de HTML para evitar
//Cross Site Scripting
//Regresa un 0 si encuentra algún TAG y 1 si NO lo encuentra
    var respuesta;
    patron = new RegExp("<[^>]*>","i");
    
    respuesta = 1;
    resultados = cadena.match(patron);
    if(resultados != null) respuesta = 0;
    return respuesta;
}
//Lo de AJAX ^----------------------------------------------------------------------------

function cargaPrograma() {
	if (!enProcesoPrograma && httpPrograma) 
	    {
            var url = "Programa.aspx";
            httpPrograma.open("GET", url, true);
            httpPrograma.onreadystatechange = handleHttpResponsePrograma;
            enProcesoPrograma = true;
            httpPrograma.send(null);
        }
}

function cargaMenu() {
	if (!enProcesoMenu && httpMenu) 
	    {
            var url = "Menu.aspx";
            httpMenu.open("GET", url, true);
            httpMenu.onreadystatechange = handleHttpResponseMenu;
            enProcesoMenu = true;
            httpMenu.send(null);
        }
}


function cargaContenido(cual) {
    
	if (!enProcesoContenido && httpContenido) 
	    {
            var url;
            url = String(cual);
            httpContenido.open("GET", url, true);
            httpContenido.onreadystatechange = handleHttpResponseContenido;
            enProcesoContenido = true;
            httpContenido.send(null);
        }
}


   function AbrirVentana()
        {
           
            window.open('contraseña_olvidada.aspx', 'Contraseña', 'width=465,height=250,status=yes,toolbar=no,resizable=yes,menubar=no,scrollbars=no');
        }
        
       function cambiarIdioma() 
       {
            if(window.parent.frames[1] != null)
            {
               window.parent.frames[1].location.reload();
            }
            if(window.parent.frames[0] != null)
            {
               window.parent.frames[0].location.reload();
            }
            if(window.parent.frames[2] != null)
            {
               window.parent.frames[2].location.reload();
            }
           
       }
       
       function validarsession()
        {
        //ValidarSessiones('../MasterPages/SessionCheck.aspx');
        }
       function ValidarSessiones(cual) 
        {
            
	        if (!enProcesoContenido && httpContenido) 
	            {
                    var url;
                    url = String(cual);
                    httpContenido.open("GET", url, true);
                    httpContenido.onreadystatechange = handleHttpResponseContenidoSessiones;
                    enProcesoContenido = true;
                    httpContenido.send(null);
                }
        }

       function handleHttpResponseContenidoSessiones() 
        {
            if (httpContenido.readyState == 4) 
            {
                if (httpContenido.status == 200) 
                {
                    if (httpContenido.responseText.indexOf('invalid') == -1) 
                    {
                        results = httpContenido.responseText;
                        if(results=='')
                        {
                        location.href="../login/wflogin.aspx";
                        }
                        evalScript(results);
                        enProcesoContenido = false;
                    }
               }
            }
        }
        
        function CambiarCorreo(cual) 
        {
            
	        if (!enProcesoContenido && httpContenido) 
	            {
                    var url;
                    url = String(cual);
                    httpContenido.open("GET", url, true);
                    httpContenido.onreadystatechange = handleHttpResponseContenidoSessionesCorreo;
                    enProcesoContenido = true;
                    httpContenido.send(null);
                }
        }
        function handleHttpResponseContenidoSessionesCorreo() 
        {
            if (httpContenido.readyState == 4) 
            {
                if (httpContenido.status == 200) 
                {
                    if (httpContenido.responseText.indexOf('invalid') == -1) 
                    {
                        results = httpContenido.responseText;
                        if(results=='')
                        {
                        results = '-';
                        }
                        evalScript(results);
                        enProcesoContenido = false;
                    }
               }
            }
        }


}
/*
     FILE ARCHIVED ON 12:17:29 Jun 04, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:32:59 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.441
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 32.989
  LoadShardBlock: 583.82 (3)
  PetaboxLoader3.resolve: 543.658 (4)
  PetaboxLoader3.datanode: 230.686 (4)
  load_resource: 237.611
*/