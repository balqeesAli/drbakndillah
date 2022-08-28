(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_single-chat-admin_single-chat-admin_module_ts"],{

/***/ 15430:
/*!****************************************************************************!*\
  !*** ./src/app/page/single-chat-admin/single-chat-admin-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatAdminPageRoutingModule": () => (/* binding */ SingleChatAdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _single_chat_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-chat-admin.page */ 48978);




const routes = [
    {
        path: '',
        component: _single_chat_admin_page__WEBPACK_IMPORTED_MODULE_0__.SingleChatAdminPage
    }
];
let SingleChatAdminPageRoutingModule = class SingleChatAdminPageRoutingModule {
};
SingleChatAdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingleChatAdminPageRoutingModule);



/***/ }),

/***/ 25393:
/*!********************************************************************!*\
  !*** ./src/app/page/single-chat-admin/single-chat-admin.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatAdminPageModule": () => (/* binding */ SingleChatAdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _single_chat_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-chat-admin-routing.module */ 15430);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _single_chat_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-chat-admin.page */ 48978);








let SingleChatAdminPageModule = class SingleChatAdminPageModule {
};
SingleChatAdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _single_chat_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleChatAdminPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_single_chat_admin_page__WEBPACK_IMPORTED_MODULE_1__.SingleChatAdminPage]
    })
], SingleChatAdminPageModule);



/***/ }),

/***/ 48978:
/*!******************************************************************!*\
  !*** ./src/app/page/single-chat-admin/single-chat-admin.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatAdminPage": () => (/* binding */ SingleChatAdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_single_chat_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single-chat-admin.page.html */ 25002);
/* harmony import */ var _single_chat_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-chat-admin.page.scss */ 52049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 61957);



//  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35
//  https://drbakndillah.com/Api/viewUserChat.php?id=35&Orders_id=32 










let SingleChatAdminPage = class SingleChatAdminPage {
    constructor(route, router, plt, actionSheetController, navCtrl, photoService, popCtrl, http, toastCtrl, loadingCtrl, translate, platform, fb) {
        this.route = route;
        this.router = router;
        this.plt = plt;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.photoService = photoService;
        this.popCtrl = popCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.fb = fb;
        this.name = "Angular " + _angular_core__WEBPACK_IMPORTED_MODULE_4__.VERSION.major;
        this.messages = [
            "Hi",
            "Welcome to our secure message platform",
            "We donnot share your privacy",
            "Not sell your privacy to potential buyers..."
        ];
        this.today = Date.now();
        this.MyChatArr = [];
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/car_card_id.png';
        this.Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.IdCardImageView = 1;
        this.selected_image_name = 'imgName';
        this.singleChatDetails = {
            "Car_card_Id_img": "",
        };
        platform.ready().then(() => {
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
            this.mesaageconentHeight = platform.height() - (platform.height() / 5.6) + "px";
            console.log('Height: ' + this.mesaageconentHeight);
        });
        this.Selected_language_direction();
        // if (router.getCurrentNavigation().extras.state) {
        //   this.chatUserDetails = this.router.getCurrentNavigation().extras.state;
        //   console.log('chatUserDetails' + JSON.stringify(this.chatUserDetails));
        // }
    }
    ngOnInit() {
        this.frmMessage = this.fb.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null)
        });
        // Calling function every 2 seconds 
        setInterval(data => {
            this.getMyChat();
        }, 2000);
    }
    ngAfterViewChecked() {
        this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
    }
    send() {
        const message = this.frmMessage.get("message");
        console.log(message.value);
        this.messages.push(message.value);
        // clear
        message.setValue("");
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            this.applang = JSON.parse(language.value);
            this.getMyChat();
            // this.presentAlertConfirm(); 
        });
    }
    getMyChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            let User_id = JSON.parse(userId.value);
            let url = this.Api_URL + "viewUserChatAdmin.php?id=" + User_id;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                if (retrivedResponse.response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else {
                    this.MyChatArr = retrivedResponse;
                    console.log(this.MyChatArr);
                    return;
                }
            }, (error) => {
            });
        });
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
    // async sendNotification(title, body, token) {
    //   let somethingwronghappend;
    //   let YouAcceptOrder;
    //   this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; })
    //   this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; })
    //   let other_url = this.Api_URL + 'firebaseRequest.php?title=' + title + '&body=' + body + '&token=' + token;
    //   console.log(other_url);
    //   this.http.get(other_url, {}).subscribe((response) => {
    //     console.log('response' + response[0].response);
    //   }, (error) => {
    //     //  this.presentToast(somethingwronghappend);
    //   });
    // }
    Upload_text() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.chattext != '') {
                let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
                let error_uploading_car_card_id = 'error_uploading_car_card_id';
                this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
                this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
                //  insert data in DB 
                const loading = yield this.loadingCtrl.create({
                    spinner: 'bubbles'
                });
                yield loading.present();
                //  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35 
                let url = this.Api_URL + "insertintoSingleChatAdmin.php?Text=" + this.chattext.trim() + "&User_id=" + this.AppUser;
                console.log(url);
                this.http.get(url, {}).subscribe((response) => {
                    loading.dismiss();
                    let retrivedResponse = response;
                    console.log('response' + JSON.stringify(response));
                    if (retrivedResponse[0].response == 'error') {
                        loading.dismiss();
                        this.presentToast(wrong_inserttopackage_details);
                        return;
                    }
                    else if (retrivedResponse[0].response == 'success') {
                        loading.dismiss();
                        this.chattext = "";
                        return;
                    }
                }, (error) => {
                });
            }
        });
    }
};
SingleChatAdminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
SingleChatAdminPage.propDecorators = {
    mContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["messageContainer",] }]
};
SingleChatAdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-single-chat-admin',
        template: _raw_loader_single_chat_admin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_chat_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SingleChatAdminPage);



