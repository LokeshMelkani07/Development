// Map , Set , WeakMap , WeakSet

// Set
// Set is collection of unique data which does not provide duplicacy
// we will use prototype to perform operations in set
// Object constructor

// Array has duplicate elements but its not like that in set
// we can store elements in key-value pair here
let arr = [1, 2, 3, 4];
let obj = new Set(arr);
console.log(obj);
console.log(obj.size);
obj.add(5);
obj.add(5); // Duplicate element will not be entertained
console.log(obj);
obj.delete(5);
console.log(obj);
// we can store a object , int ,string , array anything inside set
var obj1 = { name: "lokesh" };
obj.add(obj1);
console.log(obj);
// obj.clear(); // obj now get clear size = 0

console.log(obj.has(10)); // to check 10 exist in obj or not

// we can also use for loop or foreach loop in set as its present in its prototype
for (let new1 of obj) {
  console.log(new1);
}
obj.forEach((ele) => {
  console.log(ele);
});

// Map
// Data is stored in key-value pair
// If same key has two different values it just overwrite the value of key with newest value

// One way of declaring map
let myMap = new Map([
  ["a1", "lokesh"],
  ["a2", "melkani"],
  ["a2", "milk"], // now value of a2 become milk
  ["a3", "melkani"], // a3 and a2 both can have value as melkani
]);
console.log(myMap);
myMap.set("a3", "rohit");
console.log(myMap);
// myMap.delete("a2");
// myMap.clear();
console.log(myMap.get("a2")); // can get value of key a2 like this

// we can iterate also in map
for (let [key, value] of myMap) {
  console.log(`Keys ${key} , value ${value}`);
}

// can also use forEach loop in map
myMap.forEach((key, val) => {
  console.log(key, val);
});

// WeakSet
// We can only store object inside it and cannot iterate it neither by for loop nor by any forEach loop
// Its prototype has add, delete , has , constructor but on loop so cannot iterate it
let ws = new WeakSet();
// ws.add(1); // invalid : weakset value must be an object
var ob1 = { name: "lokesh" };
var ob2 = {};
ws.add(ob1);
ws.add(ob2);
console.log(ws); // now two object will be inside weakset
console.log(ws.has(ob1)); // true
ws.delete(ob1);
console.log(ws.has(ob1)); // false

// WeakMap
// Same as WeakSet
// It will also store only object
let wm = new WeakMap();
// its protoype has constructor , delete , has , get , set
console.log(wm);
let ob3 = { name: "loki" };
let ob4 = {};
wm.set(ob3, "Private");
wm.set(ob4, "Private Data");
console.log(wm);
console.log(wm.has(ob4)); // true
