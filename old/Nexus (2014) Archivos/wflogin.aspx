 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head id="ctl00_Head1"><title>
	Nexus
</title><link href="../HojasDEstilo/nexusestilos.css" rel="stylesheet" type="text/css" />

 <script type="text/javascript" src="../Scripts/styleswitcher.js"></script> 

<link href="../../../App/HojasDEstilo/nexusestilos.css" rel="stylesheet"
    type="text/css" title="1024"  />
<link href="../../../App/HojasDEstilo/nexusestilos_640.css"
    rel="Alternate stylesheet" type="text/css" title="640" />
<link href="../../../App/HojasDEstilo/nexusestilos_800.css"
    rel="Alternate stylesheet" type="text/css" title="800" />
    
         <script language="javascript" type="text/javascript" >
      
        function defineResolucion() 
        {
          if (screen.width==640)
          //Aqui con el setActiveStyleSheet activa la hoja de estilo con el title ="640" 
          //para aplicarla siempre y cuando la resolucion sea la correcta
          setActiveStyleSheet('640');
          
        else
        
          if (screen.width==1024) 
          
         setActiveStyleSheet('1024');
         
        else
        
          if(screen.width==800)
          
         setActiveStyleSheet('800')
         
   }
   //Mando a llamar la función para que aplique la resolución del usuario con la cual esta trabajando
   
      defineResolucion();

         </script>   

 
           <script language="javascript" type="text/javascript">
           //Variables para el cambio de idioma
            var cadenaIdsLabels, cadenaIdsBotones, cadenaIdsBotonesLink;
            var cadenaIdsLabelsCI, cadenaIdsBotonesCI, cadenaIdsBotonesLinkCI;
            cadenaIdsLabels= "lblCaracteristicas-*-lblIntegracion-*-lblOportunidades-*-lblAcerca-*-lblTextoNexus-*-lblAvisos-*-lblIngresar-*-lblUsuario-*-lblContrasenia-*-btnContrasena-*-btnEntrar";
            cadenaIdsBotones="";
            cadenaIdsBotonesLink="";
            
            cadenaIdsLabelsCI = "ctl00_lblCaracteristicas-*-ctl00_lblIntegracion-*-ctl00_lblOportunidades-*-ctl00_lblAcerca-*-ctl00_lblTextoNexus"
            cadenaIdsBotonesCI="";
            cadenaIdsBotonesLinkCI="";
            
	function pickimg(){
		var images = [
			"../Utilerias/DisenioGrafico/Imagenes/banners/02.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/03.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/04.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/05.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/06.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/08.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/09.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/10.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/11.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/12.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/13.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/14.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/15.jpg",
			"../Utilerias/DisenioGrafico/Imagenes/banners/16.jpg",
			
		]

		var randvalue =  Math.round( (images.length - 1) * Math.random() );
		var image = images[randvalue];
		//document.randimg.src = image;
		document.getElementById('randimg').src = image;
		//window.setTimeout("pickimg();",25000);
	}

            function BajaServicio()
            {
                alert("ATENCIÒN: \n\nEl día de hoy de las 4:00 pm a las 4:15 pm el servicio de NEXUS no estara disponible por mantenimientos generales. \n\nDisculpe las molestias que esto pueda ocasionar")
            }
            
            function UANL()
            {
                window.location="http://www.uanl.mx";
            }
        </script>
         
    </head>
    <body onload="asignaIdiomaInicial();">
        <form name="aspnetForm" method="post" action="wflogin.aspx" id="aspnetForm">
<div>
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTMxOTg1MDc5Ng9kFgJmD2QWAgIDD2QWAgITD2QWAgIBD2QWAmYPZBYCAgEPDxYEHgxCYWNrSW1hZ2VVcmwFKH4vQXNzZXRzL2ltZy9Qb3B1cEJhY2svdG9wLW1pZC1OZWdyby5wbmceBF8hU0ICgIAEZGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgQFM2N0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjMkTXNnYm94MSRJbWFnQ2VycmFyTXNnYm94MQUoY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMyRNc2dib3gxJGltZ1NpMQUtY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMyRNc2dib3gxJEltZ0FjZXB0YXIxBShjdGwwMCRDb250ZW50UGxhY2VIb2xkZXIzJE1zZ2JveDEkSW1nTm8x" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=uNxU_71A_dhPeHDQXCtaSR7s-jakZ3fCRGHpH79khukY1TUcavLNg2U8RoNDrrfo_xHzDJLKonLBEOcd-p69n55cnMg1&amp;t=635372101299661451" type="text/javascript"></script>