/***/ }),

/***/ 52049:
/*!********************************************************************!*\
  !*** ./src/app/page/single-chat-admin/single-chat-admin.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".rotate-90 {\n  transform: rotate(90deg);\n}\n\n.profile_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.profile_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: #353535;\n}\n\n.profile_content ion-item-divider {\n  font-size: medium;\n  color: #353535;\n  background-color: #ffffff;\n  border-bottom: 1px solid #3535350f;\n}\n\n.profile_content div {\n  margin: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n  padding: 0 15px;\n}\n\n.item_name {\n  background-color: #353535a9;\n  font-size: large;\n}\n\n.single_chat_1, .single_chat_2 {\n  padding: 10px;\n  margin: 2px !important;\n}\n\n.single_chat_1 {\n  background-color: #494848a9 !important;\n  border-radius: 10px 0 10px 10px;\n  width: 75%;\n  float: right;\n}\n\n.single_chat_2 {\n  background-color: #f5ea5b !important;\n  border-radius: 0 10px 10px 10px;\n  width: 75%;\n  float: left;\n}\n\n.chat_footer ion-item {\n  --background: #ffffff !important;\n  border: 2px solid #353535a9;\n  width: 85%;\n  border-radius: 50px;\n}\n\n.chat_footer .send-icon {\n  margin-top: 5%;\n}\n\n.chat_footer {\n  text-align: center;\n}\n\n.chat_footer ion-col {\n  display: flex;\n}\n\n.approve_reject_btn ion-button {\n  width: 95%;\n}\n\n.approve_reject_btn {\n  text-align: center;\n}\n\n.message-container {\n  margin: 0px !important;\n  overflow: auto;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1jaGF0LWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0U7RUFFRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFHQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksMkJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFFSSxzQ0FBQTtFQUVBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFKSjs7QUFTQTtFQUNLLG9DQUFBO0VBQ0QsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNBO0VBRUksZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVdBO0VBRUksY0FBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7QUFUSjs7QUFXQTtFQUNJLGFBQUE7QUFSSjs7QUFVQTtFQUNJLFVBQUE7QUFQSjs7QUFVQTtFQUNJLGtCQUFBO0FBUEo7O0FBVUE7RUFHSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVRKIiwiZmlsZSI6InNpbmdsZS1jaGF0LWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUtOTAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICAucHJvZmlsZV9oZWFkZXJ7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xufVxuIFxuXG4ucHJvZmlsZV9jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzM1MzUzNTtcblxufVxuLnByb2ZpbGVfY29udGVudCBpb24taXRlbS1kaXZpZGVye1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiMzNTM1MzU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM1MzUzNTBmO1xuICAgIFxufVxuLnByb2ZpbGVfY29udGVudCBkaXZ7XG4gICAgbWFyZ2luOiAxMHB4IDtcbn1cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuLml0ZW1fbmFtZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IzM1MzUzNWE5O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG5cbn1cblxuLnNpbmdsZV9jaGF0XzEgLCAuc2luZ2xlX2NoYXRfMntcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbn1cblxuLnNpbmdsZV9jaGF0XzF7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDg0OGE5ICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweCA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDEwcHggMTBweCA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDpyaWdodDtcblxuICAgXG59XG5cbi5zaW5nbGVfY2hhdF8ye1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlYTViICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweCA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIFxufVxuLmNoYXRfZm9vdGVyIGlvbi1pdGVtIHtcblxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNTM1MzVhOTtcbiAgICB3aWR0aDogODUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgXG59XG5cbi5jaGF0X2Zvb3RlciAuc2VuZC1pY29ue1xuICAgIC8vIG1hcmdpbi1yaWdodDogIDEwcHg7XG4gICAgbWFyZ2luLXRvcDogIDUlO1xuICAgIFxufVxuLmNoYXRfZm9vdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jaGF0X2Zvb3RlciBpb24tY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uYXBwcm92ZV9yZWplY3RfYnRuIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDk1JTtcbiAgIFxufVxuLmFwcHJvdmVfcmVqZWN0X2J0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIgeyBcbiAgICAvLyBoZWlnaHQ6IDczNnB4O1xuXG4gICAgbWFyZ2luIDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuXG4gICJdfQ== */");

