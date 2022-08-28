(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_filter-item_filter-item_module_ts"],{

/***/ 83515:
/*!****************************************************************!*\
  !*** ./src/app/page/filter-item/filter-item-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItemPageRoutingModule": () => (/* binding */ FilterItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _filter_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-item.page */ 42092);




const routes = [
    {
        path: '',
        component: _filter_item_page__WEBPACK_IMPORTED_MODULE_0__.FilterItemPage
    }
];
let FilterItemPageRoutingModule = class FilterItemPageRoutingModule {
};
FilterItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterItemPageRoutingModule);



/***/ }),

/***/ 56289:
/*!********************************************************!*\
  !*** ./src/app/page/filter-item/filter-item.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItemPageModule": () => (/* binding */ FilterItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _filter_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-item-routing.module */ 83515);
/* harmony import */ var _filter_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-item.page */ 42092);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let FilterItemPageModule = class FilterItemPageModule {
};
FilterItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _filter_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterItemPageRoutingModule
        ],
        declarations: [_filter_item_page__WEBPACK_IMPORTED_MODULE_1__.FilterItemPage]
    })
], FilterItemPageModule);



/***/ }),

/***/ 42092:
/*!******************************************************!*\
  !*** ./src/app/page/filter-item/filter-item.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterItemPage": () => (/* binding */ FilterItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter-item.page.html */ 12384);
/* harmony import */ var _filter_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-item.page.scss */ 94902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 28427);








// import { PlaceApiPage } from '../../place-api/place-api.page'; 


// import { threadId } from 'worker_threads';



const IMAGE_DIR = 'stored-images';
let FilterItemPage = class FilterItemPage {
    constructor(navCtrl, actionSheetController, modalController, alertController, http, nativeGeocoder, plt, loadingCtrl, toastCtrl, route, router, translate) {
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.http = http;
        this.nativeGeocoder = nativeGeocoder;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.lan = 'ar';
        this.item = { "type": "item", };
        this.today = Date.now();
        this.imagaUploaded = 0;
        this.IdCardImage = 'https://drbakndillah.com/Api/uploads/uploadIcon.png';
        this.Api_upload_URL = 'https://drbakndillah.com/Api/uploads/';
        this.Api_URL = 'https://drbakndillah.com/Api/';
        this.IdCardImageView = 1;
        this.images = [];
        this.markers = [];
        this.selected_image_name = 'imgName';
        // city: ""
        // distance: ""
        // goverate: ""
        // maxcost: ""
        // mincost: ""
        // sort: "heighest"
        // userId: "35"
        // userLat: 23.6108913
        // userLong: 58.2185611
        // type => Passenger , type => Item
        this.inputItemName_ar = "Item Name (Arabic)";
        this.inputItemName_en = "Item Name (English)";
        this.userlong = "";
        this.userlat = "";
        this.FilterDetails = {
            city: "",
            distance: "",
            goverate: "",
            maxcost: "",
            mincost: "",
            sort: "",
            userId: "",
            userLat: "",
            userLong: ""
        };
        translate.setDefaultLang('en');
        // [ngClass]="offercostStyle?'offer-cost':'offer-cost_ar'" 
        this.translate.get('offercostStyle').subscribe(value => { this.offercostStyle = value; });
        if (router.getCurrentNavigation().extras.state) {
            this.FilterDetails = this.router.getCurrentNavigation().extras.state;
            console.log('FilterDetails' + this.FilterDetails);
            this.GetMarkers();
        }
        console.log('FilterDetails');
        this.Selected_language_direction();
    }
    ngOnInit() {
        this.GetMarkers();
    }
    specifyFilter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/filter');
        });
    }
    DirectionClick(lat, long) {
        let url = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long;
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: url });
    }
    viewItemDetails(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    AcceptItem(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // https://drbakndillah.com/Api/insertintoOrder.php?itemID=45&MID=38&OID=35
            let somethingwronghappend;
            let YouAcceptOrder;
            this.translate.get('YouAcceptOrder').subscribe(value => { YouAcceptOrder = value; });
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            const loading = yield this.loadingCtrl.create({
                duration: 2000,
                spinner: 'bubbles'
            });
            yield loading.present();
            let userData;
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
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
    filterMarker(sort) {
        this.FilterDetails.sort = sort;
        this.GetMarkers();
    }
    GetMarkers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('response');
            let noOrderMeg;
            this.translate.get('There are no order to delivery').subscribe(value => { noOrderMeg = value; });
            let somethingwronghappend;
            this.translate.get('wrong_inserttopackage_details').subscribe(value => { somethingwronghappend = value; });
            let userData;
            // city: ""
            // distance: ""
            // goverate: ""
            // maxcost: ""
            // mincost: ""
            // sort: "heighest"
            // userId: "35"
            // userLat: 23.6108913
            // userLong: 58.2185611
            if (this.FilterDetails.mincost == '') {
                this.FilterDetails.mincost = 0;
            }
            if (this.FilterDetails.maxcost == '') {
                this.FilterDetails.maxcost = 1000;
            }
            let url = this.Api_URL + 'FilterMarkers.php?ID=' + this.FilterDetails.userId + '&UserLat=' + this.FilterDetails.userLat + '&UserLog=' + this.FilterDetails.userLong + '&userdistance=' + this.FilterDetails.distance + '&mincost=' + this.FilterDetails.mincost + '&maxcost=' + this.FilterDetails.maxcost + '&governate=' + this.FilterDetails.goverate + '&city=' + this.FilterDetails.city + '&sort=' + this.FilterDetails.sort;
            console.log(url);
            this.http.get(url, {}).subscribe((response) => {
                console.log('response ' + response);
                userData = response;
                this.markers = userData;
            }, (error) => {
                this.presentToast(somethingwronghappend);
            });
            ////
            console.log('markers__' + this.markers);
        });
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
FilterItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
FilterItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-filter-item',
        template: _raw_loader_filter_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterItemPage);



