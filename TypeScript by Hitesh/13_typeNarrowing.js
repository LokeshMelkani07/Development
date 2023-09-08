"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeof [] = object
// typeof is also called as Type guard in TS
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// Now what if we pass, number[] in above function
// In below code, we are tackling  null case
function provideID(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // means its not null
        if (typeof strs === "object") {
            // means its string array
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            // means its a simple string
            console.log(strs);
        }
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
// check whether account is User or Admin?
// if account has isAdmin, then its a Admin but how to check it?
// we use "in" operator
function isAdminAccount(account) {
    // "in" operator helps us in checking whether certain thing is present or not
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
// instanceof narrowing
// To check whether or not a value is an "instance" of another value.
// we make any instance using a "new" keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// This function checks if pet is a fish then return true
// else return false
function isFish(pet) {
    // pet is Fish means if its true then it returns that pet is Fish
    // we take pet as fish and check if it has swim function means its a fish and it not equal to undefined so return true
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * shape.side;
}
// Exhaustiveness checking
// never keyword
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        // if we see our value can be something else also, we use "never" and a default case
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
