(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_single-chat_single-chat_module_ts"],{

/***/ 91960:
/*!****************************************************************!*\
  !*** ./src/app/page/single-chat/single-chat-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatPageRoutingModule": () => (/* binding */ SingleChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _single_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-chat.page */ 16530);




const routes = [
    {
        path: '',
        component: _single_chat_page__WEBPACK_IMPORTED_MODULE_0__.SingleChatPage
    }
];
let SingleChatPageRoutingModule = class SingleChatPageRoutingModule {
};
SingleChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingleChatPageRoutingModule);



/***/ }),

/***/ 89029:
/*!********************************************************!*\
  !*** ./src/app/page/single-chat/single-chat.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatPageModule": () => (/* binding */ SingleChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _single_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-chat-routing.module */ 91960);
/* harmony import */ var _single_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-chat.page */ 16530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let SingleChatPageModule = class SingleChatPageModule {
};
SingleChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _single_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleChatPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_single_chat_page__WEBPACK_IMPORTED_MODULE_1__.SingleChatPage]
    })
], SingleChatPageModule);



/***/ }),

/***/ 16530:
/*!******************************************************!*\
  !*** ./src/app/page/single-chat/single-chat.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleChatPage": () => (/* binding */ SingleChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_single_chat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single-chat.page.html */ 27146);
/* harmony import */ var _single_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-chat.page.scss */ 23069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 61957);
//  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35
//  https://drbakndillah.com/Api/viewUserChat.php?id=35&Orders_id=32 















