(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_welcome_welcome_module_ts"],{

/***/ 51149:
/*!********************************************************!*\
  !*** ./src/app/page/welcome/welcome-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 76697);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 96478:
/*!************************************************!*\
  !*** ./src/app/page/welcome/welcome.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 51149);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 76697);







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 76697:
/*!**********************************************!*\
  !*** ./src/app/page/welcome/welcome.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 80346);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 74341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let WelcomePage = class WelcomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.AppFeatures = [
            {
                Title_ar: "التوصيل متوفر ٢٤ ساعة",
                Title_en: "24 Hour Delivery",
                img: "../../../assets/icon/slider_1.png",
            }, {
                Title_ar: "سهولة و سرعة الاستلام و التوصيل",
                Title_en: "Easy and Fast Delivery",
                img: "../../../assets/icon/slider_2.png",
            }, {
                Title_ar: "اعلانات تجارية",
                Title_en: "Business Advertaisment",
                img: "../../../assets/icon/slider_3.png",
            }, {
                Title_ar: "خدمة توصيل الافراد ",
                Title_en: "Passenger Transportation",
                img: "../../../assets/icon/slider_4.png",
            },
        ];
        this.sliderOptions = {
            autoplay: true,
            slidesPerView: 1
        };
        this.HasLogin = 0;
        this.HasLoginedMethod();
    }
    ngOnInit() {
    }
    HasLoginedMethod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            if (JSON.parse(HasLogin.value) == 1) {
                this.navCtrl.navigateForward('/tabs/map');
            }
            else {
                this.setAlocalStorage();
            }
        });
    }
    setAlocalStorage() {
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'HasLogin',
            value: JSON.stringify('0'),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Id',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Email',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Name_ar',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Name_en',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Family_name_ar',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Family_name_en',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Phone_no',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Country_code',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Country_id',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Governate_id',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'City_id',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Lat',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'log',
            value: JSON.stringify(''),
        });
        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
            key: 'Blocked',
            value: JSON.stringify('0'),
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



/***/ }),

/***/ 74341:
/*!************************************************!*\
  !*** ./src/app/page/welcome/welcome.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".welcome_page {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.welcome_page ion-slides {\n  margin: auto;\n  margin-top: 30% !important;\n}\n\n.welcome_page ion-slide {\n  padding: 40px 10px;\n  display: block;\n}\n\n.welcome_page ion-slide img {\n  height: 200px !important;\n  width: 200px !important;\n  margin-bottom: 60px !important;\n}\n\n.welcome_page ion-slide ion-label {\n  font-size: larger;\n  font-weight: bolder;\n  margin-bottom: 20px !important;\n}\n\n.welcome_footer {\n  margin: 0 !important;\n  padding: 10px !important;\n  background-color: #353535;\n  font-size: xx-large;\n  font-weight: bold;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFEQTs7QUFJQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURBOztBQUlBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUVBLDhCQUFBO0FBRkE7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFPQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoid2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi53ZWxjb21lX3BhZ2V7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xuICAgIFxufVxuLndlbGNvbWVfcGFnZSBpb24tc2xpZGVze1xubWFyZ2luOiBhdXRvO1xubWFyZ2luLXRvcDogMzAlICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lX3BhZ2UgaW9uLXNsaWRlIHtcbnBhZGRpbmc6IDQwcHggMTBweDtcbmRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud2VsY29tZV9wYWdlIGlvbi1zbGlkZSAgaW1ne1xuaGVpZ2h0OiAyMDBweCAgIWltcG9ydGFudDtcbndpZHRoOiAyMDBweCAgIWltcG9ydGFudDtcblxubWFyZ2luLWJvdHRvbTogNjBweCAgIWltcG9ydGFudDsgXG5cbn1cbi53ZWxjb21lX3BhZ2UgaW9uLXNsaWRlIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHggICFpbXBvcnRhbnQ7XG4gICAgXG5cbn1cblxuLndlbGNvbWVfZm9vdGVye1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtYWxpZ246IGVuZDtcblxuXG59Il19 */");

/***/ }),

/***/ 80346:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/welcome/welcome.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"welcome_page\">\n\n  \n\n  <ion-slides mode=\"ios\" pager=\"true\"  [options]=\"sliderOptions\" >\n    <ion-slide color=\"secondary\" *ngFor=\"let feature of AppFeatures\" >\n      <img [src]=\"feature.img\" alt=\"\">\n      <br>\n     <ion-label color=\"secondary\">{{feature.Title_en}}</ion-label>\n     <br><br>\n     <ion-label color=\"secondary\">{{feature.Title_ar}}</ion-label>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer class=\"welcome_footer ion-no-border\">\n  <ion-text [routerLink]=\"['/welcome-language']\" color=\"secondary\">\n    <h1>SKIP</h1>\n  </ion-text>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_welcome_welcome_module_ts.js.map