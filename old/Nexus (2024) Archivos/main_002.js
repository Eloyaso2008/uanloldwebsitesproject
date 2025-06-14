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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class=\"nx-backdrop dark backdrop-loading-full\" *ngIf=\"BackdropVisible()\">\r\n  <!-- Nexus Logo Loading -->\r\n  <ng-container>\r\n    <div class=\"spinner2 loading\" *ngIf=\"!BackdropType\">\r\n      <img src=\"assets/img/logos/nx-logo-N.png   \"/>\r\n      <div class=\"cube1\"></div>\r\n      <div class=\"cube2\"></div>\r\n    </div>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container *ngIf=\"BackdropType\">\r\n    <div class=\"loading backdrop-container d-flex justify-content-center\">\r\n      <div class=\"box-container text-center mb-2 py-3 px-4\">\r\n        <i class=\"fad fa-spinner fa-spin font-size-25\"></i>\r\n        <div *ngIf=\"BackdropTitle\" class=\"bold-500 font-20 my-2\">{{ BackdropTitle }}</div>\r\n        <div class=\"mt-2\">{{ BackdropMessage }}</div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/Utils/Loading/Loading.service */ "./src/app/services/Utils/Loading/Loading.service.ts");
/* harmony import */ var _services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var _services_Rol_Rol_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/Rol/Rol.service */ "./src/app/services/Rol/Rol.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_SIASE__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/SIASE */ "./src/app/constants/SIASE.ts");
/* harmony import */ var _services_Utils_Utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/Utils/Utils.service */ "./src/app/services/Utils/Utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











moment__WEBPACK_IMPORTED_MODULE_8__["locale"]("es");
var AppComponent = /** @class */ (function () {
    function AppComponent(SesionSVC, RolSVC, Loading, perfil_service, general_service, UtilsSVC, activatedRoute, router) {
        this.SesionSVC = SesionSVC;
        this.RolSVC = RolSVC;
        this.Loading = Loading;
        this.perfil_service = perfil_service;
        this.general_service = general_service;
        this.UtilsSVC = UtilsSVC;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app';
        this.general_service.startClock();
    }
    AppComponent.prototype.onResize = function (event) {
        this.general_service.smallScreen = window.innerWidth < 768 ? true : false;
        this.UtilsSVC.screen.width = window.innerWidth;
        this.UtilsSVC.screen.height = window.innerHeight;
        this.UtilsSVC.screen.size = this.UtilsSVC.getScreenSize(window.innerWidth, window.innerHeight);
        this.UtilsSVC.screen.isSmall = window.innerWidth < 768 ? true : false;
        console.log(this.UtilsSVC.screen);
    };
    AppComponent.prototype.ngOnInit = function () {
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].API_ENDPOINT = CONFIG.get_URL_API();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].IP = CONFIG.get_URL();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].URL = CONFIG.get_URL();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].URL_SSL = CONFIG.get_URL_SSL();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].URL_SCORM = CONFIG.get_URL_SCORM();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].API_URL_SCORM = CONFIG.get_URL_API_SCORM();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].API_OFFICE = CONFIG.get_URL_OFFICE();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].API_LTI = CONFIG.get_URL_LTI();
        _shared_constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].API_BITACORA = CONFIG.get_URL_BITACORA();
        _constants_SIASE__WEBPACK_IMPORTED_MODULE_9__["CONSTANTS_SIASE"].Portafolio = CONFIG.SIASE_Portafolio_Config();
        this.onResize(null);
        this.SesionInit();
        this.SesionInitOld();
    };
    AppComponent.prototype.SesionInit = function () {
        var _this = this;
        console.log('Init SesionStorage');
        var _SesionStorage = this.SesionSVC.GetSesionStorage();
        console.log(_SesionStorage);
        if (_SesionStorage) {
            this.SesionSVC.SesionStorage = _SesionStorage;
            this.SesionSVC.Perfil.AreaAcademica === this.SesionSVC.Perfil.AreasAcademicas.find(function (AA) { return AA.AreaAcademicaId === _this.SesionSVC.Perfil.Rol.AreaAcademicaId; });
            this.SesionSVC.Rol = this.SesionSVC.Perfil.Rol;
            //this.router.navigate(["Redireccionando"]);
        }
    };
    AppComponent.prototype.SesionInitOld = function () {
        console.log('Init Sesion Nexus');
        var PerfilSesion = this.perfil_service.getPerfilSaved();
        if (PerfilSesion) {
            this.perfil_service.InicioSesion(PerfilSesion);
        }
        else {
            //this.router.navigate(["Login"]);
        }
    };
    AppComponent.prototype.BackdropVisible = function () {
        return this.Loading.BackdropVisible;
    };
    Object.defineProperty(AppComponent.prototype, "BackdropIcon", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "BackdropType", {
        get: function () {
            return this.Loading.BackdropType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "BackdropTitle", {
        get: function () {
            return this.Loading.Title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "BackdropMessage", {
        get: function () {
            return this.Loading.Message;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _services_Rol_Rol_service__WEBPACK_IMPORTED_MODULE_7__["RolService"],
            _services_Utils_Loading_Loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_1__["PerfilService"],
            _shared_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            _services_Utils_Utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _modules_shared_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/shared/widgets.module */ "./src/app/modules/shared/widgets.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "./node_modules/@angular/common/locales/es-MX.js");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/auth/login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/auth/logout/logout.component */ "./src/app/components/auth/logout/logout.component.ts");
/* harmony import */ var src_app_components_comunicacion_avisos_aviso_view_aviso_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/comunicacion/avisos/aviso-view/aviso-view.component */ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.ts");
/* harmony import */ var src_app_components_encuestas_cambiar_estado_cambiar_estado_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/encuestas/cambiar-estado/cambiar-estado.component */ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_api_http_Interceptor_TokenInterceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api-http/Interceptor/TokenInterceptor.service */ "./src/app/services/api-http/Interceptor/TokenInterceptor.service.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/fesm5/azure-msal-angular.js");
/* harmony import */ var _modules_pruebas_MicrosoftGraph_Settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/pruebas/MicrosoftGraph/Settings */ "./src/app/modules/pruebas/MicrosoftGraph/Settings.ts");
/* harmony import */ var _modules_shared_Pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/shared/Pipes.module */ "./src/app/modules/shared/Pipes.module.ts");
/* harmony import */ var _components_aviso_avisos_avisos_modal_avisos_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/aviso/avisos/avisos-modal/avisos-modal.component */ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.ts");
/* harmony import */ var _interceptors_sistema_interceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./interceptors/sistema.interceptor.service */ "./src/app/interceptors/sistema.interceptor.service.ts");
/* harmony import */ var _interceptors_token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./interceptors/token.interceptor.service */ "./src/app/interceptors/token.interceptor.service.ts");
/* harmony import */ var _interceptors_request_interceptor_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceptors/request.interceptor.service */ "./src/app/interceptors/request.interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/* Locale */


Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_10___default.a, 'es-MX');
// import { LoginImperativeComponent as DialogLoginImperative } from './components/auth/login-imperative/login-imperative.component';
// Responder Encuesta
// import { EncuestaResponderModalComponent   as DialogEncuestaResponder} from 'src/app/components/encuestas/responder/responder-modal/responder-modal.component';
// Login

// Logout

// Avisos

// Encuestas

// Page not Found 404



// import { InputEnterEventDirective } from './directives/input-enter-event.directive';
// for production
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// { provide: LocationStrategy, useClass: HashLocationStrategy }







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_11__["LoginDialogComponent"],
                _components_aviso_avisos_avisos_modal_avisos_modal_component__WEBPACK_IMPORTED_MODULE_21__["AvisosModalComponent"],
                //DialogLogin2Component,
                src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                //DialogAvisosListado,
                src_app_components_comunicacion_avisos_aviso_view_aviso_view_component__WEBPACK_IMPORTED_MODULE_13__["AvisoVistaComponent"],
                src_app_components_encuestas_cambiar_estado_cambiar_estado_component__WEBPACK_IMPORTED_MODULE_14__["EncuestaCambiarEstadoComponent"],
            ],
            imports: [
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_7__["MyMaterialModule"],
                _modules_shared_widgets_module__WEBPACK_IMPORTED_MODULE_8__["SharedWidgetModule"],
                _modules_shared_Pipes_module__WEBPACK_IMPORTED_MODULE_20__["PipesModule"],
                // SharedModule,
                // MyMaterialModule,
                // GeneralModule,
                // AdminModule,
                // ProfesorModule,
                // EstudianteModule,
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_18__["MsalModule"].forRoot({
                    auth: {
                        clientId: _modules_pruebas_MicrosoftGraph_Settings__WEBPACK_IMPORTED_MODULE_19__["OAuthSettings"].appId,
                        authority: 'https://web.archive.org/web/20240606034029/https://login.microsoftonline.com/' + _modules_pruebas_MicrosoftGraph_Settings__WEBPACK_IMPORTED_MODULE_19__["OAuthSettings"].tenant,
                        postLogoutRedirectUri: _modules_pruebas_MicrosoftGraph_Settings__WEBPACK_IMPORTED_MODULE_19__["OAuthSettings"].LogoutRedirectUri
                    },
                }, {
                    protectedResourceMap: []
                })
            ],
            entryComponents: [
                src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_11__["LoginDialogComponent"],
                _components_aviso_avisos_avisos_modal_avisos_modal_component__WEBPACK_IMPORTED_MODULE_21__["AvisosModalComponent"],
                //DialogLogin2Component,
                src_app_components_auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                //DialogAvisosListado,
                src_app_components_comunicacion_avisos_aviso_view_aviso_view_component__WEBPACK_IMPORTED_MODULE_13__["AvisoVistaComponent"],
                src_app_components_encuestas_cambiar_estado_cambiar_estado_component__WEBPACK_IMPORTED_MODULE_14__["EncuestaCambiarEstadoComponent"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                    useValue: 'es-MX'
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_api_http_Interceptor_TokenInterceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_token_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["ApiTokenInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_sistema_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["SistemaInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_request_interceptor_service__WEBPACK_IMPORTED_MODULE_24__["RequestInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
//import { DesempenoModule } from './modules/rol/desempeno/desempeno.module';
var routes = [
    //{ path: '', redirectTo: 'Login', pathMatch:'full'},
    //{ path: '**', component: PageNotFoundComponent },
    //{ path: 'Pruebas', component: PruebasComponent },
    {
        path: '',
        data: { breadcrumb: '' },
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./modules/general/general.module */ "./src/app/modules/general/general.module.ts")).then(function (M) { return M.GeneralModule; }); }
    },
    {
        path: 'App',
        data: { breadcrumb: '' },
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./modules/AppMain/AppMain.module */ "./src/app/modules/AppMain/AppMain.module.ts")).then(function (M) { return M.AppMainModule; }); }
    },
    {
        path: 'Pruebas',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e(47), __webpack_require__.e(48), __webpack_require__.e(50), __webpack_require__.e(51), __webpack_require__.e(54), __webpack_require__.e(67), __webpack_require__.e("common"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ./modules/pruebas/pruebas.module */ "./src/app/modules/pruebas/pruebas.module.ts")).then(function (M) { return M.PruebasModule; }); }
    },
    {
        path: 'AdminGral',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./modules/rol/admin-general/admin-general.module */ "./src/app/modules/rol/admin-general/admin-general.module.ts")).then(function (M) { return M.AdminGeneralModule; }); }
    },
    {
        path: 'Auditor',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./modules/rol/auditor/auditor.module */ "./src/app/modules/rol/auditor/auditor.module.ts")).then(function (M) { return M.AuditorModule; }); }
    },
    {
        path: 'Desempeno',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./modules/rol/desempeno/desempeno.module */ "./src/app/modules/rol/desempeno/desempeno.module.ts")).then(function (M) { return M.DesempenoModule; }); }
    },
    {
        path: 'Seguimiento',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./modules/rol/denms/denms.module */ "./src/app/modules/rol/denms/denms.module.ts")).then(function (M) { return M.DenmsModule; }); }
    },
    {
        path: 'Indicadores',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./modules/indicadores/indicadores.module */ "./src/app/modules/indicadores/indicadores.module.ts")).then(function (M) { return M.IndicadoresModule; }); }
    },
    {
        path: 'Profesor',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e(47), __webpack_require__.e(48), __webpack_require__.e(49), __webpack_require__.e(52), __webpack_require__.e(55), __webpack_require__.e(87), __webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./modules/rol/profesor/profesor.module */ "./src/app/modules/rol/profesor/profesor.module.ts")).then(function (M) { return M.ProfesorModule; }); }
    },
    {
        path: 'Estudiante',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e(49), __webpack_require__.e(55), __webpack_require__.e(56), __webpack_require__.e(63), __webpack_require__.e(88), __webpack_require__.e("common"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./modules/rol/estudiante/estudiante.module */ "./src/app/modules/rol/estudiante/estudiante.module.ts")).then(function (M) { return M.EstudianteModule; }); }
    },
    {
        path: 'Examenes',
        loadChildren: function () { return Promise.all(/*! import() */[__webpack_require__.e(47), __webpack_require__.e(48), __webpack_require__.e(51), __webpack_require__.e(53), __webpack_require__.e(54), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! src/app/modules/nx-examen/nx-examen.module */ "./src/app/modules/nx-examen/nx-examen.module.ts")).then(function (m) { return m.NxExamenModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    onSameUrlNavigation: 'reload'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/auth/login-dialog/login-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/auth/login-dialog/login-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/login-dialog/login-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/auth/login-dialog/login-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div mat-dialog-content class=\"w-min-initial\">\r\n    <div class=\"text-center\">\r\n      <div class=\"warn font-size-20 bold-500\">¡Tu sesión ha expirado!</div>\r\n      <div class=\"bold-500\">Para reactivar tu sesión ingresa tu contraseña.</div>\r\n\r\n      <div class=\"bold-500 font-size-25 py-3\">{{Cuenta.NombreUsuario}}</div>\r\n\r\n      <form (ngSubmit)=\"onSubmitLogin()\" #f=\"ngForm\" name=\"form-login\">\r\n\r\n        <mat-form-field class=\"form-group d-block\">\r\n          <input matInput type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"DatosLogin.password\" name=\"password\">\r\n        </mat-form-field>\r\n        <!--<div><a class=\"nx-link\" routerLink=\"/administrador/usuarios\">ACCESO DIRECTO</a></div>\r\n        <div><a (click)=\"delete_sesion()\">Eliminar Sesion Emergencia</a></div>-->\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <mat-dialog-actions>\r\n  <div class=\"w-100\">\r\n    <button mat-raised-button type=\"button\" mat-dialog-close class=\"btn-gray float-left\" (click)=\"Logout()\">Cerrar Sesión</button>\r\n    <button mat-raised-button color=\"primary\" class=\"float-right\" (click)=\"IniciarSesion(true)\">Iniciar Sesión</button>\r\n  </div>\r\n  </mat-dialog-actions>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/auth/login-dialog/login-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/auth/login-dialog/login-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_seguridad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/seguridad.service */ "./src/app/shared/services/seguridad.service.ts");
/* harmony import */ var src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var src_app_shared_DTO_Perfil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/DTO/Perfil */ "./src/app/shared/DTO/Perfil.ts");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(SeguridadSVC, SesionSVC, SnackBar, seguridad_service, perfil_service, snackbar, dialogRef) {
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
        this.SnackBar = SnackBar;
        this.seguridad_service = seguridad_service;
        this.perfil_service = perfil_service;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.DatosLogin = { usuario: null, password: null };
        this.section = 1;
        console.log(this.SesionSVC.GetSesion());
        console.log(this.SesionSVC.SesionStorage);
        console.log(this.SesionSVC.Perfil);
        this.Cuenta = this.SesionSVC.Perfil.Cuenta; //this.perfil_service.getCuenta();
        this.DatosLogin.usuario = this.Cuenta.NombreUsuario;
    }
    LoginDialogComponent.prototype.ngOnInit = function () { };
    LoginDialogComponent.prototype.onSubmitLogin = function (form) {
        this.IniciarSesion(true);
    };
    LoginDialogComponent.prototype.IniciarSesion = function (Imperative) {
        var _this = this;
        console.log('Login');
        this.SeguridadSVC.IniciarSesion(this.DatosLogin, Imperative).subscribe(function (res) {
            console.log(res);
            if (!res.Error) {
                _this.SnackBar.OpenSnackBarSuccess('La sesión se ha iniciado con éxito', 4000);
                _this.SesionSVC.UpdateSesion(res.Sesion);
                _this.SesionSVC.GetSesionStorage();
                _this.ObtenerPerfil(res.Sesion.Token);
            }
        });
    };
    LoginDialogComponent.prototype.ObtenerPerfil = function (Token) {
        var _this = this;
        this.SeguridadSVC.ConsultarPerfil(Token).subscribe(function (res) {
            console.log(res);
            if (!res.Error) {
                /*let P = new Perfil({
                  Persona: res.Persona,
                  Cuenta: res.Persona.Cuentas[0],
                  AreasAcademicas: res.Persona.Cuentas[0].AreasAcademicas
                });
                console.log(P);
                this.SesionSVC.Perfil = P;*/
                // start Old
                _this.perfil_service.InicioSesion(res);
                // end Old
                _this.dialogRef.close({
                    SesionInit: true
                });
            }
        });
    };
    LoginDialogComponent.prototype.getPerfil = function (Token) {
        var _this = this;
        this.seguridad_service.getPerfil(Token).subscribe(function (result) {
            console.log(result);
            if (result["Code"]) {
                _this.snackbar.open(result["Message"], "X", {
                    duration: 4000,
                    panelClass: ["snackbar-error", "action-close"],
                    verticalPosition: 'bottom',
                });
            }
            else {
                _this.perfil = new src_app_shared_DTO_Perfil__WEBPACK_IMPORTED_MODULE_4__["Perfil"](result);
                _this.perfil_service.setPerfil(_this.perfil);
                _this.dialogRef.close({
                    SesionInit: true
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    LoginDialogComponent.prototype.Logout = function () {
        this.dialogRef.close(false);
        this.seguridad_service.Logout().subscribe();
    };
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/components/auth/login-dialog/login-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-dialog.component.css */ "./src/app/components/auth/login-dialog/login-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_5__["SeguridadService"],
            src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            src_app_services_Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"],
            src_app_shared_services_seguridad_service__WEBPACK_IMPORTED_MODULE_2__["SeguridadService"],
            src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_3__["PerfilService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title>Cerrar Sesión</h1>\r\n  \r\n    <div mat-dialog-content>\r\n      <div class=\"bold-500 py-2\">¿Seguro que deseas cerrar sesión?</div>\r\n    </div>\r\n\r\n    <mat-dialog-actions>\r\n      <div class=\"w-100\" align=\"right\">\r\n        <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n        <button mat-raised-button (click)=\"Logout()\" color=\"warn\">Cerrar Sesión</button>\r\n      </div>\r\n    </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/auth/logout/logout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/logout/logout.component.ts ***!
  \************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(SeguridadSVC, SesionSVC, router, dialogRef) {
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
        this.router = router;
        this.dialogRef = dialogRef;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.Logout = function () {
        this.dialogRef.close();
        this.Salir();
    };
    LogoutComponent.prototype.Salir = function () {
        this.router.navigate(['Saliendo']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/auth/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_3__["SeguridadService"],
            src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dialog Vista Preliminar Aviso -->\r\n\r\n<div class=\"relative w-100\">\r\n\r\n  <button mat-icon-button mat-dialog-close class=\"mat-box-30 absolute right-0\"><i class=\"far fa-times-circle font-size-20\"></i></button>\r\n\r\n  <div mat-dialog-title>Avisos</div>\r\n\r\n  <div mat-dialog-content>\r\n    <div class=\"row\">\r\n      <div class=\"border d-none d-md-inline col-5 p-0\">\r\n        <mat-nav-list class=\"nx-mat-list p-0\">\r\n          <a mat-list-item *ngFor=\"let Aviso of Avisos | unique | orderBy: 'Expirado'\" (click)=\"selectAviso(Aviso)\" [ngClass]=\"{'active':Aviso.AvisoId == AvisoSelected.AvisoId }\" class=\"h-initial line-height-initial border-bottom mat-list-item-content-p-0\">\r\n            <div class=\"py-2 px-2 bold-500 font-size-15\">\r\n              <div>\r\n                <i *ngIf=\"Aviso.EsUrgente\" class=\"far fa-exclamation-circle mr-2\"></i>\r\n                <span>{{Aviso.Titulo}}</span>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-md-7 border relative p-0 w-500px h-400px\">\r\n        <ng-container *ngIf=\"AvisoSelected\">\r\n          <div class=\"px-3\">\r\n            <div class=\"bold-500 font-size-25\">{{AvisoSelected.Titulo}}</div>\r\n            <div [innerHTML]=\"AvisoSelected.Mensaje | safeHTML\" class=\"fr-view\"></div>\r\n          </div>\r\n          <!--<button mat-icon-button class=\"absolute left-0 top-50p mat-box-30 mt-\"><i class=\"fa fa-chevron-left\"></i></button>\r\n          <button mat-icon-button class=\"absolute right-0 top-50p mat-box-30\"><i class=\"fa fa-chevron-right\"></i></button>-->\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"!AvisoSelected\">\r\n          <div class=\"bold-500 text-center\">Selecciona un Aviso de la lista para ver su contenido</div>\r\n          <i class=\"\"></i>\r\n        </ng-container>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <mat-dialog-actions class=\"d-inline d-md-none\">\r\n    <div class=\"w-100 d-flex justify-content-end\">\r\n      <button mat-raised-button (click)=\"prev()\" [disabled]=\"index == 0\">Anterior</button>\r\n      <button mat-raised-button (click)=\"next()\" color=\"primary\" [disabled]=\"index == (Avisos.length-1)\">Siguiente</button>\r\n      <!--<button mat-raised-button color=\"primary\" (click)=\"crearGrupo()\">Guardar</button>-->\r\n    </div>\r\n  </mat-dialog-actions>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: AvisosModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisosModalComponent", function() { return AvisosModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var src_app_models_Aviso_Aviso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Aviso/Aviso */ "./src/app/models/Aviso/Aviso.ts");
/* harmony import */ var src_app_services_Aviso_Aviso_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/Aviso/Aviso.service */ "./src/app/services/Aviso/Aviso.service.ts");
/* harmony import */ var src_app_services_Utils_Date_Date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/Utils/Date/Date.service */ "./src/app/services/Utils/Date/Date.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AvisosModalComponent = /** @class */ (function () {
    function AvisosModalComponent(AvisoSVC, FechaSVC, orderPipe, data) {
        var _this = this;
        this.AvisoSVC = AvisoSVC;
        this.FechaSVC = FechaSVC;
        this.orderPipe = orderPipe;
        this.data = data;
        this.Avisos = [];
        this.index = 0;
        console.log(this.data);
        console.log("Si hay avisos");
        data.Avisos.forEach(function (A) {
            var _Diff = _this.FechaSVC.GetDiff(A.FechaFin, new Date(), 'seconds');
            A.Expirado = (_Diff >= 0) ? true : false;
        });
        var _AvisosList = this.data.Avisos.map(function (A) { return new src_app_models_Aviso_Aviso__WEBPACK_IMPORTED_MODULE_3__["Aviso"](A); });
        var _AvisosUrgentes = this.orderPipe.transform(_AvisosList.filter(function (A) { return A.EsUrgente == true; }), ["AvisoId"], true);
        var _AvisosNormales = this.orderPipe.transform(_AvisosList.filter(function (A) { return A.EsUrgente == false; }), ["AvisoId"], true); // both this.array and this.order are from above example AppComponent
        this.Avisos = _AvisosUrgentes.concat(_AvisosNormales);
        this.AvisoSelected = this.Avisos[0];
    }
    AvisosModalComponent.prototype.ngOnInit = function () {
    };
    /*public getAvisos(){
      this.avisos_service.getAvisos(0,true).subscribe(
        result => {
          console.log(result);
          if(!result.Code){
            this.Avisos = result.Avisos.map(A => new Aviso(A));
          }else{
            this.general_service.snackbarError(result.Message,3000);
          }
        },error => {
          console.log(error);
      });
    }*/
    AvisosModalComponent.prototype.prev = function (index) { };
    AvisosModalComponent.prototype.next = function (index) { };
    AvisosModalComponent.prototype.selectAviso = function (A) {
        this.AvisoSelected = A;
    };
    AvisosModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avisos-modal',
            template: __webpack_require__(/*! ./avisos-modal.component.html */ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.html"),
            styles: [__webpack_require__(/*! ./avisos-modal.component.css */ "./src/app/components/aviso/avisos/avisos-modal/avisos-modal.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_services_Aviso_Aviso_service__WEBPACK_IMPORTED_MODULE_4__["AvisoService"],
            src_app_services_Utils_Date_Date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderPipe"], Object])
    ], AvisosModalComponent);
    return AvisosModalComponent;
}());



/***/ }),

/***/ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Dialog Vista Preliminar Aviso -->\r\n\r\n<div class=\"relative\">\r\n\r\n  <button mat-icon-button mat-dialog-close class=\"mat-box-30 absolute right-0\">\r\n    <i class=\"far fa-times-circle font-size-20\"></i>\r\n  </button>\r\n  \r\n  <div mat-dialog-title>{{Aviso.Titulo}}</div>\r\n  \r\n  <div mat-dialog-content class=\"w-500px\">\r\n    <div [innerHTML]=\"Aviso.Mensaje | safeHTML\" class=\"fr-view\"></div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AvisoVistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoVistaComponent", function() { return AvisoVistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AvisoVistaComponent = /** @class */ (function () {
    function AvisoVistaComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AvisoVistaComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.Aviso = this.data;
        console.log(this.Aviso);
    };
    AvisoVistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aviso-view',
            template: __webpack_require__(/*! ./aviso-view.component.html */ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.html"),
            styles: [__webpack_require__(/*! ./aviso-view.component.css */ "./src/app/components/comunicacion/avisos/aviso-view/aviso-view.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AvisoVistaComponent);
    return AvisoVistaComponent;
}());



/***/ }),

/***/ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- Publicar -->\r\n  <ng-container *ngIf=\"Encuesta.EstadoEncuestaId == 2\">\r\n    <div>\r\n      <h1 mat-dialog-title>Publicar Encuesta</h1>\r\n      <div mat-dialog-content>\r\n        <div>\r\n          <div class=\"italic font-size-15\">Al <span class=\"bold-500 primary\">Publicar</span> la Encuesta, no podrás editar la misma mientras siga en estado públicada</div>\r\n          <div class=\"mt-2\">¿Seguro que desea <span class=\"bold-500 primary\">Publicar</span> la Encuesta?</div>\r\n        </div>\r\n      </div>\r\n      <mat-dialog-actions>\r\n        <div class=\"w-100\" align=\"right\">\r\n          <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n          <button mat-raised-button (click)=\"ActualizarEncuestaEstado(2)\" color=\"primary\">Publicar</button>\r\n        </div>\r\n      </mat-dialog-actions>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Suspender -->\r\n  <ng-container *ngIf=\"Encuesta.EstadoEncuestaId == 3\">\r\n    <div>\r\n      <h1 mat-dialog-title>Suspender Encuesta</h1>\r\n      <div mat-dialog-content>\r\n        <div>\r\n          <div class=\"italic font-size-15\">Al <span class=\"bold-500 warn\">Suspender</span> la Encuesta, los usuarios ya no podrán acceder a responder mientras siga en estado suspendida.</div>\r\n          <div class=\"mt-2\">¿Seguro que desea <span class=\"bold-500 warn\">Suspender</span> la Encuesta?</div>\r\n        </div>\r\n      </div>\r\n      <mat-dialog-actions>\r\n        <div class=\"w-100\" align=\"right\">\r\n          <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n          <button mat-raised-button (click)=\"ActualizarEncuestaEstado(3)\" color=\"warn\">Suspender</button>\r\n        </div>\r\n      </mat-dialog-actions>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Terminar -->\r\n  <ng-container *ngIf=\"Encuesta.EstadoEncuestaId == 4\">\r\n    <div>\r\n      <h1 mat-dialog-title>Terminar Encuesta</h1>\r\n      <div mat-dialog-content>\r\n        <div>\r\n          <div class=\"italic font-size-15\">Al <span class=\"bold-500 primary\">Terminar</span> la Encuesta, los usuarios ya no podrán acceder a responder y no podrá publicarse más.</div>\r\n          <div class=\"mt-2\">¿Seguro que desea <span class=\"bold-500 primary\">Terminar</span> la Encuesta?</div>\r\n        </div>\r\n      </div>\r\n      <mat-dialog-actions>\r\n        <div class=\"w-100\" align=\"right\">\r\n          <button mat-raised-button mat-dialog-close class=\"btn-gray\">Cancelar</button>\r\n          <button mat-raised-button (click)=\"ActualizarEncuestaEstado(4)\" color=\"primary\">Terminar</button>\r\n        </div>\r\n      </mat-dialog-actions>\r\n    </div>\r\n  </ng-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EncuestaCambiarEstadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaCambiarEstadoComponent", function() { return EncuestaCambiarEstadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_seguridad_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/seguridad.service */ "./src/app/shared/services/seguridad.service.ts");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var src_app_shared_services_encuestas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/encuestas.service */ "./src/app/shared/services/encuestas.service.ts");
/* harmony import */ var src_app_shared_DTO_Encuesta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/DTO/Encuesta */ "./src/app/shared/DTO/Encuesta.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EncuestaCambiarEstadoComponent = /** @class */ (function () {
    function EncuestaCambiarEstadoComponent(seguridad_service, general_service, encuestas_service, dialogRef, data) {
        this.seguridad_service = seguridad_service;
        this.general_service = general_service;
        this.encuestas_service = encuestas_service;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EncuestaCambiarEstadoComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.Encuesta = new src_app_shared_DTO_Encuesta__WEBPACK_IMPORTED_MODULE_4__["Encuesta"](this.data.Encuesta.Encuesta, 1);
        this.Encuesta.EstadoEncuestaId = this.data.Encuesta.Estado;
        console.log(this.Encuesta.EstadoEncuestaId);
    };
    EncuestaCambiarEstadoComponent.prototype.ActualizarEncuestaEstado = function () {
        var _this = this;
        var data = {
            Encuesta: this.Encuesta
        };
        this.encuestas_service.UpdateEncuesta(data).subscribe(function (result) {
            console.log(result);
            if (!result.Code) {
                switch (_this.Encuesta.EstadoEncuestaId) {
                    case 2:
                        _this.general_service.snackbarSucces('Encuesta Publicada con éxito', 3000);
                        break;
                    case 3:
                        _this.general_service.snackbarSucces('Encuesta Suspendida con éxito', 3000);
                        break;
                    case 4:
                        _this.general_service.snackbarSucces('Encuesta Terminada con éxito', 3000);
                        break;
                }
                _this.dialogRef.close();
                _this.Encuesta.EstadoEncuestaId = new src_app_shared_DTO_Encuesta__WEBPACK_IMPORTED_MODULE_4__["Encuesta"](result.Encuesta, 1).EstadoEncuestaId;
                _this.encuestas_service.setEncuestaSelected(_this.Encuesta);
                _this.dialogRef.close({
                    Encuesta: _this.Encuesta
                });
            }
            else {
                _this.general_service.snackbarError(result.Message, 3000);
                if (_this.seguridad_service.isSesionExpired(result.Code)) {
                    _this.seguridad_service.sesionExpired().subscribe(function (result) { return _this.ActualizarEncuestaEstado(); });
                }
            }
        }, function (error) {
            console.log(error);
            _this.general_service.snackbarError(JSON.stringify(error), 3000);
        });
    };
    EncuestaCambiarEstadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-encuesta-cambiar-estado',
            template: __webpack_require__(/*! ./cambiar-estado.component.html */ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.html"),
            styles: [__webpack_require__(/*! ./cambiar-estado.component.css */ "./src/app/components/encuestas/cambiar-estado/cambiar-estado.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_shared_services_seguridad_service__WEBPACK_IMPORTED_MODULE_1__["SeguridadService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            src_app_shared_services_encuestas_service__WEBPACK_IMPORTED_MODULE_3__["EncuestasService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], EncuestaCambiarEstadoComponent);
    return EncuestaCambiarEstadoComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"relative\">\r\n  <h1>404 Page Not Found</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/timer/timer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/ui/timer/timer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/ui/timer/timer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/ui/timer/timer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  timer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/ui/timer/timer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ui/timer/timer.component.ts ***!
  \********************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
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

var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/components/ui/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/components/ui/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/constants/SIASE.ts":
/*!************************************!*\
  !*** ./src/app/constants/SIASE.ts ***!
  \************************************/
/*! exports provided: CONSTANTS_SIASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS_SIASE", function() { return CONSTANTS_SIASE; });
var CONSTANTS_SIASE = /** @class */ (function () {
    function CONSTANTS_SIASE() {
    }
    CONSTANTS_SIASE.Portafolio = {
        BotonEnviarCalificacionesSIASE: null,
        ColumnaCalificacionSIASE: null,
    };
    return CONSTANTS_SIASE;
}());



/***/ }),

/***/ "./src/app/interceptors/request.interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: RequestInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptorService", function() { return RequestInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Utils/logger.service */ "./src/app/services/Utils/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptorService = /** @class */ (function () {
    function RequestInterceptorService(logger) {
        this.logger = logger;
    }
    RequestInterceptorService.prototype.intercept = function (req, next) {
        //this.logger.info('<-------------- Request -------------->')
        //this.logger.data(req);
        var request = req.clone();
        return next.handle(request);
    };
    RequestInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], RequestInterceptorService);
    return RequestInterceptorService;
}());



/***/ }),

/***/ "./src/app/interceptors/sistema.interceptor.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/interceptors/sistema.interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: SistemaInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistemaInterceptorService", function() { return SistemaInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var _services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Utils/logger.service */ "./src/app/services/Utils/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SistemaInterceptorService = /** @class */ (function () {
    function SistemaInterceptorService(sesion, logger) {
        this.sesion = sesion;
        this.logger = logger;
    }
    SistemaInterceptorService.prototype.intercept = function (req, next) {
        //this.logger.info('<----------------- Sistema Interceptor ----------------->');
        var _headers = req.headers;
        console.info('REQUEST:', req);
        if (!req.url.includes('SCORMApi') || req.url.includes('ActualizarCalificacionScormEstudianteAutogestivo')) {
            if (!req.headers.has('SistemaId'))
                _headers = _headers.append('SistemaId', '1');
            if (this.sesion.isAuthenticated() && this.sesion.Perfil) {
                if (!req.headers.has('AreaAcademicaId'))
                    _headers = _headers.append('AreaAcademicaId', this.sesion.Perfil.AreaAcademica.AreaAcademicaId.toString());
                if (!req.headers.has('RolId'))
                    _headers = _headers.append('RolId', this.sesion.Rol.RolId.toString());
            }
        }
        var _req = req.clone({
            headers: _headers
        });
        return next.handle(_req);
    };
    SistemaInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__["SesionService"],
            _services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], SistemaInterceptorService);
    return SistemaInterceptorService;
}());



/***/ }),

/***/ "./src/app/interceptors/token.interceptor.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.service.ts ***!
  \***********************************************************/
/*! exports provided: ApiTokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTokenInterceptorService", function() { return ApiTokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var _services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Utils/logger.service */ "./src/app/services/Utils/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiTokenInterceptorService = /** @class */ (function () {
    function ApiTokenInterceptorService(session, logger) {
        this.session = session;
        this.logger = logger;
    }
    ApiTokenInterceptorService.prototype.intercept = function (req, next) {
        //this.logger.info('<----------------- Token Interceptor ----------------->');
        var request = req.clone();
        if (this.session.isAuthenticated() && (!req.url.includes('SCORMApi') || req.url.includes('ActualizarCalificacionScormEstudianteAutogestivo'))) {
            var token = this.session.Token;
            if (!req.headers.has('Token')) {
                request = req.clone({
                    headers: req.headers.append('Token', token)
                });
            }
        }
        return next.handle(request);
    };
    ApiTokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_1__["SesionService"],
            _services_Utils_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], ApiTokenInterceptorService);
    return ApiTokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/models/AreaAcademica/AreaAcademica.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/AreaAcademica/AreaAcademica.ts ***!
  \*******************************************************/
