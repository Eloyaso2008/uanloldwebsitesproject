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

/// <reference path="jquery-1.11.1.min.js" />
/// <reference path="jquery.autoellipsis-1.0.10.min.js" />
var Calendario = {
    IniciaFunciones: function () {
        /*Calendario.AjustaGrupoFase();
        Calendario.AjustaDescripcion();
        Calendario.AjustaFase();
        Calendario.AjustaVentana();
        Calendario.AjsutesGeneralesVista();*/
        Calendario.SeleccionaTipoCalendario();
        Calendario.ListadoAjustaColumnaFecha();
    },
    AjustaGrupoFase: function () {
        var $encabezado = $('.fila-encabezado');
        var $grupoFase = $('.calendario-grupo-fase');

        var anchoFilasFase = ($encabezado.width() - 61);

        $grupoFase.each(function (i) {
            $(this).children('.calendario-tabla-filas-fase').each(function () {
                $(this).css({
                    'width': anchoFilasFase
                });
            });

            $(this).children('.calendario-tabla-fase').each(function () {
                $(this).css({
                    'width': 60
                });
            });
        });
    },
    AjustaDescripcion: function () {
        var $columnaElemento = $('.columna-elemento');

        /*$columnaElemento.css({
        'width': ($columnaElemento.width() - 50)
        });*/

        $('.elemento-descripcion').each(function (i) {

            /*$(this).css({
            'width': ($columnaElemento.width() - 51)
            });*/

            $descripcion = $(this).find('.descripcion');

            $descripcion.css({
                'width': ($(this).width() - (32 + 10)),
                'padding': '0px 5px 0px 5px'
            });

            $descripcion.ellipsis();
        });
    },
    AjustaFase: function () {
        var $grupoFase = $('.calendario-grupo-fase');

        var cantidadFilas = 0;

        $grupoFase.each(function () {
            cantidadFilas = 0;

            $(this).children('.calendario-tabla-filas-fase').find('.calendario-tabla-fila').each(function (i) {
                cantidadFilas += 1;
            });

            if (cantidadFilas > 1) {
                var altoFase = (($(this).children('.calendario-tabla-filas-fase').find('.calendario-tabla-fila').height() + 14) * cantidadFilas);
                var padding = ((altoFase - 16) / 2);

                $(this).children('.calendario-tabla-fase').css({
                    'height': '16px',
                    'padding-top': padding,
                    'padding-bottom': (padding - 1),
                    'border-bottom': '1px solid #999999'
                });

                $(this).css({
                    'height': altoFase
                });
            } else {
                var altoFase = ($(this).children('.calendario-tabla-filas-fase').find('.calendario-tabla-fila').height() + 14);
                var padding = ((altoFase - 16) / 2);

                $(this).children('.calendario-tabla-fase').css({
                    'height': '16px',
                    'padding-top': padding,
                    'padding-bottom': (padding - 1),
                    'border-bottom': '1px solid #999999'
                });

                $(this).css({
                    'height': altoFase
                });
            }
        });
    },
    AjustaVentana: function () {
        $(window).resize(function () {
            Calendario.AjustaGrupoFase();
            Calendario.AjustaDescripcion();
            Calendario.AjustaFase();
        });
    },
    AjsutesGeneralesVista: function () {
        var $enlaceVista = $('.calendario-contenido-encabezado div a');
        var $elementoNormal = $('.calendario-vista-normal');
        var $elementoListado = $('.calendario-vista-listado');

        $tipoCalendario = $('#tipoCalendario');

        if ($.trim($tipoCalendario.text()) == 'undefined' || $.trim($tipoCalendario.text()) == '') {
            $elementoNormal.css({
                'display': 'none'
            });

            $elementoListado.css({
                'display': 'block'
            });

            //$enlaceVista.text('Cambiar a modo lista');
            $enlaceVista.text('Cambiar a modo calendario');
        } else {
            if ($.trim($tipoCalendario.text()) == '1') {
                $elementoNormal.css({
                    'display': 'block'
                });

                $elementoListado.css({
                    'display': 'none'
                });

                $enlaceVista.text('Cambiar a modo lista');
            } else {
                if ($.trim($tipoCalendario.text()) == '2') {
                    $elementoNormal.css({
                        'display': 'none'
                    });

                    $elementoListado.css({
                        'display': 'block'
                    });

                    $enlaceVista.text('Cambiar a modo calendario');
                } else {
                    alert('error');
                }
            }
        }

        $tipoCalendario.css({
            'display': 'none'
        });

        $enlaceVista.click(function () {
            if ($elementoNormal.css('display') == 'block') {
                $elementoNormal.css({
                    'display': 'none'
                });

                $elementoListado.css({
                    'display': 'block'
                });

                $enlaceVista.text('Cambiar a modo calendario');

                $tipoCalendario.text('2');
            } else {
                $elementoNormal.css({
                    'display': 'block'
                });

                $elementoListado.css({
                    'display': 'none'
                });

                $enlaceVista.text('Cambiar a modo lista');

                $tipoCalendario.text('1');
            }

            Calendario.AjustaGrupoFase();
            Calendario.AjustaDescripcion();
        });
    },
    MuestraRecursoFlotante: function (tituloRec, mensajeRec) {
        //var $detalleElemento = $('#' + $.trim(String(id)));
        var $mensajeEmergente = $('.ep-mensaje-emergente', window.parent.document);
        var mensaje = ''; //.replace('¿?', '"');
        mensaje = String(mensajeRec);

        len = mensaje.length;

        var ni = 0;

        while (ni < len) {
            mensaje = mensaje.replace('¿?', '"');
            mensaje = mensaje.replace('&#x27;', '');

            if (ni == (len - 1)) {
                break;
            } else {
                ni++;
            }
        }


        //mensaje = mensaje.replace("¿?", "?");
        //var mensaje = $detalleElemento.find('.descripcion').text();
        //var click = $detalleElemento.find('.descripcion').attr('href');
        var titulo = '';
        titulo = tituloRec;

        //        switch (elemento) {
        //            case 1:
        //                titulo = 'Evidencia de Aprendizaje';
        //                break;
        //            case 2:
        //                titulo = 'Elemento Complementario';
        //                break;
        //            case 3:
        //                titulo = 'Producto Integrador';
        //                break;
        //        }

        //var mensajeHtml = '<div id="detalle' + $.trim(String(id)) + '" class="ep-detalle-retroalimentacion ep-detalle"><div class="ep-detalle-encabezado"><div class="ep-detalle-encabezado-titulo"></div><div class="ep-detalle-segmento-cerrar"><div class="ep-segmento-cerrar ep-boton-cerrar"><a href="#" class="ep-cerrar"><div></div></a></div></div></div><div class="mensaje' + $.trim(String(id)) + '"> <p>' + mensaje + '</p></div></div></div>';
        var mensajeHtml = '<div id="ep-detalle-retroalimentacion" class="ep-detalle-retroalimentacion ep-detalle"><div class="ep-detalle-encabezado"><div class="ep-detalle-encabezado-titulo"><h4>' + titulo + '</h4></div><div class="ep-detalle-segmento-cerrar"><div class="ep-segmento-cerrar ep-boton-cerrar"><a href="#" class="ep-cerrar"><div></div></a></div></div></div><div class="ep-detalle-cuerpo"><h4 class="ep-detalle-elemento-separado"></h4><p><div class="iframe-emergente-centrado">' + mensaje + '<div></p></div></div>';

        //alert(mensajeHtml);

        $mensajeEmergente.append(mensajeHtml);

        General.creaMensaje('#ep-detalle-retroalimentacion');
    },
    MuestraDetalleCompleto: function (id, elemento) {
        var $detalleElemento = $('#' + $.trim(String(id)));
        var $mensajeEmergente = $('.ep-mensaje-emergente', window.parent.document);

        var mensaje = $detalleElemento.find('.descripcion').text();
        var click = $detalleElemento.find('.descripcion').attr('href');
        var titulo = '';

        switch (elemento) {
            case 1:
                titulo = 'Evidencia de Aprendizaje';
                break;
            case 2:
                titulo = 'Elemento Complementario';
                break;
            case 3:
                titulo = 'Producto Integrador';
                break;
        }

        //var mensajeHtml = '<div id="detalle' + $.trim(String(id)) + '" class="ep-detalle-retroalimentacion ep-detalle"><div class="ep-detalle-encabezado"><div class="ep-detalle-encabezado-titulo"></div><div class="ep-detalle-segmento-cerrar"><div class="ep-segmento-cerrar ep-boton-cerrar"><a href="#" class="ep-cerrar"><div></div></a></div></div></div><div class="mensaje' + $.trim(String(id)) + '"> <p>' + mensaje + '</p></div></div></div>';
        var mensajeHtml = '<div id="ep-detalle-retroalimentacion" class="ep-detalle-retroalimentacion ep-detalle"><div class="ep-detalle-encabezado"><div class="ep-detalle-encabezado-titulo"><h4>' + titulo + '</h4></div><div class="ep-detalle-segmento-cerrar"><div class="ep-segmento-cerrar ep-boton-cerrar"><a href="#" class="ep-cerrar"><div></div></a></div></div></div><div class="ep-detalle-cuerpo"><h4 class="ep-detalle-elemento-separado">Detalle completo:</h4><p>' + mensaje + '</p></div></div>';

        //alert(mensajeHtml);

        $mensajeEmergente.append(mensajeHtml);

        General.creaMensaje('#ep-detalle-retroalimentacion');
    },
    SeleccionaTipoCalendario: function () {
        var $enlaceVista = $('.calendario-contenido-encabezado div button');
        var $lblVistaCalendario = $('.nx-label-vista-calendario h2');
        var $elementoNormal = $('.calendario-vista-normal');
        var $elementoListado = $('.calendario-vista-listado');

        $tipoCalendario = $('#tipoCalendario');

        if ($.trim($tipoCalendario.text()) == 'undefined' || $.trim($tipoCalendario.text()) == '') {
            $elementoNormal.css({
                'display': 'none'
            });

            $elementoListado.css({
                'display': 'block'
            });

            $enlaceVista.text('Ver Calendario');
            $('.nx-portafolio-leyenda').css({
                'display': 'block'
            });
            //$lblVistaCalendario.text('Lista');
        } else {
            if ($.trim($tipoCalendario.text()) == '1') {
                $elementoNormal.css({
                    'display': 'block'
                });

                $elementoListado.css({
                    'display': 'none'
                });

                $enlaceVista.text('Ver Listado');
                $('.nx-portafolio-leyenda').css({
                    'display': 'none'
                });
                //$lblVistaCalendario.text('Calendario');
            } else {
                if ($.trim($tipoCalendario.text()) == '2') {
                    $elementoNormal.css({
                        'display': 'none'
                    });

                    $elementoListado.css({
                        'display': 'block'
                    });

                    $enlaceVista.text('Ver Calendario');
                    $('.nx-portafolio-leyenda').css({
                        'display': 'block'
                    });
                    //$lblVistaCalendario.text('Lista');
                } else {
                    alert('error');
                }
            }
        }

        $tipoCalendario.css({
            'display': 'none'
        });

        $enlaceVista.click(function (e) {
            e.preventDefault();

            if ($elementoNormal.css('display') == 'block') {
                $elementoNormal.css({
                    'display': 'none'
                });

                $elementoListado.css({
                    'display': 'block'
                });

                $enlaceVista.text('Ver Calendario');
                $('.nx-portafolio-leyenda').css({
                    'display': 'block'
                });
                //$lblVistaCalendario.text('Lista');

                $tipoCalendario.text('2');
            } else {
                $elementoNormal.css({
                    'display': 'block'
                });

                $elementoListado.css({
                    'display': 'none'
                });

                $enlaceVista.text('Ver Listado');
                $('.nx-portafolio-leyenda').css({
                    'display': 'none'
                });
                //$lblVistaCalendario.text('Calendario');

                $tipoCalendario.text('1');
            }

            /*Calendario.AjustaGrupoFase();
            Calendario.AjustaDescripcion();*/
        });
    },
    ListadoAjustaColumnaFecha: function () {
        function AjustaColumna(anchoVentana) {
            var columnaFecha = $('.col-lg-3');

            if (anchoVentana < 1250) {
                columnaFecha.width(100);
            } else {
                columnaFecha.css({
                    'width': '25%'
                });
            }
        }

        AjustaColumna($(window).width());

        $(window).resize(function () {
            AjustaColumna($(this).width());
        });
    }
};

