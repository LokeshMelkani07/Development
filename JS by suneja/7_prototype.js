// Prototype in JS

/*
// Different ways of making object in JS
const obj = new Object({
  name: "lokesh",
});

const obj1 = new obj();
const obj2 = {
  name: "melkani",
};
*/

// Object has a prototype of its own in which it has certain functions like getters and setters , valueof etc etc.. it allows the obj to use these functions
const obj = {
  name: "lokesh melkani",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
};
console.log(obj);

// if we want to access name of obj in obj2 what we will do is we will want obj to go as a prototype in obj2 so we pass it as _proto_:obj
const obj2 = {
  roll: 23,
  name: "rohit", // now it will print obj2.getName() as rohit because this.name will refer to 'rohit' now if 'rohit' was not present here then it would go to 'lokesh melkani'
  __proto__: obj,
};

console.log(obj2.getName());
console.log(obj2.getRoll()); // 23

const obj3 = {
  class: "BCA",
  name: "mohit", // now getName() will give mohit as output
  __proto__: obj2,
};

// This is all inheritence so obj3 has a obj2 as prototype and obj2 has a obj as prototype so now due to inheritence obj3 will have both obj2 and obj as its prototype and if obj3 does not have variable name or variable roll then obj3.getName() and obj3.getRoll() will search for this.name and this.roll in obj2 and if obj2 does not have them then it searches for it in obj and if there also not exist then it gives undefined
console.log(obj3.getName());

// Array etc everything are deriving from Object prototype
const array = ["loki"];
// On console window we see prototype and all the functions like push,pop,slice,replace etc of array inside that prototype and we can access them using just array.push but at the end we also see Object prototype because everything is deriving from Object prototype
// These all functions inside prototype are made in the same way as above
console.log(array);

const object = new Object();
console.log(object); // now we can see the prototype of object

// let say we want to see prototype of array
// for funtion also we can do the same
const arr = new Array();
console.log(arr); // we get prototype of array

// Let say we want to add a new property by our own like push , pop functionality
// we are making this show functionality using prototype which return us the array itself
Array.prototype.show = function () {
  return this;
};

const cities = ["delhi", "mumbai"];
console.log(cities.show());

// Let say we make another functionality to convert given array to the object so we do like
Array.prototype.objConvert = function () {
  let newObj = {};
  this.forEach((ele) => {
    newObj[ele] = ele;
  });
  return newObj;
};

console.log(cities.objConvert());

// To Make prototype of our own not using Object we can do it using constructor
function MyPrototype(name, roll) {
  this.name = name;
  this.roll = roll;
}

// Now if we want obj to be part of this new created prototype MyPrototype then we can do __proto__ or just do
MyPrototype.prototype = obj;

const myproto = new MyPrototype("raj", 31);
console.log(myproto.getName());

console.log(myproto.getRoll()); // This is will give undefined if our MyPrototype does not have a arguement of roll in its constructor and write like  const myproto = new MyPrototype("raj", 31); and give roll number also like 31
