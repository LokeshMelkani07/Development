console.log("Currying");
// Currying
// Currying is a function that takes one argument at a time and returns a new function expecting the next argument. It is a conversion of functions from callable as f(a,b,c)into callable as f(a)(b)(c).
// Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures by immediately returning their inner functions simultaneously.
// Converting normal function f(a,b) to currying function f(a)(b)

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(6)); // 5 6

// Why currying?
// It divides one function into multiple functions so that one handles one set of responsibility.
// It helps in avoiding the same variable again and again.

/*Simple function*/
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(1, 2, 3)); // 6

/* Curried Function */
const addCurry = (a) => {
  // takes one argument
  return (b) => {
    //takes second argument
    return (c) => {
      //takes third argument
      return a + b + c;
    };
  };
};
console.log(addCurry(1)(2)(3)); //6
console.log(addCurry(1)); // function addCurry(b)

console.log(addCurry(1)(2)); // function addCurry(c)
// So each function returns the inner function

/*
Question
Make a function
evaluate("sum")(4)(2) => 6
evaluate("multiply")(4)(2) => 8
evaluate("divide")(4)(2) => 2
evaluate("subtract")(4)(2) => 2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "sum") {
        return a + b;
      } else if (operation == "multiply") {
        return a * b;
      } else if (operation == "divide") {
        return a / b;
      } else if (operation == "subtract") {
        return a - b;
      } else {
        return "Invalid Response";
      }
    };
  };
}

console.log(evaluate("multiply")(4)(3)); // 12

// we can also use this function as
const mul = evaluate("multiply");
const ad = evaluate("sum");
const div = evaluate("divide");
const sub = evaluate("subtract");

console.log(mul(3)(5)); // 15
console.log(ad(3)(5)); // 8
console.log(div(3)(5)); // 0.6
console.log(sub(3)(5)); // -2

// Infinite Currying
// If we want to make a function, dynamic
// say, we want a function which perform addition till n numbers where n can be dynamically passed, we use infinite currying

function addition(a) {
  return function (b) {
    if (b) return addition(a + b);
    return a; // if there is no next element, return value till that point
  };
}

// at the end () means there is no 'b' so return result till that point
console.log(addition(4)(5)(6)(7)()); // 22

// Currying vs Partial Application

function adding(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = adding(5);
console.log(x(1, 2)); // 8
console.log(x(4, 5)); // 14

// or we can call it like

console.log(adding(4)(2, 3)); // 9
console.log(adding(5)(6, 7)); // 18

// The above function adding() is not currying function its a partial application
// partial application just reduces the size of the function with more number of operands whereas in currying we supply many number of arguments

// Same function using currying
// In currying, number of arguments = number of currying functions
// In below code we return 3 functions whereas in above code, we return 2 functions and number of arguments = 3
function addingCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addingCurrying(4)(3)(2)); // 9

// Real life usage of Currying
// Manipulating the DOM
// <h1 id="hello">Hello Lokesh</h1> is made in index.html
function updateText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

updateText("hello")("This is me Lokesh"); // it works dude!! // This is me Lokesh printed on screen

// we can also use above function as
const updateHeader = updateText("hello");

updateHeader("this is new content"); // this is new content
updateHeader("this is again new content"); // this is again new content

// Most Important
// Convert f(a,b,c) into f(a)(b)(c)
// curry() implementation
function curry(func) {
  return function curriedFunction(...args) {
    console.log(args.length, func.length);
    /*
    args.length means number of arguments which keep on increasing
    func.length means number of arguments in the function we want to convert to curry function
    See, what is a curry function?
    A function which returns number of functions = number of arguments
    1 4
    2 4
    3 4
    4 4
    now args.length>=func.length so goes inside if-statement
    */
    if (args.length >= func.length) {
      // now it calls sum(a,b,c,d) as now it has all the arguments inside args
      return func(...args);
    } else {
      // if we enter here, means
      // args.length < func.length so we return one more function for next argument, we call it next here
      return function (...next) {
        // we add new arguement inside args so args.length increases and this new function being called for next values of args keep on happening till args.length >= func.length
        return curriedFunction(...args, ...next);
      };
    }
  };
}

// we need to convert this below normal function to currying function which has 4 number of arguments so the currying function will return us 4 functions
const sum = (a, b, c, d) => a + b + c + d;

// we pass this function inside our curry function
const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(5)); // 11
