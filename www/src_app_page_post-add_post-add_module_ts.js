(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_post-add_post-add_module_ts"],{

/***/ 1090:
/*!**********************************************************!*\
  !*** ./src/app/page/post-add/post-add-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAddPageRoutingModule": () => (/* binding */ PostAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _post_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-add.page */ 95017);




const routes = [
    {
        path: '',
        component: _post_add_page__WEBPACK_IMPORTED_MODULE_0__.PostAddPage
    }
];
let PostAddPageRoutingModule = class PostAddPageRoutingModule {
};
PostAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostAddPageRoutingModule);



/***/ }),

/***/ 44025:
/*!**************************************************!*\
  !*** ./src/app/page/post-add/post-add.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAddPageModule": () => (/* binding */ PostAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _post_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-add-routing.module */ 1090);
/* harmony import */ var _post_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-add.page */ 95017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let PostAddPageModule = class PostAddPageModule {
};
PostAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _post_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostAddPageRoutingModule
        ],
        declarations: [_post_add_page__WEBPACK_IMPORTED_MODULE_1__.PostAddPage]
    })
], PostAddPageModule);



/***/ }),

/***/ 95017:
/*!************************************************!*\
  !*** ./src/app/page/post-add/post-add.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostAddPage": () => (/* binding */ PostAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-add.page.html */ 50535);
/* harmony import */ var _post_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-add.page.scss */ 22194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 61957);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68939);








// import { PlaceApiPage } from '../../place-api/place-api.page'; 




