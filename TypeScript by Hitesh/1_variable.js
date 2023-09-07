"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let varibale-name: variable-type = default-value
// In TS, all variable-types are lowercase
var greetings = "Hello Lokesh";
// greetings = 6, cannot do this as its a string
var myNum = 6;
greetings.toLowerCase();
// myNum.toUppercase() cannot do as its a type NUMBER
console.log(greetings);
// number
var userId = 33564.5;
// let userId = 33564.5; is also correct syntax becuase typescipt is smart enough to guess from 33564.5 that this will have a type "number" so we do not need to use :number or :type everywhere.
console.log(userId.toString());
// userId = "lokesh" gives errors as we can't assign string to number
// boolean
var isLoggedIn = false;
