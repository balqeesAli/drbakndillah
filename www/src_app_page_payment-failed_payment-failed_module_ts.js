(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_payment-failed_payment-failed_module_ts"],{

/***/ 2394:
/*!**********************************************************************!*\
  !*** ./src/app/page/payment-failed/payment-failed-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFailedPageRoutingModule": () => (/* binding */ PaymentFailedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_failed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-failed.page */ 11562);




const routes = [
    {
        path: '',
        component: _payment_failed_page__WEBPACK_IMPORTED_MODULE_0__.PaymentFailedPage
    }
];
let PaymentFailedPageRoutingModule = class PaymentFailedPageRoutingModule {
};
PaymentFailedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentFailedPageRoutingModule);



/***/ }),

/***/ 56812:
/*!**************************************************************!*\
  !*** ./src/app/page/payment-failed/payment-failed.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFailedPageModule": () => (/* binding */ PaymentFailedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-failed-routing.module */ 2394);
/* harmony import */ var _payment_failed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-failed.page */ 11562);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let PaymentFailedPageModule = class PaymentFailedPageModule {
};
PaymentFailedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _payment_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentFailedPageRoutingModule
        ],
        declarations: [_payment_failed_page__WEBPACK_IMPORTED_MODULE_1__.PaymentFailedPage]
    })
], PaymentFailedPageModule);



/***/ }),

/***/ 11562:
/*!************************************************************!*\
  !*** ./src/app/page/payment-failed/payment-failed.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFailedPage": () => (/* binding */ PaymentFailedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_failed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-failed.page.html */ 87603);
/* harmony import */ var _payment_failed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-failed.page.scss */ 39511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PaymentFailedPage = class PaymentFailedPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentFailedPage.ctorParameters = () => [];
PaymentFailedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-failed',
        template: _raw_loader_payment_failed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_failed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentFailedPage);



/***/ }),

/***/ 39511:
/*!**************************************************************!*\
  !*** ./src/app/page/payment-failed/payment-failed.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".PaymentSucess {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n  text-align: center;\n}\n\n.PaymentSucess ion-icon {\n  font-size: 170px;\n  margin-bottom: 15px;\n  margin-top: 15%;\n}\n\n.PaymentSucess div {\n  color: #F3E834;\n}\n\n.PaymentSucess div h1, .PaymentSucess h4 {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtZmFpbGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQUFKOztBQUlBO0VBRUksY0FBQTtBQUZKOztBQVFBO0VBQ0ksb0JBQUE7QUFMSiIsImZpbGUiOiJwYXltZW50LWZhaWxlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGF5bWVudFN1Y2Vzc3tcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlBheW1lbnRTdWNlc3MgaW9uLWljb257IFxuICAgIGZvbnQtc2l6ZTogMTcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgXG4gICAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG5cbi5QYXltZW50U3VjZXNzIGRpdnsgXG5cbiAgICBjb2xvcjogI0YzRTgzNDtcbiAgICBcbiAgICBcbn1cblxuXG4uUGF5bWVudFN1Y2VzcyBkaXYgaDEgLCAuUGF5bWVudFN1Y2VzcyBoNCAgeyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDsgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 87603:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/payment-failed/payment-failed.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"PaymentSucess\" [routerLink]=\"['/all-packages']\" >\n\n  \n  <div>\n  \n    <ion-icon color=\"secondary\" name=\"secondary\n    \n    \"></ion-icon>\n    <h1>{{'Payment Failed'|translate}}</h1>\n    <h4>{{'Please try again'|translate}}</h4>\n  \n  \n  </div>\n   \n  \n  </ion-content>\n  \n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_page_payment-failed_payment-failed_module_ts.js.map