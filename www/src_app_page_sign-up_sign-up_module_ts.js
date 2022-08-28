(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_sign-up_sign-up_module_ts"],{

/***/ 27491:
/*!********************************************************!*\
  !*** ./src/app/page/sign-up/sign-up-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 26366);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 77830:
/*!************************************************!*\
  !*** ./src/app/page/sign-up/sign-up.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 27491);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 26366);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








// import { PlaceApiPageModule } from '../../place-api/place-api.module'; 
// import { MyModalPageModule } from '../../modals/my-modal/my-modal.module';
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            // MyModalPageModule,
            // PlaceApiPageModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 26366:
/*!**********************************************!*\
  !*** ./src/app/page/sign-up/sign-up.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 12446);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 22823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _place_api_place_api_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../place-api/place-api.page */ 68501);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);









// import { PlaceApiPage } from '../../place-api/place-api.page'; 


let SignUpPage = class SignUpPage {
    constructor(navCtrl, modalController, alertController, translate, http, loadingController, toastController) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.alertController = alertController;
        this.translate = translate;
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.userlong = "";
        this.userlat = "";
        this.options = { location: "test", time: "today" };
        this.usersData = {
            "Email": "",
            "Name_ar": "",
            "Name_en": "",
            "Family_name_ar": "",
            "Family_name_en": "",
            "Phone_no": "",
            "Country_code": "",
            "Country_id": "",
            "Governate_id": "",
            "City_id": "",
            "Lat": "",
            "log": "",
            "Blocked": "0",
            "Password": "",
            "com_Password": "",
            "token": ""
        };
        this.checkTerms = false;
        this.Selected_language_direction();
        //Get List of country
        this.http.get('https://drbakndillah.com/Api/getCountryDetails.php').subscribe((response) => {
            console.log(response);
            this.countryArr = response;
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    countryCode(selectedValue) {
        this.usersData.Country_code = selectedValue.code;
        this.usersData.Country_id = selectedValue.Id;
        console.log(this.usersData.Country_code);
        this.http.get('https://drbakndillah.com/Api/getGovernateById.php?ID=' + this.usersData.Country_id).subscribe((response) => {
            console.log(response);
            this.governateArr = response;
        }, (error) => {
            console.log(error);
        });
    }
    governateIdSelected(selectedValue) {
        this.usersData.Governate_id = selectedValue.detail.value;
        this.usersData.City_id = '';
        console.log(selectedValue.detail.value);
        this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + this.usersData.Governate_id).subscribe((response) => {
            console.log(response);
            this.cityArr = response;
        }, (error) => {
            console.log(error);
        });
    }
    cityIdSelected(selectedValue) {
        this.usersData.City_id = selectedValue;
        console.log(this.usersData.City_id);
    }
    // async presentModal() {
    //   const modal = await this.modalController.create({
    //     component: PlaceApiPage,
    //     componentProps: { 
    //       foo: 'hello',
    //       bar: 'world'
    //     }
    //   });
    //   return await modal.present();
    // }
    isemailValid(search) {
        let emailvalid;
        let regexp = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        emailvalid = regexp.test(search);
        return emailvalid;
    }
    ispasswordValid(search) {
        let passwordvalid;
        let regexp = new RegExp(/^[^\n]{6,}$/);
        passwordvalid = regexp.test(search);
        return passwordvalid;
    }
    isStringValid(search) {
        let stringvalid;
        let regexp = new RegExp(/^([a-zA-Z]+)$/);
        stringvalid = regexp.test(search);
        return stringvalid;
    }
    isStringArabicValid(search) {
        let stringvalid;
        let regexp = new RegExp(/^([گچپژیلفقهمو ء-ي]+)$/);
        stringvalid = regexp.test(search);
        return stringvalid;
    }
    isNumberValid(search) {
        let numbervalid;
        let regexp = new RegExp(/^([0-9]+)$/);
        numbervalid = regexp.test(search);
        return numbervalid;
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                    // console.log(this.userlat); 
                    this.userlong = JSON.parse(dataReturned.data.Longitude);
                }
            });
            return yield modal.present();
        });
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
    forgotpassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let header;
            let subHeader;
            let message;
            let Restpassword;
            let Cancel;
            this.translate.get('forgot password').subscribe(value => { header = value; });
            this.translate.get('forgot password_subheader').subscribe(value => { subHeader = value; });
            this.translate.get('forgot password_msg').subscribe(value => { message = value; });
            this.translate.get('reset password').subscribe(value => { Restpassword = value; });
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            this.alertController.create({
                header: header,
                subHeader: subHeader,
                message: message,
                inputs: [
                    {
                        name: 'mail',
                        placeholder: 'example@gmail.com',
                    },
                ],
                buttons: [
                    {
                        text: Restpassword,
                        handler: (data) => {
                            console.log('Saved Information', data);
                        }
                    },
                    {
                        text: Cancel,
                        handler: (data) => {
                            console.log('Canceled', data);
                        }
                    }
                ]
            }).then(res => {
                res.present();
            });
        });
    }
    SignUpClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let Name_ar_err_msg;
            let Name_en_err_msg;
            let Family_name_ar_err_msg;
            let Family_name_en_err_msg;
            let Email_err_msg;
            let Phone_no_err_msg;
            let Country_id_err_msg;
            let Governate_id_err_msg;
            let City_id_err_msg;
            let Password_err_msg;
            let com_Password_err_msg;
            let user_location_err_msg;
            let sigup_error_msg;
            let sigup_duplicated_msg;
            let sigup_success_msg;
            let terms_check_error;
            this.translate.get('Name_ar_err_msg').subscribe(value => { Name_ar_err_msg = value; });
            this.translate.get('Name_en_err_msg').subscribe(value => { Name_en_err_msg = value; });
            this.translate.get('Family_name_ar_err_msg').subscribe(value => { Family_name_ar_err_msg = value; });
            this.translate.get('Family_name_en_err_msg').subscribe(value => { Family_name_en_err_msg = value; });
            this.translate.get('Email_err_msg').subscribe(value => { Email_err_msg = value; });
            this.translate.get('Phone_no_err_msg').subscribe(value => { Phone_no_err_msg = value; });
            this.translate.get('Country_id_err_msg').subscribe(value => { Country_id_err_msg = value; });
            this.translate.get('Governate_id_err_msg').subscribe(value => { Governate_id_err_msg = value; });
            this.translate.get('City_id_err_msg').subscribe(value => { City_id_err_msg = value; });
            this.translate.get('Password_err_msg').subscribe(value => { Password_err_msg = value; });
            this.translate.get('com_Password_err_msg').subscribe(value => { com_Password_err_msg = value; });
            this.translate.get('user_location_err_msg').subscribe(value => { user_location_err_msg = value; });
            this.translate.get('sigup_error_msg').subscribe(value => { sigup_error_msg = value; });
            this.translate.get('sigup_duplicated_msg').subscribe(value => { sigup_duplicated_msg = value; });
            this.translate.get('sigup_success_msg').subscribe(value => { sigup_success_msg = value; });
            this.translate.get('terms_check_error').subscribe(value => { terms_check_error = value; });
            if (this.usersData.Name_ar.trim() == '' && this.usersData.Name_en.trim() == '') {
                const toast = yield this.toastController.create({
                    message: Name_ar_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            // if (!this.isStringValid(this.usersData.Name_en)) {
            //   const toast = await this.toastController.create({
            //     message: Name_en_err_msg,
            //     duration: 2000
            //   });
            //   toast.present();
            //   return;
            // } else { }
            if (this.usersData.Family_name_en.trim() == '' && this.usersData.Family_name_ar.trim() == '') {
                const toast = yield this.toastController.create({
                    message: Family_name_ar_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            // if (!this.isStringValid(this.usersData.Family_name_en)) {
            //   const toast = await this.toastController.create({
            //     message: Family_name_en_err_msg,
            //     duration: 2000
            //   });
            //   toast.present();
            //   return;
            // } else { }
            if (!this.isemailValid(this.usersData.Email.trim())) {
                const toast = yield this.toastController.create({
                    message: Email_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (!this.isNumberValid(this.usersData.Phone_no)) {
                const toast = yield this.toastController.create({
                    message: Phone_no_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (this.usersData.Country_id == undefined || this.usersData.Country_id == "") {
                const toast = yield this.toastController.create({
                    message: Country_id_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (this.usersData.Governate_id == undefined || this.usersData.Governate_id == "") {
                const toast = yield this.toastController.create({
                    message: Governate_id_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (this.usersData.City_id == undefined || this.usersData.City_id == "") {
                const toast = yield this.toastController.create({
                    message: City_id_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (!this.ispasswordValid(this.usersData.Password.trim())) {
                const toast = yield this.toastController.create({
                    message: Password_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (this.usersData.Password.trim() != this.usersData.com_Password.trim()) {
                const toast = yield this.toastController.create({
                    message: com_Password_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else { }
            if (this.userlong == '' || this.userlat == '') {
                const toast = yield this.toastController.create({
                    message: user_location_err_msg,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else {
                this.usersData.log = this.userlong;
                this.usersData.Lat = this.userlat;
            }
            if (this.checkTerms == false) {
                const toast = yield this.toastController.create({
                    message: terms_check_error,
                    duration: 2000
                });
                toast.present();
                return;
            }
            else {
            }
            const token = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'token' });
            console.log(JSON.parse(token.value));
            this.usersData.token = JSON.parse(token.value);
            // if (!this.ispasswordValid(this.usersData.Password)) {
            //   let msg;
            //   const toast = await this.toastController.create({
            //     message: 'Error magges for you.',
            //     duration: 2000
            //   });
            //   toast.present();
            //   return;
            // } else { }
            // if (!this.ispasswordValid(this.usersData.Password)) {
            //   let msg;
            //     const toast = await this.toastController.create({
            //       message: 'Error magges for you.',
            //       duration: 2000
            //     });
            //     toast.present();
            //   return;
            // } else { }
            // let url='https://drbakndillah.com/Api/UserSignUp.php?Email='+this.usersData.Email.trim()+'&Name_ar='+this.usersData.Name_ar.trim()+'&Name_en='+this.usersData.Name_en.trim()+'&Family_name_ar='+this.usersData.Family_name_ar.trim()+'&Family_name_en='+this.usersData.Family_name_en.trim()+'&Phone_no='+this.usersData.Phone_no+'&Country_code='+this.usersData.Country_code+'&Country_id='+this.usersData.Country_id+'&Governate_id='+this.usersData.Governate_id+'&City_id='+this.usersData.City_id+'&Lat='+this.usersData.Lat+'&log='+this.usersData.log+'&Password='+this.usersData.Password.trim()+'&token='+this.usersData.token;
            // this.http.post(url,{},{}).subscribe((response)=>{
            // console.log(response);
            // },
            // (error)=>{
            // console.log(error);
            // });
            // this.http.get('https://drbakndillah.com/Api/UserSignUp.php?Email=' + this.usersData.Email.trim() + '&Name_ar=' + this.usersData.Name_ar.trim() + '&Name_en=' + this.usersData.Name_en.trim() + '&Family_name_ar=' + this.usersData.Family_name_ar.trim() + '&Family_name_en=' + this.usersData.Family_name_en.trim() + '&Phone_no=' + this.usersData.Phone_no + '&Country_code=' + this.usersData.Country_code + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Lat=' + this.usersData.Lat + '&log=' + this.usersData.log + '&Password=' + this.usersData.Password.trim() + '&token=' + this.usersData.token).subscribe((response) => {
            //   console.log('response' + response);
            // }, (error) => {
            //   console.log('error' + JSON.parse(error));
            // });
            const loading = yield this.loadingController.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            let url = this.Api_URL + 'UserSignUp.php?Email=' + this.usersData.Email.trim() + '&Name_ar=' + this.usersData.Name_ar.trim() + '&Name_en=' + this.usersData.Name_en.trim() + '&Family_name_ar=' + this.usersData.Family_name_ar.trim() + '&Family_name_en=' + this.usersData.Family_name_en.trim() + '&Phone_no=' + this.usersData.Phone_no + '&Country_code=' + this.usersData.Country_code + '&Country_id=' + this.usersData.Country_id + '&Governate_id=' + this.usersData.Governate_id + '&City_id=' + this.usersData.City_id + '&Lat=' + this.usersData.Lat + '&log=' + this.usersData.log + '&Password=' + this.usersData.Password.trim() + '&token=' + this.usersData.token;
            this.http.get(url, {}).subscribe((response) => {
                console.log(response[0].response);
                loading.dismiss();
                if (response[0].response == 'error') {
                    this.presentToast(sigup_error_msg);
                    return;
                }
                else if (response[0].response == 'duplicated') {
                    this.presentToast(sigup_duplicated_msg);
                    return;
                }
                else if (response[0].response == 'success') {
                    this.presentToast(sigup_success_msg);
                    _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: 'HasLogin',
                        value: JSON.stringify('1'),
                    });
                    _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.set({
                        key: 'Email',
                        value: JSON.stringify(this.usersData.Email.trim()),
                    });
                    this.navCtrl.navigateForward('/all-packages');
                    return;
                }
            }, (error) => {
                console.log(error);
            });
            // this.http.get('https://drbakndillah.com/Api/UserSignUp.php?Email='+this.usersData.Email.trim()+'&Name_ar='+this.usersData.Name_ar.trim()+'&Name_en='+this.usersData.Name_en.trim()+'&Family_name_ar='+this.usersData.Family_name_ar.trim()+'&Family_name_en='+this.usersData.Family_name_en.trim()+'&Phone_no='+this.usersData.Phone_no+'&Country_code='+this.usersData.Country_code+'&Country_id='+this.usersData.Country_id+'&Governate_id='+this.usersData.Governate_id+'&City_id='+this.usersData.City_id+'&Lat='+this.usersData.Lat+'&log='+this.usersData.log+'&Password='+this.usersData.Password.trim()+'&token='+this.usersData.token).subscribe()
            // .map(res => res.json())
            //   .subscribe(
            //     data => {
            //       var user = data; 
            //       console.log("data : ", data);
            //     },
            //     err => {
            //       console.log("ERROR!: ", err);
            //     }
            //   );
            // if sign up successfully then store data in storage  
            // Storage.set({
            //   key: 'HasLogin',
            //   value: JSON.stringify('1'),
            // });
            // Storage.set({
            //   key: 'Id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Email',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Name_ar',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Name_en',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Family_name_ar',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Family_name_en',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Phone_no',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Country_code',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Country_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Governate_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'City_id',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Lat',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'log',
            //   value: JSON.stringify(''),
            // });
            // Storage.set({
            //   key: 'Blocked',
            //   value: JSON.stringify('0'),
            // });
            // Storage.set({
            //   key: 'token',
            //   value: JSON.stringify('0'),
            // });
            // this.navCtrl.navigateForward('/all-packages');
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpPage);



/***/ }),

/***/ 22823:
/*!************************************************!*\
  !*** ./src/app/page/sign-up/sign-up.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Signup_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.Signup_header div {\n  text-align: center;\n  background-color: #353535;\n  border-radius: 0 0 30px 30px;\n}\n\n.Signup_header img {\n  height: 150px;\n  width: 200px;\n}\n\n.Signup_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.Term_condition_label {\n  margin: 0 20px;\n  font-size: small;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBRUo7O0FBRUE7RUFFSSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBREoiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2lnbnVwX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4uU2lnbnVwX2hlYWRlciBkaXZ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG5ib3JkZXItcmFkaXVzOiAwIDAgMzBweCAzMHB4O1xufVxuLlNpZ251cF9oZWFkZXIgaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgXG59XG5cbi5TaWdudXBfY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cbi5UZXJtX2NvbmRpdGlvbl9sYWJlbHtcbiAgICBtYXJnaW46IDAgMjBweCAgO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 12446:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/sign-up/sign-up.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"Signup_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"welcome-language\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Sign Up'|translate}}</ion-title>\n  </ion-toolbar>\n  <div>\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n</ion-header>\n<ion-content  class=\"Signup_content\">\n\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"person\"></ion-icon>\n      <ion-input type=\"text\"  [(ngModel)]=\"usersData.Name_ar\"  [placeholder]=\"'Your Name (Arabic)'|translate\"></ion-input>\n    </ion-item> \n\n    \n    \n    \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"people\"></ion-icon>\n      <ion-input type=\"text\" [(ngModel)]=\"usersData.Family_name_ar\"   [placeholder]=\"'Family Name (Arabic)'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"person\"></ion-icon>\n      <ion-input type=\"text\" [(ngModel)]=\"usersData.Name_en\"   [placeholder]=\"'Your Name (English)'|translate\"></ion-input>\n    </ion-item> \n    \n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"people\"></ion-icon>\n      <ion-input type=\"text\" [(ngModel)]=\"usersData.Family_name_en\"   [placeholder]=\"'Family Name (English)'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"mail\"></ion-icon>\n      <ion-input type=\"text\" [(ngModel)]=\"usersData.Email\"   [placeholder]=\"'Email Address'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"call\"></ion-icon>\n      <ion-input type=\"Number\"  [(ngModel)]=\"usersData.Phone_no\"   [placeholder]=\"'Phone Number'|translate\"></ion-input>\n      <!-- <ion-input type=\"text\"  width=\"10%\" [(ngModel)]=\"usersData.Country_code\"   [placeholder]=\"'Phone Number'|translate\" disabled></ion-input> -->\n      \n    </ion-item> \n     \n\n    <ion-item lines=\"none\">\n      <ion-label>{{'Country'|translate}}</ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <ion-select *ngFor=\"let country of countryArr \" value=\"Country\" multiple=\"false\" interface=\"action-sheet\" [(ngModel)]=\"usersData.Country_id\"  (ionChange)=\"countryCode(country)\"   [placeholder]=\"'Select Country'|translate\">\n        <ion-select-option  [value]=\"country.Id\">{{applang == 'ar' ? country.Name_ar : country.Name_en }} </ion-select-option> \n        <!-- <ion-select-option [value]=\"'Country_option'|translate\">{{'Country_option'|translate}}</ion-select-option>  -->\n      </ion-select>\n    </ion-item>\n    \n\n    \n    <ion-item lines=\"none\">\n      <ion-label> {{'Goverate'|translate}}</ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <!-- <ion-select *ngFor=\"let governate of governateArr \"   multiple=\"false\" [(ngModel)]=\"usersData.City_id\"   [placeholder]=\"'Select Goverate'|translate\"> -->\n        <ion-select   multiple=\"false\" [(ngModel)]=\"usersData.Governate_id\"  interface=\"action-sheet\"  [placeholder]=\"'Select Goverate'|translate\" (ionChange)=\"governateIdSelected($event)\" >\n        <ion-select-option   *ngFor=\"let governate of governateArr \" [value]=\"governate.Id\" >{{applang == 'ar' ? governate.Name_ar : governate.Name_en }} </ion-select-option> \n        <!-- <ion-select-option value=\"Al hail\">Al hail</ion-select-option>  -->\n      </ion-select>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-label>{{'City'|translate}} </ion-label>\n      <ion-icon slot=\"start\"  name=\"business\"></ion-icon>\n      <ion-select value=\"city\" multiple=\"false\" [(ngModel)]=\"usersData.City_id\" interface=\"action-sheet\"  [placeholder]=\"'Select city'|translate\">\n        <ion-select-option   *ngFor=\"let city of cityArr \" [value]=\"city.Id\"  (ionChange)=\"cityIdSelected(city.Id)\"  >{{applang == 'ar' ? city.Name_ar : city.Name_en }} </ion-select-option> \n      </ion-select>\n   </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\" [(ngModel)]=\"usersData.Password\"   [placeholder]=\"'password'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\">\n      <ion-icon slot=\"start\"  name=\"lock-closed\"></ion-icon>\n      <ion-input type=\"password\"  [(ngModel)]=\"usersData.com_Password\"   [placeholder]=\"'confirm password'|translate\"></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"none\"  (click)=\"presentModal()\" >\n      <ion-icon slot=\"start\"  name=\"location\"></ion-icon> \n     <div>\n       {{'Click to Enter your address on the map'|translate}}<br>\n        {{userlocation}}\n      \n     </div>\n    \n    </ion-item> \n\n    </ion-list>\n    \n    \n  <div class=\"Term_condition_label\" >\n    <ion-row>\n      <ion-col size=\"2\">\n\n    <ion-checkbox  [(ngModel)]=\"checkTerms\" ></ion-checkbox>\n    \n      </ion-col>\n    \n      <ion-col size=\"10\"> \n    <p [routerLink]=\"['/terms-conditions']\" >{{'By click on T&C'|translate}}</p>\n      </ion-col>\n    </ion-row>\n   <br><br>\n    <ion-button  (click)=\"SignUpClick()\" size=\"default\" expand=\"block\"  shape=\"round\">\n      {{'Sign Up'|translate}} \n    </ion-button>\n\n    <ion-button [routerLink]=\"['/sign-in']\" size=\"default\"  expand=\"block\" fill=\"outline\" shape=\"round\">\n      {{'Sign In'|translate}}\n    </ion-button>\n\n    <ion-button (click)=\"forgotpassword()\"  size=\"default\"  expand=\"block\" fill=\"clear\"   shape=\"round\">\n       {{'forgot password'|translate}}\n    </ion-button>\n\n  </div>\n    \n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_sign-up_sign-up_module_ts.js.map