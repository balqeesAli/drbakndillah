(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_terms-conditions_terms-conditions_module_ts"],{

/***/ 68345:
/*!**************************************************************************!*\
  !*** ./src/app/page/terms-conditions/terms-conditions-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageRoutingModule": () => (/* binding */ TermsConditionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions.page */ 90690);




const routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPage
    }
];
let TermsConditionsPageRoutingModule = class TermsConditionsPageRoutingModule {
};
TermsConditionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsConditionsPageRoutingModule);



/***/ }),

/***/ 7551:
/*!******************************************************************!*\
  !*** ./src/app/page/terms-conditions/terms-conditions.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPageModule": () => (/* binding */ TermsConditionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-conditions-routing.module */ 68345);
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page */ 90690);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let TermsConditionsPageModule = class TermsConditionsPageModule {
};
TermsConditionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsConditionsPageRoutingModule
        ],
        declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsPage]
    })
], TermsConditionsPageModule);



/***/ }),

/***/ 90690:
/*!****************************************************************!*\
  !*** ./src/app/page/terms-conditions/terms-conditions.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsPage": () => (/* binding */ TermsConditionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-conditions.page.html */ 66730);
/* harmony import */ var _terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.page.scss */ 69698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);








let TermsConditionsPage = class TermsConditionsPage {
    constructor(navCtrl, popCtrl, http, toastCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.popCtrl = popCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.termsandcondition_ar = "";
        this.termsandcondition_en = "";
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.Selected_language_direction();
    }
    ngOnInit() {
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            this.applang = JSON.parse(language.value);
            this.getTerms();
            // this.presentAlertConfirm(); 
        });
    }
    getTerms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            let url = this.Api_URL + "/viewtermandcondition.php";
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id);
                //console.log(response[0].response);
                loading.dismiss();
                if (retrivedResponse.response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else {
                    this.termsandcondition_ar = retrivedResponse[0].Text_ar;
                    this.termsandcondition_en = retrivedResponse[0].Text_en;
                    return;
                }
            }, (error) => {
            });
        });
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
};
TermsConditionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
TermsConditionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_conditions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsConditionsPage);



/***/ }),

/***/ 69698:
/*!******************************************************************!*\
  !*** ./src/app/page/terms-conditions/terms-conditions.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Terms_conditions_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Terms_conditions_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Terms_conditions_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Terms_condition_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: large;\n  padding-bottom: 15px;\n  padding-top: 20px !important;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBRUEsbUJBQUE7QUFESiIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UZXJtc19jb25kaXRpb25zX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4uVGVybXNfY29uZGl0aW9uc19oZWFkZXIgZGl2e1xudGV4dC1hbGlnbjogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xuYm9yZGVyLXJhZGl1czogMCAwIDMwcHggMzBweDtcbn1cbi5UZXJtc19jb25kaXRpb25zX2hlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICBcbn1cblxuLlRlcm1zX2NvbmRpdGlvbl9jb250ZW50e1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5UZXJtX2NvbmRpdGlvbl9sYWJlbHtcbiAgICBtYXJnaW46IDAgMjBweCAgO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHggIWltcG9ydGFudDtcblxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG5cbn0iXX0= */");

/***/ }),

/***/ 66730:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/terms-conditions/terms-conditions.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Terms_conditions_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" >{{'Terms and Conditions'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Terms_condition_content\">\n\n <h2> {{'Terms and Conditions'|translate}} </h2>\n    \n  <div class=\"Term_condition_label\" >\n    <ion-label> {{applang == 'ar' ? termsandcondition_ar : termsandcondition_en }}  </ion-label>\n   <br><br>\n   \n  </div>\n    \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_terms-conditions_terms-conditions_module_ts.js.map