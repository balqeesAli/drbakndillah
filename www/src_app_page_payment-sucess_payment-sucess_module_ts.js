(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_payment-sucess_payment-sucess_module_ts"],{

/***/ 69491:
/*!**********************************************************************!*\
  !*** ./src/app/page/payment-sucess/payment-sucess-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSucessPageRoutingModule": () => (/* binding */ PaymentSucessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_sucess_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-sucess.page */ 91648);




const routes = [
    {
        path: '',
        component: _payment_sucess_page__WEBPACK_IMPORTED_MODULE_0__.PaymentSucessPage
    }
];
let PaymentSucessPageRoutingModule = class PaymentSucessPageRoutingModule {
};
PaymentSucessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentSucessPageRoutingModule);



/***/ }),

/***/ 31982:
/*!**************************************************************!*\
  !*** ./src/app/page/payment-sucess/payment-sucess.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSucessPageModule": () => (/* binding */ PaymentSucessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_sucess_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-sucess-routing.module */ 69491);
/* harmony import */ var _payment_sucess_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-sucess.page */ 91648);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let PaymentSucessPageModule = class PaymentSucessPageModule {
};
PaymentSucessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _payment_sucess_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentSucessPageRoutingModule
        ],
        declarations: [_payment_sucess_page__WEBPACK_IMPORTED_MODULE_1__.PaymentSucessPage]
    })
], PaymentSucessPageModule);



/***/ }),

/***/ 91648:
/*!************************************************************!*\
  !*** ./src/app/page/payment-sucess/payment-sucess.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSucessPage": () => (/* binding */ PaymentSucessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_sucess_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-sucess.page.html */ 59021);
/* harmony import */ var _payment_sucess_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-sucess.page.scss */ 83318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PaymentSucessPage = class PaymentSucessPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentSucessPage.ctorParameters = () => [];
PaymentSucessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-sucess',
        template: _raw_loader_payment_sucess_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_sucess_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentSucessPage);



/***/ }),

/***/ 83318:
/*!**************************************************************!*\
  !*** ./src/app/page/payment-sucess/payment-sucess.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".PaymentSucess {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n  text-align: center;\n}\n\n.PaymentSucess ion-icon {\n  font-size: 170px;\n  margin-bottom: 15px;\n  margin-top: 15%;\n}\n\n.PaymentSucess div {\n  color: #F3E834;\n}\n\n.PaymentSucess div h1, .PaymentSucess h4 {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtc3VjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQUFKOztBQUlBO0VBRUksY0FBQTtBQUZKOztBQVFBO0VBQ0ksb0JBQUE7QUFMSiIsImZpbGUiOiJwYXltZW50LXN1Y2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGF5bWVudFN1Y2Vzc3tcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlBheW1lbnRTdWNlc3MgaW9uLWljb257IFxuICAgIGZvbnQtc2l6ZTogMTcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgXG4gICAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5cbi5QYXltZW50U3VjZXNzIGRpdnsgXG5cbiAgICBjb2xvcjogI0YzRTgzNDtcbiAgICBcbiAgICBcbn1cblxuXG4uUGF5bWVudFN1Y2VzcyBkaXYgaDEgLCAuUGF5bWVudFN1Y2VzcyBoNCAgeyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDsgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 59021:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/payment-sucess/payment-sucess.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"PaymentSucess\" [routerLink]=\"['/add-item']\" >\n\n  \n<div>\n\n  <ion-icon color=\"secondary\" name=\"happy\"></ion-icon>\n  <h1>{{'Payment Done Successfully'|translate}}</h1>\n  <h4>{{'You can Continue  Using Dabak Ndillah'|translate}}</h4>\n\n\n</div>\n \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_payment-sucess_payment-sucess_module_ts.js.map