<script src="/ScriptResource.axd?d=23uUvUoZCMm1Magb_H2iXdrV3srGomdWaidQTklp-x9djDYlKXMW_Q95L2x3ZoGbHzetSuxtLgdp1wK-b_bXTA4dYk7G0wAs-KaheNNJHd6DsaZuH-q0s1DRlCoOiPLcHBYqRMifDOS4KKW2Wj0ek_D--hFZII0a4vVShU8tcTrtqmz-0&amp;t=ffffffff9db6fc03" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

<script src="/ScriptResource.axd?d=PGVIzwNkXgVz55HsQ3MfdPls-FFjVn5tUK8fAPFRK4khVDLnsIP0YbBO56mwiTL542lLLZnfkTgqHQo5wu5fDv-ERwyRU2NdDuQB33gNEqjElliFJYj8uvB2GtJGQp0OW6mBKKrDQqkgZgXHPfmjFfKS8us7mDXpev4ws-R0YKCs7GKP0&amp;t=ffffffff9db6fc03" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=0ImwZDQ69_Y5gKXxCUkgkgPimkizU4Kgx1KMkQ4vWsr-y7AyhkwR9rHlv9hSQEoYVJ-qVHf04DNyBsUKYaGqRp6wXHEqfiHNRpUd0VfJEKziQzeJDu6eT4KlSoAQcpn3D2w9CIHUU4FA7avQ-VW7yDCesNQ1&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=KuDrBZiWgtgXKojUUCIvyuGJ2nh3dY_0k_Ez2oYHeoaLHswcNz0ceIXqcXPWqM7_3kouYr3G2Gktk7DAoeT1fHmawyF9MgLyvF3ynMpLzLttC1vPp1TBjlqchwULNc2cxX4FJNh2Cz-6NZvUn-otSTFBBi01&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=VoB0FGEU0YjZbj_o-ZyYaGof0PBuZccI9EQLDOvEPzDdEqYY0JaIznI4XRXotZLlCVimyRGbcK_9J0IZB156nNsmZtGl35W17WZhb-y24v-9tpfGWlLDrdrLUJJ4uhTqo1tqiL_qaQFoEJe75qzN4cEdGMrG5CEoZwVWr8Pggez-_6iQ0&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=tzCGWtUJR7f-eogAVFzxh6wWJ5VFzRhhyhtKYKKV665-hvz_w6knqjmdXxDdjusBYDKo0XFKdMmYLyE_AtpeRlGKbC6DuVeEvL_O7MWJRStwnhrR1KOWC6NzJ45WWCDe5aJuYbxtGohSLrPd01_0H3jT_dE1&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=NSsJGmK1CcsPJP2hx6VyOIauyNMLC2aGDeJ6YLH1AqpiC2_Sn5sCA0wPqRYqbRDDYEPqoKJ7SHbHDoeqM1KYtlvxRs4ZIo0ZYyalpiySBzHG5F1OxjkvtxBf_eTdQi71qk9UDmG7TCxlaY1WL5sPkd_RpqzQsrQEEjFY6BEt9jlPWu290&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=ov9dbsO3H3KHSU7SUChzKRkbmTSV3I1PKieskmMn7udl5f122COXDqlIEbGl9MnJaEMPXq1eQeweoXbkGXv3JtkT_Vzucd45TizFdrz4UiON12RADsSzD4DUOLm7NSG38vcBElrm9GM5I65bicJ6huPAqlOs0sTbs890BuULWzmAzSs-0&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=_THP9yieKNmu3zatnOxLDikEeepsMmc1r0RfzDQx-qgU9HAdMfO2sZ_21b5lAi82TZI76UMlDXqvw-_PZJmxnO7UIHf0tylGTa8aALYLCfzBnSmIpCQJ4WStp1q2foocseT-hwg1RRjvwgs0IJcADYSw2qqiRFaIuhis3MJl1JO4ldcR0&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=Swu2elhJs2Z-CFBimT1Ba03moRcUrktcu42eKoBGSbwNqGIDCvr5Gl5oGY6fgrsZD4Z5HfWzfzccPLzZCCtPdJ0HYE8NI3U-5Jgyw0SRG5NGwMRou6qOj2DSmvNBI8nce_2F96oosrvyBI33xQvtCOsJf-01&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=7qiz7xUqX6TzdUSbxxJqHSliYgSEL5IJso60nz7QbvM1kopZZCZxax8iwaUhSsRW1toBZ0jsdSHWmgWGYUtPnxa22nKfJAmAUBriyi9p_xfRR4BOeb1TBL78zqNjAGpPwJAq017C4NoVC8D-0El5S8UzAWPp3mEb_1xyk7mxUs9cm_nv0&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=GuZeRUawGBWnHg0dbewDmrTWatWK4FF7PDUEIg-TUUqAp5QwXq4eoxFgSg8cvRTZAUraCsiNWtpesWPMXLfPLLiJU8covEO7mKabTaDHHguVAH2rC7BNHlXt6Npf279Ff4bYainLto2LwgaiukLs0_jvOr41&amp;t=11af833e" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=R9yyfqUOgMA4LNLwbby3uIs1MH99yS_1rOj70Uqe1zOcDtboWg9C3DpIcuPKmKBC7552cZv6kZQ-_36Ekh1Z7ZA_uDvasF8pMqqNExbMKa_ptx7wxS-wfnluyKYZPUdz7frnOo3j-YmOCWgifjuGOeukHhM1&amp;t=11af833e" type="text/javascript"></script>
<script src="/WebResource.axd?d=aP2nW1lPExmy7qjbxMNBz0nV-PwfaURCzpY5WOGYYTjv-muPrp3pN3grx6hQRfj8sr4FRMlZQzS7j90wf0x95Eg7m6o1&amp;t=635372101299661451" type="text/javascript"></script>
<div>

	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWCwKO3PbMBAKugqeUBAKYqpiTCALF88aHAwLxi56wCALsjcGbAQKb+uvYCQKJ09OWCQLDw+z7DwLUmoOECwLtv5WKBw==" />
