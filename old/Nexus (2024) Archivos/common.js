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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/ui/loading/loading.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/ui/loading/loading.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ui/loading/loading.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/ui/loading/loading.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"d-flex flex-column align-items-center\">\r\n\r\n  <div *ngIf=\"Type == 'icon'\">\r\n    <i class=\"fad fa-spinner-third fa-spin primary font-size-50\"></i>\r\n  </div>\r\n\r\n  <div *ngIf=\"Type == 'logo'\">\r\n    <img src=\"assets/img/logos/nx-logo-isotipo.png\">\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"Text\">\r\n    <div class=\"color-3 font-size-15 mt-2\">{{Text}}</div>\r\n  </ng-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ui/loading/loading.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/ui/loading/loading.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "Type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "Text", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/ui/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/ui/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/uploading/uploading.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/ui/uploading/uploading.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ui/uploading/uploading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/ui/uploading/uploading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay overlay-light d-flex justify-content-center h-100 align-items-center\">\r\n  <div class=\"w-100 text-center\">\r\n    <mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"indeterminate\" [value]=\"Porcentaje\"></mat-progress-bar>\r\n    <div class=\"p-3 bold-500 font-size-20\">Cargando {{Porcentaje}}%</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/ui/uploading/uploading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/ui/uploading/uploading.component.ts ***!
  \****************************************************************/
/*! exports provided: UploadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingComponent", function() { return UploadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadingComponent = /** @class */ (function () {
    function UploadingComponent() {
    }
    UploadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadingComponent.prototype, "Porcentaje", void 0);
    UploadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uploading',
            template: __webpack_require__(/*! ./uploading.component.html */ "./src/app/components/ui/uploading/uploading.component.html"),
            styles: [__webpack_require__(/*! ./uploading.component.css */ "./src/app/components/ui/uploading/uploading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadingComponent);
    return UploadingComponent;
}());



/***/ }),

/***/ "./src/app/models/Competencia/CompetenciaGenerica.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/Competencia/CompetenciaGenerica.ts ***!
  \***********************************************************/
/*! exports provided: CompetenciaGenerica, AtributoCompetenciaGenerica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaGenerica", function() { return CompetenciaGenerica; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtributoCompetenciaGenerica", function() { return AtributoCompetenciaGenerica; });
var CompetenciaGenerica = /** @class */ (function () {
    function CompetenciaGenerica(C) {
        this.Atributos = [];
        if (C) {
            this.CompetenciaGenericaId = C.CompetenciaGenericaId;
            this.Descripcion = C.Descripcion;
            this.Numero = C.Numero;
            this.Atributos = C.Atributos.map(function (A) { return new AtributoCompetenciaGenerica(A); });
            this.Estado = C.Estado;
        }
    }
    return CompetenciaGenerica;
}());

var AtributoCompetenciaGenerica = /** @class */ (function () {
    function AtributoCompetenciaGenerica(ACG) {
        if (ACG) {
            this.AtributoCompetenciaGenericaId = ACG.AtributoCompetenciaGenericaId;
            this.CompetenciaGenericaId = ACG.CompetenciaGenericaId;
            this.Descripcion = ACG.Descripcion;
            this.RasgoId = ACG.RasgoId;
            this.Rasgo = ACG.Rasgo;
            this.Estado = ACG.Estado;
        }
    }
    return AtributoCompetenciaGenerica;
}());



/***/ }),

/***/ "./src/app/models/Desempeno/DTO/AccesoEstudianteDTO.ts":
/*!*************************************************************!*\
  !*** ./src/app/models/Desempeno/DTO/AccesoEstudianteDTO.ts ***!
  \*************************************************************/
