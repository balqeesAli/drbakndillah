(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_filter_filter_module_ts"],{

/***/ 36908:
/*!******************************************************!*\
  !*** ./src/app/page/filter/filter-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageRoutingModule": () => (/* binding */ FilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.page */ 60100);




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_0__.FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ 13243:
/*!**********************************************!*\
  !*** ./src/app/page/filter/filter.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageModule": () => (/* binding */ FilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-routing.module */ 36908);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ 60100);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let FilterPageModule = class FilterPageModule {
};
FilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterPageRoutingModule
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_1__.FilterPage]
    })
], FilterPageModule);



/***/ }),

/***/ 60100:
/*!********************************************!*\
  !*** ./src/app/page/filter/filter.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 30533);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 70942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/photo.service */ 61957);








// import { PlaceApiPage } from '../../place-api/place-api.page'; 



const IMAGE_DIR = 'stored-images';
let FilterPage = class FilterPage {
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
        this.distance = '';
        this.mincost = '';
        this.maxcost = '';
        this.today = Date.now();
        this.Selected_language_direction();
        this.countryCode();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    filterMarker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const UID = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'Id' });
            console.log(JSON.parse(UID.value));
            const userLat = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'cureent_latitude' });
            console.log(JSON.parse(userLat.value));
            const userLog = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'cureent_longitude' });
            console.log(JSON.parse(userLog.value));
            if (this.City_name == undefined) {
                this.City_name = '';
            }
            ;
            if (this.Governate_name == undefined) {
                this.Governate_name = '';
            }
            ;
            let FilterDetails = {
                "userLat": JSON.parse(userLat.value),
                "userLong": JSON.parse(userLog.value),
                "userId": JSON.parse(UID.value),
                "sort": "nearest",
                "distance": this.distance,
                "mincost": this.mincost,
                "maxcost": this.maxcost,
                "goverate": this.Governate_name,
                "city": this.City_name
            };
            console.log("FilterDetails");
            this.navCtrl.navigateForward('/filter-item', {
                state: FilterDetails
            });
        });
    }
    countryCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        //   governate_name_en
        // city_name_en
        this.Governate_id = selectedValue.detail.value.id;
        this.City_id = '';
        console.log(selectedValue.detail.value.Id);
        console.log(selectedValue.detail.value.Name_en);
        this.Governate_name = selectedValue.detail.value.Name_en;
        this.http.get('https://drbakndillah.com/Api/getCityById.php?ID=' + selectedValue.detail.value.Id).subscribe((response) => {
            console.log(response);
            this.cityArr = response;
        }, (error) => {
            console.log(error);
        });
    }
    cityIdSelected(selectedValue) {
        //   governate_name_en
        // city_name_en
        this.Governate_id = selectedValue.detail.value.id;
        this.City_id = '';
        console.log(selectedValue.detail.value.Id);
        console.log(selectedValue.detail.value.Name_en);
        this.City_name = selectedValue.detail.value.Name_en;
    }
    //  cityIdSelected(selectedValue: any) {
    //   this.City_id = selectedValue.detail.value.Id;
    //   console.log('CLicked'+ selectedValue.detail.value);
    // }
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
    // Little helper
    presentToast(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: text,
                duration: 3000,
            });
            toast.present();
        });
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService }
];
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 70942:
/*!**********************************************!*\
  !*** ./src/app/page/filter/filter.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".additem_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.additem_content {\n  --ion-background-color:#ffffff;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n.additem_content div {\n  margin: 15px;\n}\n\n.additem_content h3 {\n  margin-bottom: 30px;\n}\n\n.additem_content div div ion-icon {\n  font-size: 150px;\n  background-color: #faf5a7;\n  padding: 0 100px;\n  border: 4px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-list ion-label {\n  font-size: 20px;\n  margin-top: 5px;\n}\n\n.additem_content ion-list ion-radio-group ion-row ion-label {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.additem_content ion-card {\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.additem_content ion-card ion-col {\n  font-size: 16px;\n}\n\nion-icon {\n  font-size: 25px;\n  opacity: 0.8;\n}\n\n.additem_footer ion-button {\n  margin: 20px;\n}\n\n.uploadIMG {\n  height: 160px;\n  width: 90%;\n  border: 3px solid #353535;\n  border-radius: 15px;\n}\n\n.add-img {\n  margin: 0 !important;\n  padding: 0;\n  width: 100%;\n  background-color: #353535;\n  border-radius: 0 0 20px 20px;\n}\n\n.add-img img {\n  height: 100px;\n  width: 40%;\n  margin-left: 30% !important;\n  border: 0px solid #353535;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFJQTtFQUVJLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUZKOztBQU9BO0VBRUksWUFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVdBO0VBRUkseUJBQUE7RUFDQSxtQkFBQTtBQVRKOztBQWFBO0VBRUksZUFBQTtBQVhKOztBQWVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFaSjs7QUFlQTtFQUNJLFlBQUE7QUFaSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWdCQTtFQUNJLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLDRCQUFBO0FBZEo7O0FBa0JBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFmSiIsImZpbGUiOiJmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGl0ZW1faGVhZGVye1xuXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcbn1cbiBcblxuLmFkZGl0ZW1fY29udGVudCB7XG5cbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuXG59XG5cblxuLmFkZGl0ZW1fY29udGVudCBkaXZ7XG4gICBcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgIGgze1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbn1cbi5hZGRpdGVtX2NvbnRlbnQgZGl2IGRpdiBpb24taWNvbntcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWY1YTc7XG4gICAgcGFkZGluZzogMCAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMzUzNTM1O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgIGlvbi1saXN0IGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuXG59XG5cbi5hZGRpdGVtX2NvbnRlbnQgaW9uLWxpc3QgaW9uLXJhZGlvLWdyb3VwIGlvbi1yb3cgaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbn1cbiAgXG5cbi5hZGRpdGVtX2NvbnRlbnQgaW9uLWNhcmR7XG4gXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzM1MzUzNTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICBcbn1cblxuLmFkZGl0ZW1fY29udGVudCBpb24tY2FyZCBpb24tY29se1xuICBcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuLmFkZGl0ZW1fZm9vdGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBcbn1cbi51cGxvYWRJTUd7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzNTM1MzUgO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxufVxuXG4gXG4uYWRkLWltZyB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xuXG4gICAgYm9yZGVyLXJhZGl1czogIDAgIDAgMjBweCAgMjBweCA7XG5cbiAgICBcbn1cbi5hZGQtaW1nIGltZ3tcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMzNTM1MzU7XG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xuXG59Il19 */");

