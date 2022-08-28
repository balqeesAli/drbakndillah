(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_map_map_module_ts"],{

/***/ 1114:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 61091:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1114);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 93384)).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95408:
/*!************************************************!*\
  !*** ./src/app/page/map/map-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 93203);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 45761:
/*!****************************************!*\
  !*** ./src/app/page/map/map.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 95408);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 93203);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 93203:
/*!**************************************!*\
  !*** ./src/app/page/map/map.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.page.html */ 71986);
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss */ 8683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 61091);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 28427);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/network */ 63848);














let MapPage = class MapPage {
    constructor(loadingController, alertController, nativeGeocoder, navCtrl, translate, http, toastCtrl, actionSheetController) {
        //  this.GetMarkers();
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nativeGeocoder = nativeGeocoder;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.actionSheetController = actionSheetController;
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.viewMap = 1;
        this.infoWindowView = 0;
        this.viewMandoobCard = 0;
        this.viewAddnewItem = 0;
        this.infoWindowDetails = "";
        this.sliderOptions = {
            autoplay: true,
            slidesPerView: 1
        };
        this.infoWindows = [];
        this.AddsArray = [];
        this.newmarkers = [];
        this.markers = [
        // {
        //   latitude: "23.594427",
        //   longitude: "58.428210",
        //   data:[
        //     {
        //       Title_ar: "Salm",
        //       itemID:"1",
        //       latitude: "22.593817",
        //       longitude: "58.429606",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     },
        //     {
        //       Title_ar: "Ahmed",
        //       itemID:"2",
        //       latitude: "23.593817",
        //       longitude: "58.429605",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     }
        //   ],
        //   icon: "itemicon",
        // },
        // {
        //   latitude: "23.593665",
        //   longitude: "58.429031",
        //   data:[
        //     {
        //       Title_ar: "Balqees",
        //       itemID:"3",
        //       latitude: "22.593817",
        //       longitude: "58.429606",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     },
        //     {
        //       Title_ar: "Sara",
        //       itemID:"4",
        //       latitude: "23.593817",
        //       longitude: "58.429605",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     }
        //   ],
        //   icon: "myitem", 
        // },
        // {
        //   latitude: "23.593665",
        //   longitude: "58.429031",
        //   data:[
        //     {
        //       Title_ar: "Omar",
        //       itemID:"5",
        //       latitude: "22.593817",
        //       longitude: "58.429606",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     },
        //     {
        //       Title_ar: "Majad",
        //       itemID:"7",
        //       latitude: "23.593817",
        //       longitude: "58.429605",
        //       icon: "peopleicon",
        //       date: "12-2-2021",
        //       time: "16:00",
        //       Max_price_delivery: 2,
        //       image: "../../../assets/icon/logo.png"
        //     }
        //   ],
        //   icon: "myitem", 
        // }
        ];
        this.Selected_language_direction();
        this.IsLogin();
        // Calling function every 2 seconds 
        setInterval(data => {
            this.IsLogin();
            this.IsBlocked();
            this.Selected_language_direction();
            this.IsLogin();
            this.IsBlocked();
            this.GetUserDataandStoreinLoacalStorage();
            // console.log("hi");
            // ckeck internet connectivity 
            if (this.viewLoginBtn == 1 && this.UserBlock == 0) {
                this.GetMarkers();
                console.log("GetMarkers");
            }
        }, 2000);
        // this.Selected_language_direction();
        // Storage.set({
        //   key: 'name',
        //   value: JSON.stringify(this.markers),
        // });
        // Storage.set({
        //   key: 'HasLogin',
        //   value: '0',
        // });
    }
    ionViewDidEnter() {
        this.Checkinternetconnction();
        this.showMap();
        this.ViewAdds();
        this.Selected_language_direction();
        this.IsLogin();
        this.IsBlocked();
        this.GetUserDataandStoreinLoacalStorage();
    }
    ngOnInit() {
        this.getNumbersOfPackages();
    }
    specifyFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/filter');
        });
    }
    filterMarker(sort) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            const userLat = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'cureent_latitude' });
            console.log(JSON.parse(userLat.value));
            const userLog = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'cureent_longitude' });
            console.log(JSON.parse(userLog.value));
            let FilterDetails = {
                "userLat": JSON.parse(userLat.value),
                "userLong": JSON.parse(userLog.value),
                "userId": JSON.parse(UID.value),
                "sort": sort,
                "distance": "",
                "mincost": "",
                "maxcost": "",
                "goverate": "",
                "city": ""
            };
            console.log("FilterDetails");
            this.navCtrl.navigateForward('/filter-item', {
                state: FilterDetails
            });
        });
    }
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 2000,
            });
            toast.present();
        });
    }
    DeleteItem(itemID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let Alarm;
            this.translate.get('Alarm !').subscribe(value => { Alarm = value; });
            let Delete;
            this.translate.get('Delete').subscribe(value => { Delete = value; });
            let Areyousure;
            this.translate.get('Are you sure ?').subscribe(value => { Areyousure = value; });
            let Cancel;
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            const alert = yield this.alertController.create({
                header: Alarm,
                message: Areyousure,
                buttons: [
                    {
                        text: Cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: Delete,
                        handler: () => {
                            this.DeleteItem_confirm(itemID);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    DeleteItem_confirm(itemID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let somethingWronghappedpleasetryagin;
            this.translate.get('somethingWronghappedpleasetryagin').subscribe(value => { somethingWronghappedpleasetryagin = value; });
            let Deletedsuccessfully;
            this.translate.get('Deleted successfully').subscribe(value => { Deletedsuccessfully = value; });
            const loading = yield this.loadingController.create({
                spinner: 'bubbles'
            });
            yield loading.present();
            let url = this.Api_URL + 'updateItemState.php?id=' + itemID + '&status=deleted';
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response[0].response);
                this.GetMarkers();
                this.addMarkersToMap(this.markers);
                loading.dismiss();
                if (response[0].response == 'success') {
                    this.infoWindowView = 0;
                    this.presentToast(Deletedsuccessfully);
                }
                else {
                    this.presentToast(somethingWronghappedpleasetryagin);
                }
            }, (error) => {
                this.presentToast(somethingWronghappedpleasetryagin);
            });
            loading.dismiss();
        });
    }
    editclick(data) {
        this.navCtrl.navigateForward('/edit-item', {
            state: data
        });
    }
    getNumbersOfPackages() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let mandoobCard;
            let newitem;
            // const userId = await Storage.get({ key: 'Id' });
            // console.log("userId_____"+ JSON.parse(userId.value));
            const userId = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Id' });
            console.log("userId_____" + JSON.parse(userId.value));
            let url = this.Api_URL + "getUsersPackagesNumber.php?id=" + JSON.parse(userId.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                let retrivedResponse = response;
                console.log('response' + JSON.stringify(response));
                mandoobCard = retrivedResponse.non_service_requester_package_number;
                newitem = retrivedResponse.service_requester_package_number;
                console.log(mandoobCard + "__" + newitem);
                //  console.log('viewMandoobCard'+this.viewMandoobCard);
                if (mandoobCard != '0') {
                    this.viewMandoobCard = 1;
                    console.log("viewMandoobCard" + this.viewMandoobCard);
                }
                ;
                if (newitem != '0') {
                    this.viewAddnewItem = 1;
                    console.log("viewAddnewItem");
                }
                ;
            }, (error) => {
            });
        });
    }
    movetoAddPAde(data) {
        this.navCtrl.navigateForward('/view-adds', {
            state: data
        });
        // /view-adds
        //         Description_ar: "اشتراك الانترنت 4 رسالات لمدة سنة مع مكالمات مجانية و استخدام مواقع التواصل الاجتماعي"
        // Description_en: "get one year internet only with 4 rials with free calls and unlimited social media"
        // End_date: "2022-02-18"
        // Image: "applogo.png"
        // Period_ar: "اسبوع"
        // Period_en: "one week"
        // Start_date: "2021-11-11"
        // Title_ar: "عمانتل"
        // Title_en: "omantel"
        // URL_link: "https://www.omantel.om/"
    }
    ViewAdds() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let url = this.Api_URL + 'viewadds.php';
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                this.AddsArray = response;
            }, (error) => { });
        });
    }
    AcceptItem(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            let url = this.Api_URL + 'insertintoOrder.php?itemID=' + data.itemID + '&MID=' + JSON.parse(UID.value) + '&OID=' + data.User_id;
            console.log(url);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log('response' + response[0].response);
                if (response[0].response == 'success') {
                    this.presentToast("YouAcceptOrder");
                    //  https://drbakndillah.com/Api/firebaseRequest.php?title=Hi&body=Are%20you%20okey&token=
                    let other_url = this.Api_URL + 'firebaseRequest.php?title=New Offer&body=One Mandoob accept your Order&token=' + data.token;
                    console.log(other_url);
                    this.http.get(other_url, {}).subscribe((response) => {
                        console.log('response' + response[0].response);
                    }, (error) => {
                        this.presentToast(somethingwronghappend);
                    });
                    this.navCtrl.navigateForward('tabs/orders');
                }
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
        });
    }
    UpdateDeleteStatus(status, iid) {
        let somethingwronghappend;
        this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
        let itemDeleted;
        this.translate.get('itemDeleted').subscribe(value => { itemDeleted = value; });
        let url = this.Api_URL + 'updateItemState.php?id=' + iid + '&status=' + status;
        console.log(url);
        this.http.get(url, {}).subscribe((response) => {
            console.log(response);
            if (response[0].response == 'success') {
                this.presentToast(itemDeleted);
                this.infoWindowView = 0;
            }
            else {
                this.presentToast(somethingwronghappend);
                console.log('somethingwronghappend');
            }
        }, (error) => {
            this.presentToast(somethingwronghappend);
            console.log('somethingwronghappend');
        });
    }
    cancelClick() {
        this.infoWindowView = 0;
    }
    DirectionClick(lat, long) {
        let url = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long;
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: url });
    }
    viewItemDetails(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(data);
            let cancel;
            let PriceDelivery;
            let OMR;
            let Deliverbefore;
            let at;
            let address;
            this.translate.get('cancel').subscribe(value => { cancel = value; });
            this.translate.get('Price Delivery').subscribe(value => { PriceDelivery = value; });
            this.translate.get('OMR').subscribe(value => { OMR = value; });
            this.translate.get('Deliver before').subscribe(value => { Deliverbefore = value; });
            this.translate.get('at').subscribe(value => { at = value; });
            let location = '';
            if (this.applang == 'ar') {
                location = data.governate_name_ar + "," + data.city_name_ar;
            }
            else {
                location = data.governate_name_en + "," + data.city_name_en;
            }
            //Get User Position 
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(parseFloat(data.Lat), parseFloat(data.Log), options)
                .then((result) => {
                console.log(JSON.stringify(result[0]));
                address = result[0].countryName + "," + result[0].administrativeArea + "," + result[0].locality + "," + result[0].subLocality + "," + result[0].thoroughfare;
                console.log(address);
            })
                .catch((error) => console.log(error));
            const actionSheet = yield this.actionSheetController.create({
                header: data.Title_ar + ' - ' + data.Title_en,
                subHeader: data.Other_note,
                buttons: [{
                        text: PriceDelivery + '  ' + data.Max_price_delivery + ' ' + OMR,
                        role: 'destructive',
                        icon: 'logo-usd',
                        handler: () => {
                        }
                    }, {
                        text: Deliverbefore + '  ' + data.Maximin_date,
                        icon: 'calendar',
                        handler: () => {
                        }
                    }, {
                        text: at + ' ' + data.Maximin_time,
                        icon: 'time',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: location,
                        icon: 'pin',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: cancel,
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
    GetMarkers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let noOrderMeg;
            this.translate.get('There are no order to delivery').subscribe(value => { noOrderMeg = value; });
            let somethingwronghappend;
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let userData;
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            this.AppUser = JSON.parse(UID.value);
            let url = this.Api_URL + 'returnMarkers2.php?ID=' + JSON.parse(UID.value);
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log(response);
                userData = response;
                this.markers = response;
                if (this.markers.length == 0) {
                    // this.presentToast(noOrderMeg);
                }
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
            ////
            console.log('markers__' + this.markers);
            this.newmarkers = [];
            let latVal;
            for (let i = 0; i < this.markers.length; i++) {
                console.log('I am inside loop ');
                latVal = this.markers[i].latitude;
                if (this.newmarkers.length == 0) {
                    console.log('Length is ZERO');
                    this.newmarkers.push(this.markers[i]);
                }
                else {
                    let count = 0;
                    for (let x = 0; x < this.newmarkers.length; x++) {
                        console.log(this.newmarkers[x].latitude + "_________" + this.markers[i].latitude);
                        if (JSON.stringify(this.newmarkers[x].latitude) == JSON.stringify(latVal)) {
                            console.log('IsEqual');
                            let tempData = [];
                            tempData = this.markers[i].data.concat(this.newmarkers[x].data);
                            /// Check data duplication
                            ///
                            this.newmarkers[x].icon = "appicon";
                            this.newmarkers[x].data = tempData;
                        }
                        else {
                            count++;
                            if (count == this.newmarkers.length) {
                                this.newmarkers.push(this.markers[i]);
                                console.log('Is Push it');
                            }
                        }
                    }
                }
            }
            console.log("I am still in side function");
            this.markers = this.newmarkers;
            ///////
            console.log('newmarkers___' + JSON.stringify(this.newmarkers));
        });
    }
    Checkinternetconnction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_network__WEBPACK_IMPORTED_MODULE_6__.Network.getStatus().then((success) => {
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
    GetUserDataandStoreinLoacalStorage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    browser() {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: 'http://capacitorjs.com/' });
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.applang = JSON.parse(language.value);
            this.translate.setDefaultLang(JSON.parse(language.value));
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
            // this.presentAlertConfirm(); 
        });
    }
    IsBlocked() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const Blocked = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Blocked' });
            console.log(JSON.parse(Blocked.value));
            if (JSON.parse(Blocked.value) == 1) {
                let message;
                this.translate.get('You are blocked! Contact us by drbak.ndillah@gmail.com').subscribe(value => { message = value; });
                this.PreserntAlert(message);
            }
        });
    }
    IsLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const HasLogin = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'HasLogin' });
            console.log(JSON.parse(HasLogin.value));
            this.viewLoginBtn = JSON.parse(HasLogin.value);
            this.HasLogin = JSON.parse(HasLogin.value);
            const Blocked = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.get({ key: 'Blocked' });
            console.log(JSON.parse(Blocked.value));
            this.UserBlock = JSON.parse(Blocked.value);
        });
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                data: marker.data,
                icon: {
                    url: "../../../assets/icon/" + marker.icon + ".png",
                    scaledSize: new google.maps.Size(30, 30)
                },
                latitude: marker.latitude,
                longitude: marker.longitude
            });
            mapMarker.setMap(this.map);
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    ir() {
        console.log("go");
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content" ><img src="' + marker.image + '"  width="60px" height="60px" alt="">' +
            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
            '<p> Latitude:' + marker.latitude + '</p>' +
            '<p (click)="ir()"> Longitude: ' + marker.longitude + '</p>' +
            ' <ion-button id="directionclick"  (click)="onClick()" expand="block"  shape="round">direction</ion-button>' +
            ' <ion-button id="viewclick"  (click)="onClick()" expand="block"  shape="round">view</ion-button>' +
            ' <ion-button id="editclick"  (click)="onClick()" expand="block"  shape="round">edit</ion-button>' +
            ' <ion-button id="deleteclick"  (click)="onClick()" expand="block"  shape="round">deleteclick</ion-button>' +
            ' <ion-button id="acceptclick"  (click)="onClick()" expand="block"  shape="round">accept</ion-button></div>';
        // let infoWindowContent = '<div  class="popup_mark_details"> <ion-row><ion-col size="3"> <img  width="60px" height="60px"  src="../../../assets/icon/logo.png" alt=""></ion-col> <ion-col size="9"><ion-row><ion-col size="6"> Book</ion-col> <ion-col size="6"><ion-icon  name="logo-usd"></ion-icon>2 OMR</ion-col><ion-col size="12"> Deliverd before 12/2/2021 At 16:00</ion-col></ion-row> </ion-col>  </ion-row> </div>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            this.infoWindowView = 1;
            this.infoWindowDetails = marker;
            console.log(this.infoWindowDetails);
            console.log(this.infoWindowView);
            // infoWindow.open(this.map, marker);
        });
        // Once click on Accept btn
        google.maps.event.addListener(infoWindow, 'domready', () => {
            var clickableItem = document.getElementById('acceptclick');
            clickableItem.addEventListener('click', () => {
                console.log(marker);
            });
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    showMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // Get User current location
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition();
            console.log('Current position:', coordinates);
            console.log(coordinates.coords.latitude);
            console.log(coordinates.coords.longitude);
            // Store user current location in Storage
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                key: 'cureent_latitude',
                value: JSON.stringify(coordinates.coords.latitude),
            });
            _capacitor_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.set({
                key: 'cureent_longitude',
                value: JSON.stringify(coordinates.coords.longitude),
            });
            //load Map 
            const location = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
            // const location = new google.maps.LatLng(23.593717, 58.429206);
            const options = {
                center: location,
                zoom: 15,
                disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.mapRef.nativeElement, options);
            this.addMarkersToMap(this.markers);
            // Set marker foor user location 
            let position = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                icon: {
                    url: "../../../assets/icon/currentUserLocation.png",
                    scaledSize: new google.maps.Size(40, 50)
                },
                latitude: coordinates.coords.latitude,
                longitude: coordinates.coords.longitude
            });
            mapMarker.setMap(this.map);
            this.viewMap = 0;
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let SignUp;
            let message;
            let SignIn;
            let Cancel;
            this.translate.get('Sign Up').subscribe(value => { SignUp = value; });
            this.translate.get('Sign in to continue using the app ').subscribe(value => { message = value; });
            this.translate.get('Sign In').subscribe(value => { SignIn = value; });
            this.translate.get('cancel').subscribe(value => { Cancel = value; });
            console.log("LOGIN_" + SignUp + "__" + message + "__" + SignIn + "__" + Cancel + "__");
            if (SignUp != undefined) {
                const alert = yield this.alertController.create({
                    header: SignIn + '!',
                    message: message,
                    buttons: [
                        {
                            text: SignIn,
                            handler: () => {
                                this.navCtrl.navigateForward('sign-in');
                            }
                        },
                        {
                            text: SignUp,
                            handler: () => {
                                this.navCtrl.navigateForward('sign-up');
                            }
                        },
                        {
                            text: Cancel,
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel: blah');
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    PreserntAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController }
];
MapPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef, static: false },] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPage);



