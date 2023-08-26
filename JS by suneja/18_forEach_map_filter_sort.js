// Exploring forEach, Map, Filter & Sort Functions

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
Use-Cases:
1. Write code to get the array of names from the given array of users
2. Get back only active users
3. Sort users by  age descending
*/

// Now we need to sort users by descending
// Sort function sorts the element in the array and returns the reference to the original array, first elements are converted to string
// We can also use a compare function in sort()as a compare function to make a custom sort function otherwise it will return sorted array based on UTF 16
users.sort((user1, user2) => {
  user1.age > user2.age ? 1 : -1;
});

console.log(users);

// Solution 1
// Simple loop
const names = [];
for (i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    names.push(users[i].name);
  }
}

console.log(names);

// Solution 2
// forEach loop
// forEach does not return anything, so changes are made in the original object
const data = [];
users.forEach((user) => {
  if (user.isActive) {
    data.push(user.name);
  }
});

console.log(data);

// Solution 3 (Optimised)
// Using map and filter
// Map returns a new array where forEach does not
// forEach similar to normal loop but it does not have return value
// Map similar to forEach loop but it does return new array

const newData = [];

users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .map((e) => {
    newData.push(e.name);
  });
console.log("new data is " + newData);