/*! exports provided: AreaAcademica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaAcademica", function() { return AreaAcademica; });
/* harmony import */ var _NivelAcademico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NivelAcademico */ "./src/app/models/AreaAcademica/NivelAcademico.ts");
/* harmony import */ var _Persona_Rol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Persona/Rol */ "./src/app/models/Persona/Rol.ts");
/* harmony import */ var _Dependencia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dependencia */ "./src/app/models/AreaAcademica/Dependencia.ts");



var AreaAcademica = /** @class */ (function () {
    function AreaAcademica(AA) {
        var _this = this;
        this.Roles = [];
        if (AA) {
            this.AreaAcademicaId = AA.AreaAcademicaId;
            this.Nombre = AA.Nombre;
            this.Dependencia = new _Dependencia__WEBPACK_IMPORTED_MODULE_2__["Dependencia"](AA.Dependencia);
            this.NivelAcademico = new _NivelAcademico__WEBPACK_IMPORTED_MODULE_0__["NivelAcademico"](AA.NivelAcademico);
            this.EsBloqueado = AA.EsBloqueado;
            this.Estado = AA.Estado;
            this.Roles = AA.Roles ? AA.Roles.map(function (R) { return new _Persona_Rol__WEBPACK_IMPORTED_MODULE_1__["Rol"](R); }) : null;
            this.NivelAcademicoId = AA.NivelAcademicoId ? AA.NivelAcademicoId : null;
            this.UnidadId = AA.UnidadId ? AA.UnidadId : null;
            this._Unidad = AA.UnidadId ? this.Dependencia.Unidades.find(function (U) { return U.UnidadId === _this.UnidadId; }) : null;
        }
    }
    Object.defineProperty(AreaAcademica.prototype, "Unidad", {
        get: function () { return this._Unidad; },
        set: function (U) { this._Unidad = U; },
        enumerable: true,
        configurable: true
    });
    return AreaAcademica;
}());



/***/ }),

/***/ "./src/app/models/AreaAcademica/Dependencia.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/AreaAcademica/Dependencia.ts ***!
  \*****************************************************/
/*! exports provided: Dependencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dependencia", function() { return Dependencia; });
/* harmony import */ var _Organizacion_Orgaizacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Organizacion/Orgaizacion */ "./src/app/models/Organizacion/Orgaizacion.ts");
/* harmony import */ var _Unidad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unidad */ "./src/app/models/AreaAcademica/Unidad.ts");


var Dependencia = /** @class */ (function () {
    function Dependencia(D) {
        if (D) {
            this.DependenciaId = D.DependenciaId;
            this.OrganizacionId = D.OrganizacionId;
            this.Nombre = D.Nombre;
            this.NombreCorto = D.NombreCorto;
            this.EsAcademica = D.EsAcademica;
            this.EsAjenaUANL = D.EsAjenaUANL;
            this.Estado = D.Estado;
            this.Organizacion = new _Organizacion_Orgaizacion__WEBPACK_IMPORTED_MODULE_0__["Organizacion"](D.Organizacion);
            this.Unidades = D.Unidades.map(function (U) { return new _Unidad__WEBPACK_IMPORTED_MODULE_1__["Unidad"](U); });
        }
    }
    return Dependencia;
}());



/***/ }),

/***/ "./src/app/models/AreaAcademica/NivelAcademico.ts":
/*!********************************************************!*\
  !*** ./src/app/models/AreaAcademica/NivelAcademico.ts ***!
  \********************************************************/
/*! exports provided: NivelAcademico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NivelAcademico", function() { return NivelAcademico; });
var NivelAcademico = /** @class */ (function () {
    function NivelAcademico(NA) {
        if (NA) {
            this.NivelAcademicoId = NA.NivelAcademicoId;
            this.Nombre = NA.Nombre;
            this.Abreviatura = NA.Abreviatura;
            this.Estado = NA.Estado;
        }
    }
    return NivelAcademico;
}());



/***/ }),

/***/ "./src/app/models/AreaAcademica/Unidad.ts":
/*!************************************************!*\
  !*** ./src/app/models/AreaAcademica/Unidad.ts ***!
  \************************************************/
/*! exports provided: Unidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unidad", function() { return Unidad; });
var Unidad = /** @class */ (function () {
    function Unidad(U) {
        this.UnidadId = U.UnidadId;
        this.DependenciaId = U.DependenciaId;
        this.Nombre = U.Nombre;
        this.NombreCorto = U.NombreCorto;
        this.Estado = U.Estado;
    }
    return Unidad;
}());



/***/ }),

/***/ "./src/app/models/Aviso/Aviso.ts":
/*!***************************************!*\
  !*** ./src/app/models/Aviso/Aviso.ts ***!
  \***************************************/
/*! exports provided: Aviso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aviso", function() { return Aviso; });
/* harmony import */ var _AvisoDestino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvisoDestino */ "./src/app/models/Aviso/AvisoDestino.ts");

var Aviso = /** @class */ (function () {
    function Aviso(A) {
        this.AvisoId = 0;
        this.Destinos = [];
        this.EsUrgente = false;
        this.EnviarCorreo = false;
        this.Permanente = false;
        this.Estado = true;
        this.CreoRol = 0;
        if (A) {
            this.AvisoId = A.AvisoId;
            this.Titulo = A.Titulo;
            this.Mensaje = A.Mensaje;
            this.FechaInicio = new Date(A.FechaInicio);
            this.FechaFin = new Date(A.FechaFin);
            this.Destino = new _AvisoDestino__WEBPACK_IMPORTED_MODULE_0__["AvisoDestino"](A.Destino);
            this.Destinos = A.Destino ? [new _AvisoDestino__WEBPACK_IMPORTED_MODULE_0__["AvisoDestino"](A.Destino)] : (A.Destinos ? A.Destinos.map(function (A) { return new _AvisoDestino__WEBPACK_IMPORTED_MODULE_0__["AvisoDestino"](A); }) : []);
            this.EsUrgente = A.EsUrgente;
            this.EnviarCorreo = A.EnviarCorreo;
            this.Permanente = A.Permanente;
            this.Estado = A.Estado;
            this.Expirado = A.Expirado;
            this.CreoRol = A.CreoRol;
        }
    }
    return Aviso;
}());



/***/ }),

/***/ "./src/app/models/Aviso/AvisoCuenta.ts":
/*!*********************************************!*\
  !*** ./src/app/models/Aviso/AvisoCuenta.ts ***!
  \*********************************************/
/*! exports provided: AvisoCuenta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoCuenta", function() { return AvisoCuenta; });
var AvisoCuenta = /** @class */ (function () {
    function AvisoCuenta(C) {
        this.AvisoDestinoRolCuentaId = 0;
        this.Estado = true;
        if (C) {
            this.AvisoDestinoRolCuentaId = this.AvisoDestinoRolCuentaId;
            this.AvisoDestinoRolId = C.AvisoDestinoRolId;
            this.CuentaId = C.CuentaId;
            this.Estado = C.Estado;
        }
    }
    return AvisoCuenta;
}());



/***/ }),

/***/ "./src/app/models/Aviso/AvisoDestino.ts":
/*!**********************************************!*\
  !*** ./src/app/models/Aviso/AvisoDestino.ts ***!
  \**********************************************/
/*! exports provided: AvisoDestino */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoDestino", function() { return AvisoDestino; });
/* harmony import */ var _AvisoRol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvisoRol */ "./src/app/models/Aviso/AvisoRol.ts");

var AvisoDestino = /** @class */ (function () {
    function AvisoDestino(D) {
        this.AvisoDestinoId = 0;
        this.Todo = false;
        this.Roles = [];
        this.Estado = true;
        if (D) {
            this.AvisoDestinoId = D.AvisoDestinoId;
            this.TipoDestinoId = D.TipoDestinoId;
            this.DestinoId = D.DestinoId;
            this.Nombre = D.Nombre;
            this.Todo = D.Todo;
            this.Estado = D.Estado;
            this.Roles = D.Roles.map(function (R) { return new _AvisoRol__WEBPACK_IMPORTED_MODULE_0__["AvisoRol"](R); });
        }
    }
    return AvisoDestino;
}());



/***/ }),

/***/ "./src/app/models/Aviso/AvisoRol.ts":
/*!******************************************!*\
  !*** ./src/app/models/Aviso/AvisoRol.ts ***!
  \******************************************/
/*! exports provided: AvisoRol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoRol", function() { return AvisoRol; });
/* harmony import */ var _AvisoCuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvisoCuenta */ "./src/app/models/Aviso/AvisoCuenta.ts");

var AvisoRol = /** @class */ (function () {
    function AvisoRol(R) {
        this.AvisoDestinoRolId = 0;
        this.Cuentas = [];
        this.Estado = true;
        if (R) {
            this.AvisoDestinoRolId = R.AvisoDestinoRolId;
            this.Descripcion = R.Descripcion;
            this.RolId = R.RolId;
            this.Estado = R.Estado;
            this.Cuentas = R.Cuentas.map(function (C) { return new _AvisoCuenta__WEBPACK_IMPORTED_MODULE_0__["AvisoCuenta"](C); });
        }
    }
    return AvisoRol;
}());



/***/ }),

/***/ "./src/app/models/Compromiso/Compromiso.ts":
/*!*************************************************!*\
  !*** ./src/app/models/Compromiso/Compromiso.ts ***!
  \*************************************************/
/*! exports provided: Compromiso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compromiso", function() { return Compromiso; });
/* harmony import */ var _CompromisoEstudiante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompromisoEstudiante */ "./src/app/models/Compromiso/CompromisoEstudiante.ts");

var Compromiso = /** @class */ (function () {
    function Compromiso(C) {
        if (C) {
            this.CompromisoId = C.CompromisoId;
            this.Descripcion = C.Descripcion;
            this.Estado = C.Estado;
            this.EsBloqueado = C.EsBloqueado;
            if (C.Estudiante) {
                this.Estudiante = new _CompromisoEstudiante__WEBPACK_IMPORTED_MODULE_0__["CompromisoEstudiante"](C.Estudiante);
            }
        }
    }
    return Compromiso;
}());



/***/ }),

/***/ "./src/app/models/Compromiso/CompromisoEstudiante.ts":
/*!***********************************************************!*\
  !*** ./src/app/models/Compromiso/CompromisoEstudiante.ts ***!
  \***********************************************************/
/*! exports provided: CompromisoEstudiante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompromisoEstudiante", function() { return CompromisoEstudiante; });
var CompromisoEstudiante = /** @class */ (function () {
    function CompromisoEstudiante(C) {
        if (C) {
            this.EsAceptado = C.EsAceptado;
            this.FechaAceptacion = new Date(C.FechaAceptacion);
        }
    }
    return CompromisoEstudiante;
}());



/***/ }),

/***/ "./src/app/models/Curso/Curso.ts":
/*!***************************************!*\
  !*** ./src/app/models/Curso/Curso.ts ***!
  \***************************************/
/*! exports provided: CursoBase, Curso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoBase", function() { return CursoBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curso", function() { return Curso; });
/* harmony import */ var _Modalidad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modalidad */ "./src/app/models/Curso/Modalidad.ts");
/* harmony import */ var _Compromiso_Compromiso__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Compromiso/Compromiso */ "./src/app/models/Compromiso/Compromiso.ts");
/* harmony import */ var _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Persona/Estudiante */ "./src/app/models/Persona/Estudiante.ts");
/* harmony import */ var _Persona_Profesor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Persona/Profesor */ "./src/app/models/Persona/Profesor.ts");
/* harmony import */ var _Grupo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Grupo */ "./src/app/models/Curso/Grupo.ts");
/* harmony import */ var _CursoImagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CursoImagen */ "./src/app/models/Curso/CursoImagen.ts");
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






var CursoBase = /** @class */ (function () {
    function CursoBase(C) {
        if (C) {
            this.CursoId = C.CursoId;
            this.Nombre = C.Nombre;
            this.Alias = C.Alias;
            this.AreaAcademicaId = C.AreaAcademicaId;
            this.FechaInicio = new Date(C.FechaInicio);
            this.FechaFin = new Date(C.FechaFin);
            this.ModeloId = C.ModeloId;
            this.EnSIASE = C.EnSIASE;
            this.EsReplicable = C.EsReplicable;
            this.Replicable = C.Replicable;
            this.TipoCursoId = C.TipoCursoId;
        }
    }
    return CursoBase;
}());

var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso(C, CarpetaId) {
        var _this = _super.call(this, C) || this;
        _this.Grupos = [];
        _this.Estudiantes = [];
        _this.Profesores = [];
        _this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_0__["Modalidad"](null);
        if (C) {
            _this.CarpetaId = CarpetaId;
            _this.Grupos = C.Grupos ? C.Grupos.map(function (G) { return new _Grupo__WEBPACK_IMPORTED_MODULE_4__["GrupoEstudiantes"](G); }) : [];
            _this.Estudiantes = C.Estudiantes ? C.Estudiantes.map(function (E) { return new _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_2__["Estudiante"](E); }) : [];
            _this.Profesores = C.Profesores ? C.Profesores.map(function (P) { return new _Persona_Profesor__WEBPACK_IMPORTED_MODULE_3__["Profesor"](P); }) : [];
            _this.TipoCursoId = C.TipoCursoId;
            _this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_0__["Modalidad"](C.Modalidad);
            _this.Compromiso = new _Compromiso_Compromiso__WEBPACK_IMPORTED_MODULE_1__["Compromiso"](C.Compromiso);
            _this.ModalidadId = C.ModalidadId;
            _this.ProgramaId = C.ProgramaId;
            _this.Replicado = C.Replicado;
            _this.Disponible = C.Disponible;
            _this.Color = C.Color;
            _this.Estado = C.Estado;
            _this.Bienvenida = C.Bienvenida;
            _this.Estructura = C.Estructura ? C.Estructura : null;
            _this.Recursos = C.Recursos ? C.Recursos : null;
            _this.Foro = C.Foro ? C.Foro : null;
            _this.Imagen = C.Imagen ? new _CursoImagen__WEBPACK_IMPORTED_MODULE_5__["CursoImagen"](C.Imagen) : null;
            _this.EsReplicable = C.EsReplicable;
            _this.Replicable = C.Replicable;
            _this.RelacionarRubricaCompetencia = C.RelacionarRubricaCompetencia;
            _this.EsMaster = C.EsMaster;
        }
        return _this;
    }
    Object.defineProperty(Curso.prototype, "Profesor", {
        get: function () {
            this._Profesor = this.findProfesor();
            return this._Profesor;
        },
        set: function (P) {
            this._Profesor = P;
        },
        enumerable: true,
        configurable: true
    });
    Curso.prototype.findProfesor = function () {
        var PT = this.Profesores.filter(function (P) { return P.RolId == 2; });
        var PA = this.Profesores.filter(function (P) { return P.RolId == 3; });
        if (PT.length > 0) {
            return PT[0];
        }
        else if (PA.length > 0) {
            return PA[0];
        }
        else {
            return null;
        }
    };
    return Curso;
}(CursoBase));



/***/ }),

/***/ "./src/app/models/Curso/CursoImagen.ts":
/*!*********************************************!*\
  !*** ./src/app/models/Curso/CursoImagen.ts ***!
  \*********************************************/
/*! exports provided: CursoImagen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoImagen", function() { return CursoImagen; });
var CursoImagen = /** @class */ (function () {
    function CursoImagen(I) {
        if (I) {
            this.ImagenId = I.ImagenId;
            this.CarpetaImagen = I.CarpetaImagen;
            this.Nombre = I.Nombre;
            this.NombreBanner = I.NombreBanner;
            this.NombrePreview = I.NombrePreview;
            this.Ruta = I.Ruta;
        }
    }
    return CursoImagen;
}());



/***/ }),

/***/ "./src/app/models/Curso/Grupo.ts":
/*!***************************************!*\
  !*** ./src/app/models/Curso/Grupo.ts ***!
  \***************************************/
/*! exports provided: Grupo, GrupoEstudiantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grupo", function() { return Grupo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoEstudiantes", function() { return GrupoEstudiantes; });
/* harmony import */ var _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Persona/Estudiante */ "./src/app/models/Persona/Estudiante.ts");
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

var Grupo = /** @class */ (function () {
    function Grupo(G) {
        this.GrupoId = 0;
        this.Estado = true;
        if (G) {
            this.GrupoId = G.GrupoId;
            this.CursoId = G.CursoId;
            this.Nombre = G.Nombre;
            this.EnSIASE = G.EnSIASE;
            this.Estado = G.Estado;
            this.EstadoProcesoId = G.EstadoProcesoId;
        }
    }
    return Grupo;
}());

var GrupoEstudiantes = /** @class */ (function (_super) {
    __extends(GrupoEstudiantes, _super);
    function GrupoEstudiantes(G) {
        var _this = _super.call(this, G) || this;
        _this.Estudiantes = [];
        if (G) {
            if (G.Estudiantes) {
                G.Estudiantes.map(function (E) { return E.GrupoId = G.GrupoId; });
                _this.Estudiantes = G.Estudiantes.map(function (E) { return new _Persona_Estudiante__WEBPACK_IMPORTED_MODULE_0__["EstudianteCurso"](E); });
            }
        }
        return _this;
    }
    return GrupoEstudiantes;
}(Grupo));



/***/ }),

/***/ "./src/app/models/Curso/Modalidad.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Curso/Modalidad.ts ***!
  \*******************************************/
/*! exports provided: Modalidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modalidad", function() { return Modalidad; });
var Modalidad = /** @class */ (function () {
    function Modalidad(M) {
        if (M) {
            this.ModalidadId = M.ModalidadId;
            this.Nombre = M.Nombre;
            this.Abreviatura = M.Abreviatura;
            this.Estado = M.Estado;
        }
    }
    return Modalidad;
}());



/***/ }),

/***/ "./src/app/models/Organizacion/Orgaizacion.ts":
/*!****************************************************!*\
  !*** ./src/app/models/Organizacion/Orgaizacion.ts ***!
  \****************************************************/
/*! exports provided: Organizacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organizacion", function() { return Organizacion; });
var Organizacion = /** @class */ (function () {
    function Organizacion(O) {
        this.Nombre = O.Nombre;
        this.NombreCorto = O.NombreCorto;
        this.OrganizacionId = O.OrganizacionId;
        this.Estado = O.Estado;
    }
    return Organizacion;
}());



/***/ }),

/***/ "./src/app/models/Persona/Cuenta.ts":
/*!******************************************!*\
  !*** ./src/app/models/Persona/Cuenta.ts ***!
  \******************************************/
/*! exports provided: Cuenta, CuentaCurso, CuentaPersona, CuentaAreaAcademica, CuentaAreaAcademicaRol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cuenta", function() { return Cuenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaCurso", function() { return CuentaCurso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPersona", function() { return CuentaPersona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaAreaAcademica", function() { return CuentaAreaAcademica; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaAreaAcademicaRol", function() { return CuentaAreaAcademicaRol; });
/* harmony import */ var _Rol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rol */ "./src/app/models/Persona/Rol.ts");
/* harmony import */ var _AreaAcademica_AreaAcademica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AreaAcademica/AreaAcademica */ "./src/app/models/AreaAcademica/AreaAcademica.ts");
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


var Cuenta = /** @class */ (function () {
    function Cuenta(C) {
        this.CuentaId = 0;
        this.Estado = true;
        if (C) {
            this.NombreUsuario = C.NombreUsuario;
            this.EnSIASE = C.EnSIASE;
            this.CuentaId = C.CuentaId;
            this.CorreoUniversitario = C.CorreoUniversitario;
            this.Estado = C.Estado;
        }
    }
    return Cuenta;
}());

var CuentaCurso = /** @class */ (function () {
    function CuentaCurso(CuentaId, Estado) {
        this.CuentaId = CuentaId;
        this.Estado = Estado;
    }
    return CuentaCurso;
}());

var CuentaPersona = /** @class */ (function (_super) {
    __extends(CuentaPersona, _super);
    function CuentaPersona(C) {
        var _this = _super.call(this, C) || this;
        _this.AreasAcademicas = [];
        if (C) {
            _this.AreasAcademicas = C.AreasAcademicas ? C.AreasAcademicas.map(function (AA) { return new CuentaAreaAcademica(AA); }) : [];
            _this.OrganizacionId = C.OrganizacionId;
        }
        return _this;
    }
    return CuentaPersona;
}(Cuenta));

var CuentaAreaAcademica = /** @class */ (function () {
    function CuentaAreaAcademica(AA) {
        this.CuentaAreaAcademicaId = 0;
        this.Roles = [];
        if (AA) {
            this.CuentaAreaAcademicaId = AA.CuentaAreaAcademicaId;
            this.AreaAcademica = AA.AreaAcademica ? new _AreaAcademica_AreaAcademica__WEBPACK_IMPORTED_MODULE_1__["AreaAcademica"](AA.AreaAcademica) : null;
            this.AreaAcademicaId = AA.AreaAcademica ? AA.AreaAcademica.AreaAcademicaId : AA.AreaAcademicaId;
            this.Descripcion = AA.AreaAcademica ? AA.AreaAcademica.Nombre : AA.Descripcion;
            this.EsBloqueado = AA.EsBloqueado;
            this.Estado = AA.Estado;
            this.Roles = AA.Roles.map(function (R) { return new CuentaAreaAcademicaRol(R, AA.CuentaAreaAcademicaId); });
        }
    }
    return CuentaAreaAcademica;
}());

var CuentaAreaAcademicaRol = /** @class */ (function (_super) {
    __extends(CuentaAreaAcademicaRol, _super);
    function CuentaAreaAcademicaRol(R, AreaAcademicaId) {
        var _this = _super.call(this, R) || this;
        if (R) {
            _this.AreaAcademicaId = AreaAcademicaId;
            _this.EsRolPrincipal = R.EsRolPrincipal;
            _this.Estado = R.Estado;
        }
        return _this;
    }
    return CuentaAreaAcademicaRol;
}(_Rol__WEBPACK_IMPORTED_MODULE_0__["RolBase"]));



/***/ }),

/***/ "./src/app/models/Persona/Estudiante.ts":
/*!**********************************************!*\
  !*** ./src/app/models/Persona/Estudiante.ts ***!
  \**********************************************/
/*! exports provided: Estudiante, EstudianteCurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estudiante", function() { return Estudiante; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudianteCurso", function() { return EstudianteCurso; });
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Persona */ "./src/app/models/Persona/Persona.ts");
/* harmony import */ var _Compromiso_CompromisoEstudiante__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Compromiso/CompromisoEstudiante */ "./src/app/models/Compromiso/CompromisoEstudiante.ts");
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


var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(E, Order) {
        var _this = this;
        if (E) {
            _this = _super.call(this, E) || this;
            _this.NombreUsuario = E.NombreUsuario;
            _this.EnSIASE = E.EnSIASE;
            _this.CuentaId = E.CuentaId;
            _this.CorreoUniversitario = E.CorreoUniversitario;
            _this.Estado = E.Estado;
            _this.GrupoId = E.GrupoId;
            if (Order)
                _this.NombreCompleto(Order);
        }
        return _this;
    }
    return Estudiante;
}(_Persona__WEBPACK_IMPORTED_MODULE_0__["PersonaBase"]));

var EstudianteCurso = /** @class */ (function (_super) {
    __extends(EstudianteCurso, _super);
    function EstudianteCurso(E) {
        var _this = _super.call(this, E) || this;
        _this.EsBloqueado = false;
        if (E) {
            _this.EsBloqueado = E.EsBloqueado;
            _this.Compromiso = new _Compromiso_CompromisoEstudiante__WEBPACK_IMPORTED_MODULE_1__["CompromisoEstudiante"](E.Compromiso);
        }
        return _this;
    }
    return EstudianteCurso;
}(Estudiante));



/***/ }),

/***/ "./src/app/models/Persona/Perfil.ts":
/*!******************************************!*\
  !*** ./src/app/models/Persona/Perfil.ts ***!
  \******************************************/
/*! exports provided: Perfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfil", function() { return Perfil; });
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Persona */ "./src/app/models/Persona/Persona.ts");
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuenta */ "./src/app/models/Persona/Cuenta.ts");


var Perfil = /** @class */ (function () {
    function Perfil(P) {
        this.AreasAcademicas = [];
        console.log(P);
        this.Persona = new _Persona__WEBPACK_IMPORTED_MODULE_0__["Persona"](P.Persona);
        this.Cuenta = new _Cuenta__WEBPACK_IMPORTED_MODULE_1__["CuentaPersona"](P.Cuenta);
        this.AreasAcademicas = P.AreasAcademicas.map(function (AA) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_1__["CuentaAreaAcademica"](AA); });
        this.AreaAcademica = P.AreaAcademica ? P.AreaAcademica : this.AreaAcademicaRolPrincipal();
        this.Rol = P.Rol ? P.Rol : this.RolPrincipal();
    }
    Perfil.prototype.AreaAcademicaRolPrincipal = function () {
        console.log(this.AreasAcademicas);
        var AreaAcademicaRolPrincipal = null;
        this.AreasAcademicas.forEach(function (AA) {
            AA.Roles.forEach(function (R) {
                if (R.EsRolPrincipal) {
                    AreaAcademicaRolPrincipal = AA;
                }
            });
        });
        if (!AreaAcademicaRolPrincipal)
            AreaAcademicaRolPrincipal = this.AreasAcademicas[0];
        return AreaAcademicaRolPrincipal;
    };
    Perfil.prototype.RolesAreaAcademica = function (AreaAcademicaId) {
        return this.AreaAcademica.Roles;
    };
    Perfil.prototype.Roles = function () {
        return this.AreaAcademica.Roles;
    };
    Perfil.prototype.RolPrincipal = function () {
        return this.AreaAcademica.Roles.find(function (R) { return R.EsRolPrincipal === true; });
    };
    return Perfil;
}());



/***/ }),

/***/ "./src/app/models/Persona/Persona.ts":
/*!*******************************************!*\
  !*** ./src/app/models/Persona/Persona.ts ***!
  \*******************************************/
/*! exports provided: PersonaBase, Persona, PersonaCuentas, PersonaCuenta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaBase", function() { return PersonaBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCuentas", function() { return PersonaCuentas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCuenta", function() { return PersonaCuenta; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/models/Persona/Cuenta.ts");
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

var PersonaBase = /** @class */ (function () {
    function PersonaBase(P) {
        if (P) {
            this.Nombre = P.Nombre;
            this.ApellidoPaterno = P.ApellidoPaterno;
            this.ApellidoMaterno = P.ApellidoMaterno;
            this.CorreoAdicional = P.CorreoAdicional;
            this.EnSIASE = P.EnSIASE;
            this.NombreCompleto('PMN');
        }
    }
    PersonaBase.prototype.NombreCompleto = function (Orden) {
        switch (Orden) {
            case 'NPM':
                this._NombreCompleto = this.Nombre + " " + this.ApellidoPaterno + " " + this.ApellidoMaterno;
                break;
            case 'NP':
                this._NombreCompleto = this.Nombre + " " + this.ApellidoPaterno;
                break;
            case 'PMN':
                this._NombreCompleto = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
            case 'PN':
                this._NombreCompleto = this.ApellidoPaterno + " " + this.Nombre;
                break;
            default:
                this._NombreCompleto = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
        }
        return this._NombreCompleto;
    };
    return PersonaBase;
}());

var Persona = /** @class */ (function (_super) {
    __extends(Persona, _super);
    function Persona(P) {
        var _this = _super.call(this, P) || this;
        _this.PersonaId = 0;
        _this.Estado = true;
        if (P) {
            _this.PersonaId = P.PersonaId;
            _this.CURP = P.CURP;
            _this.Estado = P.Estado;
        }
        return _this;
    }
    return Persona;
}(PersonaBase));

var PersonaCuentas = /** @class */ (function (_super) {
    __extends(PersonaCuentas, _super);
    function PersonaCuentas(P) {
        var _this = _super.call(this, P) || this;
        _this.Cuentas = [];
        if (P) {
            _this.Cuentas = P.Cuentas ? P.Cuentas.map(function (C) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["CuentaPersona"](C); }) : [];
        }
        return _this;
    }
    return PersonaCuentas;
}(Persona));

var PersonaCuenta = /** @class */ (function (_super) {
    __extends(PersonaCuenta, _super);
    function PersonaCuenta(P) {
        var _this = this;
        if (P) {
            _this = _super.call(this, P) || this;
            _this.Nombre = P.Nombre;
            _this.ApellidoPaterno = P.ApellidoPaterno;
            _this.ApellidoMaterno = P.ApellidoMaterno;
            _this.CorreoAdicional = P.CorreoAdicional;
            _this.EnSIASE = P.EnSIASE;
            _this._NombreCompleto = _this.NombreCompleto('PMN');
        }
        return _this;
    }
    PersonaCuenta.prototype.NombreCompleto = function (Orden) {
        var Name;
        switch (Orden) {
            case 'NPM':
                Name = this.Nombre + " " + this.ApellidoPaterno + " " + this.ApellidoMaterno;
                break;
            case 'NP':
                Name = this.Nombre + " " + this.ApellidoPaterno;
                break;
            case 'PMN':
                Name = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
            case 'PN':
                Name = this.ApellidoPaterno + " " + this.Nombre;
                break;
            default:
                Name = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
        }
        this._NombreCompleto = Name;
        return Name;
    };
    return PersonaCuenta;
}(_Cuenta__WEBPACK_IMPORTED_MODULE_0__["Cuenta"]));



/***/ }),

/***/ "./src/app/models/Persona/Profesor.ts":
/*!********************************************!*\
  !*** ./src/app/models/Persona/Profesor.ts ***!
  \********************************************/
/*! exports provided: Profesor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profesor", function() { return Profesor; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/models/Persona/Cuenta.ts");
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

var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(P) {
        var _this = _super.call(this, P) || this;
        if (P) {
            _this.CuentaId = P.CuentaId;
            _this.Nombre = P.Nombre;
            _this.ApellidoPaterno = P.ApellidoPaterno;
            _this.ApellidoMaterno = P.ApellidoMaterno;
            _this.CorreoAdicional = P.CorreoAdicional;
            _this.EnSIASE = P.EnSIASE;
            _this.RolId = P.RolId ? P.RolId : null;
        }
        return _this;
    }
    Profesor.prototype.NombreCompleto = function (Orden) {
        switch (Orden) {
            case 'NPM':
                this._NombreCompleto = this.Nombre + " " + this.ApellidoPaterno + " " + this.ApellidoMaterno;
                break;
            case 'NP':
                this._NombreCompleto = this.Nombre + " " + this.ApellidoPaterno;
                break;
            case 'PMN':
                this._NombreCompleto = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
            case 'PN':
                this._NombreCompleto = this.ApellidoPaterno + " " + this.Nombre;
                break;
            default:
                this._NombreCompleto = this.ApellidoPaterno + " " + this.ApellidoMaterno + " " + this.Nombre;
                break;
        }
        return this._NombreCompleto;
    };
    return Profesor;
}(_Cuenta__WEBPACK_IMPORTED_MODULE_0__["Cuenta"]));



/***/ }),

/***/ "./src/app/models/Persona/Rol.ts":
/*!***************************************!*\
  !*** ./src/app/models/Persona/Rol.ts ***!
  \***************************************/
/*! exports provided: RolBase, Rol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolBase", function() { return RolBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rol", function() { return Rol; });
var RolBase = /** @class */ (function () {
    function RolBase(R) {
        this.RolId = R.RolId;
        this.Descripcion = R.Descripcion;
    }
    return RolBase;
}());

var Rol = /** @class */ (function () {
    function Rol(R, D, E, N) {
        this.RolId = 0;
        if (R) {
            this.RolId = R.hasOwnProperty('RolId') ? R.RolId : R;
            this.Descripcion = D ? D : R.Descripcion;
            this.Estado = E ? E : R.Estado;
            this.Nivel = N ? N : R.Nivel;
        }
    }
    return Rol;
}());



/***/ }),

/***/ "./src/app/models/Sesion/Sesion.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Sesion/Sesion.ts ***!
  \*****************************************/
/*! exports provided: Sesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sesion", function() { return Sesion; });
var Sesion = /** @class */ (function () {
    function Sesion(S) {
        if (S) {
            this.Token = S.Token;
            this.FechaExpiracion = S.TiempoRestante;
            this.TokenExpirado = S.TokenExpirado;
            this.FechaInicio = new Date();
            this.AreaAcademicaId = S.AreaAcademicaId;
            this.RolId = S.RolId;
            if (S.Tiempo) {
                this.Tiempo = S.Tiempo;
                this.TiempoSistema = S.Tiempo.TiempoSistema;
                this.TiempoRestante = S.Tiempo.Restante;
            }
        }
    }
    Object.defineProperty(Sesion.prototype, "TiempoSistema", {
        get: function () {
            return this._TiempoSistema;
        },
        /*
        public set Token(Token){
          this._Token = Token;
        }
        public get Token(){
          return this._Token;
        }
        */
        /*
        public get TokenExpirado() {
          return this._NFechaExpiracion > this._NTiempoSistema ? true : false ;
        }*/
        set: function (T) {
            this._TiempoSistema = new Date(T);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sesion.prototype, "FechaExpiracion", {
        get: function () {
            return this._FechaExpiracion;
        },
        set: function (T) {
            this._FechaExpiracion = new Date((new Date(this.FechaInicio).getSeconds() + T) * 1000);
            //this._NFechaExpiracion = new Date(new Date().getSeconds() + Tiempo);
        },
        enumerable: true,
        configurable: true
    });
    return Sesion;
}());



/***/ }),

