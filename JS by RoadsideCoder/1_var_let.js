console.log("Var vs let vs const");
// var vs let vs const
// scope
// Region of program where any variable can be accessed
var a = 5;

// var is global scoped
// let and const are block scoped

{
  const b = 5;
  let c = 4;
  console.log(b); // 5
  console.log(c); // 4
  console.log(a); // 5
  a = 50;
  console.log(a); // 50
}

console.log(a); // 50

{
  var a = 14;
  console.log(a); // 14
  a = 90;
  console.log(a); // 90
}

console.log(a); // 90

{
  let a = 75;
  console.log(a); // 75
  a = 78;
  console.log(a); // 78
}

console.log(a); // 90

function test() {
  let a = "lokesh";

  if (true) {
    let a = "Raju";
    // Shaddowing in JS
    // this 'a' will shadow above 'a' but is only accessible inside this block
    console.log(a); // raju
  }

  console.log(a); // lokesh
}

test();

console.log(a); // 90
// we can shaddow var using let
// we cannot shaddow let using var called as illegal shaddowing

function testing() {
  var a = "lokesh";
  let b = "raju";

  if (true) {
    let a = "melkani";
    // var b = "sharma";  // error, cannot shaddow var let using var
    console.log(a); // melkani
    console.log(b); // raju
  }
  console.log(a); // lokesh
  console.log(b); // raju
}

testing();

// Declaration
var a1;
var a3; // this is fine, we can re-declare as many times
let a5;
// let a5; // error cannot re-declare in same scope

let a9;
{
  let a1; // this is fine, re-declare can be done is different scope
}

// const a; // cannot declare const without initialisation
const a6 = 3; // cannot re-delcare in same scope
const a7 = 5;
console.log(a7); // 5

// we can declare let and var without initialisation
// we cannot declare const without initialisation
const b1 = 5;
// b1 = 4; // error, cannot re-initialise a const variable

var b2 = 4;
console.log(b2); // 4
b2 = 3;
console.log(b2); // 3

let b3 = 7;
console.log(b3); // 7
b3 = 30;
console.log(b3); // 30

// Hoisting
// In JS there are 2 phases creation phase and execution phase
// In the creation phase, memory heap is created which takes all variables and function from the code and assigns them with undefined
// In the execution phase, code runs line by line and values are assigned to variables and function
// Each function on execution creates its own execution context
// In the creation phase, concept of hoisting comes to play
// During creation phase, JS engine moves all variables and functions to top of the code this is called hoisting

console.log(count); // undefined

var count = 1;
console.log(count); // 1

// Are let also hoisted??
// console.log(count1); // error but they are hoisted in temporal dead zone and this is the limitation of var which was fulfilled by let
// Temporal dead zone is time between declaration and initialisation of a variable of type let and const
let count1 = 5;
console.log(count1); // 5

// What is the output?
function ab() {
  console.log(a); // undefined
  var a = 87;
  console.log(a); // 87
}

ab();

function abc() {
  //   console.log(a, b, c); // undefined, error, error
  // error means they are hoisted in temporal dead zone so we cannot use them before initialisation
  const c = 24;
  let b = 35;
  var a = 45;
  console.log(a, b, c); // 45 35 24
}

abc();
