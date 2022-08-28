(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_orders_orders_module_ts"],{

/***/ 11687:
/*!******************************************************!*\
  !*** ./src/app/page/orders/orders-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 70756);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ 22798:
/*!**********************************************!*\
  !*** ./src/app/page/orders/orders.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 11687);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 70756);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



/***/ }),

/***/ 70756:
/*!********************************************!*\
  !*** ./src/app/page/orders/orders.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./orders.page.html */ 34390);
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss */ 62551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 28427);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/network */ 63848);












let OrdersPage = class OrdersPage {
    constructor(loadingController, alertController, nativeGeocoder, navCtrl, translate, http, toastCtrl, actionSheetController) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nativeGeocoder = nativeGeocoder;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.SelectedOrder = 'new';
        this.OrderArray = [];
        this.Api_URL = 'https://drbakndillah.com/Api/';
        // document.documentElement.dir = "rtl";
        setInterval(data => {
            this.IsLogin();
            this.Selected_language_direction();
        }, 2000);
        this.GetOrder();
    }
    ngOnInit() {
    }
    segmentChanged() {
        console.log('Segment Changed ' + this.SelectedOrder);
        this.GetOrder();
    }
    DirectionClick(lat, long) {
        let url = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long;
        console.log("location" + url);
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: url });
    }
    GetOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // https://drbakndillah.com/Api/insertintoOrder.php?itemID=45&MID=38&OID=35
            let somethingwronghappend;
            let YouAcceptOrder;
            this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; });
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            const loading = yield this.loadingController.create({
                duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
            let userData;
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            let url = this.Api_URL + '/getOrdersbyid.php?id=' + JSON.parse(UID.value) + '&status=' + this.SelectedOrder;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log('response' + JSON.stringify(response));
                this.OrderArray = response;
                //  if(response[0].response == 'success' ){
                //    this.presentToast("YouAcceptOrder");
                //   //  https://drbakndillah.com/Api/firebaseRequest.php?title=Hi&body=Are%20you%20okey&token=
                //   //  let other_url = this.Api_URL + 'firebaseRequest.php?title=New%20Offer&body=One%20Mandoob%20accept%20your%20Order&token='+data.token;
                //   //  console.log(other_url); 
                //   //  this.http.get(other_url, {}).subscribe((response) => {
                //   //    console.log('response'+ response[0].response);
                //   //  }, (error) => {
                //   //    this.presentToast(somethingwronghappend);
                //   //  });
                //   //  this.navCtrl.navigateForward('tabs/orders');
                //  } 
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
        });
    }
    MovetoRate(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/rate', {
                state: data
            });
        });
    }
    changeState(state, i, state_ar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // https://drbakndillah.com/Api/updateOrdermState.php.php?id=1&status=test&status_ar=معتمد
            // approved 
            // Completed
            // rejected
            // deleted 
            let somethingwronghappend;
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let DoneSuccessfully;
            this.translate.get('DoneSuccessfully').subscribe(value => { DoneSuccessfully = value; });
            let url = this.Api_URL + 'updateOrdermState.php?id=' + i.orderid + '&status=' + state + '&status_ar=' + state_ar;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                if (response[0].response == 'success') {
                    if (state == 'approved') {
                        //Update item state from new to approved 
                        let other_url = this.Api_URL + 'updateItemState.php?id=' + i.iid + '&status=approved';
                        console.log(other_url);
                        this.http.get(other_url, {}).subscribe((response) => {
                            console.log('response' + response[0].response);
                        }, (error) => {
                            this.presentToast(somethingwronghappend);
                        });
                        //Update orders state to rejected
                        let other_url2 = this.Api_URL + 'updateAllOrdermStatetorejected.php?id=' + i.orderid + '&itemid=' + i.iid;
                        console.log(other_url2);
                        this.http.get(other_url2, {}).subscribe((response) => {
                            console.log('response' + response[0].response);
                        }, (error) => {
                            this.presentToast(somethingwronghappend);
                        });
                    }
                    else if (state == 'Completed') {
                        this.sendNotification('Order Completed', 'Mandoob completed their job please rate them ', i.otoken);
                    }
                    else if (state == 'rejected') {
                        this.sendNotification('Order Rejected', 'Delivery requester reject your offer ', i.mtoken);
                    }
                    else if (state == 'deleted') {
                        this.sendNotification('Order Deleted', 'Mandoob had delete their offer ', i.otoken);
                    }
                    this.presentToast(DoneSuccessfully);
                }
                else {
                    this.presentToast(somethingwronghappend);
                }
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
        });
    }
    moveToChat(i) {
        this.navCtrl.navigateForward('/single-chat', {
            state: i
        });
    }
    sendNotification(title, body, token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let somethingwronghappend;
            let YouAcceptOrder;
            this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; });
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let other_url = this.Api_URL + 'firebaseRequest.php?title=' + title + '&body=' + body + '&token=' + token;
            console.log(other_url);
            this.http.get(other_url, {}).subscribe((response) => {
                console.log('response' + response[0].response);
            }, (error) => {
                //  this.presentToast(somethingwronghappend);
            });
        });
    }
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 1500,
            });
            toast.present();
        });
    }
    ionViewDidEnter() {
        this.Checkinternetconnction();
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.applang = JSON.parse(language.value);
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            // this.presentAlertConfirm(); 
        });
    }
    IsLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            this.viewLoginBtn = JSON.parse(HasLogin.value);
            const Blocked = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Blocked' });
            console.log(JSON.parse(Blocked.value));
            this.UserBlock = JSON.parse(Blocked.value);
        });
    }
    Checkinternetconnction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_network__WEBPACK_IMPORTED_MODULE_5__.Network.getStatus().then((success) => {
                console.log(success.connected);
                let message;
                this.translate.get('Please check your internet connection').subscribe(value => { message = value; });
                console.log('message' + message);
                if (success.connected == false) {
                    this.PreserntAlert(message);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    PreserntAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let Alarm;
            this.translate.get('Alarm !').subscribe(value => { Alarm = value; });
            const alert = yield this.alertController.create({
                header: Alarm,
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrdersPage);



/***/ }),

/***/ 62551:
/*!**********************************************!*\
  !*** ./src/app/page/orders/orders.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".orders_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.orders_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: #353535;\n}\n\n.itemDetails {\n  font-size: larger;\n  margin-bottom: 20px !important;\n}\n\n.MandoobName {\n  font-weight: 1200;\n}\n\n.itemRating {\n  font-size: medium;\n}\n\n.itemDateTime {\n  font-size: larger;\n}\n\n.orders_content .pending {\n  background-color: #F3E834;\n}\n\n.orders_content .approved {\n  background-color: #A7FDA4;\n}\n\n.orders_content ion-button {\n  padding: 0px;\n}\n\n.orders_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.orders_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.orders_footer ion-button {\n  margin: 20px;\n}\n\n.noorderdiv {\n  text-align: center;\n  margin: auto;\n  padding-top: 20%;\n  color: #353535bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFJQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7QUFISjs7QUFNQTtFQUNJLGlCQUFBO0FBSEo7O0FBTUE7RUFDQSxpQkFBQTtBQUhBOztBQUtBO0VBQ0ksaUJBQUE7QUFGSjs7QUFJQTtFQUNDLHlCQUFBO0FBREQ7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUdHO0VBQ0ksWUFBQTtBQUFQOztBQUVBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBRUksZUFBQTtBQUZKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFRQztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMTCIsImZpbGUiOiJvcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyc19oZWFkZXJ7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xufVxuIFxuXG4ub3JkZXJzX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojMzUzNTM1O1xuXG59XG5cbi5pdGVtRGV0YWlsc3tcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5NYW5kb29iTmFtZXtcbiAgICBmb250LXdlaWdodDogMTIwMDtcbiAgIFxufVxuLml0ZW1SYXRpbmd7XG5mb250LXNpemU6IG1lZGl1bTtcbn1cbi5pdGVtRGF0ZVRpbWV7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG4ub3JkZXJzX2NvbnRlbnQgLnBlbmRpbmd7XG4gYmFja2dyb3VuZC1jb2xvcjogI0YzRTgzNDtcbn1cblxuLm9yZGVyc19jb250ZW50IC5hcHByb3ZlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdGREE0O1xuICAgfVxuICAgLm9yZGVyc19jb250ZW50IGlvbi1idXR0b257XG4gICAgICAgcGFkZGluZzogMHB4O1xuICAgfVxuLm9yZGVyc19jb250ZW50IGlvbi1jYXJke1xuIFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNTM1MzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgXG59XG5cbi5vcmRlcnNfY29udGVudCBpb24tY2FyZCBpb24tY29se1xuICBcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuLm9yZGVyc19mb290ZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIFxufVxuXG5cbiAubm9vcmRlcmRpdntcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgIGNvbG9yOiAjMzUzNTM1YmQ7XG4gICAgIFxuIH1cbiJdfQ== */");

/***/ }),

