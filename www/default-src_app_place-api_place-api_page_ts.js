(self["webpackChunkDrbakNdillah"] = self["webpackChunkDrbakNdillah"] || []).push([["default-src_app_place-api_place-api_page_ts"],{

/***/ 86095:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/google-maps/fesm2020/google-maps.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap),
/* harmony export */   "GoogleMapsModule": () => (/* binding */ GoogleMapsModule),
/* harmony export */   "MapBaseLayer": () => (/* binding */ MapBaseLayer),
/* harmony export */   "MapBicyclingLayer": () => (/* binding */ MapBicyclingLayer),
/* harmony export */   "MapCircle": () => (/* binding */ MapCircle),
/* harmony export */   "MapDirectionsRenderer": () => (/* binding */ MapDirectionsRenderer),
/* harmony export */   "MapDirectionsService": () => (/* binding */ MapDirectionsService),
/* harmony export */   "MapGeocoder": () => (/* binding */ MapGeocoder),
/* harmony export */   "MapGroundOverlay": () => (/* binding */ MapGroundOverlay),
/* harmony export */   "MapHeatmapLayer": () => (/* binding */ MapHeatmapLayer),
/* harmony export */   "MapInfoWindow": () => (/* binding */ MapInfoWindow),
/* harmony export */   "MapKmlLayer": () => (/* binding */ MapKmlLayer),
/* harmony export */   "MapMarker": () => (/* binding */ MapMarker),
/* harmony export */   "MapMarkerClusterer": () => (/* binding */ MapMarkerClusterer),
/* harmony export */   "MapPolygon": () => (/* binding */ MapPolygon),
/* harmony export */   "MapPolyline": () => (/* binding */ MapPolyline),
/* harmony export */   "MapRectangle": () => (/* binding */ MapRectangle),
/* harmony export */   "MapTrafficLayer": () => (/* binding */ MapTrafficLayer),
/* harmony export */   "MapTransitLayer": () => (/* binding */ MapTransitLayer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 46782);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */

const _c0 = ["*"];

class MapEventManager {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    /** Pending listeners that were added before the target was set. */

    this._pending = [];
    this._listeners = [];
    this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  /** Clears all currently-registered event listeners. */


  _clearListeners() {
    for (const listener of this._listeners) {
      listener.remove();
    }

    this._listeners = [];
  }
  /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */


  getLazyEmitter(name) {
    return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(target => {
      const observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
        // If the target hasn't been initialized yet, cache the observer so it can be added later.
        if (!target) {
          this._pending.push({
            observable,
            observer
          });

          return undefined;
        }

        const listener = target.addListener(name, event => {
          this._ngZone.run(() => observer.next(event));
        });

        this._listeners.push(listener);

        return () => listener.remove();
      });
      return observable;
    }));
  }
  /** Sets the current target that the manager should bind events to. */


  setTarget(target) {
    const currentTarget = this._targetStream.value;

    if (target === currentTarget) {
      return;
    } // Clear the listeners from the pre-existing target.


    if (currentTarget) {
      this._clearListeners();

      this._pending = [];
    }

    this._targetStream.next(target); // Add the listeners that were bound before the map was initialized.


    this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));

    this._pending = [];
  }
  /** Destroys the manager and clears the event listeners. */


  destroy() {
    this._clearListeners();

    this._pending = [];

    this._targetStream.complete();
  }

} /// <reference types="google.maps" />

/** default options set to the Googleplex */


const DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */

const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */

const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */

class GoogleMap {
  constructor(_elementRef, _ngZone, platformId) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */

    this.height = DEFAULT_HEIGHT;
    /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */

    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/events#auth-errors
     */

    this.authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
     */

    this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
     */

    this.idle = this._eventManager.getLazyEmitter('idle');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
     */

    this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
     */

    this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
     */

    this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
     */

    this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
     */

    this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
     */

    this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(platformId);

    if (this._isBrowser) {
      const googleMapsWindow = window;

      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }

      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;