/*! exports provided: AccesoEstudianteDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesoEstudianteDTO", function() { return AccesoEstudianteDTO; });
var AccesoEstudianteDTO = /** @class */ (function () {
    function AccesoEstudianteDTO(A) {
        if (A) {
            this.Dia = A.Dia;
            this.FechaFin = A.FechaFin;
            this.FechaInicio = A.FechaInicio;
            this.GrupoId = A.GrupoId;
            this.GrupoNombre = A.GrupoNombre;
            this.Porcentaje = A.Porcentaje;
            this.Semana = A.Semana;
            this.Total = A.Total;
            this.TotalAlumnos = A.TotalAlumnos;
            this.UnidadAprendizaje = A.UnidadAprendizaje;
            this.Orden = A.Orden;
        }
    }
    return AccesoEstudianteDTO;
}());



/***/ }),

/***/ "./src/app/models/Desempeno/DTO/AccesoProfesorDTO.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/Desempeno/DTO/AccesoProfesorDTO.ts ***!
  \***********************************************************/
/*! exports provided: AccesoProfesorDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccesoProfesorDTO", function() { return AccesoProfesorDTO; });
var AccesoProfesorDTO = /** @class */ (function () {
    function AccesoProfesorDTO(A) {
        this.GrupoId = A.GrupoId;
        this.GrupoNombre = A.GrupoNombre;
        this.UnidadAprendizaje = A.UnidadAprendizaje;
        this.Profesor = A.Profesor;
        this.Semana = A.Semana;
        this.FechaInicio = A.FechaInicio;
        this.Total = A.Total;
        this.Orden = A.Orden;
    }
    return AccesoProfesorDTO;
}());



/***/ }),

/***/ "./src/app/models/Desempeno/DTO/ParticipacionForoAlumnoDTO.ts":
/*!********************************************************************!*\
  !*** ./src/app/models/Desempeno/DTO/ParticipacionForoAlumnoDTO.ts ***!
  \********************************************************************/
/*! exports provided: ParticipacionForoAlumnoDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipacionForoAlumnoDTO", function() { return ParticipacionForoAlumnoDTO; });
var ParticipacionForoAlumnoDTO = /** @class */ (function () {
    function ParticipacionForoAlumnoDTO(P) {
        if (P) {
            this.NombreMateria = P.NombreMateria;
            this.ForoNombre = P.ForoNombre;
            this.NombreTema = P.NombreTema;
            this.GrupoNombre = P.GrupoNombre;
            this.NombreProfesor = P.NombreProfesor;
            var Fi = new Date(P.FechaInicio);
            var Ff = new Date(P.FechaFin);
            this.FechaInicio = Fi.getFullYear() +
                "-" +
                (Fi.getMonth() < 10 ? "0" : "") +
                (Fi.getMonth() + 1) +
                "-" +
                (Fi.getDate() < 10 ? "0" : "") +
                Fi.getDate();
            this.FechaFin = Ff.getFullYear() +
                "-" +
                (Ff.getMonth() < 10 ? "0" : "") +
                (Ff.getMonth() + 1) +
                "-" +
                (Ff.getDate() < 10 ? "0" : "") +
                Ff.getDate();
            this.Participaciones = P.Participaciones;
            this.AlumnosTotal = P.AlumnosTotal;
            this.Porcentaje = P.Porcentaje;
        }
    }
    return ParticipacionForoAlumnoDTO;
}());



/***/ }),

/***/ "./src/app/models/Desempeno/DTO/ParticipacionForoProfesorDTO.ts":
/*!**********************************************************************!*\
  !*** ./src/app/models/Desempeno/DTO/ParticipacionForoProfesorDTO.ts ***!
  \**********************************************************************/
/*! exports provided: ParticipacionForoProfesorDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipacionForoProfesorDTO", function() { return ParticipacionForoProfesorDTO; });
var ParticipacionForoProfesorDTO = /** @class */ (function () {
    function ParticipacionForoProfesorDTO(P) {
        if (P) {
            this.NombreMateria = P.NombreMateria;
            this.NombreForo = P.NombreForo;
            this.NombreTema = P.NombreTema;
            this.GrupoNombre = P.GrupoNombre;
            this.NombreProfesor = P.NombreProfesor;
            this.Comentarios = P.Comentarios;
            var Fi = new Date(P.FechaInicio);
            var Ff = new Date(P.FechaFin);
            this.FechaInicio = Fi.getFullYear() +
                "-" +
                (Fi.getMonth() < 10 ? "0" : "") +
                (Fi.getMonth() + 1) +
                "-" +
                (Fi.getDate() < 10 ? "0" : "") +
                Fi.getDate();
            this.FechaFin = Ff.getFullYear() +
                "-" +
                (Ff.getMonth() < 10 ? "0" : "") +
                (Ff.getMonth() + 1) +
                "-" +
                (Ff.getDate() < 10 ? "0" : "") +
                Ff.getDate();
            this.Duracion = P.Duracion;
        }
    }
    return ParticipacionForoProfesorDTO;
}());



