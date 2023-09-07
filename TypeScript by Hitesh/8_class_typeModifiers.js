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
var User = /** @class */ (function () {
    function User(email, name) {
        // In JS also there is private access modifier which has syntax
        //   #name: string;
        // everything is public bydefault
        this.city = "Delhi";
        this.email = email;
        this.name = name;
        // this.city = city is valid
    }
    return User;
}());
var lokesh = new User("lokesh.com", "lokesh");
// lokesh.city = "jaipur" gives error as its readonly, we can access it but cannot modify it but if we want to restict its access outside class we can use private type modifier
// Below code does same job as above but it is less clumsy
var User1 = /** @class */ (function () {
    function User1(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // private can only be accessed within class
        this._courseCount = 1;
        // protected can be accessed within same class and  by inherited class also
        this._myAge = 18;
        this.city = "Delhi";
    }
    // Like Private Properties, we can also have private methods
    User1.prototype.deleteToken = function () {
        console.log("Token Deleted");
    };
    Object.defineProperty(User1.prototype, "getAppleEmail", {
        // To set or get private value we can make getters and setters inside class so that outsiders can also access private values
        // This is a getter
        // This is not necessary that everytime there is getter, there should be a setter also. it may happen that we just need to get the value and do not want anyone to set the value or vice-versa
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "getCourseCount", {
        // This is a setter for courseCount
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "courseCount", {
        // This is a setter for course counter
        // Setter can never have a return type mentioned in TS so we can't do
        // set courseCount(courseNum): number{}
        // in below code
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
// Inheritence in classes
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // subUser cannot inherit properties from User1 which are private
        // private can only be accessed within the class
        _this.isFamily = true;
        return _this;
    }
    // Manipulating _myAge of class User1
    // To be able to be used in inherit class, we need to make access specifier of _myAge as "protected"
    subUser.prototype.changeCourseCount = function () {
        this._myAge = 20;
    };
    return subUser;
}(User1));