/***/ "./src/app/models/Sesion/SesionStorage.ts":
/*!************************************************!*\
  !*** ./src/app/models/Sesion/SesionStorage.ts ***!
  \************************************************/
/*! exports provided: SesionStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionStorage", function() { return SesionStorage; });
/* harmony import */ var _Sesion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sesion */ "./src/app/models/Sesion/Sesion.ts");
/* harmony import */ var _Persona_Perfil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Persona/Perfil */ "./src/app/models/Persona/Perfil.ts");
/* harmony import */ var _Curso_Curso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Curso/Curso */ "./src/app/models/Curso/Curso.ts");



var SesionStorage = /** @class */ (function () {
    function SesionStorage(SS) {
        if (SS) {
            this.Sesion = new _Sesion__WEBPACK_IMPORTED_MODULE_0__["Sesion"](SS.Sesion);
            this.Perfil = SS.Perfil ? new _Persona_Perfil__WEBPACK_IMPORTED_MODULE_1__["Perfil"](SS.Perfil) : null;
            this.Curso = SS.Curso ? new _Curso_Curso__WEBPACK_IMPORTED_MODULE_2__["Curso"](SS.Curso) : null;
        }
    }
    return SesionStorage;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_CustomClass_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/CustomClass/material-paginator */ "./src/app/shared/CustomClass/material-paginator.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {DragDropModule} from '@angular/cdk/drag-drop';

var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"]
];
var providers = [
    {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorIntl"],
        useClass: _shared_CustomClass_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntCustom"]
    }
];
var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: providers,
            imports: modules,
            exports: modules,
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/pruebas/MicrosoftGraph/Settings.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pruebas/MicrosoftGraph/Settings.ts ***!
  \************************************************************/
/*! exports provided: OAuthSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuthSettings", function() { return OAuthSettings; });
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");

var OAuthSettings = {
    //appId: '2b78117c-ce71-4272-9737-908076e487e9',
    //appId: '4d943e68-274c-4e93-961d-b9260ba37b4c',
    //appId: 'cdde2a21-14df-47e5-894c-5fa51901f7f9',
    //appId: '23d86c22-7a26-43c1-a2b1-877776f0e8c5',
    //Nexus7Graph nexus.uanl@outlook.com
    appId: 'd997adeb-b94d-4ca5-b7c4-e5a20fce06cc',
    LogoutRedirectUri: src_app_shared_constants__WEBPACK_IMPORTED_MODULE_0__["CONSTANTS"].URL + '/#/App',
    //LogoutRedirectUri:'https://web.archive.org/web/20240606034029/http://localhost:4200/#/Redireccionando',
    tenant: 'uanl.edu.mx',
    scopes: [
        "user.read",
        "Team.ReadBasic.All",
        //"./default",
        //"Directory.ReadWrite.All",
        //"Group.ReadWrite.All",
        //"Directory.AccessAsUser.All",
        //"calendars.read",
        "files.read.all",
    ]
};


/***/ }),

/***/ "./src/app/modules/shared/Pipes.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/shared/Pipes.module.ts ***!
  \************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _pipes_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../pipes/highlight-text.pipe */ "./src/app/pipes/highlight-text.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/safe-url */ "./src/app/pipes/safe-url.ts");
/* harmony import */ var src_app_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/unique.pipe */ "./src/app/pipes/unique.pipe.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js");
/* harmony import */ var src_app_pipes_crypto_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes/crypto.pipe */ "./src/app/pipes/crypto.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
            ],
            declarations: [
                src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHTMLPipe"],
                src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_4__["SafeURLPipe"],
                src_app_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_5__["UniquePipe"],
                _pipes_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightTextPipe"],
                src_app_pipes_crypto_pipe__WEBPACK_IMPORTED_MODULE_9__["CryptoPipe"]
            ],
            exports: [
                src_app_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeHTMLPipe"],
                src_app_pipes_safe_url__WEBPACK_IMPORTED_MODULE_4__["SafeURLPipe"],
                src_app_pipes_unique_pipe__WEBPACK_IMPORTED_MODULE_5__["UniquePipe"],
                _pipes_highlight_text_pipe__WEBPACK_IMPORTED_MODULE_0__["HighlightTextPipe"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_8__["NgPipesModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                src_app_pipes_crypto_pipe__WEBPACK_IMPORTED_MODULE_9__["CryptoPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/widgets.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/shared/widgets.module.ts ***!
  \**************************************************/
/*! exports provided: SharedWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedWidgetModule", function() { return SharedWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ecodev/fab-speed-dial */ "./node_modules/@ecodev/fab-speed-dial/esm5/ecodev-fab-speed-dial.js");
/* harmony import */ var angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-datetimepicker */ "./node_modules/angular2-datetimepicker/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-moment */ "./node_modules/angular2-moment/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm2015/ngx-order-pipe.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_sortable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-sortable */ "./node_modules/ngx-sortable/dist/index.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-doc-viewer */ "./node_modules/ngx-doc-viewer/fesm5/ngx-doc-viewer.js");
/* harmony import */ var _uiowa_digit_only__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @uiowa/digit-only */ "./node_modules/@uiowa/digit-only/fesm5/uiowa-digit-only.js");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-progress-bar */ "./node_modules/angular-progress-bar/fesm5/angular-progress-bar.js");
/* harmony import */ var angular_crumbs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-crumbs */ "./node_modules/angular-crumbs/index.js");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/fesm5/ngx-drag-drop.js");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-scroll-event */ "./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_components_ui_timer_timer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/components/ui/timer/timer.component */ "./src/app/components/ui/timer/timer.component.ts");
/* harmony import */ var _Pipes_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Pipes.module */ "./src/app/modules/shared/Pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* Material Speed Dial Menu https://github.com/Ecodev/fab-speed-dial */

/* DateTimePicker https://www.npmjs.com/package/angular2-datetimepicker */

// Moment

//Files Drop https://georgipeltekov.github.io/

// Ngx Editor

// Ngx Color Picker

// Ngx Order

// Ngx Filter

// NgxPipes https://www.npmjs.com/package/ngx-pipes#installation

//Ng-click-outside

//Chart JS

//Froala EDITOR

//Angular Calendar


//Angular Drag and Drop elements

// NgxSortable

// Ngx Countdown

// ng6-breadcrumbs
//import {BreadcrumbsModule} from "ng6-breadcrumbs";
// ngx-doc-viewer

// DigitOnly Input Text

// Ngx Export As
//import { ExportAsModule } from 'ngx-export-as';
//Ngx Scrollbar
//import { NgScrollbarModule } from 'ngx-scrollbar';
//Angular Progress Bar

//Angular Breadcrumbs

//import { BreadcrumbsModule } from "ng2-breadcrumbs";
//Angular Material File Input
//import { MaterialFileInputModule } from 'ngx-material-file-input';
// Ngx Drag Drop https://www.npmjs.com/package/ngx-drag-drop

// https://www.npmjs.com/package/ngx-scroll-event

// https://www.npmjs.com/package/ngx-mat-select-search



var _declarations = [];
var _imports = [];
var _exports = [];
var SharedWidgetModule = /** @class */ (function () {
    function SharedWidgetModule() {
    }
    SharedWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                src_app_components_ui_timer_timer_component__WEBPACK_IMPORTED_MODULE_25__["TimerComponent"],
            ],
            imports: [
                _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_1__["EcoFabSpeedDialModule"],
                angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_2__["AngularDateTimePickerModule"],
                angular2_moment__WEBPACK_IMPORTED_MODULE_3__["MomentModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_5__["NgxEditorModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_9__["NgPipesModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaEditorModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaViewModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_16__["NgxSortableModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_17__["CountdownModule"],
                // BreadcrumbsModule,
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_18__["NgxDocViewerModule"],
                _uiowa_digit_only__WEBPACK_IMPORTED_MODULE_19__["DigitOnlyModule"],
                // ExportAsModule,
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__["NgDragDropModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"].forRoot({ provide: angular_calendar__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_14__["adapterFactory"] }),
                angular_crumbs__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__["ProgressBarModule"],
                // MaterialFileInputModule,
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DndModule"],
                ngx_scroll_event__WEBPACK_IMPORTED_MODULE_23__["ScrollEventModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_24__["NgxMatSelectSearchModule"],
                _Pipes_module__WEBPACK_IMPORTED_MODULE_26__["PipesModule"]
            ],
            exports: [
                _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_1__["EcoFabSpeedDialModule"],
                angular2_datetimepicker__WEBPACK_IMPORTED_MODULE_2__["AngularDateTimePickerModule"],
                angular2_moment__WEBPACK_IMPORTED_MODULE_3__["MomentModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_4__["FileDropModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_5__["NgxEditorModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_9__["NgPipesModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaEditorModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaViewModule"],
                ngx_sortable__WEBPACK_IMPORTED_MODULE_16__["NgxSortableModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_17__["CountdownModule"],
                // BreadcrumbsModule,
                ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_18__["NgxDocViewerModule"],
                _uiowa_digit_only__WEBPACK_IMPORTED_MODULE_19__["DigitOnlyModule"],
                // ExportAsModule,
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_15__["NgDragDropModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"],
                angular_crumbs__WEBPACK_IMPORTED_MODULE_21__["BreadcrumbModule"],
                angular_progress_bar__WEBPACK_IMPORTED_MODULE_20__["ProgressBarModule"],
                // MaterialFileInputModule,
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_22__["DndModule"],
                ngx_scroll_event__WEBPACK_IMPORTED_MODULE_23__["ScrollEventModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_24__["NgxMatSelectSearchModule"]
            ]
        })
    ], SharedWidgetModule);
    return SharedWidgetModule;
}());



/***/ }),

/***/ "./src/app/pipes/crypto.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/crypto.pipe.ts ***!
  \**************************************/
/*! exports provided: CryptoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoPipe", function() { return CryptoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Utils_crypto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Utils/crypto.service */ "./src/app/services/Utils/crypto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptoPipe = /** @class */ (function () {
    function CryptoPipe(cryptoService) {
        this.cryptoService = cryptoService;
    }
    CryptoPipe.prototype.transform = function (value, args) {
        return this.cryptoService.encrypt(value.toString());
    };
    CryptoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'crypto'
        }),
        __metadata("design:paramtypes", [_services_Utils_crypto_service__WEBPACK_IMPORTED_MODULE_1__["CryptoService"]])
    ], CryptoPipe);
    return CryptoPipe;
}());



/***/ }),

/***/ "./src/app/pipes/highlight-text.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/highlight-text.pipe.ts ***!
  \**********************************************/
/*! exports provided: HighlightTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightTextPipe", function() { return HighlightTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HighlightTextPipe = /** @class */ (function () {
    function HighlightTextPipe() {
    }
    HighlightTextPipe.prototype.transform = function (value, args, type) {
        if (!args)
            return value;
        if (type === 'full') {
            var re = new RegExp("\\b(" + args + "\\b)", 'igm');
            value = value.replace(re, '<span class="highlighted-text">$1</span>');
        }
        else {
            var re = new RegExp(args, 'igm');
            value = value.replace(re, '<span class="highlighted-text">$&</span>');
        }
        return value;
    };
    HighlightTextPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'highlightText'
        })
    ], HighlightTextPipe);
    return HighlightTextPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafeHTMLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHTMLPipe", function() { return SafeHTMLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHTMLPipe = /** @class */ (function () {
    function SafeHTMLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHTMLPipe.prototype.transform = function (html) {
        var result = this.sanitizer.bypassSecurityTrustHtml(html);
        return result;
    };
    SafeHTMLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeHTML'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHTMLPipe);
    return SafeHTMLPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/safe-url.ts ***!
  \***********************************/
/*! exports provided: SafeURLPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeURLPipe", function() { return SafeURLPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeURLPipe = /** @class */ (function () {
    function SafeURLPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeURLPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeURLPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeURL' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeURLPipe);
    return SafeURLPipe;
}());



/***/ }),

/***/ "./src/app/pipes/unique.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/unique.pipe.ts ***!
  \**************************************/
/*! exports provided: UniquePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UniquePipe = /** @class */ (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        var uniqueArray = value.filter(function (el, index, array) {
            return array.indexOf(el) == index;
        });
        return uniqueArray;
    };
    UniquePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unique',
            pure: false
        })
    ], UniquePipe);
    return UniquePipe;
}());



/***/ }),

/***/ "./src/app/services/Aviso/Aviso.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Aviso/Aviso.service.ts ***!
  \*************************************************/
/*! exports provided: AvisoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoService", function() { return AvisoService; });
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


var TIPO_DESTINO = [
    { TipoDestinoId: 1, Nombre: "Área Académica" },
    { TipoDestinoId: 2, Nombre: "Unidad de Aprendizaje" },
];
var AvisoService = /** @class */ (function () {
    function AvisoService(API) {
        this.API = API;
        this.Dominio = 'Aviso';
        this._TiposDestino = TIPO_DESTINO;
    }
    Object.defineProperty(AvisoService.prototype, "TiposDestino", {
        get: function () {
            return this._TiposDestino;
        },
        enumerable: true,
        configurable: true
    });
    /****************** API ****************/
    AvisoService.prototype.ConsultarAvisos = function (CursoId, Asignados) {
        return this.API.POST(this.Dominio, 'ConsultarAvisos', {
            CursoId: CursoId,
            Asignados: Asignados
        });
    };
    AvisoService.prototype.ConsultarAviso = function (AvisoId) {
        return this.API.POST(this.Dominio, 'ConsultarAviso', {
            AvisoId: AvisoId
        });
    };
    AvisoService.prototype.ActualizarAvisoCurso = function (Aviso) {
        return this.API.POST(this.Dominio, 'ActualizarAvisoCurso', {
            Aviso: Aviso
        });
    };
    AvisoService.prototype.ActualizarAvisoAreaAcademica = function (Aviso) {
        return this.API.POST(this.Dominio, 'ActualizarAvisoAreaAcademica', {
            Aviso: Aviso
        });
    };
    AvisoService.prototype.EliminarAvisoCurso = function (AvisoId) {
        return this.API.POST(this.Dominio, 'EliminarAvisoCurso', {
            AvisoId: AvisoId
        });
    };
    AvisoService.prototype.EliminarAvisoAreaAcademica = function (AvisoId) {
        return this.API.POST(this.Dominio, 'EliminarAvisoAreaAcademica', {
            AvisoId: AvisoId
        });
    };
    AvisoService.prototype.CopiarAviso = function (Aviso, CursoId, AvisoOrigenId) {
        return this.API.POST(this.Dominio, 'Copiaraviso', {
            Aviso: Aviso,
            CursoId: CursoId,
            AvisoOrigenId: AvisoOrigenId
        });
    };
    /***************** Functions *********************/
    AvisoService.prototype.TipoDestino = function (id) { return this.TiposDestino.find(function (T) { return T.TipoDestinoId === id; }); };
    AvisoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"]])
    ], AvisoService);
    return AvisoService;
}());



/***/ }),

/***/ "./src/app/services/Rol/Rol.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/Rol/Rol.service.ts ***!
  \*********************************************/
/*! exports provided: RolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolService", function() { return RolService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Persona/Rol */ "./src/app/models/Persona/Rol.ts");
/* harmony import */ var _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
/* harmony import */ var _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RolService = /** @class */ (function () {
    function RolService(SesionSVC, api, http) {
        this.SesionSVC = SesionSVC;
        this.api = api;
        this.http = http;
        this.domain = '';
        this._Roles = [
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 1, Estado: true, Descripcion: "Administrador de Área Académica" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 2, Estado: true, Descripcion: "Profesor" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 3, Estado: true, Descripcion: "Profesor Asistente" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 4, Estado: true, Descripcion: "Observador" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 5, Estado: true, Descripcion: "Estudiante" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 6, Estado: true, Descripcion: "Administrador General" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 7, Estado: false, Descripcion: "Asegurador de Calidad" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 8, Estado: false, Descripcion: "AdministrativoM" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 9, Estado: false, Descripcion: "Invitado" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 10, Estado: true, Descripcion: "Asistente Administrador" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 11, Estado: true, Descripcion: "Practicante de Administrador" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 12, Estado: true, Descripcion: "Auditor" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 13, Estado: true, Descripcion: "DENMS" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 14, Estado: true, Descripcion: "Seguimiento Académico" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 15, Estado: false, Descripcion: "Administrador suplente" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 16, Estado: false, Descripcion: "Administrador suplente" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 17, Estado: true, Descripcion: "Desempeño NEyM" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 18, Estado: true, Descripcion: "Indicadores Central" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 19, Estado: true, Descripcion: "Indicadores Auditoria" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 20, Estado: true, Descripcion: "Indicadores Director Dependencia" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 21, Estado: true, Descripcion: "Indicadores Coordinador EAD" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 22, Estado: true, Descripcion: "Indicadores Licenciatura" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 23, Estado: true, Descripcion: "Indicadores Preparatoria" }),
            new src_app_models_Persona_Rol__WEBPACK_IMPORTED_MODULE_2__["Rol"]({ RolId: 24, Estado: true, Descripcion: "Indicadores Posgrado" }),
        ];
    }
    Object.defineProperty(RolService.prototype, "Roles", {
        get: function () { return this._Roles; },
        set: function (R) { this._Roles = R; },
        enumerable: true,
        configurable: true
    });
    RolService.prototype.getRol = function (id) {
        return this._Roles.find(function (R) { return R.RolId === id; });
    };
    RolService.prototype.CatalogoRoles = function (RolId) {
        switch (RolId) {
            case 1: return this._Roles.filter(function (R) { return R.RolId == 10 || (R.RolId > 1 && R.RolId < 6); });
            case 2: return this._Roles.filter(function (R) { return R.RolId == 10 || (R.RolId > 1 && R.RolId < 6); });
            case 3: return this._Roles.filter(function (R) { return R.RolId == 10 || (R.RolId > 1 && R.RolId < 6); });
            case 4: return this._Roles.filter(function (R) { return R.RolId == 10 || (R.RolId > 1 && R.RolId < 6); });
            case 5: return this._Roles.filter(function (R) { return R.RolId == 10 || (R.RolId > 1 && R.RolId < 6); });
            case 6: return this._Roles;
        }
    };
    RolService.prototype.getCatalogoRoles = function (Rol) {
        return this._Roles.filter(function (R) { return Rol.includes(R.RolId); });
    };
    RolService.prototype.ObtenerRoles = function () {
        console.log(this.SesionSVC.Rol);
        return this._Roles;
    };
    RolService.prototype.ConsultarRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Obtener Roles');
                        return [4 /*yield*/, this.api.post('Rol', 'ConsultarRoles', {}).toPromise()];
                    case 1:
                        roles = _a.sent();
                        console.log(roles);
                        return [2 /*return*/];
                }
            });
        });
    };
    RolService.prototype.isRolIndicadores = function () {
        console.log(this.SesionSVC.Rol);
        console.log(this.SesionSVC.Perfil.Rol);
        var RolesIndicaroes = [18, 19, 20, 21, 22, 23];
        return RolesIndicaroes.includes(this.SesionSVC.Perfil.Rol.RolId);
    };
    RolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_4__["SesionService"],
            _api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_3__["ApiHttpService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RolService);
    return RolService;
}());



/***/ }),

/***/ "./src/app/services/Seguridad/Seguridad.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/Seguridad/Seguridad.service.ts ***!
  \*********************************************************/
/*! exports provided: SeguridadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadService", function() { return SeguridadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-http/ApiHttp.service */ "./src/app/services/api-http/ApiHttp.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SeguridadService = /** @class */ (function () {
    function SeguridadService(httpClient, handler, API, dialog, SesionSVC) {
        this.httpClient = httpClient;
        this.handler = handler;
        this.API = API;
        this.dialog = dialog;
        this.SesionSVC = SesionSVC;
        this.Dominio = 'Seguridad';
        this.DialogLoginOpen = false;
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"](handler);
    }
    /*************************** Sesion ******************************/
    SeguridadService.prototype.getIP = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get("https://web.archive.org/web/20240606034029/http://148.234.13.16:81/AssistantApi/ClientInfo").toPromise()
                            .then(function (result) {
                            console.log(result);
                            return result;
                        })
                            .catch(function (error) {
                            console.log(error);
                            return error;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SeguridadService.prototype.IniciarSesion = function (data, imperative) {
        //let ip: any = this.getIP().then((result: any) => result).catch(error => error);
        //console.log(ip);
        /*
        return this.API.POST(this.Dominio, 'CrearSesion', {}, Headers);
        */
        var _this = this;
        var _HttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                NombreUsuario: data.usuario,
                Password: data.password,
                Imperative: imperative.toString(),
                OrganizacionId: '1',
                SistemaId: '1',
                ClienteIp: '0.0.0.0'
            }),
        };
        this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"](this.handler);
        return this.httpClient.post(this.API.GetUrlApiEndpoint(this.Dominio, 'CrearSesion'), data, _HttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return _this.API.SuccessCallback(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.API.ErrorCallback(error); }));
    };
    SeguridadService.prototype.ReactivarSesion = function (data, imperative) {
        var Headers = [
            { 'NombreUsuario': data.usuario },
            { 'Password': data.password },
            { 'Imperative': imperative },
            { 'OrganizacionId': '1' },
            { 'SistemaId': '1' }
        ];
        return this.API.POST(this.Dominio, 'ReactivarSesion', {}, Headers);
    };
    SeguridadService.prototype.ExtenderSesion = function (Token) {
        var Headers = [
            {
                'Token': Token,
                'SistemaId': '1'
            }
        ];
        return this.API.POST(this.Dominio, 'ExtenderSesion', {}, Headers);
    };
    SeguridadService.prototype.TerminarSesion = function () {
        return this.API.POST(this.Dominio, 'FinalizarSesion', {});
    };
    SeguridadService.prototype.IniciarSesionSIASE = function (Control, Usuario, NombreUsuario, TipoClave) {
        var Headers = {
            Control: Control,
            ClienteIp: '0.0.0.0'
            //UsuarioSIASE: Usuario || null,
            //NombreUsuarioSIASE: NombreUsuario || null
        };
        if (Usuario)
            Headers['Usuario'] = Usuario;
        if (NombreUsuario)
            Headers['UsuarioClave'] = NombreUsuario;
        if (TipoClave)
            Headers['TipoClave'] = TipoClave;
        console.log(Control);
        return this.API.POST(this.Dominio, "CrearSesionSIASE", {}, Headers);
    };
    /***************************** Perfil  *******************************/
    SeguridadService.prototype.ConsultarPerfil = function (Token) {
        var Headers = {
            Token: Token,
        };
        return this.API.POST(this.Dominio, "ConsultarPerfil", {}, Headers);
    };
    SeguridadService.prototype.ValidarSolicitudCambioContrasena = function (Solicitud) {
        var Headers = {
            Solicitud: Solicitud,
        };
        console.log(Headers);
        return this.API.POST(this.Dominio, "ValidarSolicitudCambioContrasena", {}, Headers);
    };
    SeguridadService.prototype.SolicitarCambioContrasena = function (data) {
        var Headers = {
            NombreUsuario: data.NombreUsuario.toString(),
            Correo: data.Correo.toString(),
            OrganizacionId: data.OrganizacionId.toString(),
        };
        console.log(Headers);
        return this.API.POST(this.Dominio, "SolicitarCambioContrasena", {}, Headers);
    };
    SeguridadService.prototype.CambiarContrasena = function (data) {
        var Headers = {
            Solicitud: data.token,
            Contrasena: data.password,
        };
        return this.API.POST(this.Dominio, "CambiarContrasena", {}, Headers);
    };
    SeguridadService.prototype.CambiarRol = function (Token, AreaAcademicaId, RolId) {
        var Headers = {
            Token: Token,
            RolId: RolId.toString(),
            AreaAcademicaId: AreaAcademicaId.toString()
        };
        console.log(Headers);
        return this.API.POST(this.Dominio, "CambiarRol", {}, Headers);
    };
    /***************************** Dialog Sesion ********************************/
    SeguridadService.prototype.TokenExpirado = function () {
        return this.OpenDialogIniciarSesion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { if (data.SesionInit)
            return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    SeguridadService.prototype.OpenDialogIniciarSesion = function () {
        var _this = this;
        if (this.DialogLogin)
            this.DialogLogin.close();
        this.DialogLogin = this.dialog.open(src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"]);
        this.DialogLogin.afterOpen().subscribe(function (result) { _this.DialogLoginOpen = true; });
        this.DialogLogin.afterClosed().subscribe(function (result) { _this.DialogLoginOpen = false; });
        return this.DialogLogin.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    SeguridadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpBackend"],
            src_app_services_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"]])
    ], SeguridadService);
    return SeguridadService;
}());



/***/ }),

/***/ "./src/app/services/Sesion/Sesion.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/Sesion/Sesion.service.ts ***!
  \***************************************************/
/*! exports provided: SesionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionService", function() { return SesionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/auth/login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_Sesion_Sesion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/Sesion/Sesion */ "./src/app/models/Sesion/Sesion.ts");
/* harmony import */ var src_app_models_Sesion_SesionStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Sesion/SesionStorage */ "./src/app/models/Sesion/SesionStorage.ts");
/* harmony import */ var src_app_models_Persona_Perfil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/Persona/Perfil */ "./src/app/models/Persona/Perfil.ts");
/* harmony import */ var src_app_shared_services_rol_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/rol.service */ "./src/app/shared/services/rol.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SesionService = /** @class */ (function () {
    function SesionService(RolSVC, Router, dialog) {
        this.RolSVC = RolSVC;
        this.Router = Router;
        this.dialog = dialog;
        console.log(this.GetSesionStorage());
        //this.SesionStorage = new SesionStorage(this.GetSesionStorage());
        console.log(this.SesionStorage);
        this._Rol = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    SesionService.prototype.isAuthenticated = function () {
        this.GetSesionStorage();
        if (this.GetSesionStorage()) {
            return true;
        }
        return false;
    };
    Object.defineProperty(SesionService.prototype, "SesionStorage", {
        get: function () {
            return this._SesionStorage;
        },
        /**************** SesionStorage ***************/
        set: function (SS) {
            this._SesionStorage = new src_app_models_Sesion_SesionStorage__WEBPACK_IMPORTED_MODULE_6__["SesionStorage"](SS);
        },
        enumerable: true,
        configurable: true
    });
    SesionService.prototype.GetSesionStorage = function () {
        return JSON.parse(localStorage.getItem('UanlNexus7SesionStorage'));
    };
    SesionService.prototype.SaveSesionStorage = function () {
        localStorage.setItem('UanlNexus7SesionStorage', JSON.stringify(this._SesionStorage));
    };
    SesionService.prototype.RemoveSesionStorage = function () {
        localStorage.removeItem('UanlNexus7SesionStorage');
    };
    /******************** Sesion ******************/
    SesionService.prototype.GetSesion = function () {
        return this._SesionStorage.Sesion;
    };
    SesionService.prototype.UpdateSesion = function (S) {
        //this._SesionStorage = new SesionStorage(this.GetSesionStorage());
        this._SesionStorage.Sesion = new src_app_models_Sesion_Sesion__WEBPACK_IMPORTED_MODULE_5__["Sesion"](S);
        this.SaveSesionStorage();
    };
    Object.defineProperty(SesionService.prototype, "Perfil", {
        get: function () {
            return this._SesionStorage.Perfil;
        },
        /****************** Perfil ********************/
        set: function (P) {
            this._SesionStorage.Perfil = P;
            this.SaveSesionStorage();
        },
        enumerable: true,
        configurable: true
    });
    SesionService.prototype.ActualizarPerfil = function (P) {
        var CurrentRol = this._SesionStorage.Perfil.Rol;
        this._SesionStorage.Perfil = new src_app_models_Persona_Perfil__WEBPACK_IMPORTED_MODULE_7__["Perfil"](P);
        this._SesionStorage.Perfil.Rol = CurrentRol;
        this.SaveSesionStorage();
    };
    /****************** Rol ********************/
    SesionService.prototype.RolObserver = function () {
        return this._Rol.asObservable();
    };
    Object.defineProperty(SesionService.prototype, "Rol", {
        get: function () {
            return this._Rol.getValue();
        },
        set: function (R) {
            this._Rol.next(R);
            this._SesionStorage.Perfil.Rol = R;
            this.SaveSesionStorage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SesionService.prototype, "Curso", {
        get: function () {
            return this._SesionStorage.Curso;
        },
        set: function (C) {
            this._Curso = C;
            this._SesionStorage.Curso = C;
            this.SaveSesionStorage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SesionService.prototype, "Token", {
        get: function () {
            return this.GetSesionStorage().Sesion.Token;
        },
        /******************** Token *******************/
        set: function (Token) {
            //this._Sesion.Token(Token);
            this._SesionStorage.Sesion.Token = Token;
            this.SaveSesionStorage();
        },
        enumerable: true,
        configurable: true
    });
    SesionService.prototype.isTokenExpirado = function (Code) {
        if (Code == 2004 /*|| Code == 2011*/) {
            return true;
        }
        else {
            return false;
        }
    };
    SesionService.prototype.Roles = function (AreaAcademicaId) {
        var _RolesTotal = [];
        var _AreasAcademicas = !AreaAcademicaId ? this.Perfil.AreasAcademicas : this.Perfil.AreasAcademicas.filter(function (AA) { return AA.AreaAcademicaId === AreaAcademicaId; });
        console.log(_AreasAcademicas);
        var _loop_1 = function () {
            var _Roles = _AreasAcademicas[i].Roles;
            for (var j in _Roles) {
                console.log(_Roles[j]);
                _Roles[j].Descripcion = this_1.RolSVC.getRol(_Roles[j].RolId).Descripcion;
                _Roles[j].AreaAcademicaId = _AreasAcademicas[i].AreaAcademicaId;
                if (_Roles[j].RolId === 1) {
                    // - ('+_AreasAcademicas[i].AreaAcademica.Nombre+')
                    //_Roles[j].Descripcion = 'Administrador';
                    //_RolesTotal.push(_Roles[j]);
                }
                if (!_RolesTotal.find(function (R) { return R.RolId === _Roles[j].RolId; })) {
                    _RolesTotal.push(_Roles[j]);
                }
            }
        };
        var this_1 = this;
        for (var i in _AreasAcademicas) {
            _loop_1();
        }
        console.log(_RolesTotal);
        return _RolesTotal;
    };
    SesionService.prototype.ObtenerAreasAcademicas = function (RolId) {
        console.log(this.Perfil);
        var _AreasAcademicas = [];
        this.Perfil.AreasAcademicas.forEach(function (AA) {
            if (AA.Roles.find(function (R) { return R.RolId === RolId; })) {
                _AreasAcademicas.push(AA);
            }
        });
        console.log(_AreasAcademicas);
        return _AreasAcademicas;
    };
    //Verifica el Rol y redirecciona a la seccion corrspondiente
    SesionService.prototype.RedireccionarPerfil = function () {
        var _RolPrincipal = this._SesionStorage.Perfil.Rol.RolId;
        //AdminGral
        if (_RolPrincipal == 6)
            this.Router.navigate(["AdminGral"]);
        //Auditor
        if (_RolPrincipal == 12)
            this.Router.navigate(["Auditor"]);
        //DENMS
        if (_RolPrincipal == 13)
            this.Router.navigate(["Seguimiento"]);
        //Seguimiento Académico
        if (_RolPrincipal == 14)
            this.Router.navigate(["Seguimiento"]);
        //Monitoreo
        if (_RolPrincipal == 17)
            this.Router.navigate(["Desempeno"]);
        //Administrador
        if (_RolPrincipal == 1)
            this.Router.navigate(["Administrador"]);
        //Administrador Asistente
        if (_RolPrincipal == 10)
            this.Router.navigate(["Administrador"]);
        //Profesor
        if (_RolPrincipal == 2)
            this.Router.navigate(["Profesor"]);
        //Estudiante
        if (_RolPrincipal == 5)
            this.Router.navigate(["Estudiante"]);
    };
    SesionService.prototype.RolHasPermission = function (Roles) {
        return Roles.includes(this.Perfil.Rol.RolId);
    };
    SesionService.prototype.DialogSesionExpirada = function () {
        console.log("SesionSVC: Dialog Sesion Expirada");
        var Sesion;
        if (this.DialogLogin)
            this.DialogLogin.close();
        this.DialogLogin = this.dialog.open(src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_3__["LoginDialogComponent"], { disableClose: true });
        //return this.DialogLogin.afterClosed();
        return this.DialogLogin.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return console.log('After Closed'); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); })));
    };
    SesionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rol_service__WEBPACK_IMPORTED_MODULE_8__["RolService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], SesionService);
    return SesionService;
}());



/***/ }),

/***/ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackBarService = /** @class */ (function () {
    function SnackBarService(snackbar, zone) {
        this.snackbar = snackbar;
        this.zone = zone;
        this.Config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        this.Config.duration = 3000; // miliseconds
        this.Config.horizontalPosition = 'center'; //'start' | 'center' | 'end' | 'left' | 'right'
        this.Config.verticalPosition = 'bottom'; // 'top' | 'bottom'
        // panelClass: string | string[]
        // announcementMessage: string
        // data: D | null
        // direction: Direction
        // viewContainerRef: ViewContainerRef
    }
    SnackBarService.prototype.OpenSnackBarSuccess = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["snackbar-success", "action-close"];
        this.Config.duration = Time;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService.prototype.OpenSnackBarError = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["snackbar-error", "action-close"];
        this.Config.duration = Time;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService.prototype.OpenSnackBarComponent = function (Msg, Time, VPosition, HPosition) {
        // openFromComponent
    };
    SnackBarService.prototype.OpenSnackBarTemplate = function (Msg, Time, VPosition, HPosition) {
        // openFromTemplate
    };
    SnackBarService.prototype.open = function (Msg, Time, VPosition, HPosition) {
        this.Config.duration = Time;
        this.Config.verticalPosition = VPosition ? VPosition : this.Config.verticalPosition;
        this.Config.horizontalPosition = HPosition ? HPosition : this.Config.horizontalPosition;
        this.snackbar.open(Msg, '', this.Config);
    };
    SnackBarService.prototype.dismiss = function () {
        this.snackbar.dismiss();
    };
    SnackBarService.prototype.success = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["snackbar-success", "action-close"];
        this.Config.duration = Time;
        this.Config.verticalPosition = VPosition ? VPosition : this.Config.verticalPosition;
        this.Config.horizontalPosition = HPosition ? HPosition : this.Config.horizontalPosition;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService.prototype.error = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["snackbar-error", "action-close"];
        this.Config.duration = Time;
        this.Config.verticalPosition = VPosition ? VPosition : this.Config.verticalPosition;
        this.Config.horizontalPosition = HPosition ? HPosition : this.Config.horizontalPosition;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService.prototype.warning = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["snackbar-warning", "action-close"];
        this.Config.duration = Time;
        this.Config.verticalPosition = VPosition ? VPosition : this.Config.verticalPosition;
        this.Config.horizontalPosition = HPosition ? HPosition : this.Config.horizontalPosition;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService.prototype.info = function (Msg, Time, VPosition, HPosition) {
        this.Config.panelClass = ["action-close"];
        this.Config.duration = Time;
        this.Config.verticalPosition = VPosition ? VPosition : this.Config.verticalPosition;
        this.Config.horizontalPosition = HPosition ? HPosition : this.Config.horizontalPosition;
        this.snackbar.open(Msg, "X", this.Config);
    };
    SnackBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SnackBarService);
    return SnackBarService;
}());



