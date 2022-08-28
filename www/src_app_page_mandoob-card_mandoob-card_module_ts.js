(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_mandoob-card_mandoob-card_module_ts"],{

/***/ 7259:
/*!******************************************************************!*\
  !*** ./src/app/page/mandoob-card/mandoob-card-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MandoobCardPageRoutingModule": () => (/* binding */ MandoobCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mandoob_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mandoob-card.page */ 7771);




const routes = [
    {
        path: '',
        component: _mandoob_card_page__WEBPACK_IMPORTED_MODULE_0__.MandoobCardPage
    }
];
let MandoobCardPageRoutingModule = class MandoobCardPageRoutingModule {
};
MandoobCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MandoobCardPageRoutingModule);



/***/ }),

/***/ 14757:
/*!**********************************************************!*\
  !*** ./src/app/page/mandoob-card/mandoob-card.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MandoobCardPageModule": () => (/* binding */ MandoobCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mandoob_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mandoob-card-routing.module */ 7259);
/* harmony import */ var _mandoob_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandoob-card.page */ 7771);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let MandoobCardPageModule = class MandoobCardPageModule {
};
MandoobCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _mandoob_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.MandoobCardPageRoutingModule
        ],
        declarations: [_mandoob_card_page__WEBPACK_IMPORTED_MODULE_1__.MandoobCardPage]
    })
], MandoobCardPageModule);



/***/ }),

/***/ 7771:
/*!********************************************************!*\
  !*** ./src/app/page/mandoob-card/mandoob-card.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MandoobCardPage": () => (/* binding */ MandoobCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mandoob_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mandoob-card.page.html */ 96589);
/* harmony import */ var _mandoob_card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandoob-card.page.scss */ 76580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let MandoobCardPage = class MandoobCardPage {
    constructor(http, loadingController) {
        this.http = http;
        this.loadingController = loadingController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.userName();
        this.getNumbersOfPackages();
    }
    ngOnInit() {
    }
    userName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const Name_en = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Name_en' });
            console.log(JSON.parse(Name_en.value));
            const Family_name_en = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Family_name_en' });
            console.log(JSON.parse(Family_name_en.value));
            this.UserName_en = JSON.parse(Name_en.value);
            const Name_ar = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Name_ar' });
            console.log(JSON.parse(Name_ar.value));
            const Family_name_ar = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Family_name_ar' });
            console.log(JSON.parse(Family_name_ar.value));
            this.UserName_en = JSON.parse(Name_en.value) + " " + JSON.parse(Family_name_en.value);
            this.UserName_ar = JSON.parse(Name_ar.value) + " " + JSON.parse(Family_name_ar.value);
        });
    }
    getNumbersOfPackages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
            let mandoobCard;
            let newitem;
            // const userId = await Storage.get({ key: 'Id' });
            // console.log("userId_____"+ JSON.parse(userId.value));
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log("userId_____" + JSON.parse(userId.value));
            let url = this.Api_URL + "getUsersPackagesNumber.php?id=" + JSON.parse(userId.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                this.packageExpiryDate = retrivedResponse.packageExpiryDate;
                loading.dismiss();
            }, (error) => {
                loading.dismiss();
            });
        });
    }
};
MandoobCardPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
MandoobCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mandoob-card',
        template: _raw_loader_mandoob_card_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mandoob_card_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MandoobCardPage);



/***/ }),

/***/ 76580:
/*!**********************************************************!*\
  !*** ./src/app/page/mandoob-card/mandoob-card.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mandoobcard_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.mandoobcard ion-card {\n  width: 85%;\n  height: 70%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  color: yellow;\n  background-color: #353535;\n  border-radius: 3%;\n  padding: 5px 30px;\n  text-align: center;\n  border: 5px solid yellow;\n}\n\n.mandoobcard img {\n  width: 100%;\n  height: 45%;\n}\n\n.mandoobcard h2, .mandoobcard h3 {\n  padding: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmRvb2ItY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFRQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBTko7O0FBVUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVVBO0VBQ0ksY0FBQTtBQVBKIiwiZmlsZSI6Im1hbmRvb2ItY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZG9vYmNhcmRfaGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cblxuLm1hbmRvb2JjYXJke1xuXG4gICAgXG59XG5cbi5tYW5kb29iY2FyZCBpb24tY2FyZHtcblxuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6IHllbGxvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XG5cbn1cblxuLm1hbmRvb2JjYXJkIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbn1cblxuLm1hbmRvb2JjYXJkIGgyICwgLm1hbmRvb2JjYXJkIGgze1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4ubWFuZG9vYmNhcmR7XG4gICAgXG59XG5cbi5tYW5kb29iY2FyZHtcbiAgICBcbn0iXX0= */");

/***/ }),

/***/ 96589:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/mandoob-card/mandoob-card.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"mandoobcard_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'Mandoob Card'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mandoobcard\">\n    <ion-card>\n      <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n\n      <h3>{{'Mandoob Card'|translate}}</h3>\n      <!-- <h4>{{'Drbak Ndillah Company'|translate}}</h4><br> -->\n\n      <h5>{{UserName_en}}</h5>\n      <h5>{{UserName_ar}}</h5>\n\n      <h5>{{'Expiry Date'|translate}} {{packageExpiryDate}}</h5>\n\n    </ion-card>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_mandoob-card_mandoob-card_module_ts.js.map