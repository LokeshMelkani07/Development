"use strict";
// interface is like a loosely-typed class
// it gives a blueprint but does not tell us what to do
Object.defineProperty(exports, "__esModule", { value: true });
// So User is an interface, now id we make use it we need to define everything scrictly in the order our User tells us to
var lokesh = {
    dbId: 12,
    email: "lokesh.com",
    userId: 2256,
    //   startTrial = 4 gives error as its a method
    startTrial: function () {
        return "Trial Started";
    },
    stTrial: function () {
        return "Yes";
    },
    // we do not necessarily need to use couponName and value we can use any name
    getCoupon: function (name, off) {
        return 10;
    },
};
lokesh.email = "loki.com";
