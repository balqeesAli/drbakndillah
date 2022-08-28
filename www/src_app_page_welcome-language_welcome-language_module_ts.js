(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_welcome-language_welcome-language_module_ts"],{

/***/ 67804:
/*!**************************************************************************!*\
  !*** ./src/app/page/welcome-language/welcome-language-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeLanguagePageRoutingModule": () => (/* binding */ WelcomeLanguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-language.page */ 55059);




const routes = [
    {
        path: '',
        component: _welcome_language_page__WEBPACK_IMPORTED_MODULE_0__.WelcomeLanguagePage
    }
];
let WelcomeLanguagePageRoutingModule = class WelcomeLanguagePageRoutingModule {
};
WelcomeLanguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomeLanguagePageRoutingModule);



/***/ }),

/***/ 39532:
/*!******************************************************************!*\
  !*** ./src/app/page/welcome-language/welcome-language.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeLanguagePageModule": () => (/* binding */ WelcomeLanguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _welcome_language_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-language-routing.module */ 67804);
/* harmony import */ var _welcome_language_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-language.page */ 55059);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let WelcomeLanguagePageModule = class WelcomeLanguagePageModule {
};
WelcomeLanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _welcome_language_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomeLanguagePageRoutingModule
        ],
        declarations: [_welcome_language_page__WEBPACK_IMPORTED_MODULE_1__.WelcomeLanguagePage]
    })
], WelcomeLanguagePageModule);



/***/ }),

/***/ 55059:
/*!****************************************************************!*\
  !*** ./src/app/page/welcome-language/welcome-language.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeLanguagePage": () => (/* binding */ WelcomeLanguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcome_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome-language.page.html */ 56968);
/* harmony import */ var _welcome_language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-language.page.scss */ 52631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);







let WelcomeLanguagePage = class WelcomeLanguagePage {
    constructor(translate, navCtrl) {
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.selectedLan = "";
        this.selectedLan = this.translate.getDefaultLang();
    }
    ngOnInit() {
    }
    changeLanguage(selectedLan) {
        this.translate.use(selectedLan);
        if (selectedLan == 'ar') {
            document.documentElement.dir = "rtl";
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'direction',
                value: JSON.stringify('rtl'),
            });
        }
        else {
            document.documentElement.dir = "ltr";
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'direction',
                value: JSON.stringify('ltr'),
            });
        }
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'language',
            value: JSON.stringify(selectedLan),
        });
        this.navCtrl.navigateForward('/tabs/map');
    }
};
WelcomeLanguagePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
WelcomeLanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-welcome-language',
        template: _raw_loader_welcome_language_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_language_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomeLanguagePage);



/***/ }),

/***/ 52631:
/*!******************************************************************!*\
  !*** ./src/app/page/welcome-language/welcome-language.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcome_language_page {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.contant {\n  text-align: center;\n  margin: auto;\n  margin-top: 30% !important;\n}\n\n.welcome_language_page img {\n  height: 250px !important;\n  width: 330px !important;\n  margin-bottom: 60px !important;\n}\n\n.contant ion-button {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtbGFuZ3VhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBREE7O0FBS0E7RUFDSSxVQUFBO0FBRkoiLCJmaWxlIjoid2VsY29tZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi53ZWxjb21lX2xhbmd1YWdlX3BhZ2V7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xuICAgIFxufSBcbi5jb250YW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwJSAhaW1wb3J0YW50O1xufVxuXG4ud2VsY29tZV9sYW5ndWFnZV9wYWdlICBpbWd7XG5oZWlnaHQ6IDI1MHB4ICAhaW1wb3J0YW50O1xud2lkdGg6IDMzMHB4ICAhaW1wb3J0YW50O1xubWFyZ2luLWJvdHRvbTogNjBweCAgIWltcG9ydGFudDsgXG5cbn0gXG5cbi5jb250YW50IGlvbi1idXR0b257XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuIl19 */");

/***/ }),

/***/ 56968:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/welcome-language/welcome-language.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"welcome_language_page\">\n\n  <div class=\"contant\">\n    <img src=\"../../../assets/icon/logo.png\" alt=\"Debak Nidillah\">\n<br>\n    <ion-button  (click)=\"changeLanguage('en')\"   size=\"large\" color=\"secondary\"   fill=\"outline\" shape=\"round\">\n      ENGLISH\n    </ion-button>\n    <br>\n    <ion-button (click)=\"changeLanguage('ar')\"   size=\"large\" color=\"secondary\"   fill=\"outline\" shape=\"round\">\n      العربية\n    </ion-button>\n\n  </div>\n\n</ion-content>\n \n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_welcome-language_welcome-language_module_ts.js.map