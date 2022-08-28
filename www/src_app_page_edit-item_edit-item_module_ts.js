(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_edit-item_edit-item_module_ts"],{

/***/ 47083:
/*!************************************************************!*\
  !*** ./src/app/page/edit-item/edit-item-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemPageRoutingModule": () => (/* binding */ EditItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-item.page */ 79401);




const routes = [
    {
        path: '',
        component: _edit_item_page__WEBPACK_IMPORTED_MODULE_0__.EditItemPage
    }
];
let EditItemPageRoutingModule = class EditItemPageRoutingModule {
};
EditItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditItemPageRoutingModule);



/***/ }),

/***/ 10795:
/*!****************************************************!*\
  !*** ./src/app/page/edit-item/edit-item.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemPageModule": () => (/* binding */ EditItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-item-routing.module */ 47083);
/* harmony import */ var _edit_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-item.page */ 79401);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let EditItemPageModule = class EditItemPageModule {
};
EditItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditItemPageRoutingModule
        ],
        declarations: [_edit_item_page__WEBPACK_IMPORTED_MODULE_1__.EditItemPage]
    })
], EditItemPageModule);



/***/ }),

/***/ 79401:
/*!**************************************************!*\
  !*** ./src/app/page/edit-item/edit-item.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditItemPage": () => (/* binding */ EditItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-item.page.html */ 27556);
/* harmony import */ var _edit_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-item.page.scss */ 51529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _place_api_place_api_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../place-api/place-api.page */ 68501);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/photo.service */ 61957);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);









// import { PlaceApiPage } from '../../place-api/place-api.page'; 