/***/ }),

/***/ 94902:
/*!********************************************************!*\
  !*** ./src/app/page/filter-item/filter-item.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".filter_item_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.filtration_chip {\n  width: 100%;\n  overflow-y: scroll;\n  display: flex;\n}\n\n.filtration_chip div ion-chip {\n  margin: 5px;\n  width: 110px;\n  background-color: #353535;\n  color: yellow;\n}\n\n.filtration_card {\n  background-color: #fbf696;\n}\n\n.filtration_card ion-label {\n  display: block;\n  margin: 0 20px;\n  font-size: medium;\n  color: #353535;\n}\n\n.filtration_card img {\n  border: 1px solid #353535;\n  border-radius: 5px;\n  height: 100%;\n  width: 100%;\n}\n\n.offer-cost {\n  position: relative;\n}\n\n.offer-cost div {\n  background-color: #3535355e;\n  color: yellow;\n  width: 30%;\n  border-radius: 50px;\n  padding: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.offer-cost div ion-icon {\n  color: yellow !important;\n  margin: 0px 0px;\n  display: inline-block;\n}\n\n.offer-cost_ar {\n  position: relative;\n}\n\n.offer-cost_ar div {\n  background-color: #3535355e;\n  color: yellow;\n  width: 30%;\n  border-radius: 50px;\n  padding: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.offer-cost_ar div ion-icon {\n  color: yellow !important;\n  margin: 0px 0px;\n  display: inline-block;\n}\n\n.noorderdiv {\n  text-align: center;\n  margin: auto;\n  padding-top: 20%;\n  color: #353535bd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0MsYUFBQTtBQUFMOztBQUdBO0VBRUksV0FBQTtFQUFZLFlBQUE7RUFDWix5QkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFJQTtFQUNBLHlCQUFBO0FBREE7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtDO0VBQ0cseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRko7O0FBSUM7RUFFRyxrQkFBQTtBQUZKOztBQUlBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFESjs7QUFJQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBS0E7RUFFSSxrQkFBQTtBQUhKOztBQUtBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFGSjs7QUFLQTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRkoiLCJmaWxlIjoiZmlsdGVyLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcl9pdGVtX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG5cbi5maWx0cmF0aW9uX2NoaXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsdHJhdGlvbl9jaGlwIGRpdiBpb24tY2hpcHtcbiAgICBcbiAgICBtYXJnaW46NXB4OyB3aWR0aDoxMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG4gICAgY29sb3I6IHllbGxvdztcbiAgIFxuXG59IFxuLmZpbHRyYXRpb25fY2FyZHtcbmJhY2tncm91bmQtY29sb3I6ICNmYmY2OTY7XG59XG5cbi5maWx0cmF0aW9uX2NhcmQgaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjMzUzNTM1O1xuXG4gfVxuXG4gLmZpbHRyYXRpb25fY2FyZCBpbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cbiAub2ZmZXItY29zdHtcbiAgICAvLyAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB9XG4ub2ZmZXItY29zdCBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTVlO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIFxufVxuLm9mZmVyLWNvc3QgZGl2IGlvbi1pY29ue1xuICAgIGNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbiAgICBtYXJnaW46ICAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuXG4ub2ZmZXItY29zdF9hcntcbiAgICAvLyAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiB9XG4ub2ZmZXItY29zdF9hciBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTVlO1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgXG59XG4ub2ZmZXItY29zdF9hciBkaXYgaW9uLWljb257XG4gICAgY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogIDBweCAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubm9vcmRlcmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgY29sb3I6ICMzNTM1MzViZDtcbiAgICBcbn1cbiJdfQ== */");

