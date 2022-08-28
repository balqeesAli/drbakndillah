(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_user-location_user-location_module_ts"],{

/***/ 56738:
/*!********************************************************************!*\
  !*** ./src/app/page/user-location/user-location-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLocationPageRoutingModule": () => (/* binding */ UserLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-location.page */ 59475);




const routes = [
    {
        path: '',
        component: _user_location_page__WEBPACK_IMPORTED_MODULE_0__.UserLocationPage
    }
];
let UserLocationPageRoutingModule = class UserLocationPageRoutingModule {
};
UserLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserLocationPageRoutingModule);



/***/ }),

/***/ 59022:
/*!************************************************************!*\
  !*** ./src/app/page/user-location/user-location.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLocationPageModule": () => (/* binding */ UserLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-location-routing.module */ 56738);
/* harmony import */ var _user_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-location.page */ 59475);







let UserLocationPageModule = class UserLocationPageModule {
};
UserLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserLocationPageRoutingModule
        ],
        declarations: [_user_location_page__WEBPACK_IMPORTED_MODULE_1__.UserLocationPage]
    })
], UserLocationPageModule);



/***/ }),

/***/ 59475:
/*!**********************************************************!*\
  !*** ./src/app/page/user-location/user-location.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLocationPage": () => (/* binding */ UserLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-location.page.html */ 10370);
/* harmony import */ var _user_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-location.page.scss */ 43498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




// import { AfterViewInit , ViewChild} from '@angular/core';
// declare const google: any;
let UserLocationPage = class UserLocationPage {
    // export class UserLocationPage implements OnInit ,AfterViewInit {
    // public map;
    // public geoCoder;
    // public marker;
    // @ViewChild('mapElement' , {static: false}) mapElement;
    // public formattedAddress;
    constructor() { }
    ngOnInit() {
    }
};
UserLocationPage.ctorParameters = () => [];
UserLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user-location',
        template: _raw_loader_user_location_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_location_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserLocationPage);



/***/ }),

/***/ 43498:
/*!************************************************************!*\
  !*** ./src/app/page/user-location/user-location.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InVzZXItbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcbiAgICBoZWlnaHQ6IDcwJTtcbn0iXX0= */");

/***/ }),

/***/ 10370:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/user-location/user-location.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header [translucent]=\"true\">\n\n  <ion-toolbar color=\"warning\">\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n      Where I Am\n    </ion-button>\n    <ion-title slot=\"end\">Google Map</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/icon/location-marker.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_user-location_user-location_module_ts.js.map