/***/ }),

/***/ "./src/app/models/Desempeno/DTO/SeguimientoExamenDTO.ts":
/*!**************************************************************!*\
  !*** ./src/app/models/Desempeno/DTO/SeguimientoExamenDTO.ts ***!
  \**************************************************************/
/*! exports provided: SeguimientoExamenDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoExamenDTO", function() { return SeguimientoExamenDTO; });
var SeguimientoExamenDTO = /** @class */ (function () {
    function SeguimientoExamenDTO(S) {
        this.Renglon = S.Renglon;
        this.NombreMateria = S.NombreMateria;
        this.ExamenNombre = S.ExamenNombre;
        this.GrupoNombre = S.GrupoNombre;
        this.Estudiantes = S.Estudiantes;
        this.Habilitado = S.Habilitado;
        this.Contesto = S.Contesto;
        this.Nocontesto = S.Nocontesto;
        this.Porcentaje = S.Porcentaje;
        var Fi = new Date(S.Fechainicio);
        this.Fechainicio = Fi.getFullYear() +
            "-" +
            (Fi.getMonth() < 10 ? "0" : "") +
            (Fi.getMonth() + 1) +
            "-" +
            (Fi.getDate() < 10 ? "0" : "") +
            Fi.getDate();
    }
    return SeguimientoExamenDTO;
}());



/***/ }),

/***/ "./src/app/models/Examen/ExamenEstudiante.ts":
/*!***************************************************!*\
  !*** ./src/app/models/Examen/ExamenEstudiante.ts ***!
  \***************************************************/
/*! exports provided: ExamenEstudiante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenEstudiante", function() { return ExamenEstudiante; });
/* harmony import */ var _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Persona/Estudiante */ "./src/app/models/Persona/Estudiante.ts");
/* harmony import */ var _Examen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Examen */ "./src/app/models/Examen/Examen.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ExamenEstudiante = /** @class */ (function (_super) {
    __extends(ExamenEstudiante, _super);
    function ExamenEstudiante(EE) {
        var _this = _super.call(this, EE) || this;
        if (EE) {
            _this.EstudianteExamenId = EE.EstudianteExamenId;
            _this.CuentaId = EE.CuentaId;
            _this.GrupoId = EE.GrupoId;
            _this.Habilitado = EE.Habilitado;
            _this.ExamenId = EE.ExamenId;
            _this.FechaInicio = EE.FechaInicio ? new Date(EE.FechaInicio) : null;
            _this.FechaFin = EE.FechaFin ? new Date(EE.FechaFin) : null;
            _this.FechaInicioExamen = new Date(EE.FechaInicioExamen);
            _this.FechaFinExamen = new Date(EE.FechaFinExamen);
            _this.Calificado = EE.Calificado;
            _this.CalificacionObtenida = EE.CalificacionObtenida;
            _this.CalificacionOtorgada = EE.CalificacionOtorgada;
            _this.MotivoCambioCalificacion = EE.MotivoCambioCalificacion;
            _this.NombreGrupo = EE.NombreGrupo;
            _this.Tiempo = EE.Tiempo;
            _this.TipoReactivacionId = EE.TipoReactivacionId;
            _this.TipoTerminacionId = EE.TipoTerminacionId;
            _this.Estado = EE.Estado;
            _this.Estudiante = EE.Estudiante ? new _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_0__["Estudiante"](EE.Estudiante) : null;
            _this.ElementoExamen = EE.ElementoExamen;
            _this.EtapaExamen = EE.EtapaExamen;
            _this.Oportunidades = EE.Oportunidades;
        }
        return _this;
    }
    return ExamenEstudiante;
}(_Examen__WEBPACK_IMPORTED_MODULE_1__["Examen"]));