      googleMapsWindow.gm_authFailure = () => {
        if (this._existingAuthFailureCallback) {
          this._existingAuthFailureCallback();
        }

        this.authFailure.emit();
      };
    }
  }

  set center(center) {
    this._center = center;
  }

  set zoom(zoom) {
    this._zoom = zoom;
  }

  set options(options) {
    this._options = options || DEFAULT_OPTIONS;
  }

  ngOnChanges(changes) {
    if (changes['height'] || changes['width']) {
      this._setSize();
    }

    const googleMap = this.googleMap;

    if (googleMap) {
      if (changes['options']) {
        googleMap.setOptions(this._combineOptions());
      }

      if (changes['center'] && this._center) {
        googleMap.setCenter(this._center);
      } // Note that the zoom can be zero.


      if (changes['zoom'] && this._zoom != null) {
        googleMap.setZoom(this._zoom);
      }

      if (changes['mapTypeId'] && this.mapTypeId) {
        googleMap.setMapTypeId(this.mapTypeId);
      }
    }
  }

  ngOnInit() {
    // It should be a noop during server-side rendering.
    if (this._isBrowser) {
      this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');

      this._setSize(); // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.googleMap = new google.maps.Map(this._mapEl, this._combineOptions());
      });

      this._eventManager.setTarget(this.googleMap);
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this._isBrowser) {
      const googleMapsWindow = window;
      googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
    }
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
   */


  fitBounds(bounds, padding) {
    this._assertInitialized();

    this.googleMap.fitBounds(bounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
   */


  panBy(x, y) {
    this._assertInitialized();

    this.googleMap.panBy(x, y);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
   */


  panTo(latLng) {
    this._assertInitialized();

    this.googleMap.panTo(latLng);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
   */


  panToBounds(latLngBounds, padding) {
    this._assertInitialized();

    this.googleMap.panToBounds(latLngBounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.googleMap.getBounds() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
   */


  getCenter() {
    this._assertInitialized();

    return this.googleMap.getCenter();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
   */


  getClickableIcons() {
    this._assertInitialized();

    return this.googleMap.getClickableIcons();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
   */


  getHeading() {
    this._assertInitialized();

    return this.googleMap.getHeading();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
   */


  getMapTypeId() {
    this._assertInitialized();

    return this.googleMap.getMapTypeId();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
   */


  getProjection() {
    this._assertInitialized();

    return this.googleMap.getProjection() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
   */


  getStreetView() {
    this._assertInitialized();

    return this.googleMap.getStreetView();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
   */


  getTilt() {
    this._assertInitialized();

    return this.googleMap.getTilt();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
   */


  getZoom() {
    this._assertInitialized();

    return this.googleMap.getZoom();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
   */


  get controls() {
    this._assertInitialized();

    return this.googleMap.controls;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
   */


  get data() {
    this._assertInitialized();

    return this.googleMap.data;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
   */


  get mapTypes() {
    this._assertInitialized();

    return this.googleMap.mapTypes;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
   */


  get overlayMapTypes() {
    this._assertInitialized();

    return this.googleMap.overlayMapTypes;
  }

  _setSize() {
    if (this._mapEl) {
      const styles = this._mapEl.style;
      styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
  /** Combines the center and zoom and the other map options into a single object */


  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      // It's important that we set **some** kind of `center` and `zoom`, otherwise
      // Google Maps will render a blank rectangle which looks broken.
      center: this._center || options.center || DEFAULT_OPTIONS.center,
      zoom: this._zoom ?? options.zoom ?? DEFAULT_OPTIONS.zoom,
      // Passing in an undefined `mapTypeId` seems to break tile loading
      // so make sure that we have some kind of default (see #22082).
      mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
    };
  }
  /** Asserts that the map has been initialized. */


  _assertInitialized() {
    if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }

}

GoogleMap.ɵfac = function GoogleMap_Factory(t) {
  return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
};

GoogleMap.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: GoogleMap,
  selectors: [["google-map"]],
  inputs: {
    height: "height",
    width: "width",
    mapTypeId: "mapTypeId",
    center: "center",
    zoom: "zoom",
    options: "options"
  },
  outputs: {
    authFailure: "authFailure",
    boundsChanged: "boundsChanged",
    centerChanged: "centerChanged",
    mapClick: "mapClick",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    headingChanged: "headingChanged",
    idle: "idle",
    maptypeidChanged: "maptypeidChanged",
    mapMousemove: "mapMousemove",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    projectionChanged: "projectionChanged",
    mapRightclick: "mapRightclick",
    tilesloaded: "tilesloaded",
    tiltChanged: "tiltChanged",
    zoomChanged: "zoomChanged"
  },
  exportAs: ["googleMap"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "map-container"]],
  template: function GoogleMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID]
      }]
    }];
  }, {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})();

const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */

function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : `${value}px`;
} /// <reference types="google.maps" />


class MapBaseLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this._initializeObject();
      });

      this._assertInitialized();

      this._setMap();
    }
  }

  ngOnDestroy() {
    this._unsetMap();
  }

  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }

  _initializeObject() {}

  _setMap() {}

  _unsetMap() {}

}

MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) {
  return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapBaseLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapBaseLayer,
  selectors: [["map-base-layer"]],
  exportAs: ["mapBaseLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */


class MapBicyclingLayer extends MapBaseLayer {
  _initializeObject() {
    this.bicyclingLayer = new google.maps.BicyclingLayer();
  }

  _setMap() {
    this._assertLayerInitialized();

    this.bicyclingLayer.setMap(this._map.googleMap);
  }

  _unsetMap() {
    if (this.bicyclingLayer) {
      this.bicyclingLayer.setMap(null);
    }
  }

  _assertLayerInitialized() {
    if (!this.bicyclingLayer) {
      throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }

}

MapBicyclingLayer.ɵfac = /* @__PURE__ */function () {
  let ɵMapBicyclingLayer_BaseFactory;
  return function MapBicyclingLayer_Factory(t) {
    return (ɵMapBicyclingLayer_BaseFactory || (ɵMapBicyclingLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapBicyclingLayer)))(t || MapBicyclingLayer);
  };
}();

MapBicyclingLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapBicyclingLayer,
  selectors: [["map-bicycling-layer"]],
  exportAs: ["mapBicyclingLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */


class MapCircle {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._center = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
     */

    this.circleClick = this._eventManager.getLazyEmitter('click');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
     */

    this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
     */

    this.circleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
     */

    this.circleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
     */

    this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
     */

    this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
     */

    this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
     */

    this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
     */

    this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
     */

    this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
     */

    this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
     */

    this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set center(center) {
    this._center.next(center);
  }

  set radius(radius) {
    this._radius.next(radius);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.circle = new google.maps.Circle(options);
        });

        this._assertInitialized();

        this.circle.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.circle);
      });

      this._watchForOptionsChanges();

      this._watchForCenterChanges();

      this._watchForRadiusChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.circle) {
      this.circle.setMap(null);
    }
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.circle.getBounds();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
   */


  getCenter() {
    this._assertInitialized();

    return this.circle.getCenter();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.circle.getDraggable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.circle.getEditable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
   */


  getRadius() {
    this._assertInitialized();

    return this.circle.getRadius();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.circle.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, center, radius]) => {
      const combinedOptions = { ...options,
        center: center || options.center,
        radius: radius !== undefined ? radius : options.radius
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.circle.setOptions(options);
    });
  }

  _watchForCenterChanges() {
    this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(center => {
      if (center) {
        this._assertInitialized();

        this.circle.setCenter(center);
      }
    });
  }

  _watchForRadiusChanges() {
    this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(radius => {
      if (radius !== undefined) {
        this._assertInitialized();

        this.circle.setRadius(radius);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.circle) {
        throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
      }
    }
  }

}

MapCircle.ɵfac = function MapCircle_Factory(t) {
  return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapCircle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapCircle,
  selectors: [["map-circle"]],
  inputs: {
    options: "options",
    center: "center",
    radius: "radius"
  },
  outputs: {
    centerChanged: "centerChanged",
    circleClick: "circleClick",
    circleDblclick: "circleDblclick",
    circleDrag: "circleDrag",
    circleDragend: "circleDragend",
    circleDragstart: "circleDragstart",
    circleMousedown: "circleMousedown",
    circleMousemove: "circleMousemove",
    circleMouseout: "circleMouseout",
    circleMouseover: "circleMouseover",
    circleMouseup: "circleMouseup",
    radiusChanged: "radiusChanged",
    circleRightclick: "circleRightclick"
  },
  exportAs: ["mapCircle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */


class MapDirectionsRenderer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.directions_changed
     */

    this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */


  set directions(directions) {
    this._directions = directions;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions
   */


  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.directionsRenderer = new google.maps.DirectionsRenderer(this._combineOptions());
      });

      this._assertInitialized();

      this.directionsRenderer.setMap(this._googleMap.googleMap);

      this._eventManager.setTarget(this.directionsRenderer);
    }
  }

  ngOnChanges(changes) {
    if (this.directionsRenderer) {
      if (changes['options']) {
        this.directionsRenderer.setOptions(this._combineOptions());
      }

      if (changes['directions'] && this._directions !== undefined) {
        this.directionsRenderer.setDirections(this._directions);
      }
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this.directionsRenderer) {
      this.directionsRenderer.setMap(null);
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getDirections
   */


  getDirections() {
    this._assertInitialized();

    return this.directionsRenderer.getDirections();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getPanel
   */


  getPanel() {
    this._assertInitialized();

    return this.directionsRenderer.getPanel();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getRouteIndex
   */


  getRouteIndex() {
    this._assertInitialized();

    return this.directionsRenderer.getRouteIndex();
  }

  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      directions: this._directions || options.directions,
      map: this._googleMap.googleMap
    };
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.directionsRenderer) {
        throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
      }
    }
  }

}

