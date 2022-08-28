(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_package_package_module_ts"],{

/***/ 97947:
/*!********************************************************!*\
  !*** ./src/app/page/package/package-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagePageRoutingModule": () => (/* binding */ PackagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.page */ 32392);




const routes = [
    {
        path: '',
        component: _package_page__WEBPACK_IMPORTED_MODULE_0__.PackagePage
    }
];
let PackagePageRoutingModule = class PackagePageRoutingModule {
};
PackagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PackagePageRoutingModule);



/***/ }),

/***/ 59455:
/*!************************************************!*\
  !*** ./src/app/page/package/package.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagePageModule": () => (/* binding */ PackagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _package_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package-routing.module */ 97947);
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.page */ 32392);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let PackagePageModule = class PackagePageModule {
};
PackagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _package_routing_module__WEBPACK_IMPORTED_MODULE_0__.PackagePageRoutingModule
        ],
        declarations: [_package_page__WEBPACK_IMPORTED_MODULE_1__.PackagePage]
    })
], PackagePageModule);



/***/ }),

/***/ 32392:
/*!**********************************************!*\
  !*** ./src/app/page/package/package.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PackagePage": () => (/* binding */ PackagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_package_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./package.page.html */ 68393);
/* harmony import */ var _package_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.page.scss */ 35597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68939);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 28427);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/photo.service */ 61957);