</div>
        <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
            <td align="center">
            <div class="contenedor">
	            <div class="nexus">
	                <div class="listas"> &nbsp;</div>
	                 <ul class="lista">
		                <li><span id="ctl00_lblCaracteristicas">Nuevas características</span></li>
		                <li><span id="ctl00_lblIntegracion">Mejor integración</span></li>
		                <li><span id="ctl00_lblOportunidades">Más oportunidades</span></li>
	                </ul>
	            </div><!--del div nexus-->
                <div class="uanl">universidad aut&Oacute;noma de nuevo le&Oacute;n</div>
                <div class="logonexus"><div class="logouanl">&nbsp;</div>
            </div><!--del div contenedor-->
	            <div class="fondo">
	            <iframe id="ctl00_FrameImag" frameborder="no" scrolling="no" height="150px" width="100%" src="../Login/wfBannerlogin.aspx"></iframe>
		                    <div class="fondotexto"> 
		                    <table cellpadding="0" cellspacing="0" style="position:relative; top:-5px; width:100%;">
		                        <tr>
		                            <td>Nexus > Plataforma de Enseñanza y Aprendizaje de la Universidad Autónoma de Nuevo León</td>
		                            <td style="padding-top:2px;">
                                        
 <script language="javascript" type="text/javascript" charset="UTF-8">