/***/ }),

/***/ "./src/app/models/Examen/ExamenReactivo.ts":
/*!*************************************************!*\
  !*** ./src/app/models/Examen/ExamenReactivo.ts ***!
  \*************************************************/
/*! exports provided: ExamenReactivo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivo", function() { return ExamenReactivo; });
/* harmony import */ var _ExamenRespuestas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExamenRespuestas */ "./src/app/models/Examen/ExamenRespuestas.ts");

var ExamenReactivo = /** @class */ (function () {
    function ExamenReactivo(ER) {
        if (ER) {
            this.ReactivosId = ER.ReactivosId;
            this.ExamenId = ER.ExamenId;
            this.TipoReactivoId = ER.TipoReactivoId;
            this.Descripcion = ER.Descripcion;
            this.RetroalimentacionCorrecta = ER.RetroalimentacionCorrecta;
            this.RetroalimentacionIncorrecta = ER.RetroalimentacionIncorrecta;
            this.Posicion = ER.Posicion;
            this.Valor = ER.Valor;
            this.Tiempo = ER.Tiempo;
            this.Bloque = ER.Bloque;
            this.Estado = ER.Estado;
            this.Respuesta = new _ExamenRespuestas__WEBPACK_IMPORTED_MODULE_0__["ExamenRespuestaContestar"](ER.Respuesta);
        }
    }
    return ExamenReactivo;
}());



/***/ }),

/***/ "./src/app/models/SIASE/GrupoSIASE.ts":
/*!********************************************!*\
  !*** ./src/app/models/SIASE/GrupoSIASE.ts ***!
  \********************************************/
/*! exports provided: GrupoSIASE, VinculoGrupoSIASEEquivalente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoSIASE", function() { return GrupoSIASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VinculoGrupoSIASEEquivalente", function() { return VinculoGrupoSIASEEquivalente; });
var GrupoSIASE = /** @class */ (function () {
    function GrupoSIASE(G) {
        this.IdGrupo = 0;
        this.CursoCompartido = false;
        this.CursoCompartidoIndicador = 0;
        this.IdGrupo = G.IdGrupo ? G.IdGrupo : 0;
        this.ClaveDependencia = G.ClaveDependencia;
        this.ClaveUnidad = G.ClaveUnidad;
        this.ClaveTipoPeriodo = G.ClaveTipoPeriodo;
        this.ClaveTipoOferta = G.ClaveTipoOferta;
        this.ClavePeriodo = G.ClavePeriodo;
        this.ClaveNivelAcademico = G.ClaveNivelAcademico;
        this.ClaveGradoAcademico = G.ClaveGradoAcademico;
        this.ClaveModalidad = G.ClaveModalidad;
        this.ClavePlanEstudio = G.ClavePlanEstudio;
        this.ClaveInscripcion = G.ClaveInscripcion;
        this.ClaveMateria = G.ClaveMateria;
        this.Grupo = G.Grupo;
        this.ClaveCarrera = G.ClaveCarrera;
        this.ClaveEmpleado = G.ClaveEmpleado;
        this.Paquete = G.Paquete;
        this.NumeroFase = G.NumeroFase;
        this.GradoAcademico = G.GradoAcademico;
        this.Modalidad = G.Modalidad;
        this.PlanEstudio = G.PlanEstudio;
        this.Materia = G.Materia;
        this.Carrera = G.Carrera;
        this.TipoInscripcion = G.TipoInscripcion;
        this.TipoOferta = G.TipoOferta;
        this.UtilizaNexus = G.UtilizaNexus;
        this.CursoCompartido = G.CursoCompartido || false;
        this.Curso = G.Curso;
        this.EnConflicto = G.EnConflicto;
        this.Estado = G.Estado;
        this.GCarrera = G.Carrera;
        this.CursoCompartidoIndicador = G.CursoCompartidoIndicador || 0;
        this.MateriaEquivalente = G.MateriaEquivalente;
        this.VinculoGrupoSIASEEquivalente = new VinculoGrupoSIASEEquivalente(G.VinculoGrupoSIASEEquivalente); //this.MateriaEquivalente ? new VinculoGrupoSIASEEquivalente(G.VinculoGrupoSIASEEquivalente) : null;
        this.KeyEquivalente = Object.values(this.VinculoGrupoSIASEEquivalente).join('');
    }
    Object.defineProperty(GrupoSIASE.prototype, "GCarrera", {
        get: function () {
            return this._GCarrera;
        },
        set: function (C) {
            this._GCarrera = this.CarreraText(C);
        },
        enumerable: true,
        configurable: true
    });
    GrupoSIASE.prototype.CarreraText = function (C) {
        return (this.Carrera === '' || this.ClaveCarrera === '00') ? 'No Disponible' : this.Carrera;
    };
    return GrupoSIASE;
}());

