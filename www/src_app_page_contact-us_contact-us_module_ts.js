(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_contact-us_contact-us_module_ts"],{

/***/ 71628:
/*!**************************************************************!*\
  !*** ./src/app/page/contact-us/contact-us-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageRoutingModule": () => (/* binding */ ContactUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.page */ 21445);




const routes = [
    {
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactUsPageRoutingModule);



/***/ }),

/***/ 51951:
/*!******************************************************!*\
  !*** ./src/app/page/contact-us/contact-us.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPageModule": () => (/* binding */ ContactUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 71628);
/* harmony import */ var _contact_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page */ 21445);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ContactUsPageModule = class ContactUsPageModule {
};
ContactUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsPageRoutingModule
        ],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_1__.ContactUsPage]
    })
], ContactUsPageModule);



/***/ }),

/***/ 21445:
/*!****************************************************!*\
  !*** ./src/app/page/contact-us/contact-us.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsPage": () => (/* binding */ ContactUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.page.html */ 72590);
/* harmony import */ var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.page.scss */ 12842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ContactUsPage = class ContactUsPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsPage.ctorParameters = () => [];
ContactUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactUsPage);



/***/ }),

/***/ 12842:
/*!******************************************************!*\
  !*** ./src/app/page/contact-us/contact-us.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signup_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signup_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signup_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signup_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoiY29udGFjdC11cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbnVwX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4uU2lnbnVwX2hlYWRlciBkaXZ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG5ib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xufVxuLlNpZ251cF9oZWFkZXIgaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgXG59XG5cbi5TaWdudXBfY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbi5UZXJtX2NvbmRpdGlvbl9sYWJlbHtcbiAgICBtYXJnaW46IDAgMjBweCAgO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 72590:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/contact-us/contact-us.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signup_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Contact Us'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signup_content\">\n\n  <ion-list>\n   \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"person\"></ion-icon>\n      <ion-input type=\"text\" [placeholder]=\"'Your Name'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"mail\"></ion-icon>\n      <ion-input type=\"mail\" [placeholder]=\"'Email Address'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"call\"></ion-icon>\n      <ion-input type=\"number\" [placeholder]=\"'Phone Number'|translate\"></ion-input>\n    </ion-item> \n \n    <ion-item lines=\"none\"> \n      <ion-icon slot=\"start\"  name=\"text\"></ion-icon>\n      <ion-select value=\"city\" multiple=\"false\"  interface=\"action-sheet\" [placeholder]=\"'Topic'|translate\">\n        <ion-select-option [value]=\"'suggestion'|translate\">{{'suggestion'|translate}}</ion-select-option> \n        <ion-select-option [value]=\"'complain'|translate\">{{'complain'|translate}}</ion-select-option> \n        <ion-select-option [value]=\"'other'|translate\">{{'other'|translate}}</ion-select-option> \n      </ion-select>\n   </ion-item> \n\n\n\n  <ion-item lines=\"none\">\n  \n    <ion-icon  slot=\"start\" name=\"alert-circle\"></ion-icon>\n    <ion-textarea  [placeholder]=\"'Type Your Message Here ...'|translate\"></ion-textarea>\n  </ion-item>\n  \n    </ion-list>\n    \n    \n  <div class=\"Term_condition_label\" >\n    <br><br>\n    <ion-button   size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Send'|translate}} \n    </ion-button>\n\n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_contact-us_contact-us_module_ts.js.map