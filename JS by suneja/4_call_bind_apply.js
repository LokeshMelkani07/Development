// Call , Bind , Apply in JS

// Problem Statement
let userDetails = {
  name: "Lokesh",
  age: 21,
  designation: "SDE",
  printDetails: function () {
    console.log(this.name);
    // This Keyword is use to refer to a object , outside it refers to the global object but inside a function it refers to local properties of a function
  },
};

userDetails.printDetails(); // lokesh

let userDetails2 = {
  name: "Rohit",
  age: 29,
  designation: "Tester",
};

// if both object do same work just their is change in information and we need printDetails to print details of userDetails2
// we need 'this' of printDetails inside userDetails to point to userDetails2
// For this we use call() funtion

userDetails.printDetails.call(userDetails2); // Rohit
// now this refer to object of userDetails2 and userDetails both

// Let if printDetails was a generic function and not inside a object then how do we call it for certain object ?
let printDetail = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

// If we have a parameter in a function

printDetail.call(userDetails, "Delhi", "India"); // lokesh Delhi India

// If instead of passing each argument one by one we pass a ArrayList This is where we use 'apply' function
// This is only difference between 'call' and 'bind'
printDetail.apply(userDetails2, ["Mumbai", "India"]); // rohit Mumbai India

// Bind is same as call but in call we directly call the function but bind says to make a copy of a function and then call it later according to our use

let newBind = printDetail.bind(userDetails, "New Jersey", "London");
newBind();