let SingleChatPage = class SingleChatPage {
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
        /*
      
        {
         "orderid":"32",
         "ostatus_ar":"جديد",
         "ostatus_en":"new",
         "mid":"40",
         "memail":"token@gmail.com",
         "mname_ar":"Token",
         "mname_en":"Token",
         "mphone":"99999",
         "mcountry_code":"968",
         "mtoken":"cRDqEWOrQFqK8LeaxYPsix:APA91bFm-oR4YdawkxGBS-_RsUr4DP-twSbE9jvoJ7Tlgs9ATfGw5koxL60VDzLgt9sX0goR3uhN5oqMPTDiKlso1JwkMOQ8kt05SbIa2rlnS16lLO_kLyTIH7phG6D2u0sAZRV2iDXc",
         "oid":"35",
         "oemail":"balqqesalyahyei@gmail.com",
         "oname_ar":"Bqeed",
         "oname_en":"fgdfgh",
         "ophone":"99823650",
         "ocountry_code":"968",
         "otoken":"cRDqEWOrQFqK8LeaxYPsix:APA91bFm-oR4YdawkxGBS-_RsUr4DP-twSbE9jvoJ7Tlgs9ATfGw5koxL60VDzLgt9sX0goR3uhN5oqMPTDiKlso1JwkMOQ8kt05SbIa2rlnS16lLO_kLyTIH7phG6D2u0sAZRV2iDXc",
         "iid":"97",
         "iimage":"https://drbakndillah.com/Api/uploads/1644259133601.jpeg",
         "itype":"item",
         "ititle_ar":"سس",
         "ititle_en":"ss",
         "iothernote":"",
         "ilog":"58.21130852307578",
         "ilat":"23.609156951723843",
         "rate":0,
         "itime":":00",
         "idate":"2022-02-07",
         "mnickname":"abc",
         "approvedorder":"0"
      }
      
        */
        this.MyChatArr = [];
        this.NewMyChatArr = [];
        this.ScrrolTOUP = 1;
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
            this.mesaageconentHeight = platform.height() - (platform.height() / 4.5) + "px";
            console.log('Height: ' + this.mesaageconentHeight);
        });
        this.Selected_language_direction();
        this.translate.get('sendIcon').subscribe(value => { this.sendIcon = value; });
        if (router.getCurrentNavigation().extras.state) {
            this.chatUserDetails = this.router.getCurrentNavigation().extras.state;
            console.log('chatUserDetails' + JSON.stringify(this.chatUserDetails));
        }
    }
    ngOnInit() {
        this.frmMessage = this.fb.group({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null)
        });
        // Calling function every 2 seconds 
        setInterval(data => {
            this.getMyChat();
            // this.ScrollToBottom();
        }, 1000);
    }
    ngAfterViewChecked() {
        if (this.ScrrolTOUP == 1) {
            this.mContainer.nativeElement.scrollTop = this.mContainer.nativeElement.scrollHeight;
        }
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
    ScrollToBottom() {
        // this.content.scrollToBottom(100);
    }
    getMyChat() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            // console.log(JSON.parse(userId.value));
            let User_id = JSON.parse(userId.value);
            let url = this.Api_URL + "viewUserChat.php?id=" + User_id + "&Orders_id=" + this.chatUserDetails.orderid;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id);
                //console.log(response[0].response);
                if (retrivedResponse.response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else {
                    this.NewMyChatArr = retrivedResponse;
                    console.log("NewMyChatArr__" + JSON.stringify(this.NewMyChatArr));
                    console.log("NewMyChatArr__" + JSON.stringify(this.NewMyChatArr[this.NewMyChatArr.length - 1]));
                    if (JSON.stringify(this.NewMyChatArr) != JSON.stringify(this.MyChatArr)) {
                        this.MyChatArr = retrivedResponse;
                        console.log("1100011_" + "NOT EQUAL");
                        this.ScrrolTOUP = 1;
                    }
                    else {
                        if (this.NewMyChatArr[this.NewMyChatArr.length - 1].Image != "") {
                            this.getMyChat2();
                        }
                        this.ScrrolTOUP = 0;
                        console.log("1100011_" + "  EQUAL");
                    }
                    // console.log( "1100011_" + this.NewMyChatArr  + "__" + JSON.stringify(this.MyChatArr) + "_____________" + JSON.stringify(retrivedResponse) );
                    return;
                }
            }, (error) => {
            });
        });
    }
    getMyChat2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            // console.log(JSON.parse(userId.value));
            let User_id = JSON.parse(userId.value);
            let url = this.Api_URL + "viewUserChat.php?id=" + User_id + "&Orders_id=" + this.chatUserDetails.orderid;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id);
                //console.log(response[0].response);
                if (retrivedResponse.response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else {
                    this.NewMyChatArr = retrivedResponse;
                    this.ScrrolTOUP = 1;
                }
            }, (error) => {
            });
        });
    }
    selectImagefromphone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                buttons: [{
                        text: 'Photo',
                        role: 'Photo',
                        icon: 'images',
                        handler: () => {
                            console.log('Delete clicked');
                            // this.selectImage_photo();
                            this.OpenCamera();
                        }
                    }, {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            console.log('Share clicked');
                            // this.selectImage_camera();
                            this.OpenImage();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    OpenCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGallery().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    OpenImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGalleryFromPhone().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    LoadIMG() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved().then((sucess) => {
                console.log(sucess);
                //console.log(sucess[0].webviewPath);
                this.uploadIMGintoServer(sucess[0].webviewPath, sucess[0].filepath);
                this.IdCardImage = sucess[0].webviewPath;
            }).catch((error) => {
            });
        });
    }
    // Upload the formData to our API
    uploadData(formData) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
            // message: 'Uploading image...',
            });
            yield loading.present();
            // Use your own API!
            const url = 'https://drbakndillah.com/Api/upload.php';
            this.http.post(url, formData)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                loading.dismiss();
                if (res['success']) {
                    // this.imagaUploaded = 1;
                    // this.presentToast('File upload complete.')
                }
                else {
                    // this.imagaUploaded = 0;
                    // this.presentToast('File upload failed.')
                }
            });
        });
    }
    uploadIMGintoServer(imageBase64, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(imageBase64);
            const blob = yield response.blob();
            const formData = new FormData();
            formData.append('file', blob, name);
            this.uploadData(formData);
            console.log('name' + name);
            this.selected_image_name = name;
            this.singleChatDetails.Car_card_Id_img = name;
            this.Upload_img();
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
    changeState(state, state_ar) {
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
            let url = this.Api_URL + 'updateOrdermState.php?id=' + this.chatUserDetails.orderid + '&status=' + state + '&status_ar=' + state_ar;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                if (response[0].response == 'success') {
                    if (state == 'approved') {
                        //Update item state from new to approved 
                        let other_url = this.Api_URL + 'updateItemState.php?id=' + this.chatUserDetails.iid + '&status=approved';
                        console.log(other_url);
                        this.http.get(other_url, {}).subscribe((response) => {
                            console.log('response' + response[0].response);
                        }, (error) => {
                            this.presentToast(somethingwronghappend);
                        });
                        //Update orders state to rejected
                        let other_url2 = this.Api_URL + 'updateAllOrdermStatetorejected.php?id=' + this.chatUserDetails.orderid + '&itemid=' + this.chatUserDetails.iid;
                        console.log(other_url2);
                        this.http.get(other_url2, {}).subscribe((response) => {
                            console.log('response' + response[0].response);
                        }, (error) => {
                            this.presentToast(somethingwronghappend);
                        });
                    }
                    else if (state == 'Completed') {
                        this.sendNotification('Order Completed', 'Mandoob completed their job please rate them ', this.chatUserDetails.otoken);
                    }
                    else if (state == 'rejected') {
                        this.sendNotification('Order Rejected', 'Delivery requester reject your offer ', this.chatUserDetails.mtoken);
                    }
                    else if (state == 'deleted') {
                        this.sendNotification('Order Deleted', 'Mandoob had delete their offer ', this.chatUserDetails.otoken);
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
    Upload_img() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.singleChatDetails.Car_card_Id_img == '') {
                return;
            }
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            if (this.selected_image_name == 'imgName') {
                this.presentToast(error_uploading_car_card_id);
                return;
            }
            //  insert data in DB 
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            //  https://drbakndillah.com/Api/insertintoSingleChat.php?Img=2342431.jpeg&Orders_id=32&Text=passsenger&Systime=01:12&Sysdate=2021-11-11&User_id=35 
            let url = this.Api_URL + "insertintoSingleChat.php?Img=" + this.singleChatDetails.Car_card_Id_img + "&Orders_id=" + this.chatUserDetails.orderid + "&Text=&User_id=" + this.AppUser;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                loading.dismiss();
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                if (retrivedResponse.response[0] == 'error') {
                    loading.dismiss();
                    this.presentToast(error_uploading_car_card_id);
                    return;
                }
                else if (retrivedResponse.response[0] == 'success') {
                    loading.dismiss();
                    this.getMyChat();
                    //Send notification 
                    if (this.chatUserDetails.mid == this.AppUser) {
                        this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.otoken);
                    }
                    else if (this.chatUserDetails.mid != this.AppUser) {
                        this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.mtoken);
                    }
                    this.getMyChat();
                    // this.navCtrl.navigateForward('/tabs/profile');
                    return;
                }
            }, (error) => {
            });
        });
    }
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
                let url = this.Api_URL + "insertintoSingleChat.php?Img=&Orders_id=" + this.chatUserDetails.orderid + "&Text=" + this.chattext.trim() + "&User_id=" + this.AppUser;
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
                        //Send notification 
                        if (this.chatUserDetails.mid == this.AppUser) {
                            this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.otoken);
                        }
                        else if (this.chatUserDetails.mid != this.AppUser) {
                            this.sendNotification('New Message', 'You have 1 new message', this.chatUserDetails.mtoken);
                        }
                        // this.navCtrl.navigateForward('/tabs/profile');
                        return;
                    }
                }, (error) => {
                });
            }
        });
    }
};
SingleChatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.PopoverController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
SingleChatPage.propDecorators = {
    mContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["messageContainer",] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { static: false },] }]
};
SingleChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-single-chat',
        template: _raw_loader_single_chat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_chat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SingleChatPage);