var VinculoGrupoSIASEEquivalente = /** @class */ (function () {
    function VinculoGrupoSIASEEquivalente(data) {
        data = data ? data : {};
        this.ClaveNivelAcademicoEquivalente = data.ClaveNivelAcademicoEquivalente;
        this.ClaveGradoAcademicoEquivalente = data.ClaveGradoAcademicoEquivalente;
        this.ClaveModalidadEquivalente = data.ClaveModalidadEquivalente;
        this.ClavePlanEstudioEquivalente = data.ClavePlanEstudioEquivalente;
        this.ClaveMateriaEquivalente = data.ClaveMateriaEquivalente;
        this.NumeroFaseEquivalente = data.NumeroFaseEquivalente;
        this.GrupoEquivalente = data.GrupoEquivalente;
        this.PaqueteEquivalente = data.PaqueteEquivalente;
    }
    return VinculoGrupoSIASEEquivalente;
}());



/***/ }),

/***/ "./src/app/models/SIASE/PeriodoEscolar.ts":
/*!************************************************!*\
  !*** ./src/app/models/SIASE/PeriodoEscolar.ts ***!
  \************************************************/
/*! exports provided: PeriodoEscolar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodoEscolar", function() { return PeriodoEscolar; });
var PeriodoEscolar = /** @class */ (function () {
    function PeriodoEscolar(PE) {
        if (PE) {
            this.IdPeriodoEscolar = PE.IdPeriodoEscolar;
            this.ClaveTipoPeriodo = PE.ClaveTipoPeriodo;
            this.ClavePeriodo = PE.ClavePeriodo;
            this.Descripcion = PE.Descripcion;
            this.FechaInicioOficial = new Date(PE.FechaInicioOficial);
            this.FechaTerminacionOficial = new Date(PE.FechaTerminacionOficial);
            this.Activo = PE.Activo;
        }
    }
    return PeriodoEscolar;
}());



/***/ }),

/***/ "./src/app/models/SIASE/ProfesorSIASE.ts":
/*!***********************************************!*\
  !*** ./src/app/models/SIASE/ProfesorSIASE.ts ***!
  \***********************************************/