/***/ }),

/***/ "./src/app/services/Utils/Date/Date.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/Utils/Date/Date.service.ts ***!
  \*****************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateService = /** @class */ (function () {
    function DateService() {
        this._Meses = [
            { Id: 1, Valor: "01", NombreCorto: 'ENE', Nombre: "Enero" },
            { Id: 2, Valor: "02", NombreCorto: 'FEB', Nombre: "Febrero" },
            { Id: 3, Valor: "03", NombreCorto: 'MAR', Nombre: "Marzo" },
            { Id: 4, Valor: "04", NombreCorto: 'ABR', Nombre: "Abril" },
            { Id: 5, Valor: "05", NombreCorto: 'MAY', Nombre: "Mayo" },
            { Id: 6, Valor: "06", NombreCorto: 'JUN', Nombre: "Junio" },
            { Id: 7, Valor: "07", NombreCorto: 'JUL', Nombre: "Julio" },
            { Id: 8, Valor: "08", NombreCorto: 'AGO', Nombre: "Agosto" },
            { Id: 9, Valor: "09", NombreCorto: 'SEP', Nombre: "Septiembre" },
            { Id: 10, Valor: "10", NombreCorto: 'OCT', Nombre: "Octubre" },
            { Id: 11, Valor: "11", NombreCorto: 'NOV', Nombre: "Noviembre" },
            { Id: 12, Valor: "12", NombreCorto: 'DIC', Nombre: "Diciembre" },
        ];
        this._FormatosFecha = [
            { id: 0, format: '' },
            { id: 1, format: 'DD/MMMM/YYYY' },
            { id: 2, format: 'DD/MMM/YYYY' },
            { id: 3, format: 'DD/MM/YYYY' },
            { id: 4, format: 'YYYY/MMMM/DD' },
            { id: 5, format: 'YYYY/MMM/DD' },
            { id: 6, format: 'YYYY/MM/DD' },
        ];
        this._FormatosHora = [
            { id: 0, format: '' },
            { id: 1, format: 'hh:mm a' },
            { id: 2, format: 'HH:mm' },
            { id: 3, format: 'hh:mm:ss a' },
            { id: 4, format: 'HH:mm:ss' }
        ];
    }
    DateService.prototype.moment = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(date);
    };
    DateService.prototype.getDateTime = function (Fecha, Hora) {
        console.log(Fecha);
        console.log(Hora);
        var FechaFormat = moment__WEBPACK_IMPORTED_MODULE_1__(Fecha).format('DD/MM/YYYY');
        var HoraFormat = moment__WEBPACK_IMPORTED_MODULE_1__(Fecha).format('HH:mm:ss');
        return FechaFormat + " " + HoraFormat;
    };
    DateService.prototype.getFormatoFecha = function (id) {
        return this._FormatosFecha.find(function (F) { return F.id === id; }).format;
    };
    DateService.prototype.getFormatoHora = function (id) {
        return this._FormatosHora.find(function (F) { return F.id === id; }).format;
    };
    DateService.prototype.FechaFormatoMoment = function (D, Format) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(D).format(Format);
    };
    DateService.prototype.FechaFormato = function (D, DateFormatId, TimeFormatId) {
        return this.FechaFormatoMoment(D, this.getFormatoFecha(DateFormatId) + ' ' + this.getFormatoHora(TimeFormatId));
    };
    DateService.prototype.Locale = function (dateString) {
        dateString = dateString.toString();
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        return dateString;
    };
    DateService.prototype.DatesDiffSeconds = function (DateStart, DateEnd) {
        var Date1 = moment__WEBPACK_IMPORTED_MODULE_1__(DateStart);
        var Date2 = moment__WEBPACK_IMPORTED_MODULE_1__(DateEnd);
        var Diff = Date2.diff(Date1, "seconds");
        return Diff;
    };
    DateService.prototype.SameDay = function (Date1, Date2) {
        var validation = moment__WEBPACK_IMPORTED_MODULE_1__(Date1).isSame(Date2, 'day');
        return validation;
    };
    DateService.prototype.SameWeek = function (Date1, Date2) {
        var validation = moment__WEBPACK_IMPORTED_MODULE_1__(Date1).isSame(Date2, 'week');
        return validation;
    };
    DateService.prototype.DatesDiff = function (FechaInicio, FechaFin, Text) {
        var F1 = moment__WEBPACK_IMPORTED_MODULE_1__(FechaInicio ? FechaInicio : new Date());
        var F2 = moment__WEBPACK_IMPORTED_MODULE_1__(FechaFin ? FechaFin : new Date());
        console.log(F1, F2);
        var Diferencia = F2.diff(F1, 'seconds');
        var Numero;
        var Unidad;
        if (Diferencia < 60) {
            Numero = Diferencia % 60;
            Unidad = 'min';
        }
        else if (Diferencia < 3600) {
            Numero = Diferencia % 60;
            if (Numero === 1)
                Unidad = 'min';
            else
                Unidad = 'min';
        }
        else if (Diferencia < 86400) {
            Numero = Diferencia % 3600;
            if (Numero === 1)
                Unidad = 'hora';
            else
                Unidad = 'horas';
        }
        else if (Diferencia < 604800) {
            Numero = Diferencia % 86400;
            if (Numero == 1)
                Unidad = 'dia';
            else
                Unidad = 'dias';
        }
        else if (Diferencia < 31557600) {
            Numero = Diferencia % 604800;
            console.log(Numero);
            if (Numero == 1)
                Unidad = 'semana';
            else
                Unidad = 'semanas';
        }
        else {
            Numero = Diferencia % 31557600;
            if (Numero == 1)
                Unidad = 'año';
            else
                Unidad = 'años';
        }
        var prefix = Text ? Text : 'Hace ';
        var D = prefix + Numero + ' ' + Unidad;
        return D;
    };
    DateService.prototype.msToTime = function (duration, format) {
        var milliseconds = Math.floor((duration % 1000) / 100);
        var seconds = Math.floor((duration / 1000) % 60);
        var minutes = Math.floor((duration / (1000 * 60)) % 60);
        var hours = Math.floor((duration / (1000 * 60 * 60)));
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        switch (format) {
            case 'hh:mm:ss': return hours + ":" + minutes + ":" + seconds;
            case 'h m s': return hours + "h " + minutes + "m " + seconds + 's ';
            default: return hours + ":" + minutes + ":" + seconds;
        }
    };
    DateService.prototype.GetDiff = function (Date1, Date2, Type) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(Date2).diff(moment__WEBPACK_IMPORTED_MODULE_1__(Date1), Type);
    };
    DateService.prototype.DateToLocale = function (dateString) {
        //console.log(dateString);
        dateString = dateString.toString();
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        //console.log(dateString);
        return dateString;
    };
    Object.defineProperty(DateService.prototype, "Meses", {
        /******************** Month **********************/
        get: function () {
            var M = this._Meses;
            return M;
        },
        enumerable: true,
        configurable: true
    });
    /******************* DatePicker ********************/
    DateService.prototype.DatePickerSettings = function (opt) {
        var Settings = {
            BigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy hh:mm a',
            defaultOpen: true,
            closeOnSelect: true
        };
        switch (opt) {
            case 1: break;
            case 2:
                Settings.BigBanner = false;
                Settings.defaultOpen = false;
                break;
        }
        return Settings;
    };
    DateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/services/Utils/Loading/Loading.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/Utils/Loading/Loading.service.ts ***!
  \***********************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
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

var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this._BackdropVisible = false;
    }
    Object.defineProperty(LoadingService.prototype, "BackdropVisible", {
        /******************** Backdrop **********************/
        get: function () { return this._BackdropVisible; },
        set: function (value) { this._BackdropVisible = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingService.prototype, "Message", {
        get: function () { return this._Message; },
        set: function (text) { this._Message = text; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingService.prototype, "Title", {
        get: function () { return this._Title; },
        set: function (text) { this._Title = text; },
        enumerable: true,
        configurable: true
    });
    LoadingService.prototype.ShowBackdrop = function (type, text, title) {
        this.BackdropType = type ? type : null;
        this._Message = text ? text : null;
        this._Title = title ? title : null;
        this._BackdropVisible = true;
    };
    LoadingService.prototype.HideBackdrop = function () {
        this._BackdropVisible = false;
        this._Message = null;
        this._Title = null;
        this.BackdropType = null;
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/services/Utils/Utils.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/Utils/Utils.service.ts ***!
  \*************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UtilsService = /** @class */ (function () {
    function UtilsService(api) {
        this.api = api;
        this.Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.screen = { size: null, height: null, width: null, isSmall: null };
    }
    UtilsService.prototype.getInciso = function (Pos, Desc) {
        return this.Alphabet[Pos];
    };
    UtilsService.prototype.getPosicionLetter = function (Pos) {
        return this.Alphabet[Pos];
    };
    // Screen Size
    UtilsService.prototype.getScreenSize = function (w, h) {
        if (w < 576)
            return '';
        else if (w < 768)
            return 'sm';
        else if (w < 992)
            return 'md';
        else if (w < 1200)
            return 'lg';
        else if (w < 1400)
            return 'xl';
        // else return 'xxl';
    };
    UtilsService.prototype.getTextColorForBackground = function (_Hexadecimal) {
        var BackgroundType = this.lightOrDark(_Hexadecimal);
        switch (BackgroundType) {
            case 'light': return 'black';
            case 'dark': return 'white';
            default: return null;
        }
    };
    UtilsService.prototype.lightOrDark = function (color) {
        // Variables for red, green, blue values
        var r, g, b, hsp;
        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {
            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {
            // If hex --> Convert it to RGB: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b));
        // Using the HSP value, determine whether the color is light or dark
        if (hsp > 127.5) {
            return 'light';
        }
        else {
            return 'dark';
        }
    };
    UtilsService.prototype.Promedio = function (_Array, _Field) {
        return (_Array.map(function (item) { return item[_Field]; }).reduce(function (prev, next) { return prev + next; }) / _Array.length);
    };
    UtilsService.prototype.max = function (data, attr) {
        var max = data.reduce(function (prev, current) { return (prev[attr] > current[attr]) ? prev : current; }, 0);
        return max;
    };
    UtilsService.prototype.min = function (data, attr) {
        var max = data.reduce(function (prev, current) { return (prev[attr] < current[attr]) ? prev : current; }, 0);
        return max;
    };
    UtilsService.prototype.sum = function (items, attr) {
        var suma = items.reduce(function (a, b) {
            var total = parseFloat(a.toFixed(2)) + parseFloat(b[attr].toFixed(2));
            return parseFloat(total.toFixed(2));
        }, 0);
        return suma;
    };
    ;
    UtilsService.prototype.getBase64ImageFromUrl = function (imageUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res, blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(imageUrl)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener("load", function () {
                                    resolve(reader.result);
                                }, false);
                                reader.onerror = function () {
                                    return reject(_this);
                                };
                                reader.readAsDataURL(blob);
                            })];
                }
            });
        });
    };
    UtilsService.prototype.getBase64ImageFromURL2 = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.setAttribute("crossOrigin", "anonymous");
                        img.onload = function () {
                            var canvas = document.createElement("canvas");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            var ctx = canvas.getContext("2d");
                            ctx.drawImage(img, 0, 0);
                            var dataURL = canvas.toDataURL("image/png");
                            resolve(dataURL);
                        };
                        img.onerror = function (error) {
                            reject(error);
                        };
                        img.src = url;
                    })];
            });
        });
    };
    UtilsService.prototype.addReactivo = function () { };
    UtilsService.prototype.removeReactivo = function () { };
    UtilsService.prototype.getDateServer = function () {
        return this.api.POST('Sistema', 'ConsultarFecha', {});
    };
    UtilsService.prototype.FechaServidor = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.api.POST('Sistema', 'ConsultarFecha', {}).subscribe(function (result) {
                if (!result.Error) {
                    resolve(result.Fecha.Ahora);
                }
                else {
                    throw result;
                }
            }, function (error) { return reject(null); });
        });
        return promise;
    };
    UtilsService.prototype.getArrayFromNumber = function (_length) {
        return Array.from({ length: _length }, function (v, i) { return i + 1; });
    };
    UtilsService.prototype.openHTMLInTab = function (_HTML) {
        var win = window.open('about:blank', '_blank');
        win.document.write('<html><head>' +
            '<meta charset="utf-8">' +
            '<title>Nexus7</title>' +
            '<link rel="icon" type="image/x-icon" href="assets/favicon.ico">' +
            '<link href="https://web.archive.org/web/20240606034029/https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
            '<link href="https://web.archive.org/web/20240606034029/https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">' +
            '<link rel="stylesheet" type="text/css" href="styles.css">' +
            '<link href="https://web.archive.org/web/20240606034029/https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet">' +
            '<link href="https://web.archive.org/web/20240606034029/https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">' +
            '<link rel="stylesheet" href="assets/css/bootstrap.min.css">' +
            '<link rel="stylesheet" href="assets/css/animate.min.css">' +
            '<link rel="stylesheet" href="assets/fonts/fontawesome/5.11.2/all.min.css">' +
            '</head><body>');
        win.document.write('<div class="border-bottom mb-3 d-flex justify-content-center"><img height="80px" src="assets/img/logos/nx-logo.png"/></div>');
        win.document.write(_HTML);
        win.document.write('</body></html>');
        win.focus();
    };
    UtilsService.prototype.openURLInTab = function (_URL) {
        window.open(_URL, "_blank");
    };
    UtilsService.prototype.sortPersonas = function (Personas) {
        var sortArray = Personas.sort(function (a, b) {
            return a.ApellidoPaterno.localeCompare(b.ApellidoPaterno) || a.ApellidoMaterno.localeCompare(b.ApellidoMaterno) || a.Nombre.localeCompare(b.Nombre);
        });
        console.log(sortArray);
        return sortArray;
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_http_ApiHttp_service__WEBPACK_IMPORTED_MODULE_1__["ApiHttpService"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/services/Utils/crypto.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/Utils/crypto.service.ts ***!
  \**************************************************/
/*! exports provided: CryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoService", function() { return CryptoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptoService = /** @class */ (function () {
    function CryptoService() {
        this._keys = '123456';
    }
    Object.defineProperty(CryptoService.prototype, "config", {
        get: function () {
            var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(this._keys);
            return {
                keySize: 128 / 8,
                iv: iv,
                mode: crypto_js__WEBPACK_IMPORTED_MODULE_1__["mode"].CBC,
                padding: crypto_js__WEBPACK_IMPORTED_MODULE_1__["pad"].Pkcs7
            };
        },
        enumerable: true,
        configurable: true
    });
    CryptoService.prototype.encrypt = function (value) {
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(value, this._keys, this.config);
        return encrypted.toString();
    };
    CryptoService.prototype.decrypt = function (value) {
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(value, this._keys, this.config);
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    };
    CryptoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CryptoService);
    return CryptoService;
}());



/***/ }),

/***/ "./src/app/services/Utils/logger.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/Utils/logger.service.ts ***!
  \**************************************************/
/*! exports provided: LogLevel, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (LogLevel = {}));
var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.status = !src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production;
    }
    LoggerService.prototype.info = function (message) {
        this.logWith(LogLevel.INFO, message);
    };
    LoggerService.prototype.warn = function (message) {
        this.logWith(LogLevel.WARN, message);
    };
    LoggerService.prototype.error = function (message) {
        this.logWith(LogLevel.ERROR, message);
    };
    LoggerService.prototype.data = function (data, message) {
        this.logWith(LogLevel.NONE, message, data);
    };
    LoggerService.prototype.logWith = function (level, msg, data) {
        if (this.status && level <= LogLevel.ERROR) {
            switch (level) {
                case LogLevel.NONE:
                    return console.log(msg, data);
                case LogLevel.INFO:
                    return console.info('%c' + msg, 'color: #6495ED');
                case LogLevel.WARN:
                    return console.warn('%c' + msg, 'color: #FF8C00');
                case LogLevel.ERROR:
                    return console.error('%c' + msg, 'color: #DC143C');
                default:
                    console.debug(msg);
            }
        }
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/services/api-http/ApiHttp.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/api-http/ApiHttp.service.ts ***!
  \******************************************************/
/*! exports provided: ApiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHttpService", function() { return ApiHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var _Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utils/AngularMaterial/SnackBar/SnackBar.service */ "./src/app/services/Utils/AngularMaterial/SnackBar/SnackBar.service.ts");
/* harmony import */ var _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiHttpService = /** @class */ (function () {
    function ApiHttpService(http, handler, PerfilSVC, SesionSVC, Snackbar) {
        this.http = http;
        this.handler = handler;
        this.PerfilSVC = PerfilSVC;
        this.SesionSVC = SesionSVC;
        this.Snackbar = Snackbar;
        this.HttpOptions = {};
    }
    ApiHttpService.prototype.GetHttpOptions = function (_Headers, ReportProgress, Observe) {
        var _HttpHeaders;
        if (_Headers) {
            _HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"](_Headers);
        }
        else {
            _HttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Token: this.SesionSVC.Token,
                AreaAcademicaId: this.SesionSVC.Perfil.AreaAcademica.AreaAcademicaId.toString(),
                RolId: this.SesionSVC.Perfil.Rol.RolId.toString(),
            });
            _HttpHeaders.append("SistemaId", "1");
        }
        var _HttpOptions = {
            headers: _HttpHeaders,
        };
        console.log(_HttpHeaders);
        return { headers: _HttpHeaders };
    };
    ApiHttpService.prototype.post = function (_domain, _method, _data, _reportProgress, _headers) {
        return this.http.post(this.GetUrlApiEndpoint(_domain, _method), _data, this.GetHttpOptions(_headers));
    };
    ApiHttpService.prototype.PROMISE = function () {
    };
    ApiHttpService.prototype.REQUEST_UPLOAD = function (Domain, Method, Data, Headers, ReportProgress, Observe) {
        var _this = this;
        return this.http.post(this.GetUrlApiEndpoint(Domain, Method), Data, {
            headers: this.GetHttpOptions(Headers, ReportProgress, Observe).headers,
            reportProgress: true,
            observe: 'events'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.EventsCallback(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.ErrorCallback(error); }));
    };
    ApiHttpService.prototype.POST_NO_INTERCEPTORS = function (Domain, Method, Data, Headers) {
        var _this = this;
        var httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"](this.handler);
        return httpClient.post(this.GetUrlApiEndpoint(Domain, Method), Data, this.GetHttpOptions(Headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.SuccessCallback(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.ErrorCallback(error); }));
    };
    ApiHttpService.prototype.POST = function (Domain, Method, Data, Headers) {
        var _this = this;
        console.log(JSON.stringify(Data));
        console.log(Headers);
        return this.http.post(this.GetUrlApiEndpoint(Domain, Method), Data, this.GetHttpOptions(Headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.SuccessCallback(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.ErrorCallback(error); }));
    };
    ApiHttpService.prototype.GET = function (Domain, Method, Headers) {
        var _this = this;
        return this.http.get(this.GetUrlApiEndpoint(Domain, Method), this.GetHttpOptions(Headers)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.SuccessCallback(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.ErrorCallback(error); }));
    };
    ApiHttpService.prototype.GetUrlApiEndpoint = function (Domain, Method) {
        var URL = src_app_shared_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + Domain + '/' + Method;
        return URL;
    };
    ApiHttpService.prototype.SuccessCallback = function (response) {
        response.Error = response.hasOwnProperty('Code') ? true : false;
        response.TokenExpired = this.SesionSVC.isTokenExpirado(response.Code) ? true : false;
        response.Message = response.Code === 1001 ? 'No se pudo realizar esta operación' : response.Message;
        if (response.Error)
            this.Snackbar.OpenSnackBarError(response.Code + " - " + response.Message, 3000);
        //if (response.TokenExpired) this.Snackbar.OpenSnackBarError(`Tu sesion actual ha expirado.`, 3000);
        console.log(response);
        return response;
    };
    ApiHttpService.prototype.EventsCallback = function (event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Sent:
                console.log('Start Upload');
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress:
                return {
                    complete: false,
                    uploading: true,
                    upload: 'Cargando ' + Math.round(100 * event.loaded / event.total)
                };
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response:
                var response = this.SuccessCallback(event.body);
                response.complete = true;
                response.uploading = false;
                response.upload = 100;
                return response;
            default:
                console.log('Uploading Event Unknow');
                break;
        }
    };
    ApiHttpService.prototype.ErrorCallback = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ApiHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpBackend"],
            src_app_shared_services_perfil_service__WEBPACK_IMPORTED_MODULE_5__["PerfilService"],
            _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_7__["SesionService"],
            _Utils_AngularMaterial_SnackBar_SnackBar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]])
    ], ApiHttpService);
    return ApiHttpService;
}());



/***/ }),

/***/ "./src/app/services/api-http/Interceptor/TokenInterceptor.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/api-http/Interceptor/TokenInterceptor.service.ts ***!
  \***************************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
/* harmony import */ var _Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Seguridad/Seguridad.service */ "./src/app/services/Seguridad/Seguridad.service.ts");
/* harmony import */ var src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/auth/login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _Utils_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Utils/logger.service */ "./src/app/services/Utils/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(logger, SeguridadSVC, SesionSVC, dialog) {
        this.logger = logger;
        this.SeguridadSVC = SeguridadSVC;
        this.SesionSVC = SesionSVC;
        this.dialog = dialog;
        this.Sesion = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.DialogLoginOpen = false;
        this.refreshTokenInProgress = false;
        this.tokenRefreshedSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.tokenRefreshed$ = this.tokenRefreshedSource.asObservable();
        this.RequestList = [];
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        //console.log(req);
        /*next.handle(req).subscribe(
          result => ,
          error =>
        );*/
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response && _this.SesionSVC.isTokenExpirado(event.body.Code)) {
                /*this.DialogLogin = this.dialog.open(LoginDialogComponent,{disableClose: false});
                this.DialogLogin.afterOpen().subscribe(() => { this.DialogLoginOpen = true });
                return this.DialogLogin.afterClosed().pipe(
                  tap(sesion => {
                    console.log(sesion);
                    return next.handle(req);
                  }),
                  catchError(error => throwError(error))
                );*/
                _this.logger.info('<--------------------------------- Interceptor ------------------------->');
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Token': _this.SesionSVC.Token,
                    'AreaAcademicaId': _this.SesionSVC.Perfil.AreaAcademica.AreaAcademicaId.toString(),
                    'RolId': _this.SesionSVC.Perfil.Rol.RolId.toString(),
                });
                var ReqClone = req.clone({ headers: headers });
                _this.RequestList.push(ReqClone);
                //console.log(this.RequestList);
                return _this.showLoginModal(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (sesion) {
                    return next.handle(req);
                }));
            }
            else {
                return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) { return observer.next(event); });
            }
        }));
    };
    TokenInterceptorService.prototype.showLoginModal = function (event) {
        var _this = this;
        console.log('Dialog Login');
        this.DialogLogin = this.dialog.open(src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDialogComponent"], { disableClose: false });
        this.DialogLogin.afterOpen().subscribe(function () { _this.DialogLoginOpen = true; });
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.DialogLogin.afterClosed().subscribe(function (result) {
                //console.log('The dialog was closed', result);
                observer.next(result);
            });
        });
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Utils_logger_service__WEBPACK_IMPORTED_MODULE_11__["LoggerService"],
            _Seguridad_Seguridad_service__WEBPACK_IMPORTED_MODULE_6__["SeguridadService"],
            _Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_5__["SesionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());

/*
if(event.body.Code) {
            if(this.SesionSVC.isTokenExpirado(event.body.Code)) {

                this.DialogLogin = this.dialog.open(LoginDialogComponent,{disableClose: true});
                //return this.DialogLogin.afterClosed();
                return this.DialogLogin.afterClosed().pipe(
                  map(data => {
                    console.log('Login Dialog Closed');
                    console.log(data);
                    return Next.handle(Request);
                  },
                  catchError(error => throwError(error))
                ));
              /*this.SesionSVC.DialogSesionExpirada().subscribe(
                sesion => Next.handle(Request),
                error => console.log(error)
              );*/
/*return this.SesionSVC.DialogSesionExpirada().pipe(
  map(sesion => {
    console.log('Dialog Sesion success');
    console.log(Request);
    Next.handle(Request);
    //return sesion;
  }),
  catchError(error => throwError(error))
)
}
} else {
console.log('Sin errores');
}
*/
/*

    const Sesion = this.SesionSVC
    //const TokenExpired = this.SesionSVC.TokenExpired();
    if (!Request.url.includes('/Seguridad/')) {
      console.log('Call Api Seguridad');
    }
    return Next.handle(Request).pipe(
      map(event => {
        console.log(event);
        if (event instanceof HttpErrorResponse) {
          if (this.SesionSVC.isTokenExpirado(event)) {
            return this.SesionSVC.DialogSesionExpirada().pipe(
              map(sesion => sesion ? Next.handle(Request) : false)
            );
          }
        }
      }),
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
          if (this.SesionSVC.isTokenExpirado(error)) {
            return this.SesionSVC.DialogSesionExpirada().pipe(
              map(() => {
                return Next.handle(Request);
              })
            );
          } else {
            return throwError(error);
          }
        }
        return caught;
      })
    );


    if (Request.url.endsWith('ReactivarSesion')) {
      return Next.handle(Request);
    } else {
      return Next.handle(Request).pipe(
        catchError((error, caught) => {
          if (error instanceof HttpErrorResponse) {
            if (this._checkTokenExpiryErr(error)) {
              return this._ifTokenExpired().pipe(
                map(() => {
                  return Next.handle(Request);
                })
              );
            } else {
              return throwError(error);
            }
          }
          return caught;
        })
      );
    }
  }

}
*/


/***/ }),

/***/ "./src/app/shared/CustomClass/material-paginator.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/CustomClass/material-paginator.ts ***!
  \**********************************************************/
/*! exports provided: MatPaginatorIntCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntCustom", function() { return MatPaginatorIntCustom; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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

var MatPaginatorIntCustom = /** @class */ (function (_super) {
    __extends(MatPaginatorIntCustom, _super);
    function MatPaginatorIntCustom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = '';
        _this.nextPageLabel = 'Página Siguiente';
        _this.previousPageLabel = 'Página Anterior';
        _this.firstPageLabel = "Primera Página";
        _this.lastPageLabel = "Última Página";
        _this.getRangeLabel = function (page, pageSize, length) {
            var _items = length % pageSize;
            var numPages = length / pageSize | 0;
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            if (_items != 0) {
                numPages += 1;
            }
            if (length == 0 || pageSize == 0) {
                return "P\u00E1gina 0 de " + length;
            }
            return startIndex + 1 + " - " + endIndex + " de " + length; //`Página ${page + 1} de ${numPages}`
        };
        return _this;
        /*length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`; }*/
    }
    return MatPaginatorIntCustom;
}(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/shared/DTO/Actividad.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/DTO/Actividad.ts ***!
  \*****************************************/
/*! exports provided: Actividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actividad", function() { return Actividad; });
var Actividad = /** @class */ (function () {
    function Actividad(A) {
        this.ActividadExamenes = [];
        if (A) {
            this.ActividadId = A.ActividadId;
            this.TemaId = A.TemaId;
            this.Nombre = A.Nombre;
            this.Proposito = A.Proposito;
            this.FechaLimite = new Date(A.FechaLimite);
            this.MedioEnvio = A.MedioEnvio;
            this.Instrucciones = A.Instrucciones;
            this.Valor = A.Valor;
            this.CriteriosEvaluacion = A.CriteriosEvaluacion;
            this.RestringirEntrega = A.RestringirEntrega;
            this.Posicion = A.Posicion;
            this.EnEquipo = A.EnEquipo;
            this.Estado = A.Estado;
            this.ActividadExamenes = A.ActividadExamenes;
        }
    }
    return Actividad;
}());



/***/ }),

/***/ "./src/app/shared/DTO/BancoReactivos.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/DTO/BancoReactivos.ts ***!
  \**********************************************/
/*! exports provided: BancoReactivos, Reactivo, BReactivo, BReactivoRespuesta, BReactivoRespuestaVF, BReactivoRespuestaOpcionMult, BReactivoRespuestaResMult, BReactivoRespuestaRelacionDer, BReactivoRespuestaRelacionIzq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BancoReactivos", function() { return BancoReactivos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reactivo", function() { return Reactivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivo", function() { return BReactivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuesta", function() { return BReactivoRespuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuestaVF", function() { return BReactivoRespuestaVF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuestaOpcionMult", function() { return BReactivoRespuestaOpcionMult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuestaResMult", function() { return BReactivoRespuestaResMult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuestaRelacionDer", function() { return BReactivoRespuestaRelacionDer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BReactivoRespuestaRelacionIzq", function() { return BReactivoRespuestaRelacionIzq; });
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");
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

var BancoReactivos = /** @class */ (function () {
    function BancoReactivos(BR) {
        if (BR) {
            this.BancoReactivosId = BR.BancoReactivosId;
            this.Nombre = BR.Nombre;
            this.Descripcion = BR.Descripcion;
            this.CuentaId = BR.CuentaId;
            this.FechaCreacion = new Date(BR.FechaCreacion);
            this.Estado = BR.Estado;
            this.EsCompartido = BR.EsCompartido;
            this.CompartidoId = BR.CompartidoId;
        }
    }
    return BancoReactivos;
}());

//Reactivo
//ReactivoRespuestaOpcionMultiple
//ReactivoRespuestaMultiple
//ReactivoRespuestaRelacionarDerecha
//ReactivoRespuestaRelacionarIzquierda
//ReactivoRespuestaVerdaderoFalso
var Reactivo = /** @class */ (function () {
    function Reactivo(BR) {
        this.RetroalimentacionCorrecta = "";
        this.RetroalimentacionIncorrecta = "";
        if (BR) {
            this.ReactivosId = BR.ReactivosId;
            this.BancoReactivosId = BR.BancoReactivosId;
            this.TipoReactivoId = BR.TipoReactivoId;
            this.Posicion = BR.Posicion;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(BR.Descripcion);
            this.RetroalimentacionCorrecta = BR.RetroalimentacionCorrecta;
            this.RetroalimentacionIncorrecta = BR.RetroalimentacionIncorrecta;
            this.Estado = BR.Estado;
        }
    }
    return Reactivo;
}());

var BReactivo = /** @class */ (function () {
    function BReactivo(BR) {
        this.Reactivo = new Reactivo(null);
        this.ReactivoRespuestaVerdaderoFalso = [];
        this.ReactivoRespuestaOpcionMultiple = [];
        this.ReactivoRespuestaMultiple = [];
        this.ReactivoRespuestaRelacionarDerecha = [];
        this.ReactivoRespuestaRelacionarIzquierda = [];
        if (BR) {
            this.Reactivo = new Reactivo(BR.Reactivo);
            switch (BR.Reactivo.TipoReactivoId) {
                //Verdadero/Falso
                case 1:
                    this.ReactivoRespuestaVerdaderoFalso = BR.ReactivoRespuestaVerdaderoFalso.map(function (R) { return new BReactivoRespuestaVF(R); });
                    break;
                //Opcion Multiple
                case 2:
                    this.ReactivoRespuestaOpcionMultiple = BR.ReactivoRespuestaOpcionMultiple.map(function (R) { return new BReactivoRespuestaOpcionMult(R); });
                    break;
                //Respuesta Multiple
                case 3:
                    this.ReactivoRespuestaMultiple = BR.ReactivoRespuestaMultiple.map(function (R) { return new BReactivoRespuestaResMult(R); });
                    break;
                //Relacionar
                case 4:
                    this.ReactivoRespuestaRelacionarDerecha = BR.ReactivoRespuestaRelacionarDerecha.map(function (R) { return new BReactivoRespuestaRelacionDer(R); });
                    this.ReactivoRespuestaRelacionarIzquierda = BR.ReactivoRespuestaRelacionarIzquierda.map(function (R) { return new BReactivoRespuestaRelacionIzq(R); });
                    break;
            }
        }
    }
    return BReactivo;
}());

var BReactivoRespuesta = /** @class */ (function () {
    function BReactivoRespuesta(BRR) {
        if (BRR) {
            this.ReactivosId = BRR.ReactivosId;
            this.Posicion = BRR.Posicion;
            this.EsCorrecta = BRR.EsCorrecta;
            this.Estado = BRR.Estado;
        }
    }
    return BReactivoRespuesta;
}());

var BReactivoRespuestaVF = /** @class */ (function (_super) {
    __extends(BReactivoRespuestaVF, _super);
    function BReactivoRespuestaVF(BRR_VF) {
        var _this = this;
        if (BRR_VF) {
            _this = _super.call(this, BRR_VF) || this;
            _this.ReactivoRespuestaVerdaderoFalsoId = BRR_VF.ReactivoRespuestaVerdaderoFalsoId;
            _this.Respuesta = BRR_VF.Respuesta;
            _this.TipoRespuestaVerdaderoFalsoId = BRR_VF.TipoRespuestaVerdaderoFalsoId;
        }
        return _this;
    }
    return BReactivoRespuestaVF;
}(BReactivoRespuesta));

var BReactivoRespuestaOpcionMult = /** @class */ (function (_super) {
    __extends(BReactivoRespuestaOpcionMult, _super);
    function BReactivoRespuestaOpcionMult(BRR_OM) {
        var _this = this;
        if (BRR_OM) {
            _this = _super.call(this, BRR_OM) || this;
            _this.ReactivoRespuestaOpcionMultipleId = BRR_OM.ReactivoRespuestaOpcionMultipleId;
            _this.Respuesta = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(BRR_OM.Respuesta);
        }
        return _this;
    }
    return BReactivoRespuestaOpcionMult;
}(BReactivoRespuesta));