const IMAGE_DIR = 'stored-images';
let EditItemPage = class EditItemPage {
    constructor(route, router, navCtrl, actionSheetController, modalController, alertController, translate, http, plt, loadingCtrl, toastCtrl, photoService) {
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.translate = translate;
        this.http = http;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.photoService = photoService;
        this.item = { "type": "item", };
        this.today = Date.now();
        this.imagaUploaded = 0;
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uplodadIcon.png';
        this.Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.IdCardImageView = 1;
        this.images = [];
        this.selected_image_name = 'imgName';
        // type => Passenger , type => Item
        this.inputItemName_ar = "Item Name (Arabic)";
        this.inputItemName_en = "Item Name (English)";
        this.itemData = {
            "Country_id": "",
            "Governate_id": "",
            "City_id": "",
            "Image": "",
            "Max_price_delivery": "",
            "Type": "",
            "Title_ar": "",
            "Title_en": "",
            "Other_note": "",
            "Maximin_time": "",
            "Maximin_date": "",
            "Item_status": "new",
            "Log": "",
            "Lat": "",
            "User_id": "",
            "token": "",
            "itemID": ""
        };
        this.userlong = "";
        this.userlat = "";
        this.Selected_language_direction();
        this.countryCode();
        if (router.getCurrentNavigation().extras.state) {
            this.Details = this.router.getCurrentNavigation().extras.state;
            console.log("Details" + JSON.stringify(this.Details));
            console.log("Details" + JSON.stringify(this.Details.itemID));
            this.itemData.itemID = (this.Details.itemID);
            this.itemData.Image = (this.Details.Image);
            this.itemData.Max_price_delivery = (this.Details.Max_price_delivery);
            this.itemData.Type = (this.Details.Type);
            this.itemData.Title_ar = (this.Details.Title_ar);
            this.itemData.Title_en = (this.Details.Title_en);
            this.itemData.Other_note = (this.Details.Other_note);
            this.itemData.Maximin_time = (this.Details.Maximin_time);
            this.itemData.Maximin_date = (this.Details.Maximin_date);
            this.itemData.Item_status = (this.Details.Item_status);
            this.itemData.Log = (this.Details.Log);
            this.itemData.Lat = (this.Details.Lat);
            this.itemData.User_id = (this.Details.User_id);
            this.itemData.token = (this.Details.token);
            this.IdCardImage = this.Details.Image;
        }
    }
    ngOnInit() {
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
    selectImagefromphone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGallery().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    OpenImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGalleryFromPhone().then((success) => {
                console.log("Sucess");
                this.LoadIMG();
            }).catch((error) => {
                console.log("Error");
            });
        });
    }
    LoadIMG() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
            // message: 'Uploading image...',
            });
            yield loading.present();
            // Use your own API!
            const url = 'https://drbakndillah.com/Api/upload.php';
            this.http.post(url, formData)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(imageBase64);
            const blob = yield response.blob();
            const formData = new FormData();
            formData.append('file', blob, name);
            this.uploadData(formData);
            console.log('name' + name);
            this.itemData.Image = name;
            this.selected_image_name = name;
        });
    }
    Upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let Fill_ALl_requird_details_package = 'Fill ALl requird details';
            let updatedsuccessfully = 'updatedsuccessfully';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; });
            this.translate.get('updatedsuccessfully').subscribe(value => { updatedsuccessfully = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            // this.imagaUploaded = 0;
            // if (this.selected_image_name == 'imgName') {
            //   this.presentToast(error_uploading_car_card_id);
            // } else {
            //   this.imagaUploaded = 1;
            // }
            // if (this.imagaUploaded == 0) { this.itemData.Image = 'applogo.png'; }
            // //  insert data in DB 
            this.itemData.Type = this.item.type;
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            // console.log(JSON.parse(userId.value)); 
            this.itemData.User_id = JSON.parse(userId.value);
            if (this.userlat == '' || this.userlong == '') {
                const log = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'log' });
                // console.log(JSON.parse(log.value)); 
                this.itemData.Log = JSON.parse(log.value);
                const Lat = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Lat' });
                // console.log(JSON.parse(Lat.value)); 
                this.itemData.Lat = JSON.parse(Lat.value);
            }
            if (this.itemData.Governate_id == undefined || this.itemData.City_id == undefined) {
                this.presentToast(Fill_ALl_requird_details_package);
            }
            this.itemData.Maximin_date = this.itemData.Maximin_date.substring(0, 10);
            this.itemData.Maximin_time = this.itemData.Maximin_time.substring(11, 16);
            ///////////////////////////////////////////////////////////
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            let url = this.Api_URL + "updateItem.php?id=" + this.itemData.itemID + "&Max_price_delivery=" + this.itemData.Max_price_delivery + "&Type=" + this.itemData.Type + "&Governate_id=" + this.itemData.Governate_id + "&City_id=" + this.itemData.City_id + "&Title_ar=" + this.itemData.Title_ar + "&Title_en= " + this.itemData.Title_en + "&Other_note=" + this.itemData.Other_note + "&Maximin_time=" + this.itemData.Maximin_time + "&Maximin_date=" + this.itemData.Maximin_date + "&Log=" + this.itemData.Log + "&Lat=" + this.itemData.Lat;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                //   // console.log('response'+response.id);
                //   //console.log(response[0].response);
                loading.dismiss();
                if (retrivedResponse.response == 'error') {
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (retrivedResponse.response == 'success') {
                    //console.log(retrivedResponse.uid);
                    this.presentToast(updatedsuccessfully);
                    this.navCtrl.navigateForward('/tabs/map');
                    return;
                }
            }, (error) => {
            });
        });
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
            this.translate.get('Item Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; });
            this.translate.get('Item Name (English)').subscribe(value => { this.inputItemName_en = value; });
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _place_api_place_api_page__WEBPACK_IMPORTED_MODULE_3__.PlaceApiPage,
                componentProps: {
                    "paramID": 123,
                    "paramTitle": "Test Title"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    // alert('Modal Sent Data :'+ JSON.stringify(dataReturned));
                    console.log(dataReturned.data);
                    // console.log(JSON.parse(dataReturned.data.Latitude));
                    // {"latitude":23.593273300000003,"longitude":58.4447587,"countryCode":"OM","countryName":"Oman","postalCode":"",
                    // "administrativeArea":"Muscat Governorate","subAdministrativeArea":"","locality":"Muscat","subLocality":"Al Khuwayr South",
                    // "thoroughfare":"","subThoroughfare":"","areasOfInterest":["Maktabi Building"]}
                    this.userlocation = JSON.stringify(dataReturned.data.Selected_address);
                    // this.userlat = JSON.stringify(dataReturned.data.Latitude);
                    // console.log(this.userlat);
                    this.userlat = JSON.parse(dataReturned.data.Latitude);
                    this.itemData.Lat = this.userlat;
                    console.log(this.userlat);
                    this.userlong = JSON.parse(dataReturned.data.Longitude);
                    this.itemData.Log = this.userlong;
                    console.log(this.userlong);
                }
            });
            return yield modal.present();
        });
    }
    countryCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
            this.http.get('https://drbakndillah.com/Api/getGovernateById.php?ID=1').subscribe((response) => {
                console.log(response);
                this.governateArr = response;
                loading.dismiss();
            }, (error) => {
                console.log(error);
            });
        });
    }
    governateIdSelected(selectedValue) {
        this.itemData.Governate_id = selectedValue.detail.value;
        this.itemData.City_id = '';
        console.log(selectedValue.detail.value);
        this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + this.itemData.Governate_id).subscribe((response) => {
            console.log(response);
            this.cityArr = response;
        }, (error) => {
            console.log(error);
        });
    }
    cityIdSelected(selectedValue) {
        this.itemData.City_id = selectedValue;
        console.log(this.itemData.City_id);
    }
    radioChecked() {
        let inputItemName_ar_1;
        let inputItemName_en_1;
        let inputItemName_ar_2;
        let inputItemName_en_2;
        if (this.item.type == 'passenger') {
            this.translate.get('Passenger Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; });
            this.translate.get('Passenger Name (English)').subscribe(value => { this.inputItemName_en = value; });
        }
        else {
            this.translate.get('Item Name (Arabic)').subscribe(value => { this.inputItemName_ar = value; });
            this.translate.get('Item Name (English)').subscribe(value => { this.inputItemName_en = value; });
        }
    }
};
EditItemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
EditItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-edit-item',
        template: _raw_loader_edit_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditItemPage);