var General = {
    creaMensaje: function (id) {
        var $velo = $('.ep-velo', window.parent.document);
        var $ventana = $('.ep-detalle', window.parent.document);

        var $btnCerrar = $('.ep-cerrar', window.parent.document);

        $masterEncabezado = $('.tablaencabezado', window.parent.document);
        $masterContenido = $('.frm1_contenido_principal', window.parent.document);
        $masterPie = $('.tablapie', window.parent.document);

        $(id, window.parent.document).attr('href');

        var altoMascara = $(document).height();
        var anchoMascara = $(document).width();

        var altoNavegador = $(window).height();
        var anchoNavegador = $(window).width();

        $velo.css({
            'width': '100%',
            'height': '100%'
        });

        $velo.fadeIn(100);
        $velo.fadeTo('fast', 0.98);

        $(id, window.parent.document).css({
            'top': ($masterEncabezado.height() + $masterContenido.height() + $masterPie.height()) / 2 - $(id, window.parent.document).height() / 2,
            'left': (($velo.width() - $(id, window.parent.document).width()) / 2)
        });

        $(id, window.parent.document).fadeIn(600);

        $btnCerrar.click(function (e) {
            e.preventDefault();

            $velo.hide();
            $ventana.hide();

            General.limpiaMensaje(id);
        });

        $velo.click(function (e) {
            $(this).hide();
            $ventana.hide();

            General.limpiaMensaje(id);
        });

        $(window).resize(function (e) {
            $velo.css({
                'width': '100%',
                'height': '100%'
            });

            var altoMascara = $(document).height();
            var anchoMascara = $(document).width();

            var altoNavegador = $(window).height();
            var anchoNavegador = $(window).width();

            $(id, window.parent.document).css({
                'top': ($masterEncabezado.height() + $masterContenido.height() + $masterPie.height()) / 2 - $(id, window.parent.document).height() / 2,
                'left': (($velo.width() - $(id, window.parent.document).width()) / 2)
            });
        });
    },
    limpiaMensaje: function (id) {
        var $mensajeEmergente = $('.ep-mensaje-emergente', window.parent.document);

        $mensajeEmergente.children(id, window.parent.document).remove();
    },
    ajustaAltoFrame: function (id) {
        function ajustaAlto($frame, altoContenido) {
            var altoRecomendado = (($(window).height()) - (187 + 10));

            //alert(String(altoContenido) + ', ' + String(altoRecomendado));

            if (altoContenido < altoRecomendado) {
                $frame.height(altoRecomendado);
            } else {
                $frame.height(altoContenido);
            }
        }

        var altoNuevo = 0;

        var $nxFrame = id;
        var $nxFrameContenido = $nxFrame.contents().find('html').find('body');

        ajustaAlto($nxFrame, $nxFrameContenido.height());

        altoNuevo = $nxFrameContenido.height();

        setInterval(function () {
            var $nxFrame = id;
            var $nxFrameContenido = $nxFrame.contents().find('html').find('body');

            if (altoNuevo != $nxFrameContenido.height()) {
                ajustaAlto($nxFrame, $nxFrameContenido.height());

                altoNuevo = $nxFrameContenido.height();
            }
        }, 10);

        $nxFrame.on('load', function () {
            var $nxContenido = $(this).contents().find('html').find('body');

            ajustaAlto($(this), $nxContenido.height());

            $nxContenido.click(function () {
                var _alto = $(this).height();

                ajustaAlto($nxFrame, _alto);
            });
        });
    },
    ActualizaTitulo: function (_titulo) {
        $('.nx-encabezado', window.parent.document).text(_titulo);
    }
};

