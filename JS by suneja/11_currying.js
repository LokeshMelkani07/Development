// Currying Function in JS
// New approach to write the code

function addition(a, b, c) {
  return a + b + c;
}
let res = addition(2, 3, 4);
console.log(res);

function Addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let res1 = Addition(1);
console.log(res1); // it will return whole function(b) to us now what we do
let res2 = res1(2);
console.log(res2); // it will return whole function(c) to us now what we do
let res3 = res2(4);
console.log(res3); // it will return us 1+2+4 = 7
// We were just storing the return function in a new variable everytime using closures

// Same thing using currying way
console.log("Currying Way");
let res4 = Addition(1)(2)(4);
console.log(res4);

userObj = {
  name: "lokesh",
  age: 21,
};

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let res5 = userInfo(userObj);
console.log(res5); // res5 will return us a function which return us a object
console.log(res5("name")); // res5 will pass 'name' as parameter in userinfo and we get obj[name] in return