MapDirectionsRenderer.ɵfac = function MapDirectionsRenderer_Factory(t) {
  return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapDirectionsRenderer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapDirectionsRenderer,
  selectors: [["map-directions-renderer"]],
  inputs: {
    directions: "directions",
    options: "options"
  },
  outputs: {
    directionsChanged: "directionsChanged"
  },
  exportAs: ["mapDirectionsRenderer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */


class MapGroundOverlay {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** Whether the overlay is clickable */

    this.clickable = false;
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  }
  /** URL of the image that will be shown in the overlay. */


  set url(url) {
    this._url.next(url);
  }
  /** Bounds for the overlay. */


  get bounds() {
    return this._bounds.value;
  }

  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /** Opacity of the overlay. */


  set opacity(opacity) {
    this._opacity.next(opacity);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      // The ground overlay setup is slightly different from the other Google Maps objects in that
      // we have to recreate the `GroundOverlay` object whenever the bounds change, because
      // Google Maps doesn't provide an API to update the bounds of an existing overlay.
      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
        if (this.groundOverlay) {
          this.groundOverlay.setMap(null);
          this.groundOverlay = undefined;
        } // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.


        if (bounds) {
          this._ngZone.runOutsideAngular(() => {
            this.groundOverlay = new google.maps.GroundOverlay(this._url.getValue(), bounds, {
              clickable: this.clickable,
              opacity: this._opacity.value
            });
          });

          this._assertInitialized();

          this.groundOverlay.setMap(this._map.googleMap);

          this._eventManager.setTarget(this.groundOverlay);
        }
      });

      this._watchForOpacityChanges();

      this._watchForUrlChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.groundOverlay) {
      this.groundOverlay.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.groundOverlay.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getOpacity
   */


  getOpacity() {
    this._assertInitialized();

    return this.groundOverlay.getOpacity();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getUrl
   */


  getUrl() {
    this._assertInitialized();

    return this.groundOverlay.getUrl();
  }

  _watchForOpacityChanges() {
    this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(opacity => {
      if (opacity != null) {
        this._assertInitialized();

        this.groundOverlay.setOpacity(opacity);
      }
    });
  }

  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      this._assertInitialized();

      const overlay = this.groundOverlay;
      overlay.set('url', url); // Google Maps only redraws the overlay if we re-set the map.

      overlay.setMap(null);
      overlay.setMap(this._map.googleMap);
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.groundOverlay) {
        throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
      }
    }
  }

}

MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) {
  return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapGroundOverlay.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapGroundOverlay,
  selectors: [["map-ground-overlay"]],
  inputs: {
    url: "url",
    bounds: "bounds",
    clickable: "clickable",
    opacity: "opacity"
  },
  outputs: {
    mapClick: "mapClick",
    mapDblclick: "mapDblclick"
  },
  exportAs: ["mapGroundOverlay"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */


class MapInfoWindow {
  constructor(_googleMap, _elementRef, _ngZone) {
    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
     */

    this.closeclick = this._eventManager.getLazyEmitter('closeclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.content_changed
     */

    this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
     */

    this.domready = this._eventManager.getLazyEmitter('domready');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set position(position) {
    this._position.next(position);
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      const combinedOptionsChanges = this._combineOptions();

      combinedOptionsChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.infoWindow = new google.maps.InfoWindow(options);
        });

        this._eventManager.setTarget(this.infoWindow);
      });

      this._watchForOptionsChanges();

      this._watchForPositionChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroy.next();

    this._destroy.complete(); // If no info window has been created on the server, we do not try closing it.
    // On the server, an info window cannot be created and this would cause errors.


    if (this.infoWindow) {
      this.close();
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
   */


  close() {
    this._assertInitialized();

    this.infoWindow.close();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
   */


  getContent() {
    this._assertInitialized();

    return this.infoWindow.getContent() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.getPosition
   */


  getPosition() {
    this._assertInitialized();

    return this.infoWindow.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.infoWindow.getZIndex();
  }
  /**
   * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
   * then the position property of the options input is used instead.
   */


  open(anchor) {
    this._assertInitialized();

    const anchorObject = anchor ? anchor.getAnchor() : undefined; // Prevent the info window from initializing when trying to reopen on the same anchor.
    // Note that when the window is opened for the first time, the anchor will always be
    // undefined. If that's the case, we have to allow it to open in order to handle the
    // case where the window doesn't have an anchor, but is placed at a particular position.

    if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
      this._elementRef.nativeElement.style.display = '';
      this.infoWindow.open(this._googleMap.googleMap, anchorObject);
    }
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, position]) => {
      const combinedOptions = { ...options,
        position: position || options.position,
        content: this._elementRef.nativeElement
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(options => {
      this._assertInitialized();

      this.infoWindow.setOptions(options);
    });
  }

  _watchForPositionChanges() {
    this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(position => {
      if (position) {
        this._assertInitialized();

        this.infoWindow.setPosition(position);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.infoWindow) {
        throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
      }
    }
  }

}

MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) {
  return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapInfoWindow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapInfoWindow,
  selectors: [["map-info-window"]],
  hostAttrs: [2, "display", "none"],
  inputs: {
    options: "options",
    position: "position"
  },
  outputs: {
    closeclick: "closeclick",
    contentChanged: "contentChanged",
    domready: "domready",
    positionChanged: "positionChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapInfoWindow"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */


class MapKmlLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
     */

    this.kmlClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml
     * #KmlLayer.defaultviewport_changed
     */

    this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
     */

    this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set url(url) {
    this._url.next(url);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.kmlLayer = new google.maps.KmlLayer(options));

        this._assertInitialized();

        this.kmlLayer.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.kmlLayer);
      });

      this._watchForOptionsChanges();

      this._watchForUrlChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.kmlLayer) {
      this.kmlLayer.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
   */


  getDefaultViewport() {
    this._assertInitialized();

    return this.kmlLayer.getDefaultViewport();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
   */


  getMetadata() {
    this._assertInitialized();

    return this.kmlLayer.getMetadata();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
   */


  getStatus() {
    this._assertInitialized();

    return this.kmlLayer.getStatus();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
   */


  getUrl() {
    this._assertInitialized();

    return this.kmlLayer.getUrl();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.kmlLayer.getZIndex();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, url]) => {
      const combinedOptions = { ...options,
        url: url || options.url
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      if (this.kmlLayer) {
        this._assertInitialized();

        this.kmlLayer.setOptions(options);
      }
    });
  }

  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(url => {
      if (url && this.kmlLayer) {
        this._assertInitialized();

        this.kmlLayer.setUrl(url);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.kmlLayer) {
        throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
      }
    }
  }

}

MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) {
  return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapKmlLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapKmlLayer,
  selectors: [["map-kml-layer"]],
  inputs: {
    options: "options",
    url: "url"
  },
  outputs: {
    kmlClick: "kmlClick",
    defaultviewportChanged: "defaultviewportChanged",
    statusChanged: "statusChanged"
  },
  exportAs: ["mapKmlLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */


const DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */

class MapMarker {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
     */

    this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
     */

    this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
     */

    this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
     */

    this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
     */

    this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
     */

    this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
     */

    this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
     */

    this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
     */

    this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
     */

    this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
     */

    this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */


  set title(title) {
    this._title = title;
  }
  /**
   * Position of the marker. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
   */


  set position(position) {
    this._position = position;
  }
  /**
   * Label for the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
   */


  set label(label) {
    this._label = label;
  }
  /**
   * Whether the marker is clickable. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
   */


  set clickable(clickable) {
    this._clickable = clickable;
  }
  /**
   * Options used to configure the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
   */


  set options(options) {
    this._options = options;
  }
  /**
   * Icon to be used for the marker.
   * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
   */


  set icon(icon) {
    this._icon = icon;
  }
  /**
   * Whether the marker is visible.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
   */


  set visible(value) {
    this._visible = value;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      this._ngZone.runOutsideAngular(() => {
        this.marker = new google.maps.Marker(this._combineOptions());
      });

      this._assertInitialized();

      this.marker.setMap(this._googleMap.googleMap);

      this._eventManager.setTarget(this.marker);
    }
  }

  ngOnChanges(changes) {
    const {
      marker,
      _title,
      _position,
      _label,
      _clickable,
      _icon,
      _visible
    } = this;

    if (marker) {
      if (changes['options']) {
        marker.setOptions(this._combineOptions());
      }

      if (changes['title'] && _title !== undefined) {
        marker.setTitle(_title);
      }

      if (changes['position'] && _position) {
        marker.setPosition(_position);
      }

      if (changes['label'] && _label !== undefined) {
        marker.setLabel(_label);
      }

      if (changes['clickable'] && _clickable !== undefined) {
        marker.setClickable(_clickable);
      }

      if (changes['icon'] && _icon) {
        marker.setIcon(_icon);
      }

      if (changes['visible'] && _visible !== undefined) {
        marker.setVisible(_visible);
      }
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    if (this.marker) {
      this.marker.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
   */


  getAnimation() {
    this._assertInitialized();

    return this.marker.getAnimation() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
   */


  getClickable() {
    this._assertInitialized();

    return this.marker.getClickable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
   */


  getCursor() {
    this._assertInitialized();

    return this.marker.getCursor() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return !!this.marker.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
   */


  getIcon() {
    this._assertInitialized();

    return this.marker.getIcon() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
   */


  getLabel() {
    this._assertInitialized();

    return this.marker.getLabel() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
   */


  getOpacity() {
    this._assertInitialized();

    return this.marker.getOpacity() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
   */


  getPosition() {
    this._assertInitialized();

    return this.marker.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
   */


  getShape() {
    this._assertInitialized();

    return this.marker.getShape() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
   */


  getTitle() {
    this._assertInitialized();

    return this.marker.getTitle() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.marker.getVisible();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
   */


  getZIndex() {
    this._assertInitialized();

    return this.marker.getZIndex() || null;
  }
  /** Gets the anchor point that can be used to attach other Google Maps objects. */


  getAnchor() {
    this._assertInitialized();

    return this.marker;
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */


  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS;
    return { ...options,
      title: this._title || options.title,
      position: this._position || options.position,
      label: this._label || options.label,
      clickable: this._clickable ?? options.clickable,
      map: this._googleMap.googleMap,
      icon: this._icon || options.icon,
      visible: this._visible ?? options.visible
    };
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.marker) {
        throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
      }
    }
  }

}

MapMarker.ɵfac = function MapMarker_Factory(t) {
  return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapMarker.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapMarker,
  selectors: [["map-marker"]],
  inputs: {
    title: "title",
    position: "position",
    label: "label",
    clickable: "clickable",
    options: "options",
    icon: "icon",
    visible: "visible"
  },
  outputs: {
    animationChanged: "animationChanged",
    mapClick: "mapClick",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    draggableChanged: "draggableChanged",
    mapDragstart: "mapDragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mapMousedown: "mapMousedown",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    mapMouseup: "mapMouseup",
    positionChanged: "positionChanged",
    mapRightclick: "mapRightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapMarker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/** Default options for a clusterer. */


const DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */

class MapMarkerClusterer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = new Set();
    this._eventManager = new MapEventManager(this._ngZone);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();

    this.ariaLabelFn = () => '';
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/
     * _google_markerclustererplus.html#clusteringbegin
     */


    this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
     */

    this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
    /** Emits when a cluster has been clicked. */

    this.clusterClick = this._eventManager.getLazyEmitter('click');
    this._canInitialize = this._googleMap._isBrowser;
  }

  set averageCenter(averageCenter) {
    this._averageCenter = averageCenter;
  }

  set batchSizeIE(batchSizeIE) {
    this._batchSizeIE = batchSizeIE;
  }

  set calculator(calculator) {
    this._calculator = calculator;
  }

  set clusterClass(clusterClass) {
    this._clusterClass = clusterClass;
  }

  set enableRetinaIcons(enableRetinaIcons) {
    this._enableRetinaIcons = enableRetinaIcons;
  }

  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }

  set ignoreHidden(ignoreHidden) {
    this._ignoreHidden = ignoreHidden;
  }

  set imageExtension(imageExtension) {
    this._imageExtension = imageExtension;
  }

  set imagePath(imagePath) {
    this._imagePath = imagePath;
  }

  set imageSizes(imageSizes) {
    this._imageSizes = imageSizes;
  }

  set maxZoom(maxZoom) {
    this._maxZoom = maxZoom;
  }

  set minimumClusterSize(minimumClusterSize) {
    this._minimumClusterSize = minimumClusterSize;
  }

  set styles(styles) {
    this._styles = styles;
  }

  set title(title) {
    this._title = title;
  }

  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }

  set zoomOnClick(zoomOnClick) {
    this._zoomOnClick = zoomOnClick;
  }

  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._canInitialize) {
      const clustererWindow = window;

      if (!clustererWindow.MarkerClusterer && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
      } // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.markerClusterer = new MarkerClusterer(this._googleMap.googleMap, [], this._combineOptions());
      });

      this._assertInitialized();

      this._eventManager.setTarget(this.markerClusterer);
    }
  }

  ngAfterContentInit() {
    if (this._canInitialize) {
      this._watchForMarkerChanges();
    }
  }

  ngOnChanges(changes) {
    const {
      markerClusterer: clusterer,
      ariaLabelFn,
      _averageCenter,
      _batchSizeIE,
      _calculator,
      _styles,
      _clusterClass,
      _enableRetinaIcons,
      _gridSize,
      _ignoreHidden,
      _imageExtension,
      _imagePath,
      _imageSizes,
      _maxZoom,
      _minimumClusterSize,
      _title,
      _zIndex,
      _zoomOnClick
    } = this;

    if (clusterer) {
      if (changes['options']) {
        clusterer.setOptions(this._combineOptions());
      }

      if (changes['ariaLabelFn']) {
        clusterer.ariaLabelFn = ariaLabelFn;
      }

      if (changes['averageCenter'] && _averageCenter !== undefined) {
        clusterer.setAverageCenter(_averageCenter);
      }

      if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
        clusterer.setBatchSizeIE(_batchSizeIE);
      }

      if (changes['calculator'] && !!_calculator) {
        clusterer.setCalculator(_calculator);
      }

      if (changes['clusterClass'] && _clusterClass !== undefined) {
        clusterer.setClusterClass(_clusterClass);
      }

      if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
        clusterer.setEnableRetinaIcons(_enableRetinaIcons);
      }

      if (changes['gridSize'] && _gridSize !== undefined) {
        clusterer.setGridSize(_gridSize);
      }

      if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
        clusterer.setIgnoreHidden(_ignoreHidden);
      }

      if (changes['imageExtension'] && _imageExtension !== undefined) {
        clusterer.setImageExtension(_imageExtension);
      }

      if (changes['imagePath'] && _imagePath !== undefined) {
        clusterer.setImagePath(_imagePath);
      }

      if (changes['imageSizes'] && _imageSizes) {
        clusterer.setImageSizes(_imageSizes);
      }

      if (changes['maxZoom'] && _maxZoom !== undefined) {
        clusterer.setMaxZoom(_maxZoom);
      }

      if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
        clusterer.setMinimumClusterSize(_minimumClusterSize);
      }

      if (changes['styles'] && _styles) {
        clusterer.setStyles(_styles);
      }

      if (changes['title'] && _title !== undefined) {
        clusterer.setTitle(_title);
      }

      if (changes['zIndex'] && _zIndex !== undefined) {
        clusterer.setZIndex(_zIndex);
      }

      if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
        clusterer.setZoomOnClick(_zoomOnClick);
      }
    }
  }

  ngOnDestroy() {
    this._destroy.next();

    this._destroy.complete();

    this._eventManager.destroy();

    if (this.markerClusterer) {
      this.markerClusterer.setMap(null);
    }
  }

  fitMapToMarkers(padding) {
    this._assertInitialized();

    this.markerClusterer.fitMapToMarkers(padding);
  }

  getAverageCenter() {
    this._assertInitialized();

    return this.markerClusterer.getAverageCenter();
  }

  getBatchSizeIE() {
    this._assertInitialized();

    return this.markerClusterer.getBatchSizeIE();
  }

  getCalculator() {
    this._assertInitialized();

    return this.markerClusterer.getCalculator();
  }

  getClusterClass() {
    this._assertInitialized();

    return this.markerClusterer.getClusterClass();
  }

  getClusters() {
    this._assertInitialized();

    return this.markerClusterer.getClusters();
  }

  getEnableRetinaIcons() {
    this._assertInitialized();

    return this.markerClusterer.getEnableRetinaIcons();
  }

  getGridSize() {
    this._assertInitialized();

    return this.markerClusterer.getGridSize();
  }

  getIgnoreHidden() {
    this._assertInitialized();

    return this.markerClusterer.getIgnoreHidden();
  }

  getImageExtension() {
    this._assertInitialized();

    return this.markerClusterer.getImageExtension();
  }

  getImagePath() {
    this._assertInitialized();

    return this.markerClusterer.getImagePath();
  }

  getImageSizes() {
    this._assertInitialized();

    return this.markerClusterer.getImageSizes();
  }

  getMaxZoom() {
    this._assertInitialized();

    return this.markerClusterer.getMaxZoom();
  }

  getMinimumClusterSize() {
    this._assertInitialized();

    return this.markerClusterer.getMinimumClusterSize();
  }

  getStyles() {
    this._assertInitialized();

    return this.markerClusterer.getStyles();
  }

  getTitle() {
    this._assertInitialized();

    return this.markerClusterer.getTitle();
  }

  getTotalClusters() {
    this._assertInitialized();

    return this.markerClusterer.getTotalClusters();
  }

  getTotalMarkers() {
    this._assertInitialized();

    return this.markerClusterer.getTotalMarkers();
  }

  getZIndex() {
    this._assertInitialized();

    return this.markerClusterer.getZIndex();
  }

  getZoomOnClick() {
    this._assertInitialized();

    return this.markerClusterer.getZoomOnClick();
  }

  _combineOptions() {
    const options = this._options || DEFAULT_CLUSTERER_OPTIONS;
    return { ...options,
      ariaLabelFn: this.ariaLabelFn ?? options.ariaLabelFn,
      averageCenter: this._averageCenter ?? options.averageCenter,
      batchSize: this.batchSize ?? options.batchSize,
      batchSizeIE: this._batchSizeIE ?? options.batchSizeIE,
      calculator: this._calculator ?? options.calculator,
      clusterClass: this._clusterClass ?? options.clusterClass,
      enableRetinaIcons: this._enableRetinaIcons ?? options.enableRetinaIcons,
      gridSize: this._gridSize ?? options.gridSize,
      ignoreHidden: this._ignoreHidden ?? options.ignoreHidden,
      imageExtension: this._imageExtension ?? options.imageExtension,
      imagePath: this._imagePath ?? options.imagePath,
      imageSizes: this._imageSizes ?? options.imageSizes,
      maxZoom: this._maxZoom ?? options.maxZoom,
      minimumClusterSize: this._minimumClusterSize ?? options.minimumClusterSize,
      styles: this._styles ?? options.styles,
      title: this._title ?? options.title,
      zIndex: this._zIndex ?? options.zIndex,
      zoomOnClick: this._zoomOnClick ?? options.zoomOnClick
    };
  }

  _watchForMarkerChanges() {
    this._assertInitialized();

    const initialMarkers = [];

    for (const marker of this._getInternalMarkers(this._markers.toArray())) {
      this._currentMarkers.add(marker);

      initialMarkers.push(marker);
    }

    this.markerClusterer.addMarkers(initialMarkers);

    this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy)).subscribe(markerComponents => {
      this._assertInitialized();

      const newMarkers = new Set(this._getInternalMarkers(markerComponents));
      const markersToAdd = [];
      const markersToRemove = [];

      for (const marker of Array.from(newMarkers)) {
        if (!this._currentMarkers.has(marker)) {
          this._currentMarkers.add(marker);

          markersToAdd.push(marker);
        }
      }

      for (const marker of Array.from(this._currentMarkers)) {
        if (!newMarkers.has(marker)) {
          markersToRemove.push(marker);
        }
      }

      this.markerClusterer.addMarkers(markersToAdd, true);
      this.markerClusterer.removeMarkers(markersToRemove, true);
      this.markerClusterer.repaint();

      for (const marker of markersToRemove) {
        this._currentMarkers.delete(marker);
      }
    });
  }

  _getInternalMarkers(markers) {
    return markers.filter(markerComponent => !!markerComponent.marker).map(markerComponent => markerComponent.marker);
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.markerClusterer) {
        throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
      }
    }
  }

}

