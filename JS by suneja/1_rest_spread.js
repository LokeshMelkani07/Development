// Rest and spread operator

// Rest operator
// In below arguements, other is an array of [4,2,1] means the left over parameters
// other[0] gives the first element of array other

function addNumbers(a, b, c, ...other) {
  return a + b + c + other[0];
}

const res = addNumbers(2, 3, 5, 4, 2, 1);
console.log(res);

// Spread Operator
var names = ["lokesh", "anuj", "vivek"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}

getNames(...names);

// Rest with object
var student = {
  name: "Lokesh",
  age: "20",
  hobbies: ["cricket", "singing"],
};

// Array Destructuring
const { age, ...rest } = student;
console.log(age);
console.log(rest);
// console.log(hobbies);

// Copying the previous student object just modifying the age
var newStudent = {
  ...student,
  age: "21",
};

const { ...studs } = newStudent;
console.log(studs);
