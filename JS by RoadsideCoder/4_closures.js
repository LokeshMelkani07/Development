console.log("closures");
// Closures
// Lexical scope
// It means that variable declared outside a function is accessible inside another function but
// Variable declared inside a function is not accessible outside a function
var username = "lokesh melkani";

function local() {
  console.log(username); // lokesh melkani
  var rollNumber = 23;
}

// console.log(rollNumber); // error

local();

// Another example
function hello() {
  var name = "hey!!";
  function displayName() {
    console.log(name); // hey!!
  }
  displayName();
}

hello();

// Closure
// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.
// Lexical Scoping: A function scope’s ability to access variables from the parent scope is known as lexical scope.
// Closures allows variable sharing between functions

function makeFunc() {
  var name = "Goggle";
  function display(num) {
    console.log(name, num);
  }
  return display;
}

makeFunc()(5); // Goggle 5

// Closure Scope chain
// Every closure has 3 scopes, local scope,outer function scope and global scope
// Closure function has access to all the scopes, parent scope, parent ke parent scope

var branch = "EEE";
function makeFunc1() {
  var name = "Goggle";
  // It has access to branch variable also which is parent ka parent
  function display1(num) {
    console.log(name, num, branch);
  }
  return display1;
}

makeFunc1()(5); // Goggle 5 EEE

// another example
var e = 10;
function sum(a) {
  return function (b) {
    return function (d) {
      return a + b + d + e;
    };
  };
}

console.log(sum(1)(2)(4)); // 17

// Output based questions
// What will be logged to console?
let count = 0;
(function printCount() {
  if (count == 0) {
    let count = 1; // This is shadowing
    // let is block scope so count=1 inside this block only
    console.log(count);
  }
  console.log(count);
})(); // 1 0

// Write a function that would allow you to do this

function createBase(num) {
  return function answer(n1) {
    return num + n1;
  };
}

var addSix = createBase(6);
console.log(addSix(10)); //return 16
console.log(addSix(21)); //return 27

// Use closures to do time optimisation in the below code
/*
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}

const closure = find();
console.time("6"); // 20ms
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12"); // 120ms
*/

// Answer of above code
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  // we will just add below piece of code
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6"); // 1ms
console.time("12");
closure(12);
console.timeEnd("12"); // 1ms

// Block Scope and setTimeout
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
      // var is not a block scoped, it is function scoped so it does not create new execution context everytime so this setTimeout call will go on and last value of i was 3 after which it came out of  loop so we get 3 3 3 in answer
    }, 1000);
  }
}

a(); // 3 3 3

// Same question with let
function a1() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
      // let is a block scoped,so it does create new execution context everytime so we get 0 1 2 in answer
    }, 1000);
  }
}

a1(); // 0 1 2

// Same question without using let but output should be 0 1 2 only so we use closures
function a2() {
  for (var i = 0; i < 3; i++) {
    // We will use closure here and this function everytime will create its own execution context
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    }
    inner(i);
  }
}

a2(); // 0 1 2

// How would you use a closure to create a private counter?
// Counter which is not accessible outside is private counter

function Counter() {
  var counter = 0;
  function add(increment) {
    counter += increment;
  }

  function retrieve() {
    return "Counter = " + counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = Counter();
c.add(5);
c.add(10); // Till here counter value should have become 15

console.log(c.retrieve()); // Counter = 15

// What is Module Pattern?
// We have a private function which does the work we need to hide
// we have a public method which can access private method and can be returned to user
var Module = (function () {
  function privateMethod() {
    console.log("Private");
  }

  return {
    publicMethod: function () {
      console.log("Public");
    },
  };
})();

Module.publicMethod(); // Public
//Module.privateMethod(); // Uncaught TypeError: Module.privateMethod is not a function

// We have a function below, make it run only once
let view;
function runOnlyOnce() {
  view = "lokeshlokesh";
  console.log("This is " + view);
}

/*
We call it many times but it should be called only once
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
runOnlyOnce();
*/

let view1;
function runOnlyOnceAnswer() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already called");
    } else {
      view1 = "lokeshlokesh";
      console.log("This is " + view1);
      called++;
    }
  };
}

let calling = runOnlyOnceAnswer();
calling(); // This is lokeshlokesh
calling(); // Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called
calling(); //Already called

// There is a Once() which does the same work
// Let us write its polyfill

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      // There is a function, run it
      ran = func.apply(context || this, arguments);
      // make it null so that it does not run again
      func = null;
    }

    return ran;
  };
}

const hello1 = once(() => console.log("hello"));

hello1();
hello1();
hello1();
hello1();
hello1();
hello1();
hello1();
// Output of above multiple calls: only one time 'hello'

// Polyfill of memoize/caching
/*
const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};
*/

function myMemoise(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const memo = myMemoise(clumsyProduct);
console.time("first call");
console.log(memo(2345, 2456));
console.timeEnd("first call"); // 106ms

// if we call same function for same arguements we will see,we get answer very quickly
console.time("first call");
console.log(memo(2345, 2456));
console.timeEnd("first call"); // 0ms

// Difference between closure and scope
// Function inside function, inner function is closure. we can access outer function variables using that closure later
// Scope defines what variable we have access to
