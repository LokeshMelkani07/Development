// Infinite Currying in JS

// Let say we have infinite numbers coming dynamically and we have to add them so we need to make a smart addition function so that it can add all dynamic values coming

function add(a) {
  return function (b) {
    return function () {
      return a + b;
    };
  };
}

console.log(add(4)(5)()); // gives output 9
// console.log(add(4)(5)(7)()); // but this does not give an output for this to run we need to add one more function return statement

function Add(a) {
  return function (b) {
    return function (c) {
      return function () {
        return a + b + c;
      };
    };
  };
}
console.log(Add(4)(5)(7)()); // Output 16

// But we cannot add one more return statement everytime so what we do to handle this

function add1(a) {
  return function (b) {
    if (b) return add1(a + b);
    return a;
  };
}
console.log(add1(2)(4)(5)(6)(7)(8)(1)()); // Output 33 so now our addition function is smart and can handle dynamic values
