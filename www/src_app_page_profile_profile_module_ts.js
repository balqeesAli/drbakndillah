(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_profile_profile_module_ts"],{

/***/ 65520:
/*!********************************************************!*\
  !*** ./src/app/page/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 57407);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 3449:
/*!************************************************!*\
  !*** ./src/app/page/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 65520);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 57407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 57407:
/*!**********************************************!*\
  !*** ./src/app/page/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 15085);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 87332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);










let ProfilePage = class ProfilePage {
    constructor(translate, navCtrl, alertController, http, toastCtrl, route, router) {
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.HasLogin = 0;
        this.viewMandoobCard = 0;
        this.viewAddnewItem = 0;
        this.unreadnotification = 0;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.Selected_language_direction();
        this.StorageMethod();
        setInterval(data => {
            this.getNumbersOfPackages();
            this.StorageMethod();
            console.log("hi");
        }, 2000);
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
            const Id = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(Id.value));
        });
    }
    getNumbersOfPackages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
                console.log('response' + JSON.stringify(response));
                mandoobCard = retrivedResponse.non_service_requester_package_number;
                newitem = retrivedResponse.service_requester_package_number;
                console.log(mandoobCard + "__" + newitem);
                //  console.log('viewMandoobCard'+this.viewMandoobCard);
                if (mandoobCard != '0') {
                    this.viewMandoobCard = 1;
                    console.log("viewMandoobCard");
                }
                ;
                if (newitem != '0') {
                    this.viewAddnewItem = 1;
                    console.log("viewAddnewItem");
                }
                ;
            }, (error) => {
            });
            let url2 = this.Api_URL + "getUserNotificationUnread.php?id=" + JSON.parse(userId.value);
            console.log(url2);
            this.http.get(url2, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                this.unreadnotification = retrivedResponse.no;
            }, (error) => {
            });
        });
    }
    DeleteAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let updatedsuccessfully = 'updatedsuccessfully';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('DoneSuccessfully').subscribe(value => { updatedsuccessfully = value; });
            let mandoobCard;
            let newitem;
            // const userId = await Storage.get({ key: 'Id' });
            // console.log("userId_____"+ JSON.parse(userId.value));
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log("userId_____" + JSON.parse(userId.value));
            let url = this.Api_URL + "updateuserIsDeleted.php?id=" + JSON.parse(userId.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log("retrivedResponse.response" + JSON.stringify(retrivedResponse[0].response));
                if (retrivedResponse[0].response == 'error') {
                    console.log("retrivedResponse.response" + retrivedResponse.response);
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (retrivedResponse[0].response == 'success') {
                    console.log("retrivedResponse.response" + retrivedResponse.response);
                    this.presentToast(updatedsuccessfully);
                    _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.clear();
                    this.navCtrl.navigateForward('welcome');
                    return;
                }
            }, (error) => {
            });
        });
    }
    StorageMethod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            this.HasLogin = JSON.parse(HasLogin.value);
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
    changeLanguage(selectedLan) {
        this.translate.use(selectedLan);
        if (selectedLan == 'ar') {
            document.documentElement.dir = "rtl";
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'direction',
                value: JSON.stringify("rtl"),
            });
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'language',
                value: JSON.stringify("ar"),
            });
        }
        else {
            document.documentElement.dir = "ltr";
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'direction',
                value: JSON.stringify("ltr"),
            });
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                key: 'language',
                value: JSON.stringify("en"),
            });
        }
        this.navCtrl.navigateForward('/tabs/map');
    }
    ChangeLanguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let message;
            let cancel;
            this.translate.get('Change Language').subscribe(value => { header = value; });
            this.translate.get('Select language !').subscribe(value => { message = value; });
            this.translate.get('cancel').subscribe(value => { cancel = value; });
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: 'العربية',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.changeLanguage('ar');
                        }
                    }, {
                        text: 'English',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.changeLanguage('en');
                        }
                    }, {
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let message;
            let cancel;
            this.translate.get('Logout').subscribe(value => { header = value; });
            this.translate.get('Are you sure you want to logout !').subscribe(value => { message = value; });
            this.translate.get('cancel').subscribe(value => { cancel = value; });
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: header,
                        handler: () => {
                            console.log('Confirm Okay');
                            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                                key: 'HasLogin',
                                value: '0',
                            });
                            _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.clear();
                            this.navCtrl.navigateForward('welcome');
                        }
                    }, {
                        text: cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 87332:
/*!************************************************!*\
  !*** ./src/app/page/profile/profile.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".signInDiv {\n  position: relative;\n  height: 95%;\n  width: 90%;\n}\n\n.SecondsignInDiv {\n  padding-top: 50%;\n  height: 20%;\n}\n\n.profile_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.profile_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: #353535;\n}\n\n.profile_content ion-item-divider {\n  font-size: medium;\n  color: #353535;\n  background-color: #ffffff;\n  border-bottom: 1px solid #3535350f;\n  padding: 5px !important;\n}\n\n.profile_content div {\n  margin: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBREo7O0FBV0E7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFUSjs7QUFhQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFjQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQVhKOztBQWNBO0VBQ0ksWUFBQTtBQVhKOztBQWFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbkluRGl2IHtcblxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDogOTUlO1xuICAgIHdpZHRoOiA5MCU7XG5cbn1cblxuLlNlY29uZHNpZ25JbkRpdntcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIC8vIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIC8vIG1hcmdpbjogYXV0bztcbiAgICAvLyB0b3A6IDA7XG4gICAgLy8gYm90dG9tOiAwO1xuICAgIC8vIHJpZ2h0OiAwO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgXG59XG5cbi5wcm9maWxlX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4gXG5cbi5wcm9maWxlX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojMzUzNTM1O1xuXG59XG4ucHJvZmlsZV9jb250ZW50IGlvbi1pdGVtLWRpdmlkZXJ7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6IzM1MzUzNTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzUzNTM1MGY7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgXG59XG4ucHJvZmlsZV9jb250ZW50IGRpdntcbiAgICBtYXJnaW46IDEwcHggO1xufVxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ 15085:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/profile/profile.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-title  color=\"secondary\" > {{'My Profile'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile_content\">\n   \n   \n  <ion-list>\n    <ion-item-divider *ngIf=\"viewAddnewItem == 1 && HasLogin != 0\" [routerLink]=\"['/add-item']\"  >\n      <ion-label>{{'Add New Item'|translate}}</ion-label>\n      <!-- <ion-icon name=\"chevron-back\"></ion-icon>en\n      <ion-icon name=\"chevron-forward\"></ion-icon> ar -->\n \n    </ion-item-divider>\n    \n    <ion-item-divider  *ngIf=\"HasLogin != 0\"   [routerLink]=\"['/post-add']\" >\n      <ion-label>{{'Post your add with us'|translate}}</ion-label> \n    </ion-item-divider>\n\n    <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/all-packages']\">\n      <ion-label>{{'All Packages'|translate}} </ion-label>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/my-packages']\">\n      <ion-label>{{'My Packages'|translate}}</ion-label>\n    </ion-item-divider>\n\n    <!-- <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/my-details']\">\n      <ion-label>{{'My Detail'|translate}}</ion-label>\n    </ion-item-divider> -->\n    \n    <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/order-history']\">\n      <ion-label>{{'Orders History'|translate}}</ion-label>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/notification']\">\n      <ion-badge *ngIf=\"unreadnotification != 0\" style=\"margin: 0 10px;\" slot=\"end\">{{unreadnotification}}</ion-badge>\n      <ion-label>{{'Notification'|translate}}</ion-label>\n    </ion-item-divider>\n\n \n    <ion-item-divider  *ngIf=\"viewMandoobCard == 1 && HasLogin != 0\" [routerLink]=\"['/mandoob-card']\">\n      <ion-label>{{'Mandoob Card'|translate}}</ion-label>\n    </ion-item-divider>\n\n    <ion-item-divider (click)=\"ChangeLanguage()\">\n      <ion-label>{{'Language'|translate}}</ion-label>\n    </ion-item-divider>\n\n    \n    <ion-item-divider [routerLink]=\"['/terms-conditions']\">\n      <ion-label>{{'Terms & Conditions'|translate}} </ion-label>\n    </ion-item-divider>\n\n    <!-- <ion-item-divider [routerLink]=\"['/contact-us']\">\n      <ion-label>{{'Contact Us'|translate}}</ion-label>\n    </ion-item-divider> -->\n\n\n    <ion-item-divider *ngIf=\"HasLogin != 0\" [routerLink]=\"['/reset-password']\">\n      <ion-label>{{'Reset Password'|translate}}</ion-label>\n    </ion-item-divider>\n\n    <ion-item-divider (click)=\"DeleteAccount()\">\n      <ion-label>{{'DeleteAccount'|translate}}</ion-label>\n    </ion-item-divider>\n\n\n    <ion-item-divider *ngIf=\"HasLogin != 0\" (click)=\"Logout()\">\n      <ion-label>{{'Logout'|translate}}</ion-label>\n    </ion-item-divider>\n\n    <ion-item-divider *ngIf=\"HasLogin == 0\"  [routerLink]=\"['/sign-in']\" >\n      <ion-label>{{'Sign In'|translate}}</ion-label>\n    </ion-item-divider>\n\n  </ion-list> \n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_profile_profile_module_ts.js.map