MapMarkerClusterer.ɵfac = function MapMarkerClusterer_Factory(t) {
  return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapMarkerClusterer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MapMarkerClusterer,
  selectors: [["map-marker-clusterer"]],
  contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._markers = _t);
    }
  },
  inputs: {
    ariaLabelFn: "ariaLabelFn",
    averageCenter: "averageCenter",
    batchSize: "batchSize",
    batchSizeIE: "batchSizeIE",
    calculator: "calculator",
    clusterClass: "clusterClass",
    enableRetinaIcons: "enableRetinaIcons",
    gridSize: "gridSize",
    ignoreHidden: "ignoreHidden",
    imageExtension: "imageExtension",
    imagePath: "imagePath",
    imageSizes: "imageSizes",
    maxZoom: "maxZoom",
    minimumClusterSize: "minimumClusterSize",
    styles: "styles",
    title: "title",
    zIndex: "zIndex",
    zoomOnClick: "zoomOnClick",
    options: "options"
  },
  outputs: {
    clusteringbegin: "clusteringbegin",
    clusteringend: "clusteringend",
    clusterClick: "clusterClick"
  },
  exportAs: ["mapMarkerClusterer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MapMarkerClusterer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */


class MapPolygon {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
     */

    this.polygonClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
     */

    this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
     */

    this.polygonDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
     */

    this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
     */

    this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
     */

    this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
     */

    this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
     */

    this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
     */

    this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
     */

    this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
     */

    this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set paths(paths) {
    this._paths.next(paths);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.polygon = new google.maps.Polygon(options);
        });

        this._assertInitialized();

        this.polygon.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.polygon);
      });

      this._watchForOptionsChanges();

      this._watchForPathChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.polygon) {
      this.polygon.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.polygon.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.polygon.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
   */


  getPath() {
    this._assertInitialized();

    return this.polygon.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
   */


  getPaths() {
    this._assertInitialized();

    return this.polygon.getPaths();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.polygon.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, paths]) => {
      const combinedOptions = { ...options,
        paths: paths || options.paths
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.polygon.setOptions(options);
    });
  }

  _watchForPathChanges() {
    this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(paths => {
      if (paths) {
        this._assertInitialized();

        this.polygon.setPaths(paths);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.polygon) {
        throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
      }
    }
  }

}