/*! exports provided: ProfesorSIASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfesorSIASE", function() { return ProfesorSIASE; });
var ProfesorSIASE = /** @class */ (function () {
    function ProfesorSIASE(P) {
        this.IdProfesor = P.IdProfesor;
        this.ClaveEmpleado = P.ClaveEmpleado;
        this.Nombre = P.Nombre;
        this.ApellidoPaterno = P.ApellidoPaterno;
        this.ApellidoMaterno = P.ApellidoMaterno;
        this.CURP = P.CURP;
        this.Correo = P.Correo;
    }
    ProfesorSIASE.prototype.NombreCompleto = function (Formato) {
        switch (Formato) {
            case 'NPM': return this.Nombre + ' ' + this.ApellidoPaterno + ' ' + this.ApellidoMaterno;
            case 'PMN': return this.ApellidoPaterno + ' ' + this.ApellidoMaterno + ' ' + this.Nombre;
            case 'PN': return this.ApellidoPaterno + ' ' + this.Nombre;
            default: return this.Nombre + ' ' + this.ApellidoPaterno + ' ' + this.ApellidoMaterno;
        }
    };
    return ProfesorSIASE;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MyMaterialModule"],
            ],
            declarations: [],
            entryComponents: [],
            exports: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/LoadingComponents.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/shared/LoadingComponents.module.ts ***!
  \************************************************************/
/*! exports provided: LoadingComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponentsModule", function() { return LoadingComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_components_ui_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/ui/loading/loading.component */ "./src/app/components/ui/loading/loading.component.ts");
/* harmony import */ var src_app_components_ui_uploading_uploading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/ui/uploading/uploading.component */ "./src/app/components/ui/uploading/uploading.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingComponentsModule = /** @class */ (function () {
    function LoadingComponentsModule() {
    }
    LoadingComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"]
            ],
            declarations: [
                src_app_components_ui_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                src_app_components_ui_uploading_uploading_component__WEBPACK_IMPORTED_MODULE_3__["UploadingComponent"]
            ],
            exports: [
                src_app_components_ui_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"],
                src_app_components_ui_uploading_uploading_component__WEBPACK_IMPORTED_MODULE_3__["UploadingComponent"]
            ]
        })
    ], LoadingComponentsModule);
    return LoadingComponentsModule;
}());



/***/ }),

/***/ "./src/app/services/Desempeno/desempeno.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/Desempeno/desempeno.service.ts ***!
  \*********************************************************/
/*! exports provided: desempenoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desempenoService", function() { return desempenoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var desempenoService = /** @class */ (function () {
    function desempenoService(API) {
        this.API = API;
        this.Dominio = 'ReportesNEyM';
    }
    desempenoService.prototype.ConsultarReporteGruposAccesosAlumno = function (_ClavePeriodo, _ClaveDependencia, _ClaveUnidad, _UnidadAprendizajeId, _ClaveModalidad) {
        return this.API.POST(this.Dominio, 'ConsultarReporteGruposAccesosAlumno', {
            ClavePeriodo: _ClavePeriodo,
            ClaveDependencia: _ClaveDependencia,
            ClaveUnidad: _ClaveUnidad,
            UnidadAprendizajeId: _UnidadAprendizajeId,
            ClaveModalidad: _ClaveModalidad
        });
    };
    desempenoService.prototype.ConsultarReporteGruposAccesosProfesor = function (_ClavePeriodo, _ClaveDependencia, _ClaveUnidad, _UnidadAprendizajeId, _ClaveModalidad) {
        return this.API.POST(this.Dominio, 'ConsultarReporteGruposAccesosProfesor', {
            ClavePeriodo: _ClavePeriodo,
            ClaveDependencia: _ClaveDependencia,
            ClaveUnidad: _ClaveUnidad,
            UnidadAprendizajeId: _UnidadAprendizajeId,
            ClaveModalidad: _ClaveModalidad
        });
    };
    desempenoService.prototype.ConsultarReporteNEyMSeguimientoExamenes = function (_ClavePeriodo, _ClaveDependencia, _ClaveUnidad, _UnidadAprendizajeId, _ClaveModalidad, _Pagina, _Paginacion) {
        return this.API.POST(this.Dominio, 'ConsultarReporteNEyMSeguimientoExamenes', {
            ClavePeriodo: _ClavePeriodo,
            ClaveDependencia: _ClaveDependencia,
            ClaveUnidad: _ClaveUnidad,
            UnidadAprendizajeId: _UnidadAprendizajeId,
            ClaveModalidad: _ClaveModalidad,
            Pagina: _Pagina,
            Paginacion: _Paginacion
        });
    };
    desempenoService.prototype.ConsultarReporteRubricaCompetenciasForosAlumno = function (_ClavePeriodo, _ClaveDependencia, _ClaveUnidad, _UnidadAprendizajeId, _ClaveModalidad, _Pagina, _Paginacion) {
        return this.API.POST(this.Dominio, 'ConsultarReporteRubricaCompetenciasForosAlumno', {
            ClavePeriodo: _ClavePeriodo,
            ClaveDependencia: _ClaveDependencia,
            ClaveUnidad: _ClaveUnidad,
            UnidadAprendizajeId: _UnidadAprendizajeId,
            ClaveModalidad: _ClaveModalidad,
            Pagina: _Pagina,
            Paginacion: _Paginacion
        });
    };
    desempenoService.prototype.ConsultarReporteRubricaCompetenciasForosProfesor = function (_ClavePeriodo, _ClaveDependencia, _ClaveUnidad, _UnidadAprendizajeId, _ClaveModalidad, _Pagina, _Paginacion) {
        return this.API.POST(this.Dominio, 'ConsultarReporteRubricaCompetenciasForosProfesor', {
            ClavePeriodo: _ClavePeriodo,
            ClaveDependencia: _ClaveDependencia,
            ClaveUnidad: _ClaveUnidad,
            UnidadAprendizajeId: _UnidadAprendizajeId,
            ClaveModalidad: _ClaveModalidad,
            Pagina: _Pagina,
            Paginacion: _Paginacion
        });
    };
    desempenoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"]])
    ], desempenoService);
    return desempenoService;
}());