/***/ }),

/***/ 8683:
/*!****************************************!*\
  !*** ./src/app/page/map/map.page.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#map {\n  height: 100%;\n}\n\n.popup_mark_details {\n  background-color: #AAA9A9;\n  border: 3px solid yellow;\n  padding: 5px;\n  margin: 10px;\n  color: black;\n  border-radius: 10px;\n  width: 95%;\n  font-size: large;\n}\n\n.detailsDiv {\n  position: absolute;\n  bottom: 5%;\n  right: 0;\n  left: 0;\n}\n\n.containsAllDivs {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  display: flex;\n}\n\n#content {\n  background-color: #AAA9A9;\n  border: 2px solid #fbf696;\n  padding: 0;\n  margin: 0;\n  color: white;\n  width: 90%;\n}\n\n#content img {\n  border-radius: 30px;\n}\n\n.upperPart {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  left: 0;\n}\n\n.add_div {\n  width: 95%;\n  margin-top: 10px;\n}\n\n.add_div img {\n  height: 120px;\n  width: 100%;\n  border-radius: 20px;\n  border: 2px solid #353535;\n  object-fit: cover;\n}\n\n.filtration_chip {\n  width: 100%;\n  overflow-y: scroll;\n  display: flex;\n}\n\n.filtration_chip div ion-chip {\n  margin: 5px;\n  width: 120px;\n  background-color: #353535;\n  color: yellow;\n}\n\n.filtration_card {\n  background-color: #fbf696;\n}\n\n.filtration_card ion-label {\n  display: block;\n  margin: 0 20px;\n  font-size: medium;\n  color: #353535;\n}\n\n.filtration_card img {\n  border: 1px solid #353535;\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\n.offer-cost {\n  position: relative;\n}\n\n.offer-cost div {\n  background-color: #3535355e;\n  color: yellow;\n  width: 30%;\n  border-radius: 50px;\n  padding: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.offer-cost div ion-icon {\n  color: yellow !important;\n  margin: 0px 0px;\n  display: inline-block;\n}\n\n.infowindowBTN {\n  display: inline-flex;\n}\n\n.price {\n  background-color: #DAD25B;\n  border-radius: 30px;\n  color: #7B7A7A;\n  text-align: center;\n  font-size: small;\n}\n\n.price ion-icon {\n  color: #7B7A7A !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFJQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBRko7O0FBS0E7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUpKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFRQTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBTko7O0FBU0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFXQTtFQUVJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBYUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQyxhQUFBO0FBVkw7O0FBYUE7RUFFSSxXQUFBO0VBQVksWUFBQTtFQUNaLHlCQUFBO0VBQ0EsYUFBQTtBQVZKOztBQWNBO0VBQ0EseUJBQUE7QUFYQTs7QUFjQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBWEo7O0FBZUM7RUFDRyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFaSjs7QUFjQztFQUVHLGtCQUFBO0FBWko7O0FBY0E7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQVhKOztBQWNBO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFYSjs7QUFjQTtFQUNJLG9CQUFBO0FBWEo7O0FBYUE7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYSjs7QUFlQTtFQUVJLHlCQUFBO0FBYkoiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuLnBvcHVwX21hcmtfZGV0YWlsc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBOUE5O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcblxuXG5cbn1cbi5kZXRhaWxzRGl2e1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uY29udGFpbnNBbGxEaXZze1xuXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuI2NvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTlBOTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmJmNjk2O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogOTAlO1xuXG5cbn1cbiNjb250ZW50IGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udXBwZXJQYXJ0e1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5hZGRfZGl2e1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBcblxufVxuXG4uYWRkX2RpdiBpbWd7XG5cbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM1MzUzNTtcbiAgICBvYmplY3QtZml0OmNvdmVyO1xuICAgXG59XG5cbi5maWx0cmF0aW9uX2NoaXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsdHJhdGlvbl9jaGlwIGRpdiBpb24tY2hpcHtcbiAgICBcbiAgICBtYXJnaW46NXB4OyB3aWR0aDoxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG4gICAgY29sb3I6IHllbGxvdztcbiAgIFxuXG59IFxuLmZpbHRyYXRpb25fY2FyZHtcbmJhY2tncm91bmQtY29sb3I6ICNmYmY2OTY7XG59XG5cbi5maWx0cmF0aW9uX2NhcmQgaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjMzUzNTM1O1xuXG4gfVxuXG4gLmZpbHRyYXRpb25fY2FyZCBpbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cbiAub2ZmZXItY29zdHtcbiAgICAvLyAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB9XG4ub2ZmZXItY29zdCBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTVlO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIFxufVxuLm9mZmVyLWNvc3QgZGl2IGlvbi1pY29ue1xuICAgIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbiAgICBtYXJnaW46ICAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmluZm93aW5kb3dCVE57XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ucHJpY2V7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RBRDI1QjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiAjN0I3QTdBOztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcblxuXG59XG4ucHJpY2UgaW9uLWljb257XG4gICAgIFxuICAgIGNvbG9yOiAjN0I3QTdBICFpbXBvcnRhbnQ7XG5cblxufSJdfQ== */");

