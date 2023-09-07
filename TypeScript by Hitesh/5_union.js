"use strict";
// Using union we can combine more then 1 type of data
// It is useful when we do not know what type of data is coming to us
// its better than using "any"
Object.defineProperty(exports, "__esModule", { value: true });
// score can be number or string also
// we need to be strict, should not pass all type of data types
var score = 33;
score = 44;
score = "55";
var lokesh = {
    name: "lokesh",
    id: 234,
};
// now later lokesh can also act as Admin, does not give error
lokesh = {
    username: "loki",
    id: 123,
};
function getDbID(id) {
    // Making API calls
    console.log("DB id is: ".concat(id));
}
getDbID(3); // is correct
getDbID("3"); // is correct
// What if we make some modifications up here!
function getDbIDs(id) {
    // id.toLowerCase() gives error because it can be number also so typescript detects it
    // it does not treat id as number or string
    // it treats id as number | string
    // How to solve it? Do verification
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else if (typeof id === "number") {
        id + 2;
    }
}
// Array
// const data: number[] = [1, 2, 3, "10"]; gives error as array type is number so cannot give string
var data = [1, 2, 3, 10];
var data1 = ["10", "20", "30"];
// Let say we want an array which has mix of integer and string
// Below syntax means: Array will be either entire string or entire number so below syntax does not helps
// const data2 :number[] | string[] = ["10","20","30",40,50,60]; gives eror
// Correct way is
var data2 = [
    "10",
    "20",
    "30",
    40,
    50,
    60,
    true,
    false,
];
var pi = 3.14;
// pi = 4.1 gives error now as value of pi can only be 3.14
var seatAllotment;
seatAllotment = "aisle";