;
let PackagePage = class PackagePage {
    constructor(route, translate, router, plt, http, loadingCtrl, toastCtrl, actionSheetController, navCtrl, photoService) {
        this.route = route;
        this.translate = translate;
        this.router = router;
        this.plt = plt;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.photoService = photoService;
        this.today = Date.now();
        this.PayURL = '';
        this.PackageDetails = {
            "name": "",
            "peroid": [
                {
                    "name": "once",
                    "price": "0.200"
                }, {
                    "name": "monthly",
                    "price": "1.000"
                },
                {
                    "name": "yearly",
                    "price": "5.000"
                }
            ],
            "company_name": "",
            "nickname": "",
            "startDate": "",
            "IDCardIMG": "",
            "nationallity": ""
        };
        this.imagaUploaded = 0;
        this.UserPackageDetails = {
            "Package_name_ar": "",
            "Package_name_en": "",
            "Package_price": "",
            "Package_period_ar": "",
            "Package_period_en": "",
            "Start_date": "",
            "End_date": "",
            "Shop_company_name": "",
            "Nick_name": "",
            "Car_card_Id_img": "",
            "Status_ Package_ar": "",
            "Status_ Package_en": "",
            "User_id": "",
            "nationallityClicked": "false"
        };
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/car_card_id.png';
        this.Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.IdCardImageView = 1;
        this.selected_image_name = 'imgName';
        this.Selected_language_direction();
        if (router.getCurrentNavigation().extras.state) {
            this.PackageDetails = this.router.getCurrentNavigation().extras.state;
            console.log(this.PackageDetails);
        }
    }
    ngOnInit() {
        // this.deleteAllImage();
        // this.loadFiles();
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
            this.selected_image_name = name;
            this.UserPackageDetails.Car_card_Id_img = name;
        });
    }
    Upload(cost) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(cost);
            let wrong_inserttopackage_details = 'wrong_inserttopackage_details';
            let Fill_ALl_requird_details_package = 'Fill ALl requird details';
            let subscrition_Done_succeefully = 'subscrition_Done_succeefully';
            let error_uploading_car_card_id = 'error_uploading_car_card_id';
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { wrong_inserttopackage_details = value; });
            this.translate.get('Fill_ALl_requird_details_package').subscribe(value => { Fill_ALl_requird_details_package = value; });
            this.translate.get('subscrition_Done_succeefully').subscribe(value => { subscrition_Done_succeefully = value; });
            this.translate.get('error_uploading_car_card_id').subscribe(value => { error_uploading_car_card_id = value; });
            // Access upload img method
            if (this.PackageDetails.name == 'Taxi Package' || this.PackageDetails.name == 'Special Package') {
                this.imagaUploaded = 0;
                if (this.selected_image_name == 'imgName') {
                    this.presentToast(error_uploading_car_card_id);
                }
                else {
                    this.imagaUploaded = 1;
                }
                // this.startUpload(this.images[0]); 
                // this.startUpload(this.images[0]).then((success) => {
                //   this.imagaUploaded = 1;
                // }).catch((error) => {
                //   console.log('images error');
                //   this.presentToast(error_uploading_car_card_id);
                // });
                //  this.UserPackageDetails.Car_card_Id_img = this.selected_image_name;
            }
            //  insert data in DB 
            if (this.PackageDetails.name == 'Taxi Package') {
                // console.log('Taxi Package');
                this.UserPackageDetails.Package_name_ar = 'باقة التاكسي';
                this.UserPackageDetails.Package_name_en = 'Taxi Package';
            }
            if (this.PackageDetails.name == 'Mandoob Package') {
                this.UserPackageDetails.Package_name_ar = 'باقة مندوب';
                this.UserPackageDetails.Package_name_en = 'Mandoob Package';
            }
            if (this.PackageDetails.name == 'Special Package') {
                this.UserPackageDetails.Package_name_ar = 'باقة المميزه';
                this.UserPackageDetails.Package_name_en = 'Special Package';
            }
            if (this.PackageDetails.name == 'Service Requester Package') {
                this.UserPackageDetails.Package_name_ar = 'باقة طالب الخدمة';
                this.UserPackageDetails.Package_name_en = 'Service Requester Package';
            }
            this.UserPackageDetails.Package_price = this.selectPrice;
            if (this.period == 'Daily') {
                this.UserPackageDetails.Package_period_ar = 'يومي';
                this.UserPackageDetails.Package_period_en = 'Daily';
            }
            if (this.period == 'Yearly') {
                this.UserPackageDetails.Package_period_ar = 'سنوي';
                this.UserPackageDetails.Package_period_en = 'Yearly';
            }
            if (this.period == 'Monthly') {
                this.UserPackageDetails.Package_period_ar = 'شهري';
                this.UserPackageDetails.Package_period_en = 'Monthly';
            }
            if (this.period == 'Once') {
                this.UserPackageDetails.Package_period_ar = 'لمرة واحده';
                this.UserPackageDetails.Package_period_en = 'Once';
            }
            console.log(this.UserPackageDetails.Start_date.substring(0, 10));
            this.UserPackageDetails.Start_date = this.UserPackageDetails.Start_date.substring(0, 10);
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            // console.log(JSON.parse(userId.value));
            this.UserPackageDetails.User_id = JSON.parse(userId.value);
            // contun. for free clicked 
            if (cost == 'free') {
                console.log("On free");
                this.UserPackageDetails.Package_price = '0';
                if (this.PackageDetails.name == 'Taxi Package' || this.PackageDetails.name == 'Special Package') {
                    this.UserPackageDetails.Status_Package_en = 'Pendding';
                    this.UserPackageDetails.Status_Package_ar = 'قيد التفعيل';
                }
                else if (this.PackageDetails.name == 'Service Requester Package' || this.PackageDetails.name == 'Mandoob Package') {
                    this.UserPackageDetails.Status_Package_en = 'active';
                    this.UserPackageDetails.Status_Package_ar = 'فعال';
                }
            }
            else if (cost == 'paid') {
                this.UserPackageDetails.Status_Package_en = 'new';
                this.UserPackageDetails.Status_Package_ar = 'جديد';
            }
            console.log("Data__" + this.UserPackageDetails.Package_name_ar + "__" + this.UserPackageDetails.Package_name_en + "__" + this.UserPackageDetails.Package_price + "__" + this.UserPackageDetails.Package_period_ar + "__" + this.UserPackageDetails.Package_period_en + "__"
                + this.UserPackageDetails.Start_date + "__" + this.UserPackageDetails.End_date + "__" + this.UserPackageDetails.Shop_company_name + "__" + this.UserPackageDetails.Nick_name + "__" + this.UserPackageDetails.Car_card_Id_img + "__" + this.UserPackageDetails.User_id);
            // this.UserPackageDetails.Start_date
            // this.UserPackageDetails.Shop_company_name
            // this.UserPackageDetails.Nick_name
            // this.UserPackageDetails.Car_card_Id_img
            // this.UserPackageDetails.Package_price
            if (this.PackageDetails.name == 'Special Package') {
                if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Shop_company_name == '' || this.UserPackageDetails.Nick_name == '' || this.UserPackageDetails.nationallityClicked == 'false') {
                    this.presentToast(Fill_ALl_requird_details_package);
                    return;
                }
            }
            if (this.PackageDetails.name == 'Taxi Package') {
                if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Nick_name == '' || this.UserPackageDetails.Car_card_Id_img == '' || this.UserPackageDetails.nationallityClicked == 'false') {
                    this.presentToast(Fill_ALl_requird_details_package);
                    return;
                }
            }
            if (this.PackageDetails.name == 'Mandoob Package') {
                if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Nick_name == '' || this.UserPackageDetails.nationallityClicked == 'false') {
                    this.presentToast(Fill_ALl_requird_details_package);
                    return;
                }
            }
            if (this.PackageDetails.name == 'Service Requester Package') {
                if (this.UserPackageDetails.Package_price == '' || this.UserPackageDetails.Start_date == '' || this.UserPackageDetails.Shop_company_name == '') {
                    this.presentToast(Fill_ALl_requird_details_package);
                    return;
                }
            }
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            // https://drbakndillah.com/Api/insertIntoPackage.php?Package_name_ar=%D8%AA%D8%AC%D8%B1%D8%A8%D9%87&Package_name_en=TSET&Package_price=0.200&Package_period_ar=%D9%8A%D9%88%D9%85%D9%8A&Package_period_en=Yearly&Start_date=2021-12-13&Shop_company_name=companny&Nick_name=nickname&Car_card_Id_img=35345656436.jpeg&Status_Package_ar=%D8%AC%D8%AF%D9%8A%D8%AF&Status_Package_en=new&User_id=1
            let url = this.Api_URL + "insertIntoPackage.php?Package_name_ar=" + this.UserPackageDetails.Package_name_ar + "&Package_name_en=" + this.UserPackageDetails.Package_name_en + "&Package_price=" + this.UserPackageDetails.Package_price + "&Package_period_ar=" + this.UserPackageDetails.Package_period_ar + "&Package_period_en=" + this.UserPackageDetails.Package_period_en + "&Start_date=" + this.UserPackageDetails.Start_date + "&Shop_company_name=" + this.UserPackageDetails.Shop_company_name + "&Nick_name=" + this.UserPackageDetails.Nick_name + "&Car_card_Id_img=" + this.UserPackageDetails.Car_card_Id_img + "&Status_Package_ar=" + this.UserPackageDetails.Status_Package_ar + "&Status_Package_en=" + this.UserPackageDetails.Status_Package_en + "&User_id=" + this.UserPackageDetails.User_id;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                loading.dismiss();
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                // console.log('response'+response.id);
                //console.log(response[0].response);
                if (retrivedResponse.response == 'error') {
                    loading.dismiss();
                    this.presentToast(wrong_inserttopackage_details);
                    return;
                }
                else if (retrivedResponse.response == 'success') {
                    loading.dismiss();
                    console.log(retrivedResponse.uid);
                    if (cost == 'free') {
                        loading.dismiss();
                        this.presentToast(subscrition_Done_succeefully);
                        this.navCtrl.navigateForward('/tabs/profile');
                    }
                    else {
                        loading.dismiss();
                        this.Link_to_payment(retrivedResponse.uid);
                        //  this.url3(this.UserPackageDetails.Package_name_ar);
                    }
                    // this.navCtrl.navigateForward('/tabs/profile');
                    return;
                }
            }, (error) => {
            });
        });
    }
    Link_to_payment(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let somethingWronghappedpleasetryagin = 'somethingWronghappedpleasetryagin';
            this.translate.get('somethingWronghappedpleasetryagin').subscribe(value => { somethingWronghappedpleasetryagin = value; });
            // Getting Username , phone , email from local storage 
            const Email = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Email' });
            let UserEmail = JSON.parse(Email.value);
            const Phone_no = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Phone_no' });
            let UserPhone_no = JSON.parse(Phone_no.value);
            const userName_ar = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Name_ar' });
            const userName_en = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Name_en' });
            let userName = JSON.parse(userName_ar.value) + "__" + JSON.parse(userName_en.value);
            // console.log(JSON.parse(userId.value));
            let paymentUrl = "https://drbakndillah.com/Api/payment/ecommerce.php?package_name_en=" + this.UserPackageDetails.Package_name_en + "&price=" + this.UserPackageDetails.Package_price * 1000 + "&customer=" + userName + "&order_id=" + id + "&contact_number=" + UserPhone_no + "&email_address=" + UserEmail;
            console.log(paymentUrl);
            _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: 'https://drbakndillah.com/Api/payment/ecommerce.php?package_name_en=PackageSubscription&price=' + this.UserPackageDetails.Package_price * 1000 + '&customer=' + userName + '&order_id=' + id + '&contact_number=' + UserPhone_no + '&email_address=' + UserEmail });
            // const openCapacitorSite = async () => {
            //   await Browser.open({ url: paymentUrl }).then((sucess)=>{
            //     this.navCtrl.navigateForward('/tabs/profile');
            // }).catch((error)=>{
            //   this.presentToast(somethingWronghappedpleasetryagin);
            // });
            // };
            // Browser.open({ url: paymentUrl }).then((sucess)=>{
            //     this.navCtrl.navigateForward('/tabs/profile');
            // }).catch((error)=>{
            //   this.presentToast(somethingWronghappedpleasetryagin);
            // });
        });
    }
    radioGroupChange(event) {
        let OMR;
        this.translate.get('OMR').subscribe(value => { OMR = value; });
        console.log("“radioGroupChange”", event.detail);
        this.price = event.detail.value.price + "  " + OMR;
        this.selectPrice = event.detail.value.price;
        this.period = event.detail.value.name;
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            // this.presentAlertConfirm(); 
        });
    }
};
PackagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
PackagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-package',
        template: _raw_loader_package_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_package_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PackagePage);



