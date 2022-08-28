(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_my-details_my-details_module_ts"],{

/***/ 78234:
/*!**************************************************************!*\
  !*** ./src/app/page/my-details/my-details-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDetailsPageRoutingModule": () => (/* binding */ MyDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-details.page */ 9749);




const routes = [
    {
        path: '',
        component: _my_details_page__WEBPACK_IMPORTED_MODULE_0__.MyDetailsPage
    }
];
let MyDetailsPageRoutingModule = class MyDetailsPageRoutingModule {
};
MyDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyDetailsPageRoutingModule);



/***/ }),

/***/ 12923:
/*!******************************************************!*\
  !*** ./src/app/page/my-details/my-details.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDetailsPageModule": () => (/* binding */ MyDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-details-routing.module */ 78234);
/* harmony import */ var _my_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-details.page */ 9749);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let MyDetailsPageModule = class MyDetailsPageModule {
};
MyDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _my_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyDetailsPageRoutingModule
        ],
        declarations: [_my_details_page__WEBPACK_IMPORTED_MODULE_1__.MyDetailsPage]
    })
], MyDetailsPageModule);



/***/ }),

/***/ 9749:
/*!****************************************************!*\
  !*** ./src/app/page/my-details/my-details.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyDetailsPage": () => (/* binding */ MyDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-details.page.html */ 46136);
/* harmony import */ var _my_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-details.page.scss */ 60329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MyDetailsPage = class MyDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
MyDetailsPage.ctorParameters = () => [];
MyDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-details',
        template: _raw_loader_my_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyDetailsPage);



/***/ }),

/***/ 60329:
/*!******************************************************!*\
  !*** ./src/app/page/my-details/my-details.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signup_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signup_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signup_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signup_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoibXktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbnVwX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4uU2lnbnVwX2hlYWRlciBkaXZ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG5ib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xufVxuLlNpZ251cF9oZWFkZXIgaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgXG59XG5cbi5TaWdudXBfY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbi5UZXJtX2NvbmRpdGlvbl9sYWJlbHtcbiAgICBtYXJnaW46IDAgMjBweCAgO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 46136:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-details/my-details.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signup_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"welcome-language\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'My Detail'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signup_content\">\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"person\"></ion-icon>\n      <ion-input type=\"text\" [placeholder]=\"'Your Name'|translate\"></ion-input>\n    </ion-item> \n    \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"person\"></ion-icon>\n      <ion-input type=\"text\" [placeholder]=\"'Family Name'|translate\"></ion-input>\n    </ion-item> \n\n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"call\"></ion-icon>\n      <ion-input type=\"text\" [placeholder]=\"'Phone Number'|translate\"></ion-input>\n    </ion-item> \n    \n\n    <ion-item lines=\"none\">\n      <ion-label>{{'Country'|translate}}</ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <ion-select value=\"Country\" multiple=\"false\" [placeholder]=\"'Select Country'|translate\">\n        <ion-select-option [value]=\"'Country_option'|translate\">{{'Country_option'|translate}}</ion-select-option> \n      </ion-select>\n    </ion-item>\n  \n    <ion-item lines=\"none\">\n      <ion-label> {{'Goverate'|translate}}</ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <ion-select value=\"Goverate\" multiple=\"false\" [placeholder]=\"'Select Goverate'|translate\">\n        <ion-select-option [value]=\"'Goverate_option'|translate\">{{'Goverate_option'|translate}}</ion-select-option> \n        <ion-select-option value=\"Dhofar\">Dhofar</ion-select-option> \n        <ion-select-option value=\"Buraymi\">Buraymi</ion-select-option> \n      </ion-select>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-label>{{'City'|translate}} </ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <ion-select value=\"city\" multiple=\"false\" [placeholder]=\"'Select city'|translate\">\n        <ion-select-option [value]=\"'city_option'|translate\">{{'city_option'|translate}}</ion-select-option> \n        <ion-select-option value=\"Al hail\">Al hail</ion-select-option> \n      </ion-select>\n   </ion-item> \n   \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"location\"></ion-icon> \n      <ion-label>{{'Click to Enter your address on the map'|translate}}</ion-label>\n    </ion-item> \n\n    </ion-list>\n    \n    \n  <div class=\"Term_condition_label\" >\n   <ion-button   size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Confirm'|translate}} \n    </ion-button>\n \n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-details_my-details_module_ts.js.map