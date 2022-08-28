(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_reset-password_reset-password_module_ts"],{

/***/ 66246:
/*!**********************************************************************!*\
  !*** ./src/app/page/reset-password/reset-password-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 29377);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 47814:
/*!**************************************************************!*\
  !*** ./src/app/page/reset-password/reset-password.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 66246);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 29377);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 29377:
/*!************************************************************!*\
  !*** ./src/app/page/reset-password/reset-password.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset-password.page.html */ 68141);
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss */ 44599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);









let ResetPasswordPage = class ResetPasswordPage {
    constructor(alertController, translate, navCtrl, http, loadingCtrl, loadingController, actionSheetController, toastController) {
        this.alertController = alertController;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.usersData = {
            "password": "",
            "newpassword": "",
            "confirmpassword": "",
            "UserId": ""
        };
        this.Selected_language_direction();
    }
    ngOnInit() {
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.applang = JSON.parse(language.value);
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
        });
    }
    ResetPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let Fill_ALl_requird_details_package = 'Fill ALl requird details';
            let password_updated_successfully = 'password_updated_successfully';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            let new_password_not_equal = 'new_password_not_equal';
            let wrong_pas_msg = 'wrong_pas_msg';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; });
            this.translate.get('password_updated_successfully').subscribe(value => { password_updated_successfully = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            this.translate.get('new_password_not_equal').subscribe(value => { new_password_not_equal = value; });
            this.translate.get('wrong_pas_msg').subscribe(value => { wrong_pas_msg = value; });
            //  insert data in DB 
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            this.usersData.UserId = JSON.parse(userId.value);
            if (this.usersData.password.trim() == '' || this.usersData.newpassword.trim() == '' || this.usersData.confirmpassword.trim() == '') {
                this.presentToast(Fill_ALl_requird_details_package);
                return;
            }
            if (this.usersData.newpassword.trim() != this.usersData.confirmpassword.trim()) {
                this.presentToast(new_password_not_equal);
                return;
            }
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&item_image=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            // let url ='insertInToItem.php?Image=2342431.jpeg&Max_price_delivery=32&Type=passsenger&Country_id=1&Governate_id=1&City_id=3&Title_ar=كتب&Title_en=book&Other_note=Notes&Maximin_time=01:12&Maximin_date=12-12-1991&Log=21.2112&Lat=12.321321&Item_status=new&User_id=35';
            //  let url = this.Api_URL + 'insertInToItem.php?Image=' + this.usersData.item_image + '&Max_price_delivery=' + this.usersData.price  + '&Type=' + this.item.type + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Title_ar='+this.usersData.itemname_ar.trim() +'&Title_en=' + this.usersData.itemname_en.trim()  + '&Other_note=' + this.usersData.note.trim()  + '&Maximin_time=' + this.usersData.time.substring(11, 16)  + '&Maximin_date=' + this.usersData.date.substring(0, 10) + '&Log=' + this.usersData.log + '&Lat=' + this.usersData.Lat + '&Item_status=new&User_id=' + this.usersData.User_id;
            //  this.Api_URL + "insertIntoPackage.php?Package_name_ar=" + this.usersData.Package_name_ar + "&Package_name_en=" + this.UserPackageDetails.Package_name_en + "&Package_price=" + this.UserPackageDetails.Package_price + "&Package_period_ar=" + this.UserPackageDetails.Package_period_ar + "&Package_period_en=" + this.UserPackageDetails.Package_period_en + "&Start_date=" + this.UserPackageDetails.Start_date + "&Shop_company_name=" + this.UserPackageDetails.Shop_company_name + "&Nick_name=" + this.UserPackageDetails.Nick_name + "&item_image=" + this.UserPackageDetails.item_image + "&Status_Package_ar=" + this.UserPackageDetails.Status_Package_ar + "&Status_Package_en=" + this.UserPackageDetails.Status_Package_en + "&User_id=" + this.UserPackageDetails.User_id;
            let url = "https://drbakndillah.com/Api/updateuserpassword.php?id=" + this.usersData.UserId + "&Password=" + this.usersData.password.trim() + "&newPassword=" + this.usersData.newpassword.trim();
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(retrivedResponse));
                // console.log('response'+response.id); k
                // console.log(response[0].response);
                loading.dismiss();
                if (retrivedResponse[0].response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (retrivedResponse[0].response == 'success') {
                    this.presentToast(password_updated_successfully);
                    // this.navCtrl.navigateForward('/tabs/profile');
                    return;
                }
                else if (retrivedResponse[0].response == 'wrongpassword') {
                    this.presentToast(wrong_pas_msg);
                    console.log("wrong_pas_msg__" + wrong_pas_msg);
                    // this.navCtrl.navigateForward('/tabs/profile');
                    return;
                }
            }, (error) => {
                loading.dismiss();
            });
        });
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset-password',
        template: _raw_loader_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPasswordPage);



/***/ }),

/***/ 44599:
/*!**************************************************************!*\
  !*** ./src/app/page/reset-password/reset-password.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signup_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signup_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signup_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signup_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUVBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0E7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBRUksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQURKIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5TaWdudXBfaGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cbi5TaWdudXBfaGVhZGVyIGRpdntcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbmJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG59XG4uU2lnbnVwX2hlYWRlciBpbWd7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICBcbn1cblxuLlNpZ251cF9jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLlRlcm1fY29uZGl0aW9uX2xhYmVse1xuICAgIG1hcmdpbjogMCAyMHB4ICA7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ 68141:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/reset-password/reset-password.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signup_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Reset Password'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signup_content\">\n\n  <ion-list>\n   \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\" [(ngModel)]=\"usersData.password\"  [placeholder]=\"'Your previous password'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\" [(ngModel)]=\"usersData.newpassword\"  [placeholder]=\"'New password'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\" [(ngModel)]=\"usersData.confirmpassword\"  [placeholder]=\"'confirm password'|translate\"></ion-input>\n    </ion-item> \n \n    </ion-list>\n    \n    \n  <div class=\"Term_condition_label\" >\n    <br><br>\n    <ion-button (click)=\"ResetPassword()\"  size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Reset Password'|translate}} \n    </ion-button>\n\n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_reset-password_reset-password_module_ts.js.map