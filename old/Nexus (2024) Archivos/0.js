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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/components/auth/clave-asignar/clave-asignar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/auth/clave-asignar/clave-asignar.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/clave-asignar/clave-asignar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/auth/clave-asignar/clave-asignar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nx-login nx-reset\">\r\n    <div class=\"background\"></div>\r\n    <div class=\"contenido\">\r\n      <div class=\"row row-content\">\r\n        <div class=\"col-md-6\" align=\"center\">\r\n          <div class=\"content-left\">\r\n\r\n            <div class=\"text-center\">\r\n              <img class=\"logo-center\" src=\"assets/img/logos/nx-logo.png\" />\r\n            </div>\r\n\r\n            <div *ngIf=\"tokenValido == false\">\r\n                <div class=\"text-center p-4 font-20 color-3\">\r\n                    <div class=\"my-4\">La URL no es válida</div>\r\n                    <a routerLink=\"/Login\" color=\"primary\"><i class=\"fa fa-arrow-left mr-2\"></i>Iniciar sesión</a>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"tokenValido == true\" class=\"animated fadeIn\">\r\n                <div class=\"mt-4 mb-4 animated fadeIn\">\r\n                  <div class=\"pl-3 pr-3 text-justify font-size-13\">\r\n                    La contraseña <span class=\"bold-800\">no debe contener su nombre o apellidos ni ser igual a su\r\n                    usuario de acceso</span>. Además, debe contar con las siguientes características:\r\n                    \r\n                    <ul class=\"mt-2 mb-0 pr-4 success-list\">\r\n                      <li [class.success-element]=\"contraseniaLongitudValida\">\r\n                        <i class=\"fa fa-check\"></i> La longitud debe ser entre 8 y 16 caracteres\r\n                      </li>\r\n                      <li [class.success-element]=\"contraseniaLetrasValida\">\r\n                        <i class=\"fa fa-check\"></i> Incluir al menos una letra mayúscula y una minúscula\r\n                      </li>\r\n                      <li [class.success-element]=\"contraseniaNumerosValida\">\r\n                        <i class=\"fa fa-check\"></i> Incluir al menos un número\r\n                      </li>\r\n                      <li [class.success-element]=\"contraseniaSinEspaciosValida\">\r\n                        <i class=\"fa fa-check\"></i> No debe contener espacios en blanco dentro de la contraseña\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n\r\n                <form class=\"text-center p-20 col-11 col-xs-10 col-sm-8 col-md-10 col-lg-8\"\r\n                        (ngSubmit)=\"onSubmitCrearAcceso(f)\" name=\"form-recovery\" #f=\"ngForm\" novalidate>\r\n\r\n                    <mat-form-field class=\"form-group\">\r\n                        <input matInput [type]=\"mostrarClave1 ? 'text' : 'password'\" placeholder=\"Nueva contraseña\"\r\n                                [(ngModel)]=\"reset.clave1\" name=\"clave1\" #clave1=\"ngModel\" \r\n                                required minlength=\"8\" maxlength=\"16\" \r\n                                pattern=\"(?=\\S*[a-z])(?=\\S*[A-Z])(?=\\S*\\d)[\\S]+\"\r\n                                (focus)=\"validarContrasenia($event.target.value)\" (input)=\"validarContrasenia($event.target.value)\">\r\n                        <button *ngIf=\"reset.clave1 && reset.clave1.length > 0\" matSuffix mat-icon-button\r\n                                type=\"button\" (click)=\"mostrarClave1 = !mostrarClave1\">\r\n                            <i *ngIf=\"!mostrarClave1\" class=\"fa fa-eye\"></i>\r\n                            <i *ngIf=\"mostrarClave1\" class=\"fa fa-eye-slash\"></i>\r\n                        </button>\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"form-group mt-2\">\r\n                        <input matInput [type]=\"mostrarClave2 ? 'text' : 'password'\" placeholder=\"Confirmar nueva contraseña\"\r\n                                [(ngModel)]=\"reset.clave2\" name=\"clave2\" #clave2=\"ngModel\" required pattern=\"{{clave1CodificadaConfirmacionContrasenia}}\">\r\n                        <button *ngIf=\"reset.clave2 && reset.clave2.length > 0\" matSuffix mat-icon-button\r\n                                type=\"button\" (click)=\"mostrarClave2 = !mostrarClave2\">\r\n                            <i *ngIf=\"!mostrarClave2\" class=\"fa fa-eye\"></i>\r\n                            <i *ngIf=\"mostrarClave2\" class=\"fa fa-eye-slash\"></i>\r\n                        </button>\r\n\r\n                        <mat-error *ngIf=\"clave2.invalid\">\r\n                            <i class=\"fa fa-exclamation-circle\"></i>\r\n                            <span *ngIf=\"clave2.errors.required\"> Campo requerido</span>\r\n                            <span *ngIf=\"clave2.errors.pattern\"> Contraseñas no coinciden</span>\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n\r\n                    <!--<a class=\"nx-link font-size-12 text-left d-block mb-15\" routerLink=\"../Login\"><i class=\"fa fa-arrow-left\"></i> Iniciar Sesión</a>-->\r\n                    <button [disabled]=\"!contraseniaValida || clave2.invalid\"\r\n                            class=\"w-100 mt-4\" type=\"submit\" mat-raised-button color=\"primary\">\r\n                      GUARDAR\r\n                    </button>\r\n                </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 no-padding d-none d-md-inline p-0\">\r\n          <div class=\"content-right text-center\">\r\n            <div class=\"background-logo\"></div>\r\n            <div class=\"content text-center\" >\r\n              <img class=\"logo\" src=\"assets/img/logos/uanl/uanl-logo-h-color.png\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/clave-asignar/clave-asignar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/auth/clave-asignar/clave-asignar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClaveAsignarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaveAsignarComponent", function() { return ClaveAsignarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
/* harmony import */ var src_app_services_Persona_Persona_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Persona/Persona.service */ "./src/app/services/Persona/Persona.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClaveAsignarComponent = /** @class */ (function () {
    function ClaveAsignarComponent(SesionSVC, PersonaSVC, snackbar, router) {
        this.SesionSVC = SesionSVC;
        this.PersonaSVC = PersonaSVC;
        this.snackbar = snackbar;
        this.router = router;
        this.reset = {
            clave1: null,
            clave2: null
        };
        this.clave1CodificadaConfirmacionContrasenia = '';
        this.mostrarClave1 = false;
        this.mostrarClave2 = false;
        this.contraseniaValida = false;
        this.contraseniaLongitudValida = false;
        this.contraseniaLetrasValida = false;
        this.contraseniaNumerosValida = false;
        this.contraseniaSinEspaciosValida = false;
    }
    ClaveAsignarComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    ClaveAsignarComponent.prototype.onSubmitReset = function (form) {
        console.log(form);
    };
    ClaveAsignarComponent.prototype.getToken = function () {
        if ((this.router.url).includes('?') && (this.router.url).includes('SolicitudId')) {
            var tokenCodificado = this.router.url.split("?")[1].split("SolicitudId=")[1];
            var tokenDecodificado = decodeURIComponent(tokenCodificado);
            this.token = tokenDecodificado.replace(/[\s]/g, '+');
            this.validarToken();
        }
        else {
            this.tokenValido = false;
        }
    };
    ClaveAsignarComponent.prototype.validarToken = function () {
        var _this = this;
        this.PersonaSVC.ValidarSolicitudConfirmacionCorreo(this.token).subscribe(function (res) {
            console.log(res);
            if (!res.Error) {
                _this.tokenValido = res.SolicitudValida;
            }
            else {
                _this.tokenValido = false;
            }
        });
    };
    ClaveAsignarComponent.prototype.validarContrasenia = function (contrasenia) {
        var caracteristicasContraseniaCumplidas = true;
        if (contrasenia.length >= 8 && contrasenia.length <= 16) {
            this.contraseniaLongitudValida = true;
        }
        else {
            this.contraseniaLongitudValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/[a-z]/.test(contrasenia) && /[A-Z]/.test(contrasenia)) {
            this.contraseniaLetrasValida = true;
        }
        else {
            this.contraseniaLetrasValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/\d/.test(contrasenia)) {
            this.contraseniaNumerosValida = true;
        }
        else {
            this.contraseniaNumerosValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/^\S*$/.test(contrasenia) && contrasenia.length > 0) {
            this.contraseniaSinEspaciosValida = true;
        }
        else {
            this.contraseniaSinEspaciosValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        this.contraseniaValida = caracteristicasContraseniaCumplidas;
        this.clave1CodificadaConfirmacionContrasenia = contrasenia.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    ClaveAsignarComponent.prototype.onSubmitCrearAcceso = function (form) {
        var _this = this;
        console.log(form);
        if (form.valid) {
            var data = {
                token: this.token,
                contrasena: this.reset["clave1"]
            };
            console.log(data);
            this.PersonaSVC.CrearAcceso(data).subscribe(function (res) {
                console.log(res);
                if (!('Code' in res)) {
                    // Success
                    _this.SesionSVC.RemoveSesionStorage();
                    _this.snackbar.success('Se ha asignado la contraseña con éxito', 5000);
                    _this.router.navigate(['Login']);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ClaveAsignarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clave-asignar',
            template: __webpack_require__(/*! ./clave-asignar.component.html */ "./src/app/components/auth/clave-asignar/clave-asignar.component.html"),
            styles: [__webpack_require__(/*! ./clave-asignar.component.css */ "./src/app/components/auth/clave-asignar/clave-asignar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__["SesionService"],
            src_app_services_Persona_Persona_service__WEBPACK_IMPORTED_MODULE_3__["PersonaService"],
            src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClaveAsignarComponent);
    return ClaveAsignarComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/auth/clave-recuperar/clave-recuperar.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/clave-recuperar/clave-recuperar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nx-login nx-reset\">\r\n  <div class=\"background\"></div>\r\n  <div class=\"contenido\">\r\n    <div class=\"row row-content\">\r\n      <div class=\"col-md-6\" align=\"center\">\r\n        <div class=\"content-left\">\r\n\r\n          <div class=\"text-center\">\r\n            <img class=\"logo-center\" src=\"assets/img/logos/nx-logo.png\" />\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"!validateURL\">\r\n            <div class=\"text-center p-4 font-20 color-3\">\r\n              <div class=\"my-4\">La URL no es válida</div>\r\n              <a routerLink=\"/Login\" color=\"primary\"><i class=\"fa fa-arrow-left mr-2\"></i>Iniciar Sesión</a>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"validateURL\">\r\n\r\n            <div *ngIf=\"tokenValido == false\" class=\"animated fadeIn p-4 text-center color-3 font-20\">\r\n              <div class=\"my-4\">La solicitud ha expirado</div>\r\n              <a routerLink=\"/Login\" color=\"primary\"><i class=\"fa fa-arrow-left mr-2\"></i>Iniciar Sesión</a>\r\n            </div>\r\n\r\n            <div *ngIf=\"tokenValido == true\" class=\"animated fadeIn\">\r\n              <div class=\"mt-4 mb-4 animated fadeIn\">\r\n                <div class=\"pl-3 pr-3 text-justify font-size-13\">\r\n                  La contraseña <span class=\"bold-800\">no debe contener su nombre o apellidos ni ser igual a su\r\n                  usuario de acceso</span>. Además, debe contar con las siguientes características:\r\n\r\n                  <ul class=\"mt-2 mb-0 pr-4 success-list\">\r\n                    <li [class.success-element]=\"contraseniaLongitudValida\">\r\n                      <i class=\"fa fa-check\"></i> La longitud debe ser entre 9 y 16 caracteres\r\n                    </li>\r\n                    <li [class.success-element]=\"contraseniaLetrasValida\">\r\n                      <i class=\"fa fa-check\"></i> Incluir al menos una letra mayúscula y una minúscula\r\n                    </li>\r\n                    <li [class.success-element]=\"contraseniaNumerosValida\">\r\n                      <i class=\"fa fa-check\"></i> Incluir al menos un número\r\n                    </li>\r\n                    <li [class.success-element]=\"contraseniaSinEspaciosValida\">\r\n                      <i class=\"fa fa-check\"></i> No debe contener espacios en blanco dentro de la contraseña\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n\r\n              <form class=\"text-center p-20 col-11 col-xs-10 col-sm-8 col-md-10 col-lg-8\"\r\n                    (ngSubmit)=\"onSubmitChangePassword(f)\" name=\"form-recovery\" #f=\"ngForm\" novalidate>\r\n\r\n                <mat-form-field class=\"form-group\">\r\n                    <input matInput [type]=\"mostrarClave1 ? 'text' : 'password'\"  placeholder=\"Nueva contraseña\"\r\n                            [(ngModel)]=\"reset.clave1\" name=\"clave1\" #clave1=\"ngModel\"\r\n                            required minlength=\"9\" maxlength=\"16\"\r\n                            pattern=\"(?=\\S*[a-z])(?=\\S*[A-Z])(?=\\S*\\d)[\\S]+\"\r\n                            (focus)=\"validarContrasenia($event.target.value)\" (input)=\"validarContrasenia($event.target.value)\">\r\n                    <button *ngIf=\"reset.clave1 && reset.clave1.length > 0\" matSuffix mat-icon-button\r\n                            type=\"button\" (click)=\"mostrarClave1 = !mostrarClave1\">\r\n                        <i *ngIf=\"!mostrarClave1\" class=\"fa fa-eye\"></i>\r\n                        <i *ngIf=\"mostrarClave1\" class=\"fa fa-eye-slash\"></i>\r\n                    </button>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"form-group mt-2\">\r\n                  <input matInput [type]=\"mostrarClave2 ? 'text' : 'password'\" placeholder=\"Confirmar nueva contraseña\"\r\n                          [(ngModel)]=\"reset.clave2\" name=\"clave2\" #clave2=\"ngModel\" required pattern=\"{{clave1CodificadaConfirmacionContrasenia}}\">\r\n                  <button *ngIf=\"reset.clave2 && reset.clave2.length > 0\" matSuffix mat-icon-button\r\n                          type=\"button\" (click)=\"mostrarClave2 = !mostrarClave2\">\r\n                      <i *ngIf=\"!mostrarClave2\" class=\"fa fa-eye\"></i>\r\n                      <i *ngIf=\"mostrarClave2\" class=\"fa fa-eye-slash\"></i>\r\n                  </button>\r\n\r\n                  <mat-error *ngIf=\"clave2.invalid\">\r\n                      <i class=\"fa fa-exclamation-circle\"></i>\r\n                      <span *ngIf=\"clave2.errors.required\"> Campo requerido</span>\r\n                      <span *ngIf=\"clave2.errors.pattern\"> Contraseñas no coinciden</span>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button [disabled]=\"!contraseniaValida || clave2.invalid\"\r\n                        class=\"w-100 mt-4\" type=\"submit\" mat-raised-button color=\"primary\">\r\n                    GUARDAR\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 no-padding d-none d-md-inline p-0\">\r\n        <div class=\"content-right text-center\">\r\n          <div class=\"background-logo\"></div>\r\n          <div class=\"content text-center\" >\r\n            <img class=\"logo\" src=\"assets/img/logos/uanl/uanl-logo-h-color.png\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #dialogNuevaSesion let-dialogRef=\"dialogRef\">\r\n  <div>\r\n      <h1 mat-dialog-title>INICIO DE SESION</h1>\r\n      <div mat-dialog-content>\r\n          <!--<div>{{dialogInfo.Message}}</div>-->\r\n      </div>\r\n      <mat-dialog-actions>\r\n      <div class=\"w-100\" align=\"right\">\r\n          <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n          <button mat-raised-button color=\"primary\">Aceptar</button>\r\n      </div>\r\n      </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/clave-recuperar/clave-recuperar.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClaveRecuperarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaveRecuperarComponent", function() { return ClaveRecuperarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClaveRecuperarComponent = /** @class */ (function () {
    function ClaveRecuperarComponent(SesionSVC, SeguridadSVC, snackbar, location, router) {
        this.SesionSVC = SesionSVC;
        this.SeguridadSVC = SeguridadSVC;
        this.snackbar = snackbar;
        this.location = location;
        this.router = router;
        this.reset = {
            clave1: null,
            clave2: null
        };
        this.clave1CodificadaConfirmacionContrasenia = '';
        this.mostrarClave1 = false;
        this.mostrarClave2 = false;
        this.contraseniaValida = false;
        this.contraseniaLongitudValida = false;
        this.contraseniaLetrasValida = false;
        this.contraseniaNumerosValida = false;
        this.contraseniaSinEspaciosValida = false;
    }
    ClaveRecuperarComponent.prototype.ngOnInit = function () {
        this.getToken();
    };
    ClaveRecuperarComponent.prototype.onSubmitReset = function (form) {
        console.log(form);
    };
    ClaveRecuperarComponent.prototype.getToken = function () {
        if ((this.router.url).includes('?') && (this.router.url).includes('SolicitudId')) {
            this.validateURL = true;
            var tmp = this.router.url.split("?")[1].split("SolicitudId=")[1];
            var token = decodeURIComponent(tmp);
            this.token = token.replace(/[\s]/g, '+');
            this.ValidarToken();
        }
        else {
            this.validateURL = false;
        }
    };
    ClaveRecuperarComponent.prototype.onSubmitChangePassword = function (form) {
        var _this = this;
        console.log(form);
        if (form.valid) {
            var data = {
                token: this.token,
                password: this.reset["clave1"]
            };
            console.log(data);
            this.SeguridadSVC.CambiarContrasena(data).subscribe(function (res) {
                console.log(res);
                if (!('Code' in res)) {
                    // Success
                    _this.SesionSVC.RemoveSesionStorage();
                    _this.snackbar.success('Se ha cambiado la contraseña con éxito', 5000);
                    _this.router.navigate(['Login']);
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    ClaveRecuperarComponent.prototype.ValidarToken = function () {
        var _this = this;
        this.SeguridadSVC.ValidarSolicitudCambioContrasena(this.token).subscribe(function (res) {
            console.log(res);
            if (!res.Error) {
                _this.tokenValido = res.SolicitudValida;
            }
            else {
                _this.validateURL = false;
            }
        });
    };
    ClaveRecuperarComponent.prototype.validarContrasenia = function (contrasenia) {
        var caracteristicasContraseniaCumplidas = true;
        if (contrasenia.length >= 9 && contrasenia.length <= 16) {
            this.contraseniaLongitudValida = true;
        }
        else {
            this.contraseniaLongitudValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/[a-z]/.test(contrasenia) && /[A-Z]/.test(contrasenia)) {
            this.contraseniaLetrasValida = true;
        }
        else {
            this.contraseniaLetrasValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/\d/.test(contrasenia)) {
            this.contraseniaNumerosValida = true;
        }
        else {
            this.contraseniaNumerosValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        if (/^\S*$/.test(contrasenia) && contrasenia.length > 0) {
            this.contraseniaSinEspaciosValida = true;
        }
        else {
            this.contraseniaSinEspaciosValida = false;
            caracteristicasContraseniaCumplidas = false;
        }
        this.contraseniaValida = caracteristicasContraseniaCumplidas;
        this.clave1CodificadaConfirmacionContrasenia = contrasenia.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    ClaveRecuperarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clave-recuperar',
            template: __webpack_require__(/*! ./clave-recuperar.component.html */ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.html"),
            styles: [__webpack_require__(/*! ./clave-recuperar.component.css */ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"],
            src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_4__["SeguridadService"],
            src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClaveRecuperarComponent);
    return ClaveRecuperarComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login-siase/login-siase.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/auth/login-siase/login-siase.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/login-siase/login-siase.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/auth/login-siase/login-siase.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mt-4\">\r\n  <div class=\"text-center p-4 mt-4 animated fadeIn\">\r\n    <img class=\"mb-4\" src=\"assets/img/logos/nx-logo.png\" height=\"100px\"/>\r\n    <div *ngIf=\"!Error\"><i class=\"fad fa-spinner-third fa-spin font-size-40 primary\"></i></div>\r\n    <div *ngIf=\"!Error\" class=\"mt-4\">Validando sesión en servicios en línea.</div>\r\n  </div>\r\n  <div *ngIf=\"Error\" class=\"mt-4\">\r\n    <div class=\"text-center\">\r\n        <div class=\"bold danger font-size-30\">ERROR {{Error.Id}}</div>\r\n        <div class=\"bold-500 font-size-20\">{{Error.Message}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/login-siase/login-siase.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/auth/login-siase/login-siase.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginSiaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSiaseComponent", function() { return LoginSiaseComponent; });
/* harmony import */ var src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Utils/Loading/Loading.service */ "./src/app/services/Utils/Loading/Loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginSiaseComponent = /** @class */ (function () {
    function LoginSiaseComponent(SeguridadSVC, SesionSVC, LoadingSVC, snackbar, router) {
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
        this.LoadingSVC = LoadingSVC;
        this.snackbar = snackbar;
        this.router = router;
        if (this.hasTokenId) {
            console.log('Sesion Type 1');
            this.getToken();
        }
        else {
            console.log('Sesion Type 2');
            this.ObtenerParametros();
        }
    }
    LoginSiaseComponent.prototype.ngOnInit = function () {
        //let Token = this.getToken();
        console.log(this.Token);
        this.LoginSIASE();
    };
    LoginSiaseComponent.prototype.LoginSIASE = function () {
        var _this = this;
        console.log('TOKEN:', this.Token);
        console.log('Usuario:', this.Usuario);
        console.log('NombreUsuario:', this.NombreUsuario);
        console.log('TipoClave:', this.TipoClave);
        if (this.Token) {
            this.SeguridadSVC.IniciarSesionSIASE(this.Token, this.Usuario, this.NombreUsuario, this.TipoClave).subscribe(function (res) {
                console.log(res);
                if (!res.Error) {
                    //this.SesionSVC.ActualizarPerfil = res;
                    _this.SesionSVC.SesionStorage = null;
                    _this.SesionSVC.UpdateSesion(res.Sesion);
                    _this.router.navigate(['Iniciando']);
                    //this.ObtenerPerfil(res.Sesion.Token);
                    //this.router.navigate([]);
                }
                else {
                    _this.Error = res;
                }
            }, function (error) {
                console.log(error);
                _this.Error = {
                    Id: '0',
                    Message: 'Ocurrió un problema al iniciar sesión',
                    error: error
                };
            });
        }
        else {
            this.Error = {
                Id: '1',
                Message: 'No se encontro la SESION.',
                error: null
            };
        }
    };
    LoginSiaseComponent.prototype.ObtenerParametros = function () {
        this.Token = null;
        this.Usuario = null;
        this.NombreUsuario = null;
        this.TipoClave = null;
        var elementosRuta = this.router.url.split("?");
        if (elementosRuta.length <= 1) {
            return;
        }
        var parametros = elementosRuta[1].split("&");
        for (var i = 0; i < parametros.length; i++) {
            var elementosParametro = parametros[i].split("=");
            var nombreParametro = elementosParametro[0];
            var valorParametro = elementosParametro[1];
            var tokenDecodificado = void 0;
            if (elementosParametro.length <= 1) {
                continue;
            }
            switch (nombreParametro) {
                case "Ctrl":
                    this.getToken();
                    break;
                case "Usu":
                    this.Usuario = valorParametro;
                    break;
                case "HTMLUsuario":
                    this.NombreUsuario = valorParametro;
                    break;
                case "HTMLTipCve":
                    this.TipoClave = valorParametro;
                    break;
            }
        }
    };
    Object.defineProperty(LoginSiaseComponent.prototype, "hasTokenId", {
        get: function () {
            return this.router.url.includes('TokenId') ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    LoginSiaseComponent.prototype.getToken = function () {
        var _URL = this.router.url;
        var _TokenURL = this.hasTokenId ? _URL.split("TokenId=")[1] : (_URL.split("Ctrl=")[1]).split('&')[0];
        if (!_TokenURL) {
            return null;
        }
        var _Token = decodeURIComponent(_TokenURL);
        _Token = _Token.replace(/[\s]/g, '+');
        this.Token = _Token;
        return _Token;
    };
    LoginSiaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-siase',
            template: __webpack_require__(/*! ./login-siase.component.html */ "./src/app/components/auth/login-siase/login-siase.component.html"),
            styles: [__webpack_require__(/*! ./login-siase.component.css */ "./src/app/components/auth/login-siase/login-siase.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__["SeguridadService"],
            src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__["SesionService"],
            src_app_services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_0__["SnackBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginSiaseComponent);
    return LoginSiaseComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nx-login\">\r\n  <div class=\"background\"></div>\r\n  <div class=\"contenido\">\r\n    <div class=\"row row-content\">\r\n      <div class=\"col-md-6\" align=\"center\">\r\n        <div class=\"content-left\">\r\n          <div class=\"text-center\">\r\n            <img class=\"logo-center\" src=\"assets/img/logos/nx-logo.png\" />\r\n          </div>\r\n          <div *ngIf=\"viewSection==1\" class=\"animated fadeIn\">\r\n            <form class=\"example-form p-20 col-xs-10 col-sm-8 col-md-12 col-lg-10 col-xl-7\" (ngSubmit)=\"onSubmitLogin()\" name=\"form-login\">\r\n              <mat-form-field class=\"form-group\" hideRequiredMarker>\r\n                <input matInput type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"DatosLogin.usuario\" name=\"usuario\" required>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"form-group\" hideRequiredMarker>\r\n                <input matInput [type]=\"showPass ? 'text' : 'password'\" placeholder=\"Contraseña\" [(ngModel)]=\"DatosLogin.password\" name=\"password\" required>\r\n                <button *ngIf=\"DatosLogin.password && DatosLogin.password.length > 0\" matSuffix mat-icon-button type=\"button\" (click)=\"showPass = !showPass\">\r\n                  <i *ngIf=\"!showPass\" class=\"fa fa-eye\"></i>\r\n                  <i *ngIf=\"showPass\" class=\"fa fa-eye-slash\"></i>\r\n                </button>\r\n              </mat-form-field>\r\n              <a class=\"nx-link font-size-15 text-right d-block mb-15\" (click)=\"changeSection(2)\">¿Olvidaste tu contraseña?</a>\r\n              <!--<div><a class=\"nx-link\" routerLink=\"/administrador/usuarios\">ACCESO DIRECTO</a></div>\r\n              <div><a (click)=\"delete_sesion()\">Eliminar Sesion Emergencia</a></div>-->\r\n              <button class=\"w-100\" type=\"submit\" mat-raised-button color=\"primary\">INGRESAR</button>\r\n\r\n            </form>\r\n            <!--<button (click)=\"cerrarSesion()\">Cerrar Sesion</button>-->\r\n          </div>\r\n          <div *ngIf=\"viewSection==2\" class=\"animated fadeIn\">\r\n              <form class=\"p-20 col-11 col-xs-10 col-sm-8 col-md-10 col-lg-8 text-center\"\r\n                    (ngSubmit)=\"onSubmitRecuperarPassword(f)\" name=\"form-recovery\" #f=\"ngForm\" novalidate>\r\n\r\n                <!-- Nombre Usuario -->\r\n                <mat-form-field class=\"form-group\" hideRequiredMarker>\r\n                  <input  matInput type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"DatosRecuperacion.NombreUsuario\" name=\"NombreUsuario\" required>\r\n                </mat-form-field>\r\n\r\n                <!-- Correo Electronico-->\r\n                <mat-form-field class=\"form-group\" hideRequiredMarker>\r\n                  <input matInput email placeholder=\"Correo Electrónico\" [(ngModel)]=\"DatosRecuperacion.Correo\" name=\"CorreoRecuperacion\" required >\r\n                  <!--<mat-error *ngIf=\"(f.submitted || f.controls.email.touched) && f.controls.email.invalid\">\r\n                    <i class=\"fa fa-exclamation-circle\"></i>&nbsp;<span>No es un formato válido</span>\r\n                  </mat-error>-->\r\n                </mat-form-field>\r\n\r\n                <a class=\"nx-link font-size-15 text-left d-block mb-15\" (click)=\"changeSection(1)\"><i class=\"fa fa-arrow-left\"></i> Iniciar Sesión</a>\r\n\r\n                <button class=\"w-100\" type=\"submit\" mat-raised-button color=\"primary\">ENVIAR SOLICITUD</button>\r\n              </form>\r\n            </div>\r\n          <div class=\"text-login animated fadeInDown col-12 col-lg-8 text-center\">\r\n            <p class=\"text font-size-13\">\r\n              Si eres estudiante de la UANL, debes ingresar a través del portal de\r\n              <a class=\"nx-link underline\" href=\"http://www.uanl.mx/enlinea\">Servicios en Línea</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 no-padding d-none d-md-inline p-0\">\r\n        <div class=\"content-right text-center\">\r\n          <div class=\"background-logo\"></div>\r\n          <div class=\"content text-center\">\r\n            <img class=\"logo\" src=\"assets/img/logos/uanl/uanl-logo-h-color.png\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #DialogSesionImperative let-dialogRef=\"dialogRef\">\r\n  <div>\r\n      <h1 mat-dialog-title>Sesión Activa</h1>\r\n      <div mat-dialog-content class=\"text-center\">\r\n        <p>Actualmente ya existe una sesión activa. ¿Deseas continuar e iniciar sesión? </p>\r\n        <div class=\"color-3 font-size-13 p-3 text-center line-height-initial\">Al presionar el botón CONTINUAR, la sesión que se encuentra activa será eliminada e iniciara una nueva sesión.</div>\r\n      </div>\r\n      <mat-dialog-actions>\r\n      <div class=\"w-100 text-right\">\r\n          <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n          <button mat-raised-button mat-dialog-close color=\"primary\" (click)=\"IniciarSesion(true)\">Continuar</button>\r\n      </div>\r\n      </mat-dialog-actions>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
/* harmony import */ var src_app_services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Utils/Loading/Loading.service */ "./src/app/services/Utils/Loading/Loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(SesionSVC, SeguridadSVC, router, snackbar, Loading, dialog) {
        this.SesionSVC = SesionSVC;
        this.SeguridadSVC = SeguridadSVC;
        this.router = router;
        this.snackbar = snackbar;
        this.Loading = Loading;
        this.dialog = dialog;
        this.DatosLogin = { usuario: null, password: null };
        this.DatosRecuperacion = { NombreUsuario: null, Correo: null };
        this.showPass = false;
        this.viewSection = 1;
        var _SesionStorage = this.SesionSVC.GetSesionStorage();
        if (_SesionStorage) {
            console.log('Sesion Existente');
        }
        else {
            console.log('Sesion no Existente');
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmitLogin = function () {
        if (!this.DatosLogin.usuario || !this.DatosLogin.password) {
            this.snackbar.OpenSnackBarError("La información proporcionada esta incompleta. Revisa los datos e intenta nuevamente", 5000);
        }
        else {
            this.IniciarSesion(false);
        }
    };
    LoginComponent.prototype.IniciarSesion = function (Imperative) {
        var _this = this;
        console.log(this.DatosLogin);
        this.Loading.ShowBackdrop();
        this.SeguridadSVC.IniciarSesion(this.DatosLogin, Imperative).subscribe(function (res) {
            _this.Loading.HideBackdrop();
            if (!res.Error) {
                _this.SesionSVC.SesionStorage = null;
                _this.SesionSVC.UpdateSesion(res.Sesion);
                _this.router.navigate(['Iniciando']);
                //this.ObtenerPerfil(res.Sesion.Token);
            }
            else {
                if (res.Code === 2003) {
                    _this.OpenDialog(_this.DialogSesionImperative);
                }
            }
        }, function (error) { return _this.Loading.ShowBackdrop(); });
    };
    LoginComponent.prototype.changeSection = function (opt) {
        this.viewSection = opt;
        //this.DatosLogin = ;
        //this.DatosRecuperacion = [];
    };
    LoginComponent.prototype.onSubmitRecuperarPassword = function (form) {
        console.log(form);
        if (form.valid) {
            this.SolicitarRecuperacionPassword();
        }
        else {
            if (!this.DatosRecuperacion["NombreUsuario"] || !this.DatosRecuperacion["Correo"]) {
                this.snackbar.error("La información proporcionada esta incompleta.", 3000);
            }
            else {
                this.snackbar.error("Revisa los campos marcados e intenta nuevamente.", 3000);
            }
        }
    };
    LoginComponent.prototype.OpenDialog = function (Dialog) {
        this.dialogRef = this.dialog.open(Dialog, { disableClose: true });
    };
    LoginComponent.prototype.SolicitarRecuperacionPassword = function () {
        var _this = this;
        this.Loading.ShowBackdrop();
        this.DatosRecuperacion['OrganizacionId'] = 1;
        this.SeguridadSVC.SolicitarCambioContrasena(this.DatosRecuperacion).subscribe(function (result) {
            _this.Loading.HideBackdrop();
            if (!result.Code) {
                _this.snackbar.success('Se ha enviado un enlace a tu correo electrónico para recuperar tu contraseña, el cual tiene una duración de 30 min.', 5000);
            }
            else {
                _this.snackbar.error(result.Message, 5000);
            }
        }, function (error) {
            _this.Loading.HideBackdrop();
        });
    };
    LoginComponent.prototype.resetSesion = function () {
        this.IniciarSesion(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('DialogSesionImperative'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], LoginComponent.prototype, "DialogSesionImperative", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        })
        /* Validaciones Pendientes */
        //Usuario: maxlength 25 alfanumerico, caracteres especiales válidos(._@-)
        //Contraseña : maxlength 25 alfanumericos y especiales(todos)
        ,
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__["SesionService"],
            src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__["SeguridadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"],
            src_app_services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/redireccion/redireccion.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/auth/redireccion/redireccion.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/redireccion/redireccion.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/auth/redireccion/redireccion.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=\"center\" class=\"mt-4\">\r\n  <img class=\"mb-4\" src=\"assets/img/logos/nx-logo-N.png\" height=\"100px\"/>\r\n  <div><i class=\"fas fa-circle-notch fa-spin\"></i></div>\r\n  <div>Espere un momento</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/redireccion/redireccion.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/auth/redireccion/redireccion.component.ts ***!
  \**********************************************************************/
/*! exports provided: RedireccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedireccionComponent", function() { return RedireccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_services_Rol_Rol_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Rol/Rol.service */ "./src/app/services/Rol/Rol.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedireccionComponent = /** @class */ (function () {
    function RedireccionComponent(SesionSVC, RolSVC) {
        this.SesionSVC = SesionSVC;
        this.RolSVC = RolSVC;
        this.SesionSVC.Rol = this.SesionSVC.SesionStorage.Perfil.Rol;
        //this.Rol = this.SesionSVC.Rol;
        //this.SesionSVC.Rol = this.Rol;
    }
    RedireccionComponent.prototype.ngOnInit = function () {
        this.SesionSVC.RedireccionarPerfil();
    };
    RedireccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redireccion',
            template: __webpack_require__(/*! ./redireccion.component.html */ "./src/app/components/auth/redireccion/redireccion.component.html"),
            styles: [__webpack_require__(/*! ./redireccion.component.css */ "./src/app/components/auth/redireccion/redireccion.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__["SesionService"],
            src_app_services_Rol_Rol_service__WEBPACK_IMPORTED_MODULE_2__["RolService"]])
    ], RedireccionComponent);
    return RedireccionComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\r\n  <div class=\"text-center p-4 mt-4 animated fadeIn\">\r\n    <img class=\"mb-4\" src=\"assets/img/logos/nx-logo-N.png\" height=\"100px\"/>\r\n    <div><i class=\"fad fa-spinner-third fa-spin font-size-40 primary\"></i></div>\r\n    <div class=\"mt-4\">Ingresando a Nexus 7 </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SesionIngresandoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionIngresandoComponent", function() { return SesionIngresandoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_models_Persona_Perfil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Persona/Perfil */ "./src/app/models/Persona/Perfil.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/perfil.service */ "./src/app/shared/services/perfil.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SesionIngresandoComponent = /** @class */ (function () {
    function SesionIngresandoComponent(SeguridadSVC, SesionSVC, router, location, perfil_service) {
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
        this.router = router;
        this.location = location;
        this.perfil_service = perfil_service;
    }
    SesionIngresandoComponent.prototype.ngOnInit = function () {
        this.ObtenerPerfil();
    };
    SesionIngresandoComponent.prototype.ObtenerPerfil = function () {
        var _this = this;
        this.SeguridadSVC.ConsultarPerfil(this.SesionSVC.Token).subscribe(function (res) {
            if (!res.Error) {
                var _Perfil = new src_app_models_Persona_Perfil__WEBPACK_IMPORTED_MODULE_4__["Perfil"]({
                    Persona: res.Persona,
                    Cuenta: res.Persona.Cuentas[0],
                    AreasAcademicas: res.Persona.Cuentas[0].AreasAcademicas
                });
                console.log(_Perfil);
                //let _Perfil = new Perfil(P);
                var _AA_1;
                _Perfil.AreasAcademicas.forEach(function (A) {
                    if (A.Roles.find(function (R) { return R.EsRolPrincipal === true; })) {
                        _AA_1 = A;
                    }
                });
                console.log(_AA_1);
                //_Perfil.AreaAcademica = _AA ? _AA : _Perfil.AreasAcademicas[0];
                //_Perfil.Rol = _Perfil.AreaAcademica.Roles.find(R => R.EsRolPrincipal === true && R.Estado === true);
                _Perfil.AreaAcademica = _Perfil.AreasAcademicas.find(function (AA) { return AA.AreaAcademicaId === _this.SesionSVC.SesionStorage.Sesion.AreaAcademicaId; });
                _Perfil.Rol = _Perfil.AreaAcademica.Roles.find(function (R) { return R.RolId === _this.SesionSVC.SesionStorage.Sesion.RolId; });
                _this.SesionSVC.Perfil = _Perfil;
                _this.SesionSVC.ActualizarPerfil(_Perfil);
                console.log(_this.SesionSVC.GetSesionStorage());
                console.log(_this.SesionSVC.SesionStorage);
                _this.perfil_service.InicioSesion(res);
                console.log('perfil service area academica', _this.perfil_service.getAreaAcademicaSesion());
                _this.router.navigate(["App"]);
            }
        });
    };
    SesionIngresandoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sesion-ingresando',
            template: __webpack_require__(/*! ./sesion-ingresando.component.html */ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.html"),
            styles: [__webpack_require__(/*! ./sesion-ingresando.component.css */ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__["SeguridadService"],
            src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_6__["PerfilService"]])
    ], SesionIngresandoComponent);
    return SesionIngresandoComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\r\n  <div class=\"text-center p-4 mt-4 animated fadeIn\">\r\n    <img class=\"mb-4\" src=\"assets/img/logos/nx-logo-N.png\" height=\"100px\"/>\r\n    <div><i class=\"fad fa-spinner-third fa-spin font-size-40 primary\"></i></div>\r\n    <div class=\"mt-4\">Cerrando Sesión</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.ts ***!
  \******************************************************************************/
/*! exports provided: SesionSaliendoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionSaliendoComponent", function() { return SesionSaliendoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SesionSaliendoComponent = /** @class */ (function () {
    function SesionSaliendoComponent(SeguridadSVC, SesionSVC) {
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
    }
    SesionSaliendoComponent.prototype.ngOnInit = function () {
        this.Logout();
    };
    SesionSaliendoComponent.prototype.Logout = function () {
        var _this = this;
        this.SeguridadSVC.TerminarSesion().subscribe(function (res) {
            window.location.href = '';
            _this.SesionSVC.RemoveSesionStorage();
        });
    };
    SesionSaliendoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sesion-saliendo',
            template: __webpack_require__(/*! ./sesion-saliendo.component.html */ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.html"),
            styles: [__webpack_require__(/*! ./sesion-saliendo.component.css */ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_2__["SeguridadService"],
            src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__["SesionService"]])
    ], SesionSaliendoComponent);
    return SesionSaliendoComponent;
}());



/***/ }),

/***/ "./src/app/models/Persona/Usuario.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Persona/Usuario.ts ***!
  \*******************************************/
/*! exports provided: Usuario, UsuarioPersona, UsuarioCuenta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPersona", function() { return UsuarioPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCuenta", function() { return UsuarioCuenta; });
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Persona */ "./src/app/models/Persona/Persona.ts");
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuenta */ "./src/app/models/Persona/Cuenta.ts");
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


var Usuario = /** @class */ (function () {
    function Usuario(P, C, R) {
        this.Persona = new _Persona__WEBPACK_IMPORTED_MODULE_0__["Persona"](P);
        this.Cuenta = new _Cuenta__WEBPACK_IMPORTED_MODULE_1__["Cuenta"](C);
        this.AreasAcademicas = C.AreasAcademicas;
        this.PersonaCuentas = new _Persona__WEBPACK_IMPORTED_MODULE_0__["PersonaCuentas"](P);
        if (R) {
            this.Roles = R.map(function (Rol) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_1__["CuentaAreaAcademicaRol"](Rol); });
        }
    }
    return Usuario;
}());

var UsuarioPersona = /** @class */ (function (_super) {
    __extends(UsuarioPersona, _super);
    function UsuarioPersona() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Cuentas = [];
        return _this;
    }
    return UsuarioPersona;
}(_Persona__WEBPACK_IMPORTED_MODULE_0__["Persona"]));

var UsuarioCuenta = /** @class */ (function (_super) {
    __extends(UsuarioCuenta, _super);
    function UsuarioCuenta(P, C) {
        var _this = _super.call(this, C ? C : P) || this;
        if (P) {
            _this.NombreUsuario = P.NombreUsuario;
            _this.EnSIASE = P.EnSIASE;
            _this.CuentaId = P.CuentaId;
            _this.RolId = P.RolId;
            _this.CorreoUniversitario = P.CorreoUniversitario;
        }
        return _this;
    }
    return UsuarioCuenta;
}(_Persona__WEBPACK_IMPORTED_MODULE_0__["PersonaBase"]));



/***/ }),

/***/ "./src/app/modules/general/general.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/general/general.module.ts ***!
  \***************************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _general_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general.routing */ "./src/app/modules/general/general.routing.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_login_siase_login_siase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/auth/login-siase/login-siase.component */ "./src/app/components/auth/login-siase/login-siase.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_components_auth_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/auth/redireccion/redireccion.component */ "./src/app/components/auth/redireccion/redireccion.component.ts");
/* harmony import */ var src_app_components_auth_clave_recuperar_clave_recuperar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/auth/clave-recuperar/clave-recuperar.component */ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.ts");
/* harmony import */ var src_app_components_auth_clave_asignar_clave_asignar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/auth/clave-asignar/clave-asignar.component */ "./src/app/components/auth/clave-asignar/clave-asignar.component.ts");
/* harmony import */ var src_app_components_auth_sesion_saliendo_sesion_saliendo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/auth/sesion-saliendo/sesion-saliendo.component */ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.ts");
/* harmony import */ var src_app_components_auth_sesion_ingresando_sesion_ingresando_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/auth/sesion-ingresando/sesion-ingresando.component */ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.ts");
/* harmony import */ var _shared_LoadingComponents_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/LoadingComponents.module */ "./src/app/modules/shared/LoadingComponents.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var GeneralModule = /** @class */ (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                src_app_components_auth_clave_recuperar_clave_recuperar_component__WEBPACK_IMPORTED_MODULE_8__["ClaveRecuperarComponent"],
                _components_auth_login_siase_login_siase_component__WEBPACK_IMPORTED_MODULE_5__["LoginSiaseComponent"],
                src_app_components_auth_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_7__["RedireccionComponent"],
                src_app_components_auth_sesion_saliendo_sesion_saliendo_component__WEBPACK_IMPORTED_MODULE_10__["SesionSaliendoComponent"],
                src_app_components_auth_sesion_ingresando_sesion_ingresando_component__WEBPACK_IMPORTED_MODULE_11__["SesionIngresandoComponent"],
                src_app_components_auth_clave_asignar_clave_asignar_component__WEBPACK_IMPORTED_MODULE_9__["ClaveAsignarComponent"]
            ],
            imports: [
                _general_routing__WEBPACK_IMPORTED_MODULE_3__["GeneralRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MyMaterialModule"],
                _shared_LoadingComponents_module__WEBPACK_IMPORTED_MODULE_12__["LoadingComponentsModule"]
            ],
            providers: [],
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "./src/app/modules/general/general.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/general/general.routing.ts ***!
  \****************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var src_app_components_auth_login_siase_login_siase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/auth/login-siase/login-siase.component */ "./src/app/components/auth/login-siase/login-siase.component.ts");
/* harmony import */ var src_app_components_auth_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/redireccion/redireccion.component */ "./src/app/components/auth/redireccion/redireccion.component.ts");
/* harmony import */ var src_app_components_auth_clave_recuperar_clave_recuperar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/auth/clave-recuperar/clave-recuperar.component */ "./src/app/components/auth/clave-recuperar/clave-recuperar.component.ts");
/* harmony import */ var src_app_components_auth_clave_asignar_clave_asignar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth/clave-asignar/clave-asignar.component */ "./src/app/components/auth/clave-asignar/clave-asignar.component.ts");
/* harmony import */ var src_app_components_auth_sesion_saliendo_sesion_saliendo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/auth/sesion-saliendo/sesion-saliendo.component */ "./src/app/components/auth/sesion-saliendo/sesion-saliendo.component.ts");
/* harmony import */ var src_app_components_auth_sesion_ingresando_sesion_ingresando_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/auth/sesion-ingresando/sesion-ingresando.component */ "./src/app/components/auth/sesion-ingresando/sesion-ingresando.component.ts");








var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: src_app_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'LoginSIASE', component: src_app_components_auth_login_siase_login_siase_component__WEBPACK_IMPORTED_MODULE_2__["LoginSiaseComponent"] },
    { path: 'Reestablecer', component: src_app_components_auth_clave_recuperar_clave_recuperar_component__WEBPACK_IMPORTED_MODULE_4__["ClaveRecuperarComponent"] },
    { path: 'Redireccionando', component: src_app_components_auth_redireccion_redireccion_component__WEBPACK_IMPORTED_MODULE_3__["RedireccionComponent"] },
    { path: 'Iniciando', component: src_app_components_auth_sesion_ingresando_sesion_ingresando_component__WEBPACK_IMPORTED_MODULE_7__["SesionIngresandoComponent"] },
    { path: 'Saliendo', component: src_app_components_auth_sesion_saliendo_sesion_saliendo_component__WEBPACK_IMPORTED_MODULE_6__["SesionSaliendoComponent"] },
    { path: 'Accesar', component: src_app_components_auth_clave_asignar_clave_asignar_component__WEBPACK_IMPORTED_MODULE_5__["ClaveAsignarComponent"] }
    //{ path: '**', component: PageNotFoundComponent }
    //{ path: 'profesor', component: ProfesorPrincipal},
];
var GeneralRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/services/Persona/Persona.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/Persona/Persona.service.ts ***!
  \*****************************************************/
/*! exports provided: PersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
/* harmony import */ var src_app_models_Persona_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Persona/Usuario */ "./src/app/models/Persona/Usuario.ts");
/* harmony import */ var src_app_models_Persona_Cuenta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Persona/Cuenta */ "./src/app/models/Persona/Cuenta.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonaService = /** @class */ (function () {
    function PersonaService(API) {
        this.API = API;
        this.Dominio = 'Persona';
    }
    Object.defineProperty(PersonaService.prototype, "Persona", {
        get: function () { return this._Persona; },
        set: function (P) { this._Persona = P; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaService.prototype, "Cuenta", {
        get: function () { return this._Cuenta; },
        set: function (C) { this._Cuenta = C; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonaService.prototype, "Usuario", {
        get: function () { return this._Usuario; },
        set: function (U) { this._Usuario = U; },
        enumerable: true,
        configurable: true
    });
    /********************** Usuarios ************************/
    PersonaService.prototype.ConsultarUsuarios = function (_AreaAcademica, _PageNumber, _PageSize) {
        return this.API.POST(this.Dominio, 'ConsultarUsuarios', {
            AreaAcademicaId: _AreaAcademica,
            PageNumber: _PageNumber,
            PageSize: _PageSize
        });
    };
    /**************************** Persona********************************* */
    PersonaService.prototype.ConsultarPersonas = function (_Tipo, _NombreUsuario, _Nombre, _Estado, _Organizacion, _EnSIASE, _AreaAcademica, _Rol, _PageNumber, _PageSize) {
        return this.API.POST(this.Dominio, 'ConsultarPersonas', {
            Username: (_Tipo == 1 ? _NombreUsuario : null),
            Nombre: (_Tipo == 2 ? _Nombre : null),
            Estado: _Estado,
            OrganizacionId: _Organizacion,
            EnSIASE: _EnSIASE,
            AreaAcademicaId: _AreaAcademica,
            RolId: _Rol,
            PageNumber: _PageNumber,
            PageSize: _PageSize
        });
    };
    PersonaService.prototype.InsertarActualizarPersona = function (_Personas) {
        return this.API.POST(this.Dominio, 'InsertarActualizarPersona', {
            Personas: _Personas
        });
    };
    PersonaService.prototype.ActualizarPersona = function (_Persona) {
        return this.API.POST(this.Dominio, 'ActualizarPersona', {
            Persona: _Persona
        });
    };
    PersonaService.prototype.ActualizarPersonas = function (_Personas) {
        return this.API.POST(this.Dominio, 'ActualizarPersonas', {
            Personas: _Personas
        });
    };
    PersonaService.prototype.ConsultarPersonaCURP = function (CURP) {
        return this.API.POST(this.Dominio, 'ConsultarPersonaCURP', {
            CURP: CURP
        });
    };
    PersonaService.prototype.ConsultarPersonaNombreUsuario = function (NombreUsuario) {
        return this.API.POST(this.Dominio, 'ConsultarPersonaNombreUsuario', {
            NombreUsuario: NombreUsuario
        });
    };
    /*************************** Cuenta ******************************* */
    PersonaService.prototype.ActualizarCuentas = function (PersonaId, Cuentas, AreaAcademicaId) {
        return this.API.POST(this.Dominio, 'ActualizarCuentas', {
            PersonaId: PersonaId,
            Cuentas: Cuentas,
            AreaAcademicaId: AreaAcademicaId,
            AreaAcademicaEspecifica: AreaAcademicaId ? true : false
        });
    };
    PersonaService.prototype.CrearCuenta = function (PersonaId, RolId) {
        return this.API.POST(this.Dominio, 'CrearCuenta', {
            PersonaId: PersonaId,
            RolId: RolId
        });
    };
    PersonaService.prototype.ActualizarCuentaRol = function (CuentaId, RolId, AreaAcademicaId, EsRolPrincipal, Estado) {
        return this.API.POST(this.Dominio, 'ActualizarCuentaRol', {
            RolId: RolId,
            AreaAcademicaId: AreaAcademicaId,
            CuentaId: CuentaId,
            EsRolPrincipal: EsRolPrincipal,
            Activo: Estado
        });
    };
    /*
    public ActualizarEsBloqueado(CuentaId, Bloqueado) {
      return this.API.POST(this.Dominio, 'ActualizarEsBloqueado',{
        CuentaId: CuentaId,
          EsBloqueado: Bloqueado
      });
    }
    */
    PersonaService.prototype.InsertarPersonaPorArchivo = function (_Personas) {
        return this.API.POST(this.Dominio, 'InsertarPersonaPorArchivo', {
            personas: _Personas
        });
    };
    PersonaService.prototype.ActualizarCorreoAdicional = function (_PersonaId, _CorreoAdicional) {
        return this.API.POST(this.Dominio, 'ActualizarCorreoAdicional', {
            PersonaId: _PersonaId,
            CorreoAdicional: _CorreoAdicional
        });
    };
    PersonaService.prototype.ConsultarEstudiantes = function (NombreUsuario) {
        return this.API.POST(this.Dominio, 'ConsultarEstudiantes', {
            Usernames: NombreUsuario
        });
    };
    PersonaService.prototype.ConsultarCuenta = function (NombreUsuario) {
        return this.API.POST(this.Dominio, 'ConsultarPersonaNombreUsuario', {
            NombreUsuario: NombreUsuario
        });
    };
    PersonaService.prototype.AsignarContrasenaCuentaCreada = function (Cuenta) {
        return this.API.POST(this.Dominio, 'AsignarContrasenaCuentaCreada', {
            Cuenta: Cuenta
        });
    };
    PersonaService.prototype.ImportarCuenta = function (Cuentas) {
        return this.API.POST(this.Dominio, 'ImportarCuenta', {
            Cuentas: Cuentas
        });
    };
    PersonaService.prototype.BloquearCuenta = function (_CuentaId) {
        return this.API.POST(this.Dominio, 'BloquearCuenta', {
            CuentaId: _CuentaId
        });
    };
    PersonaService.prototype.DesbloquearCuenta = function (_CuentaId) {
        return this.API.POST(this.Dominio, 'DesbloquearCuenta', {
            CuentaId: _CuentaId
        });
    };
    /********************** Rol *************************/
    PersonaService.prototype.ActualizarRol = function (CuentaId, Roles) {
        return this.API.POST(this.Dominio, 'ActualizarRol', {
            CuentaId: CuentaId,
            Roles: Roles
        });
    };
    PersonaService.prototype.ActualizarRolPrincipal = function (_RolId) {
        return this.API.POST(this.Dominio, 'ActualizarRolPrincipal', {
            RolId: _RolId
        });
    };
    /******************* Functions *********************/
    PersonaService.prototype.getPersonasCuentas = function (Personas) {
        var Cuentas = [];
        Personas.forEach(function (P) { return P.Cuentas.forEach(function (C) { return Cuentas.push(new src_app_models_Persona_Usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](P, C)); }); });
        return Cuentas;
    };
    PersonaService.prototype.getUsuariosFromPersonas = function (P) {
        var Usuarios = [];
        P.forEach(function (P) { return P.Cuentas.forEach(function (C) {
            var _Usuario = new src_app_models_Persona_Usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"](P, C, C.AreasAcademicas[0].Roles);
            Usuarios.push(_Usuario);
        }); });
        return Usuarios;
    };
    PersonaService.prototype.getPersonaCuentas = function (P) {
        var Cuentas = [];
        P.Cuentas.forEach(function (C) { return Cuentas.push(new src_app_models_Persona_Cuenta__WEBPACK_IMPORTED_MODULE_3__["Cuenta"](C)); });
        return Cuentas;
    };
    PersonaService.prototype.findUsuario = function (_List, _Text) {
        return _List.find(function (Est) {
            return Est.Matricula.toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.Nombre + " " + Est.ApellidoPaterno + " " + Est.ApellidoMaterno).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.Nombre.split(" ")[0] + " " + Est.ApellidoPaterno).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.ApellidoPaterno + " " + Est.ApellidoMaterno + " " + Est.Nombre).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.ApellidoPaterno + " " + Est.Nombre).toLowerCase().includes(_Text.toLowerCase());
        });
    };
    /******************* Accesos *********************/
    PersonaService.prototype.ValidarSolicitudConfirmacionCorreo = function (Token) {
        var Headers = {
            Token: Token
        };
        console.log(Headers);
        return this.API.POST(this.Dominio, "ValidarSolicitudConfirmacionCorreo", {}, Headers);
    };
    PersonaService.prototype.CrearAcceso = function (data) {
        var Headers = {
            Token: data.token,
            Contrasena: data.contrasena,
        };
        return this.API.POST(this.Dominio, "CrearAcceso", {}, Headers);
    };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"]])
    ], PersonaService);
    return PersonaService;
}());



/***/ })

}]);
//# sourceMappingURL=0.js.map

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
  captures_list: 0.767
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.014
  esindex: 0.016
  cdx.remote: 12.816
  LoadShardBlock: 162.749 (3)
  PetaboxLoader3.datanode: 80.467 (5)
  PetaboxLoader3.resolve: 202.669 (3)
  load_resource: 194.919 (2)
*/