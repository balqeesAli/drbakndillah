(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_my-packages_my-packages_module_ts"],{

/***/ 91712:
/*!****************************************************************!*\
  !*** ./src/app/page/my-packages/my-packages-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPackagesPageRoutingModule": () => (/* binding */ MyPackagesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_packages_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-packages.page */ 30894);




const routes = [
    {
        path: '',
        component: _my_packages_page__WEBPACK_IMPORTED_MODULE_0__.MyPackagesPage
    }
];
let MyPackagesPageRoutingModule = class MyPackagesPageRoutingModule {
};
MyPackagesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyPackagesPageRoutingModule);



/***/ }),

/***/ 23989:
/*!********************************************************!*\
  !*** ./src/app/page/my-packages/my-packages.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPackagesPageModule": () => (/* binding */ MyPackagesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_packages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-packages-routing.module */ 91712);
/* harmony import */ var _my_packages_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-packages.page */ 30894);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let MyPackagesPageModule = class MyPackagesPageModule {
};
MyPackagesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _my_packages_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyPackagesPageRoutingModule
        ],
        declarations: [_my_packages_page__WEBPACK_IMPORTED_MODULE_1__.MyPackagesPage]
    })
], MyPackagesPageModule);



/***/ }),

/***/ 30894:
/*!******************************************************!*\
  !*** ./src/app/page/my-packages/my-packages.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyPackagesPage": () => (/* binding */ MyPackagesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_my_packages_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-packages.page.html */ 32024);
/* harmony import */ var _my_packages_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-packages.page.scss */ 18927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);








let MyPackagesPage = class MyPackagesPage {
    constructor(navCtrl, popCtrl, http, toastCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.popCtrl = popCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.MyPackageArr = [];
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
            this.getMyPackages();
            // this.presentAlertConfirm(); 
        });
    }
    getMyPackages() {
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
            let url = this.Api_URL + "/viewuserpackage.php?id=" + User_id;
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
                    this.MyPackageArr = retrivedResponse;
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
MyPackagesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
MyPackagesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-my-packages',
        template: _raw_loader_my_packages_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_packages_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyPackagesPage);



/***/ }),

/***/ 18927:
/*!********************************************************!*\
  !*** ./src/app/page/my-packages/my-packages.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".all-Packages_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.all-Packages_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.all-Packages_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.all-Packages_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.all-Packages_footer ion-button {\n  margin: 20px;\n}\n\n.My_package_card ion-label {\n  display: block;\n  margin: 0 20px;\n  font-size: medium;\n  color: #353535;\n}\n\n.My_package_card img {\n  border: 1px solid #353535;\n  border-radius: 10px;\n  height: 20%;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXBhY2thZ2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBRUksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBVUE7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0FBUko7O0FBWUE7RUFFSSxlQUFBO0FBVko7O0FBY0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWNBO0VBQ0ksWUFBQTtBQVhKOztBQWVDO0VBQ0csY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFaSjs7QUFnQkM7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFiSiIsImZpbGUiOiJteS1wYWNrYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLVBhY2thZ2VzX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4gXG5cbi5hbGwtUGFja2FnZXNfY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cblxuLmFsbC1QYWNrYWdlc19jb250ZW50IHtcbiBcbn1cbi5hbGwtUGFja2FnZXNfY29udGVudCBpb24tY2FyZHtcbiBcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgIFxufVxuXG4uYWxsLVBhY2thZ2VzX2NvbnRlbnQgaW9uLWNhcmQgaW9uLWNvbHtcbiAgXG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbi5hbGwtUGFja2FnZXNfZm9vdGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBcbn1cblxuIC5NeV9wYWNrYWdlX2NhcmQgaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjMzUzNTM1O1xuXG4gfVxuXG4gLk15X3BhY2thZ2VfY2FyZCBpbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiA0MCU7XG4gfVxuXG4gLk15X3BhY2thZ2VfY2FyZHtcblxuICAgIFxufVxuIl19 */");

/***/ }),

/***/ 32024:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/my-packages/my-packages.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"all-Packages_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'My Packages'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"all-Packages_content\">\n    <div>\n      <ion-button  [routerLink]=\"['/all-packages']\"  size=\"large\" expand=\"block\"  shape=\"round\">\n        {{'Subscribe to new package'|translate}}\n      </ion-button>\n    \n    \n      <ion-card class=\"My_package_card\" *ngFor=\"let i of MyPackageArr\"> \n        \n        <ion-card-content>\n\n          <ion-card-title>{{applang == 'ar' ? i.Package_name_ar : i.Package_name_en }}</ion-card-title> <br>\n          <ion-label>{{'Status'|translate}} : {{applang == 'ar' ? i.Status_Package_ar : i.Status_Package_en }}</ion-label>\n          <ion-label>{{'Price'|translate}} :   {{i.Package_price}} {{'OMR'|translate}}</ion-label>\n          <ion-label>{{'Type'|translate}} : {{applang == 'ar' ? i.Package_period_ar : i.Package_period_en }}</ion-label>\n          <ion-label>{{'Start Date'|translate}} : {{i.Start_date}}</ion-label>\n          <ion-label>{{'End Date'|translate}} : {{i.End_date}}</ion-label>\n          <ion-label *ngIf=\"i.Shop_company_name != ''\" >{{'Name'|translate}}:  {{i.Shop_company_name}}</ion-label>\n          <ion-label *ngIf=\"i.Nick_name != ''\" >{{'Nick Name'|translate}} :  {{i.Nick_name}}</ion-label>\n          <ion-label *ngIf=\"i.Car_card_Id_img != 'https:\\/\\/drbakndillah.com\\/Api\\/uploads\\/'\" >{{'Car Card ID '|translate}}: </ion-label>\n         <div align=\"right\" *ngIf=\"i.Car_card_Id_img != 'https:\\/\\/drbakndillah.com\\/Api\\/uploads\\/'\" >\n          <img [src]=\"i.Car_card_Id_img\" alt=\"\">\n         </div>\n\n        </ion-card-content>\n      </ion-card>\n    \n    </div>\n    <div *ngIf=\"MyPackageArr.length == 0\"  align=\"center\" style=\"color:grey; margin-top:40%; font-size:large;\" >\n\n      <p>{{\"You don't have any package yet\"|translate}}</p>\n\n    </div> \n\n\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_my-packages_my-packages_module_ts.js.map