var PrincipalCurso = {
    ActualizaFrame: function (url) {
        var frameCuerpo = $('#ContentPlaceHolder1_IframeBody');

        frameCuerpo.attr('src', url);
    },
    ActualizaActivo: function (indice, clase) {
        function removerActivo($nxNavTabs) {
            $nxNavTabs.find('.nx-nav-tabs-item').each(function (i) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');

                    if ($(this).parents('.dropdown').length > 0) {
                        $(this).parents('.dropdown').removeClass('active');

                        $(this).parents('.dropdown').find('.dropdown-toggle').removeClass('nx-nav-tabs-active-a');
                    }
                }
            });
        }

        function agregarActivo($nxNavTabs) {
            $nxNavTabs.find('.nx-nav-tabs-item').each(function (i) {
                if (indice != null) {
                    if (indice == i) {
                        $(this).addClass('active');

                        if ($(this).parents('.dropdown').length > 0) {
                            $(this).parents('.dropdown').addClass('active');

                            $(this).parents('.dropdown').find('.dropdown-toggle').addClass('nx-nav-tabs-active-a');
                        }
                    }
                } else {
                    var $enlace = $(this).find('a');

                    if ($enlace.hasClass(clase)) {
                        $(this).addClass('active');

                        if ($enlace.parents('.dropdown').length > 0) {
                            $enlace.parents('.dropdown').addClass('active');

                            $enlace.parents('.dropdown').find('.dropdown-toggle').addClass('nx-nav-tabs-active-a');
                        }
                    }
                }
            });
        }

        removerActivo($('.nx-nav-tabs'));
        agregarActivo($('.nx-nav-tabs'));
    },
    MuestraPaginaInicial: function (_pagini) {
        var evento = 0;

        switch (_pagini) {
            case '1':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-34');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-34');
                break;
            case '2':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-9');
                break;
            case '3':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-4');
                break;
            case '4':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-16');
                break;
            case '5':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-48');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-48');
                break;
            case '6':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-49');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-49');
                break;
            case '7':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-53');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-53');
                break;
            case '8':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-55');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-55');
                break;
            case '9':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-80');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-80');
                break;
            case '10':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-81');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-81');
                break;
            case '11':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-1');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-1');
                break;
			case '12':
                evento = PrincipalCurso.SeleccionaEvento('nx-e-7');
                PrincipalCurso.ActualizaActivo(null, 'nx-e-7');
                break;
        }

        return evento;
    },
    SeleccionaEvento: function (enlace) {
        var idEnlace = 0;
        var arrClase = new Array();
        var evento = 0;
        var url = '';
        var arrRespuesta = new Array();

        arrClase = enlace.split('-');

        idEnlace = arrClase[arrClase.length - 1];
        switch (String(idEnlace)) {
            case '1':
                evento = 27;
                url = '../../App/Curso/Parametrizacion/wfParametrizacionCurso.aspx';
                break;
            case '2':
                evento = 225;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfEstUndApr.aspx';
                break;
            case '3':
                evento = 318;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfEstUndApr_Evaluacion.aspx';
                break;
            case '4':
                evento = 494;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/CalendarioAlumno/wfCalendarioEstructura.aspx';
                break;
            case '5':
                evento = 594;
                url = '../../App/Alumnos/wfListadoAlumnos.aspx';
                break;
            case '6':
                evento = 33;
                url = '../../App/Curso/Actividades/wfCalendarioActividades.aspx';
                break;
            case '7':
                evento = 493;
                url = '../../App/Curso/Actividades/CalendarioActividades.aspx';
                break;
            case '8':
                evento = 643;
                url = '../../App/Curso/wfNuevoEnCurso.aspx';
                break;
            case '9':
                evento = 338;
                url = '../../App/Curso/Avisos/wfAvisoCurso.aspx';
                break;
            case '10':
                evento = 201;
                url = '../../App/Curso/Foros/wfListaForos.aspx';
                break;
            case '11':
                evento = 183;
                url = '../../App/Curso/Equipos/wfListadoEquipos.aspx';
                break;
            case '12':
                evento = 200;
                url = '../../App/Curso/Equipos/wfListadoEquiposAlumno.aspx';
                break;
            case '13':
                evento = 212;
                url = '../../App/Curso/Chat/wfListaChats.aspx';
                break;
            case '14':
                evento = 326;
                url = '../../App/Curso/Mensajes/wfMensajes.aspx';
                break;
            case '15':
                evento = 459;
                url = '../../App/Curso/Correos/wfCorreo.aspx';
                break;
            case '16':
                evento = 50;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/Portafolio/wfPortafolio.aspx';
                break;
            case '17':
                evento = 52;
                url = '../../App/Curso/Calificaciones/wfLibroCalificaciones.aspx';
                break;
            case '18':
                evento = 85;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/Examenes/wfListaExamenesMaestro.aspx';
                break;
            case '19':
                evento = 85;
                url = '../../App/Curso/Examenes/wfListaExamenesMaestro.aspx';
                break;
            case '20':
                evento = 0;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/Examenes/wfListaExamenesAlumno.aspx';
                break;
            case '21':
                evento = 131;
                url = '../../App/Curso/Examenes/wfListaExamenesAlumno.aspx';
                break;
            case '22':
                evento = 149;
                url = '../../App/Curso/BancoReactivos/wfListaBancosReactivos.aspx';
                break;
            case '23':
                evento = 0;
                url = '../../App/Curso/Encuestas/wfEncuesta.aspx';
                break;
            case '24':
                evento = 146;
                url = '../../App/Curso/Encuestas/wfListaEncuestasAdministrador.aspx';
                break;
            case '25':
                evento = 290;
                url = '../../App/AdminProyecto/wfAdmdeproyecto.aspx';
                break;
            case '26':
                evento = 81;
                url = '../../App/Curso/Documentos/wfDocumentos.aspx';
                break;
            case '27':
                evento = 81;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/Documentos/wfDocumentos.aspx';
                break;
            case '28':
                evento = 75;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/Documentos/wfDocumentos.aspx';
                break;
            case '29':
                evento = 348;
                url = '../../App/Curso/Glosario/wfListaGlosario.aspx';
                break;
            case '30':
                evento = 0;
                url = '../../App/Curso/Bitacora/wfBitacora.aspx';
                break;
            case '31':
                evento = 592;
                url = '../../App/Curso/Reportes/wfListaReporte.aspx';
                break;
            case '32':
                evento = 644;
                url = '../../App/Curso/LigasInteres/wfListaLigasInteres.aspx';
                break;
            case '33':
                evento = 0;
                url = '../../App/Curso/Correos/wfCorreo.aspx';
                break;
            case '34':
                evento = 1;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfBienvenida.aspx';
                break;
            case '35':
                evento = 464;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfDatosDeIdentificacion.aspx';
                break;
            case '36':
                evento = 468;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfPresentacion.aspx';
                break;
            case '37':
                evento = 472;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfPropositos.aspx';
                break;
            case '38':
                evento = 476;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfCompGen.aspx';
                break;
            case '39':
                evento = 480;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfCompEsp.aspx';
                break;
            case '40':
                evento = 484;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfRepGrafica.aspx';
                break;
            case '41':
                evento = 489;
                url = '../../App/Programa%20Analitico%20Nuevo%20Modelo/wfDescEstUndApre.aspx';
                break;
            case '42':
                evento = 8;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfIntroduccion.aspx';
                break;
            case '43':
                evento = 16;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfObjetivos.aspx';
                break;
            case '44':
                evento = 19;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfUnidadesModulos.aspx';
                break;
            case '45':
                evento = 22;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfBibliohemerografia.aspx';
                break;
            case '46':
                evento = 11;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfMapaConceptual.aspx';
                break;
            case '47':
                evento = 4;
                url = '../../App/Curso/ProgramaAnaliticoModeloPorObjetivos/wfCompromisos.aspx';
                break;
            case '48':
                evento = 495;
                url = '../../App/AdminCursos/wfAdminCursosDep.aspx';
                break;
            case '49':
                evento = 416;
                url = '../../App/Usuarios/wfPrincipalUsuarios.aspx';
                break;
            case '50':
                evento = 0;
                url = '../../App/AdminCursos/wfComunicacion.aspx';
                break;
            case '51':
                evento = 496;
                url = '../../App/AdminCursos/wfListaEncuestas.aspx';
                break;
            case '52':
                evento = 520;
                url = '../../App/AdminCursos/wfBitacoraAdmin.aspx';
                break;
            case '53':
                evento = 642;
                url = '../../App/AdminCursos/wfSeguimientoCursos.aspx';
                break;
            case '54':
                evento = 30;
                url = '../../App/AdminCursos/wfCambiarLogo.aspx';
                break;
            case '55':
                evento = 0;
                url = '../../App/AdminGral/wfCapacidadAlmacenamiento.aspx';
                break;
            case '56':
                evento = 0;
                url = '../../App/AdminGral/wfFormas.aspx';
                break;
            case '57':
                evento = 0;
                url = '../../App/AdminGral/wfCapacidades.aspx';
                break;
            case '58':
                evento = 0;
                url = '../../App/AdminGral/wfRoles.aspx';
                break;
            case '59':
                evento = 0;
                url = '../../App/AdminGral/wfRolesAreaAcademica.aspx';
                break;
            case '60':
                evento = 0;
                url = '../../App/AdminGral/wfAdministrarConfiguracion.aspx';
                break;
            case '61':
                evento = 0;
                url = '../../App/AdminGral/wfEventosBitacora.aspx';
                break;
            case '62':
                evento = 0;
                url = '../../App/AdminGral/wfContenedor.aspx';
                break;
            case '63':
                evento = 0;
                url = '../../App/AdminGral/wfModulosAplicacion.aspx';
                break;
            case '64':
                evento = 0;
                url = '../../App/AdminGral/wfServiciosWeb.aspx';
                break;
            case '65':
                evento = 0;
                url = '../../App/AdminGral/wfUsuarioServicioWeb.aspx';
                break;
            case '66':
                evento = 0;
                url = '../../App/AdminGral/wfAyuda.aspx';
                break;
            case '67':
                evento = 0;
                url = '../../App/AdminGral/wfEliminacionFisica.aspx';
                break;
            case '68':
                evento = 0;
                url = '../../App/AdminGral/wfListadoAvisosUrgentes.aspx';
                break;
            case '69':
                evento = 0;
                url = '../../App/EncuestasGenerales/wfListaEncuestas.aspx';
                break;
            case '70':
                evento = 0;
                url = '../../App/AdminGral/wfModelodeCurso.aspx';
                break;
            case '71':
                evento = 0;
                url = '../AdminGral/wfEstadisticaAplicacion.aspx';
                break;
            case '72':
                evento = 0;
                url = '';
                break;
            case '73':
                evento = 0;
                url = '../AdminGral/wfCorreosAdmin.aspx';
                break;
            case '74':
                evento = 0;
                url = '../AdminGral/wfSeguimientoSugerencias.aspx';
                break;
            case '75':
                evento = 501;
                url = '../MiCuentaAM/wfInformacionGeneral.aspx';
                break;
            case '76':
                evento = 502;
                url = '../MiCuentaAM/wfCorreoElectronico.aspx';
                break;
            case '77':
                evento = 503;
                url = '../MiCuentaAM/wfFotografia.aspx';
                break;
            case '78':
                evento = 504;
                url = '../MiCuentaAM/wfPassword.aspx';
                break;
            case '79':
                evento = 511;
                url = '../MiCuentaAM/wfUsername.aspx';
                break;
            case '80':
                evento = 0;
                url = 'wfDatosAlumno.aspx';
                break;
            case '81':
                evento = 582;
                url = '../Comunidad/wfPreguntas.aspx';
                break;
            case '82':
                evento = 583;
                url = '../Comunidad/wfMisSugerencias.aspx';
                break;
            case '83':
                evento = 584;
                url = '../Comunidad/wfColabora.aspx';
                break;
            case '84':
                evento = 404;
                url = '../Usuarios/wfAltaUsuario.aspx';
                break;
            case '85':
                evento = 411;
                url = '../Usuarios/wfAltaUsuarioArchivo.aspx';
                break;
            case '86':
                evento = 416;
                url = '../../App/Usuarios/wfListadoUsuarios.aspx';
                break;
            case '87':
                evento = 393;
                url = '../AdminCursos/wfListaAvisosGeneral.aspx';
                break;
            case '88':
                evento = 393;
                url = '../AdminGral/wfListadoAvisosUrgentes.aspx';
                break;
            case '89':
                evento = 498;
                url = '../AdminCursos/wfCorreos.aspx';
                break;
            case '90':
                evento = 499;
                url = '../Scripts/yammerOneDrive/muro.aspx';
                break;
        }

        PrincipalCurso.ActualizaFrame(url);

        return evento;
    }
};