var BReactivoRespuestaResMult = /** @class */ (function (_super) {
    __extends(BReactivoRespuestaResMult, _super);
    function BReactivoRespuestaResMult(BRR_RM) {
        var _this = this;
        if (BRR_RM) {
            _this = _super.call(this, BRR_RM) || this;
            _this.ReactivoRespuestaMultipleId = BRR_RM.ReactivoRespuestaMultipleId;
            _this.Respuesta = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(BRR_RM.Respuesta);
        }
        return _this;
    }
    return BReactivoRespuestaResMult;
}(BReactivoRespuesta));

var BReactivoRespuestaRelacionDer = /** @class */ (function (_super) {
    __extends(BReactivoRespuestaRelacionDer, _super);
    function BReactivoRespuestaRelacionDer(BRR_RD) {
        var _this = this;
        if (BRR_RD) {
            _this = _super.call(this, BRR_RD) || this;
            _this.ReactivoRespuestaRelacionarDerechaId = BRR_RD.ReactivoRespuestaRelacionarDerechaId;
            _this.Derecha = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(BRR_RD.Derecha);
        }
        return _this;
    }
    return BReactivoRespuestaRelacionDer;
}(BReactivoRespuesta));

var BReactivoRespuestaRelacionIzq = /** @class */ (function (_super) {
    __extends(BReactivoRespuestaRelacionIzq, _super);
    function BReactivoRespuestaRelacionIzq(BRR_RI) {
        var _this = this;
        console.log(BRR_RI);
        if (BRR_RI) {
            _this = _super.call(this, BRR_RI) || this;
            _this.ReactivoRespuestaRelacionarIzquierdaId = BRR_RI.ReactivoRespuestaRelacionarIzquierdaId;
            _this.ReactivoRespuestaRelacionarDerechaId = BRR_RI.ReactivoRespuestaRelacionarDerechaId;
            _this.Izquierda = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(BRR_RI.Izquierda);
        }
        return _this;
    }
    return BReactivoRespuestaRelacionIzq;
}(BReactivoRespuesta));



/***/ }),

/***/ "./src/app/shared/DTO/Coevaluacion.ts":
/*!********************************************!*\
  !*** ./src/app/shared/DTO/Coevaluacion.ts ***!
  \********************************************/
/*! exports provided: Coevaluacion, CoevaluacionCriterio, CriterioCalificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coevaluacion", function() { return Coevaluacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoevaluacionCriterio", function() { return CoevaluacionCriterio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriterioCalificacion", function() { return CriterioCalificacion; });
var Coevaluacion = /** @class */ (function () {
    function Coevaluacion(C) {
        this.Criterios = [];
        if (C) {
            this.CoevaluacionId = C.CoevaluacionId;
            this.Titulo = C.Titulo;
            this.Instrucciones = C.Instrucciones;
            this.EvidenciaId = C.EvidenciaId;
            this.TipoCoevaluacionId = C.TipoCoevaluacionId;
            this.Estado = C.Estado;
            if (C.Criterios) {
                this.Criterios = C.Criterios.map(function (CC) { return new CoevaluacionCriterio(CC); });
            }
        }
    }
    return Coevaluacion;
}());

var CoevaluacionCriterio = /** @class */ (function () {
    function CoevaluacionCriterio(CC) {
        this.Calificaciones = [];
        if (CC) {
            this.CriterioId = CC.CriterioId;
            this.Descripcion = CC.Descripcion;
            this.CoevaluacionId = CC.CoevaluacionId;
            this.Posicion = CC.Posicion;
            this.Estado = CC.Estado;
        }
    }
    return CoevaluacionCriterio;
}());

var CriterioCalificacion = /** @class */ (function () {
    function CriterioCalificacion(CC) {
        this.Calificaciones = [];
        if (CC) {
            this.CriterioCalificacionId = CC.CriterioCalificacionId;
            this.CriterioId = CC.CriterioId;
            this.Calificacion = CC.Calificacion;
            this.Criterio = new CoevaluacionCriterio(CC.Criterio);
            this.Estado = CC.Estado;
            this.Calificaciones = this.Calificaciones;
        }
    }
    return CriterioCalificacion;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Compromiso.ts":
/*!******************************************!*\
  !*** ./src/app/shared/DTO/Compromiso.ts ***!
  \******************************************/
/*! exports provided: Compromiso, CompromisoEstudiante */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compromiso", function() { return Compromiso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompromisoEstudiante", function() { return CompromisoEstudiante; });
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");

var Compromiso = /** @class */ (function () {
    function Compromiso(C) {
        if (C) {
            this.CompromisoId = C.CompromisoId;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(C.Descripcion);
            this.Estado = C.Estado;
            if (C.Estudiante) {
                this.Estudiante = new CompromisoEstudiante(C.Estudiante);
            }
        }
    }
    return Compromiso;
}());

var CompromisoEstudiante = /** @class */ (function () {
    function CompromisoEstudiante(C) {
        if (C) {
            this.EsAceptado = C.EsAceptado;
            this.FechaAceptacion = new Date(C.FechaAceptacion);
        }
    }
    return CompromisoEstudiante;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Cuenta.ts":
/*!**************************************!*\
  !*** ./src/app/shared/DTO/Cuenta.ts ***!
  \**************************************/
/*! exports provided: Cuenta, CuentaBase, CuentaRol, CuentaGeneral, Profesor, Estudiante, EstudianteCurso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cuenta", function() { return Cuenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaBase", function() { return CuentaBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaRol", function() { return CuentaRol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaGeneral", function() { return CuentaGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profesor", function() { return Profesor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estudiante", function() { return Estudiante; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudianteCurso", function() { return EstudianteCurso; });
/* harmony import */ var _Compromiso__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compromiso */ "./src/app/shared/DTO/Compromiso.ts");
/* harmony import */ var src_app_models_Persona_Cuenta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Persona/Cuenta */ "./src/app/models/Persona/Cuenta.ts");
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


var Cuenta = /** @class */ (function () {
    function Cuenta(c) {
        this.AreasAcademicas = [];
        if (c != null) {
            this.AreasAcademicas = [];
            this.CuentaId = c.CuentaId;
            this.NombreUsuario = c.NombreUsuario;
            this.Estado = c.Estado;
            this.OrganizacionId = 1;
            this.CorreoUniversitario = c.CorreoUniversitario;
            this.EnSIASE = c.EnSIASE;
            if (c.AreasAcademicas) {
                //let _AreasAcademicas = c.AreasAcademicas.map(A => A.AreaAcademica);
                this.AreasAcademicas = c.AreasAcademicas.map(function (AA) { return new src_app_models_Persona_Cuenta__WEBPACK_IMPORTED_MODULE_1__["CuentaAreaAcademica"](AA); });
            }
        }
    }
    return Cuenta;
}());

var CuentaBase = /** @class */ (function () {
    function CuentaBase(C) {
        if (C != null) {
            this.Nombre = C.Nombre;
            this.ApellidoPaterno = C.ApellidoPaterno;
            this.ApellidoMaterno = C.ApellidoMaterno;
            this.CuentaId = C.CuentaId;
            this.NombreUsuario = C.NombreUsuario || C.Matricula;
            this.EnSIASE = C.EnSIASE;
        }
    }
    return CuentaBase;
}());

var CuentaRol = /** @class */ (function (_super) {
    __extends(CuentaRol, _super);
    function CuentaRol(C, Rol) {
        var _this = _super.call(this, C) || this;
        _this.RolId = Rol;
        return _this;
    }
    return CuentaRol;
}(CuentaBase));

var CuentaGeneral = /** @class */ (function () {
    function CuentaGeneral(P, C) {
        if (P != null) {
            this.Nombre = P.Nombre;
            this.ApellidoPaterno = P.ApellidoPaterno;
            this.ApellidoMaterno = P.ApellidoMaterno;
            this.CuentaId = P.CuentaId;
            this.NombreUsuario = P.NombreUsuario;
            this.EnSIASE = P.EnSIASE;
        }
        if (C != null) {
            this.CuentaId = C.CuentaId;
            this.NombreUsuario = C.NombreUsuario;
            this.EnSIASE = C.EnSIASE;
        }
    }
    return CuentaGeneral;
}());

var Profesor = /** @class */ (function () {
    function Profesor(P, C) {
        if (P != null) {
            this.Nombre = P.Nombre;
            this.ApellidoPaterno = P.ApellidoPaterno;
            this.ApellidoMaterno = P.ApellidoMaterno;
            this.CuentaId = P.CuentaId;
            this.NombreUsuario = P.NombreUsuario;
            this.CorreoUniversitario = P.CorreoUniversitario;
            this.EnSIASE = P.EnSIASE;
        }
        if (C != null) {
            this.CuentaId = C.CuentaId;
            this.NombreUsuario = C.NombreUsuario;
            this.CorreoUniversitario = C.CorreoUniversitario;
            this.EnSIASE = C.EnSIASE;
        }
    }
    return Profesor;
}());

var Estudiante = /** @class */ (function () {
    function Estudiante(P, C) {
        if (P != null) {
            this.Nombre = P.Nombre;
            this.ApellidoPaterno = P.ApellidoPaterno;
            this.ApellidoMaterno = P.ApellidoMaterno;
            this.CuentaId = P.CuentaId;
            this.NombreUsuario = P.NombreUsuario;
            this.EnSIASE = P.EnSIASE;
            this.GrupoId = P.GrupoId;
            this.Estado = P.Estado;
        }
        if (C != null) {
            this.CuentaId = C.CuentaId;
            this.NombreUsuario = C.NombreUsuario;
            this.EnSIASE = C.EnSIASE;
            this.GrupoId = C.GrupoId;
            this.Estado = C.Estado;
        }
    }
    return Estudiante;
}());

var EstudianteCurso = /** @class */ (function () {
    function EstudianteCurso(E) {
        if (E != null) {
            this.Nombre = E.Nombre;
            this.ApellidoPaterno = E.ApellidoPaterno;
            this.ApellidoMaterno = E.ApellidoMaterno;
            this.NombreUsuario = E.NombreUsuario;
            this.CuentaId = E.CuentaId;
            this.GrupoId = E.GrupoId;
            this.GrupoEstudianteId = E.GrupoEstudianteId;
            this.EnSIASE = E.EnSIASE;
            this.Estado = E.Estado;
            this.CorreoAdicional = E.CorreoAdicional;
            this.CorreoUniversitario = E.CorreoUniversitario;
            if (E.Compromiso) {
                this.Compromiso = new _Compromiso__WEBPACK_IMPORTED_MODULE_0__["CompromisoEstudiante"](E.Compromiso);
            }
        }
    }
    return EstudianteCurso;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Curso.ts":
/*!*************************************!*\
  !*** ./src/app/shared/DTO/Curso.ts ***!
  \*************************************/
/*! exports provided: Curso, CursoImagen, CursoGeneral, CursoBase, CursoLista, CursoCompartir, UnidadAprendizajeDisciplinar, CursoReplica, CursoReplicaContenido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curso", function() { return Curso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoImagen", function() { return CursoImagen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoGeneral", function() { return CursoGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoBase", function() { return CursoBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoLista", function() { return CursoLista; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoCompartir", function() { return CursoCompartir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadAprendizajeDisciplinar", function() { return UnidadAprendizajeDisciplinar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoReplica", function() { return CursoReplica; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoReplicaContenido", function() { return CursoReplicaContenido; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/shared/DTO/Cuenta.ts");
/* harmony import */ var _Grupo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grupo */ "./src/app/shared/DTO/Grupo.ts");
/* harmony import */ var _Estructura__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Estructura */ "./src/app/shared/DTO/Estructura.ts");
/* harmony import */ var _Recurso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Recurso */ "./src/app/shared/DTO/Recurso.ts");
/* harmony import */ var _Modalidad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modalidad */ "./src/app/shared/DTO/Modalidad.ts");
/* harmony import */ var _Compromiso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Compromiso */ "./src/app/shared/DTO/Compromiso.ts");
/* harmony import */ var _Foro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Foro */ "./src/app/shared/DTO/Foro.ts");







var Curso = /** @class */ (function () {
    function Curso(C) {
        this.Grupos = [];
        this.Estudiantes = [];
        this.Profesores = [];
        this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_4__["Modalidad"](null);
        if (C != null) {
            this.CursoId = C.CursoId;
            this.Nombre = C.Nombre;
            this.Alias = C.Alias;
            this.AreaAcademicaId = C.AreaAcademicaId;
            this.FechaInicio = new Date(C.FechaInicio);
            this.FechaFin = new Date(C.FechaFin);
            this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_4__["Modalidad"](C.Modalidad);
            this.ModalidadId = C.ModalidadId;
            this.ModeloId = C.ModeloId;
            this.ProgramaId = C.ProgramaId;
            this.EnSIASE = C.EnSIASE;
            this.Replicado = C.Replicado;
            this.Color = C.Color;
            this.Disponible = C.Disponible;
            if (C.Estado)
                this.Estado = C.Estado;
            //Propiedades Opcionales
            if (C.Bienvenida && C.Bienvenida != "")
                this.Bienvenida = C.Bienvenida;
            if (C.Compromiso && C.Compromiso.Descripcion != null)
                this.Compromiso = new _Compromiso__WEBPACK_IMPORTED_MODULE_5__["Compromiso"](C.Compromiso);
            //Listados
            if (C.Profesores)
                this.Profesores = C.Profesores.map(function (P) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["Profesor"](P, null); });
            if (C.Estudiantes)
                this.Estudiantes = C.Estudiantes.map(function (P) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["Estudiante"](P, null); });
            if (C.Grupos)
                this.Grupos = C.Grupos.map(function (G) { return new _Grupo__WEBPACK_IMPORTED_MODULE_1__["Grupo"](G); });
            if (C.Estructura)
                this.Estructura = new _Estructura__WEBPACK_IMPORTED_MODULE_2__["Estructura"](C.Estructura);
            if (C.Recursos)
                this.Recursos = new _Recurso__WEBPACK_IMPORTED_MODULE_3__["Recursos"](C.Recursos);
            if (C.Foro)
                this.Foro = new _Foro__WEBPACK_IMPORTED_MODULE_6__["Foro"](C.Foro);
            if (C.HEXA)
                this.HEXA = C.HEXA;
            if (C.ImagenId)
                this.ImagenId = C.ImagenId;
            if (C.Imagen)
                this.Imagen = new CursoImagen(C.Imagen);
            if (C.EsMaster)
                this.EsMaster = C.EsMaster;
            if (C.RelacionarRubricaCompetencia)
                this.RelacionarRubricaCompetencia = C.RelacionarRubricaCompetencia;
            this.EsReplicable = C.EsReplicable;
            if (C.Replicable)
                this.Replicable = C.Replicable;
        }
    }
    return Curso;
}());

var CursoImagen = /** @class */ (function () {
    function CursoImagen(I) {
        this.ImagenId = I.ImagenId;
        this.CarpetaImagen = I.CarpetaImagen;
        this.Nombre = I.Nombre;
        this.NombreBanner = I.NombreBanner;
        this.NombrePreview = I.NombrePreview;
        this.Ruta = I.Ruta;
    }
    return CursoImagen;
}());

var CursoGeneral = /** @class */ (function () {
    function CursoGeneral(C) {
        if (C) {
            this.CursoId = C.CursoId;
            this.Nombre = C.Nombre;
            this.Alias = C.Alias;
            this.AreaAcademicaId = C.AreaAcademicaId;
            this.EnSIASE = C.EnSIASE;
        }
    }
    return CursoGeneral;
}());

var CursoBase = /** @class */ (function () {
    function CursoBase(C) {
        this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_4__["Modalidad"](null);
        this.Profesores = [];
        if (C) {
            this.CursoId = C.CursoId;
            this.Nombre = C.Nombre;
            this.Alias = C.Alias;
            this.AreaAcademicaId = C.AreaAcademicaId;
            this.EnSIASE = C.EnSIASE;
            this.ModeloId = C.ModeloId;
            this.Modalidad = new _Modalidad__WEBPACK_IMPORTED_MODULE_4__["Modalidad"](C.Modalidad);
            ;
            this.FechaInicio = new Date(C.FechaInicio);
            this.FechaFin = new Date(C.FechaFin);
            this.Profesores = C.Profesores;
            this.EsReplicable = C.EsReplicable;
            this.Replicable = C.Replicable;
        }
    }
    return CursoBase;
}());

var CursoLista = /** @class */ (function () {
    function CursoLista(C) {
        this.Profesores = [];
        if (C) {
            this.Alias = C.Alias;
            this.CursoId = C.CursoId;
            this.Nombre = C.Nombre;
            this.Disponible = C.Disponible;
            this.Profesores = C.Profesores.map(function (P) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["Profesor"](P, null); });
        }
    }
    return CursoLista;
}());

var CursoCompartir = /** @class */ (function () {
    function CursoCompartir() {
    }
    return CursoCompartir;
}());

var UnidadAprendizajeDisciplinar = /** @class */ (function () {
    function UnidadAprendizajeDisciplinar(UAD) {
        if (UAD) {
            this.UnidadAprendizajeId = UAD.UnidadAprendizajeId;
            this.Nombre = UAD.Nombre;
            this.CampoDisciplinarId = UAD.CampoDisciplinarId;
            this.CampoDisciplinar = UAD.CampoDisciplinar;
            this.PlanEstudioId = UAD.PlanEstudioId;
            this.Semestre = UAD.Semestre;
            this.Estado = UAD.Estado;
        }
    }
    return UnidadAprendizajeDisciplinar;
}());

var CursoReplica = /** @class */ (function () {
    function CursoReplica(C) {
        if (C) {
            this.CursoDestinoId = C.CursoDestinoId;
            this.RespetarFechas = C.RespetarFechas;
            this.BloquearContenidoPrograma = C.BloquearContenidoPrograma;
            this.BloquearContenidoEstructura = C.BloquearContenidoEstructura;
            this.BloquearContenidoSecuencia = C.BloquearContenidoSecuencia;
            this.ContenidoCurso = C.ContenidoCurso.map(function (CC) { return new CursoReplicaContenido(CC); });
        }
    }
    return CursoReplica;
}());

var CursoReplicaContenido = /** @class */ (function () {
    //ContenidoCursoRecurso:
    function CursoReplicaContenido(CC) {
        this.ContenidoCursoId = CC.ContenidoCursoId;
        this.CategoriaId = CC.CategoriaId;
        this.SeReplica = CC.SeReplica;
        this.ContenidoCursoRecurso = CC.ContenidoCursoRecurso;
    }
    return CursoReplicaContenido;
}());

/*
export class CursoReplicaContenidoRecurso{
    ContenidoCursoRecursoId: number;
    TipoRecursoId: number;
    SeReplica: boolean;
}*/


/***/ }),

/***/ "./src/app/shared/DTO/Documento.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/DTO/Documento.ts ***!
  \*****************************************/