/***/ }),

/***/ 25002:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/single-chat-admin/single-chat-admin.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"  > {{'Drbak Ndillah'|translate}}</ion-title>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile_content\">\n \n<!-- \n  <div>\n    <div>\n    </div>\n    <ion-list>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let message of MyChatArr\">\n         <ion-item   [ngClass]=\"  (message.Isadmin == 0 ) ?  'single_chat_1': 'single_chat_2'\"  lines=\"none\"  >\n            <ion-label>\n              <p style=\"color: black;\" >{{message.Text}}</p>\n              <p>{{message.Sysdate}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row> \n    </ion-list>\n  </div> -->\n\n\n\n<div class=\"d-flex flex-column\" style=\"maring: 0 !important;\">\n\t<div  [style.height]= \"mesaageconentHeight\" class=\"container message-container\" #messageContainer>\n\t\t<div class=\"message\" *ngFor=\"let message of MyChatArr\">\n\t\t\t<div class=\"badge rouned-pill bg-light text-dark p-3 mt-1 mb-1\">\n        <div  [ngClass]=\"  (message.Isadmin == 0 ) ?  'single_chat_1': 'single_chat_2'\"  lines=\"none\"  >\n          <ion-label>\n            <p style=\"color: black;\" >{{message.Text}}</p>\n            <p>{{message.Sysdate}}</p>\n          </ion-label>\n        </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container row\">\n\t\t<form [formGroup]=\"frmMessage\" (ngSubmit)=\"send()\">\n\t\t \n\t\t</form>\n\n      <!-- <ion-input type=\"text\" [(ngModel)]=\"chattext\"  placeholder=\"Awesome Input\"></ion-input>\n        <ion-button (click)=\"Upload_text()\" >\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button> -->\n        \n\t</div>\n</div>\n\n\n\n</ion-content>\n \n\n<ion-footer class=\"ion-no-border chat_footer\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"12\" >\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [placeholder]=\"'Type Your Message Here ...'|translate\"  [(ngModel)]=\"chattext\"></ion-input>\n        </ion-item>\n          <ion-icon   size=\"large\"   color=\"primary\" class=\"send-icon\" name=\"send\" (click)=\"Upload_text()\" ></ion-icon>\n           \n   \n          \n\n       </ion-col>\n\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n<!-- <ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"  > {{'Drbak Ndillah'|translate}}</ion-title>\n \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile_content\">\n \n  \n  <div>\n    <div>\n    </div>\n    <ion-list>\n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let i of MyChatArr\">\n         <ion-item   [ngClass]=\"  (i.Isadmin == 0 ) ?  'single_chat_1': 'single_chat_2'\"  lines=\"none\"  >\n            <ion-label>\n              <p style=\"color: black;\" >{{i.Text}}</p>\n              <p>{{i.Sysdate}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row> \n    </ion-list>\n  </div>\n\n</ion-content>\n \n\n<ion-footer class=\"ion-no-border chat_footer\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"12\" >\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [placeholder]=\"'Type Your Message Here ...'|translate\"  [(ngModel)]=\"chattext\"></ion-input>\n        </ion-item>\n          <ion-icon   size=\"large\"   color=\"primary\" class=\"send-icon\" name=\"send\" (click)=\"Upload_text()\" ></ion-icon>\n           \n   \n          \n\n       </ion-col>\n\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n\n  -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_single-chat-admin_single-chat-admin_module_ts.js.map