var idiomaActual='ES';
var idioma;
var  CambiaReloj; 
function cambiaAparienciaControl(Idioma) {
    
    idioma = Idioma;

    document.getElementById("imgES").style.border = "solid 3px #D3E5FE";
    document.getElementById("imgEN").style.border = "solid 3px #D3E5FE";
    document.getElementById("imgFR").style.border = "solid 3px #D3E5FE";
    document.getElementById("img" + idioma).style.border = "solid 3px #2E5492";
    if(idiomaActual != idioma)//Si el idioma solicitado es diferente al actual entonces se cambia
     {
        if(cadenaIdsLabels.length > 0) cambiaIdiomaLabels(idioma,cadenaIdsLabels);
        if(cadenaIdsBotones.length > 0) cambiaIdiomaBotones(idioma,cadenaIdsBotones);
        if(cadenaIdsBotonesLink.length > 0) cambiaIdiomaBotonesLink(idioma,cadenaIdsBotonesLink);

        idiomaActual = idioma;
        var fh2={
		    segundos:24,
		    minutos:23,
		    hora:3,
		    dia:4,
		    mes:5,
		    anio:2014
	        }
	        var r2 = new Reloj("reloj",fh2,idioma); 
	       r2.idiomaReloj(); 		
	       
        ComboRoles(idioma);
	       
      }
}


</script>
<script language="javascript" type="text/javascript"> 
//function cambiarIdioma()
// {

////window.frames("frame1").location="http://localhost:2627/Plataforma/App/Curso/wfCopiaIntroduccion.aspx"

//};

</script>
<table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center" style=" vertical-align:middle;">
        <img src="../Utilerias/DisenioGrafico/Imagenes/mexico_bandera.gif" alt="Espa&#241;ol" id="imgES" style=" border:solid 3px #D3E5FE; cursor:pointer; width: 20px; height: 13px;"  onclick="cambiaAparienciaControl('ES');cambiarIdioma();   return false;"/>
        </td>
        <td align="center" style="vertical-align:middle; width: 27px;">        
        <img src="../Utilerias/DisenioGrafico/Imagenes/bandera_usa.gif"  alt="English" id="imgEN" style=" border:solid 3px #D3E5FE; cursor:pointer; width: 20px; height: 13px;" onclick="cambiaAparienciaControl('EN');cambiarIdioma();  return false;"/>
        </td>
        <td align="center" style="vertical-align:middle;">
        <img src="../Utilerias/DisenioGrafico/Imagenes/bandera_francia.gif" alt="Fran&#231;ais" id="imgFR" style="border:solid 3px #D3E5FE; cursor:pointer; width: 20px; height: 13px;" onclick="cambiaAparienciaControl('FR'); cambiarIdioma();  return false;" />
        </td>
    </tr>
</table>


                                    </td>
		                        </tr>
		                    </table>
		                    </div><!--del div fondotexto-->
	            </div><!--del div fondo-->
	            <div class="naranja">
		        <div class="fondonaranja">
			            <div class="ingreso">
			                
 <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ContentPlaceHolder2$Wvc_ScriptManager2$ScriptManager1', document.getElementById('aspnetForm'));
Sys.WebForms.PageRequestManager.getInstance()._updateControls([], [], [], 3600);
//]]>
</script>


   <div class="head_min">
   &nbsp;<span id="ctl00_ContentPlaceHolder2_lblIngresar">Ingresar a NEXUS</span>
   </div>
    <!--Empieza la parte de conexión a nexus-->
     <div id="ctl00_ContentPlaceHolder2_pnlEnter" onkeypress="javascript:return WebForm_FireDefaultButton(event, 'ctl00_ContentPlaceHolder2_btnEntrar')">
	
    <div id="title" class="texto">
        <span id="ctl00_ContentPlaceHolder2_lblUsuario" class="texto">Usuario</span>
	</div>
    <input name="ctl00$ContentPlaceHolder2$txtUsuario" type="text" id="ctl00_ContentPlaceHolder2_txtUsuario" class="texto" />
    <div id="Div1" class="texto">
	    <span id="ctl00_ContentPlaceHolder2_lblContrasenia" class="texto">Contraseña</span>
    </div>
   
    <input name="ctl00$ContentPlaceHolder2$txtPassword" type="password" id="ctl00_ContentPlaceHolder2_txtPassword" class="texto" />
   
     