/*! exports provided: Archivo, ArchivoEquipo, Documento, DocumentoEquipo, DocumentoEntrega */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Archivo", function() { return Archivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivoEquipo", function() { return ArchivoEquipo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documento", function() { return Documento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoEquipo", function() { return DocumentoEquipo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentoEntrega", function() { return DocumentoEntrega; });
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
var Archivo = /** @class */ (function () {
    function Archivo(D) {
        if (D) {
            this.Nombre = D.Nombre;
            this.Extension = D.Extension;
            this.Peso = D.Peso;
            this.URL = D.URL;
            this.TipoDocumentoId = D.TipoDocumentoId;
            this.FechaCreacion = new Date(D.FechaCreacion);
            this.Estado = D.Estado;
        }
    }
    return Archivo;
}());

var ArchivoEquipo = /** @class */ (function (_super) {
    __extends(ArchivoEquipo, _super);
    function ArchivoEquipo(D) {
        var _this = _super.call(this, D) || this;
        if (D) {
            _this.EquipoId = D.EquipoId;
            _this.CarpetaId = D.CarpetaId;
            _this.CuentaId = D.CuentaId;
            _this.DocumentoId = D.DocumentoId;
            _this.NombreFisico = D.NombreFisico;
        }
        return _this;
    }
    return ArchivoEquipo;
}(Archivo));

var Documento = /** @class */ (function () {
    function Documento(D) {
        if (D) {
            this.DocumentoId = D.DocumentoId;
            this.Extension = D.Extension;
            this.FechaCreacion = new Date(D.FechaCreacion);
            this.Nombre = D.Nombre;
            this.NombreFisico = D.NombreFisico;
            this.Peso = D.Peso;
            this.TipoDocumentoId = D.TipoDocumentoId;
            this.URL = D.URL;
            this.Estado = D.Estado;
        }
    }
    return Documento;
}());

var DocumentoEquipo = /** @class */ (function (_super) {
    __extends(DocumentoEquipo, _super);
    function DocumentoEquipo(DE) {
        var _this = _super.call(this, DE) || this;
        if (DE) {
            _this.CarpetaId = DE.CarpetaId;
            _this.CuentaId = DE.CuentaId;
            _this.EquipoId = DE.EquipoId;
        }
        return _this;
    }
    return DocumentoEquipo;
}(Documento));

var DocumentoEntrega = /** @class */ (function () {
    function DocumentoEntrega(DE) {
        if (DE) {
            this.EntregaId = DE.EntregaId;
            this.CuentaId = DE.CuentaId;
            this.ElementoId = DE.ElementoId;
            this.TipoElementoId = DE.TipoElementoId;
            this.Documento = new Documento(DE.Documento);
            this.EnEquipo = DE.EnEquipo;
            this.Estado = DE.Estado;
        }
    }
    return DocumentoEntrega;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Encuesta.ts":
/*!****************************************!*\
  !*** ./src/app/shared/DTO/Encuesta.ts ***!
  \****************************************/
/*! exports provided: Encuesta, EncuestaDestino, EncuestaRol, EncuestaReactivo, EncuestaRespuesta, EncuestaReactivoRespuestaVF, TipoRespuestaVerdaderoFalso, EncuestaReactivoEjecucion, EjecucionReactivoVerdaderoFalso, EjecucionReactivoOpcionMultiple, EjecucionReactivoRespuestaMultipleDTO, EjecucionReactivoAbierto, EncuestaReactivoResultado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encuesta", function() { return Encuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaDestino", function() { return EncuestaDestino; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaRol", function() { return EncuestaRol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaReactivo", function() { return EncuestaReactivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaRespuesta", function() { return EncuestaRespuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaReactivoRespuestaVF", function() { return EncuestaReactivoRespuestaVF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoRespuestaVerdaderoFalso", function() { return TipoRespuestaVerdaderoFalso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaReactivoEjecucion", function() { return EncuestaReactivoEjecucion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecucionReactivoVerdaderoFalso", function() { return EjecucionReactivoVerdaderoFalso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecucionReactivoOpcionMultiple", function() { return EjecucionReactivoOpcionMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecucionReactivoRespuestaMultipleDTO", function() { return EjecucionReactivoRespuestaMultipleDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EjecucionReactivoAbierto", function() { return EjecucionReactivoAbierto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaReactivoResultado", function() { return EncuestaReactivoResultado; });
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");
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

var Encuesta = /** @class */ (function () {
    function Encuesta(E, Tipo) {
        this.Destinos = [];
        this.RolesDirigido = [];
        this.Reactivos = [];
        if (E) {
            this.EncuestaId = E.EncuestaId;
            this.Titulo = E.Titulo;
            this.Descripcion = E.Descripcion;
            this.FechaInicio = new Date(E.FechaInicio);
            this.FechaFin = new Date(E.FechaFin);
            this.Ejecuciones = E.Ejecuciones;
            this.RolId = E.RolId;
            this.Propia = E.Propia;
            this.BloquearCurso = E.BloquearCurso;
            this.TipoDestinoId = E.TipoDestinoId;
            this.EstadoEncuestaId = E.EstadoEncuestaId;
            this.Estado = E.Estado;
            if (Tipo == 1) {
                if (E.Destinos)
                    this.Destinos = E.Destinos;
                if (E.RolesDirigido)
                    this.RolesDirigido = E.RolesDirigido;
                if (E.Reactivos)
                    this.Reactivos = E.Reactivos.map(function (R) { return new EncuestaReactivo(R); });
            }
            else if (Tipo == 2) {
                if (E.Reactivos)
                    this.Reactivos = E.Reactivos.map(function (R) { return new EncuestaReactivoEjecucion(R); });
            }
        }
    }
    return Encuesta;
}());

var EncuestaDestino = /** @class */ (function () {
    function EncuestaDestino(D) {
        if (D) {
            this.EncuestaDestinoId = D.EncuestaDestinoId;
            this.DestinoId = D.DestinoId;
            this.Estado = D.Estado;
        }
    }
    return EncuestaDestino;
}());

var EncuestaRol = /** @class */ (function () {
    function EncuestaRol(R) {
        this.EncuestaRolId = R.EncuestaRolId,
            this.RolId = R.RolId;
        this.Estado = R.Estado;
    }
    return EncuestaRol;
}());

//Reactivo
//ReactivoRespuestaOpcionMultiple
//ReactivoRespuestaMultiple
//ReactivoRespuestaRelacionarDerecha
//ReactivoRespuestaRelacionarIzquierda
//ReactivoRespuestaVerdaderoFalso
/******************** Encuesta Reactivos ************************/
var EncuestaReactivo = /** @class */ (function () {
    function EncuestaReactivo(RE) {
        this.Respuestas = [];
        if (RE) {
            this.EncuestaReactivoId = RE.EncuestaReactivoId;
            this.EncuestaId = RE.EncuestaId;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(RE.Descripcion);
            this.TipoReactivoId = RE.TipoReactivoId;
            this.CantidadRespuestas = RE.CantidadRespuestas;
            this.Posicion = RE.Posicion;
            this.Estado = RE.Estado;
            this.Respuestas = RE.Respuestas.map(function (R) { return new EncuestaRespuesta(R); });
            this.RespuestaVerdaderoFalso = new EncuestaReactivoRespuestaVF(RE.RespuestaVerdaderoFalso);
        }
    }
    return EncuestaReactivo;
}());

/******************** Encuesta Reactivos Respuestas ************************/
var EncuestaRespuesta = /** @class */ (function () {
    function EncuestaRespuesta(ResE) {
        if (ResE) {
            this.EncuestaReactivoRespuestaId = ResE.EncuestaReactivoRespuestaId;
            this.Descripcion = ResE.Descripcion;
            this.Posicion = ResE.Posicion;
            if (ResE.Estado != null) {
                this.Estado = ResE.Estado;
            }
            else {
                this.Estado = true;
            }
        }
    }
    return EncuestaRespuesta;
}());

var EncuestaReactivoRespuestaVF = /** @class */ (function (_super) {
    __extends(EncuestaReactivoRespuestaVF, _super);
    function EncuestaReactivoRespuestaVF(BRR_VF) {
        var _this = this;
        if (BRR_VF) {
            _this = _super.call(this, BRR_VF) || this;
            _this.EncuestaReactivoRespuestaVerdaderoFalsoId = BRR_VF.EncuestaReactivoRespuestaVerdaderoFalsoId;
            _this.TipoRespuestaVerdaderoFalso = new TipoRespuestaVerdaderoFalso(BRR_VF.TipoRespuestaVerdaderoFalso);
            _this.Estado = BRR_VF.Estado;
        }
        return _this;
    }
    return EncuestaReactivoRespuestaVF;
}(EncuestaRespuesta));

var TipoRespuestaVerdaderoFalso = /** @class */ (function () {
    function TipoRespuestaVerdaderoFalso(BRR_VF) {
        if (BRR_VF) {
            this.TipoRespuestaVerdaderoFalsoId = BRR_VF.TipoRespuestaVerdaderoFalsoId;
            this.NombreVerdadero = BRR_VF.NombreVerdadero;
            this.NombreFalso = BRR_VF.NombreFalso;
            this.Estatus = BRR_VF.Estatus;
        }
    }
    return TipoRespuestaVerdaderoFalso;
}());

/******************** Encuesta Ejecucion ************************/
var EncuestaReactivoEjecucion = /** @class */ (function (_super) {
    __extends(EncuestaReactivoEjecucion, _super);
    function EncuestaReactivoEjecucion(R) {
        var _this = _super.call(this, R) || this;
        _this.EjecucionReactivoRespuestaMultipleDTO = [];
        if (R) {
            _this.EjecucionReactivoAbierto = R.EjecucionReactivoAbierto;
            _this.EjecucionReactivoVerdaderoFalso = R.EjecucionReactivoVerdaderoFalso;
            _this.EjecucionReactivoOpcionMultiple = R.EjecucionReactivoOpcionMultiple;
            _this.EjecucionReactivoRespuestaMultipleDTO = R.EjecucionReactivoRespuestaMultipleDTO.map(function (ER) { return new EjecucionReactivoRespuestaMultipleDTO(ER); });
        }
        return _this;
    }
    return EncuestaReactivoEjecucion;
}(EncuestaReactivo));

var EjecucionReactivoVerdaderoFalso = /** @class */ (function () {
    function EjecucionReactivoVerdaderoFalso(R) {
        if (R) {
            this.EjecucionReactivoVerdaderoFalsoId = R.EjecucionReactivoVerdaderoFalsoId;
            this.EjecucionReactivo = R.EjecucionReactivo;
            this.Estado = R.Estado;
        }
    }
    return EjecucionReactivoVerdaderoFalso;
}());

var EjecucionReactivoOpcionMultiple = /** @class */ (function () {
    function EjecucionReactivoOpcionMultiple(R) {
        if (R) {
            this.EjecucionReactivoOpcionMultipleId = R.EjecucionReactivoOpcionMultipleId;
            this.EncuestaReactivoRespuestaId = R.EncuestaReactivoRespuestaId;
            this.Estado = R.Estado;
        }
    }
    return EjecucionReactivoOpcionMultiple;
}());

var EjecucionReactivoRespuestaMultipleDTO = /** @class */ (function () {
    function EjecucionReactivoRespuestaMultipleDTO(R) {
        if (R) {
            this.EjecucionReactivoRespuestaMultipleId = R.EjecucionReactivoRespuestaMultipleId;
            this.EncuestaReactivoRespuestaId = R.EncuestaReactivoRespuestaId;
            this.Estado = R.Estado;
        }
    }
    return EjecucionReactivoRespuestaMultipleDTO;
}());

var EjecucionReactivoAbierto = /** @class */ (function () {
    function EjecucionReactivoAbierto(R) {
        if (R) {
            this.EjecucionReactivoAbiertoId = R.EjecucionReactivoAbiertoId;
            this.EjecucionReactivo = R.EjecucionReactivo;
            this.Estado = R.Estado;
        }
    }
    return EjecucionReactivoAbierto;
}());

/* Encuesta Resultados */
var EncuestaReactivoResultado = /** @class */ (function () {
    function EncuestaReactivoResultado(ERR) {
        if (ERR) {
            this.EncuestaReactivoRespuestaId = ERR.EncuestaReactivoRespuestaId;
            this.Descripcion = ERR.Descripcion;
            this.Cantidad = ERR.Cantidad;
            this.Posicion = ERR.Posicion;
        }
    }
    return EncuestaReactivoResultado;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Estructura.ts":
/*!******************************************!*\
  !*** ./src/app/shared/DTO/Estructura.ts ***!
  \******************************************/
/*! exports provided: Estructura, ElementoEvaluable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Estructura", function() { return Estructura; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementoEvaluable", function() { return ElementoEvaluable; });
/* harmony import */ var _Etapa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Etapa */ "./src/app/shared/DTO/Etapa.ts");
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modulo */ "./src/app/shared/DTO/Modulo.ts");
/* harmony import */ var _PIA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PIA */ "./src/app/shared/DTO/PIA.ts");



var Estructura = /** @class */ (function () {
    function Estructura(E) {
        this.Etapas = [];
        this.Modulos = [];
        if (E) {
            this.EstructuraId = E.EstructuraId;
            this.CursoId = E.CursoId;
            this.ModeloId = E.ModeloId;
            this.TipoEstructuraId = E.TipoEstructuraId;
            this.Estado = E.Estado;
            if (E.Etapas)
                this.Etapas = E.Etapas.map(function (E) { return new _Etapa__WEBPACK_IMPORTED_MODULE_0__["Etapa"](E); });
            if (E.Modulos)
                this.Modulos = E.Modulos.map(function (M) { return new _Modulo__WEBPACK_IMPORTED_MODULE_1__["Modulo"](M); });
            if (E.ProductoIntegrador && E.ProductoIntegrador.ProductoIntegradorId != 0)
                this.ProductoIntegrador = new _PIA__WEBPACK_IMPORTED_MODULE_2__["PIA"](E.ProductoIntegrador);
        }
    }
    return Estructura;
}());

var ElementoEvaluable = /** @class */ (function () {
    function ElementoEvaluable(EE) {
        if (EE) {
            this.ElementoId = EE.ElementoId;
            this.TipoElementoId = EE.TipoElementoId;
            this.Descripcion = EE.Descripcion;
            this.Estado = EE.Estado;
        }
    }
    return ElementoEvaluable;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Etapa.ts":
/*!*************************************!*\
  !*** ./src/app/shared/DTO/Etapa.ts ***!
  \*************************************/
/*! exports provided: Etapa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Etapa", function() { return Etapa; });
/* harmony import */ var _Evidencia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Evidencia */ "./src/app/shared/DTO/Evidencia.ts");
/* harmony import */ var _Examen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Examen */ "./src/app/shared/DTO/Examen.ts");


var Etapa = /** @class */ (function () {
    function Etapa(E) {
        this.Evidencias = [];
        this.EtapaExamenes = [];
        this.Elementos = [];
        if (E) {
            this.EtapaId = E.EtapaId;
            this.EstructuraId = E.EstructuraId;
            this.Posicion = E.Posicion;
            this.Nombre = E.Nombre;
            this.ElementoCompetencia = E.ElementoCompetencia;
            this.Estado = E.Estado;
            this.Evidencias = E.Evidencias.map(function (E) { return new _Evidencia__WEBPACK_IMPORTED_MODULE_0__["Evidencia"](E); });
            this.EtapaExamenes = E.EtapaExamenes.map(function (E) { return new _Examen__WEBPACK_IMPORTED_MODULE_1__["ExamenEtapa"](E); });
            this.Elementos = E.Evidencias.concat(E.EtapaExamenes);
        }
    }
    return Etapa;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Evidencia.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/DTO/Evidencia.ts ***!
  \*****************************************/
/*! exports provided: Evidencia, Contenido, TemaEvidencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evidencia", function() { return Evidencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido", function() { return Contenido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaEvidencia", function() { return TemaEvidencia; });
/* harmony import */ var _Coevaluacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coevaluacion */ "./src/app/shared/DTO/Coevaluacion.ts");
/* harmony import */ var _Examen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Examen */ "./src/app/shared/DTO/Examen.ts");
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");



var Evidencia = /** @class */ (function () {
    function Evidencia(E) {
        this.EntregarDocumentos = false;
        this.EnEquipo = false;
        this.EntregaExtemporanea = false;
        this.EntregarRecursoExterno = false;
        this.UsaRubrica = false;
        this.UsaCoevaluacion = false;
        this.Contenidos = [];
        this.EvidenciaExamenes = [];
        this.Temas = [];
        this.Tema = [];
        if (E) {
            this.EvidenciaId = E.EvidenciaId;
            this.EtapaId = E.EtapaId;
            this.Posicion = E.Posicion;
            this.Descripcion = E.Descripcion;
            this.FechaInicio = new Date(E.FechaInicio);
            this.FechaFin = new Date(E.FechaFin);
            this.FechaLimite = new Date(E.FechaLimite);
            this.TipoEvidenciaId = E.TipoEvidenciaId;
            this.Valor = E.Valor;
            this.EntregarDocumentos = E.EntregarDocumentos;
            this.EnEquipo = E.EnEquipo;
            this.EntregaExtemporanea = E.EntregaExtemporanea;
            this.EntregarRecursoExterno = E.EntregarRecursoExterno;
            this.UsaRubrica = E.UsaRubrica;
            this.UsaCoevaluacion = E.UsaCoevaluacion;
            this.Estado = E.Estado;
            this.Justificacion = E.Justificacion;
            this.MetricaAvance = E.MetricaAvance;
            if (E.EvidenciaExamenes) {
                this.EvidenciaExamenes = E.EvidenciaExamenes.map(function (EE) { return new _Examen__WEBPACK_IMPORTED_MODULE_1__["ExamenElemento"](EE); });
            }
            if (E.Contenidos) {
                this.Contenidos = E.Contenidos.map(function (C) { return new Contenido(C); });
            }
            if (E.Tema) {
                this.Temas = E.Tema.map(function (T) { return new TemaEvidencia(T); });
                this.Tema = E.Tema.map(function (T) { return new TemaEvidencia(T); });
            }
            if (E.Coevaluacion) {
                this.Coevaluacion = new _Coevaluacion__WEBPACK_IMPORTED_MODULE_0__["Coevaluacion"](E.Coevaluacion);
            }
        }
    }
    return Evidencia;
}());

var Contenido = /** @class */ (function () {
    function Contenido(C) {
        this.Archivos = [];
        if (C) {
            this.ContenidoEvidenciaId = C.ContenidoEvidenciaId;
            this.EvidenciaId = C.EvidenciaId;
            this.Titulo = C.Titulo;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_2__["TextEditor"]().CleanFroalaEditor(C.Descripcion);
            this.TipoContenidoId = C.TipoContenidoId;
            this.Posicion = C.Posicion;
            this.Estado = C.Estado;
            if (C.Archivos) {
                this.Archivos = C.Archivos;
            }
        }
    }
    return Contenido;
}());

var TemaEvidencia = /** @class */ (function () {
    function TemaEvidencia(TE) {
        if (TE) {
            this.TemaEvidenciaId = TE.TemaEvidenciaId;
            this.EvidenciaId = TE.EvidenciaId;
            this.TemaId = TE.TemaId;
            this.Nombre = TE.Nombre;
            this.Estado = TE.Estado;
        }
    }
    return TemaEvidencia;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Examen.ts":
/*!**************************************!*\
  !*** ./src/app/shared/DTO/Examen.ts ***!
  \**************************************/
/*! exports provided: ExamenBase, ExamenEvidencia, EstudianteExamen, ReactivosExamenEstudiante, Examen, ExamenEtapa, ExamenElemento, ExamenReactivoRespuesta, ExamenContestar, ExamenRespuestaContestar, ExamenReactivo, ExamenRespuesta, ExamenReactivoRespuestaVF, ExamenReactivoRespuestaOM, ExamenReactivoRespuestaRM, ExamenReactivoRespuestaRI, ExamenReactivoRespuestaRD, ReactivoRespuestaCalificacion, RespuestaEjecucion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenBase", function() { return ExamenBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenEvidencia", function() { return ExamenEvidencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudianteExamen", function() { return EstudianteExamen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactivosExamenEstudiante", function() { return ReactivosExamenEstudiante; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examen", function() { return Examen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenEtapa", function() { return ExamenEtapa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenElemento", function() { return ExamenElemento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuesta", function() { return ExamenReactivoRespuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenContestar", function() { return ExamenContestar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenRespuestaContestar", function() { return ExamenRespuestaContestar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivo", function() { return ExamenReactivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenRespuesta", function() { return ExamenRespuesta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuestaVF", function() { return ExamenReactivoRespuestaVF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuestaOM", function() { return ExamenReactivoRespuestaOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuestaRM", function() { return ExamenReactivoRespuestaRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuestaRI", function() { return ExamenReactivoRespuestaRI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamenReactivoRespuestaRD", function() { return ExamenReactivoRespuestaRD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactivoRespuestaCalificacion", function() { return ReactivoRespuestaCalificacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespuestaEjecucion", function() { return RespuestaEjecucion; });
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuenta */ "./src/app/shared/DTO/Cuenta.ts");
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


var ExamenBase = /** @class */ (function () {
    function ExamenBase(E) {
        if (E) {
            this.ExamenId = E.ExamenId;
            this.CursoId = E.CursoId;
            this.Nombre = E.Nombre;
            this.FechaInicio = E.FechaInicio;
            this.FechaFin = E.FechaFin;
            this.EstadoExamenId = E.EstadoExamenId;
            this.Estado = E.Estado;
        }
    }
    return ExamenBase;
}());

var ExamenEvidencia = /** @class */ (function () {
    function ExamenEvidencia(EE) {
        if (EE) {
            this.EvidenciaExamenId = EE.EvidenciaExamenId;
            this.Examen = new Examen(EE.Examen);
            this.Estado = EE.Estado;
        }
    }
    return ExamenEvidencia;
}());

var EstudianteExamen = /** @class */ (function () {
    function EstudianteExamen(EE) {
        if (EE) {
            this.EstudianteExamenId = EE.EstudianteExamenId;
            this.CuentaId = EE.CuentaId;
            this.GrupoId = EE.GrupoId;
            this.Habilitado = EE.Habilitado;
            this.ExamenId = EE.ExamenId;
            this.FechaInicio = EE.FechaInicio ? new Date(EE.FechaInicio) : null;
            this.FechaFin = EE.FechaFin ? new Date(EE.FechaFin) : null;
            this.FechaInicioExamen = new Date(EE.FechaInicioExamen);
            this.FechaFinExamen = new Date(EE.FechaFinExamen);
            this.CalificacionObtenida = EE.CalificacionObtenida;
            this.CalificacionOtorgada = EE.CalificacionOtorgada;
            this.MotivoCambioCalificacion = EE.MotivoCambioCalificacion;
            this.NombreGrupo = EE.NombreGrupo;
            this.Tiempo = EE.Tiempo;
            this.TipoReactivacionId = EE.TipoReactivacionId;
            this.TipoTerminacionId = EE.TipoTerminacionId;
            this.Estado = EE.Estado;
            this.Estudiante = EE.Estudiante ? new _Cuenta__WEBPACK_IMPORTED_MODULE_1__["Estudiante"](EE.Estudiante, EE.Estudiante) : null;
            this.Reactivos = EE.Reactivos;
        }
    }
    return EstudianteExamen;
}());

var ReactivosExamenEstudiante = /** @class */ (function () {
    function ReactivosExamenEstudiante(REE) {
        this.Reactivos = [];
        if (REE) {
            this.Reactivos = REE.Reactivos.map(function (R) { return new ExamenReactivoRespuesta(R); });
            this.ReactivosBloquesFaltantes = REE.ReactivosBloquesFaltantes;
            this.ReactivosBloquesTotales = REE.ReactivosBloquesTotales;
            this.TiempoRestante = REE.TiempoRestante;
            this.RespuestasEstudiante = new ExamenContestar(REE.RespuestasEstudiante);
        }
    }
    return ReactivosExamenEstudiante;
}());

var Examen = /** @class */ (function (_super) {
    __extends(Examen, _super);
    function Examen(E) {
        var _this = _super.call(this, E) || this;
        _this.Navegable = false;
        _this.OrdenReactivosAleatorio = false;
        _this.PorBloque = false;
        _this.HabilitarExamenIndividual = false;
        _this.VerDetalleCalificacionPreviaFinalizacion = false;
        _this.Reactivos = [];
        if (E) {
            _this.Instrucciones = E.Instrucciones;
            _this.Tiempo = E.Tiempo;
            _this.FechaCreacion = E.FechaCreacion;
            _this.FechaModificacion = E.FechaModificacion;
            _this.PuntosAprobatorios = E.PuntosAprobatorios;
            _this.HabilitarExamenIndividual = E.HabilitarExamenIndividual;
            _this.TipoRetroalimentacionAlumnoId = E.TipoRetroalimentacionAlumnoId;
            _this.Navegable = E.Navegable;
            _this.TipoTiempoExamenId = E.TipoTiempoExamenId;
            _this.TipoIncisoRespuestaId = E.TipoIncisoRespuestaId;
            _this.OrdenReactivosAleatorio = E.OrdenReactivosAleatorio;
            _this.PorBloque = E.PorBloque;
            _this.VerDetalleCalificacionPreviaFinalizacion = E.VerDetalleCalificacionPreviaFinalizacion;
            _this.ElementoExamen = E.ElementoExamen;
            _this.EtapaExamen = E.EtapaExamen;
            _this.EsVinculado = E.EsVinculado;
            _this.EsBloqueado = E.EsBloqueado;
            _this.EditarFechas = (E.ElementoExamen && E.EtapaExamen) ? E.ElementoExamen.EditarFechas || E.EtapaExamen.EditarFechas : false;
        }
        return _this;
    }
    return Examen;
}(ExamenBase));

/* ExamenEtapa */
var ExamenEtapa = /** @class */ (function () {
    function ExamenEtapa(EE) {
        this.Examen = new ExamenBase(null);
        if (EE) {
            this.EtapaExamenId = EE.EtapaExamenId;
            this.EtapaId = EE.EtapaId;
            this.Examen = new ExamenBase(EE.Examen);
            this.Valor = EE.Valor;
            this.Posicion = EE.Posicion;
            this.Estado = EE.Estado;
        }
    }
    return ExamenEtapa;
}());

/* ExamenEvidencia */
var ExamenElemento = /** @class */ (function () {
    function ExamenElemento(EE) {
        this.Examen = new ExamenBase(null);
        if (EE) {
            if (EE.EvidenciaExamenId)
                this.EvidenciaExamenId = EE.EvidenciaExamenId;
            if (EE.ActividadExamenId)
                this.ActividadExamenId = EE.ActividadExamenId;
            this.Examen = new ExamenBase(EE.Examen);
            this.Estado = EE.Estado;
        }
    }
    return ExamenElemento;
}());

/* Reactivos */
var ExamenReactivoRespuesta = /** @class */ (function () {
    function ExamenReactivoRespuesta(ERR) {
        this.Reactivo = new ExamenReactivo(null);
        this.ReactivoRespuestaOpcionMultiple = [];
        this.ReactivoRespuestaMultiple = [];
        this.ReactivoRespuestaRelacionarDerecha = [];
        this.ReactivoRespuestaRelacionarIzquierda = [];
        if (ERR) {
            this.Reactivo = new ExamenReactivo(ERR.Reactivo);
            switch (ERR.Reactivo.TipoReactivoId) {
                //Verdadero/Falso
                case 1:
                    this.ReactivoRespuestaVerdaderoFalso = new ExamenReactivoRespuestaVF(ERR.ReactivoRespuestaVerdaderoFalso[0] || ERR.ReactivoRespuestaVerdaderoFalso);
                    break;
                //Opcion Multiple
                case 2:
                    this.ReactivoRespuestaOpcionMultiple = ERR.ReactivoRespuestaOpcionMultiple;
                    break; //M.map(R => new ExamenReactivoRespuestaOM(R)); break;
                //Respuesta Multiple
                case 3:
                    this.ReactivoRespuestaMultiple = ERR.ReactivoRespuestaMultiple.map(function (R) { return new ExamenReactivoRespuestaRM(R); });
                    break;
                //Relacionar
                case 4:
                    this.ReactivoRespuestaRelacionarDerecha = ERR.ReactivoRespuestaRelacionarDerecha.map(function (R) { return new ExamenReactivoRespuestaRD(R); });
                    this.ReactivoRespuestaRelacionarIzquierda = ERR.ReactivoRespuestaRelacionarIzquierda.map(function (R) { return new ExamenReactivoRespuestaRI(R); });
                    break;
            }
        }
    }
    return ExamenReactivoRespuesta;
}());

var ExamenContestar = /** @class */ (function () {
    function ExamenContestar(EC) {
        this.RespuestaVerdaderoFalso = [];
        this.RespuestaOpcionMultiple = [];
        this.RespuestaMultiple = [];
        this.RespuestaAbierta = [];
        this.RespuestaRelacionar = [];
        if (EC) {
            this.ExamenId = EC.ExamenId;
            this.RespuestaVerdaderoFalso = EC.RespuestaVerdaderoFalso ? EC.RespuestaVerdaderoFalso.map(function (R) { return new ExamenRespuestaContestar(R); }) : [];
            this.RespuestaOpcionMultiple = EC.RespuestaOpcionMultiple ? EC.RespuestaOpcionMultiple.map(function (R) { return new ExamenRespuestaContestar(R); }) : [];
            this.RespuestaMultiple = EC.RespuestaMultiple ? EC.RespuestaMultiple.map(function (R) { return new ExamenRespuestaContestar(R); }) : [];
            this.RespuestaAbierta = EC.RespuestaAbierta ? EC.RespuestaAbierta.map(function (R) { return new ExamenRespuestaContestar(R); }) : [];
            this.RespuestaRelacionar = EC.RespuestaRelacionar ? EC.RespuestaRelacionar.map(function (R) { return new ExamenRespuestaContestar(R); }) : [];
        }
    }
    return ExamenContestar;
}());

var ExamenRespuestaContestar = /** @class */ (function () {
    function ExamenRespuestaContestar(ERC) {
        if (ERC) {
            this.ReactivosId = ERC.ReactivosId;
            this.Respuesta = ERC.Respuesta;
            this.ReactivoRespuestaRelacionarIzquierdaId = ERC.ReactivoRespuestaRelacionarIzquierdaId;
            this.ReactivoRespuestaRelacionarDerechaId = ERC.ReactivoRespuestaRelacionarDerechaId;
        }
    }
    return ExamenRespuestaContestar;
}());

var ExamenReactivo = /** @class */ (function () {
    function ExamenReactivo(ER) {
        if (ER) {
            this.ReactivosId = ER.ReactivosId;
            this.ExamenId = ER.ExamenId;
            this.TipoReactivoId = ER.TipoReactivoId;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(ER.Descripcion);
            this.RetroalimentacionCorrecta = ER.RetroalimentacionCorrecta;
            this.RetroalimentacionIncorrecta = ER.RetroalimentacionIncorrecta;
            this.Posicion = ER.Posicion;
            this.Valor = ER.Valor;
            this.Tiempo = ER.Tiempo;
            this.Bloque = ER.Bloque;
            this.Estado = ER.Estado;
            this.Respuesta = new ExamenRespuestaContestar(ER.Respuesta);
        }
    }
    return ExamenReactivo;
}());

/* Reactivos Respuestas */
var ExamenRespuesta = /** @class */ (function () {
    function ExamenRespuesta(ER) {
        if (ER) {
            this.ReactivosId = ER.ReactivosId;
            this.Posicion = ER.Posicion;
            this.EsCorrecta = ER.EsCorrecta;
            this.Estado = ER.Estado;
        }
    }
    return ExamenRespuesta;
}());

var ExamenReactivoRespuestaVF = /** @class */ (function (_super) {
    __extends(ExamenReactivoRespuestaVF, _super);
    function ExamenReactivoRespuestaVF(ERR_VF) {
        var _this = this;
        if (ERR_VF) {
            _this = _super.call(this, ERR_VF) || this;
            _this.ReactivoRespuestaVerdaderoFalsoId = ERR_VF.ReactivoRespuestaVerdaderoFalsoId;
            _this.Respuesta = ERR_VF.Respuesta;
            _this.TipoRespuestaVerdaderoFalsoId = ERR_VF.TipoRespuestaVerdaderoFalsoId;
        }
        return _this;
    }
    return ExamenReactivoRespuestaVF;
}(ExamenRespuesta));

var ExamenReactivoRespuestaOM = /** @class */ (function (_super) {
    __extends(ExamenReactivoRespuestaOM, _super);
    function ExamenReactivoRespuestaOM(ERR_OM) {
        var _this = this;
        if (ERR_OM) {
            _this = _super.call(this, ERR_OM) || this;
            _this.ReactivoRespuestaOpcionMultipleId = ERR_OM.ReactivoRespuestaOpcionMultipleId;
            _this.Respuesta = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(ERR_OM.Respuesta);
        }
        return _this;
    }
    return ExamenReactivoRespuestaOM;
}(ExamenRespuesta));

var ExamenReactivoRespuestaRM = /** @class */ (function (_super) {
    __extends(ExamenReactivoRespuestaRM, _super);
    function ExamenReactivoRespuestaRM(ERR_RM) {
        var _this = this;
        if (ERR_RM) {
            _this = _super.call(this, ERR_RM) || this;
            _this.ReactivoRespuestaMultipleId = ERR_RM.ReactivoRespuestaMultipleId;
            _this.Respuesta = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(ERR_RM.Respuesta);
        }
        return _this;
    }
    return ExamenReactivoRespuestaRM;
}(ExamenRespuesta));

var ExamenReactivoRespuestaRI = /** @class */ (function (_super) {
    __extends(ExamenReactivoRespuestaRI, _super);
    function ExamenReactivoRespuestaRI(ERR_RI) {
        var _this = this;
        if (ERR_RI) {
            _this = _super.call(this, ERR_RI) || this;
            _this.ReactivoRespuestaRelacionarIzquierdaId = ERR_RI.ReactivoRespuestaRelacionarIzquierdaId;
            _this.ReactivoRespuestaRelacionarDerechaId = ERR_RI.ReactivoRespuestaRelacionarDerechaId;
            _this.Izquierda = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(ERR_RI.Izquierda);
        }
        return _this;
    }
    return ExamenReactivoRespuestaRI;
}(ExamenRespuesta));

var ExamenReactivoRespuestaRD = /** @class */ (function (_super) {
    __extends(ExamenReactivoRespuestaRD, _super);
    function ExamenReactivoRespuestaRD(ERR_RD) {
        var _this = this;
        if (ERR_RD) {
            _this = _super.call(this, ERR_RD) || this;
            _this.ReactivoRespuestaRelacionarDerechaId = ERR_RD.ReactivoRespuestaRelacionarDerechaId;
            _this.Derecha = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(ERR_RD.Derecha);
        }
        return _this;
    }
    return ExamenReactivoRespuestaRD;
}(ExamenRespuesta));

/* ReactivoRespuestaCalificacion */
var ReactivoRespuestaCalificacion = /** @class */ (function (_super) {
    __extends(ReactivoRespuestaCalificacion, _super);
    function ReactivoRespuestaCalificacion(RRC) {
        var _this = _super.call(this, RRC) || this;
        _this.RespuestaMultiple = [];
        _this.RespuestaRelacionar = [];
        if (RRC) {
        }
        return _this;
    }
    return ReactivoRespuestaCalificacion;
}(ExamenReactivoRespuesta));

var RespuestaEjecucion = /** @class */ (function () {
    function RespuestaEjecucion(RE) {
        if (RE) {
            this.EjecucionReactivoId = RE.EjecucionReactivoId;
            this.ReactivosId = RE.ReactivosId;
            this.EsCorrecta = RE.EsCorrecta;
            this.Respuesta = RE.Respuesta;
            this.Retroalimentacion = RE.Retroalimentacion;
        }
    }
    return RespuestaEjecucion;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Foro.ts":
/*!************************************!*\
  !*** ./src/app/shared/DTO/Foro.ts ***!
  \************************************/
/*! exports provided: Foro, ForoTema, TemaComentario, ForoTemaComentarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foro", function() { return Foro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoTema", function() { return ForoTema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaComentario", function() { return TemaComentario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForoTemaComentarios", function() { return ForoTemaComentarios; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/shared/DTO/Cuenta.ts");
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

var Foro = /** @class */ (function () {
    function Foro(F) {
        if (F) {
            this.ForoId = F.ForoId;
            this.CursoId = F.CursoId;
            this.Nombre = F.Nombre;
            this.Estado = F.Estado;
        }
    }
    return Foro;
}());

var ForoTema = /** @class */ (function () {
    function ForoTema(T) {
        this.PorEquipo = false;
        this.EditarComentarios = false;
        this.NotificarComentarios = false;
        this.VerComentariosGrupos = false;
        this.CerrarConCurso = false;
        this.EsVinculado = false;
        this.Equipos = [];
        if (T) {
            this.TemaId = T.TemaId;
            this.ForoId = T.ForoId;
            this.TipoTemaId = T.TipoTemaId;
            this.Nombre = T.Nombre;
            this.Mensaje = T.Mensaje;
            this.FechaInicio = new Date(T.FechaInicio);
            this.FechaFin = new Date(T.FechaFin);
            this.PorEquipo = T.PorEquipo;
            this.EditarComentarios = T.EditarComentarios;
            this.NotificarComentarios = T.NotificarComentarios;
            this.VerComentariosGrupos = T.VerComentariosGrupos;
            this.CerrarConCurso = T.CerrarConCurso;
            this.EsVinculado = T.EsVinculado;
            this.Equipos = T.Equipos;
            this.Estado = T.Estado;
        }
    }
    return ForoTema;
}());

var TemaComentario = /** @class */ (function () {
    function TemaComentario(C) {
        this.ComentariosHijos = [];
        this.Respuestas = [];
        if (C) {
            this.TemaComentarioId = C.TemaComentarioId;
            this.TemaId = C.TemaId;
            this.ComentarioPadreId = C.ComentarioPadreId;
            this.Comentario = C.Comentario;
            this.ComentariosHijos = C.ComentariosHijos ? C.ComentariosHijos.map(function (C) { return new TemaComentario(C); }) : [];
            this.Respuestas = C.Respuestas ? C.Respuestas.map(function (C) { return new TemaComentario(C); }) : [];
            this.Marcado = C.Marcado;
            this.Destacado = C.Destacado;
            this.EstadoComentarioId = C.EstadoComentarioId;
            this.EsRetroalimentacion = C.EsRetroalimentacion;
            this.Cuenta = new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["CuentaGeneral"](C.Cuenta, null);
            this.FechaCreacion = new Date(C.FechaCreacion);
            this.Oculto = C.Oculto;
            this.Estado = C.Estado;
        }
    }
    return TemaComentario;
}());

var ForoTemaComentarios = /** @class */ (function (_super) {
    __extends(ForoTemaComentarios, _super);
    function ForoTemaComentarios(T) {
        var _this = _super.call(this, T) || this;
        if (T) {
            if (T.Comentarios) {
                _this.Comentarios = T.Comentarios.map(function (C) { return new TemaComentario(C); });
            }
        }
        return _this;
    }
    return ForoTemaComentarios;
}(ForoTema));



/***/ }),

/***/ "./src/app/shared/DTO/Grupo.ts":
/*!*************************************!*\
  !*** ./src/app/shared/DTO/Grupo.ts ***!
  \*************************************/
/*! exports provided: GrupoBase, Grupo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoBase", function() { return GrupoBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grupo", function() { return Grupo; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/shared/DTO/Cuenta.ts");

var GrupoBase = /** @class */ (function () {
    function GrupoBase(G) {
        if (G != null) {
            this.GrupoId = G.GrupoId;
            this.CursoId = G.CursoId;
            this.Nombre = G.Nombre;
            this.EnSIASE = G.EnSIASE;
            this.Estado = G.Estado;
        }
    }
    return GrupoBase;
}());

var Grupo = /** @class */ (function () {
    function Grupo(G) {
        this.Estudiantes = [];
        if (G != null) {
            this.GrupoId = G.GrupoId;
            this.CursoId = G.CursoId;
            this.Nombre = G.Nombre;
            this.EnSIASE = G.EnSIASE;
            this.Estado = G.Estado;
            if (G.Estudiantes) {
                G.Estudiantes.map(function (E) { return E.GrupoId = G.GrupoId; });
                this.Estudiantes = G.Estudiantes.map(function (E) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["EstudianteCurso"](E); });
            }
        }
    }
    return Grupo;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Modalidad.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/DTO/Modalidad.ts ***!
  \*****************************************/
/*! exports provided: Modalidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modalidad", function() { return Modalidad; });
var Modalidad = /** @class */ (function () {
    function Modalidad(M) {
        if (M) {
            this.ModalidadId = M.ModalidadId;
            this.ClaveSIASE = M.ClaveSIASE;
            this.Nombre = M.Nombre;
            this.Abreviatura = M.Abreviatura;
            this.Estado = M.Estado;
        }
    }
    return Modalidad;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Modulo.ts":
/*!**************************************!*\
  !*** ./src/app/shared/DTO/Modulo.ts ***!
  \**************************************/
/*! exports provided: Modulo, Tema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modulo", function() { return Modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tema", function() { return Tema; });
/* harmony import */ var _Actividad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actividad */ "./src/app/shared/DTO/Actividad.ts");

var Modulo = /** @class */ (function () {
    function Modulo(M) {
        this.Temas = [];
        if (M) {
            this.ModuloId = M.ModuloId;
            this.EstructuraId = M.EstructuraId;
            this.Posicion = M.Posicion;
            this.Nombre = M.Nombre;
            this.Objetivo = M.Objetivo;
            this.Estado = M.Estado;
            if (M.Temas)
                this.Temas = M.Temas.map(function (T) { return new Tema(T); });
        }
    }
    return Modulo;
}());

var Tema = /** @class */ (function () {
    function Tema(T) {
        if (T) {
            this.TemaId = T.TemaId;
            this.ModuloId = T.ModuloId;
            this.Posicion = T.Posicion;
            this.Nombre = T.Nombre;
            this.Estado = T.Estado;
            if (T.Actividades)
                this.Actividades = T.Actividades.map(function (A) { return new _Actividad__WEBPACK_IMPORTED_MODULE_0__["Actividad"](A); });
        }
    }
    return Tema;
}());



/***/ }),

/***/ "./src/app/shared/DTO/PIA.ts":
/*!***********************************!*\
  !*** ./src/app/shared/DTO/PIA.ts ***!
  \***********************************/
/*! exports provided: PIA, Contenido */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIA", function() { return PIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido", function() { return Contenido; });
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");

var PIA = /** @class */ (function () {
    function PIA(P) {
        this.EntregarDocumentos = false;
        this.EnEquipo = false;
        this.EntregaExtemporanea = false;
        this.EntregarRecursoExterno = false;
        this.UsaRubrica = false;
        this.Contenidos = [];
        if (P) {
            this.ProductoIntegradorId = P.ProductoIntegradorId;
            this.EstructuraId = P.EstructuraId;
            this.Descripcion = P.Descripcion;
            this.FechaInicio = new Date(P.FechaInicio);
            this.FechaFin = new Date(P.FechaFin);
            this.FechaLimite = new Date(P.FechaLimite);
            this.Valor = P.Valor;
            this.EntregarDocumentos = P.EntregarDocumentos;
            this.EnEquipo = P.EnEquipo;
            this.EntregaExtemporanea = P.EntregaExtemporanea;
            this.EntregarRecursoExterno = P.EntregarRecursoExterno;
            this.UsaRubrica = P.UsaRubrica;
            this.Estado = P.Estado;
            if (P.Contenidos) {
                this.Contenidos = P.Contenidos.map(function (C) { return new Contenido(C); });
            }
        }
    }
    return PIA;
}());

var Contenido = /** @class */ (function () {
    function Contenido(C) {
        this.Archivos = [];
        if (C) {
            this.ContenidoProductoIntegradorId = C.ContenidoProductoIntegradorId;
            this.ProductoIntegradorId = C.ProductoIntegradorId;
            this.Titulo = C.Titulo;
            this.Descripcion = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_0__["TextEditor"]().CleanFroalaEditor(C.Descripcion);
            this.TipoContenidoId = C.TipoContenidoId;
            this.Posicion = C.Posicion;
            this.Estado = C.Estado;
            if (C.Archivos) {
                this.Archivos = C.Archivos;
            }
        }
    }
    return Contenido;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Perfil.ts":
/*!**************************************!*\
  !*** ./src/app/shared/DTO/Perfil.ts ***!
  \**************************************/
/*! exports provided: Perfil, Sesion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfil", function() { return Perfil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sesion", function() { return Sesion; });
/* harmony import */ var _Persona__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Persona */ "./src/app/shared/DTO/Persona.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Curso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Curso */ "./src/app/shared/DTO/Curso.ts");



var Perfil = /** @class */ (function () {
    function Perfil(p) {
        console.log(p);
        this.Persona = new _Persona__WEBPACK_IMPORTED_MODULE_0__["PersonaCuentas"](p.Persona);
        this.Sesion = new Sesion(p.Sesion);
        if (p.Curso)
            this.Curso = new _Curso__WEBPACK_IMPORTED_MODULE_2__["Curso"](p.Curso);
    }
    return Perfil;
}());

var Sesion = /** @class */ (function () {
    function Sesion(s) {
        this.Token = s.Token;
        this.TiempoRestante = s.TiempoRestante;
        this.isExpired = s.isExpired;
        if (s.AreaAcademica)
            this.AreaAcademica = s.AreaAcademica;
        if (s.Curso)
            this.Curso = new _Curso__WEBPACK_IMPORTED_MODULE_2__["Curso"](s.Curso);
        if (s.TiempoInicio) {
            this.TiempoInicio = new Date(s.TiempoInicio);
        }
        else {
            this.TiempoInicio = new Date();
        }
        if (s.TiempoFin) {
            this.TiempoFin = new Date(s.TiempoFin);
        }
        else {
            this.TiempoFin = new Date(moment__WEBPACK_IMPORTED_MODULE_1__().add(s.TiempoRestante, 'seconds').format('YYYY-MM-DD HH:mm:ss'));
        }
    }
    return Sesion;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Persona.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DTO/Persona.ts ***!
  \***************************************/
/*! exports provided: Persona, PersonaRolId, PersonaCuentas, Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaRolId", function() { return PersonaRolId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaCuentas", function() { return PersonaCuentas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var _Cuenta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuenta */ "./src/app/shared/DTO/Cuenta.ts");
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

var Persona = /** @class */ (function () {
    function Persona(p) {
        if (p != null) {
            this.PersonaId = p.PersonaId;
            this.Nombre = p.Nombre;
            this.ApellidoPaterno = p.ApellidoPaterno;
            this.ApellidoMaterno = p.ApellidoMaterno;
            this.CorreoAdicional = p.CorreoAdicional;
            this.CURP = p.CURP;
            this.Estado = p.Estado;
        }
    }
    return Persona;
}());

var PersonaRolId = /** @class */ (function (_super) {
    __extends(PersonaRolId, _super);
    function PersonaRolId(p) {
        var _this = this;
        if (p != null) {
            _this = _super.call(this, p) || this;
            _this.RolId = p.RolId;
        }
        return _this;
    }
    return PersonaRolId;
}(Persona));

var PersonaCuentas = /** @class */ (function (_super) {
    __extends(PersonaCuentas, _super);
    function PersonaCuentas(P) {
        var _this = _super.call(this, P) || this;
        _this.Cuentas = [];
        if (P) {
            if (P.Cuentas) {
                _this.Cuentas = P.Cuentas.map(function (C) { return new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["Cuenta"](C); });
            }
        }
        return _this;
    }
    return PersonaCuentas;
}(Persona));

var Usuario = /** @class */ (function () {
    function Usuario(P, C) {
        if (P) {
            this.Persona = new Persona(P);
        }
        if (C) {
            this.Cuenta = new _Cuenta__WEBPACK_IMPORTED_MODULE_0__["Cuenta"](C);
        }
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Recurso.ts":
/*!***************************************!*\
  !*** ./src/app/shared/DTO/Recurso.ts ***!
  \***************************************/
/*! exports provided: Recursos, Recurso, RecursoTexto, RecursoArticulo, RecursoExterno, RecursoHTML, RecursoLibro, RecursoWeb, RecursoArchivo, RecursoScorm, RecursoItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recursos", function() { return Recursos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recurso", function() { return Recurso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoTexto", function() { return RecursoTexto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoArticulo", function() { return RecursoArticulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoExterno", function() { return RecursoExterno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoHTML", function() { return RecursoHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoLibro", function() { return RecursoLibro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoWeb", function() { return RecursoWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoArchivo", function() { return RecursoArchivo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoScorm", function() { return RecursoScorm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursoItem", function() { return RecursoItem; });
/* harmony import */ var _Documento__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documento */ "./src/app/shared/DTO/Documento.ts");
/* harmony import */ var _utils_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/TextEditor */ "./src/app/shared/DTO/utils/TextEditor.ts");
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


var Recursos = /** @class */ (function () {
    function Recursos(R) {
        this.RecursosArticulos = [];
        this.RecursosExternos = [];
        this.RecursosHTML = [];
        this.RecursosLibros = [];
        this.RecursosTextos = [];
        this.RecursosWeb = [];
        this.RecursoArchivos = [];
        this.RecursoScorm = [];
        if (R) {
            if (R.RecursosArticulos)
                this.RecursosArticulos = R.RecursosArticulos.map(function (RA) { return new RecursoArticulo(RA); });
            if (R.RecursosExternos)
                this.RecursosExternos = R.RecursosExternos.map(function (RE) { return new RecursoExterno(RE); });
            if (R.RecursosHTML)
                this.RecursosHTML = R.RecursosHTML.map(function (RH) { return new RecursoHTML(RH); });
            if (R.RecursosLibros)
                this.RecursosLibros = R.RecursosLibros.map(function (RL) { return new RecursoLibro(RL); });
            if (R.RecursosTextos)
                this.RecursosTextos = R.RecursosTextos.map(function (RT) { return new RecursoTexto(RT); });
            if (R.RecursosWeb)
                this.RecursosWeb = R.RecursosWeb.map(function (RW) { return new RecursoWeb(RW); });
            if (R.RecursoArchivos)
                this.RecursoArchivos = R.RecursoArchivos.map(function (RA) { return new RecursoArchivo(RA); });
            if (R.RecursoScorm)
                this.RecursoScorm = R.RecursoScorm.map(function (RS) { return new RecursoScorm(RS); });
        }
    }
    return Recursos;
}());

var Recurso = /** @class */ (function () {
    function Recurso(R) {
        this.Posicion = R.Posicion;
        this.EsBasico = R.EsBasico;
        this.Estado = R.Estado;
        this.MostrarEstudiante = R.MostrarEstudiante;
    }
    return Recurso;
}());

var RecursoTexto = /** @class */ (function (_super) {
    __extends(RecursoTexto, _super);
    function RecursoTexto(RT) {
        var _this = this;
        if (RT) {
            _this = _super.call(this, RT) || this;
            _this.TextoId = RT.TextoId;
            _this.Titulo = RT.Titulo;
            _this.Contenido = RT.Contenido;
        }
        return _this;
    }
    return RecursoTexto;
}(Recurso));

var RecursoArticulo = /** @class */ (function (_super) {
    __extends(RecursoArticulo, _super);
    function RecursoArticulo(RA) {
        var _this = this;
        if (RA) {
            _this = _super.call(this, RA) || this;
            _this.BibliograficoArticuloId = RA.BibliograficoArticuloId;
            _this.NombrePublicacion = RA.NombrePublicacion;
            _this.Titulo = RA.Titulo;
            _this.Autor = RA.Autor;
            _this.LugarPublicacion = RA.LugarPublicacion;
            _this.Numeracion = RA.Numeracion;
            _this.AnioPublicacion = RA.AnioPublicacion;
            _this.MesPublicacion = RA.MesPublicacion;
            _this.DiaPublicacion = RA.DiaPublicacion;
            _this.Paginas = RA.Paginas;
            _this.DOI = RA.DOI;
            _this.TipoPublicacionId = RA.TipoPublicacionId;
        }
        return _this;
    }
    return RecursoArticulo;
}(Recurso));

var RecursoExterno = /** @class */ (function (_super) {
    __extends(RecursoExterno, _super);
    function RecursoExterno(RE) {
        var _this = this;
        if (RE) {
            _this = _super.call(this, RE) || this;
            _this.ExternoId = RE.ExternoId;
            _this.Titulo = RE.Titulo;
            _this.Descripcion = RE.Descripcion;
            _this.Contenido = RE.Contenido;
            _this.VentanaEmergente = RE.VentanaEmergente;
            _this.TipoRecursoExternoId = RE.TipoRecursoExternoId;
        }
        return _this;
    }
    return RecursoExterno;
}(Recurso));

var RecursoHTML = /** @class */ (function (_super) {
    __extends(RecursoHTML, _super);
    function RecursoHTML(RH) {
        var _this = this;
        if (RH) {
            _this = _super.call(this, RH) || this;
            _this.HTMLId = RH.HTMLId;
            _this.Titulo = RH.Titulo;
            _this.Contenido = new _utils_TextEditor__WEBPACK_IMPORTED_MODULE_1__["TextEditor"]().CleanFroalaEditor(RH.Contenido);
            _this.VentanaEmergente = RH.VentanaEmergente;
        }
        return _this;
    }
    return RecursoHTML;
}(Recurso));

var RecursoLibro = /** @class */ (function (_super) {
    __extends(RecursoLibro, _super);
    function RecursoLibro(RL) {
        var _this = this;
        if (RL) {
            _this = _super.call(this, RL) || this;
            _this.BibliograficoLibroId = RL.BibliograficoLibroId;
            _this.Titulo = RL.Titulo;
            _this.Autor = RL.Autor;
            _this.Editorial = RL.Editorial;
            _this.Edicion = RL.Edicion;
            _this.AnioPublicacion = RL.AnioPublicacion;
            _this.LugarPublicacion = RL.LugarPublicacion;
            _this.ISBN = RL.ISBN;
            _this.DOI = RL.DOI;
        }
        return _this;
    }
    return RecursoLibro;
}(Recurso));

var RecursoWeb = /** @class */ (function (_super) {
    __extends(RecursoWeb, _super);
    function RecursoWeb(RW) {
        var _this = this;
        if (RW) {
            _this = _super.call(this, RW) || this;
            _this.BibliograficoWebId = RW.BibliograficoWebId;
            _this.Autor = RW.Autor;
            _this.NombreSitio = RW.NombreSitio;
            _this.Titulo = RW.Titulo;
            _this.URL = RW.URL;
            _this.AnioPublicacion = RW.AnioPublicacion;
            _this.MesPublicacion = RW.MesPublicacion;
            _this.DiaPublicacion = RW.DiaPublicacion;
            _this.DOI = RW.DOI;
            _this.FechaConsulta = new Date(RW.FechaConsulta);
        }
        return _this;
    }
    return RecursoWeb;
}(Recurso));

var RecursoArchivo = /** @class */ (function (_super) {
    __extends(RecursoArchivo, _super);
    function RecursoArchivo(D) {
        var _this = this;
        if (D) {
            _this = _super.call(this, D) || this;
            _this.DocumentoId = D.DocumentoId;
            _this.Titulo = D.Documento.Nombre;
            _this.Documento = new _Documento__WEBPACK_IMPORTED_MODULE_0__["Documento"](D.Documento);
        }
        return _this;
    }
    return RecursoArchivo;
}(Recurso));

var RecursoScorm = /** @class */ (function (_super) {
    __extends(RecursoScorm, _super);
    function RecursoScorm(D) {
        var _this = this;
        if (D) {
            _this = _super.call(this, D) || this;
            _this.ScormId = D.ScormId;
            _this.DocumentoId = D.DocumentoId;
            _this.Titulo = D.NombreScorm;
            _this.NombreScorm = D.NombreScorm;
            _this.Descripcion = D.Descripcion;
            _this.Paquete = D.Paquete;
            _this.Documento = new _Documento__WEBPACK_IMPORTED_MODULE_0__["Documento"](D.Documento);
        }
        return _this;
    }
    return RecursoScorm;
}(Recurso));

var RecursoItem = /** @class */ (function () {
    function RecursoItem(R, ID) {
        if (R) {
            this.TipoRecursoId = ID;
            this.Nombre = R.Titulo || R.TituloArticulo;
            this.RecursoItemId = R.BibliograficoArticuloId || R.ExternoId || R.HTMLId || R.BibliograficoLibroId || R.TextoId || R.BibliograficoWebId || R.ScormId || R.DocumentoId;
        }
    }
    return RecursoItem;
}());



/***/ }),

/***/ "./src/app/shared/DTO/Rol.ts":
/*!***********************************!*\
  !*** ./src/app/shared/DTO/Rol.ts ***!
  \***********************************/
/*! exports provided: Rol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rol", function() { return Rol; });
var Rol = /** @class */ (function () {
    function Rol(R) {
        if (R) {
            this.RolId = R.RolId;
            this.Estado = R.Estado;
            this.Descripcion = R.Descripcion;
            this.EsRolPrincipal = R.EsRolPrincipal;
        }
    }
    return Rol;
}());



/***/ }),

/***/ "./src/app/shared/DTO/utils/TextEditor.ts":
/*!************************************************!*\
  !*** ./src/app/shared/DTO/utils/TextEditor.ts ***!
  \************************************************/
/*! exports provided: TextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditor", function() { return TextEditor; });
var TextEditor = /** @class */ (function () {
    function TextEditor() {
    }
    TextEditor.prototype.CleanFroalaEditor = function (HTML) {
        var Descripcion;
        if (HTML) {
            Descripcion = HTML.replace('<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://web.archive.org/web/20240606034029/https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>', '');
        }
        return Descripcion;
    };
    return TextEditor;
}());



/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
/* harmony import */ var _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DTO/Rol */ "./src/app/shared/DTO/Rol.ts");

//import * as CONFIG from 'src/assets/js/config';
/*declare var CONFIG: any;

let URL = CONFIG.get_URL();
let URL_API = CONFIG.get_URL_API();*/
var CONSTANTS = /** @class */ (function () {
    function CONSTANTS() {
    }
    CONSTANTS.URL = "";
    CONSTANTS.URL_SSL = "";
    CONSTANTS.URL_SCORM = "";
    CONSTANTS.API_URL_SCORM = "";
    CONSTANTS.IP = "";
    CONSTANTS.API_ENDPOINT = "";
    CONSTANTS.API_LTI = "";
    CONSTANTS.API_OFFICE = "";
    CONSTANTS.API_BITACORA = "";
    CONSTANTS.Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    CONSTANTS.AlphabetOrden = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    CONSTANTS.URLVideotutoriales = 'https://web.archive.org/web/20240606034029/https://www.youtube.com/embed/';
    CONSTANTS.Textos = {
        Error: {
            General: "Ocurrió un problema en la ejecución la operación"
        }
    };
    /* Mensajes de Texto */
    CONSTANTS.MSG = {
        input: {
            required: "Este es un campo requerido",
            pettern: {
                text: "Campo de texto",
                curp: "Formato de CURP inválido",
                email: "Formato de email inválido",
            },
            minlength: {
                getText: function (n) { return "Minimo " + n + " caracteres"; }
            }
        },
        carpeta: {
            empty: {
                NoAsignados: "No cuentas con Unidades de Aprendizaje asignadas",
                SinCursos: "La carpeta seleccionada no cuenta con Unidades de Aprendizaje",
                SinResultados: "No se encontraron Unidades de Aprendizaje que coincidan con la búsqueda"
            }
        },
        DragDrop: {
            Texto: "<p>Arrastra tu archivo en esta área</p><p>ó</p><p>Da clic para seleccionar desde tu PC</p>",
            ExtensionsImage: "(.png, .jpg)",
            ExtensionsFile: "(.pdf)"
        }
    };
    CONSTANTS.EXTENSIONS = {
        IMAGE: ["PNG, JPG"],
        FILE: ["PDF"]
    };
    CONSTANTS.ExtensionesPermitidas = {
        Dcoumento: [
            { Ext: "PDF", Descripcion: "PDF" },
            { Ext: "DOC", Descripcion: "MS Office Word" },
            { Ext: "PPT", Descripcion: "MS Office Power Point" },
            { Ext: "XLS", Descripcion: "MS Office Excel" },
            { Ext: "TXT", Descripcion: "Archivo de Texto Plano" },
            { Ext: "CSV", Descripcion: "Archivo Separado por Comas" },
        ],
        Imagen: [
            { Ext: "JPG", Descripcion: "Imagen" },
            { Ext: "JPEG", Descripcion: "Imagen" },
            { Ext: "PNG", Descripcion: "Imagen" },
            { Ext: "GIF", Descripcion: "Imagen" },
        ],
    };
    CONSTANTS.COLORS = {
        RUBRICA: [
            '#02bd00',
            '#fdff00',
            '#ff1800' //Rojo
        ],
        CURSOS: [
            '#02bd00',
            '#ff1800' //Rojo
        ]
    };
    /* Calendar Colors */
    CONSTANTS.CALENDAR_COLORS = {
        red: { primary: '#ad2121', secondary: '#FAE3E3' },
        blue: { primary: '#1e90ff', secondary: '#D1E8FF' },
        yellow: { primary: '#e3bc08', secondary: '#FDF1BA' }
    };
    /* Meses */
    CONSTANTS.MESES = [
        { Id: 1, Valor: "01", Nombre: "Enero" },
        { Id: 2, Valor: "02", Nombre: "Febrero" },
        { Id: 3, Valor: "03", Nombre: "Marzo" },
        { Id: 4, Valor: "04", Nombre: "Abril" },
        { Id: 5, Valor: "05", Nombre: "Mayo" },
        { Id: 6, Valor: "06", Nombre: "Junio" },
        { Id: 7, Valor: "07", Nombre: "Julio" },
        { Id: 8, Valor: "08", Nombre: "Agosto" },
        { Id: 9, Valor: "09", Nombre: "Septiembre" },
        { Id: 10, Valor: "10", Nombre: "Octubre" },
        { Id: 11, Valor: "11", Nombre: "Noviembre" },
        { Id: 12, Valor: "12", Nombre: "Diciembre" },
    ];
    /*Mensajes Request SnackBar */
    CONSTANTS.MSG_REQUEST = {
        success: {
            carpeta: {
                add: { getText: function (curso) { return 'Se ha creado la carpeta ' + curso + ' con éxito'; } },
                update: { getText: function (curso) { return 'Se ha actualizado la carpeta ' + curso + ' con éxito'; } },
                delete: { getText: function (curso) { return 'Se ha eliminado la carpeta ' + curso + ' con éxito'; } },
            },
            curso: {
                add: { getText: function (curso) { return 'Se ha creado la carpeta ' + curso + ' con éxito'; } },
                update: { getText: function (curso) { return 'Se ha actualizado la carpeta ' + curso + ' con éxito'; } },
                delete: { getText: function (curso) { return 'Se ha eliminado la carpeta ' + curso + ' con éxito'; } },
            },
            grupo: {
                add: { getText: function (g) { return 'Se ha creado el "Grupo ' + g + ' con éxito'; } },
                update: { getText: function (g1, g2) { return 'Se ha actualizado el nombre del "Grupo ' + g1 + '" a "Grupo ' + g2 + '"'; } },
                delete: { getText: function (g) { return 'Se ha eliminado "Grupo ' + g + '" con éxito'; } },
                addStudent: { getText: function (g) { return 'Inscripción de Esutdiantes del "Grupo ' + g + '" realizada con éxito'; } },
                removeStudent: { getText: function (g) { return 'Desinscripción de Estudiantes del "Grupo ' + g + '" realizada con éxito'; } },
                general: { getText: function (g) { return 'Se han actualizado los Grupos con éxito'; } },
            },
        },
        error: {
            general: 'Ocurró un problema, porfavor intentalo de nuevo',
        }
    };
    /* ROL */
    CONSTANTS.ROLES = [
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 1, Estado: true, Descripcion: "Administrador de Área Académica" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 2, Estado: true, Descripcion: "Profesor" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 3, Estado: true, Descripcion: "Profesor Asistente" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 4, Estado: true, Descripcion: "Observador" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 5, Estado: true, Descripcion: "Estudiante" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 6, Estado: true, Descripcion: "Administrador General" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 7, Estado: false, Descripcion: "Asegurador de Calidad" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 8, Estado: false, Descripcion: "AdministrativoM" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 9, Estado: false, Descripcion: "Invitado" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 10, Estado: true, Descripcion: "Asistente Administrador" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 11, Estado: true, Descripcion: "Practicante de Administrador" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 12, Estado: true, Descripcion: "Auditor" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 13, Estado: true, Descripcion: "DENMS" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 14, Estado: true, Descripcion: "Seguimiento Académico" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 15, Estado: false, Descripcion: "Administrador suplente" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 16, Estado: false, Descripcion: "Administrador suplente" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 17, Estado: true, Descripcion: "Dsempeño NEyM" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 18, Estado: true, Descripcion: "Indicadores Central" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 19, Estado: true, Descripcion: "Indicadores Auditoria" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 20, Estado: true, Descripcion: "Indicadores Director Dependencia" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 21, Estado: true, Descripcion: "Indicadores Coordinador EAD" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 22, Estado: true, Descripcion: "Indicadores Licenciatura" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 23, Estado: true, Descripcion: "Indicadores Preparatoria" }),
        new _DTO_Rol__WEBPACK_IMPORTED_MODULE_0__["Rol"]({ RolId: 24, Estado: true, Descripcion: "Indicadores Posgrado" })
    ];
    /* MODELO */
    CONSTANTS.MODELOS = [
        { ModeloId: 1, Descripcion: "Objetivos" },
        { ModeloId: 2, Descripcion: "Competencias" }
    ];
    /* MODALIDAD */
    CONSTANTS.MODALIDADES = [
        { ModalidadId: 1, Descripcion: "ESCOLARIZADA", Abreviatura: "ESC", Estado: true },
        { ModalidadId: 2, Descripcion: "NO ESCOLARIZADA", Abreviatura: "NO ESC", Estado: true },
        { ModalidadId: 3, Descripcion: "ABIERTO", Abreviatura: "AB", Estado: true },
        { ModalidadId: 4, Descripcion: "MIXTA", Abreviatura: "MI", Estado: true },
        { ModalidadId: 5, Descripcion: "MIXTA EN LINEA", Abreviatura: "MI LI", Estado: true },
        { ModalidadId: 6, Descripcion: "MIXTA A DISTANCIA", Abreviatura: "MI DI", Estado: true },
        { ModalidadId: 7, Descripcion: "MIXTA ABIERTO", Abreviatura: "MI AB", Estado: true }
    ];
    /* SIASE */
    CONSTANTS.tipo_curso = [
        { valor: true, nombre: "SIASE" },
        { valor: false, nombre: "NEXUS" },
    ];
    /* Estructura */
    CONSTANTS.TIPO_ESTRUCTURA = [
        { TipoEstructuraId: 1, ModeloId: 2, Nombre: "Etapa" },
        { TipoEstructuraId: 2, ModeloId: 2, Nombre: "Capítulo" },
        { TipoEstructuraId: 3, ModeloId: 2, Nombre: "Fase" },
        { TipoEstructuraId: 4, ModeloId: 1, Nombre: "Unidad" },
        { TipoEstructuraId: 5, ModeloId: 1, Nombre: "Módulo" },
    ];
    /* Tipo Evidencia */
    CONSTANTS.TIPO_EVIDENCIA = [
        { TipoEvidenciaId: 1, Nombre: "Evidencia de Aprendizaje" },
        { TipoEvidenciaId: 2, Nombre: "Elemento Complementario" },
        { TipoEvidenciaId: 3, Nombre: "Producto Integrador" },
        { TipoEvidenciaId: 4, Nombre: "Actividad de Aprendizaje" },
    ];
    /* Tipo Elemento Evaluable */
    CONSTANTS.TIPO_ELEMENTO_EVALUABLE = [
        { TipoElementoId: 1, Nombre: "Evidencia", Descripcion: "Evidencia de Aprendizaje" },
        { TipoElementoId: 2, Nombre: "PIA", Descripcion: "Producto Integrador de Aprendizaje" },
        { TipoElementoId: 3, Nombre: "Actividad de Aprendizaje", Descripcion: "Actividad" },
        { TipoElementoId: 4, Nombre: "Examen", Descripcion: "Examen" },
        { TipoElementoId: 5, Nombre: "Foro", Descripcion: "Foro" },
        { TipoElementoId: 6, Nombre: "Concepto Calificacion", Descripcion: "Concepto Calificacion" }
    ];
    /* Tipo Coevaluacion */
    CONSTANTS.TIPO_COEVALUACION = [
        { TipoCoevaluacionId: 1, Nombre: "Por Curso" },
        { TipoCoevaluacionId: 2, Nombre: "Por Equipo" },
    ];
    /* Tipo Dcoumento */
    CONSTANTS.TIPO_DOCUMENTO = [
        { TipoDocumentoId: 1, Nombre: "Programa Analitico" },
        { TipoDocumentoId: 2, Nombre: "Mapa Conceptual" },
        { TipoDocumentoId: 3, Nombre: "Representacion Grafica" },
        { TipoDocumentoId: 4, Nombre: "Recurso" },
    ];
    /* Tipo Destino Aviso */
    CONSTANTS.TIPO_AVISO_DESTINO = [
        { TipoDestinoId: 1, Nombre: "Área Académica" },
        { TipoDestinoId: 2, Nombre: "Unidad de Aprendizaje" },
    ];
    /* Encuesta Tipo Destino */
    CONSTANTS.ENCUESTA_TIPO_DESTINO = [
        { TipoDestinoId: 1, Descripcion: "Organización" },
        { TipoDestinoId: 2, Descripcion: "Área Académica" },
        { TipoDestinoId: 3, Descripcion: "Unidad de Aprendizaje" },
    ];
    /* Encuesta Estado */
    CONSTANTS.ENCUESTA_ESTATUS = [
        { EstadoEncuestaId: 1, Descripcion: "En Proceso" },
        { EstadoEncuestaId: 2, Descripcion: "Publicada" },
        { EstadoEncuestaId: 3, Descripcion: "Suspendida" },
        { EstadoEncuestaId: 4, Descripcion: "Terminada" },
    ];
    /* Examen Tipo Tiempo */
    CONSTANTS.EXAMEN_TIPO_TIEMPO = [
        { TipoTiempoExamenId: 3, Nombre: "Sin Límite" },
        { TipoTiempoExamenId: 1, Nombre: "General" },
        { TipoTiempoExamenId: 2, Nombre: "Por Reactivo" },
    ];
    /* Examen Estado */
    CONSTANTS.EXAMEN_ESTADO = [
        { EstadoExamenId: 1, Nombre: "Incompleto" },
        { EstadoExamenId: 2, Nombre: "Completo" },
        { EstadoExamenId: 3, Nombre: "Publicado" },
        { EstadoExamenId: 4, Nombre: "Suspendido" },
        { EstadoExamenId: 5, Nombre: "Terminado" },
    ];
    /* Examen Estado */
    CONSTANTS.EXAMEN_TERMINACION = [
        { EstadoId: 0, Nombre: "Sin Terminar", Text: "Pendiente" },
        { EstadoId: 1, Nombre: "Por Tiempo", Text: "" },
        { EstadoId: 2, Nombre: "Por Estudiante", Text: "" },
        { EstadoId: 3, Nombre: "Por Profesor", Text: "" },
    ];
    /* Examen Tipo Retroalimentación */
    CONSTANTS.EXAMEN_TIPO_RETROALIMENTACION = [
        { TipoRetroalimentacionAlumnoId: 1, Nombre: "Su respuesta, su calificación y la respuesta correcta" },
        { TipoRetroalimentacionAlumnoId: 2, Nombre: "Sólo su respuesta y su calificación" },
        { TipoRetroalimentacionAlumnoId: 3, Nombre: "Sólo su calificación" }
    ];
    /* Estado */
    CONSTANTS.CURSO_IMAGENES = [
        { CursoId: null, ImagenId: 1, Image: "./assets/img/cursos/default.jpg" },
        { CursoId: 214230, ImagenId: 2, Image: "https://web.archive.org/web/20240606034029/https://cdn.kastatic.org/googleusercontent/pmSFOg8sp5pAK3K1oP7KAB3bckl1uYej2PfZtGQI3LDQ4jsLzkMhDNfEA6bxiUUGFt2aQUgwwKhPINWpzy5F7sD0" },
        { CursoId: 224242, ImagenId: 3, Image: "https://web.archive.org/web/20240606034029/https://image.slidesharecdn.com/electricidadymagnetismo1-130709192314-phpapp01/95/electricidad-y-magnetismo-1-1-638.jpg?cb=1373397855" },
        { CursoId: 214231, ImagenId: 4, Image: "https://web.archive.org/web/20240606034029/https://www.definicionabc.com/wp-content/uploads/estadistica.jpg" },
        { CursoId: 214232, ImagenId: 5, Image: "https://web.archive.org/web/20240606034029/http://www.die.uma.es/archivos/electromagnetismo2.jpg" },
        { CursoId: 214233, ImagenId: 6, Image: "https://web.archive.org/web/20240606034029/https://cdn.pruebat.org/recursos/recursos/matematicas.png" },
        { CursoId: 274286, ImagenId: 7, Image: "./assets/img/cursos/274286.jpg" },
        { CursoId: 274347, ImagenId: 8, Image: "./assets/img/cursos/274347.jpg" },
        { CursoId: 274358, ImagenId: 9, Image: "./assets/img/cursos/274358.jpg" },
        { CursoId: 274388, ImagenId: 10, Image: "./assets/img/cursos/274388.jpg" },
        { CursoId: 274389, ImagenId: 11, Image: "./assets/img/cursos/274389.jpg" },
        { CursoId: 274396, ImagenId: 12, Image: "./assets/img/cursos/274396.jpg" },
    ];
    /* Estado */
    CONSTANTS.CURSO_ESTADOS = [
        { valor: true, nombre: "Disponible" },
        { valor: false, nombre: "No Disponible" },
    ];
    /* Tipos de Reactivo */
    CONSTANTS.TiposReactivo = [
        { TipoReactivoId: 1, Nombre: "Verdadero/Falso" },
        { TipoReactivoId: 2, Nombre: "Opción Múltiple" },
        { TipoReactivoId: 3, Nombre: "Respuesta Múltiple" },
        { TipoReactivoId: 4, Nombre: "Relacionar" },
        { TipoReactivoId: 5, Nombre: "Texto Abierto" },
    ];
    /* Reactivo Tipo Verdadero-Falso  */
    CONSTANTS.TiposReactivoVerdaderoFalso = [
        { TipoRespuestaVerdaderoFalsoId: 1, Descripcion: "Verdadero - Falso", NombreVerdadero: "Verdadero", NombreFalso: "Falso" },
    ];
    /* Rubrica */
    CONSTANTS.RUBRICA_TIPOS_SABER = [
        { TipoSaberId: 3, Nombre: "Actitudes / Valores" },
        { TipoSaberId: 1, Nombre: "Conocimientos" },
        { TipoSaberId: 2, Nombre: "Habilidades" }
    ];
    /*
    public static moment_config = {
        months : 'Enero_Febrero_Marzo_Abril_Mayo_Junio__août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : 'e');
        },
        meridiemParse : /PD|MD/,
        isPM : function (input) {
            return input.charAt(0) === 'M';
        }
    }
    */
    CONSTANTS.TiposPeriodo = [
        { Tipo: 1, Descripcion: "Semestral", Descripcion2: "Semestre" },
        { Tipo: 2, Descripcion: "Tetramestral", Descripcion2: "Tetramestre" }
    ];
    CONSTANTS.TipoCompetencia = [
        { Tipo: 1, Descripcion: "Disciplinar" },
        { Tipo: 2, Descripcion: "Genérica" },
        { Tipo: 3, Descripcion: "General" },
        { Tipo: 4, Descripcion: "Profesional" }
    ];
    CONSTANTS.TiemposMargenSeguimientoDocente = [24, 48, 72];
    return CONSTANTS;
}());