/***/ }),

/***/ 23069:
/*!********************************************************!*\
  !*** ./src/app/page/single-chat/single-chat.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".rotate-90 {\n  transform: rotate(90deg);\n}\n\n.profile_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.profile_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n  color: #353535;\n}\n\n.profile_content ion-item-divider {\n  font-size: medium;\n  color: #353535;\n  background-color: #ffffff;\n  border-bottom: 1px solid #3535350f;\n}\n\n.profile_content div {\n  margin: 10px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n  padding: 0 15px;\n}\n\n.item_name {\n  background-color: #353535a9;\n  font-size: large;\n}\n\n.single_chat_1 {\n  --background: #494848a9 !important;\n  border-radius: 15px 0 15px 15px;\n  width: 75%;\n  float: right;\n  margin: 0px !important;\n}\n\n.single_chat_2 {\n  border-radius: 0 15px 15px 15px;\n  width: 75%;\n  float: left;\n  margin: 0px !important;\n}\n\n.chat_footer ion-item {\n  --background: #ffffff !important;\n  border: 2px solid #353535a9;\n  width: 85%;\n  border-radius: 50px;\n}\n\n.chat_footer .send-icon {\n  margin-top: 5%;\n}\n\n.chat_footer {\n  text-align: center;\n}\n\n.chat_footer ion-col {\n  display: flex;\n}\n\n.approve_reject_btn ion-button {\n  width: 95%;\n}\n\n.approve_reject_btn {\n  text-align: center;\n}\n\n.single_chat_1, .single_chat_2 {\n  padding: 10px;\n  margin: 2px !important;\n}\n\n.single_chat_1 {\n  background-color: #494848a9 !important;\n  border-radius: 10px 0 10px 10px;\n  width: 75%;\n  float: right;\n}\n\n.single_chat_2 {\n  background-color: #f5ea5b !important;\n  border-radius: 0 10px 10px 10px;\n  width: 75%;\n  float: left;\n}\n\n.message-container {\n  margin: 0px !important;\n  overflow: auto;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0o7O0FBQ0U7RUFFRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFHQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBRUksMkJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksa0NBQUE7RUFFQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7QUFISjs7QUFNQTtFQUNJLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUhKOztBQUtBO0VBRUksZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9BO0VBRUksY0FBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7QUFMSjs7QUFPQTtFQUNJLGFBQUE7QUFKSjs7QUFNQTtFQUNJLFVBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0FBSEo7O0FBT0E7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7QUFMSjs7QUFRQTtFQUVJLHNDQUFBO0VBRUEsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVlBO0VBQ0ssb0NBQUE7RUFDRCwrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBVEo7O0FBYUE7RUFHSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVpKIiwiZmlsZSI6InNpbmdsZS1jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3RhdGUtOTAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICAucHJvZmlsZV9oZWFkZXJ7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xufVxuIFxuXG4ucHJvZmlsZV9jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzM1MzUzNTtcblxufVxuLnByb2ZpbGVfY29udGVudCBpb24taXRlbS1kaXZpZGVye1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiMzNTM1MzU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM1MzUzNTBmO1xuICAgIFxufVxuLnByb2ZpbGVfY29udGVudCBkaXZ7XG4gICAgbWFyZ2luOiAxMHB4IDtcbn1cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuLml0ZW1fbmFtZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IzM1MzUzNWE5O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG5cbn1cblxuLnNpbmdsZV9jaGF0XzF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDk0ODQ4YTkgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAxMHB4IDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMTVweCAxNXB4IDtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZsb2F0OnJpZ2h0O1xuXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNpbmdsZV9jaGF0XzJ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMTVweCA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2hhdF9mb290ZXIgaW9uLWl0ZW0ge1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM1MzUzNWE5O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBcbn1cblxuLmNoYXRfZm9vdGVyIC5zZW5kLWljb257XG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAgMTBweDtcbiAgICBtYXJnaW4tdG9wOiAgNSU7XG4gICAgXG59XG4uY2hhdF9mb290ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNoYXRfZm9vdGVyIGlvbi1jb2x7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5hcHByb3ZlX3JlamVjdF9idG4gaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogOTUlO1xuICAgXG59XG4uYXBwcm92ZV9yZWplY3RfYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnNpbmdsZV9jaGF0XzEgLCAuc2luZ2xlX2NoYXRfMntcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAycHggIWltcG9ydGFudDtcbn1cblxuLnNpbmdsZV9jaGF0XzF7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDg0OGE5ICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweCA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDEwcHggMTBweCA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDpyaWdodDtcblxuICAgXG59XG5cbi5zaW5nbGVfY2hhdF8ye1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlYTViICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMTBweCA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIFxufVxuXG4ubWVzc2FnZS1jb250YWluZXIgeyBcbiAgICAvLyBoZWlnaHQ6IDczNnB4O1xuXG4gICAgbWFyZ2luIDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87IFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ 27146:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/single-chat/single-chat.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\" *ngIf=\"AppUser == chatUserDetails.oid\"> {{chatUserDetails.mnickname}}</ion-title>\n\n    <ion-title color=\"secondary\" *ngIf=\"AppUser != chatUserDetails.oid\"> {{chatUserDetails.oname_ar}} _ {{chatUserDetails.oname_en}}</ion-title>\n\n  </ion-toolbar>\n  <div class=\"item_name\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <img [src]=\"chatUserDetails.iimage\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"10\" style=\"padding: 20px;\"> {{applang == 'ar' ? chatUserDetails.ititle_ar : chatUserDetails.ititle_en }}  </ion-col>\n    </ion-row>\n  </div>\n</ion-header>\n\n\n<ion-content class=\"profile_content\">\n \n  <div class=\"d-flex flex-column\" style=\"maring: 0 !important;\">\n    <div  [style.height]= \"mesaageconentHeight\" class=\"  message-container\" #messageContainer>\n      <div class=\"message\" *ngFor=\"let message of MyChatArr\">\n        <div class=\"badge rouned-pill bg-light text-dark p-3 mt-1 mb-1\">\n          <div  [ngClass]=\"  (message.Isadmin == 0 ) ?  'single_chat_1': 'single_chat_2'\"  lines=\"none\"  >\n            <ion-label>\n              <p style=\"color: black;\" >{{message.Text}}</p>\n              <img *ngIf=\"message.Image != 'https://drbakndillah.com/Api/uploads/'\" [src]=\"message.Image\" alt=\"\" style=\"height: 200px; width: 200px;\"> \n              <p>{{message.Sysdate}}</p>\n            </ion-label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container row\">\n      <form [formGroup]=\"frmMessage\" (ngSubmit)=\"send()\">\n      </form>        \n    </div>\n  </div>\n  \n  \n  \n  </ion-content>\n\n\n<!-- <ion-content class=\"profile_content\"  [scrollEvents]=\"true\" \n(ionScrollStart)=\"logScrollStart($event)\" \n(ionScroll)=\"logScrolling($event)\"\n(ionScrollEnd)=\"logScrollEnd($event)\">\n\n  <div>\n    <div>\n    </div>\n    <ion-list>  \n      <ion-row>\n        <ion-col size=\"12\" *ngFor=\"let i of MyChatArr\">  \n          <ion-item   [ngClass]=\"  (AppUser == i.User_id ) ?  'single_chat_1': 'single_chat_2'\"  lines=\"none\"  >\n              <p style=\"color: black;\" >{{i.Text}}</p>\n              <img *ngIf=\"i.Image != 'https://drbakndillah.com/Api/uploads/'\" [src]=\"i.Image\" alt=\"\" style=\"height: 200px; width: 200px;\"> \n              <p>{{i.Sysdate}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n\n</ion-content> -->\n<ion-footer class=\"ion-no-border chat_footer\">\n  <ion-toolbar>\n    <div *ngIf=\" (AppUser == chatUserDetails.oid) && (chatUserDetails.ostatus_en) == 'new' \"  >\n      <ion-row class=\"approve_reject_btn\">\n        <ion-col size=\"6\">\n          <ion-button (click)=\"changeState('approved'  ,  'معتمد' )\" expand=\"block\" shape=\"round\">\n            {{'Approved_chat'|translate}}\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"changeState('rejected'  , 'مرفوص')\" expand=\"block\" shape=\"round\">\n            {{'Reject'|translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row>\n      <ion-col size=\"12\" >\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [placeholder]=\"'Type Your Message Here ...'|translate\"  [(ngModel)]=\"chattext\"></ion-input>\n\n          <ion-icon (click)=\"selectImagefromphone()\" slot=\"end\" color=\"primary\" size=\"large\" name=\"attach\"></ion-icon>\n        </ion-item>\n          <ion-icon   size=\"large\"   color=\"primary\" class=\"send-icon\" name=\"send\" (click)=\"Upload_text()\" ></ion-icon>\n         \n        </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_single-chat_single-chat_module_ts.js.map