/***/ }),

/***/ "./src/app/services/Mensajes/Mensajes.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/Mensajes/Mensajes.service.ts ***!
  \*******************************************************/
/*! exports provided: MensajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesService", function() { return MensajesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensajesService = /** @class */ (function () {
    function MensajesService(API) {
        this.API = API;
        this.Dominio = 'Mensaje';
    }
    Object.defineProperty(MensajesService.prototype, "Conversacion", {
        get: function () {
            return this._Conversacion;
        },
        set: function (C) {
            this._Conversacion = C;
        },
        enumerable: true,
        configurable: true
    });
    /****************************************** Conversaciones *********************************************/
    MensajesService.prototype.ActualizarConversacion = function (_Conversacion) {
        return this.API.POST(this.Dominio, "ActualizarConversacion", {
            Conversacion: _Conversacion
        });
    };
    MensajesService.prototype.ConsultarConversaciones = function (_CursoId) {
        return this.API.POST(this.Dominio, "ConsultarConversaciones", {
            CursoId: _CursoId
        });
    };
    MensajesService.prototype.ConsultarConversacion = function (_ConversacionId) {
        return this.API.POST(this.Dominio, "ConsultarConversacion", {
            ConversacionId: _ConversacionId
        });
    };
    /******************************************* Mensajes *********************************************/
    MensajesService.prototype.ActualizarMensajeConversacion = function (_Mensaje) {
        return this.API.POST(this.Dominio, "ActualizarMensajeConversacion", {
            MensajeConversacion: _Mensaje
        });
    };
    MensajesService.prototype.ConsultarConversacionMensaje = function (_ConversacionId) {
        return this.API.POST(this.Dominio, "ConsultarConversacionMensaje", {
            ConversacionId: _ConversacionId
        });
    };
    MensajesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"]])
    ], MensajesService);
    return MensajesService;
}());



/***/ }),

/***/ "./src/app/services/Scorm/Scorm.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Scorm/Scorm.service.ts ***!
  \*************************************************/
