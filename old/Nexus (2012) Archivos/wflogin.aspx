 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
    <head id="ctl00_Head1"><title>
	Nexus
</title><link href="../HojasDEstilo/nexusestilos.css" rel="stylesheet" type="text/css" />

 <script type="text/javascript" src="../Scripts/styleswitcher.js"></script> 

<link href="../../../Plataforma/App/HojasDEstilo/nexusestilos.css" rel="stylesheet"
    type="text/css" title="1024"  />
<link href="../../../Plataforma/App/HojasDEstilo/nexusestilos_640.css"
    rel="Alternate stylesheet" type="text/css" title="640" />
<link href="../../../Plataforma/App/HojasDEstilo/nexusestilos_800.css"
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
        <form name="aspnetForm" method="post" action="/App/login/wflogin.aspx" id="aspnetForm">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUJLTM4MDM5ODUwD2QWAmYPZBYCAgMPZBYCAhMPZBYCAgEPZBYCZg9kFgICAQ8PFgQeDEJhY2tJbWFnZVVybAUofi9Bc3NldHMvaW1nL1BvcHVwQmFjay90b3AtbWlkLU5lZ3JvLnBuZx4EXyFTQgKAgARkZBgBBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WBAUzY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMyRNc2dib3gxJEltYWdDZXJyYXJNc2dib3gxBShjdGwwMCRDb250ZW50UGxhY2VIb2xkZXIzJE1zZ2JveDEkaW1nU2kxBS1jdGwwMCRDb250ZW50UGxhY2VIb2xkZXIzJE1zZ2JveDEkSW1nQWNlcHRhcjEFKGN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjMkTXNnYm94MSRJbWdObzGqFWl4up+nwlClaZE1UMuqxApOQA==" />


<script src="/ScriptResource.axd?d=m21Kv-FiH2SBJ9p2rXbYLrvQzb4n4bsTIg-U9W9Ym-ppknqjF3yllfX9r5eHg-N4wvHBMAyCX6zg1YWHkrV81uaY5TPV8Kxd5YY7eA7vOZaLxc2Jq9zIxjrcZEfUBVT5iQX_VTisVM5zH9edVMtDD8mBwZZ1MHRy8xGGoe_F-65rmixx0&amp;t=ffffffffbab9aacf" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