let PostAddPage = class PostAddPage {
    constructor(alertController, translate, navCtrl, modalController, http, loadingCtrl, loadingController, actionSheetController, photoService, toastController) {
        this.alertController = alertController;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.photoService = photoService;
        this.toastController = toastController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';
        this.Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';
        this.selected_image_name = 'imgName';
        this.userlong = "";
        this.userlat = "";
        this.item = { "type": "Item", };
        this.images = [];
        this.imagaUploaded = 0;
        this.ClickToSetLocation = 0;
        this.usersData = {
            "name_ar": "",
            "name_en": "",
            "discription_ar": "",
            "discription_en": "",
            "date": "",
            "link": "",
            "User_id": "",
            "item_image": ""
        };
        this.today = new Date().toJSON().split('T')[0];
        this.Selected_language_direction();
        this.seleted_days = 15;
        this.Set_price_days();
    }
    ngOnInit() {
    }
    Set_price_days() {
        if (this.seleted_days == 15) {
            this.seleted_days_price = '10';
        }
        if (this.seleted_days == 30) {
            this.seleted_days_price = '15';
        }
        if (this.seleted_days == 180) {
            this.seleted_days_price = '60';
        }
        if (this.seleted_days == 360) {
            this.seleted_days_price = '100';
        }
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.applang = JSON.parse(language.value);
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
        });
    }
    selectImagefromphone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGallery().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    OpenImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGalleryFromPhone().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    LoadIMG() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.loadSaved().then((sucess) => {
                console.log(sucess);
                //console.log(sucess[0].webviewPath);
                console.log("sucess[0].webviewPath" + JSON.stringify(sucess[0]));
                this.uploadIMGintoServer(sucess[0].webviewPath, sucess[0].filepath);
                // this.IdCardImage = sucess[0].webviewPath.substring(sucess[0].filepath.lastIndexOf('/') + 1);
                var imgName = sucess[0].filepath.substring(sucess[0].filepath.lastIndexOf('/') + 1);
                //this.IdCardImage = "https://drbakndillah.com/Api/uploads/"+imgName;
                //   this.IdCardImage = "https://drbakndillah.com/Api/uploads/"+imgName;
                //this.IdCardImage = sucess[0].webviewPath;
                console.log("IdCardImage" + this.IdCardImage);
            }).catch((error) => {
            });
        });
    }
    // Upload the formData to our API
    uploadData(formData, name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
            // message: 'Uploading image...',
            });
            yield loading.present();
            // Use your own API!
            const url = 'https://drbakndillah.com/Api/upload.php';
            this.http.post(url, formData)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                loading.dismiss();
                if (res['success']) {
                    var imgName = name.substring(name.lastIndexOf('/') + 1);
                    console.log('name' + name);
                    this.IdCardImage = "https://drbakndillah.com/Api/uploads/" + imgName;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(imageBase64);
            const blob = yield response.blob();
            const formData = new FormData();
            formData.append('file', blob, name);
            this.uploadData(formData, name);
            console.log('name' + name);
            this.usersData.item_image = name;
            this.selected_image_name = name;
        });
    }
    Add_btn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let message;
            let Cancel;
            let Okay;
            this.translate.get('Add Advertisement').subscribe(value => { header = value; });
            this.translate.get('Add message_Advertisement').subscribe(value => { message = value; });
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            this.translate.get('ok').subscribe(value => { Okay = value; });
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: [
                    {
                        text: Cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                            this.navCtrl.navigateForward('/tabs/map');
                        }
                    }, {
                        text: Okay,
                        handler: () => {
                            console.log('Confirm Okay');
                            this.usersData.name_ar = '';
                            this.usersData.name_en = '';
                            this.usersData.discription_ar = '';
                            this.usersData.discription_en = '';
                            this.usersData.date = '';
                            this.usersData.link = '';
                            this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    Upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let Fill_ALl_requird_details_package = 'Fill ALl requird details';
            let subscrition_Done_succeefully = 'subscrition_Done_succeefully';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; });
            this.translate.get('subscrition_Done_succeefully').subscribe(value => { subscrition_Done_succeefully = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            // Access upload img method
            this.imagaUploaded = 0;
            if (this.selected_image_name == 'imgName') {
                this.presentToast(error_uploading_car_card_id);
            }
            else {
                this.imagaUploaded = 1;
            }
            // this.itemData.Image = this.images[0].name;
            if (this.imagaUploaded == 0) {
                this.usersData.item_image = 'applogo.png';
            }
            //  insert data in DB 
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            this.usersData.User_id = JSON.parse(userId.value);
            if (this.usersData.name_ar == '' || this.usersData.name_en == '' || this.usersData.discription_ar == '' || this.usersData.discription_en == '' || this.usersData.link.trim() == '' || this.usersData.date.substring(0, 10) == '') {
                this.presentToast(Fill_ALl_requird_details_package);
                return;
            }
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            let url = this.Api_URL + 'insertintoadds.php?Title_ar=' + this.usersData.name_ar.trim() + '&Title_en=' + this.usersData.name_en.trim() + '&Description_ar=' + this.usersData.discription_ar.trim() + '&Description_en=' + this.usersData.discription_en.trim() + '&Image=' + this.usersData.item_image + '&Start_date=' + this.usersData.date.substring(0, 10) + '&Price=' + this.seleted_days_price + '&Period_ar=' + this.seleted_days + '&Period_en=' + this.seleted_days + '&URL_link=' + this.usersData.link + '&User_id=' + this.usersData.User_id;
            // let url = this.Api_URL + 'insertInToItem.php?Image=' + this.usersData.item_image + '&Max_price_delivery=' + this.usersData.price  + '&Type=' + this.item.type + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Title_ar='+this.usersData.itemname_ar.trim() +'&Title_en=' + this.usersData.itemname_en.trim()  + '&Other_note=' + this.usersData.note.trim()  + '&Maximin_time=' + this.usersData.time.substring(11, 16)  + '&Maximin_date=' + this.usersData.date.substring(0, 10) + '&Log=' + this.usersData.log + '&Lat=' + this.usersData.Lat + '&Item_status=new&User_id=' + this.usersData.User_id;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id); k
                //console.log(response[0].response);
                loading.dismiss();
                if (retrivedResponse.response == 'error') {
                    // this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (retrivedResponse[0].response == 'success') {
                    console.log(retrivedResponse.uid);
                    this.Add_btn();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
};
PostAddPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
PostAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-post-add',
        template: _raw_loader_post_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostAddPage);



/***/ }),

/***/ 22194:
/*!**************************************************!*\
  !*** ./src/app/page/post-add/post-add.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".additem_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.additem_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.additem_content div {\n  margin: 15px;\n}\n\n.additem_content h3 {\n  margin-bottom: 30px;\n}\n\n.additem_content div div ion-icon {\n  font-size: 150px;\n  background-color: #faf5a7;\n  padding: 0 100px;\n  border: 4px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-list ion-label {\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.additem_content ion-list ion-radio-group ion-row ion-label {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.additem_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.additem_footer ion-button {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBRUksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBT0E7RUFFSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFMSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTko7O0FBV0E7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUE7RUFFSSxlQUFBO0FBWEo7O0FBZUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVBO0VBQ0ksWUFBQTtBQVpKIiwiZmlsZSI6InBvc3QtYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRpdGVtX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4gXG5cbi5hZGRpdGVtX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxufVxuXG5cbi5hZGRpdGVtX2NvbnRlbnQgZGl2e1xuICAgXG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG4uYWRkaXRlbV9jb250ZW50ICBoM3tcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG59XG4uYWRkaXRlbV9jb250ZW50IGRpdiBkaXYgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmNWE3O1xuICAgIHBhZGRpbmc6IDAgMTAwcHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYWRkaXRlbV9jb250ZW50ICBpb24tbGlzdCBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcblxufVxuXG4uYWRkaXRlbV9jb250ZW50IGlvbi1saXN0IGlvbi1yYWRpby1ncm91cCBpb24tcm93IGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuXG59XG4gIFxuXG4uYWRkaXRlbV9jb250ZW50IGlvbi1jYXJke1xuIFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNTM1MzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgXG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgaW9uLWNhcmQgaW9uLWNvbHtcbiAgXG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbi5hZGRpdGVtX2Zvb3RlciBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgXG59XG5cbiBcbiJdfQ== */");