MapPolygon.ɵfac = function MapPolygon_Factory(t) {
  return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapPolygon.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapPolygon,
  selectors: [["map-polygon"]],
  inputs: {
    options: "options",
    paths: "paths"
  },
  outputs: {
    polygonClick: "polygonClick",
    polygonDblclick: "polygonDblclick",
    polygonDrag: "polygonDrag",
    polygonDragend: "polygonDragend",
    polygonDragstart: "polygonDragstart",
    polygonMousedown: "polygonMousedown",
    polygonMousemove: "polygonMousemove",
    polygonMouseout: "polygonMouseout",
    polygonMouseover: "polygonMouseover",
    polygonMouseup: "polygonMouseup",
    polygonRightclick: "polygonRightclick"
  },
  exportAs: ["mapPolygon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */


class MapPolyline {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._path = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
     */

    this.polylineClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
     */

    this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
     */

    this.polylineDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
     */

    this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
     */

    this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
     */

    this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
     */

    this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
     */

    this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
     */

    this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
     */

    this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
     */

    this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set path(path) {
    this._path.next(path);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => this.polyline = new google.maps.Polyline(options));

        this._assertInitialized();

        this.polyline.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.polyline);
      });

      this._watchForOptionsChanges();

      this._watchForPathChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.polyline) {
      this.polyline.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.polyline.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.polyline.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
   */


  getPath() {
    this._assertInitialized();

    return this.polyline.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.polyline.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, path]) => {
      const combinedOptions = { ...options,
        path: path || options.path
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.polyline.setOptions(options);
    });
  }

  _watchForPathChanges() {
    this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(path => {
      if (path) {
        this._assertInitialized();

        this.polyline.setPath(path);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.polyline) {
        throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
      }
    }
  }

}

MapPolyline.ɵfac = function MapPolyline_Factory(t) {
  return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapPolyline.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapPolyline,
  selectors: [["map-polyline"]],
  inputs: {
    options: "options",
    path: "path"
  },
  outputs: {
    polylineClick: "polylineClick",
    polylineDblclick: "polylineDblclick",
    polylineDrag: "polylineDrag",
    polylineDragend: "polylineDragend",
    polylineDragstart: "polylineDragstart",
    polylineMousedown: "polylineMousedown",
    polylineMousemove: "polylineMousemove",
    polylineMouseout: "polylineMouseout",
    polylineMouseover: "polylineMouseover",
    polylineMouseup: "polylineMouseup",
    polylineRightclick: "polylineRightclick"
  },
  exportAs: ["mapPolyline"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */


class MapRectangle {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
     */

    this.rectangleClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
     */

    this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
     */

    this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
     */

    this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
     */

    this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
     */

    this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
     */

    this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
     */

    this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
     */

    this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
     */

    this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
     */

    this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  set options(options) {
    this._options.next(options || {});
  }

  set bounds(bounds) {
    this._bounds.next(bounds);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(() => {
          this.rectangle = new google.maps.Rectangle(options);
        });

        this._assertInitialized();

        this.rectangle.setMap(this._map.googleMap);

        this._eventManager.setTarget(this.rectangle);
      });

      this._watchForOptionsChanges();

      this._watchForBoundsChanges();
    }
  }

  ngOnDestroy() {
    this._eventManager.destroy();

    this._destroyed.next();

    this._destroyed.complete();

    if (this.rectangle) {
      this.rectangle.setMap(null);
    }
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
   */


  getBounds() {
    this._assertInitialized();

    return this.rectangle.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
   */


  getDraggable() {
    this._assertInitialized();

    return this.rectangle.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
   */


  getEditable() {
    this._assertInitialized();

    return this.rectangle.getEditable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
   */


  getVisible() {
    this._assertInitialized();

    return this.rectangle.getVisible();
  }

  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([options, bounds]) => {
      const combinedOptions = { ...options,
        bounds: bounds || options.bounds
      };
      return combinedOptions;
    }));
  }

  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.rectangle.setOptions(options);
    });
  }

  _watchForBoundsChanges() {
    this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(bounds => {
      if (bounds) {
        this._assertInitialized();

        this.rectangle.setBounds(bounds);
      }
    });
  }

  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.rectangle) {
        throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
      }
    }
  }

}

