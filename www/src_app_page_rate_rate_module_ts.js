(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_rate_rate_module_ts"],{

/***/ 89813:
/*!**************************************************!*\
  !*** ./src/app/page/rate/rate-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePageRoutingModule": () => (/* binding */ RatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate.page */ 73144);




const routes = [
    {
        path: '',
        component: _rate_page__WEBPACK_IMPORTED_MODULE_0__.RatePage
    }
];
let RatePageRoutingModule = class RatePageRoutingModule {
};
RatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RatePageRoutingModule);



/***/ }),

/***/ 22389:
/*!******************************************!*\
  !*** ./src/app/page/rate/rate.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePageModule": () => (/* binding */ RatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-routing.module */ 89813);
/* harmony import */ var _rate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.page */ 73144);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let RatePageModule = class RatePageModule {
};
RatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _rate_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatePageRoutingModule
        ],
        declarations: [_rate_page__WEBPACK_IMPORTED_MODULE_1__.RatePage]
    })
], RatePageModule);



/***/ }),

/***/ 73144:
/*!****************************************!*\
  !*** ./src/app/page/rate/rate.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatePage": () => (/* binding */ RatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rate.page.html */ 2600);
/* harmony import */ var _rate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate.page.scss */ 40510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let RatePage = class RatePage {
    constructor(route, translate, router, http, loadingCtrl, toastCtrl, navCtrl) {
        this.route = route;
        this.translate = translate;
        this.router = router;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.rate_value = "5";
        this.today = Date.now();
        this.orderData = '';
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.Selected_language_direction();
        if (router.getCurrentNavigation().extras.state) {
            this.orderData = this.router.getCurrentNavigation().extras.state;
            console.log(this.orderData);
        }
    }
    ngOnInit() {
    }
    SendRating() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let YouhaveRateMandoob = 'YouhaveRateMandoob';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('YouhaveRateMandoob').subscribe(value => { YouhaveRateMandoob = value; });
            //  insert data in DB 
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            let url = this.Api_URL + "insertIntoRate.php?rate=" + this.rate_value + "&uid=" + JSON.parse(this.orderData.mid) + "&oid=" + JSON.parse(this.orderData.orderid);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                loading.dismiss();
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id);
                //console.log(response[0].response);
                if (response[0].response == 'error') {
                    loading.dismiss();
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (response[0].response == 'success') {
                    loading.dismiss();
                    console.log(retrivedResponse.uid);
                    this.changeState();
                    this.presentToast(YouhaveRateMandoob);
                    return;
                }
            }, (error) => {
                loading.dismiss();
                this.presentToast(wrong_inserttopackage_details);
            });
        });
    }
    changeState() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // https://drbakndillah.com/Api/updateOrdermState.php.php?id=1&status=test&status_ar=معتمد
            // approved 
            // Completed
            // rejected
            // deleted 
            let somethingwronghappend;
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let DoneSuccessfully;
            this.translate.get('DoneSuccessfully').subscribe(value => { DoneSuccessfully = value; });
            let url = this.Api_URL + 'updateOrdermState.php?id=' + JSON.parse(this.orderData.orderid) + '&status=history&status_ar=ارشيف';
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                if (response[0].response == 'success') {
                }
                else {
                    this.presentToast(somethingwronghappend);
                }
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
        });
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            // this.presentAlertConfirm(); 
        });
    }
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
RatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
RatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-rate',
        template: _raw_loader_rate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rate_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RatePage);



/***/ }),

/***/ 40510:
/*!******************************************!*\
  !*** ./src/app/page/rate/rate.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signup_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signup_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signup_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signup_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Signup_content ion-row {\n  text-align: center;\n  padding: 10px;\n  padding-top: 50px;\n}\n\n.Signup_content ion-row ion-icon {\n  padding-top: 10px;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJyYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5TaWdudXBfaGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cbi5TaWdudXBfaGVhZGVyIGRpdntcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbmJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG59XG4uU2lnbnVwX2hlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICBcbn1cblxuLlNpZ251cF9jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbn1cbi5TaWdudXBfY29udGVudCBpb24tcm93e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLlNpZ251cF9jb250ZW50IGlvbi1yb3cgaW9uLWljb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5UZXJtX2NvbmRpdGlvbl9sYWJlbHtcbiAgICBtYXJnaW46IDAgMjBweCAgO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 2600:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/rate/rate.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signup_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"/tabs/orders\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Rate'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signup_content\">\n\n  <ion-list>\n    <ion-row> \n\n      <ion-col size=\"12\">\n        <p>{{'How was the service provided by' |translate}} {{orderData.mnickname}} ?<br><br>{{rate_value}}</p>\n      </ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon color=\"primary\" size=\"large\" name=\"star-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-range min=\"0\" max=\"10\" [(ngModel)]=\"rate_value\" color=\"secondary\">\n            <ion-label slot=\"start\">0</ion-label>\n            <ion-label slot=\"end\">10</ion-label>\n          </ion-range>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-icon color=\"primary\" size=\"large\" name=\"star\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      \n    \n    </ion-list>\n    \n    \n  <div class=\"Term_condition_label\" >\n   <ion-button (click)=\"SendRating()\"  size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Send Rating'|translate}} \n    </ion-button>\n \n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_rate_rate_module_ts.js.map