(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/welcome/welcome.module */ 96478)).then(m => m.WelcomePageModule)
    },
    {
        path: 'sign-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_place-api_place-api_page_ts"), __webpack_require__.e("src_app_page_sign-up_sign-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/sign-up/sign-up.module */ 77830)).then(m => m.SignUpPageModule)
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_sign-in_sign-in_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/sign-in/sign-in.module */ 49854)).then(m => m.SignInPageModule)
    },
    {
        path: 'welcome-language',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_welcome-language_welcome-language_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/welcome-language/welcome-language.module */ 39532)).then(m => m.WelcomeLanguagePageModule)
    },
    {
        path: 'terms-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/terms-conditions/terms-conditions.module */ 7551)).then(m => m.TermsConditionsPageModule)
    },
    {
        path: 'all-packages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_all-packages_all-packages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/all-packages/all-packages.module */ 9624)).then(m => m.AllPackagesPageModule)
    },
    {
        path: 'package',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_page_package_package_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/package/package.module */ 59455)).then(m => m.PackagePageModule)
    },
    {
        path: 'view-adds',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_view-adds_view-adds_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/view-adds/view-adds.module */ 59606)).then(m => m.ViewAddsPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_payment_payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/payment/payment.module */ 74627)).then(m => m.PaymentPageModule)
    },
    {
        path: 'payment-sucess',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_payment-sucess_payment-sucess_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/payment-sucess/payment-sucess.module */ 31982)).then(m => m.PaymentSucessPageModule)
    },
    {
        path: 'payment-failed',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_payment-failed_payment-failed_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/payment-failed/payment-failed.module */ 56812)).then(m => m.PaymentFailedPageModule)
    },
    {
        path: 'add-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("default-src_app_place-api_place-api_page_ts"), __webpack_require__.e("src_app_page_add-item_add-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/add-item/add-item.module */ 88918)).then(m => m.AddItemPageModule)
    },
    {
        path: 'edit-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("default-src_app_place-api_place-api_page_ts"), __webpack_require__.e("src_app_page_edit-item_edit-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/edit-item/edit-item.module */ 10795)).then(m => m.EditItemPageModule)
    },
    {
        path: 'single-chat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("src_app_page_single-chat_single-chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/single-chat/single-chat.module */ 89029)).then(m => m.SingleChatPageModule)
    },
    {
        path: 'rate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_rate_rate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/rate/rate.module */ 22389)).then(m => m.RatePageModule)
    },
    {
        path: 'my-packages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_my-packages_my-packages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/my-packages/my-packages.module */ 23989)).then(m => m.MyPackagesPageModule)
    },
    {
        path: 'my-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_my-details_my-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/my-details/my-details.module */ 12923)).then(m => m.MyDetailsPageModule)
    },
    {
        path: 'order-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_order-history_order-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/order-history/order-history.module */ 86240)).then(m => m.OrderHistoryPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/notification/notification.module */ 70240)).then(m => m.NotificationPageModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/contact-us/contact-us.module */ 51951)).then(m => m.ContactUsPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/reset-password/reset-password.module */ 47814)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'post-add',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("src_app_page_post-add_post-add_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/post-add/post-add.module */ 44025)).then(m => m.PostAddPageModule)
    },
    {
        path: 'filter-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_filter-item_filter-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/filter-item/filter-item.module */ 56289)).then(m => m.FilterItemPageModule)
    },
    {
        path: 'mandoob-card',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_mandoob-card_mandoob-card_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/mandoob-card/mandoob-card.module */ 14757)).then(m => m.MandoobCardPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/tabs/tabs.module */ 35841)).then(m => m.TabsPageModule)
    }, {
        path: 'user-location',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_user-location_user-location_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/user-location/user-location.module */ 59022)).then(m => m.UserLocationPageModule)
    },
    {
        path: 'place-api',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_place-api_place-api_page_ts"), __webpack_require__.e("src_app_place-api_place-api_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./place-api/place-api.module */ 71449)).then(m => m.PlaceApiPageModule)
    },
    {
        path: 'my-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modals_my-modal_my-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/my-modal/my-modal.module */ 77878)).then(m => m.MyModalPageModule)
    },
    {
        path: 'filter',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("src_app_page_filter_filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/filter/filter.module */ 13243)).then(m => m.FilterPageModule)
    },
    {
        path: 'single-chat-admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_photo_service_ts"), __webpack_require__.e("src_app_page_single-chat-admin_single-chat-admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/single-chat-admin/single-chat-admin.module */ 25393)).then(m => m.SingleChatAdminPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_is_cordova_avaliable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/is-cordova-avaliable */ 26469);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);










let AppComponent = class AppComponent {
    constructor(platform, router, navCtrl, http) {
        // PushNotifications.register().then((response) => {
        //   console.log("register response" + response);
        // }).catch((error) => {
        //   console.log("register error" + error);
        // });
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.token = '0';
        //   if (isCordovaAvailable()) {
        //     this.oneSignal.startInit('b88d86e0-551b-4410-84bc-9258fffa300a', '879911352936');
        //     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        //     this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        //     this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        //     this.oneSignal.endInit();
        //     console.log("____Cordova____Available____");
        //     // this.oneSignal.getIds().then(identity => {
        //     //   console.log(identity.pushToken + ' its PUSHTOKEN');
        //     //   console.log(identity.userId + 'its USERID');
        //     // console.log("____Cordova__try to get id__Available____");
        //     //   // alert(identity.pushToken + ' it's PUSHTOKEN'); 
        //     //   // alert(identity.userId + 'it's USERID);
        //     // });
        //     // console.log("____Cordova__Out get id__Available____");
        // //     window["plugins"].OneSignal.getIds(function(ids) {
        // //       console.log("Player ID __ "+ids.userId);
        // //       localStorage.setItem("fcmtoken", ids.userId);
        // //       console.log("fcmtoken"+ids.userId);
        // //       // this.addPlayidInDB(ids.userId);
        // //           // Player ID will be available at the object ids.userId
        // //       });
        //   }
    }
    // private onPushReceived(payload: OSNotificationPayload) {
    //   alert('Push recevied:' + payload.body);
    // }
    // private onPushOpened(payload: OSNotificationPayload) {
    //   alert('Push opened: ' + payload.body);
    // }
    ngOnInit() {
        console.log('Initializing HomePage');
        this.GetUserDataandStoreinLoacalStorage();
        this.packagesDeadline();
        this.GetUserDataandStoreinLoacalStorage();
        this.GetUpdateUserToken();
        if ((0,_app_is_cordova_avaliable__WEBPACK_IMPORTED_MODULE_2__.isCordovaAvailable)()) {
            // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then(result => {
                if (result.receive === 'granted') {
                    // Register with Apple / Google to receive push via APNS/FCM
                    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register().then(success => {
                    }).catch(error => {
                        _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                            key: 'token',
                            value: JSON.stringify("Invalid Registration"),
                        });
                    });
                    this.GetUpdateUserToken();
                }
                else {
                    // Show some error
                    _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                        key: 'token',
                        value: JSON.stringify("error msg registed"),
                    });
                }
            });
            // On success, we should be able to receive notifications
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registration', (token) => {
                console.log('token_____' + token);
                // alert('Push registration success, token: ' + token.value);
                console.log('Push registration success, token: ' + token.value);
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'token',
                    value: JSON.stringify(token.value),
                });
            });
            this.GetUpdateUserToken();
            // Some issue with our setup and push will not work
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registrationError', (error) => {
                // alert('Error on registration: ' + JSON.stringify(error));
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'token',
                    value: JSON.stringify(error),
                });
            });
            // Show us the notification payload if the app is open on our device
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('pushNotificationReceived', (notification) => {
                // alert('Push received: ' + JSON.stringify(notification));
            });
            // Method called when tapping on a notification
            _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                // alert('Push action performed: ' + JSON.stringify(notification));
                this.navCtrl.navigateForward('/tabs/chat');
            });
        }
    }
    packagesDeadline() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let url = this.Api_URL + 'viewandeditdeadline.php';
            console.log(url);
            this.http.get(url, {}).subscribe((response) => { }, (error) => { });
        });
    }
    GetUpdateUserToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            const ID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(ID.value));
            if (this.token == '0' || JSON.parse(ID.value) == '') {
                return;
            }
            let url = this.Api_URL + 'updateusertoken.php?id=' + JSON.parse(ID.value) + '&token=' + this.token;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
            }, (error) => { });
        });
    }
    GetUserDataandStoreinLoacalStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            if (JSON.parse(HasLogin.value) != 1) {
                return;
            }
            let userData;
            const Email = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Email' });
            console.log(JSON.parse(Email.value));
            let url = this.Api_URL + 'getUserDetailsByEmail.php?Email=' + JSON.parse(Email.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                userData = response;
                console.log(userData.Id);
                //StoreUser data in local device storage 
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Blocked',
                    value: JSON.stringify(userData.Blocked),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'City_id',
                    value: JSON.stringify(userData.City_id),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Country_code',
                    value: JSON.stringify(userData.Country_code),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Country_id',
                    value: JSON.stringify(userData.Country_id),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Email',
                    value: JSON.stringify(userData.Email),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Family_name_ar',
                    value: JSON.stringify(userData.Family_name_ar),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Family_name_en',
                    value: JSON.stringify(userData.Family_name_en),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Governate_id',
                    value: JSON.stringify(userData.Governate_id),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Id',
                    value: JSON.stringify(userData.Id),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Lat',
                    value: JSON.stringify(userData.Lat),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Name_ar',
                    value: JSON.stringify(userData.Name_ar),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Name_en',
                    value: JSON.stringify(userData.Name_en),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'Phone_no',
                    value: JSON.stringify(userData.Phone_no),
                });
                _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                    key: 'log',
                    value: JSON.stringify(userData.log),
                });
            }, (error) => {
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);










// import { Storage } from '@capacitor/storage';
// import { Geolocation } from '@capacitor/geolocation'; 


function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })],
        providers: [_ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_2__.NativeGeocoder,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__.HTTP,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 26469:
/*!*****************************************!*\
  !*** ./src/app/is-cordova-avaliable.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCordovaAvailable": () => (/* binding */ isCordovaAvailable)
/* harmony export */ });
let isCordovaAvailable = () => {
    if (!window.cordova) {
        console.log("This is a native feature. Please use a device");
        // alert('This is a native feature. Please use a device');  
        return false;
    }
    return true;
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		79437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		18025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		64262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		58206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		24297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map