MapRectangle.ɵfac = function MapRectangle_Factory(t) {
  return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapRectangle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapRectangle,
  selectors: [["map-rectangle"]],
  inputs: {
    options: "options",
    bounds: "bounds"
  },
  outputs: {
    boundsChanged: "boundsChanged",
    rectangleClick: "rectangleClick",
    rectangleDblclick: "rectangleDblclick",
    rectangleDrag: "rectangleDrag",
    rectangleDragend: "rectangleDragend",
    rectangleDragstart: "rectangleDragstart",
    rectangleMousedown: "rectangleMousedown",
    rectangleMousemove: "rectangleMousemove",
    rectangleMouseout: "rectangleMouseout",
    rectangleMouseover: "rectangleMouseover",
    rectangleMouseup: "rectangleMouseup",
    rectangleRightclick: "rectangleRightclick"
  },
  exportAs: ["mapRectangle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */


class MapTrafficLayer {
  constructor(_map, _ngZone) {
    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */


  set autoRefresh(autoRefresh) {
    this._autoRefresh.next(autoRefresh);
  }

  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        // Create the object outside the zone so its events don't trigger change detection.
        this._ngZone.runOutsideAngular(() => {
          this.trafficLayer = new google.maps.TrafficLayer(options);
        });

        this._assertInitialized();

        this.trafficLayer.setMap(this._map.googleMap);
      });

      this._watchForAutoRefreshChanges();
    }
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();

    if (this.trafficLayer) {
      this.trafficLayer.setMap(null);
    }
  }

  _combineOptions() {
    return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(autoRefresh => {
      const combinedOptions = {
        autoRefresh
      };
      return combinedOptions;
    }));
  }

  _watchForAutoRefreshChanges() {
    this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();

      this.trafficLayer.setOptions(options);
    });
  }

  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }

    if (!this.trafficLayer) {
      throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
    }
  }

}

MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) {
  return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapTrafficLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapTrafficLayer,
  selectors: [["map-traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh"
  },
  exportAs: ["mapTrafficLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */


class MapTransitLayer extends MapBaseLayer {
  _initializeObject() {
    this.transitLayer = new google.maps.TransitLayer();
  }

  _setMap() {
    this._assertLayerInitialized();

    this.transitLayer.setMap(this._map.googleMap);
  }

  _unsetMap() {
    if (this.transitLayer) {
      this.transitLayer.setMap(null);
    }
  }

  _assertLayerInitialized() {
    if (!this.transitLayer) {
      throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }

}

MapTransitLayer.ɵfac = /* @__PURE__ */function () {
  let ɵMapTransitLayer_BaseFactory;
  return function MapTransitLayer_Factory(t) {
    return (ɵMapTransitLayer_BaseFactory || (ɵMapTransitLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](MapTransitLayer)))(t || MapTransitLayer);
  };
}();

MapTransitLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapTransitLayer,
  selectors: [["map-transit-layer"]],
  exportAs: ["mapTransitLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */


class MapHeatmapLayer {
  constructor(_googleMap, _ngZone) {
    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
  }
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */


  set data(data) {
    this._data = data;
  }
  /**
   * Options used to configure the heatmap. See:
   * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
   */


  set options(options) {
    this._options = options;
  }

  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (!window.google?.maps?.visualization && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
      } // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.


      this._ngZone.runOutsideAngular(() => {
        this.heatmap = new google.maps.visualization.HeatmapLayer(this._combineOptions());
      });

      this._assertInitialized();

      this.heatmap.setMap(this._googleMap.googleMap);
    }
  }

  ngOnChanges(changes) {
    const {
      _data,
      heatmap
    } = this;

    if (heatmap) {
      if (changes['options']) {
        heatmap.setOptions(this._combineOptions());
      }

      if (changes['data'] && _data !== undefined) {
        heatmap.setData(this._normalizeData(_data));
      }
    }
  }

  ngOnDestroy() {
    if (this.heatmap) {
      this.heatmap.setMap(null);
    }
  }
  /**
   * Gets the data that is currently shown on the heatmap.
   * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
   */


  getData() {
    this._assertInitialized();

    return this.heatmap.getData();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */


  _combineOptions() {
    const options = this._options || {};
    return { ...options,
      data: this._normalizeData(this._data || options.data || []),
      map: this._googleMap.googleMap
    };
  }
  /**
   * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
   * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
   * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
   * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
   * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
   * convert it to a `LatLng` object before passing it off to Google Maps.
   */


  _normalizeData(data) {
    const result = [];
    data.forEach(item => {
      result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
    });
    return result;
  }
  /** Asserts that the heatmap object has been initialized. */


  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.heatmap) {
        throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
      }
    }
  }

}

MapHeatmapLayer.ɵfac = function MapHeatmapLayer_Factory(t) {
  return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapHeatmapLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: MapHeatmapLayer,
  selectors: [["map-heatmap-layer"]],
  inputs: {
    data: "data",
    options: "options"
  },
  exportAs: ["mapHeatmapLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */


function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];

class GoogleMapsModule {}

GoogleMapsModule.ɵfac = function GoogleMapsModule_Factory(t) {
  return new (t || GoogleMapsModule)();
};

GoogleMapsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: GoogleMapsModule,
  declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer],
  exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer]
});
GoogleMapsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */


class MapDirectionsService {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */


  route(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `DirectionsService` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._directionsService) {
        this._directionsService = new google.maps.DirectionsService();
      }

      this._directionsService.route(request, (result, status) => {
        this._ngZone.run(() => {
          observer.next({
            result: result || undefined,
            status
          });
          observer.complete();
        });
      });
    });
  }

}

