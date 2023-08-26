// Exploring Set Object ,Includes, Some, Reduce, Find, FindIndex
// Dummy data of Array of objects
const users = [
  {
    id: 1,
    name: "lokesh",
    isActive: true,
    age: 21,
  },
  {
    id: 2,
    name: "Mohit",
    isActive: true,
    age: 20,
  },
  {
    id: 3,
    name: "Rohit",
    isActive: false,
    age: 12,
  },
  {
    id: 4,
    name: "Rahul",
    isActive: true,
    age: 27,
  },
  {
    id: 5,
    name: "Sohit",
    isActive: true,
    age: 31,
  },
  {
    id: 6,
    name: "karan",
    isActive: true,
    age: 25,
  },
  {
    id: 7,
    name: "Rohan",
    isActive: true,
    age: 28,
  },
  {
    id: 8,
    name: "Anuj",
    isActive: false,
    age: 29,
  },
  {
    id: 9,
    name: "Aman",
    isActive: false,
    age: 22,
  },
  {
    id: 10,
    name: "Neha",
    isActive: true,
    age: 27,
  },
];

/*
Use case
1. Check if user with such name exists
2. Adding element to the array
3. Remove Duplicates elements in the array
4. Concatenating the Arrays
*/

// 1. Check if user exists

// Solution 0
const isNameExists = (name, users) => {
  let exist = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exist = true;
    }
  }
  return exist;
};

// console.log(isNameExists("lookesh", users));

// Solution 1

const isNameExistsSolutionOne = (name, users) => {
  users.find((e) => {
    const user = e.name === name;
    // Typecasting it to boolean
    return Boolean(user);
  });
};

// Solution 2
const isNameExistsSolutionTwo = (name, users) => {
  const index = users.findIndex((user) => user.name === name);
  return index;
};
// Returns index of value else -1 if not found

console.log(isNameExistsSolutionTwo("Rohit", users));

// Solution 3
// some() return true or false based on value matches or not
const isNameExistsSolutionThree = (name, users) => {
  const user = users.some((user) => user.name === name);
  return user;
};

console.log(isNameExistsSolutionThree("Rohit", users));

// Adding element to the array
// Commonly we use push() to add element in array
const arr = [1, 2];

const append = (arr, ele) => {
  arr.push(ele);
  return arr;
};

console.log(append(arr, 3)); // 1,2,3  so our original array will get modified
console.log(arr); // 1,2,3 so original array is updated

// Let say we do not need to modify original array and want new array and original array remains as it is
// This is the problem with push() so
const arr1 = [4, 5];

const append1 = (arr1, ele) => {
  // we will use spread operator so a new Array will be formed
  return [...arr1, ele];
};

console.log(append1(arr1, 3)); // 4,5,3  so our original array will not get modified and new array is made
console.log(arr1); // 4,5 so original array is not updated

// Remove Duplicate element in Array
// Set Object is a built-in Javascript Data structure that allows you to store unique values of any type
// The spread operator is used to expand the array into individual arguements
// The includes() method is used to check if it already exists in the uniqueElements array. If it does not then push it

// Solution 1
const arr2 = [1, 2, 4, 4, 3, 1, 6, 7, 4];

const uniqueElements = (arr2) => {
  const uniqueElementArray = [];
  arr2.forEach((element) => {
    if (!uniqueElementArray.includes(element)) {
      uniqueElementArray.push(element);
    }
  });
  return uniqueElementArray;
};

console.log(uniqueElements(arr2)); // [ 1, 2, 4, 3, 6, 7 ]

// Solution 2
// using SET Object
const arr3 = [1, 2, 4, 4, 3, 1, 6, 7, 4];

// new Set(arr2) gives us a object
// ...new Set(arr2) spreads the values inside object for us

const uniqueElementstwo = (arr2) => {
  return [...new Set(arr2)];
};

console.log(uniqueElementstwo(arr3)); //  [ 1, 2, 4, 3, 6, 7 ]
console.log(arr3); // [ 1, 2, 4, 4, 3, 1, 6, 7, 4 ] not modified

// Solution 3
// using reduce method
// reduce() takes a callback and a initial value
// callback takes 2 parameters, accumulator, element
// values goes inside accumulator initially [], element is element inside array
const arr4 = [1, 2, 4, 4, 3, 1, 6, 7, 4];

const uniqueElementsthree = (arr2) => {
  return arr2.reduce((acc, ele) => {
    return acc.includes(ele) ? acc : [...acc, ele];
  }, []);
};

console.log(uniqueElementsthree(arr4)); //  [ 1, 2, 4, 3, 6, 7 ]
console.log(arr4); // [ 1, 2, 4, 4, 3, 1, 6, 7, 4 ] not modified

// Conecating the array
const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

const mergeArray = (arr1, arr2) => {
  // Below code will push arr2 in arr1 and modify arr1
  // return arr1.push(...arr2);

  // Below code will make newArray with result and do not modify arr1,arr2
  //   return [...arr1, ...arr2];

  // Using concate(), same result as above
  return arr1.concat(...arr2);
};

console.log(mergeArray(arr5, arr6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr5); //  [ 1, 2, 3 ]
console.log(arr6); //  [ 4, 5, 6 ]