/***/ }),

/***/ "./src/app/shared/services/encuestas.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/encuestas.service.ts ***!
  \******************************************************/
/*! exports provided: EncuestasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestasService", function() { return EncuestasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general.service */ "./src/app/shared/services/general.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EncuestasService = /** @class */ (function () {
    function EncuestasService(http, perfil_service, general_service) {
        this.http = http;
        this.perfil_service = perfil_service;
        this.general_service = general_service;
        /* Encuesta Tipo Destino */
        this.ENCUESTA_TIPO_DESTINO = [
            { TipoDestinoId: 1, Descripcion: "Organización" },
            { TipoDestinoId: 2, Descripcion: "Área Académica" },
            { TipoDestinoId: 3, Descripcion: "Unidad de Aprendizaje" },
        ];
        /* Encuesta Estado */
        this.ENCUESTA_ESTATUS = [
            { EstadoEncuestaId: 1, Descripcion: "En Proceso" },
            { EstadoEncuestaId: 2, Descripcion: "Publicada" },
            { EstadoEncuestaId: 3, Descripcion: "Suspendida" },
            { EstadoEncuestaId: 4, Descripcion: "Terminada" },
        ];
        this.DomainService = 'Encuesta';
        this.HEADER = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("Token", this.perfil_service.getToken())
                .append("AreaAcademicaId", this.perfil_service.getAreaAcademicaSesion().AreaAcademicaId.toString())
                .append("RolId", this.perfil_service.getRolSesion().RolId.toString())
        };
    }
    EncuestasService.prototype.updateHeader = function () { this.HEADER = this.general_service.getUpdateHeader(); };
    /* Encuestas */
    EncuestasService.prototype.setEncuestaSelected = function (E) { this.Encuesta = E; };
    EncuestasService.prototype.getEncuestaSelected = function () { return this.Encuesta; };
    EncuestasService.prototype.getEncuestas = function (_CursoId) {
        return this.ExecuteRequest('/ConsultarEncuestas', {
            CursoId: _CursoId
        });
    };
    EncuestasService.prototype.getEncuestasCursoAreaAcedemica = function (_CursoId) {
        return this.ExecuteRequest('/ConsultarEncuestasAdministradorAreaAcademicaCurso', {
            CursoId: _CursoId
        });
    };
    EncuestasService.prototype.getEncuestasAsignadas = function (_CursoId) {
        return this.ExecuteRequest('/ConsultarEncuestasAsignadas', {
            CursoId: _CursoId
        });
    };
    EncuestasService.prototype.getEncuesta = function (_EncuestaId) {
        return this.ExecuteRequest('/ConsultarEncuesta', {
            EncuestaId: _EncuestaId
        });
    };
    EncuestasService.prototype.getEncuestaResultados = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ConsultarEncuestaResultado", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.ConsultarRespuestasAbiertas = function (_EncuestaReactivoId) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ConsultarRespuestasAbiertas", {
            EncuestaReactivoId: _EncuestaReactivoId
        }, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.getEncuestaResponder = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ConsultarResponderEncuesta", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.UpdateEncuesta = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ActualizarEncuesta", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.CopiarEncuesta = function (_Encuesta, _EncuestaOrigenId) {
        var _this = this;
        var data = {
            Encuesta: _Encuesta,
            EncuestaOrigenId: _EncuestaOrigenId
        };
        console.log(data);
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/CopiarEncuesta", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.ReiniciarEncuesta = function (_EncuestaId) {
        var _this = this;
        var data = {
            EncuestaId: _EncuestaId,
        };
        console.log(data);
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + 'Encuesta/ReiniciarEncuesta', data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    /***************************** Reactivos ************************************/
    EncuestasService.prototype.getEncuestaReactivos = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ConsultarEncuestaReactivos", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.UpdateReactivo = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ActualizarEncuestaReactivos", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.getNextPosicionReactivo = function () {
        return (this.Encuesta.Reactivos.length + 1);
    };
    EncuestasService.prototype.getTipoReactivo = function (TipoReactivoId) {
        return _constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].TiposReactivo.filter(function (TR) { return TR.TipoReactivoId == TipoReactivoId; })[0];
    };
    /**************************** Ejecucion ***********************/
    EncuestasService.prototype.UpdateEjecucionEncuesta = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ActualizarEjecucionEncuesta", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.UpdateEjecucionCuenta = function (data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + "Encuesta/ActualizarEjecucionCuenta", data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService.prototype.getTipoDestino = function (id) {
        return this.ENCUESTA_TIPO_DESTINO.find(function (TD) { return TD.TipoDestinoId == id; });
    };
    EncuestasService.prototype.getEstatus = function (id) {
        return this.ENCUESTA_ESTATUS.find(function (E) { return E.EstadoEncuestaId == id; });
    };
    /********************************************* REQUEST **********************************************/
    EncuestasService.prototype.ExecuteRequest = function (_Method, _Data) {
        var _this = this;
        this.updateHeader();
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + this.DomainService + _Method, _Data, this.HEADER)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return _this.general_service.handleResult(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.general_service.handleError(error); }));
    };
    EncuestasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"],
            _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]])
    ], EncuestasService);
    return EncuestasService;
}());



/***/ }),

/***/ "./src/app/shared/services/general.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/general.service.ts ***!
  \****************************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/auth//login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _DTO_BancoReactivos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DTO/BancoReactivos */ "./src/app/shared/DTO/BancoReactivos.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _DTO_Examen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../DTO/Examen */ "./src/app/shared/DTO/Examen.ts");
/* harmony import */ var src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/Sesion/Sesion.service */ "./src/app/services/Sesion/Sesion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Moment











