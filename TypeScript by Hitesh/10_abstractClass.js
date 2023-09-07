"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
// it cannot implement it, it can inherit it as TakePhoto is not a interface
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Instagram;
}(TakePhoto));
// Making new object out of class TakePhoto
var lokesh = new TakePhoto("Test", "Test");
// if we make it abstract, we cannot make object out of it but we can inherit it
// abstract class gives just the blue-print, we cannot create object out of it.
// It tells class inheirting it to make use of blue-print and perform actions
var TakePhoto1 = /** @class */ (function () {
    function TakePhoto1(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // Say we want to add this new method, we can do it here whereas it was not possible in interface
    TakePhoto1.prototype.getReelTime = function () {
        // some calculations
        return 8;
    };
    return TakePhoto1;
}());
// const lokesh1 = new TakePhoto1("Test", "Test"); gives error "Cannot create instance of an abstract class"
var Youtube = /** @class */ (function (_super) {
    __extends(Youtube, _super);
    function Youtube(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Youtube.prototype.getPhoto = function () {
        console.log("Got photos");
    };
    // these methods can be over-written by these classes also
    Youtube.prototype.getReelTime = function () {
        return 10;
    };
    return Youtube;
}(TakePhoto1));
var loki = new Youtube("test", "test", 3); // is correct
