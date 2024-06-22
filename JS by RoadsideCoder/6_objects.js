console.log("Objects");
// Everything in JS is an object
// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities
const user = {
  name: "Lokesh Melkani",
  age: 20,
};

console.log(user.name); // Lokesh Melkani

user.name = "Mohit";

console.log(user.name); // Mohit

// Delete any property
delete user.name;

console.log(user.name); // undefined

// Output based question on delete

const func = (function (a) {
  delete a; // a is local variable, delete is used to delete a property from an object so here delete will not do anything to 'a', we get 5 printed
  return a;
})(5);

console.log(func); // 5

// What if we want to store something like 'this is me' : lokesh; as a key in object
// For that we do like this
const obj = {
  name: "Loki",
  age: 10,
  "This is me": "Lokesh",
};

// Another way to access values from an object
console.log(obj["This is me"]); // Lokesh

delete obj["This is me"];

console.log(obj["This is me"]); // undefined

// How to add computed properties in object
const property = "firstname";
const name = "Virat";

const obj1 = {
  [property]: name,
};

console.log(obj1); //  { firstname: "Virat" }

// Traversing the object
const obj2 = {
  name: "MS",
  age: 50,
  Profession: "Cricket",
  Height: 4,
  Weight: 68,
};

// For traversing we cannot use normal loop we use for-in loop
for (key in obj2) {
  console.log(key); // name, age, profession, height, weight
  console.log(obj2[key]); // MS, 50, cricket etc etc
}

// Interview Questions
const obj3 = {
  a: "one",
  b: "two",
  a: "three",
};

// If we have 2 keys with same name, the latest value will be replaced by previous value

console.log(obj3); // { a: "three", b: "two" }

// 2: Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My Nums",
};

multiplyByTwo(nums);

function multiplyByTwo(nums) {
  for (key in nums) {
    if (typeof nums[key] === "number") {
      nums[key] *= 2;
    }
  }
}

console.log(nums); // { a: 200, b: 400, title: "My Nums" }

// Most Important
// 3: What is the output of following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // a["object object"] = 123
a[c] = 456; // a["object object"] = 456

// What happens is
// b = {key : "b"}
// b is not a string so when we try to insert it as a key inside 'a', it goes as object object and its value become 123
// Now c also goes like "object object" and value gets over-ridden by 456
// In the output we get 456

console.log(a[b]); // a[b] is object object so its value is 456
console.log(a); // { "[object Object]": 456 }

// 4: What is JSON.stringify() and JSON.parse()?
// JSON.stringify() is used to convert object key-value pairs to string
// JSON.parse() is used to convert string key-value pairs as back to object

const obj4 = {
  name: "Loki Melkani",
  age: 21,
};

console.log(obj4); // Object { name: "Loki Melkani", age: 21 }

const strObje = JSON.stringify(obj4);

console.log(strObje); // {"name":"Loki Melkani","age":21}

const parseObj = JSON.parse(strObje);

console.log(parseObj); // Object { name: "Loki Melkani", age: 21 }

// How are these useful?
// localstorage: Inside local storage we store key-value pairs where is we try to store object in object type then it will store it as object object
// So we use JSON.stringify to store the object as value in localstorage
localStorage.setItem("name", strObje); // name:"{"name":"Loki Melkani","age":21}"
localStorage.setItem("name1", obj4); // name1:"[object Object]"

// To get that object back we use JSON.parse then

// 5: What is the output here?
// Spread operator is used to spread values inside a Array
console.log([..."Lydia"]); //  [ "L", "y", "d", "i", "a" ]

// 6: What is the output?
const obj5 = { name: "Mahi", age: 31 };
const obj6 = { admin: true, ...obj5 };

console.log(obj6); // Object { admin: true, name: "Mahi", age: 31 }

// 7: What is output?
const obj7 = {
  username: "Lokesh",
  level: 30,
  health: 41,
};

// When we pass 2 keys as an array inside stringify() with an object then it only stringify those 2 keys inside that object
// if we give an value which is not the object inside that array, it does not do anything, it just ignore it and give same output as above
const data = JSON.stringify(obj7, ["level", "health"]);

console.log(data); // {"level":30,"health":41}