var PortafolioAlumno = {
    subirArchivo: function (id, Tipo, Equipo, EquipoId, UpFile, File_Fecha) {
        if (String(UpFile) == 'True') {
            if (String(File_Fecha) == 'True') {
                if (String(Equipo) == 'True') {
                    location.href = "../../Curso/Equipos/wfAgregarDocumentoEquipo.aspx?EquipoId=" + EquipoId + "&PadreId=0&deDondeSoy=2&Tipo=1&ECPIAID=" + id + "&ECPIATIPO=" + Tipo;
                } else {
                    location.href = "../CalendarioAlumno/wfDocumentoAlumno.aspx?PadreId=" + id + "&Tipo=" + Tipo;
                }
            }
        }
    }
};

var PortafolioMaestro = {
    ObtieneTabla: function (IdCurso, Ver, Gpo, Alumno) {
        $.ajax({
            type: 'POST',
            data: '{ CursoId: "' + String(IdCurso) + '", Ver: "' + Ver + '", Grupo: "' + Gpo + '", Alumno: "' + String(Alumno) + '"}',
            url: "../Portafolio/wfPortafolio.aspx/CargaTablaMaestro",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (html) {
                $('.nx-portafolio-tabla').empty();

                if (html.d != '') {
                    $('.nx-portafolio-tabla').append(html.d);
                }

                var $btnGuardarTodo = $('.nx-gurd-todo');

                $btnGuardarTodo.click(function (e) {
                    e.preventDefault();

                    var actualizado = PortafolioMaestro.GuardarTodo($(this), IdCurso, PortafolioMaestro.ObtieneUsuario($(this)));

                    if (actualizado = true) {
                        //alert('actualizado');

                        PortafolioMaestro.ObtieneTabla(IdCurso, Ver, Gpo);
                    } else {
                        alert('nx-Err');
                    }
                });

                //General.ajustaAltoFrame($('#ContentPlaceHolder1_IframeBody'));
            },
            error: function (html) {
                //alert("Algún problema debe haber...");
                alert('nx-Err');

                //General.ajustaAltoFrame($('#ContentPlaceHolder1_IframeBody'));
            }
        });
    },
    ValidaCurso: function (IdCurso, Alumno) {
        var VerPortafolio = false;

        $.ajax({
            type: 'POST',
            data: '{ CursoId: "' + String(IdCurso) + '", Alumno: "' + String(Alumno) + '"}',
            url: "../Portafolio/wfPortafolio.aspx/ValidaCierreCurso",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (html) {
                VerPortafolio = html.d;
            },
            error: function (html) {
                //alert("Algún problema debe haber...");
                alert('nx-Err');
            }
        });

        return VerPortafolio;
    },
    CambiaVer: function (IdCurso) {
        var $nxTabla = $('.nx-portafolio-tabla');
        var $version = $('#ddlver');
        var $alumnos = $('#ddlAlumnos');
        var $grupoTodo = $('#ddlGrupoTodo');

        $version.change(function (e) {
            e.preventDefault();

            var _ver = $('#ddlver option:selected').val();
            var _gpo = '';

            if ($('#ddlGrupoTodo option:selected').val() != '' && typeof ($('#ddlGrupoTodo option:selected').val()) != 'undefined') {
                _gpo = $('#ddlGrupoTodo option:selected').val();
            } else {
                _gpo = 0;
            }

            //PortafolioMaestro.ObtieneTabla(IdCurso, _ver, _gpo, 0);

            PortafolioMaestro.ActualizaCmbs(_ver);
        });

        $alumnos.change(function (e) {
            e.preventDefault();

            var _ver = $('#ddlver option:selected').val();
            var _alm = $('#ddlAlumnos option:selected').val();
            var _gpo = '';

            var aPortafolio = false;

            if ($('#ddlGrupoTodo option:selected').val() != '' && typeof ($('#ddlGrupoTodo option:selected').val()) != 'undefined') {
                _gpo = $('#ddlGrupoTodo option:selected').val();
            } else {
                _gpo = 0;
            }

            aPortafolio = PortafolioMaestro.ValidaCurso(IdCurso, _alm);

            if (aPortafolio == true) {
                url = "../../Historico/wfEPortafolio.aspx?idusuario=" + _alm + "&idcurso=" + IdCurso;

                $(location).attr('href', url);
            } else {
                //PortafolioMaestro.ObtieneTabla(IdCurso, _ver, _gpo, _alm);

                PortafolioMaestro.ActualizaCmbs(_ver);
            }
        });

        $grupoTodo.change(function (e) {
            e.preventDefault();

            var _ver = $('#ddlver option:selected').val();
            var _gpo = '';

            if ($('#ddlGrupoTodo option:selected').val() != '' && typeof ($('#ddlGrupoTodo option:selected').val()) != 'undefined') {
                _gpo = $('#ddlGrupoTodo option:selected').val();
            } else {
                _gpo = 0;
            }

            PortafolioMaestro.ObtieneTabla(IdCurso, _ver, _gpo, 0);

            PortafolioMaestro.ActualizaCmbs(_ver);
        });
    },
    ActualizaCmbs: function (Ver) {
        var $nxTabla = $('.nx-portafolio-tabla');
        var $version = $('#ddlver');
        var $alumnos = $('#ddlAlumnos');
        var $grupoTodo = $('#ddlGrupoTodo');

        if (Ver != -1) {
            switch (Ver) {
                case '5':
                    if ($('.nx-portafolio-tabla').hasClass('nx-oculto')) {
                        $('.nx-portafolio-tabla').removeClass('nx-oculto');
                    }

                    if ($grupoTodo.hasClass('nx-oculto')) {
                        $grupoTodo.removeClass('nx-oculto');
                    }

                    $alumnos.addClass('nx-oculto');
                    break;
                case '0':
                    if ($('.nx-portafolio-tabla').hasClass('nx-oculto')) {
                        $('.nx-portafolio-tabla').removeClass('nx-oculto');
                    }

                    if ($grupoTodo.hasClass('nx-oculto')) {
                        $grupoTodo.removeClass('nx-oculto');
                    }

                    if ($alumnos.hasClass('nx-oculto')) {
                        $alumnos.removeClass('nx-oculto');
                    }
                    break;
                case '1':
                    break;
                case '2':
                    break;
                case '3':
                    break;
                case '4':
                    break;
            }
        } else {
            $('.nx-portafolio-tabla').empty();

            $('.nx-portafolio-tabla').addClass('nx-oculto');
            $grupoTodo.addClass('nx-oculto');
            $alumnos.addClass('nx-oculto');

            $alumnos.val('-1');
            $grupoTodo.val('0');
        }
    },
    GuardarTodo: function ($btnGuardarTodo, IdCurso, IdUsuario, mostrarModal) {
        function guardarValores(IdCurso, IdUsuario, cadena) {
            var _guardado = false;

            $.ajax({
                type: 'POST',
                data: '{ CursoId: "' + String(IdCurso) + '", UsuarioId: "' + String(IdUsuario) + '", Cadena: "' + String(cadena) + '"}',
                url: "../Portafolio/wfPortafolio.aspx/GuardarTodo",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (html) {
                    //_guardado = html.d;

                    _guardado = true;
                },
                error: function (html) {
                    //alert("Algún problema debe haber...");
                    //alert('nx-Err');

                    _guardado = false;
                }
            });

            return _guardado;
        }

        var $fila = $btnGuardarTodo.parents('tr');

        var $evidencias = $fila.find('.nx-evi');

        var cadena = '';
        var actualizado = false;

        var _lng = $evidencias.children('input').length;

        $evidencias.children('input').each(function (i) {
            var _id = $(this).attr('id');
            var _val = $(this).val();

            if (Number(_val) >= 0 && Number(_val) <= 100) {
                if (i < (_lng - 1)) {
                    cadena += ((_id + '-' + _val) + ',');
                } else {
                    cadena += (_id + '-' + _val);
                }
            }
        });

        actualizado = guardarValores(IdCurso, IdUsuario, cadena);

		if (mostrarModal == true) {
			if (actualizado = true) {
                Modal.Mostrar('', 'Se han guardado las calificaciones exitosamente.', ['Aceptar'], 0, []);
            } else {
                Modal.Mostrar('', 'Ha ocurrido un error al intentar guardar.', ['Aceptar'], 0, []);
            }
		} else {
		
		}

        return actualizado;
    },
    GuardarAlumno: function ($tablaAlumno, IdCurso, IdUsuario, mostrarModal) {
        function guardarValores(IdCurso, IdUsuario, cadena) {
            var _guardado = false;

            $.ajax({
                type: 'POST',
                data: '{ CursoId: "' + String(IdCurso) + '", UsuarioId: "' + String(IdUsuario) + '", Cadena: "' + String(cadena) + '"}',
                url: "../Portafolio/wfPortafolio.aspx/GuardarTodo",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (html) {
                    //_guardado = html.d;

                    _guardado = true;
                },
                error: function (html) {
                    //alert("Algún problema debe haber...");
                    //alert('nx-Err');

                    _guardado = false;
                }
            });

            return _guardado;
        }

        var cadena = '';
        var actualizado = false;

        var arrEvidencias = new Array();

        var _id = '';
        var _val = '';

        $tablaAlumno.find('tr').each(function (i) {
            if (typeof ($(this).find('.nx-evi').html()) != 'undefined') {
                var $evidencias = $(this).find('.nx-evi');

                _id = $evidencias.children('input').attr('id');
                _val = $evidencias.children('input').val();

                if (Number(_val) >= 0 && Number(_val) <= 100) {
                    arrEvidencias.push((_id + '-' + _val));
                }
            } else {

            }
        });

        i = 0;

        while (i <= (arrEvidencias.length - 1)) {
            cadena += arrEvidencias[i];

            if (i >= (arrEvidencias.length - 1)) {
                break;
            } else {
                cadena += ',';
                i += 1
            }
        }

        actualizado = guardarValores(IdCurso, IdUsuario, cadena);

		if (mostrarModal == true) {
			if (actualizado = true) {
				Modal.Mostrar('', 'Se han guardado las calificaciones exitosamente.', ['Aceptar'], 0, []);
			} else {
				Modal.Mostrar('', 'Ha ocurrido un error al intentar guardar.', ['Aceptar'], 0, []);
			}
		} else {
		
		}

        return actualizado;
    },
    GuardarEviEle: function ($tablaAlumnos, IdCurso, mostrarModal) {
        function guardarValores(IdCurso, cadena) {
            var _guardado = false;

            $.ajax({
                type: 'POST',
                data: '{ CursoId: "' + String(IdCurso) + '", Cadena: "' + String(cadena) + '"}',
                url: "../Portafolio/wfPortafolio.aspx/GuardarElemento",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (html) {
                    //_guardado = html.d;

                    _guardado = true;
                },
                error: function (html) {
                    //alert("Algún problema debe haber...");
                    //alert('nx-Err');

                    _guardado = false;
                }
            });

            return _guardado;
        }

        var cadena = '';
        var actualizado = false;

        var arrEvidencias = new Array();

        var _id = '';
        var _val = '';

        $tablaAlumnos.find('tr').each(function (i) {
            if (typeof ($(this).find('.nx-almno').html()) != 'undefined') {
                var $evidencias = $(this).find('.nx-almno');

                _id = $evidencias.children('input').attr('id');
                _val = $evidencias.children('input').val();

                if (Number(_val) >= 0 && Number(_val) <= 100) {
                    arrEvidencias.push((_id + '-' + _val));
                }
            } else {

            }
        });

        i = 0;

        while (i <= (arrEvidencias.length - 1)) {
            cadena += arrEvidencias[i];

            if (i >= (arrEvidencias.length - 1)) {
                break;
            } else {
                cadena += ',';
                i += 1
            }
        }

        actualizado = guardarValores(IdCurso, cadena);

		if (mostrarModal == true) {
			if (actualizado = true) {
                Modal.Mostrar('', 'Se han guardado las calificaciones exitosamente.', ['Aceptar'], 0, []);
            } else {
                Modal.Mostrar('', 'Ha ocurrido un error al intentar guardar.', ['Aceptar'], 0, []);
            }
		} else {
		
		}

        return actualizado;
    },
    ObtieneUsuario: function ($btnGuardarTodo) {
        var $fila = $btnGuardarTodo.parents('tr');
        var _id = '';

        _id = $fila.find('td').attr('id');

        return _id;
    },
    EnviarCorreo: function ($tablaAlumnos, NombreCurso, IdUsuario, mostrarModal) {
        function guardarValores(NombreCurso, IdUsuario, cadena) {
            var _guardado = false;

            $.ajax({
                type: 'POST',
                data: '{ NombreCurso: "' + NombreCurso + '", AlumnoId: "' + String(IdUsuario) + '", CadenaCorreos: "' + cadena + '"}',
                url: "../Portafolio/wfPortafolio.aspx/EnviarCalificaciones",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (html) {
                    //_guardado = html.d;

                    _guardado = true;
                },
                error: function (html) {
                    //alert("Algún problema debe haber...");
                    //alert('nx-Err');

                    _guardado = false;
                }
            });

            return _guardado;
        }

        var cadena = '';
        var actualizado = false;

        var arrEvidencias = new Array();

		var alumnosSeleccionados = false;
        var _id = '';
        var _val = '';

        var _obt = '';
        var _cal = '';
        var _fec = '';

        $tablaAlumnos.find('tr').each(function (i) {
            $(this).find('td').each(function (j) {
                if ($(this).hasClass('nx-obtenidos')) {
                    _obt = $(this).text();
                } else {
                    if ($(this).hasClass('nx-calificar')) {
                        _cal = $(this).text();
                    } else {
                        if ($(this).hasClass('nx-fecha')) {
                            _fec = $(this).text();
                        }
                    }
                }

                if (typeof ($(this).find('div').find('.nx-chk-almno').html()) != 'undefined') {
                    if ($(this).find('div').find('.nx-chk-almno').prop('checked') == true) {
                        _id = $(this).find('div').find('.nx-chk-almno').attr('id');
                        alumnosSeleccionados = true;
                        arrEvidencias.push((_id + '-' + String(_obt) + '-' + String(_cal) + '-' + String(_fec)));
                    }
                }
            });
        });

        i = 0;

        while (i <= (arrEvidencias.length - 1)) {
            cadena += arrEvidencias[i];

            if (i >= (arrEvidencias.length - 1)) {
                break;
            } else {
                cadena += ',';
                i += 1
            }
        }

        actualizado = guardarValores(NombreCurso, IdUsuario, cadena);

		 if (mostrarModal == true) {
            if (actualizado = true) {
                if (alumnosSeleccionados == true) {
                    Modal.Mostrar('', 'Correos enviados exitosamente.', ['Aceptar'], 0, []);
                } else {
                    Modal.Mostrar('', 'No es posible enviar Calificaciones porque se requiere seleccionar al menos un Estudiante. Por favor seleccione uno o mas Estudiantes e intente nuevamente.', ['Aceptar'], 0, []);
                }

            } else {
                Modal.Mostrar('', 'No se ha podido enviar el correo.', ['Aceptar'], 0, []);
            }
        } else {

        }

        return actualizado;
    },
    LanzarRetroalimentacion: function (tipo, url, salvar) {
        var actualizado = false;
        var redirecciona = false;

        if (url.length > 0 && salvar.length > 0) {
            switch (tipo) {
                case '1':
                    var arrSalvar = salvar.split('/');

                    var $tabla = $('.' + String(arrSalvar[0]));

                    actualizado = PortafolioMaestro.GuardarAlumno($tabla, String(arrSalvar[1]), String(arrSalvar[2]), false);

                    redirecciona = true;

                    break;
                case '2':
                    var arrSalvar = salvar.split('/');

                    var $tabla = $('.' + String(arrSalvar[0]));

                    actualizado = PortafolioMaestro.GuardarEviEle($tabla, String(arrSalvar[1]), false);

                    redirecciona = true;

                    break;
            }
        }

        if (redirecciona == true) {
            location.href = url;
        }
    },
    ValidaCargando: function () {
        function Cargando(mostrar) {
            var $nxCargando = $('.nx-cargando');

            if (mostrar == true) {
                if ($nxCargando.hasClass('nx-oculto')) {
                    var $nxTable = $('.nx-portafolio-tabla');
                    var $nxBotonera = $('.nx-botonera-portafolio');

                    $nxTable.empty();
                    $nxBotonera.empty();

                    $nxCargando.removeClass('nx-oculto');
                }
            } else {
                if (!$nxCargando.hasClass('nx-oculto')) {
                    $nxCargando.addClass('nx-oculto');
                }
            }
        }

        var $ddlVer = $('#ddlver');
        var $ddlGrupoEvi = $('#ddlGrupoTodo, #ddlGrupo, #ddlGrupoEvi, #ddlgrupoCal');
        var $ddlEle = $('#ddlAlumnos, #ddlEviCom');
        var $nxTable = $('.nx-table');

        if ($nxTable.height() > 0) {
            Cargando(false);
        }

        $ddlVer.change(function () {
            var _valor = $(this).val();

            if (_valor < 3) {
                Cargando(false);
            } else {
                Cargando(true);
            }
        });

        $ddlGrupoEvi.change(function () {
            if ($nxTable.height() > 0) {
                Cargando(true);
            }
        });

        $ddlEle.change(function () {
            Cargando(true);
        });
    }
}