</div>
        <div align="center" style="padding-top:2px;">
        <table>
            <tr>
                <td>
                    <a id="ctl00_ContentPlaceHolder2_btnEntrar" class="ovalbutton" href="javascript:__doPostBack('ctl00$ContentPlaceHolder2$btnEntrar','')"><span>Entrar</span></a>
                </td>
            </tr>
        </table>
       </div>
    <div class="olvido">   
        <a onclick="OlvidoPwd();" class="clave" href="#">
            <span id="ctl00_ContentPlaceHolder2_btnContrasena">¿Olvidaste tu contraseña?</span>
        </a> 
        <input type="hidden" name="ctl00$ContentPlaceHolder2$hdnUrlAviso" id="ctl00_ContentPlaceHolder2_hdnUrlAviso" value="http://www.uanl.mx/universidad/investigacion/apoyos/provericyt.html" />
        <input type="hidden" name="ctl00$ContentPlaceHolder2$hdnNombreAviso" id="ctl00_ContentPlaceHolder2_hdnNombreAviso" value="nombreXX" />
        <input type="hidden" name="ctl00$ContentPlaceHolder2$hdnPropAviso" id="ctl00_ContentPlaceHolder2_hdnPropAviso" />
    </div>

				        </div><!--del div ingreso-->
			            <div class="acerca"><!--Empieza la parte de acerca de nexus -->
			             <div class="head_max">
				            <span id="ctl00_lblAcerca" style="display:inline-block;width:162px;">Acerca de NEXUS</span>
				         </div>   
				         <div class="texto2">
					        <span id="ctl00_lblTextoNexus">Nexus es una plataforma que facilita la colaboración entre alumnos y maestros en el proceso de enseñanza y aprendizaje, en sus modalidades presencial, a distancia y mixto.</span>
				         </div>
				         <div id="imgacerca">
                            <!--<img style="margin-top:10px;" src=" ../Utilerias/DisenioGrafico/Imagenes/fotochica.gif">-->
                            <img src=" ../Utilerias/DisenioGrafico/Imagenes/fotochica.gif">
			            </div>
			            </div><!--Del div acerca-->
			            <div class="fondogris">
                            
<script language="javascript" src="../Scripts/Funciones.js" type="text/javascript"></script> 
<script type="text/javascript" language="javascript">
        //Variables para el cambio de idioma
        cadenaIdsLabelsCI = cadenaIdsLabelsCI + "-*-ctl00_ContentPlaceHolder1_lblAvisos-*-ctl00_ContentPlaceHolder2_lblIngresar-*-ctl00_ContentPlaceHolder2_lblUsuario-*-ctl00_ContentPlaceHolder2_lblContrasenia-*-ctl00_ContentPlaceHolder2_btnContrasena-*-ctl00_ContentPlaceHolder2_btnEntrar";
        cadenaIdsBotonesLinkCI=cadenaIdsBotonesLinkCI + "";
        cadenaIdsBotonesCI="";
        //Obtengo el ClientId de los 2 controles de mensajes
        //var mensaje
        //mensaje = mpeMensaje.split(",");
       // hide = 0 
        //Funcion que valida el usuario y contraseña y decide que control de mensaje usar
        //function Valida()
       // {
       //     var usuario, password
            
      //      usuario= $get("ctl00_ContentPlaceHolder2_txtUsuario").value;
        //    password = $get("ctl00_ContentPlaceHolder2_txtPassword").value;        
            
      //      if (usuario != "" && password != "")
      //      {
      //          PageMethods.Entrar(usuario,password  , Muestra);
      //      }
      //      else
      //      {
      //          Ventana_Entrar(mensaje[0]);
      //      }
      //  }
        //Si el usuario no existe muestra el mensaje
      //  function Muestra(msg)
      //  {    
      //      if(msg==false)
      //      {
      //          Ventana_Entrar(mensaje[1]);
      //      }
      //      else
      //      {
      //          alert("Entra")
      //      }
      //  }