/***/ }),

/***/ 51529:
/*!****************************************************!*\
  !*** ./src/app/page/edit-item/edit-item.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".additem_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.additem_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.additem_content div {\n  margin: 15px;\n}\n\n.additem_content h3 {\n  margin-bottom: 30px;\n}\n\n.additem_content div div ion-icon {\n  font-size: 150px;\n  background-color: #faf5a7;\n  padding: 0 100px;\n  border: 4px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-list ion-label {\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.additem_content ion-list ion-radio-group ion-row ion-label {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.additem_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.additem_footer ion-button {\n  margin: 20px;\n}\n\n.uploadIMG {\n  height: 160px;\n  width: 90%;\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFJQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUZKOztBQU9BO0VBRUksWUFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVdBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQVRKOztBQWFBO0VBRUksZUFBQTtBQVhKOztBQWVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFaSjs7QUFlQTtFQUNJLFlBQUE7QUFaSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVpKIiwiZmlsZSI6ImVkaXQtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkaXRlbV9oZWFkZXJ7XG5cbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xufVxuIFxuXG4uYWRkaXRlbV9jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbn1cblxuXG4uYWRkaXRlbV9jb250ZW50IGRpdntcbiAgIFxuICAgIG1hcmdpbjogMTVweDtcbn1cblxuLmFkZGl0ZW1fY29udGVudCAgaDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxufVxuLmFkZGl0ZW1fY29udGVudCBkaXYgZGl2IGlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjVhNztcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMzNTM1MzU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmFkZGl0ZW1fY29udGVudCAgaW9uLWxpc3QgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cblxuLmFkZGl0ZW1fY29udGVudCBpb24tbGlzdCBpb24tcmFkaW8tZ3JvdXAgaW9uLXJvdyBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcblxufVxuICBcblxuLmFkZGl0ZW1fY29udGVudCBpb24tY2FyZHtcbiBcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgIFxufVxuXG4uYWRkaXRlbV9jb250ZW50IGlvbi1jYXJkIGlvbi1jb2x7XG4gIFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4uYWRkaXRlbV9mb290ZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIFxufVxuLnVwbG9hZElNR3tcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM1MzUzNSA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXG59XG5cbiBcbiJdfQ== */");

/***/ }),