/***/ }),

/***/ 12384:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/filter-item/filter-item.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"filter_item_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'Items for Deliver'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"filtration_chip\" >\n    <div>\n      <ion-chip (click)=\"filterMarker('nearest')\" color=\"primary\" mode=\"ios\" outline=\"true\">\n        <ion-label>{{'Nearest'|translate}}</ion-label>\n      </ion-chip>\n    </div>\n\n    <div>\n      <ion-chip   (click)=\"filterMarker('heighest')\"  color=\"primary\" mode=\"ios\" outline=\"true\">\n        <ion-label>{{'Highest price'|translate}}</ion-label>\n      </ion-chip>\n    </div>\n\n    <div>\n      <ion-chip  (click)=\"filterMarker('lowest')\" color=\"primary\" mode=\"ios\" outline=\"true\">\n        <ion-label>{{'Lowest price'|translate}}</ion-label>\n      </ion-chip>\n    </div>\n\n    <div>\n      <ion-chip (click)=\"specifyFilter()\" color=\"primary\" mode=\"ios\" outline=\"true\"    >\n        <ion-label>{{'Specify'|translate}}</ion-label>\n      </ion-chip>\n    </div>\n\n  </div>\n\n\n  <ion-card class=\"filtration_card\" *ngFor='let i of markers' >\n\n    <ion-card-content > \n      \n      <!-- Image: \"https://drbakndillah.com/Api/uploads/applogo.png\"\nItem_status: \"new\"\nLat: \"23.59425495870947\"\nLog: \"58.445696400378274\"\nMax_price_delivery: \"2\"\nMaximin_date: \"2021-12-23\"\nMaximin_time: \"08:31:00\"\nOther_note: \"my note is nothing\"\nTitle_ar: \"لابتوب\"\nTitle_en: \"laptop\"\nType: \"item\"\nUser_id: \"35\"\ncity_name_ar: \"ولاية مسقط\"\ncity_name_en: \"Wilayat Muscat\"\ngovernate_name_ar: \"محافظة مسقط\"\ngovernate_name_en: \"Muscat\"\nitemID: \"36\"\ntoken: \"cRDqEWOrQFqK8LeaxYPsix:APA91bFm-oR4YdawkxGBS-_RsUr4DP-twSbE9jvoJ7Tlgs9ATfGw5koxL60VDzLgt9sX0goR3uhN5oqMPTDiKlso1JwkMOQ8kt05SbIa2rlnS16lLO_kLyTIH7phG6D2u0sAZRV2iDXc\" -->\n\n\n      <ion-row>\n        <ion-col size=\"3\" style=\"margin:0 !important; padding:0 !important;\">\n          <div align=\"right\">\n            <img [src]=\"i.Image\" alt=\"\">\n          </div>\n        </ion-col>\n        <ion-col size=\"9\"  style=\"margin:0 !important; padding:0 !important;\">\n\n          <div [ngClass]=\"offercostStyle?'offer-cost':'offer-cost_ar'\"  >\n            <ion-label>{{applang == 'ar' ? i.Title_ar : i.Title_en }} </ion-label>\n            \n            <div align=\"center\"> <p> \n              <!-- <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon> -->\n               {{i.Max_price_delivery}} {{'OMR'|translate}} </p> </div> </div> <div>\n            <ion-label>{{'Deliver before'|translate}}: {{i.Maximin_date}}</ion-label>\n          </div>\n\n          <div>\n            <ion-label>{{'at'|translate}} : {{i.Maximin_time}}</ion-label>\n          </div>\n          <div>\n            <ion-label>{{'For from you'|translate}} {{i.distance}} KM</ion-label>\n\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"DirectionClick(i.Lat , i.Log )\"  shape=\"round\">\n            {{'Direction'|translate}}\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"AcceptItem( i )\" shape=\"round\">\n            {{'Accept'|translate}}\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"4\">\n          <ion-button expand=\"block\" (click)=\"viewItemDetails(i)\"  shape=\"round\">\n            {{'View'|translate}}\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n<div class=\"noorderdiv\" *ngIf=\"markers.length == 0\">\n  <h3> {{ 'There are no order to delivery' |translate}}</h3>\n  </div>\n  \n  \n</ion-content>\n\n\n<!-- reify:ionic-angular: timing reifyNode:node_modules/@angu -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_filter-item_filter-item_module_ts.js.map