var Modal = {
    Mostrar: function (_titulo, _mensaje, _botones, _primario, _archivos) {
        var $nxModal = $('#nx-modal', window.parent.document);
        var $nxBtnModal = $('#nx-btn-modal', window.parent.document);

        var _html = '<div class="box box-solid nx-modal-mensaje">';

        $nxModal.children('.modal-dialog').children('.modal-content').find('.modal-header').hide();
        $nxModal.children('.modal-dialog').children('.modal-content').find('.modal-footer').hide();

        $nxModal.children('.modal-dialog').children('.modal-content').find('.modal-body').empty();

        if (_titulo.length > 0) {
            _html += '<div class="box-header"><h3 class="box-title">';
            _html += _titulo;
            _html += '</h3></div>';
        }

        if (_mensaje.length > 0) {
            _html += '<div class="box-body">';
            _html += _mensaje;
            _html += '</div>';
        }

        if (_archivos.length > 0) {
            var i = 0;
            var _listaArchivos = '';

            _listaArchivos = '<div class="box-files"><ul class="list-unstyled"><li>';

            while (i <= (_archivos.length - 1)) {
                var _arcInfo = new Array();
                var _arcClase = '';

                _arcInfo = _archivos[i];

                _listaArchivos += '<p>';

                _listaArchivos += '<i class="fa fa-paperclip"></i> ';

                _arcClase = _arcInfo[0] + '?' + _arcInfo[1] + '?' + _arcInfo[2];

                _listaArchivos += '<a href="#" class="' + _arcClase + '">' + _arcInfo[1] + '</a>';
                //_listaArchivos += '<a href="../Curso/Documentos/wfDownload.aspx?Unidad='+ _arcInfo[0]+'&RecursoNombre='+_arcInfo[1]+'&ArchivoAnterior='+_arcInfo[2]+'">' + _arcInfo[1] + '</a>';


                _listaArchivos += '</p>';

                if (_arcInfo.length > 3) {
                    _listaArchivos += '<p class="nx-calificacion-fecha-archivo-entregado">' + _arcInfo[3] + ', ' + _arcInfo[4] + '</p>';
                }

            if (i >= (_archivos.length - 1)) {
                i += 1;
            } else {
                break;
            }
            }

            _listaArchivos += '</li></ul></div>';

            _html += _listaArchivos;
        }

        if (_botones.length > 0) {
            _html += '<div class="box-footer text-center">';

            var i = 0;

            while (i <= _botones.length) {
                if (i == _primario) {
                    _html += '<button class="btn btn-primary nx-btn-aceptar" data-dismiss="modal">';
                } else {
                    _html += '<button class="btn btn-default nx-btn-cancelar" data-dismiss="modal">';
                }

                _html += _botones[i];

                _html += '</button>';

                if (i >= (_botones.length - 1)) {
                    break;
                } else {
                    i += 1;
                }
            }
        }

        $nxModal.children('.modal-dialog').children('.modal-content').find('.modal-body').append(_html);

        var $enlaces = $nxModal.children('.modal-dialog').children('.modal-content').find('.modal-body').find('.box-files');
        var es_ie = navigator.userAgent.toLowerCase().indexOf('trident') > -1;

        $enlaces.find('a').each(function (i) {
            $(this).click(function (e) {
                e.preventDefault();

                var arcClase = $(this).attr('class');
                var arrClase = new Array();
                var url = '';

                arrClase = arcClase.split('?');

                //url = '../Curso/Documentos/wfDownload.aspx?Unidad=' + arrClase[0] + '&RecursoNombre=' + arrClase[1] + '&ArchivoAnterior=' + arrClase[2];

                if (es_ie) {
                   url = '../../Curso/Documentos/wfDownload.aspx?Unidad=' + arrClase[0] + '&RecursoNombre=' + arrClase[1] + '&ArchivoAnterior=' + arrClase[2];
                } else {
                   url = '../Curso/Documentos/wfDownload.aspx?Unidad=' + arrClase[0] + '&RecursoNombre=' + arrClase[1] + '&ArchivoAnterior=' + arrClase[2];
                }

                document.getElementById('divDow').innerHTML = '<iframe id="frmBitacora" Width="0px" Height="0px"  scrolling="no" frameborder="0" runat="server" src="../Documentos/wfBitacoraDoc_Links.aspx?Tipo=21&Desc=' + arrClase[1] + '--' + arrClase[2] + '"></iframe>';

                location.href = url;
            });
        });

        $nxBtnModal.click();
    }
}