/***/ 27556:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/edit-item/edit-item.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"additem_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'Edit Item / Passenger' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"additem_content\">\n  <div> \n    <ion-list>\n      <div align=\"center\">\n        <!-- <ion-icon width=\"90%\" height=\"200px\"  name=\"cloud-upload\"></ion-icon> -->\n        <!-- <img class=\"uploadIMG\" src=\"../../../assets/icon/uploadIcon.png\" alt=\"\"> -->\n        <div>\n          <div>\n\n            <!-- <ion-label> {{'Click to Upload Car ID Card'|translate}} </ion-label> -->\n            <div align=\"center\">\n              <!-- <img src=\"../../../assets/icon/car_card_id.png\" width=\"90%\" height=\"200px\"  alt=\"\">\n    <img class=\"uploadIMG\"  *ngIf='IdCardImageView == 1'  src=\"../../../assets/icon/uploadIcon.png\" width=\"90%\" height=\"200px\"  alt=\"\">\n  <div  *ngIf='IdCardImageView == 0' >\n    <ion-img class=\"uploadIMG\" *ngFor=\"let file of images; let i = index\" [src]=\"file.data\" width=\"90%\" height=\"200px\" ></ion-img>\n  </div> -->\n\n\n              <!-- <div (click)=\"selectImagefromphone()\">\n                <div align=\"center\">\n                   <img class=\"uploadIMG\" [src]=\"IdCardImage\" width=\"100%\" height=\"200px\" alt=\"\">\n\n                </div>\n\n              </div> -->\n \n            </div>\n          </div>\n        </div>\n\n      </div>\n      <ion-radio-group name=\"auto\" (ionChange)=\"radioChecked()\" [(ngModel)]=\"item.type\">\n        <ion-list-header>\n          <ion-label>{{Type|translate}} </ion-label>\n        </ion-list-header>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>{{'Item' |translate}}</ion-label>\n              <ion-radio value=\"item\"></ion-radio>\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>{{'Passenger' |translate}}</ion-label>\n              <ion-radio value=\"passenger\"></ion-radio>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <!-- Item Name (Arabic)\n        Item Name (English) -->\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n        <ion-input type=\"text\" [(ngModel)]=\"itemData.Title_ar\" [placeholder]=\"inputItemName_ar\" aria-required=\"please added\" ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n        <ion-input type=\"text\" [(ngModel)]=\"itemData.Title_en\" [placeholder]=\"inputItemName_en\"></ion-input>\n      </ion-item>\n\n\n      <!-- //////////////////////////////// -->\n\n\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label> {{'Goverate'|translate}}</ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select multiple=\"false\" [(ngModel)]=\"itemData.Governate_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to Goverate'|translate\" (ionChange)=\"governateIdSelected($event)\">\n          <ion-select-option *ngFor=\"let governate of governateArr \" [value]=\"governate.Id\">{{applang == 'ar' ?\n            governate.Name_ar : governate.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label>{{'City'|translate}} </ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select value=\"city\" multiple=\"false\" [(ngModel)]=\"itemData.City_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to  City'|translate\">\n          <ion-select-option *ngFor=\"let city of cityArr \" [value]=\"city.Id\" (ionChange)=\"cityIdSelected(city.Id)\">\n            {{applang == 'ar' ? city.Name_ar : city.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon>\n        <ion-input type=\"number\" [(ngModel)]=\"itemData.Max_price_delivery\" [placeholder]=\"'Price Delivery'|translate\">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n        <ion-datetime [(ngModel)]=\"itemData.Maximin_date\" [placeholder]=\"'Maximum Date'|translate\"\n          display-format=\"DD.MM.YYYY\"></ion-datetime>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n        <ion-datetime [(ngModel)]=\"itemData.Maximin_time\" [placeholder]=\"'Maximum Time'|translate\"\n          display-format=\"HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>\n        <ion-textarea [(ngModel)]=\"itemData.Other_note\" [placeholder]=\"'Other note'|translate\"></ion-textarea>\n      </ion-item>\n\n\n      <ion-item lines=\"none\" (click)=\"presentModal()\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        <div>\n          {{'Click to Enter your address on the map'|translate}}<br>\n          {{userlocation}}\n\n        </div>\n      </ion-item>\n\n\n    </ion-list>\n    <ion-button (click)=\"Upload()\" expand=\"block\" color=\"primary\" shape=\"round\">\n      {{'Add'|translate}}\n    </ion-button>\n  </div>\n\n</ion-content>\n\n\n<!-- <ion-footer class=\"additem_footer ion-no-border\" >\n  <ion-toolbar>\n    <ion-button  [routerLink]=\"['/tabs/map']\" size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Go To Home'|translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_page_edit-item_edit-item_module_ts.js.map