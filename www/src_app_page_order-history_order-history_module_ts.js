(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_order-history_order-history_module_ts"],{

/***/ 39917:
/*!********************************************************************!*\
  !*** ./src/app/page/order-history/order-history-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageRoutingModule": () => (/* binding */ OrderHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history.page */ 12838);




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPage
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ 86240:
/*!************************************************************!*\
  !*** ./src/app/page/order-history/order-history.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPageModule": () => (/* binding */ OrderHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-history-routing.module */ 39917);
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page */ 12838);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderHistoryPageRoutingModule
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_1__.OrderHistoryPage]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ 12838:
/*!**********************************************************!*\
  !*** ./src/app/page/order-history/order-history.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderHistoryPage": () => (/* binding */ OrderHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-history.page.html */ 37860);
/* harmony import */ var _order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-history.page.scss */ 83870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);








let OrderHistoryPage = class OrderHistoryPage {
    constructor(navCtrl, popCtrl, http, toastCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.popCtrl = popCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.OrderHistoryArr = [];
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
            this.getOrderhistory();
            // this.presentAlertConfirm(); 
        });
    }
    getOrderhistory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            // console.log(JSON.parse(userId.value));
            let User_id = JSON.parse(userId.value);
            let url = this.Api_URL + "/vieworderhistory.php?id=" + User_id;
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
                    this.OrderHistoryArr = retrivedResponse;
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
OrderHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
OrderHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-order-history',
        template: _raw_loader_order_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderHistoryPage);



/***/ }),

/***/ 83870:
/*!************************************************************!*\
  !*** ./src/app/page/order-history/order-history.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".all-Packages_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.all-Packages_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.all-Packages_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.all-Packages_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.all-Packages_footer ion-button {\n  margin: 20px;\n}\n\n.My_package_card ion-label {\n  display: block;\n  margin: 0 20px;\n  font-size: medium;\n  color: #353535;\n}\n\n.My_package_card img {\n  border: 1px solid #353535;\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\n.noitem {\n  margin-top: 20%;\n  text-align: center;\n  font-weight: bolder;\n  color: gray;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBSUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFVQTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFZQTtFQUVJLGVBQUE7QUFWSjs7QUFjQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBWEo7O0FBY0E7RUFDSSxZQUFBO0FBWEo7O0FBZUM7RUFDRyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVpKOztBQWdCQztFQUNHLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWJKOztBQW9CQTtFQUNJLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBbEJKIiwiZmlsZSI6Im9yZGVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbC1QYWNrYWdlc19oZWFkZXJ7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xufVxuIFxuXG4uYWxsLVBhY2thZ2VzX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxufVxuXG5cbi5hbGwtUGFja2FnZXNfY29udGVudCB7XG4gXG59XG4uYWxsLVBhY2thZ2VzX2NvbnRlbnQgaW9uLWNhcmR7XG4gXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBcbn1cblxuLmFsbC1QYWNrYWdlc19jb250ZW50IGlvbi1jYXJkIGlvbi1jb2x7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4uYWxsLVBhY2thZ2VzX2Zvb3RlciBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgXG59XG5cbiAuTXlfcGFja2FnZV9jYXJkIGlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogIzM1MzUzNTtcblxuIH1cblxuIC5NeV9wYWNrYWdlX2NhcmQgaW1ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNTM1MzU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiB9XG5cbiAuTXlfcGFja2FnZV9jYXJke1xuXG4gICAgXG59XG4ubm9pdGVte1xuICAgIG1hcmdpbi10b3A6IDIwJTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuXG59Il19 */");

/***/ }),

/***/ 37860:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/order-history/order-history.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"all-Packages_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Orders History'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"all-Packages_content\">\n    <div>\n\n    <ion-card class=\"My_package_card\" *ngFor=\"let i of OrderHistoryArr\"> \n        \n      <ion-card-content>\n\n        <ion-row>\n          <ion-col size=\"3\">\n            <div align=\"right\">\n              <img [src]=\"i.iimage\" alt=\"\">\n             </div>\n          </ion-col>\n          <ion-col size=\"9\">\n\n        <ion-label>{{'Mandoob Nickname'|translate}}:  {{i.mnickname}}</ion-label>\n        <ion-label>{{'Item Name'|translate}}:  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }}</ion-label>\n        <ion-label>{{'Order Date'|translate}} : {{i.odatetime}}</ion-label>\n        <ion-label>{{'Status'|translate}} : {{applang == 'ar' ? i.ostatus_ar : i.ostatus_en }}</ion-label>\n\n          </ion-col>\n        </ion-row>  \n\n      </ion-card-content>\n    </ion-card>\n  \n     \n      <ion-row class=\"noitem\" *ngIf=\"OrderHistoryArr.length == 0\" >\n        <ion-col size=\"12\">\n\n          <ion-label>{{'There is no order yet'|translate}}</ion-label>\n        </ion-col>\n      </ion-row>\n      \n\n\n    </div>\n  \n</ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_order-history_order-history_module_ts.js.map