var Master = {
    ActualizaEnlacePrincipal: function (_rol) {
        function actualizaEnlace(url) {
            var $nxRutas = $('.nx-rutas');

            if (url.length > 0) {
                $nxRutas.empty();

                $nxRutas.append('<li class="active"><a href="' + url + '"><i class="fa fa-home"></i> Principal</a></li>');
            }
        }

        var url = '';

        if (_rol == '1' || _rol == '10' || _rol == '11') {
            url = $('#hfAdmonAcademica').val();
        } else {
            if (_rol == '2' || _rol == '3' || _rol == '4') {
                url = $('#hfMaestro').val();
            } else {
                switch (_rol) {
                    case '5':
                        url = $('#hfAlumno').val();
                        break;
                    case '6':
                        url = $('#hfAdmonGeneral').val();
                        break;
                    case '7':
                        url = $('#hfCalidad').val();
                        break;
                    case '12':
                        url = $('#hfAuditor').val();
                        break;
                }
            }
        }

        actualizaEnlace(url);
    },
    Cargando: function (estado) {
        /*var $nxModal = $('#nx-modal');
        var $nxBtnModal = $('#nx-btn-modal');

        $nxModal.empty();

        var _html = '<div class="nx-cargando-fade"><div class="nx-cargando"><div class="loader nx-cargando-vctr"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/><path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/></path></svg></div><div class="nx-cargando-vctr"><p>Cargando...</p></div></div></div>';

        if (estado == true) {
        $nxModal.append(_html);

        $nxBtnModal.click();
        } else {
        $nxModal.empty();
        }*/
    },
    Notificar: function (mensaje, tipo) {
        var $nxNotificaciones = $('.nx-notificaciones');

        switch (tipo) {
            case 0:
                $nxNotificaciones.find('.alert').addClass('alert-info');
                $nxNotificaciones.find('span').append('<i class="fa fa-info"></i> ' + mensaje);
                $nxNotificaciones.find('div').show();
                break;
            case 1:
                $nxNotificaciones.find('.alert').addClass('alert-success');
                $nxNotificaciones.find('span').append('<i class="fa fa-check"></i> ' + mensaje);
                $nxNotificaciones.find('div').show();
                break;
            case 2:
                $nxNotificaciones.find('.alert').addClass('alert-warning');
                $nxNotificaciones.find('span').append('<i class="fa fa-warning"></i> ' + mensaje);
                $nxNotificaciones.find('div').show();
                break;
            case 3:
                $nxNotificaciones.find('.alert').addClass('alert-danger');
                $nxNotificaciones.find('span').append('<i class="fa fa-ban"></i> ' + mensaje);
                $nxNotificaciones.find('div').show();
                break;
        }
    },
    PrincipalHora: function () {
        $(window).scroll(function () {
            var $principalHora = $('.nx-rutas-tiempo');
            var _scroll = $(window).scrollTop();

            if (_scroll >= 47) {
                if (!$principalHora.hasClass('navbar navbar-static-top nx-rutas-tiempo-fixed')) {
                    $principalHora.addClass('navbar navbar-static-top nx-rutas-tiempo-fixed');
                }
            } else {
                if ($principalHora.hasClass('navbar navbar-static-top nx-rutas-tiempo-fixed')) {
                    $principalHora.removeClass('navbar navbar-static-top nx-rutas-tiempo-fixed');
                }
            }
        });
    },
	 AsignaAvisoUrgente: function () {
        var altoNavegador = $(window).height();
        var anchoNavegador = $(window).width();
        var altoAviso = $('.ventana-aviso_urgente').height();
        var anchoaviso = $('.ventana-aviso_urgente').width();

        $('.ventana-aviso_urgente').css({
            'top': ((altoNavegador / 2) - (altoAviso / 2)),
            'left': ((anchoNavegador / 2) - (anchoaviso / 2))
           
        });

        $(window).resize(function (e) {

            var altoNavegador = $(window).height();
            var anchoNavegador = $(window).width();

            $('.ventana-aviso_urgente').css({
                'top': ((altoNavegador / 2) - (altoAviso / 2)),
                'left': ((anchoNavegador / 2) - (anchoaviso / 2))
            });
        });
    }
};

