// hoisting in JS
// https://www.w3schools.com/js/js_hoisting.asp
// hoisting is related to memory management
// JS is single threaded language means code will be executed line by line synchronously
// To do it asynchrnously we use event loop etc etc
// when we declare some variable or function it gets stored in form of key-value pair in global execution context
var a = 5;
function getName() {
  console.log("Lokesh Melkani");
}

getName();
console.log(a);

// if we declare getName() and console.log(b) in beginning then it will show 'Lokesh Melkani' and undefined
// As initially a gets some memory but initially its value is undefined and we console.log(b) it before assigning it 5 so no furthur execution happen and we get undefined
// But it does not give any error
getNaam();
console.log(b);

var b = 5;
function getNaam() {
  console.log("Lokesh Melkani");
}

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
// JavaScript only hoists declarations, not initializations means if we initialise y=7 but after doing console.log(y) then value of y will not be 7 its undefined because only declaration is hoisted not the initialisation

/*
getUser();
test();

const test = function getUser(){
  console.log("Like");
};

const test = () => {
  console.log("Like");
};

// now getUser and test will be treated as undefined variable because the way we have made the function , for both normal and arrow function getUser and test will be treated as a variable which is undefined

*/
