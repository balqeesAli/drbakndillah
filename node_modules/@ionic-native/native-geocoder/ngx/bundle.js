'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var NativeGeocoder = /** @class */ (function (_super) {
    tslib.__extends(NativeGeocoder, _super);
    function NativeGeocoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeGeocoder.prototype.reverseGeocode = function (latitude, longitude, options) { return core.cordova(this, "reverseGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoder.prototype.forwardGeocode = function (addressString, options) { return core.cordova(this, "forwardGeocode", { "callbackOrder": "reverse" }, arguments); };
    NativeGeocoder.pluginName = "NativeGeocoder";
    NativeGeocoder.plugin = "cordova-plugin-nativegeocoder";
    NativeGeocoder.pluginRef = "nativegeocoder";
    NativeGeocoder.repo = "https://github.com/sebastianbaar/cordova-plugin-nativegeocoder";
    NativeGeocoder.platforms = ["iOS", "Android"];
    NativeGeocoder.decorators = [
        { type: core$1.Injectable }
    ];
    return NativeGeocoder;
}(core.IonicNativePlugin));

exports.NativeGeocoder = NativeGeocoder;