var CalificacionesAlumno = {
    vistaAlumno: function (vista) {
        switch (vista) {
            case 1:
                $("#vistaTodosElementosAlumno").css("display", "block");
                $("#vistaActividadesAlumno").css("display", "none");
                $("#vistaElementosExtraAlumno").css("display", "none");
                $("#vistaExamenesAlumno").css("display", "none");

                $("#btnvistatodoAlumno").addClass("active nx-azul");
                $("#btnvistaActividadesAlumno").removeClass("active nx-azul");
                $("#btnvistaElementosExtraAlumno").removeClass("active nx-azul");
                $("#btnvistaExamenesAlumno").removeClass("active nx-azul");
                break
            case 2:
                $("#vistaTodosElementosAlumno").css("display", "none");
                $("#vistaActividadesAlumno").css("display", "block");
                $("#vistaElementosExtraAlumno").css("display", "none");
                $("#vistaExamenesAlumno").css("display", "none");

                $("#btnvistatodoAlumno").removeClass("active nx-azul");
                $("#btnvistaActividadesAlumno").addClass("active nx-azul");
                $("#btnvistaElementosExtraAlumno").removeClass("active nx-azul");
                $("#btnvistaExamenesAlumno").removeClass("active nx-azul");
                break
            case 3:
                $("#vistaTodosElementosAlumno").css("display", "none");
                $("#vistaActividadesAlumno").css("display", "none");
                $("#vistaElementosExtraAlumno").css("display", "block");
                $("#vistaExamenesAlumno").css("display", "none");

                $("#btnvistatodoAlumno").removeClass("active nx-azul");
                $("#btnvistaActividadesAlumno").removeClass("active nx-azul");
                $("#btnvistaElementosExtraAlumno").addClass("active nx-azul");
                $("#btnvistaExamenesAlumno").removeClass("active nx-azul");
                break
            case 4:
                $("#vistaTodosElementosAlumno").css("display", "none");
                $("#vistaActividadesAlumno").css("display", "none");
                $("#vistaElementosExtraAlumno").css("display", "none");
                $("#vistaExamenesAlumno").css("display", "block");

                $("#btnvistatodoAlumno").removeClass("active nx-azul");
                $("#btnvistaActividadesAlumno").removeClass("active nx-azul");
                $("#btnvistaElementosExtraAlumno").removeClass("active nx-azul");
                $("#btnvistaExamenesAlumno").addClass("active nx-azul");
                break
        }

    },
    vistaAlumnoIniciaFunciones: function () {
        CalificacionesAlumno.vistaAlumno(1);
        $("#btnvistatodoAlumno").click(function (e) {
            CalificacionesAlumno.vistaAlumno(1);
        });

        $("#btnvistaActividadesAlumno").click(function (e) {
            CalificacionesAlumno.vistaAlumno(2);
        });

        $("#btnvistaElementosExtraAlumno").click(function (e) {
            CalificacionesAlumno.vistaAlumno(3);
        });

        $("#btnvistaExamenesAlumno").click(function (e) {
            CalificacionesAlumno.vistaAlumno(4);
        });
    }
};

