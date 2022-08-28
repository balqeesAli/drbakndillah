(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_add-item_add-item_module_ts"],{

/***/ 70956:
/*!**********************************************************!*\
  !*** ./src/app/page/add-item/add-item-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemPageRoutingModule": () => (/* binding */ AddItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item.page */ 80403);




const routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_0__.AddItemPage
    }
];
let AddItemPageRoutingModule = class AddItemPageRoutingModule {
};
AddItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddItemPageRoutingModule);



/***/ }),

/***/ 88918:
/*!**************************************************!*\
  !*** ./src/app/page/add-item/add-item.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemPageModule": () => (/* binding */ AddItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item-routing.module */ 70956);
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.page */ 80403);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let AddItemPageModule = class AddItemPageModule {
};
AddItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddItemPageRoutingModule
        ],
        declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_1__.AddItemPage]
    })
], AddItemPageModule);



/***/ }),

/***/ 80403:
/*!************************************************!*\
  !*** ./src/app/page/add-item/add-item.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddItemPage": () => (/* binding */ AddItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-item.page.html */ 41768);
/* harmony import */ var _add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.page.scss */ 35068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _place_api_place_api_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../place-api/place-api.page */ 68501);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/photo.service */ 61957);









// import { PlaceApiPage } from '../../place-api/place-api.page'; 




const IMAGE_DIR = 'stored-images';
let AddItemPage = class AddItemPage {
    constructor(navCtrl, actionSheetController, modalController, alertController, translate, http, plt, loadingCtrl, toastCtrl, photoService) {
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
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';
        //IdCardImage: any ='https://drbakndillah.com/Api/uploads/1657713550189.jpeg';
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
            "User_id": ""
        };
        this.userlong = "";
        this.userlat = "";
        this.Selected_language_direction();
        this.countryCode();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const response = yield fetch(imageBase64);
            const blob = yield response.blob();
            const formData = new FormData();
            formData.append('file', blob, name);
            this.uploadData(formData, name);
            console.log('name' + name);
            this.itemData.Image = name;
            this.selected_image_name = name;
        });
    }
    Upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let Fill_ALl_requird_details_package = 'Fill ALl requird details';
            let subscrition_Done_succeefully = 'subscrition_Done_succeefully';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; });
            this.translate.get('subscrition_Done_succeefully').subscribe(value => { subscrition_Done_succeefully = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            this.imagaUploaded = 0;
            if (this.selected_image_name == 'imgName') {
                this.presentToast(error_uploading_car_card_id);
            }
            else {
                this.imagaUploaded = 1;
            }
            // this.itemData.Image = this.images[0].name;
            if (this.imagaUploaded == 0) {
                this.itemData.Image = 'applogo.png';
            }
            // }
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
            this.itemData.Maximin_date = this.itemData.Maximin_date.substring(0, 10);
            this.itemData.Maximin_time = this.itemData.Maximin_time.substring(11, 16);
            console.log("Type" + this.itemData.Type);
            console.log("Country_id" + this.itemData.Country_id);
            console.log("Governate_id" + this.itemData.Governate_id);
            console.log("City_id" + this.itemData.City_id);
            console.log("Image" + this.itemData.Image);
            console.log("Max_price_delivery" + this.itemData.Max_price_delivery);
            console.log("Title_ar" + this.itemData.Title_ar);
            console.log("Title_en" + this.itemData.Title_en);
            console.log("Other_note" + this.itemData.Other_note);
            console.log("Maximin_time" + this.itemData.Maximin_time);
            console.log("Maximin_date" + this.itemData.Maximin_date);
            console.log("Log" + this.itemData.Log);
            console.log("Lat" + this.itemData.Lat);
            console.log("User_id" + this.itemData.User_id);
            if (this.itemData.Governate_id == undefined || this.itemData.City_id == undefined || this.itemData.Max_price_delivery == '' || this.itemData.Title_ar == '' || this.itemData.Title_en == '' || this.itemData.Maximin_date == '') {
                const toast = yield this.toastCtrl.create({
                    message: Fill_ALl_requird_details_package,
                    duration: 2000
                });
                toast.present();
                return;
            }
            ///////////////////////////////////////////////////////////
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            let url = this.Api_URL + "insertInToItem.php?Image=" + this.itemData.Image + "&Max_price_delivery=" + this.itemData.Max_price_delivery + "&Type=" + this.itemData.Type + "&Country_id=1&Governate_id=" + this.itemData.Governate_id + "&City_id=" + this.itemData.City_id + "&Title_ar=" + this.itemData.Title_ar + "&Title_en=" + this.itemData.Title_en + "&Other_note=" + this.itemData.Other_note + "&Maximin_time=" + this.itemData.Maximin_time + "&Maximin_date=" + this.itemData.Maximin_date + "&Log=" + this.itemData.Log + "&Lat=" + this.itemData.Lat + "&Item_status=new&User_id=" + this.itemData.User_id;
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
                    this.AddnewItemAlert();
                    // this.navCtrl.navigateForward('/tabs/profile');
                    return;
                }
                else {
                    this.presentToast(wrong_inserttopackage_details);
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
    AddnewItemAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let message;
            let Cancel;
            let Add;
            this.translate.get('Add Item / Passenger').subscribe(value => { header = value; });
            this.translate.get('Add message').subscribe(value => { message = value; });
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            this.translate.get('Add').subscribe(value => { Add = value; });
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
                        text: Add,
                        handler: () => {
                            console.log('Confirm Okay');
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
                                "User_id": ""
                            };
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AddItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
AddItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-add-item',
        template: _raw_loader_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddItemPage);



/***/ }),