/***/ }),

/***/ 50535:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/post-add/post-add.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"additem_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" ></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Post Advertisement'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"additem_content\">\n  <div>\n    <ion-list> \n      <div  align=\"center\" (click)=\"selectImagefromphone()\"> \n \n        <img  style=\"border: 2px solid black; border-radius: 10px;\" [src]=\"IdCardImage\" width=\"90%\" height=\"150px\"  alt=\"\">\n      </div>\n\n        <!-- Item Name (Arabic)\n        Item Name (English) -->\n  \n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"text\"></ion-icon>\n          <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input type=\"text\" [placeholder]=\"'Title (Arabic)'|translate\"  [(ngModel)]=\"usersData.name_ar\" ></ion-input>\n        </ion-item> \n       \n        \n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\"  name=\"text\"></ion-icon>\n          <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-input type=\"text\" [placeholder]=\"'Title (English)'|translate\"  [(ngModel)]=\"usersData.name_en\" ></ion-input>\n        </ion-item> \n  \n  \n        <ion-item lines=\"none\">\n  \n          <ion-icon  slot=\"start\" name=\"alert-circle\"></ion-icon>\n          <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-textarea  [placeholder]=\"'Description (Arabic)'|translate\"  [(ngModel)]=\"usersData.discription_ar\"></ion-textarea>\n        </ion-item>\n              \n        \n        <ion-item lines=\"none\">\n        \n          <ion-icon  slot=\"start\" name=\"alert-circle\"></ion-icon>\n          <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n          <ion-textarea  [placeholder]=\"'Description (English)'|translate\"  [(ngModel)]=\"usersData.discription_en\" ></ion-textarea>\n        </ion-item>\n               \n      \n    \n      <ion-item lines=\"none\"> \n        <ion-icon slot=\"start\"  name=\"today\"></ion-icon> \n        <ion-select  multiple=\"false\"   interface=\"action-sheet\" [(ngModel)]=\"seleted_days\" (ionChange)=\"Set_price_days()\"  [placeholder]=\"'Select Add Period'|translate\">\n          <ion-select-option value=\"15\">15 {{'days'|translate}}</ion-select-option> \n          <ion-select-option value=\"30\">30 {{'days'|translate}}</ion-select-option> \n          <ion-select-option value=\"180\">180 {{'days'|translate}}</ion-select-option> \n          <ion-select-option value=\"360\">360 {{'days'|translate}}</ion-select-option> \n        </ion-select>\n      </ion-item> \n   \n    <ion-item lines=\"none\"> \n      <ion-icon slot=\"start\"  name=\"calendar\"></ion-icon>\n      <ion-datetime  [placeholder]=\"'Start Date'|translate\" display-format=\"DD.MM.YYYY\" [min]=\"today\"  [(ngModel)]=\"usersData.date\" ></ion-datetime>\n    </ion-item>\n\n     \n    <ion-item lines=\"none\">\n        \n      <ion-icon  slot=\"start\" name=\"link\"></ion-icon>\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-input type=\"text\" [placeholder]=\"'Website Link'|translate\"   [(ngModel)]=\"usersData.link\" ></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\"> \n      <ion-icon slot=\"start\"  name=\"logo-usd\"></ion-icon>\n      \n      <ion-label style=\"font-size: medium;\">{{'Adds cost'|translate}}  {{seleted_days_price}} {{'OMR for'|translate}} {{seleted_days}} {{'days'|translate}}</ion-label>\n    </ion-item>\n  \n    </ion-list>\n    <ion-button  (click)=\"Upload()\" expand=\"block\"  color=\"primary\" shape=\"round\">\n      {{'Send'|translate}} \n    </ion-button>\n  </div>\n\n</ion-content>\n\n\n<ion-footer class=\"additem_footer ion-no-border\" >\n  <ion-toolbar>\n    <ion-button  [routerLink]=\"['/tabs/map']\" size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Go To Home'|translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_post-add_post-add_module_ts.js.map