/***/ 34390:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/orders/orders.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"orders_header ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"welcome-language\"></ion-back-button>\n    </ion-buttons> -->\n    <ion-title  color=\"secondary\" > {{'My Orders'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"orders_content\">\n    \n<ion-segment [(ngModel)]=\"SelectedOrder\" (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"new\" class=\"pending\">\n    <ion-label>{{'pending'|translate}}</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"approved\" class=\"approved\">\n    <ion-label>{{'approved'|translate}}</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"Completed\">\n    <ion-label>{{'Completed'|translate}}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<div *ngIf=\"SelectedOrder == 'new'\">\n<ion-card class=\"pending\" *ngFor='let i of OrderArray' >\n  \n  <ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <img [src]=\"i.iimage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"5\"> \n        <ion-card-subtitle *ngIf=\"AppUser == i.mid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{applang == 'ar' ? i.mname_ar : i.mname_en }} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n        <ion-card-subtitle  *ngIf=\"AppUser == i.oid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{i.mnickname}} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n      </ion-col>\n      \n\n            \n          \n\n      <ion-col size=\"4\" >\n        <div *ngIf=\"i.rate != 0 \" class=\"itemRating\">{{i.rate}} / 10 <ion-icon size=\"small\" color=\"primary\" name=\"star\" (click)=\"Service_popOver($event)\" ></ion-icon></div>\n        <div *ngIf=\"i.approvedorder != 0 \"   class=\"itemRating\">{{i.approvedorder}} {{'Approved Order'|translate}}</div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"itemDateTime\">\n        {{'Deliver before'|translate}} {{i.idate}} {{'at'|translate}} {{i.itime}}\n        \n      </ion-col>\n\n      <ion-col size=\"3\"  *ngIf=\"AppUser == i.oid\">\n        <ion-button  (click)=\"changeState('approved'  , i , 'معتمد' )\" color=\"primary\" expand=\"block\"   >\n          <b> {{'Approve' |translate}}</b>\n         </ion-button>\n      </ion-col>\n\n      <ion-col size=\"3\"  *ngIf=\"AppUser == i.oid\">\n        <ion-button (click)=\"changeState('rejected'  , i , 'مرفوص')\" color=\"primary\" expand=\"block\"  >\n          <b> {{'Reject' |translate}}</b>\n         </ion-button>\n      </ion-col>\n\n      <ion-col size=\"4\" *ngIf=\"AppUser == i.mid\" >\n        <ion-button (click)=\"changeState('deleted'  , i  , 'محذوف' )\" color=\"primary\" expand=\"block\"   >\n          <b> {{'Delete' |translate}}</b>\n         </ion-button>\n      </ion-col>\n      \n\n\n      <ion-col size=\"3\">\n        <!-- <ion-button (click)=\"onClick()\" color=\"primary\" expand=\"block\"  shape=\"round\">\n          <b> {{'Chat' |translate}}</b>\n         </ion-button> --> \n         <ion-button  (click)=\"DirectionClick(i.ilat , i.ilat )\"  color=\"primary\" >\n          <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"location\"></ion-icon>\n         \n         </ion-button>\n      </ion-col>\n \n\n      <ion-col size=\"3\">\n        <!-- <ion-button (click)=\"onClick()\" color=\"primary\" expand=\"block\"  shape=\"round\">\n          <b> {{'Chat' |translate}}</b>\n         </ion-button> -->\n         <ion-button (click)=\"moveToChat(i)\" >\n          <ion-icon color=\"secondary\"  slot=\"icon-only\"name=\"chatbubble\"></ion-icon>\n         \n         </ion-button>\n      </ion-col>\n\n    </ion-row>\n  \n  </ion-card-content>\n</ion-card>\n</div>\n  \n  \n<div *ngIf=\"SelectedOrder == 'approved'\">\n   \n<ion-card class=\"approved\" *ngFor='let i of OrderArray' >\n  \n  <ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <img [src]=\"i.iimage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"5\"> \n        <ion-card-subtitle *ngIf=\"AppUser == i.mid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{applang == 'ar' ? i.mname_ar : i.mname_en }} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n        <ion-card-subtitle  *ngIf=\"AppUser == i.oid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{i.mnickname}} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n      </ion-col> \n\n      <ion-col size=\"4\" >\n        <div *ngIf=\"i.rate != 0 \" class=\"itemRating\">{{i.rate}} / 10 <ion-icon size=\"small\" color=\"primary\" name=\"star\" (click)=\"Service_popOver($event)\" ></ion-icon></div>\n        <div *ngIf=\"i.approvedorder != 0 \"   class=\"itemRating\">{{i.approvedorder}} {{'Approved Order'|translate}}</div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"itemDateTime\">\n        {{'Deliver before'|translate}} {{i.idate}} {{'at'|translate}} {{i.itime}}\n        \n      </ion-col>\n  \n      <ion-col size=\"6\"  *ngIf=\"AppUser == i.mid\" >\n        <ion-button (click)=\"changeState('Completed' , i , 'مكتمل' )\" color=\"primary\" expand=\"block\"   >\n          <b> {{'Complete' |translate}}</b>\n         </ion-button>\n      </ion-col>\n\n      <ion-col size=\"3\">\n        <!-- <ion-button (click)=\"onClick()\" color=\"primary\" expand=\"block\"  shape=\"round\">\n          <b> {{'Chat' |translate}}</b>\n         </ion-button> --> \n         <!-- <ion-button (click)=\"DirectionClick(i.ilat , i.ilat )\"  >\n           <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"location\"></ion-icon>\n         </ion-button> -->\n\n         <ion-button  (click)=\"DirectionClick(i.ilat , i.ilat )\"  color=\"primary\"  >\n          <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"location\"></ion-icon>\n         \n         </ion-button>\n      </ion-col>\n \n\n      <ion-col size=\"3\">\n        <!-- <ion-button (click)=\"onClick()\" color=\"primary\" expand=\"block\"  shape=\"round\">\n          <b> {{'Chat' |translate}}</b>\n         </ion-button> -->\n         <ion-button (click)=\"moveToChat(i)\" >\n          <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n         \n         </ion-button>\n      </ion-col>\n        \n         \n  \n      </ion-row>\n    \n    </ion-card-content>\n  </ion-card>\n  </div>\n\n  <div *ngIf=\"SelectedOrder == 'Completed'\">\n       \n<ion-card class=\"Completed\" *ngFor='let i of OrderArray' >\n  \n  <ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <img [src]=\"i.iimage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"5\"> \n        <ion-card-subtitle *ngIf=\"AppUser == i.mid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{applang == 'ar' ? i.mname_ar : i.mname_en }} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n        <ion-card-subtitle  *ngIf=\"AppUser == i.oid\" class=\"itemDetails\"><b class=\"MandoobName\">  {{i.mnickname}} </b> <br>  {{applang == 'ar' ? i.ititle_ar : i.ititle_en }} </ion-card-subtitle>\n      </ion-col> \n\n      <ion-col size=\"4\" >\n        <div *ngIf=\"i.rate != 0 \" class=\"itemRating\">{{i.rate}} / 10 <ion-icon size=\"small\" color=\"primary\" name=\"star\" (click)=\"Service_popOver($event)\" ></ion-icon></div>\n        <div *ngIf=\"i.approvedorder != 0 \"   class=\"itemRating\">{{i.approvedorder}} {{'Approved Order'|translate}}</div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"itemDateTime\">\n        {{'Deliver before'|translate}} {{i.idate}} {{'at'|translate}} {{i.itime}}\n        \n      </ion-col>\n    \n\n          <ion-col size=\"4\"  *ngIf=\"AppUser == i.oid\" >\n            <ion-button (click)=\"MovetoRate(i)\"  color=\"primary\" expand=\"block\"  >\n              <b> {{'Rate' |translate}}</b>\n             </ion-button>\n          </ion-col>\n     \n          <ion-col size=\"3\">\n            <!-- <ion-button (click)=\"onClick()\" color=\"primary\" expand=\"block\"  shape=\"round\">\n              <b> {{'Chat' |translate}}</b>\n             </ion-button> -->\n             <ion-button (click)=\"moveToChat(i)\"  >\n              <ion-icon color=\"secondary\"  slot=\"icon-only\" name=\"chatbubble\"></ion-icon>\n             \n             </ion-button>\n          </ion-col>\n    \n        </ion-row>\n      \n      </ion-card-content>\n    </ion-card>\n    </div>\n\n\n    <div class=\"noorderdiv\" *ngIf=\"OrderArray.length == 0\">\n     <h3> {{ 'There Is No Order Yet ' |translate}}</h3>\n    </div>\n    \n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_orders_orders_module_ts.js.map