// 8: What is the output?
const shape = {
  radius: 10,
  diameter() {
    // 'this' inside normal function will point to recent object ka radius so gives output 20
    return this.radius * 2;
  },
  perimeter: () => {
    // Arrow function behave differently with this keyword
    // Arrow function ka 'this' will point to window object where radius is not defined
    return 2 * Math.PI * this.radius;
  },
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// 9: What is De-structuring in objects
let obj8 = {
  name1: "lokesh",
  class: "Btech",
};

// const { name1} = obj8; will also work but

// Let say we declare another variable with same name as key and assign different value to it
const name1 = "Me";

// If we want to avoid this coonfusion we do name1: Myname and use myName
const { name1: myName } = obj8;

console.log(myName); // lokesh

// Destructuring in nested objects
const obj9 = {
  name: "Rohit",
  age: 21,
  runs: {
    test: 4214,
    odi: 1234,
    t20: 5678,
  },
};

const {
  runs: { test, odi, t20 },
} = obj9;

console.log(test); // 4214
console.log(odi); // 1234
console.log(t20); // 5678

// 10: What is the output
// While passing as an function parameter, rest operator should always be the last parameter

function getItems(fruitList, favFruit, ...args) {
  // But spread operators can be used in between
  return [...fruitList, ...args, ...favFruit];
}

console.log(getItems(["Kela", "Apple"], ["Mango"], "orange")); // Array(4) [ "Kela", "Apple", "orange", "Mango" ]

// Object Referencing
// When we write d = c, we are not copying the values, we are just passing the reference of that object to d
// Any changes made will be reflected there also
// 11: What is the output
let c1 = { greeting: "Hey!" };
let d;

d = c1;
console.log(c1.greeting); // Hey!
c1.greeting = "Hello";
console.log(d.greeting); // Hello

// 12: What is the output
// Both {a:1} are different object and are pointing to different block in the memory
// Objects are only equal if they refer to particular part in the memory
console.log({ a: 1 } == { a: 1 }); // false

// 13: What is the output
// we are passing members[0] = person
// we are then making whole object as NULL
// if we make person.name = null
// then our output will return us name = NULL
let person = { name: "Lokesh" };
const members = [person];
person = null;
console.log(members); // Array [ {…} ] 0: Object { name: "Lokesh" }

// 14: What is the output
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

// here we do not pass any value so by-default.
// rest operator takes 10 as x in function and give us 20
// rest operator do not take it as reference so value inside object will be 10 only
multiply(); // 20
// Same as above
// rest operator do not take it as reference so value inside object will be 10 only
multiply(); // 20
// Now we pass value to the function explicitly, so now it is passed as a reference
// so not value of number updated to 20 so next time
multiply(value); // 20
// next time, again value passed as reference and value become 20*2 = 40 and number is 40 now
multiply(value); // 40

console.log(value.number); // 40

// 15: What is the output
function changeAgeAndReference(person) {
  // we are passing personObj1 as reference so age will change to 25
  person.age = 25;
  // we are re-assining object which does not happen by reference so no change in personObj1 due to below code but personObj2 will get changed to below object due to below code
  person = {
    name: "John",
    age: 50,
  };

  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // Object { name: "Alex", age: 25 }
console.log(personObj2); // Object { name: "John", age: 50 }

// 16: Deep copy VS Shallow copy of an object
// Shallow copying creates a new object with references to the same memory locations as the original object, while deep copying  creates a new object with new memory locations for all of its properties and nested objects or arrays also known as cloning an object.

let obj10 = {
  name: "Hardik Gandya",
  age: 25,
};

// 3 most popular ways to clone an object
// .assign(target,object to be copied)
// where target is an empty object for us as we want fresh object
const objClone = Object.assign({}, obj10);

console.log(obj10); // Object { name: "Hardik Gandya", age: 25 }
console.log(objClone); // Object { name: "Hardik Gandya", age: 25 }

objClone.name = "Jasprit Gumrah";
// This will not affect the original object as its a deep copy

console.log(obj10); // Object { name: "Hardik Gandya", age: 25 }
console.log(objClone); // Object { name: "Jasprit Gumrah", age: 25 }

// Method 2
const objClone2 = JSON.parse(JSON.stringify(obj10));

console.log(objClone2); // Object { name: "Hardik Gandya", age: 25 }

// Method 3
const objClone3 = { ...obj10 };

console.log(objClone3); // Object { name: "Hardik Gandya", age: 25 }