/***/ }),

/***/ 35597:
/*!************************************************!*\
  !*** ./src/app/page/package/package.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Packages_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Packages_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Packages_content h3 {\n  margin-bottom: 30px;\n}\n\n.Packages_content ion-list ion-label {\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.Packages_content ion-list ion-radio-group ion-row ion-label {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.Packages_content div {\n  margin: 20px;\n}\n\n.Packages_content img {\n  border: 4px solid #353535;\n  border-radius: 15px;\n}\n\n.Packages_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.Packages_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.Packages_footer ion-button {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBSUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBT0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFMSjs7QUFVQTtFQUNJLFlBQUE7QUFQSjs7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFXQTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFhQTtFQUVJLGVBQUE7QUFYSjs7QUFlQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBWko7O0FBZUE7RUFDSSxZQUFBO0FBWkoiLCJmaWxlIjoicGFja2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUGFja2FnZXNfaGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cbiBcblxuLlBhY2thZ2VzX2NvbnRlbnQge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxufVxuXG4uUGFja2FnZXNfY29udGVudCAgaDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxufVxuXG4uUGFja2FnZXNfY29udGVudCAgaW9uLWxpc3QgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cblxuLlBhY2thZ2VzX2NvbnRlbnQgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIGlvbi1yb3cgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cblxuXG4uUGFja2FnZXNfY29udGVudCBkaXZ7XG4gICAgbWFyZ2luOiAyMHB4O1xuIFxufVxuLlBhY2thZ2VzX2NvbnRlbnQgaW1neyBcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLlBhY2thZ2VzX2NvbnRlbnQgaW9uLWNhcmR7XG4gXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBcbn1cblxuLlBhY2thZ2VzX2NvbnRlbnQgaW9uLWNhcmQgaW9uLWNvbHtcbiAgXG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbi5QYWNrYWdlc19mb290ZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIFxufVxuXG4gXG4iXX0= */");

