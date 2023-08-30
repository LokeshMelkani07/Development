console.log("functions");
// Functions in JS

// what is function declaration or function defination or function statement

function square(num) {
  return num * num;
}

// what is function expression
// when you store a function inside a variable its function expression
// Function without name is anonymous function which can be passed to a variable also
const add = function (num) {
  return num + 1;
};

console.log(add(3));

// First class functions
// When function can be used a argument, assigned to a variable etc
function displayAdd(fun) {
  console.log("This is " + fun(5));
}

displayAdd(add); // This is 6

// What is IIFE?
// Immediately invoked function expressions

// Below is a normal function with normal calling
function multiplyWithThree(num) {
  console.log(num * 3);
}

multiplyWithThree(4); // 12

// Below is a IIFE
// It is invoked immediately and its syntax or method of calling is something like this
(function multiplyWithFour(num) {
  console.log(num * 4);
})(4); // 16

// O/P based question on IIFE
// O/P of below function will be 1
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Function scope
var num1 = 20,
  num2 = 3,
  name = "lokesh melkani";

function multiply() {
  return num1 * num2;
}

// Now when we call multiply(), it automatically takes num1 and num2 from the global scope and return us the output
let ans = multiply();
console.log(ans); // 60

// Nested function example
function getScore() {
  // These num1 and num2 will shaddow, num1 and num2 from global scope
  var num1 = 2,
    num3 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore()); // lokesh melkani scored 5

// Function Scope: O/P based question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000); // 1 2 3 4 will be printed after gap of one second each as let is blocked scope so seperate function call happen everytime and executed in the call stack managed by event loop
}

// if we take 'var'
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    // console.log(i);
  }, i * 1000); // 5 5 5 5  will be printed after gap of one second each as var does not have block scope so only one function call happens
}

// Function are hoisted differently than a normal variable
// Variables are assigned undefined initially but in case of function, complete function is copied so it does not give undefined

// output will be same does not matter we declare it below or at line 102
fullName(); // Lokesh Melkani

function fullName() {
  console.log("Lokesh Melkani");
}

fullName(); // Lokesh Melkani

// console.log(x);  // undefined

x = 5;

console.log(x); // 5

// We have a functional scope also inside a function
function fun() {
  var x = 50;
  console.log(x);
}

fun(); // 50 as this x has functional scope
console.log(x); // 5 as its global scope

// O/P based question on function hoisting
var y = 21;

var func = function () {
  console.log(y);
  var y = 40;
};

func(); // gives undefined as function will have its separate execution context where variable y will be hoisted as undefined initially

// Params vs Arguements
// num is a parameter
function print(num) {
  console.log(num * num);
}

print(3); // 3 is Arguement

// Spread vs Rest Operator
// This is spread operator
function work(num1, num2) {
  console.log(num1 * num2);
}

var arr = [2, 3];
work(...arr); // 6

// This is rest operator
function work(...num) {
  // ...num above is rest operator
  console.log(num[0] * num[1]);
}

var arr = [5, 3];
work(...arr); // 15

// I/P based question on Params vs Args
// Below code gives us error
// Because, rest or spread operator should always be the last parameter in a parameter list
/*

const fn = (a, ...n ,x,y)=>{
    console.log(x,y);// 5 6
};

fn(3,4,5,6);


*/

// Below code works fine
const fn = (a, x, y, ...n) => {
  console.log(x, y); // 4 5
};

fn(3, 4, 5, 6);

// Callback function
// Function passed into another function as an arguement, which is then invoked inside the outer function to complete some kind of routine or action

// map,filter,reduce,setTimeout,eventListeners etc use callback functions
/*
document.addEventListener('click',()=>{

})
*/

// Arrow functions
const adding = (num1, num2) => {
  return num1 + num2;
};

/*
Difference between normal function and arrow function
1. Syntax is different
2. We can avoid return keyword if there is only one statement for arrow function
*/

// 3. Arguments
// for normal function
function fnction() {
  console.log(arguments); // Arguments { 0: 3, 1: 4, 2: 5, … }
}

fnction(3, 4, 5);

// for arrow function
const fnArr = () => {
  //   console.log(arguments); // Uncaught ReferenceError: arguments is not defined
};

fnArr(1, 2, 3);

// 4. 'this' keyword -> works differently for both normal and arrow function
let user = {
  username: "lokesh",
  rc1: () => {
    console.log("hey yoo " + this.username);
    // this is pointing to global object here
  },
  rc2() {
    console.log("hello ji " + this.username);
  },
};

user.rc1(); // hey yoo undefined
user.rc2(); // hello ji lokesh