</script>
<script type="text/javascript">
  function OlvidoPwd()
  {
        var height= 350;
        var width = window.screen.width * .50;
        var url = "wfOlvidoContraseña.aspx";
        var propiedades = "dependent=yes,height=" +  height + ",width=" + width + ",left=" + window.screen.width * .48 + ",status=no,menubar=no,titlebar=no,toolbar=no,scrollbars=yes,resizable=no"
            
        window.open(url, "Nombre", propiedades);
  }

   function Practum()
  {
       
        var url = "http://ceti.uanl.mx/index.php?option=com_content&task=view&id=56&Itemid=42";
        
            
        window.open(url, "Nombre", "");
  }
  function ligaAviso()
  {
        var url = document.getElementById('ctl00_ContentPlaceHolder2_hdnUrlAviso').value;
        if (url == "" )
        {
            url="http://www.uanl.mx/"
        }
        
        var nombre = "Nombre"
        var propiedades= ""
            
        window.open(url, nombre, propiedades);
  }
  /*function Usabilidad()
  {
       
        var url = "http://usabilidad.uanl.mx";
        
            
        window.open(url, "Nombre", "");
  }*/
   /*function Congreso()
  {
       
        var url = "http://www.uanl.mx/eventos/descripcion.php?id=381";
        
            
        window.open(url, "Nombre", "");
  }*/
</script>
 <div class="avisoenca">
    <span id="ctl00_ContentPlaceHolder1_lblAvisos"> Avisos</span>
</div>
<div class="recado">

<a onclick="ligaAviso();;" class="clave" href="#">
    <img id="ctl00_ContentPlaceHolder1_Image2" src="../Utilerias/DisenioGrafico/Imagenes/banners/bannerCorreo(2).jpg" style="height:290px;width:320px;border-width:0px;" />
    </a>

    <hr  style="height:.5px; background-color:Transparent;"/>
                
                
          
    
    
    
   

                        </div><!--del div fondogris-->
                        <a href="http://www.facebook.com/pages/Servicios-en-l%C3%ADneaUANL/262962950385592?ref=ts" class="faceBook" target="_blank"></a>
                        <a href="http://twitter.com/#!/servenlineaUANL" class="twitter" target="_blank"></a>
			            <div class="pie">&#169; 2011 Dirección General de Informática - UANL</div>
	    	    </div><!--del div fondonaranja-->
	    	    </div><!--del div naranja-->
	    	    </div>
	       &nbsp;
    <div id="ctl00_ContentPlaceHolder3_Msgbox1_Panel1" style="background-color:#F9F9F9;display:none; border-left:Solid 1px Black; border-bottom:Solid 1px Black;">
	              
            <div id="ctl00_ContentPlaceHolder3_Msgbox1_Panel2" style="height:25px;width:100%;background-image:url(../../Assets/img/PopupBack/top-mid-Negro.png);">
		
                   <table style="width: 100%; right: -10px;">
                     <tr>
                      <td style="text-align: left;  width: 98%;" >
                         <table style="width: 100%; position: relative; top: -6px; right: -5px;">
                             <tr>
                             <td>
                             <span id="ctl00_ContentPlaceHolder3_Msgbox1_lblTitulo1" style="color:White;"></span>
                             </td>
                             </tr>
                         </table>
                      </td>
                      <td style="text-align: right">
                         <table style="width: 100%; position: relative; top: -6px; right: -5px; display:none; visibility:hidden;">
                         <tr>
                         <td>
                                 <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImagCerrarMsgbox1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImagCerrarMsgbox1" title="Cerrar" src="../../Assets/img/PopupBack/close.png" style="height:25px;width:35px;border-width:0px;" />
                         </td>
                         </tr>
                         </table>
                      </td>
                     </tr>
                     </table>
                      
	</div>
                         <table style="width: 100%;">
                             <tr>
                                     <td style="width:1px; text-align: center; vertical-align: middle;">
                                         &nbsp;&nbsp;<img id="ctl00_ContentPlaceHolder3_Msgbox1_ImgMsgBox1" src="" style="border-width:0px;" />
                                     </td>
                                     <td style="text-align: center">
                                         <span id="ctl00_ContentPlaceHolder3_Msgbox1_lbltexto1"></span>
                                         <br />
                                     </td>
                                
                                 
                             </tr>
                         </table>
                     <table style="width: 100%; left: 0px;">
                        <tr>
                                 <td style="text-align: right">
                                     &nbsp;
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$imgSi1" id="ctl00_ContentPlaceHolder3_Msgbox1_imgSi1" src="../../Imagenes/Botones/Si.png" style="height:38px;width:38px;border-width:0px;" />
                                 </td>
                                 <td style="text-align: center">
                                     &nbsp;
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImgAceptar1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImgAceptar1" src="../../Imagenes/Botones/aceptar3.png" style="height:26px;width:120px;border-width:0px;" />
                                 </td>
                                 <td style="text-align: left">
                                     &nbsp;
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImgNo1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImgNo1" src="../../Imagenes/Botones/No.png" style="height:38px;width:38px;border-width:0px;" />
                                 </td>
                             </tr>
                     </table>
 