MapDirectionsService.ɵfac = function MapDirectionsService_Factory(t) {
  return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapDirectionsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MapDirectionsService,
  factory: MapDirectionsService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */


class MapGeocoder {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */


  geocode(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      // Initialize the `Geocoder` lazily since the Google Maps API may
      // not have been loaded when the provider is instantiated.
      if (!this._geocoder) {
        this._geocoder = new google.maps.Geocoder();
      }

      this._geocoder.geocode(request, (results, status) => {
        this._ngZone.run(() => {
          observer.next({
            results: results || [],
            status
          });
          observer.complete();
        });
      });
    });
  }

}

MapGeocoder.ɵfac = function MapGeocoder_Factory(t) {
  return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

MapGeocoder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MapGeocoder,
  factory: MapGeocoder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=google-maps.mjs.map

/***/ }),

/***/ 46782:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 85345);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 68501:
/*!*********************************************!*\
  !*** ./src/app/place-api/place-api.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceApiPage": () => (/* binding */ PlaceApiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_place_api_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./place-api.page.html */ 95492);
/* harmony import */ var _place_api_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-api.page.scss */ 18876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ 86095);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 96628);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







// import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';


let PlaceApiPage = class PlaceApiPage {
    constructor(nativeGeocoder, modalController, navParams) {
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.navParams = navParams;
        this.cureent_latitude = _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'cureent_latitude' });
        // JSON.parse(language.value)
        this.center = { lat: 24, lng: 12 };
        this.markerOptions = { draggable: false };
        this.markerPositions = [];
        this.zoom = 15;
        this.SelectedLocation = {
            "Latitude": "",
            "Longitude": "",
            "Selected_address": ""
        };
        this.selectlocationView = 0;
        this.UserCurrentLocation();
    }
    ngOnInit() {
        // console.table(this.navParams);
        // this.modelId = this.navParams.data.paramID;
        // this.modalTitle = this.navParams.data.paramTitle;
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.SelectedLocation.Latitude == "" || this.SelectedLocation.Longitude == "") {
                this.SelectedLocation.Latitude = JSON.stringify(this.markerPositions[0].lat);
                this.SelectedLocation.Longitude = JSON.stringify(this.markerPositions[0].lng);
                ;
                // console.log(this.markerPositions);
            }
            console.log(this.SelectedLocation);
            this.GetSeletedAddress();
            const onClosedData = this.SelectedLocation;
            console.log(this.SelectedLocation);
            yield this.modalController.dismiss(onClosedData);
        });
    }
    GetSeletedAddress() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            //Get User Position 
            let options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(parseFloat(this.SelectedLocation.Latitude), parseFloat(this.SelectedLocation.Longitude), options)
                .then((result) => {
                console.log(JSON.stringify(result[0]));
                this.Selected_address = result[0].countryName + "," + result[0].administrativeArea + "," + result[0].locality + "," + result[0].subLocality + "," + result[0].thoroughfare;
                this.SelectedLocation.Selected_address = this.Selected_address;
                console.log(this.Selected_address);
            })
                .catch((error) => console.log(error));
        });
    }
    UserCurrentLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const cureent_latitude = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'cureent_latitude' });
            console.log(JSON.parse(cureent_latitude.value));
            const cureent_longitude = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: 'cureent_longitude' });
            console.log(JSON.parse(cureent_longitude.value));
            this.center = { lat: JSON.parse(cureent_latitude.value), lng: JSON.parse(cureent_longitude.value) };
            this.markerPositions = [{ "lat": JSON.parse(cureent_latitude.value), "lng": JSON.parse(cureent_longitude.value) }];
        });
    }
    addMarker(event) {
        this.markerPositions = [];
        this.markerPositions.push(event.latLng.toJSON());
        // console.log(event.latLng.toJSON());
        this.display = event.latLng.toJSON();
        console.log(this.display);
        this.SelectedLocation.Latitude = this.display.lat;
        this.SelectedLocation.Longitude = this.display.lng;
        this.GetSeletedAddress();
        //Get the location
        // { "latitude": 23.5921885, "longitude": 58.4469734, "countryCode": "OM",
        //  "countryName": "Oman", "postalCode": "", "administrativeArea": "Muscat Governorate",
        //   "subAdministrativeArea": "", "locality": "Muscat", "subLocality": "Madinat As Sultan Qaboos",
        //    "thoroughfare": "Dawat Al Adab Street", "subThoroughfare": "201", "areasOfInterest": ["201"] }
        this.selectlocationView = 1;
    }
    openInfoWindow(marker) {
        this.infoWindow.open(marker);
        console.log("openInfoWindow");
    }
    removeLastMarker() {
        this.markerPositions.pop();
        console.log("Remove");
    }
};
PlaceApiPage.ctorParameters = () => [
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
PlaceApiPage.propDecorators = {
    infoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__.MapInfoWindow, { static: false },] }]
};
PlaceApiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-place-api',
        template: _raw_loader_place_api_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_place_api_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlaceApiPage);



/***/ }),

/***/ 18876:
/*!***********************************************!*\
  !*** ./src/app/place-api/place-api.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mylocation {\n  height: 15%;\n  width: 90%;\n  background-color: #aaa9a9;\n  border-radius: 20px;\n  padding: 10px;\n  position: absolute;\n  margin: auto;\n  bottom: 10%;\n  right: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlLWFwaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBR0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBRkoiLCJmaWxlIjoicGxhY2UtYXBpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWxvY2F0aW9ue1xuICAgIGhlaWdodDogMTUlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTlhOTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLy8gdG9wOiAwO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG59Il19 */");

/***/ }),

/***/ 95492:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-api/place-api.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header> \n  <script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY\">\n  </script>\n</ion-header>\n\n<ion-content>\n<!-- example-app.html -->\n<google-map height=\"100%\"\n            width=\"750px\"\n            [center]=\"center\"\n            [zoom]=\"zoom\"\n            (mapClick)=\"addMarker($event)\"\n            (mapMousemove)=\"move($event)\"\n            (mapRightclick)=\"removeLastMarker()\">\n  <map-marker #marker\n              *ngFor=\"let markerPosition of markerPositions\"\n              [position]=\"markerPosition\"\n              [options]=\"markerOptions\"\n              (mapClick)=\"openInfoWindow(marker)\"></map-marker>\n  <map-info-window>Info Window content</map-info-window>\n</google-map>\n<div class=\"mylocation\">\n<div> {{'Click to Select your location'|translate}} </div>\n<!-- <div>Latitude: {{SelectedLocation.Latitude}}</div>\n<div>Longitude: {{SelectedLocation.Longitude}}</div> -->\n<div> {{SelectedLocation.Selected_address}}</div>\n  \n<ion-button (click)=\"closeModal()\" expand=\"block\"  shape=\"round\">\n  {{'Select Location'|translate}}\n</ion-button>\n<!-- <ion-button (click)=\"closeModal()\">Close Modal</ion-button> -->\n\n\n</div>\n</ion-content>  \n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_place-api_place-api_page_ts.js.map