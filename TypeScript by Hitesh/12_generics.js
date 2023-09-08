"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// helps in making reusable components
var score = []; // makes an array having values of type number initialised with empty array
var names = []; // makes an array having values of type string initialised with empty array
// Below function gives return us number if val is of type number else return us boolean
function identity(val) {
    return val;
}
// below function return us anything and val can be anything
function identityTwo(val) {
    return val;
}
// what if, we want value to be of certain type which can be any type given by user and we return to return same type?
// we use generics
function identityThree(val) {
    return val;
}
// identityThree(3) gives Type = number
// identityThree("3") gives Type = string
// Same as above but short syntax
function identityFour(val) {
    return val;
}
identityFour({
    brand: "Bisleri",
    type: 10,
});
// Taking input as an Array using a generic
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// Another way to do the same
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
function getSearch(products) {
    // do some DB operations
    var index = 3;
    return products[index];
}
// Converting above function to arrow function
var getMoreSearchProducts = function (products) {
    // do some operations
    var index = 4;
    return products[index];
};
console.log(getMoreSearchProducts([3, 4, 5, 6, 10])); // gives 10
console.log(getMoreSearchProducts(["lokesh", "mohit", "rohit", "sohit", "mukesh"])); // gives mukesh
// Instead of using <T> for declaring generic we can also do <T,> to make sure that this is not a JSX tag like h1,h2 its a generic syntax
// Passing multiple arguments in the generic
function anotherFunction(firstVal, secondVal) {
    return {
        firstVal: firstVal,
        secondVal: secondVal,
    };
}
anotherFunction(3, "5"); // is ok
// But if we do something like this
function anotherFunction1(firstVal, secondVal) {
    return {
        firstVal: firstVal,
        secondVal: secondVal,
    };
}
// anotherFunction1(3,"4") gives error
anotherFunction1(3, 4.5); //does not gives error
function anotherFunction2(firstVal, secondVal) {
    return {
        firstVal: firstVal,
        secondVal: secondVal,
    };
}
var obj = {
    connection: "124lok",
    username: "Lokesh",
    password: "loki1234",
};
anotherFunction2(3, obj); // now U will be of type Database only as it extends Database
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