/***/ }),

/***/ 68393:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/package/package.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Packages_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{ PackageDetails.name |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"Packages_content\">\n  <div>\n    <h3>{{PackageDetails.name |translate}}</h3>\n\n    <ion-list>\n      <ion-radio-group name=\"auto\" (ionChange)=\"radioGroupChange($event)\">\n\n        <ion-label>{{'Select the period' |translate}} \n          <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let i of PackageDetails.peroid\">\n            <ion-item lines=\"none\">\n              <ion-label>{{ i.name |translate}}</ion-label>\n              <ion-radio [value]=\"i\"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-radio-group>\n\n      <ion-label>{{'Package Price'|translate}} {{price}} </ion-label>\n\n      <ion-item lines=\"none\" *ngIf=\"PackageDetails.company_name == 1\">\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" [placeholder]=\"'Your Name / Company / Shop Name'|translate\"\n          [(ngModel)]=\"UserPackageDetails.Shop_company_name\"></ion-input>\n      </ion-item>\n\n\n\n\n      <ion-item lines=\"none\" *ngIf=\"PackageDetails.nickname == 1\">\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"text\" [placeholder]=\"'Your Nick Name'|translate\" [(ngModel)]=\"UserPackageDetails.Nick_name\">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n\n      <ion-label><ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-datetime [placeholder]=\"'Start Date'|translate\" display-format=\"YYYY-MM-DD\"\n          [min]=\"today| date: 'yyyy-MM-dd'\" [(ngModel)]=\"UserPackageDetails.Start_date\"></ion-datetime>\n      </ion-item>\n      <!-- {{UserPackageDetails.Start_date | date: 'yyyy-MM-dd'}} -->\n      <!-- {{today| date: 'yyyy-MM-dd' }} -->\n\n\n      <div *ngIf=\"PackageDetails.IDCardIMG == 1\">\n        <div (click)=\"selectImagefromphone()\">\n\n          <ion-label> {{'Click to Upload Car ID Card'|translate}} </ion-label>\n          <div align=\"center\">\n            <!-- <img src=\"../../../assets/icon/car_card_id.png\" width=\"90%\" height=\"200px\"  alt=\"\"> -->\n            <img [src]=\"IdCardImage\" width=\"90%\" height=\"200px\" alt=\"\">\n\n          </div>\n\n        </div>\n\n      </div>\n\n      <!-- <ion-button (click)=\"Upload()\" expand=\"block\"   shape=\"round\">\n  Click me\n</ion-button> -->\n\n\n      <div *ngIf=\"PackageDetails.nationallity == 1\">\n        <ion-checkbox [(ngModel)]=\"UserPackageDetails.nationallityClicked\"></ion-checkbox> {{'I am\n        Omani'|translate}}<br>\n        <ion-text color=\"danger\">*{{'Only Omani people can subscribe in this package'|translate}}</ion-text>\n        <br>\n        <ion-text color=\"danger\">*{{'Taxi and special package required'|translate}}</ion-text>\n\n      </div>\n    </ion-list>\n    <br>\n    <ion-button (click)=\"Upload('free')\" expand=\"block\" color=\"primary\" shape=\"round\">\n      {{'Continue for free'|translate}}\n    </ion-button>\n\n    <ion-button (click)=\"Upload('paid')\" expand=\"block\" color=\"primary\" shape=\"round\">\n      {{'Continue'|translate}}\n    </ion-button>\n\n  \n    <!-- WILL BE DELETED  -->\n    <!-- <ion-button  [routerLink]=\"['/payment-failed']\" expand=\"block\"  color=\"primary\" shape=\"round\">\n    Falid Payment\n  </ion-button> -->\n\n\n    <ion-button [routerLink]=\"['/all-packages']\" expand=\"block\" fill=\"outline\" shape=\"round\">\n      {{'All Packages'|translate}}\n    </ion-button>\n\n  </div>\n  <div>\n\n\n\n  </div>\n\n</ion-content>\n<!-- \n<ion-footer class=\"Packages_footer ion-no-border\" >\n  <ion-toolbar>\n    <ion-button  [routerLink]=\"['/tabs/map']\"  size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Go To Home'|translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer> -->\n\n<!-- \n<ion-content>\n  <ion-button (click)=\"Service_popOver($event)\"  shape=\"round\">\n    Service\n  </ion-button>\n  \n  <ion-button (click)=\"Mandoob_popOver($event)\"  shape=\"round\">\n    Mandoob \n  </ion-button>\n\n  <ion-button (click)=\"Taxi_popOver($event)\"  shape=\"round\">\n    Taxi\n  </ion-button>\n\n  <ion-button (click)=\"special_popOver($event)\"  shape=\"round\">\n    special\n  </ion-button>\n\n  <br><br><br>\n\n  \n\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_page_package_package_module_ts.js.map