/***/ }),

/***/ 30533:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/filter/filter.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" \n<ion-header class=\"additem_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"secondary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"secondary\"> {{'Filter' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"additem_content\">\n  <div class=\"add-img\">\n    <img src=\"../../../assets/icon/logo.png\" alt=\"\">\n  </div>\n\n  <div> \n    <ion-list>\n      <div align=\"center\">  \n\n      </div>\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label> {{'Goverate'|translate}}</ion-label> -->\n        <ion-icon slot=\"start\" name=\"trending-down\"></ion-icon>\n        <ion-select multiple=\"false\" [(ngModel)]=\"distance\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Distance'|translate\" (ionChange)=\"governateIdSelected($event)\">\n           \n        <ion-select-option [value]=\"5\">{{'0 - 5 KM' |translate}} </ion-select-option>\n\n        <ion-select-option [value]=\"5-15\">{{'5 - 15 KM' |translate}} </ion-select-option>\n\n        <ion-select-option [value]=\"15-30\">{{'15 - 30 KM' |translate}} </ion-select-option>\n\n        <ion-select-option [value]=\"30\">{{'above 30 KM' |translate}} </ion-select-option>\n\n        \n        </ion-select>\n      </ion-item>\n      \n        \n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon>\n        <ion-input type=\"text\" [(ngModel)]=\"mincost\" [placeholder]=\"'Deliver Cost (min)'|translate\" aria-required=\"please added\" ></ion-input>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-usd\"></ion-icon>\n        <ion-input type=\"text\" [(ngModel)]=\"maxcost\" [placeholder]=\"'Deliver Cost (max)'|translate\"></ion-input>\n      </ion-item>\n\n\n      <!-- //////////////////////////////// -->\n\n\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label> {{'Goverate'|translate}}</ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select multiple=\"false\" [(ngModel)]=\"Governate_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to Goverate'|translate\" (ionChange)=\"governateIdSelected($event)\">\n          <ion-select-option *ngFor=\"let governate of governateArr \" [value]=\"governate\">{{applang == 'ar' ?\n            governate.Name_ar : governate.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <!-- <ion-label> {{'Goverate'|translate}}</ion-label> -->\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-select multiple=\"false\" [(ngModel)]=\"City_id\" interface=\"action-sheet\"\n          [placeholder]=\"'Select Delivered to  City'|translate\" (ionChange)=\"cityIdSelected($event)\">\n          <ion-select-option *ngFor=\"let city of cityArr \" [value]=\"city\">  {{applang == 'ar' ? city.Name_ar : city.Name_en }} </ion-select-option>\n        </ion-select>\n      </ion-item>\n  \n \n    </ion-list>\n    <ion-button  (click)=\"filterMarker()\" expand=\"block\" color=\"primary\" shape=\"round\">\n      {{'Filter'|translate}}\n    </ion-button>\n  </div>\n\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_page_filter_filter_module_ts.js.map