<script src="/ScriptResource.axd?d=iJxYnYBdnYZq-_gxaigWgb0k4CWQeEu1ti1DD91KNsH5d0m-5vbZStlerjb4RhLlZbROCqe6hrpGjLZnHdlg2sxK7TJM0MZk9bP5Gxnc-dDdVPX_vVJPaCicLYYRB15EAi7qdLupcCvd717soAz3rH490WE1&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=sDig8FVUy1VvBPnjUKnPkYBqIQ-rn4UQrkVKfLI0cWbPZDs9KN6FVsbuau_qHro8nbirjrURao-vzQuCi0EBdXA1H4u7Wu07bwmTEGccnfgu_h5cI0ZpGhTEeHkkCV5nnn11tE3HomkWHtCdZfy2eYc_kLk1&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=agvYGiyW4g3cthPlkPGYInXyO8kHOhj_BkzPPCG7CJNRb7QsKkqXi43R6yYjNAbE8XREzpS-dABIkK_AcNvgMIiHEt05Ge_rr2jKVYJ4BOc_s3svMfyqY1NjFuYm07DZL5oSc6sRtqaR-PRLfhBqRmmVCwzvZGberN4OBY4y55NLpD5c0&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=8d9uAlmnqMO2Rb1J-lLSb9zOxLpVYWX-WhhpcmzIqkTOMO_1RK_-zpYKu2zfL0wR3k_mY554tEnRb4GUKVr4uRPoZHdBqV9TggNAd7hGap96aLjpuluQi3haXE1p0ZQ1Cm4V4WbbV1Urg3YGrB2XvvbAs-Q1&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=OjEL34tjfrLhMFSQyWOfMx_taUIHb7r9XER9PVkm90qZWqn27DlHvyx-KhtQFC6sGNM2-YYDDcf701nn8gLCx9AWRfNkPO3PD3FnV2kqXwxOtwi0a4iBvMxn2iLtZBx8JZHTNKEX0zWOtEQt5c8aw8SGIDThSlU1EKhm0s4B88I63wJz0&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=d4BTstBa00cIjuTBJsbFSUm4wXoPA9TgnSouCKdemnm9Siwmx-4FoU1S9ofiV4P4JTuCf61SjzHEGrVlXS3ycDNmNzFUzQFMV7vN4vd2byV4U7w8f2tfRIoULqNFMjzkXgD88CBfF7dyea31EaxZZijtSJglaKGSzf1dC8dltgqldZJg0&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=mBl6Nc1aloTJxraivZsNnVZPF3K8ghaNByRvNrV6vf0zHn2pKF58em5Tzb7MtKCh6WjZbFkO-tH31Ml6op4-51KwS0ZHQdcu33SIQToDj83jhydwOUSJHPekwLLsqL2HPXwbAhC1PsXsmw2OtAuC_h_KVQullT1cPVHncOouCnQFRKU_0&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=-xBPDNwPLRKa2nO8QEtW4SqSJmP8AzVPgcml2-ENqDIuwBPKBNIU72fCZtATtby92zjQv9VUdh8R-0qWc9nVXmuqL0HI0AyChuh0-zOUIw9z8TGYZw-hrT07t1oYO-yM2CeO_y21LYMXQpm_CSIf4YtG1K01&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=p7Jyi2L_MYEQRTwYKUEpTZN3Ml7FBBEkOT_VugaMQJ4hZY9lhpuYON3sWiRi4x-pXE1PceDy0JZtecYYv5occAXf1qiHVpkTn6PTLu-zkTxk1JFSJI1xA_u8TlzkkEXjRvEhQtbXELmYBHLqM1HUgORS28wLiXcGmyj519nvH1hkayl90&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=4RAct9hzhbjuVQrfnrJ75V1uW73dUC-9niMnSz758pRWjmIw4bj_UblngtMIyJ7kscTVqivntdzwQkYbSLBakJqVFNW8JSNfqD6rDnxBHiKzXXrhG7AS5extY4406Muf6W7IZP51m1pTvXxL47NwYwHGPrI1&amp;t=57c623dd" type="text/javascript"></script>
<script src="/ScriptResource.axd?d=67qmW9ZmysjVBhKGi0Lk4zSXTPeNBzDlZnlr5tVD0S0KyHLEslhdZvuI74x-Q-Xc-FjXsOkGqjm8M7yO1-MJyartlERBgQ6p8cbyOpBFqbxKpS1lHHuVC_i0kzJT1GyMU0oYG5VaPXm1zgnNGKWTZGvoDkE1&amp;t=57c623dd" type="text/javascript"></script>
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEWCAKqpuyfDQKugqeUBAKYqpiTCALF88aHAwKJ09OWCQLDw+z7DwLUmoOECwLtv5WKB0SREA5VdtzFR00sYEsjK6fG1vqn" />
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
		    segundos:13,
		    minutos:44,
		    hora:20,
		    dia:10,
		    mes:4,
		    anio:2012
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
			                
 

   <div class="head_min">
   &nbsp;<span id="ctl00_ContentPlaceHolder2_lblIngresar">Ingresar a NEXUS</span>
   </div>
    <!--Empieza la parte de conexión a nexus-->
     <div id="ctl00_ContentPlaceHolder2_pnlEnter">
	
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
    </div>

				        </div><!--del div ingreso-->
			            <div class="acerca"><!--Empieza la parte de acerca de nexus -->
			             <div class="head_max">
				            <span id="ctl00_lblAcerca" style="display:inline-block;">Acerca de NEXUS</span>
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

    <img id="ctl00_ContentPlaceHolder1_Image2" src="../Utilerias/DisenioGrafico/Imagenes/banners/bannerCorreo(2).jpg" height="290" width="320" border="0" />

    <hr  style="height:.5px; background-color:Transparent;"/>
                
                
          
    
    
    
   

                        </div><!--del div fondogris-->
                        <a href="http://www.facebook.com/pages/Servicios-en-l%C3%ADneaUANL/262962950385592?ref=ts" class="faceBook" target="_blank"></a>
                        <a href="http://twitter.com/#!/servenlineaUANL" class="twitter" target="_blank"></a>
			            <div class="pie">&#169; 2011 Dirección General de Informática - UANL</div>
	    	    </div><!--del div fondonaranja-->
	    	    </div><!--del div naranja-->
	    	    </div>
	       &nbsp;
    <div id="ctl00_ContentPlaceHolder3_Msgbox1_Panel1" style="display:none; border-left:Solid 1px Black; border-bottom:Solid 1px Black;">
	              
            <div id="ctl00_ContentPlaceHolder3_Msgbox1_Panel2">
		
                   <table style="width: 100%; right: -10px;">
                     <tr>
                      <td style="text-align: left;  width: 98%;" >
                         <table style="width: 100%; position: relative; top: -6px; right: -5px;">
                             <tr>
                             <td>
                             <span id="ctl00_ContentPlaceHolder3_Msgbox1_lblTitulo1"><font color="White"></font></span>
                             </td>
                             </tr>
                         </table>
                      </td>
                      <td style="text-align: right">
                         <table style="width: 100%; position: relative; top: -6px; right: -5px; display:none; visibility:hidden;">
                         <tr>
                         <td>
                                 <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImagCerrarMsgbox1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImagCerrarMsgbox1" title="Cerrar" src="../../Assets/img/PopupBack/close.png" border="0" />
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
                                         &nbsp;&nbsp;<img id="ctl00_ContentPlaceHolder3_Msgbox1_ImgMsgBox1" src="" border="0" />
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
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$imgSi1" id="ctl00_ContentPlaceHolder3_Msgbox1_imgSi1" src="../../Imagenes/Botones/Si.png" border="0" />
                                 </td>
                                 <td style="text-align: center">
                                     &nbsp;
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImgAceptar1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImgAceptar1" src="../../Imagenes/Botones/aceptar3.png" border="0" />
                                 </td>
                                 <td style="text-align: left">
                                     &nbsp;
                                     <input type="image" name="ctl00$ContentPlaceHolder3$Msgbox1$ImgNo1" id="ctl00_ContentPlaceHolder3_Msgbox1_ImgNo1" src="../../Imagenes/Botones/No.png" border="0" />
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
Sys.Application.initialize();
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