/***/ }),

/***/ 71986:
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/map/map.page.html ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n \n\n  <ion-skeleton-text *ngIf=\"viewMap == 1\" animated style=\"width: 100%; height: 100%; position: absolute; top: 0; bottom: 0; right: 0; left: 0;\"></ion-skeleton-text>\n  \n  <div #map id=\"map\"></div>\n  <div class=\"upperPart\"> \n    <div align=\"center\">\n      <div class=\"add_div\">\n\n        <ion-slides mode=\"ios\" pager=\"ios\" [options]=\"sliderOptions\">\n          <ion-slide  *ngFor='let i of AddsArray' >\n            <img [src]=\"i.Image\" alt=\"\"   (click)=\"movetoAddPAde(i)\">\n          </ion-slide>\n        </ion-slides>\n\n\n      </div>\n    </div>\n    <div class=\"filtration_chip\" *ngIf=\"mandoobCard != 0  && HasLogin != 0 \" >\n      <div>\n        <ion-chip (click)=\"filterMarker('nearest')\" color=\"primary\" mode=\"ios\" outline=\"true\">\n          <ion-label>{{'Nearest'|translate}}</ion-label>\n        </ion-chip>\n      </div>\n\n      <div>\n        <ion-chip   (click)=\"filterMarker('heighest')\"  color=\"primary\" mode=\"ios\" outline=\"true\">\n          <ion-label>{{'Highest price'|translate}}</ion-label>\n        </ion-chip>\n      </div>\n\n      <div>\n        <ion-chip  (click)=\"filterMarker('lowest')\" color=\"primary\" mode=\"ios\" outline=\"true\">\n          <ion-label>{{'Lowest price'|translate}}</ion-label>\n        </ion-chip>\n      </div>\n\n      <div>\n        <ion-chip (click)=\"specifyFilter()\" color=\"primary\" mode=\"ios\" outline=\"true\"    >\n          <ion-label>{{'Specify'|translate}}</ion-label>\n        </ion-chip>\n      </div>\n\n    </div>\n\n\n  <div *ngIf=\"viewLoginBtn == 0\" style=\" width:70%; margin: auto; margin-top: 30%; \">\n    <ion-button   [routerLink]=\"['/sign-in']\"   expand=\"block\" shape=\"round\">\n      {{'Sign In'|translate}}\n    </ion-button>\n    \n    <ion-button [routerLink]=\"['/sign-up']\" expand=\"block\" shape=\"round\">\n      {{'Sign Up'|translate}}\n    </ion-button>\n    \n  </div>\n\n  </div>\n  \n\n  <!-- <div class=\"detailsDiv\">\n    <div class=\"popup_mark_details\" *ngIf=\"infoWindowView == 1\">\n      <ion-row>\n        <ion-col size=\"3\"> <img [src]=\"infoWindowDetails.image\" alt=\"\"></ion-col>\n        <ion-col size=\"9\">\n          <ion-row>\n            <ion-col size=\"8\"> {{infoWindowDetails.title}}</ion-col>\n            <ion-col size=\"4\" class=\"price\"> \n              {{infoWindowDetails.price}} {{'OMR'|translate}}\n            </ion-col>\n            <ion-col size=\"12\"> {{'Deliver before'|translate}} {{infoWindowDetails.date}} {{'at'|translate}} {{infoWindowDetails.time}}</ion-col>\n          </ion-row>\n        </ion-col> \n\n        <div class=\"infowindowBTN\">\n\n          <ion-button size=\"small\" id=\"directionclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\"\n            color=\"secondary\">{{'Direction'|translate}}</ion-button>\n          <ion-button size=\"small\" id=\"viewclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n            {{'View'|translate}}</ion-button>\n          <ion-button size=\"small\" id=\"editclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n            {{'Edit'|translate}}</ion-button>\n          <ion-button size=\"small\" id=\"deleteclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n            {{'Delete'|translate}}</ion-button>\n          <ion-button size=\"small\" id=\"deleteclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n            {{'Accept'|translate}}</ion-button>\n          <ion-button size=\"small\" id=\"deleteclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n            {{'cancel'|translate}}</ion-button>\n\n        </div>\n \n      </ion-row>\n    </div>\n  </div> -->\n\n\n  \n  <div class=\"detailsDiv\">\n    <div class=\"containsAllDivs\" *ngIf=\"infoWindowView == 1\" >\n\n      <div dir=\"ltr\"  class=\"popup_mark_details\"   *ngFor=\"let i of infoWindowDetails.data\" >\n        <ion-row>\n          <ion-col size=\"3\"> <img [src]=\"i.Image\" alt=\"\"></ion-col>\n          <ion-col size=\"9\">\n            <ion-row>\n              <ion-col size=\"8\">  {{applang == 'ar' ? i.Title_ar : i.Title_en }}   </ion-col>\n              <ion-col size=\"4\" class=\"price\">\n                <!-- <ion-icon name=\"logo-usd\"></ion-icon> -->\n                {{i.Max_price_delivery}} {{'OMR'|translate}}\n              </ion-col>\n              <ion-col size=\"12\"> {{'Deliver before'|translate}} {{i.Maximin_date}} <br> {{'at'|translate}} {{i.Maximin_time}}</ion-col>\n            </ion-row>\n          </ion-col>\n          <!-- <ion-col size=\"12\"> <ion-button (click)=\"onClick()\" expand=\"block\" shape=\"round\">Click me </ion-button> -->\n  \n          <div class=\"infowindowBTN\">\n  \n            <ion-button size=\"small\" id=\"directionclick\" (click)=\"DirectionClick(i.Lat , i.Log )\" expand=\"block\" shape=\"round\"\n              color=\"secondary\">{{'Direction'|translate}}</ion-button>\n            <ion-button  size=\"small\" id=\"viewclick\" (click)=\"viewItemDetails(i)\" expand=\"block\" shape=\"round\" color=\"secondary\">\n              {{'View'|translate}}</ion-button>\n            <ion-button *ngIf='i.User_id == AppUser' size=\"small\" id=\"editclick\" (click)=\"editclick(i)\" expand=\"block\" shape=\"round\" color=\"secondary\">\n              {{'Edit'|translate}}</ion-button>\n            <ion-button *ngIf='i.User_id == AppUser'  size=\"small\" id=\"deleteclick\" (click)=\"DeleteItem(i.itemID)\" expand=\"block\" shape=\"round\" color=\"secondary\">\n              {{'Delete'|translate}}</ion-button>\n            <ion-button *ngIf='i.User_id != AppUser' size=\"small\" id=\"deleteclick\" (click)=\"AcceptItem( i )\" expand=\"block\" shape=\"round\" color=\"secondary\">\n              {{'Accept'|translate}}</ion-button>\n            <ion-button size=\"small\" id=\"deleteclick\" (click)=\"cancelClick()\" expand=\"block\" shape=\"round\" color=\"secondary\">\n              {{'cancel'|translate}}</ion-button>\n  \n          </div>\n  \n  \n  \n          <!-- <ion-button id=\"acceptclick\" (click)=\"onClick()\" expand=\"block\" shape=\"round\">accept</ion-button> -->\n  \n        </ion-row>\n      </div>\n\n    </div>\n   \n  </div>\n\n  <!-- <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text animated></ion-skeleton-text>\n    </ion-avatar>\n    <ion-label>\n      <ion-skeleton-text animated width=\"50%\"></ion-skeleton-text>\n      <ion-skeleton-text animated width=\"80%\"></ion-skeleton-text>\n    </ion-label>\n  </ion-item>\n  -->\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_map_map_module_ts.js.map