/*! exports provided: ScormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScormService", function() { return ScormService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScormService = /** @class */ (function () {
    function ScormService(http, api) {
        this.http = http;
        this.api = api;
        this.domain = 'SCORM';
        this.apiURL = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].API_URL_SCORM;
    }
    ScormService.prototype.ConsultarResultadosScorm = function (_CuentaId, _PaqueteId) {
        return this.http.post(this.apiURL + '/' + this.domain + '/ConsultarResultadosScorm', {
            CuentaId: _CuentaId,
            PaqueteId: _PaqueteId
        });
    };
    ScormService.prototype.ActualizarCalificacionScormEstudiante = function (_CursoId, _CuentaId, _PaqueteId, _Elemento) {
        return this.http.post(this.apiURL + '/' + this.domain + '/ActualizarCalificacionScormEstudiante', {
            CursoId: _CursoId,
            CuentaId: _CuentaId,
            PaqueteId: _PaqueteId,
            ElementoId: _Elemento.ElementoId,
            TipoElementoId: _Elemento.TipoElementoId
        });
    };
    ScormService.prototype.ActualizarCalificacionScormEstudianteAutogestivo = function (_CursoId, _CuentaId, _PaqueteId, _Elemento) {
        return this.http.post(this.apiURL + '/' + this.domain + '/ActualizarCalificacionScormEstudianteAutogestivo', {
            CursoId: _CursoId,
            CuentaId: _CuentaId,
            PaqueteId: _PaqueteId,
            ElementoId: _Elemento.ElementoId,
            TipoElementoId: _Elemento.TipoElementoId
        });
    };
    ScormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_3__["ApiHttpService"]])
    ], ScormService);
    return ScormService;
}());



/***/ }),

/***/ "./src/app/shared/services/avisos.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/avisos.service.ts ***!
  \***************************************************/
/*! exports provided: AvisosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosService", function() { return AvisosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AvisosService = /** @class */ (function () {
    function AvisosService(SesionSVC, http, general_service, perfil_service) {
        this.SesionSVC = SesionSVC;
        this.http = http;
        this.general_service = general_service;
        this.perfil_service = perfil_service;
        console.log(this.perfil_service.Perfil);
        console.log(this.SesionSVC.Perfil);
        this.HEADER = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("Token", this.SesionSVC.Token)
                .append("AreaAcademicaId", this.SesionSVC.Perfil.AreaAcademica.AreaAcademicaId.toString())
                .append("RolId", this.SesionSVC.Perfil.Rol.RolId.toString())
        };
    }
    AvisosService.prototype.updateHeader = function () {
        this.HEADER = this.general_service.getUpdateHeader();
    };
    /****************************************** Aviso *********************************************/
    AvisosService.prototype.getAvisos = function (_CursoId, _Asignados) {
        var _this = this;
        var data = {
            CursoId: _CursoId,
            Asignados: _Asignados
        };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/ConsultarAvisos", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.getAviso = function (_AvisoId) {
        var _this = this;
        var data = { AvisoId: _AvisoId };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/ConsultarAviso", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.UpdateAvisoCurso = function (_Aviso) {
        var _this = this;
        var data = { Aviso: _Aviso };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/ActualizarAvisoCurso", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.UpdateAvisoAreaAcademica = function (_Aviso) {
        var _this = this;
        var data = { Aviso: _Aviso };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/ActualizarAvisoAreaAcademica", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.DeleteAvisoCurso = function (_AvisoId) {
        var _this = this;
        var data = { AvisoId: _AvisoId };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/EliminarAvisoCurso", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.DeleteAvisoAreaAcademica = function (_AvisoId) {
        var _this = this;
        var data = { AvisoId: _AvisoId };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/EliminarAvisoAreaAcademica", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService.prototype.CopiarAviso = function (_Aviso, _CursoId, _AvisoOrigenId) {
        var _this = this;
        var data = {
            Aviso: _Aviso,
            CursoId: _CursoId,
            AvisoOrigenId: _AvisoOrigenId
        };
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Aviso/Copiaraviso", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    AvisosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"],
            _perfil_service__WEBPACK_IMPORTED_MODULE_5__["PerfilService"]])
    ], AvisosService);
    return AvisosService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map

}
/*
     FILE ARCHIVED ON 03:40:32 Jun 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:39 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.753
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.018
  esindex: 0.016
  cdx.remote: 6.475
  LoadShardBlock: 456.965 (3)
  PetaboxLoader3.datanode: 548.337 (5)
  PetaboxLoader3.resolve: 255.721 (4)
  load_resource: 400.079 (2)
*/