(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_place-api_place-api_module_ts"],{

/***/ 6145:
/*!*******************************************************!*\
  !*** ./src/app/place-api/place-api-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceApiPageRoutingModule": () => (/* binding */ PlaceApiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _place_api_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-api.page */ 68501);




const routes = [
    {
        path: '',
        component: _place_api_page__WEBPACK_IMPORTED_MODULE_0__.PlaceApiPage
    }
];
let PlaceApiPageRoutingModule = class PlaceApiPageRoutingModule {
};
PlaceApiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceApiPageRoutingModule);



/***/ }),

/***/ 71449:
/*!***********************************************!*\
  !*** ./src/app/place-api/place-api.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceApiPageModule": () => (/* binding */ PlaceApiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _place_api_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-api-routing.module */ 6145);
/* harmony import */ var _place_api_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-api.page */ 68501);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 86095);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);









// GoogleMapDemo = GoogleMapDemo
let PlaceApiPageModule = class PlaceApiPageModule {
};
PlaceApiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMapsModule,
            _place_api_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceApiPageRoutingModule
        ],
        declarations: [_place_api_page__WEBPACK_IMPORTED_MODULE_1__.PlaceApiPage]
    })
], PlaceApiPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_place-api_place-api_module_ts.js.map