/***/ 35068:
/*!**************************************************!*\
  !*** ./src/app/page/add-item/add-item.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".additem_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.additem_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.additem_content div {\n  margin: 15px;\n}\n\n.additem_content h3 {\n  margin-bottom: 30px;\n}\n\n.additem_content div div ion-icon {\n  font-size: 150px;\n  background-color: #faf5a7;\n  padding: 0 100px;\n  border: 4px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-list ion-label {\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.additem_content ion-list ion-radio-group ion-row ion-label {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.additem_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.additem_footer ion-button {\n  margin: 20px;\n}\n\n.uploadIMG {\n  height: 160px;\n  width: 90%;\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBRUksOEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRko7O0FBT0E7RUFFSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFMSjs7QUFTQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTko7O0FBV0E7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBYUE7RUFFSSxlQUFBO0FBWEo7O0FBZUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVpKOztBQWVBO0VBQ0ksWUFBQTtBQVpKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBWkoiLCJmaWxlIjoiYWRkLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGl0ZW1faGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cbiBcblxuLmFkZGl0ZW1fY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cblxuLmFkZGl0ZW1fY29udGVudCBkaXZ7XG4gICBcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgIGgze1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbn1cbi5hZGRpdGVtX2NvbnRlbnQgZGl2IGRpdiBpb24taWNvbntcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY1YTc7XG4gICAgcGFkZGluZzogMCAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgIGlvbi1saXN0IGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuXG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIGlvbi1yb3cgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cbiAgXG5cbi5hZGRpdGVtX2NvbnRlbnQgaW9uLWNhcmR7XG4gXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBcbn1cblxuLmFkZGl0ZW1fY29udGVudCBpb24tY2FyZCBpb24tY29se1xuICBcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuLmFkZGl0ZW1fZm9vdGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBcbn1cbi51cGxvYWRJTUd7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNTM1MzUgO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxufVxuXG4gXG4iXX0= */");

/***/ }),