var EstructuraCursos = {
    AsignaRecursosEmergente: function (titulo, mensaje) {
        var $mensajeEmergente = $('.nx-cuerpo_emergente', window.parent.document);
        var mensajeHtml = '<div id="vtnEmergenteEstUniApr" class="timeline nx-emergente-width ventana-emergenteestuniapr">';
        mensajeHtml += '<li>';
        mensajeHtml += '<div class="timeline-item">';
        mensajeHtml += '<div class="pull-right box-tools">';
        mensajeHtml += '<button id="btn-emergentecerrar" class="btn btn-default btn-sm nx-btn-aviso-cerrar" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">';
        mensajeHtml += '<i class="fa fa-times"></i>';
        mensajeHtml += '</button>';
        mensajeHtml += '</div>';
        mensajeHtml += '<h3 class="timeline-header"><a>' + titulo + '</a></h3>';
        mensajeHtml += '<div class="timeline-body nx-cuerpo-Emergente">';
        mensajeHtml += mensaje;
        mensajeHtml += '</div>';
        mensajeHtml += '</div>';
        mensajeHtml += '</li>';
        mensajeHtml += '</div>';
        $mensajeEmergente.append(mensajeHtml);
        EstructuraCursos.creaMensaje('#vtnEmergenteEstUniApr');



    },
    creaMensaje: function (id) {
        var $velo = $('.nx-velo_emergente', window.parent.document);
        var $ventana = $('.ventana-emergenteestuniapr', window.parent.document);
        //        var altoMascara = $(document).height();
        //        var anchoMascara = $(document).width();

        //var altoNavegador = $(window).height();
        //var anchoNavegador = $(window).width();
        var altoNavegador = $(window.parent).height();
        var anchoNavegador = $(window.parent).width();
        var altoAviso = $('.ventana-emergenteestuniapr', window.parent.document).height();
        var anchoaviso = $('.ventana-emergenteestuniapr', window.parent.document).width();
        $velo.css({
            'width': '100%',
            'height': '100%'
        });
        $velo.fadeIn(100);
        $velo.fadeTo('fast', 0.50);

        $('.ventana-emergenteestuniapr', window.parent.document).css({
            'top': ((altoNavegador / 2) - (altoAviso / 2)),
            'left': ((anchoNavegador / 2) - (anchoaviso / 2))
            //            'max-width':'550px',
            //            'margin':'auto'
            //            'left': '100px'
        });
        $('.ventana-emergenteestuniapr', window.parent.document).fadeIn(600);
        $velo.click(function (e) {
            $(this).hide();
            $ventana.hide();

            EstructuraCursos.limpiaAviso(id);
        });

        $(window.parent).resize(function (e) {
            $velo.css({
                'width': '100%',
                'height': '100%'
            });

            var altoNavegador = $(window.parent).height();
            var anchoNavegador = $(window.parent).width();

            $('.ventana-emergenteestuniapr').css({
                'top': ((altoNavegador / 2) - (altoAviso / 2)),
                'left': ((anchoNavegador / 2) - (anchoaviso / 2))
            });
        });

        var $btnCerrar = $('#btn-emergentecerrar', window.parent.document);
        $btnCerrar.click(function (e) {
            e.preventDefault();

            $velo.hide();
            $ventana.hide();
            EstructuraCursos.limpiaAviso(id);

        });

    },
    limpiaAviso: function (id) {
        var $mensajeEmergente = $('.nx-cuerpo_emergente', window.parent.document);

        $mensajeEmergente.children(id, window.parent.document).remove();
    },
    valorinicialAviso: function () {
        $('.nx-aviso-width').css("display", "none");
    },
    RecursosEmergentesDescargar: function (titulo, ContenidoRecursos) {
        var $mensajeEmergente = $('.nx-cuerpo_emergente', window.parent.document);
        var mensajeHtml = '<div id="vtnEmergenteEstUniApr" class="timeline nx-emergente-width ventana-emergenteestuniapr">';
        var mensaje = '';

        if (ContenidoRecursos.length > 0) {
            var numeroRecursos = 0;
            var listaRecursos = '';

            while (numeroRecursos <= (ContenidoRecursos.length - 2)) {
                var RecursoInfo = new Array();
                var ParametrosArch = new Array();
                var DescripcionRec = '';
                var rutaArch = '';
                var DescArch = '';
                var NomFisArch = '';
                RecursoInfo = ContenidoRecursos[numeroRecursos];
                ParametrosArch = RecursoInfo[1];
                DescripcionRec = RecursoInfo[0];
                if (ParametrosArch.length > 0) {
                    rutaArch = ParametrosArch[0];
                    DescArch = ParametrosArch[1];
                    NomFisArch = ParametrosArch[2];
                    mensaje = mensaje + '<a href="../Curso/Documentos/wfDownload.aspx?Unidad=' + rutaArch + '&RecursoNombre=' + DescArch + '&ArchivoAnterior=' + NomFisArch + '">' + DescripcionRec + '</a><br>';
                } else {
                    mensaje = mensaje + DescripcionRec + '<br>';
                }
               

                numeroRecursos += 1;
            }

        }
        mensajeHtml += '<li>';
        mensajeHtml += '<div class="timeline-item">';
        mensajeHtml += '<div class="pull-right box-tools">';
        mensajeHtml += '<button id="btn-emergentecerrar" class="btn btn-default btn-sm nx-btn-aviso-cerrar" data-widget="remove" data-toggle="tooltip" title="" data-original-title="Remove">';
        mensajeHtml += '<i class="fa fa-times"></i>';
        mensajeHtml += '</button>';
        mensajeHtml += '</div>';
        mensajeHtml += '<h3 class="timeline-header"><a>' + titulo + '</a></h3>';
        mensajeHtml += '<div class="timeline-body nx-cuerpo-Emergente">';
        mensajeHtml += mensaje;
        mensajeHtml += '</div>';
        mensajeHtml += '</div>';
        mensajeHtml += '</li>';
        mensajeHtml += '</div>';
        $mensajeEmergente.append(mensajeHtml);
        EstructuraCursos.creaMensaje('#vtnEmergenteEstUniApr');

    }
};

var Foros = {
    Eliminar: function (Id, Foro,Direccion) {
        $.ajax({
            type: 'POST',
            data: '{ Id: "' + String(Id) + '", Foro: "' + String(Foro) + '", Direccion: "' + String(Direccion) + '"}',
            url: "../Foros/wfListaForos.aspx/EliminarForo",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (html) {
                $('#nx-f' + String(Id)).remove();

                Modal.Mostrar('', 'Se ha eliminado el foro exitosamente.', ['Aceptar'], 0, []);
            },
            error: function (html) {
                Modal.Mostrar('', 'Ha ocurrido un error al intentar eliminar el foro, por favor inténtelo más tarde.', ['Aceptar'], 0, []);
            }
        });
    },
    ConfirmarEliminacion: function (_elemento, _id, _foro, _direccion) {
        Modal.Mostrar('', '¿Está seguro que desea eliminar el foro "' + _elemento.find('a').text() + '"?', ['Aceptar', 'Cancelar'], 0, []);

        $('.nx-btn-aceptar', window.parent.document).click(function () {
            Foros.Eliminar(_id, _foro, _direccion);
        });
    },
};

}
/*
     FILE ARCHIVED ON 05:19:53 Nov 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:33:34 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.734
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.012
  esindex: 0.037
  cdx.remote: 22.801
  LoadShardBlock: 102.182 (3)
  PetaboxLoader3.datanode: 88.705 (4)
  PetaboxLoader3.resolve: 114.254 (2)
  load_resource: 123.639
*/