</div>
    
<span id="ctl00_ContentPlaceHolder3_Msgbox1_lblMsgbox" style="display:none"></span>




<br />


                </td>
                </tr>
            </table>
        

<script type="text/javascript">
//<![CDATA[
WebForm_AutoFocus('ctl00_ContentPlaceHolder2_txtUsuario');Sys.Application.initialize();
Sys.Application.add_init(function() {
    $create(AjaxControlToolkit.ModalPopupBehavior, {"BackgroundCssClass":"FondoAplicacion","CancelControlID":"ctl00_ContentPlaceHolder3_Msgbox1_ImagCerrarMsgbox1","PopupControlID":"ctl00_ContentPlaceHolder3_Msgbox1_Panel1","PopupDragHandleControlID":"ctl00_ContentPlaceHolder3_Msgbox1_Panel2","dynamicServicePath":"/App/login/wflogin.aspx","id":"ctl00_ContentPlaceHolder3_Msgbox1_MsgBox"}, null, null, $get("ctl00_ContentPlaceHolder3_Msgbox1_lblMsgbox"));
});
Sys.Application.add_init(function() {
    $create(AjaxControlToolkit.Animation.AnimationBehavior, {"OnHoverOut":"{\"AnimationName\":\"Sequence\",\"AnimationChildren\":[{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}]}","OnHoverOver":"{\"AnimationName\":\"FadeIn\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}","OnLoad":"{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".5\",\"AnimationChildren\":[]}","id":"ctl00_ContentPlaceHolder3_Msgbox1_AnimationExtender1"}, null, null, $get("ctl00_ContentPlaceHolder3_Msgbox1_ImgAceptar1"));
});
Sys.Application.add_init(function() {
    $create(AjaxControlToolkit.Animation.AnimationBehavior, {"OnHoverOut":"{\"AnimationName\":\"Sequence\",\"AnimationChildren\":[{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}]}","OnHoverOver":"{\"AnimationName\":\"FadeIn\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}","OnLoad":"{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".5\",\"AnimationChildren\":[]}","id":"ctl00_ContentPlaceHolder3_Msgbox1_AnimationExtender2"}, null, null, $get("ctl00_ContentPlaceHolder3_Msgbox1_imgSi1"));
});
Sys.Application.add_init(function() {
    $create(AjaxControlToolkit.Animation.AnimationBehavior, {"OnHoverOut":"{\"AnimationName\":\"Sequence\",\"AnimationChildren\":[{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}]}","OnHoverOver":"{\"AnimationName\":\"FadeIn\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".2\",\"AnimationChildren\":[]}","OnLoad":"{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".5\",\"AnimationChildren\":[]}","id":"ctl00_ContentPlaceHolder3_Msgbox1_AnimationExtender3"}, null, null, $get("ctl00_ContentPlaceHolder3_Msgbox1_ImgNo1"));
});
Sys.Application.add_init(function() {
    $create(AjaxControlToolkit.Animation.AnimationBehavior, {"OnHoverOut":"{\"AnimationName\":\"Sequence\",\"AnimationChildren\":[{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".4\",\"AnimationChildren\":[]}]}","OnHoverOver":"{\"AnimationName\":\"FadeIn\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".4\",\"AnimationChildren\":[]}","OnLoad":"{\"AnimationName\":\"FadeOut\",\"Duration\":\".5\",\"MinimumOpacity\":\"5\",\"MaximumOpacity\":\".5\",\"AnimationChildren\":[]}","id":"ctl00_ContentPlaceHolder3_Msgbox1_AnimationExtender4"}, null, null, $get("ctl00_ContentPlaceHolder3_Msgbox1_ImagCerrarMsgbox1"));
});
//]]>
</script>
</form>
       
    </body>
</html>