/***/ 41768:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/add-item/add-item.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"additem_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'Add Item / Passenger' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"additem_content\">\n  <div> \n    <ion-list>\n      <div align=\"center\">\n        <!-- <ion-icon width=\"90%\" height=\"200px\"  name=\"cloud-upload\"></ion-icon> -->\n        <!-- <img class=\"uploadIMG\" src=\"../../../assets/icon/uploadIcon.png\" alt=\"\"> -->\n        <div>\n          <div>\n\n            <!-- <ion-label> {{'Click to Upload Car ID Card'|translate}} </ion-label> -->\n            <div align=\"center\">\n              <!-- <img src=\"../../../assets/icon/car_card_id.png\" width=\"90%\" height=\"200px\"  alt=\"\">\n    <img class=\"uploadIMG\"  *ngIf='IdCardImageView == 1'  src=\"../../../assets/icon/uploadIcon.png\" width=\"90%\" height=\"200px\"  alt=\"\">\n  <div  *ngIf='IdCardImageView == 0' >\n    <ion-img class=\"uploadIMG\" *ngFor=\"let file of images; let i = index\" [src]=\"file.data\" width=\"90%\" height=\"200px\" ></ion-img>\n  </div> -->\n\n\n              <div (click)=\"selectImagefromphone()\">\n                <div align=\"center\">\n                  <!-- <img src=\"../../../assets/icon/car_card_id.png\" width=\"90%\" height=\"200px\"  alt=\"\"> -->\n                  <img class=\"uploadIMG\" [src]=\"IdCardImage\" width=\"100%\" height=\"200px\" alt=\"\">\n\n                </div>\n\n              </div>\n \n            </div>\n          </div>\n        </div>\n\n      </div>\n      \n\n\n      <ion-radio-group name=\"auto\" (ionChange)=\"radioChecked()\" [(ngModel)]=\"item.type\">\n        <ion-list-header>\n          <ion-label>{{Type|translate}} </ion-label>\n        </ion-list-header>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>{{'Item' |translate}}</ion-label>\n              <ion-radio value=\"item\"></ion-radio>\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label>{{'Passenger' |translate}}</ion-label>\n              <ion-radio value=\"passenger\"></ion-radio>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-radio-group>\n      <!-- Item Name (Arabic)\n        Item Name (English) -->\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"itemData.Title_ar\" [placeholder]=\"inputItemName_ar\" aria-required=\"please added\" ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"itemData.Title_en\" [placeholder]=\"inputItemName_en\"></ion-input>\n      </ion-item>\n\n\n      <!-- //////////////////////////////// -->\n\n\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label> {{'Goverate'|translate}}</ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select multiple=\"false\" [(ngModel)]=\"itemData.Governate_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to Goverate'|translate\" (ionChange)=\"governateIdSelected($event)\">\n          <ion-select-option *ngFor=\"let governate of governateArr \" [value]=\"governate.Id\">{{applang == 'ar' ?\n            governate.Name_ar : governate.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label>{{'City'|translate}} </ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select value=\"city\" multiple=\"false\" [(ngModel)]=\"itemData.City_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to  City'|translate\">\n          <ion-select-option *ngFor=\"let city of cityArr \" [value]=\"city.Id\" (ionChange)=\"cityIdSelected(city.Id)\">\n            {{applang == 'ar' ? city.Name_ar : city.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"itemData.Max_price_delivery\" [placeholder]=\"'Price Delivery'|translate\">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-datetime [(ngModel)]=\"itemData.Maximin_date\" [placeholder]=\"'Maximum Date'|translate\"\n          display-format=\"DD.MM.YYYY\"></ion-datetime>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"time\"></ion-icon>\n\n      \n        <ion-datetime [(ngModel)]=\"itemData.Maximin_time\" [placeholder]=\"'Maximum Time'|translate\"\n          display-format=\"HH:mm\"></ion-datetime>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"alert-circle\"></ion-icon>\n        <ion-textarea [(ngModel)]=\"itemData.Other_note\" [placeholder]=\"'Other note'|translate\"></ion-textarea>\n      </ion-item>\n\n\n      <ion-item lines=\"none\" (click)=\"presentModal()\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        <div>\n          {{'Click to Enter your address on the map'|translate}}<br>\n          {{userlocation}}\n\n        </div>\n      </ion-item>\n\n\n    </ion-list>\n    <ion-button (click)=\"Upload()\" expand=\"block\" color=\"primary\" shape=\"round\">\n      {{'Add'|translate}}\n    </ion-button>\n  </div>\n\n</ion-content>\n\n\n<!-- <ion-footer class=\"additem_footer ion-no-border\" >\n  <ion-toolbar>\n    <ion-button  [routerLink]=\"['/tabs/map']\" size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Go To Home'|translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_page_add-item_add-item_module_ts.js.map