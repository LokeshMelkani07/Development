console.log("Map, filter, reduce in JS");

// these are just array methods
// What is map()?
// used to create a new array based on existing element of the array
const arr = [1, 2, 3, 4];

const multiplyThree = arr.map((currElement, index, arr) => {
  console.log(index); // array indexes 0,1,2,3
  console.log(arr); // [1,2,3,4]
  return currElement * 3;
});

console.log(multiplyThree); // [ 3, 6, 9, 12 ]

// what is filter()?
// check element based on condition and returns an array for elements passing that condition
// gives true or false based on condition and gives new array

const morethanTwenty = multiplyThree.filter((ele, index, multiplyThree) => {
  return ele > 2 && ele < 10;
});

console.log(morethanTwenty); // [ 3, 6, 9 ]

// reduce()
// reduces the element of array into one value
// does not return a new array
// takes a callback function and initial value
// takes accumulator, current value, index, array in the parameter
// if we fail to give initial value to the reduce(), accumulator takes the first element of array as the initial value and current value becomes second element of the array
const sum = arr.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

// Polyfills
// for map()

// Array.map((num, i, arr) => {});

// map returns a completely new array so we take
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// let us apply myMap instead of map now
const result = arr.myMap((ele, ind, arr) => {
  return ele * 10;
});

console.log(result); // [ 10, 20, 30, 40 ]

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
  // filter just returns values based on a condition
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// checking our polyfill filter()
const arr1 = [10, 2, 35, 67, 32];
const res = arr1.myFilter((ele, ind, arr1) => {
  return ele > 20;
});

console.log(res); // [ 35, 67, 32 ]

// Polyfill for reduce()
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const arr3 = [5, 6, 1, 2];
const multiply = arr3.myReduce((acc, curr, i, arr3) => {
  return (acc = curr * acc);
}, 1);

console.log(multiply); // 60

// map vs forEach
const arr4 = [1, 2, 3, 4, 56, 23];

// map will return us a new array without modifying the original array
const resultant = arr4.map((ele) => {
  return ele + 2;
});

console.log(arr4); // [ 1, 2, 3, 4, 56, 23 ]
console.log(resultant); // [ 3, 4, 5, 6, 58, 25 ]

// foreach will not return us anything
const resultForEach = arr4.forEach((ar) => {
  return ar + 30;
});

console.log(arr4);
[1, 2, 3, 4, 56, 23];
console.log(resultForEach); // undefined

// if we want to modify whole array using foreach we do something like this
arr4.forEach((ele, ind) => {
  arr4[ind] = ele + 30;
});

console.log(arr4); // [ 31, 32, 33, 34, 86, 53 ]

// we can chain stuff on map()
// we cannot chain anything in foreach as it does not return anything

// output based questions
let students = [
  { name: "lokesh", rollNumber: 50, marks: 100 },
  { name: "Paras", rollNumber: 20, marks: 10 },
  { name: "abhijeet", rollNumber: 10, marks: 80 },
  { name: "Lakshay", rollNumber: 70, marks: 11 },
  { name: "Kritik", rollNumber: 34, marks: 30 },
  { name: "Kinshuk", rollNumber: 80, marks: 99 },
];

// Return only name of students in capital
const names = students.map((ele) => ele.name.toUpperCase());

console.log(names); // [ "LOKESH", "PARAS", "ABHIJEET", "LAKSHAY", "KRITIK", "KINSHUK" ]

// Return only details of rstudents above 60 marks
const marks = students.filter((ele) => {
  return ele.marks > 60 && ele.rollNumber > 50;
});

console.log(marks); // returns all objects with condition

// Return sum of marks of all students
const ans = students.reduce((acc, curr) => {
  return (acc = acc + curr.marks);
}, 0);

console.log(ans); // 410

// chaining of map,filter,reduce
// return only names of students who have scored more than 60
const details = students
  .filter((ele) => {
    return ele.marks > 60;
  })
  .map((curr) => {
    return curr.name;
  });

console.log(details); // [ "lokesh", "abhijeet", "Lakshay", "Kinshuk" ]

// Return total marks for students with marks > 60 after 20 marks have been added to those who scored less than 60

const finalDetails = students
  .map((ele) => {
    if (ele.marks < 60) {
      ele.marks += 20;
    }
    return ele;
  })
  .filter((stu) => {
    return stu.marks > 60;
  })
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(finalDetails); // 279

// Polyfill of Once
// It is used to run any function only once, if multiple calls are made for same function, it will run only once if we wrap it inside once
function once(func, context) {
  let ran;

  return function () {
    if (func) {
      // passing any object or arguements to function as parameter
      ran = func.apply(context || this, arguments);
      // make it null so that it do not run again
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => {
  console.log("hello ", a, b);
});

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
// gives output only one time
