(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["src_app_page_view-adds_view-adds_module_ts"],{

/***/ 73170:
/*!************************************************************!*\
  !*** ./src/app/page/view-adds/view-adds-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAddsPageRoutingModule": () => (/* binding */ ViewAddsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _view_adds_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-adds.page */ 65118);




const routes = [
    {
        path: '',
        component: _view_adds_page__WEBPACK_IMPORTED_MODULE_0__.ViewAddsPage
    }
];
let ViewAddsPageRoutingModule = class ViewAddsPageRoutingModule {
};
ViewAddsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewAddsPageRoutingModule);



/***/ }),

/***/ 59606:
/*!****************************************************!*\
  !*** ./src/app/page/view-adds/view-adds.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAddsPageModule": () => (/* binding */ ViewAddsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_adds_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-adds-routing.module */ 73170);
/* harmony import */ var _view_adds_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-adds.page */ 65118);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let ViewAddsPageModule = class ViewAddsPageModule {
};
ViewAddsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _view_adds_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewAddsPageRoutingModule
        ],
        declarations: [_view_adds_page__WEBPACK_IMPORTED_MODULE_1__.ViewAddsPage]
    })
], ViewAddsPageModule);



/***/ }),

/***/ 65118:
/*!**************************************************!*\
  !*** ./src/app/page/view-adds/view-adds.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewAddsPage": () => (/* binding */ ViewAddsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_view_adds_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./view-adds.page.html */ 20340);
/* harmony import */ var _view_adds_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-adds.page.scss */ 98159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 28427);








let ViewAddsPage = class ViewAddsPage {
    constructor(route, translate, router) {
        this.route = route;
        this.translate = translate;
        this.router = router;
        if (router.getCurrentNavigation().extras.state) {
            this.AddDetails = this.router.getCurrentNavigation().extras.state;
            console.log(this.AddDetails);
        }
        this.Selected_language_direction();
    }
    ngOnInit() {
    }
    Selected_language_direction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const language = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'language' });
            console.log(JSON.parse(language.value));
            this.translate.setDefaultLang(JSON.parse(language.value));
            this.applang = JSON.parse(language.value);
            const direction = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'direction' });
            console.log(JSON.parse(direction.value));
            document.documentElement.dir = JSON.parse(direction.value);
        });
    }
    moveToPage(url) {
        _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: url });
    }
};
ViewAddsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ViewAddsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-view-adds',
        template: _raw_loader_view_adds_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_view_adds_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ViewAddsPage);



/***/ }),

/***/ 98159:
/*!****************************************************!*\
  !*** ./src/app/page/view-adds/view-adds.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".add-img {\n  margin: 0;\n  pad: 0;\n}\n\n.add-img img {\n  width: 100%;\n  border-radius: 0 0 20px 20px;\n  border: 0px solid #353535;\n  object-fit: contain;\n}\n\n.profile_header {\n  margin: 0 !important;\n  padding: 0 !important;\n  --ion-background-color:#353535;\n}\n\n.add-contant {\n  text-align: center !important;\n  text-align: justify;\n  text-transform: capitalize;\n}\n\n.add-contant ion-title {\n  padding: 20px;\n}\n\n.add-contant div {\n  margin: auto;\n  width: 90%;\n  padding: 16px;\n  text-align: justify;\n  background-color: #FAF6AD;\n  border-radius: 20px;\n  margin-bottom: 10px;\n}\n\n.add-contant ion-button {\n  width: 90%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctYWRkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUNBO0VBRUksV0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQUpKIiwiZmlsZSI6InZpZXctYWRkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWltZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZDogMDtcbn1cbi5hZGQtaW1nIGltZ3tcbiAgICAvLyBoZWlnaHQ6IDE5MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6ICAwICAwIDIwcHggIDIwcHggO1xuICAgIGJvcmRlcjogMHB4IHNvbGlkICMzNTM1MzU7XG4gICAgb2JqZWN0LWZpdDpjb250YWluO1xuXG5cbn1cbi5wcm9maWxlX2hlYWRlcntcblxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XG59XG4gXG4uYWRkLWNvbnRhbnR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuXG4uYWRkLWNvbnRhbnQgaW9uLXRpdGxle1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuLmFkZC1jb250YW50IGRpdntcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGNkFEO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuXG4uYWRkLWNvbnRhbnQgaW9uLWJ1dHRvbntcbiAgIFxuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ 20340:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/view-adds/view-adds.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"profile_header ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button color=\"secondary\" defaultHref=\"tabs/map\"></ion-back-button>\n    </ion-buttons>\n    <ion-title  color=\"secondary\" > {{'Drbak Ndillah'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"profile_content\">\n\n <div class=\"add-img\">\n   <img [src]=\"AddDetails.Image\" alt=\"\">\n </div>\n  \n <div class=\"add-contant\"> \n\n <div>\n\n  <h3 align=\"center\">\n    \n  {{applang == 'ar' ? AddDetails.Title_ar : AddDetails.Title_en }}\n\n</h3>\n\n  {{applang == 'ar' ? AddDetails.Description_ar : AddDetails.Description_en }}\n\n </div>\n\n \n <ion-button (click)=\"moveToPage(AddDetails.URL_link)\" expand=\"block\"  shape=\"round\">\n   {{'Click Here'|translate}}\n </ion-button>\n</div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_view-adds_view-adds_module_ts.js.map