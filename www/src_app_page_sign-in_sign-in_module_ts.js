(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_sign-in_sign-in_module_ts"],{

/***/ 29620:
/*!********************************************************!*\
  !*** ./src/app/page/sign-in/sign-in-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 95321);




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 49854:
/*!************************************************!*\
  !*** ./src/app/page/sign-in/sign-in.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 29620);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 95321);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage]
    })
], SignInPageModule);



/***/ }),

/***/ 95321:
/*!**********************************************!*\
  !*** ./src/app/page/sign-in/sign-in.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-in.page.html */ 23505);
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss */ 17735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);









let SignInPage = class SignInPage {
    constructor(navCtrl, toastController, alertController, translate, http, loadingController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.alertController = alertController;
        this.translate = translate;
        this.http = http;
        this.loadingController = loadingController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.loginDetails = {
            "email": "",
            "password": ""
        };
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
        });
    }
    forgotpassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let subHeader;
            let message;
            let Restpassword;
            let Cancel;
            this.translate.get('forgot password').subscribe(value => { header = value; });
            this.translate.get('forgot password_subheader').subscribe(value => { subHeader = value; });
            this.translate.get('forgot password_msg').subscribe(value => { message = value; });
            this.translate.get('reset password').subscribe(value => { Restpassword = value; });
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            this.alertController.create({
                header: header,
                subHeader: subHeader,
                message: message,
                inputs: [
                    {
                        name: 'mail',
                        placeholder: 'example@gmail.com',
                    },
                ],
                buttons: [
                    {
                        text: Restpassword,
                        handler: (data) => {
                            console.log('Saved Information', data.mail);
                            this.sendForgetMail(data.mail);
                        }
                    },
                    {
                        text: Cancel,
                        handler: (data) => {
                            console.log('Canceled', data);
                        }
                    }
                ]
            }).then(res => {
                res.present();
            });
        });
    }
    sendForgetMail(mail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let mailSent;
            let mailwrong;
            this.translate.get('mailSent').subscribe(value => { mailSent = value; });
            this.translate.get('mailwrong').subscribe(value => { mailwrong = value; });
            if (mail == "") {
                return;
            }
            // const loading = await this.loadingController.create({
            //   spinner: 'bubbles'
            // });
            // await loading.present();
            let url = this.Api_URL + 'forgetPasswordMail.php?Email=' + mail.trim();
            console.log("response" + url);
            this.http.get(url, {}).subscribe((response) => {
                console.log("response" + response);
                console.log(response[0].response);
                // loading.dismiss();
                if (response[0].response == 'error') {
                    // loading.dismiss();
                    this.presentToast(mailwrong);
                    return;
                }
                else if (response[0].response == 'success') {
                    // loading.dismiss();
                    this.presentToast(mailSent);
                    return;
                }
            }, (error) => {
                this.presentToast(mailwrong);
            });
        });
    }
    SignInClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let login_details_empty_err;
            let wrong_login_details;
            this.translate.get('login_details_empty_err').subscribe(value => { login_details_empty_err = value; });
            this.translate.get('wrong_login_details').subscribe(value => { wrong_login_details = value; });
            if (this.loginDetails.email == "" || this.loginDetails.password == "") {
                const toast = yield this.toastController.create({
                    message: login_details_empty_err,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else {
                //Sigin 
                const loading = yield this.loadingController.create({
                    spinner: 'bubbles'
                });
                yield loading.present();
                let url = this.Api_URL + 'UserSignIn.php?Email=' + this.loginDetails.email.trim() + '&Password=' + this.loginDetails.password.trim();
                this.http.get(url, {}).subscribe((response) => {
                    console.log(response[0].response);
                    loading.dismiss();
                    if (response[0].response == 'notfound') {
                        this.presentToast(wrong_login_details);
                        return;
                    }
                    else if (response[0].response == 'success') {
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'HasLogin',
                            value: JSON.stringify('1'),
                        });
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                            key: 'Email',
                            value: JSON.stringify(this.loginDetails.email.trim()),
                        });
                        this.navCtrl.navigateForward('/tabs/map');
                        return;
                    }
                }, (error) => {
                });
            }
            // if login successfully then store data in storage 
            //  `Id`, `Email`, `Name_ar`, `Name_en`, `Family_name_ar`, `Family_name_en`, `Phone_no`, 
            // `Country_code`, `Country_id`, `Governate_id`, `City_id`, `Lat`, `log`, `Blocked`, `Password`, `token`,
            // Storage.set({
            //   key: 'HasLogin',
            //   value: JSON.stringify('1'),
            // });
            // Storage.set({
            //   key: 'Id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Email',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Name_ar',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Name_en',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Family_name_ar',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Family_name_en',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Phone_no',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Country_code',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Country_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Governate_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'City_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Lat',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'log',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Blocked',
            //   value: JSON.stringify('0'),
            // });
            // this.navCtrl.navigateForward('/all-packages');
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignInPage);



/***/ }),

/***/ 17735:
/*!************************************************!*\
  !*** ./src/app/page/sign-in/sign-in.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signin_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signin_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signin_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signin_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.btn_div {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoic2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbmluX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4uU2lnbmluX2hlYWRlciBkaXZ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG5ib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xufVxuLlNpZ25pbl9oZWFkZXIgaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgXG59XG5cbi5TaWduaW5fY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbi5idG5fZGl2e1xuICAgIG1hcmdpbjogMCAyMHB4ICA7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ 23505:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-in/sign-in.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signin_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"welcome-language\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Sign In'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signin_content\">\n\n  <ion-list>\n     \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"mail\"></ion-icon>\n      <ion-input type=\"text\" [(ngModel)]=\"loginDetails.email\" [placeholder]=\"'Email Address'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\" [(ngModel)]=\"loginDetails.password\" [placeholder]=\"'password'|translate\"></ion-input>\n    </ion-item> \n\n    </ion-list>\n    \n  <div class=\"btn_div\" >\n    \n    <ion-button (click)=\"SignInClick()\"   size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Sign In'|translate}}\n    </ion-button>\n\n    <ion-button [routerLink]=\"['/sign-up']\" size=\"default\"  expand=\"block\" fill=\"outline\" shape=\"round\">\n      {{'Sign Up'|translate}} \n    </ion-button>\n\n    <ion-button (click)=\"forgotpassword()\" size=\"default\"  expand=\"block\" fill=\"clear\"   shape=\"round\">\n      {{'forgot password'|translate}}\n    </ion-button>\n\n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-in_sign-in_module_ts.js.map