(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_chat_chat_module_ts"],{

/***/ 49679:
/*!**************************************************!*\
  !*** ./src/app/page/chat/chat-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageRoutingModule": () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 31133);




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ 22178:
/*!******************************************!*\
  !*** ./src/app/page/chat/chat.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPageModule": () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 49679);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 31133);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ChatPageModule = class ChatPageModule {
};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
    })
], ChatPageModule);



/***/ }),

/***/ 31133:
/*!****************************************!*\
  !*** ./src/app/page/chat/chat.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatPage": () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.page.html */ 88972);
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss */ 84846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/network */ 63848);












let ChatPage = class ChatPage {
    constructor(loadingController, alertController, nativeGeocoder, navCtrl, translate, http, toastCtrl, actionSheetController) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nativeGeocoder = nativeGeocoder;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.ChatListArray = [];
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.unreadAdminMsg = 0;
        // document.documentElement.dir = "rtl";
        setInterval(data => {
            this.Selected_language_direction();
            this.IsLogin();
            this.GetChat();
            this.GetUnreadAdminChat();
        }, 2000);
    }
    ngOnInit() {
    }
    moveToChat(i) {
        this.navCtrl.navigateForward('/single-chat', {
            state: i
        });
    }
    moveToChatadmin(i) {
        this.navCtrl.navigateForward('/single-chat-admin', {
            state: i
        });
    }
    GetUnreadAdminChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let userData;
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            let url = this.Api_URL + '/getUnreadAdmidChat.php?id=' + JSON.parse(UID.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log('getUnreadAdmidChat  ' + JSON.stringify(response[0].unread));
                this.unreadAdminMsg = response[0].unread;
            }, (error) => { });
        });
    }
    GetChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let somethingwronghappend;
            let YouAcceptOrder;
            this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; });
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let userData;
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            let url = this.Api_URL + '/getChatListbyid.php?id=' + JSON.parse(UID.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log('response' + JSON.stringify(response));
                this.ChatListArray = response;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/rate', {
                state: data
            });
        });
    }
    changeState(state, i, state_ar) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    sendNotification(title, body, token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 1500,
            });
            toast.present();
        });
    }
    ionViewDidEnter() {
        this.Checkinternetconnction();
        // this.content.scrollToBottom(300);
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            this.viewLoginBtn = JSON.parse(HasLogin.value);
            const Blocked = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Blocked' });
            console.log(JSON.parse(Blocked.value));
            this.UserBlock = JSON.parse(Blocked.value);
        });
    }
    Checkinternetconnction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus().then((success) => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['content',] }]
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatPage);



/***/ }),

/***/ 84846:
/*!******************************************!*\
  !*** ./src/app/page/chat/chat.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".profile_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.profile_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: #353535;\n}\n\n.profile_content ion-item-divider {\n  font-size: medium;\n  color: #353535;\n  background-color: #ffffff;\n  border-bottom: 1px solid #3535350f;\n}\n\n.profile_content div {\n  margin: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n  padding: 0 15px;\n}\n\n.noorderdiv {\n  text-align: center;\n  margin: auto;\n  padding-top: 20%;\n  color: #353535bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBSUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4gXG5cbi5wcm9maWxlX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjojMzUzNTM1O1xuXG59XG4ucHJvZmlsZV9jb250ZW50IGlvbi1pdGVtLWRpdmlkZXJ7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6IzM1MzUzNTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzUzNTM1MGY7XG4gICAgXG59XG4ucHJvZmlsZV9jb250ZW50IGRpdntcbiAgICBtYXJnaW46IDEwcHggO1xufVxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5cbiAgLm5vb3JkZXJkaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIGNvbG9yOiAjMzUzNTM1YmQ7XG4gICAgXG59XG4iXX0= */");

/***/ }),

/***/ 88972:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/chat/chat.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'My Chat'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile_content\" >\n\n  <div>\n    <ion-list>\n\n      <!-- {{'Add New Item'|translate}} -->\n      <!-- <ion-item [routerLink]=\"['/single-chat']\" >\n      <ion-avatar slot=\"start\">\n        <img src=\"../../../assets/icon/logo.png\" />\n      </ion-avatar>\n      <ion-badge slot=\"end\">2</ion-badge>\n      <ion-label>{{'Drbak Ndillah'|translate}}</ion-label>\n    </ion-item> -->\n\n\n    \n      <nav  [routerLink]=\"['/single-chat-admin']\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"../../../assets/icon/logo.png\" />\n          </ion-avatar>\n          <!-- <ion-badge slot=\"end\">2</ion-badge> -->\n          <ion-badge *ngIf=\"unreadAdminMsg != 0\" slot=\"end\"> {{unreadAdminMsg}}</ion-badge>\n          \n          <ion-label>{{'Drbak Ndillah'|translate}}</ion-label>\n        </ion-item>\n      </nav>\n\n \n      \n      <ion-item *ngFor=\"let i of ChatListArray\" (click)=\"moveToChat(i)\" style=\"--background: white !important;\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"i.iimage\" />\n        </ion-avatar> \n            <ion-badge *ngIf=\"i.unreadData != 0\" slot=\"end\"> {{i.unreadData}}</ion-badge>\n          \n\n        <ion-label>  \n          <b *ngIf=\"AppUser != i.mid\"> {{i.oshop}} </b>\n          <b *ngIf=\"AppUser == i.oid\"> {{i.mnickname}}</b>\n         \n          <br>\n          {{applang == 'ar' ? i.ititle_ar : i.ititle_en }}\n          <br> \n          <ion-text color=\"danger\" style=\"font-size: small;\" >\n            {{ 'order' |translate}}\n            {{applang == 'ar' ? i.ostatus_ar : i.ostatus_en }}  \n            \n            \n          </ion-text>\n          \n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n\n  <div class=\"noorderdiv\" *ngIf=\"ChatListArray.length == 0\">\n    <h3> {{ 'There Is No Chat Yet' |translate}}</h3>\n   </div>\n   \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_chat_chat_module_ts.js.map