moment__WEBPACK_IMPORTED_MODULE_3__["locale"]("es");
var GeneralService = /** @class */ (function () {
    function GeneralService(SesionSVC, sanitizer, dialog, snackbar, perfil_service, _location) {
        this.SesionSVC = SesionSVC;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.perfil_service = perfil_service;
        this._location = _location;
        this.MatDialogLoginIsOpen = false;
        this.MatToolbarPrincipal = true;
        this.Clock = new Date();
        /************************************ MATH **************************************/
        this.getSumatoria = function (items, attr) {
            var suma = items.reduce(function (a, b) { return parseFloat(a) + parseFloat(b[attr]); }, 0);
            return suma;
        };
        this.getPromedio = function (items, attr) {
            var total = this.getSumatoria(items, attr) / items.length;
            return total;
        };
    }
    GeneralService.prototype.getUpdateHeader = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                Token: this.SesionSVC.Token,
                AreaAcademicaId: this.SesionSVC.Perfil.AreaAcademica.AreaAcademicaId.toString(),
                RolId: this.SesionSVC.Perfil.Rol.RolId.toString()
            })
            /*headers: new HttpHeaders()
            .append("Token", this.perfil_service.getToken())
            .append("AreaAcademicaId", this.perfil_service.getAreaAcademicaSesion().AreaAcademicaId.toString())
            .append("RolId", this.perfil_service.getRolSesion().RolId.toString())
            */
        };
    };
    /********************************* Toolbar Principal *********************************/
    GeneralService.prototype.showToolbarPrincipal = function () { this.MatToolbarPrincipal = true; };
    GeneralService.prototype.hideToolbarPrincipal = function () { this.MatToolbarPrincipal = false; };
    /******************************** DateTime Server NEXUS *****************************/
    GeneralService.prototype.startClock = function () {
        var _this = this;
        setInterval(function () { _this.Clock = new Date(); }, 1);
    };
    GeneralService.prototype.DateToLocale = function (dateString) {
        //console.log(dateString);
        dateString = dateString.toString();
        dateString = dateString.split(' ').slice(0, 5).join(' ');
        //console.log(dateString);
        return dateString;
    };
    /************************************* SIDENAV **************************************/
    GeneralService.prototype.toggleSidenavPrincipal = function () {
        console.log("toggle Perfil");
        this.sidenavPrincipal.opened = !this.sidenavPrincipal.opened;
    };
    GeneralService.prototype.toggleSideNavPerfil = function () {
        console.log("toggle Perfil");
        this.sidenavPerfil.opened = !this.sidenavPerfil.opened;
    };
    GeneralService.prototype.initCalendarioSideNav = function (sideNav) {
        console.log("init calendario");
        this.sidenavCalendario = sideNav;
        this.sidenavCalendario.openedStart.subscribe(function (result) {
            console.log("Opened Calednario");
        });
        this.openedSideNavCalendario = this.sidenavCalendario.openedStart;
    };
    GeneralService.prototype.toggleSideNavCalendario = function () {
        console.log("toggle Calendario");
        this.sidenavCalendario.opened = !this.sidenavCalendario.opened;
    };
    GeneralService.prototype.toggleSidenavVideoTutoriales = function () {
        this.sidenavPerfil.opened = !this.sidenavPerfil.opened;
    };
    GeneralService.prototype.startOpenedSideNavCalendario = function () {
    };
    /*********************************** CONSTANTS **********************************/
    GeneralService.prototype.getCursoEstado = function (id) { return (_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CURSO_ESTADOS).find(function (CE) { return CE.valor == id; }); };
    GeneralService.prototype.getCursoEstados = function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CURSO_ESTADOS; };
    GeneralService.prototype.getModelo = function (id) { return (_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MODELOS).find(function (M) { return M.ModeloId == id; }); };
    GeneralService.prototype.getModelos = function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MODELOS; };
    GeneralService.prototype.getModalidad = function (id) { return (_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MODALIDADES).find(function (M) { return M.ModalidadId == id; }); };
    GeneralService.prototype.getModalidades = function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MODALIDADES; };
    GeneralService.prototype.getTipoEstructura = function (id) { return (_constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].TIPO_ESTRUCTURA).find(function (T) { return T.TipoEstructuraId == id; }); };
    GeneralService.prototype.getTiposEstructura = function () { return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].TIPO_ESTRUCTURA; };
    /********************************* Search ********************************/
    GeneralService.prototype.Find_NameUsername_List = function (_List, _Text) {
        return _List.find(function (Est) {
            return Est.Matricula.toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.Nombre + " " + Est.ApellidoPaterno + " " + Est.ApellidoMaterno).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.Nombre.split(" ")[0] + " " + Est.ApellidoPaterno).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.ApellidoPaterno + " " + Est.ApellidoMaterno + " " + Est.Nombre).toLowerCase().includes(_Text.toLowerCase()) ||
                (Est.ApellidoPaterno + " " + Est.Nombre).toLowerCase().includes(_Text.toLowerCase());
        });
    };
    /*********************************** Reactivos  *******************************/
    GeneralService.prototype.getInciso = function (Posicion) {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].Alphabet[Posicion - 1];
    };
    GeneralService.prototype.getIncisoDerecha = function (Respuestas, DerechaId) {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].Alphabet[Respuestas.find(function (R) { return R.ReactivoRespuestaRelacionarDerechaId == DerechaId; }).Posicion - 1];
    };
    /************************************ DatePicker ***************************/
    GeneralService.prototype.getDatePickerSettings = function (opt) {
        var Settings = {
            BigBanner: true,
            timePicker: true,
            format: 'dd-MM-yyyy hh:mm a',
            defaultOpen: true,
            closeOnSelect: true
        };
        switch (opt) {
            case 1: break;
            case 2:
                Settings.BigBanner = false;
                Settings.defaultOpen = false;
                break;
        }
        return Settings;
    };
    /*********************************** DateTime ******************************/
    GeneralService.prototype.ObtenerDiferenciaEntreFechas = function (FechaInicio, FechaFin) {
        var F1 = moment__WEBPACK_IMPORTED_MODULE_3__(FechaInicio);
        var F2 = moment__WEBPACK_IMPORTED_MODULE_3__(FechaFin);
        var Diferencia = F2.diff(F1, 'seconds');
        console.log(Diferencia);
        var Numero;
        var Unidad;
        if (Diferencia < 60) {
            Numero = Diferencia % 60;
            Unidad = 'min';
        }
        else if (Diferencia < 3600) {
            Numero = Diferencia % 60;
            if (Numero === 1)
                Unidad = 'min';
            else
                Unidad = 'min';
        }
        else if (Diferencia < 86400) {
            Numero = Diferencia % 3600;
            if (Numero === 1)
                Unidad = 'hora';
            else
                Unidad = 'horas';
        }
        else if (Diferencia < 604800) {
            Numero = Diferencia % 86400;
            if (Numero == 1)
                Unidad = 'dia';
            else
                Unidad = 'dias';
        }
        else if (Diferencia < 31557600) {
            Numero = Diferencia % 604800;
            if (Numero == 1)
                Unidad = 'semana';
            else
                Unidad = 'semanas';
        }
        else {
            Numero = Diferencia % 31557600;
            if (Numero == 1)
                Unidad = 'año';
            else
                Unidad = 'años';
        }
        var D = 'Hace ' + Numero + ' ' + Unidad;
        console.log(D);
        return D;
    };
    GeneralService.prototype.getDiffDates = function (DateStart, DateEnd) {
        var Date1 = moment__WEBPACK_IMPORTED_MODULE_3__(DateStart);
        var Date2 = moment__WEBPACK_IMPORTED_MODULE_3__(DateEnd);
        var Diff = Date2.diff(Date1, "seconds");
        console.log(Diff);
        return Diff;
    };
    GeneralService.prototype.CheckSameDayDates = function (Date1, Date2) {
        var validation = moment__WEBPACK_IMPORTED_MODULE_3__(Date1).isSame(Date2, 'day');
        //console.log(validation);
        return validation;
    };
    GeneralService.prototype.CheckSameWeekDates = function (Date1, Date2) {
        var validation = moment__WEBPACK_IMPORTED_MODULE_3__(Date1).isSame(Date2, 'week');
        //console.log(validation);
        return validation;
    };
    /************************************ FORMATS ***********************************/
    GeneralService.prototype.capitalize = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    GeneralService.prototype.getMomentFormat = function (date, format) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format(format);
    };
    GeneralService.prototype.getDateFormat = function (date, format) {
        var fecha_result = "";
        if (date) {
            //let f = new Date(date);
            switch (format) {
                case 1:// 09/SEPTIEMBRE/2018
                    fecha_result = moment__WEBPACK_IMPORTED_MODULE_3__(date, "DD-MM-YYYY", true).format("DD/MMMM/YYYY").toUpperCase();
                    break;
                case 2:// 31-12-2018
                    fecha_result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD-MM-YYYY").toUpperCase();
                    break;
                case 3:// 20/09/2018
                    fecha_result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY").toUpperCase();
                    break;
                case 4:
                    var dia = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("dddd DD");
                    var mes = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("MMMM");
                    fecha_result = this.capitalize(dia) + ", " + this.capitalize(mes);
                    break;
                case 5:
                    fecha_result = date;
                    break;
            }
        }
        return fecha_result;
    };
    GeneralService.prototype.getTimeFormat = function (date, format) {
        var fecha_result = "";
        if (date) {
            //let f = new Date(date);
            switch (format) {
                case 1:// 05:00 pm
                    fecha_result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("hh:mm a");
                    break;
                case 2:// 31-12-2018
                    fecha_result = moment__WEBPACK_IMPORTED_MODULE_3__(date).format("HH:mm");
                    break;
            }
        }
        return fecha_result.toUpperCase();
    };
    GeneralService.prototype.getDateTimeFormat = function (date, format, time24) {
        //time_format == true => 24hr
        //time_format == false => AM/PM
        var datetime;
        switch (format) {
            case 1:// 09/SEPTIEMBRE/2018 12:00 PM
                datetime = time24 ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MMMM/YYYY HH:mm") : moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MMMM/YYYY hh:mm a");
                break;
            case 2:// 31-12-2018 12:00 PM
                datetime = time24 ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD-MM-YYYY HH:mm") : moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD-MM-YYYY hh:mm a");
                break;
            case 3:// 20/09/2018 12:00 PM
                datetime = time24 ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY HH:mm") : moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY hh:mm a");
                break;
            case 4:// SEPTIEMBRE 20, 2018 12:00 PM
                datetime = time24 ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY HH:mm") : moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MM/YYYY hh:mm a");
                break;
            case 5:// 09/SEP/2018 12:00 PM
                datetime = time24 ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MMM/YYYY HH:mm") : moment__WEBPACK_IMPORTED_MODULE_3__(date).format("DD/MMM/YYYY hh:mm a");
                var array = datetime.split(".");
                datetime = (array[0] + array[1]).toUpperCase();
                break;
            case 6:// Lunes 09 de Septiembre del 2018 a las 12:00 PM
                datetime = this.capitalize(moment__WEBPACK_IMPORTED_MODULE_3__(date).format("dddd DD [de ]")) + this.capitalize(moment__WEBPACK_IMPORTED_MODULE_3__(date).format("MMMM [del] YYYY [a las] HH:mm:a"));
                break;
        }
        return datetime;
    };
    /************************************* MONTHS  ****************************************/
    GeneralService.prototype.getMeses = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].MESES;
    };
    /************************************ SNACKBAR **************************************/
    GeneralService.prototype.snackbarSucces = function (message, duration) {
        this.snackbar.open(message, "X", {
            duration: duration,
            panelClass: ["snackbar-success", "action-close"],
            verticalPosition: 'bottom',
        });
    };
    GeneralService.prototype.snackbarError = function (message, duration) {
        this.snackbar.open(message, "X", {
            duration: duration,
            panelClass: ["snackbar-error", "action-close"],
            verticalPosition: 'bottom',
        });
    };
    /************************************* CursoImagenes ***********************************/
    GeneralService.prototype.getImageCurso = function (C) {
        var images = [
            { CursoId: null, Image: "https://web.archive.org/web/20240606034029/https://image.posta.com.mx/sites/default/files/sdxcv.jpg" },
            { CursoId: 214230, Image: "https://web.archive.org/web/20240606034029/https://cdn.kastatic.org/googleusercontent/pmSFOg8sp5pAK3K1oP7KAB3bckl1uYej2PfZtGQI3LDQ4jsLzkMhDNfEA6bxiUUGFt2aQUgwwKhPINWpzy5F7sD0" },
            { CursoId: 224242, Image: "https://web.archive.org/web/20240606034029/https://image.slidesharecdn.com/electricidadymagnetismo1-130709192314-phpapp01/95/electricidad-y-magnetismo-1-1-638.jpg?cb=1373397855" },
            { CursoId: 214231, Image: "https://web.archive.org/web/20240606034029/https://www.definicionabc.com/wp-content/uploads/estadistica.jpg" },
            { CursoId: 214232, Image: "https://web.archive.org/web/20240606034029/http://www.die.uma.es/archivos/electromagnetismo2.jpg" },
            { CursoId: 214233, Image: "https://web.archive.org/web/20240606034029/https://cdn.pruebat.org/recursos/recursos/matematicas.png" },
            { CursoId: 274286, Image: "./assets/img/cursos/274286.jpg" },
            { CursoId: 274347, Image: "./assets/img/cursos/274347.jpg" },
            { CursoId: 274358, Image: "./assets/img/cursos/274358.jpg" },
            { CursoId: 274388, Image: "./assets/img/cursos/274388.jpg" },
            { CursoId: 274389, Image: "./assets/img/cursos/274389.jpg" },
            { CursoId: 274396, Image: "./assets/img/cursos/274396.jpg" },
        ];
        var imagen = images.find(function (I) { return I.CursoId == C.CursoId; });
        if (!imagen) {
            imagen = images.find(function (I) { return I.CursoId == null; });
        }
        //return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        return imagen;
    };
    GeneralService.prototype.getImageCurso2 = function (ImagenId, CursoId) {
        var image;
        if (ImagenId)
            image = _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CURSO_IMAGENES.find(function (I) { return I.ImagenId == ImagenId; });
        if (CursoId)
            image = _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CURSO_IMAGENES.find(function (I) { return I.CursoId == CursoId; });
        return image ? image : _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].CURSO_IMAGENES[0];
    };
    /************************************ BACKDROP **********************************/
    GeneralService.prototype.showBackdrop = function () { this.backdrop = true; };
    GeneralService.prototype.hideBackdrop = function () { this.backdrop = false; };
    /************************************** DIALOGS *************************************/
    GeneralService.prototype.openDialogLogin = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDialogComponent"]);
        this.dialogRef.afterOpen().subscribe(function (result) {
            console.log("Dialog Login Open result: " + result);
            _this.MatDialogLoginIsOpen = true;
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog Login Close result: " + result);
            _this.MatDialogLoginIsOpen = false;
        });
    };
    GeneralService.prototype.openDialogLogin2 = function () {
        var _this = this;
        if (this.dialogLogin)
            this.dialogLogin.close();
        this.dialogLogin = this.dialog.open(_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_7__["LoginDialogComponent"]);
        this.dialogLogin.afterOpen().subscribe(function (result) { _this.MatDialogLoginIsOpen = true; });
        this.dialogLogin.afterClosed().subscribe(function (result) { _this.MatDialogLoginIsOpen = false; });
        return this.dialogLogin.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return error; }));
    };
    GeneralService.prototype.sesionExpired = function () {
        return this.openDialogLogin2().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data.SesionInit) {
                return true;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return error; }));
    };
    GeneralService.prototype.isSesionExpired = function (Code) {
        if (Code == 2004 || Code == 2011) {
            return true;
        }
        else {
            return false;
        }
    };
    /**************************************** CSV  ***************************************/
    GeneralService.prototype.readFileCSV = function (file) {
        var _this = this;
        var fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            console.log(e);
            return _this.extractFileDataCSV(fileReader.result);
        };
        fileReader.readAsText(file);
    };
    GeneralService.prototype.extractFileDataCSV = function (csvData) {
        console.log("Leyendo");
        var allTextLines = csvData.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var result = [];
        for (var i = 1; i < allTextLines.length; i++) {
            // split content based on comma
            var line = allTextLines[i].split(',');
            console.log(line);
            if (allTextLines[i] != "") {
                //result.push(U);
                result.push(line);
            }
        }
        console.log("Termine");
        console.log(result);
        return result;
    };
    /*************************************** Orden *****************************************/
    GeneralService.prototype.getLetterSeparator = function (List, Item, index, Property, DESC) {
        var Letter;
        if (index > 0) {
            if (List[index][Property].toString()[0].toUpperCase() != List[index - 1][Property].toString()[0].toUpperCase()) {
                Letter = List[index][Property].toString()[0];
                return Letter.toUpperCase();
            }
            else {
                return false;
            }
        }
        else {
            Letter = Item[Property].toString()[0];
            return Letter.toUpperCase();
        }
    };
    /*************************************** FROALA *****************************************/
    GeneralService.prototype.getFroalaOptions = function (button_opt, minheight, maxheight, placeholder) {
        var FroalaButtons = [];
        switch (button_opt) {
            case 1://All
                FroalaButtons = null;
                /*FroalaButtons = ['bold', 'italic', 'underline','subscript', 'superscript', '|',
                'fontSize','fontFamily','color','paragraphFormat','paragraphStyle','inlineClass', 'lineHeight', '|',
                'align', 'formatOL', 'formatUL', 'outdent','indent', '-',
                'insertLink','insertImage','insertVideo','insertFile', 'insertTable', '|',
                'emoticons', 'specialCharacters', 'insertHR', 'selectAll','clearFormatting','html'
              ];*/
                break;
            case 2://Reactivos
                FroalaButtons = ['bold', 'italic', 'underline', '|', 'subscript', 'superscript', 'fontSize', 'color', 'align',
                    '-',
                    'formatOL', 'formatUL', 'outdent', 'indent', '|',
                    'insertImage', 'insertTable', '|', 'emoticons', 'specialCharacters', 'html'
                ];
                break;
            case 3://Solo Texto
                break;
            case 3://Textarea
                break;
        }
        return {
            language: 'es',
            placeholderText: placeholder,
            minheight: minheight,
            maxheight: maxheight,
            iconsTemplate: 'font_awesome_5',
            toolbarButtons: FroalaButtons,
            quickInsertEnabled: false,
            charCounterCount: true,
            imageUpload: true,
            events: {
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    if (images.length) {
                        var reader = new FileReader();
                        reader.onload = function (ev) {
                            var result = ev.target['result'];
                            editor.image.insert(result, null, null, editor.image.get());
                            console.log(ev, editor.image, ev.target['result']);
                        };
                        // Read image as base64.
                        reader.readAsDataURL(images[0]);
                    }
                    return false;
                }
            },
        };
    };
    /************************************* File AIKEN **************************************/
    GeneralService.prototype.getReactivosExamenFileAIKEN = function (data, ExamenId) {
        var Lines = data.split(/\r\n|\n/);
        var Preguntas = [];
        var Pregunta = new _DTO_Examen__WEBPACK_IMPORTED_MODULE_12__["ExamenReactivoRespuesta"](null);
        var PosicionReactivo = 0;
        var PosicionRespuesta = 0;
        var ExpRegPregunta = /^[A-Z][.][" "]*/;
        for (var i = 0; i < Lines.length; i++) {
            var Line = Lines[i];
            if (Line != "") {
                if (Line.match(ExpRegPregunta)) {
                    //Opciones de Respuesta
                    PosicionRespuesta++;
                    Pregunta.ReactivoRespuestaOpcionMultiple.push(new _DTO_Examen__WEBPACK_IMPORTED_MODULE_12__["ExamenReactivoRespuestaOM"]({
                        ReactivoRespuestaOpcionMultipleId: 0,
                        Respuesta: Line.split(". ")[1],
                        ReactivosId: 0,
                        Posicion: PosicionRespuesta,
                        EsCorrecta: false,
                        Estado: true
                    }));
                }
                else {
                    if (Line.startsWith("ANSWER: ")) {
                        // Linea que indica la Respuesta Correcta
                        var ANSWER = Line.split(":")[1].trim();
                        var OpcionCorrecta = _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].Alphabet.indexOf(ANSWER);
                        Pregunta.ReactivoRespuestaOpcionMultiple[OpcionCorrecta].EsCorrecta = true;
                        Preguntas.push(Pregunta);
                        Pregunta = new _DTO_Examen__WEBPACK_IMPORTED_MODULE_12__["ExamenReactivoRespuesta"](null);
                        PosicionRespuesta = 0;
                    }
                    else {
                        // Pregunta
                        PosicionReactivo++;
                        Pregunta.Reactivo = new _DTO_Examen__WEBPACK_IMPORTED_MODULE_12__["ExamenReactivo"]({
                            ReactivosId: 0,
                            ExamenId: ExamenId,
                            TipoReactivoId: 2,
                            Posicion: PosicionReactivo,
                            Descripcion: Line,
                            Estado: true
                        });
                    }
                }
            }
        }
        return Preguntas;
    };
    GeneralService.prototype.get_reactivos_from_file_AIKEN = function (data, BancoReactivosId) {
        //Tipo == 1 BancoReactivos,
        //Tipo == 2 Examen
        var Pregunta = new _DTO_BancoReactivos__WEBPACK_IMPORTED_MODULE_10__["BReactivo"](null);
        console.log("Leyendo");
        var allTextLines = data.split(/\r\n|\n/);
        var result = [];
        var PosicionReactivo = 0;
        var PosicionRespuesta = 0;
        for (var i = 0; i < allTextLines.length; i++) {
            console.log(i);
            var line = allTextLines[i];
            if (line != "") {
                // Valida si Es una Respuesta
                if (line.match(/^[A-Z][.][" "]*/)) {
                    //OPCIONES DE RESPUESTA
                    PosicionRespuesta++;
                    Pregunta.ReactivoRespuestaOpcionMultiple.push(new _DTO_BancoReactivos__WEBPACK_IMPORTED_MODULE_10__["BReactivoRespuestaOpcionMult"]({
                        ReactivoRespuestaOpcionMultipleId: 0,
                        Respuesta: line.split(". ")[1],
                        ReactivosId: 0,
                        Posicion: PosicionRespuesta,
                        EsCorrecta: false,
                        Estado: true
                    }));
                }
                else {
                    //Valida si es la Respuesta Correcta
                    if (line.startsWith("ANSWER: ")) {
                        //RESPUESTA CORRECTA
                        var ANSWER = line.split(":")[1].trim();
                        var correcta = _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].Alphabet.indexOf(ANSWER);
                        Pregunta.ReactivoRespuestaOpcionMultiple[correcta].EsCorrecta = true;
                        result.push(Pregunta);
                        Pregunta = new _DTO_BancoReactivos__WEBPACK_IMPORTED_MODULE_10__["BReactivo"](null);
                        PosicionRespuesta = 0;
                    }
                    else {
                        //PREGUNTA
                        console.log(PosicionReactivo + ".- " + line);
                        PosicionReactivo++;
                        Pregunta.Reactivo = new _DTO_BancoReactivos__WEBPACK_IMPORTED_MODULE_10__["Reactivo"]({
                            ReactivosId: 0,
                            BancoReactivosId: BancoReactivosId,
                            TipoReactivoId: 2,
                            Posicion: PosicionReactivo,
                            Descripcion: line,
                            Estado: true
                        });
                    }
                }
            }
            else {
                console.log("Separador en Blanco");
                // Quiere decir que ya termino la pregunta, y seguimos buscando una nueva respuesta
            }
        }
        console.log(result);
        return result;
    };
    GeneralService.prototype.getTipoReactivo = function (TipoReactivoId) {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].TiposReactivo.filter(function (TR) { return TR.TipoReactivoId == TipoReactivoId; })[0];
    };
    /*********************************** PERIODOS ****************************************/
    GeneralService.prototype.getTipoPeriodo = function (Tipo) {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["CONSTANTS"].TiposPeriodo.find(function (TP) { return TP.Tipo === Tipo; });
    };
    /**************************************** BACK **************************************/
    GeneralService.prototype.goBack = function () {
        this._location.back();
    };
    /*********************************** Request Methods ***********************/
    GeneralService.prototype.handleResult = function (result) {
        if (result) {
            if (!result.Code && (result.Code == 2004 || result.Code == 2003 || result.Code == 2011)) {
                this.perfil_service.getPerfil().Sesion.isExpired = true;
                return {
                    Result: false,
                    ErrorId: !result.Code,
                    ErrorCode: -1,
                    Message: "Sesión Expirada"
                };
            }
            else {
                return result;
            }
        }
        else {
            console.log("Sin Respuesta");
            return {
                Result: false,
                Code: -2,
                ErrorId: -2,
                ErrorCode: null,
                Message: "No se obtuvo una respuesta del Servidor"
            };
        }
    };
    GeneralService.prototype.handleError = function (error) {
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Ocurrio un problema:', error.error.message);
            //this.snackbarError('Ocurrio un problema:'+ error.error.message, 5000);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Codigo:  " + error.status + ", " +
                ("Mensaje: " + error.error));
            //this.snackbarError(`WebAPI Code: ${error.status}, `,5000);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    ;
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_Sesion_Sesion_service__WEBPACK_IMPORTED_MODULE_13__["SesionService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _perfil_service__WEBPACK_IMPORTED_MODULE_8__["PerfilService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/shared/services/perfil.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/perfil.service.ts ***!
  \***************************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _DTO_Perfil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/Perfil */ "./src/app/shared/DTO/Perfil.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rol_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rol.service */ "./src/app/shared/services/rol.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilService = /** @class */ (function () {
    function PerfilService(router, rol_service) {
        this.router = router;
        this.rol_service = rol_service;
    }
    /************************************************* SESION ********************************************/
    // Inicializa las Variables de SESION
    PerfilService.prototype.initSesion = function (data) {
        this.setPerfil(new _DTO_Perfil__WEBPACK_IMPORTED_MODULE_1__["Perfil"](data.Perfil));
    };
    PerfilService.prototype.setSesion = function (S) { this.Perfil.Sesion = S; };
    PerfilService.prototype.getSesion = function () { return this.Perfil.Sesion; };
    //Verifica el Rol y redirecciona a la seccion corrspondiente
    PerfilService.prototype.selectModule = function () {
        console.log(this.getRolSesion());
        //AdminGral
        if (this.getRolSesion().RolId == 6)
            this.router.navigate(["AdminGral"]);
        //Auditor
        if (this.getRolSesion().RolId == 12)
            this.router.navigate(["Auditor"]);
        //DENMS
        if (this.getRolSesion().RolId == 13)
            this.router.navigate(["Seguimiento"]);
        //Seguimiento Académico
        if (this.getRolSesion().RolId == 14)
            this.router.navigate(["Seguimiento"]);
        //Monitoreo
        if (this.getRolSesion().RolId == 17)
            this.router.navigate(["Desempeno"]);
        //Administrador
        if (this.getRolSesion().RolId == 1)
            this.router.navigate(["Administrador"]);
        //Administrador Asistente
        if (this.getRolSesion().RolId == 10)
            this.router.navigate(["Administrador"]);
        //Profesor
        if (this.getRolSesion().RolId == 2)
            this.router.navigate(["Profesor"]);
        //Estudiante
        if (this.getRolSesion().RolId == 5)
            this.router.navigate(["Estudiante"]);
    };
    PerfilService.prototype.getToken = function () { return this.Perfil.Sesion.Token; };
    PerfilService.prototype.setTiempoFinSesion = function () { };
    PerfilService.prototype.getTiempoRestante = function () { this.Perfil.Sesion.TiempoRestante; };
    PerfilService.prototype.InicioSesion = function (data) {
        this.setPerfil(new _DTO_Perfil__WEBPACK_IMPORTED_MODULE_1__["Perfil"](data));
    };
    /****************************************** Perfil *****************************************/
    PerfilService.prototype.setPerfil = function (P) {
        // Verifica que no este seleccioonado un Rol de Sesion
        if (!P.Sesion.AreaAcademica) {
            P.Sesion.AreaAcademica = P.Persona.Cuentas[0].AreasAcademicas[0];
        }
        this.Perfil = P;
        var Roles = this.rol_service.getRoles();
        this.Perfil.Persona.Cuentas[0].AreasAcademicas.forEach(function (AA) {
            AA.Roles.forEach(function (R) {
                R.Descripcion = Roles.find(function (_Rol) { return _Rol.RolId === R.RolId; }).Descripcion;
            });
        });
        this.savePerfil();
    };
    PerfilService.prototype.getPerfil = function () { return this.Perfil; };
    /* Guardar Informacion en Sesion */
    PerfilService.prototype.savePerfil = function () {
        localStorage.setItem("UanlNexus7Sesion", JSON.stringify(this.Perfil));
    };
    PerfilService.prototype.getPerfilSaved = function () {
        return JSON.parse(localStorage.getItem("UanlNexus7Sesion"));
    };
    PerfilService.prototype.getNombrePersona = function () {
        return this.Perfil.Persona.Nombre + " " + this.Perfil.Persona.ApellidoPaterno + " " + this.Perfil.Persona.ApellidoMaterno;
    };
    PerfilService.prototype.getNombreUsuario = function () {
        return this.getCuenta().NombreUsuario;
    };
    /****************************************** Cuenta **************************************/
    PerfilService.prototype.getCuenta = function () {
        return this.Perfil.Persona.Cuentas[0];
    };
    //Organizacion
    PerfilService.prototype.getOrganizacion = function () {
        return this.Perfil.Persona.Cuentas[0].OrganizacionId;
    };
    //Roles
    PerfilService.prototype.getRoles = function () {
        var _RolesTotal = [];
        var _AreasAcademicas = this.Perfil.Persona.Cuentas[0].AreasAcademicas;
        console.log(_AreasAcademicas);
        var _loop_1 = function () {
            var _Roles = _AreasAcademicas[i].Roles;
            console.log(_Roles);
            for (var j in _Roles) {
                console.log(_Roles[j]);
                console.log(_RolesTotal.includes(_Roles[j]));
                console.log(_RolesTotal.find(function (R) { return R.RolId == _Roles[j].RolId; }));
                _Roles[j].Descripcion = this_1.rol_service.getRoles().find(function (R) { return R.RolId == _Roles[j].RolId; }).Descripcion;
                if (!_RolesTotal.find(function (R) { return R.RolId == _Roles[j].RolId; })) {
                    _RolesTotal.push(_Roles[j]);
                }
            }
        };
        var this_1 = this;
        for (var i in _AreasAcademicas) {
            _loop_1();
        }
        console.log(_RolesTotal);
        return _RolesTotal;
    };
    PerfilService.prototype.getRolSesion = function () {
        var Rol = this.Perfil.Sesion.AreaAcademica.Roles.filter(function (R) { return R.EsRolPrincipal == true; })[0];
        if (Rol) {
            return Rol;
        }
        else {
            return this.Perfil.Sesion.AreaAcademica.Roles[0];
        }
    };
    PerfilService.prototype.setRolSesion = function (id) {
        //this.Perfil.Sesion.AreaAcademica.Roles.find(R => R.EsRolPrincipal == true).EsRolPrincipal = false;
        this.Perfil.Sesion.AreaAcademica.Roles.forEach(function (x) {
            x.EsRolPrincipal = false;
        });
        this.Perfil.Sesion.AreaAcademica.Roles.forEach(function (x) {
            if (x.RolId == id)
                x.EsRolPrincipal = true;
        });
        //this.Perfil.Sesion.AreaAcademica.Roles.find(R => R.RolId == id).EsRolPrincipal = true;
        //this.selectModule();
        this.savePerfil();
    };
    /******************************************** Areas Academicas *************************************/
    PerfilService.prototype.getAreasAcademicas = function () {
        return this.Perfil.Persona.Cuentas[0].AreasAcademicas;
    };
    PerfilService.prototype.setAreaAcademicaSesion = function (AreaAcademicaId) {
        var aa = this.Perfil.Persona.Cuentas[0].AreasAcademicas.find(function (AA) { return AA.AreaAcademicaId == AreaAcademicaId; });
        aa.Roles[0].EsRolPrincipal = true;
        this.Perfil.Sesion.AreaAcademica = aa;
        this.savePerfil();
    };
    PerfilService.prototype.getAreaAcademicaSesion = function () {
        console.log(this.Perfil);
        return this.Perfil.Sesion.AreaAcademica;
    };
    PerfilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _rol_service__WEBPACK_IMPORTED_MODULE_3__["RolService"]])
    ], PerfilService);
    return PerfilService;
}());



/***/ }),

/***/ "./src/app/shared/services/rol.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/rol.service.ts ***!
  \************************************************/
/*! exports provided: RolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolService", function() { return RolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RolService = /** @class */ (function () {
    function RolService() {
    }
    RolService.prototype.getRoles = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].ROLES;
    };
    RolService.prototype.getRol = function (RolId) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].ROLES.find(function (R) { return R.RolId == RolId; });
    };
    RolService.prototype.getRolDescripcion = function (RolId) {
        return this.getRol(RolId).Descripcion;
    };
    RolService.prototype.getRolesAreaAcademica = function () {
        return this.getRoles().filter(function (R) {
            return R.RolId == 2 ||
                R.RolId == 3 ||
                R.RolId == 4 ||
                R.RolId == 5;
        });
    };
    RolService.prototype.getRolesIntegrantesUA = function () {
        return _constants__WEBPACK_IMPORTED_MODULE_1__["CONSTANTS"].ROLES.filter(function (R) { return R.RolId == 3 || R.RolId == 4 || R.RolId == 5; });
    };
    RolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], RolService);
    return RolService;
}());



/***/ }),

/***/ "./src/app/shared/services/seguridad.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/seguridad.service.ts ***!
  \******************************************************/
/*! exports provided: SeguridadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguridadService", function() { return SeguridadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/shared/constants.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil.service */ "./src/app/shared/services/perfil.service.ts");
/* harmony import */ var src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/auth/login-dialog/login-dialog.component */ "./src/app/components/auth/login-dialog/login-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeguridadService = /** @class */ (function () {
    function SeguridadService(http, perfil_service, dialog) {
        this.http = http;
        this.perfil_service = perfil_service;
        this.dialog = dialog;
        this.DomainService = 'Seguridad';
    }
    SeguridadService.prototype.Login = function (data, imperative) {
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("NombreUsuario", data.usuario)
                .append("Password", data.password)
                .append("Imperative", imperative)
                .append("OrganizacionId", "1")
        };
        return this.ExecuteRequest("/CrearSesion", {}, headers);
    };
    SeguridadService.prototype.getPerfil = function (Token) {
        var headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("Token", Token) };
        return this.ExecuteRequest("/ConsultarPerfil", {}, headers);
    };
    SeguridadService.prototype.LoginSIASE = function (Token) {
        var headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("Token", Token) };
        return this.ExecuteRequest("/CrearSesionSIASE", {}, headers);
    };
    SeguridadService.prototype.Logout = function () {
        var _this = this;
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("Token", this.perfil_service.getToken())
                .append("AreaAcademicaId", this.perfil_service.getAreaAcademicaSesion().AreaAcademicaId.toString())
                .append("RolId", this.perfil_service.getRolSesion().RolId.toString())
        };
        return this.ExecuteRequest("/FinalizarSesion", {}, headers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            _this.RemoveLocalStorageSesion();
            window.location.href = '';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    SeguridadService.prototype.ReactivarSesion = function (data, imperative) {
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("NombreUsuario", data.usuario)
                .append("Password", data.password)
                .append("Imperative", imperative)
                .append("OrganizacionId", "1")
        };
        return this.ExecuteRequest("/ReactivarSesion", {}, headers);
    };
    SeguridadService.prototype.ExtenderSesion = function (Token) {
        var headers = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().append("Token", Token) };
        return this.ExecuteRequest("/ExtenderSesion", {}, headers);
    };
    SeguridadService.prototype.SolicitarCambioContrasena = function (data) {
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("NombreUsuario", data.NombreUsuario)
                .append("Correo", data.Correo)
                .append("OrganizacionId", data.OrganizacionId)
        };
        return this.ExecuteRequest("/SolicitarCambioContrasena", {}, headers);
    };
    SeguridadService.prototype.ActualizarPassword = function (data) {
        var headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append("Solicitud", data.token)
                .append("Contrasena", data.password)
        };
        return this.ExecuteRequest("/CambiarContrasena", {}, headers);
    };
    SeguridadService.prototype.ExecuteRequest = function (_Method, _Data, _Header) {
        return this.http.post(_constants__WEBPACK_IMPORTED_MODULE_3__["CONSTANTS"].API_ENDPOINT + this.DomainService + _Method, _Data, _Header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    /*************************** Sesion Expirada *******************************/
    SeguridadService.prototype.isSesionExpired = function (Code) {
        if (Code == 2004 || Code == 2011) {
            return true;
        }
        else {
            return false;
        }
    };
    SeguridadService.prototype.sesionExpired = function () {
        return this.openDialogLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { if (data.SesionInit)
            return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    SeguridadService.prototype.RemoveLocalStorageSesion = function () {
        localStorage.removeItem('UanlNexus7Sesion');
    };
    SeguridadService.prototype.openDialogLogin = function () {
        var _this = this;
        if (this.dialogLogin)
            this.dialogLogin.close();
        this.dialogLogin = this.dialog.open(src_app_components_auth_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LoginDialogComponent"]);
        this.dialogLogin.afterOpen().subscribe(function (result) { _this.dialogLoginIsOpen = true; });
        this.dialogLogin.afterClosed().subscribe(function (result) { _this.dialogLoginIsOpen = false; });
        return this.dialogLogin.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    SeguridadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], SeguridadService);
    return SeguridadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: ''
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\UANL\Nexus7-Frontend\Nexus7-UI-V1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map

}
/*
     FILE ARCHIVED ON 03:40:29 Jun 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:23 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.501
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.009
  esindex: 0.009
  cdx.remote: 8.079
  LoadShardBlock: 461.056 (3)
  PetaboxLoader3.resolve: 439.791 (4)
  PetaboxLoader3.datanode: 129.547 (5)
  load_resource: 183.967 (2)
*/