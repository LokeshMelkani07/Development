// Map , Filter and Reduce

// High Order Functions
// forEach , filter , sort , map , reduce

const companies = [
  { name: "Goggle", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1971, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Normal Loop
for (let i = 0; i <= companies.length; i++) {
  console.log(companies[i]);
}

// forEach
// forEach recieves a synchronous callback
companies.forEach(function (comp, index) {
  console.log(comp.name, index);
});

companies.forEach((company, index) => {
  console.log(company.category);
});

// Filter
// Let say we need to filter from age and need only those age which are greater than 20

// Method 1
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 20) {
    console.log(ages[i]);
  }
}

console.log("Using filter function");

// Same problem using filter function
// filter function recieves a callback
const age = ages.filter(function (age) {
  if (age >= 20) {
    return true;
  }
});
console.log(age);
// we can also use arrow function as a callback and make it one line code
const newAge = ages.filter((age) => age >= 20);
console.log(newAge);

const compCategory = companies.filter(function (comp) {
  if (comp.category === "Service Based") {
    return true;
  }
});
console.log(compCategory);
// we can also use arrow function as callback and make it one liner code

// Map Function
console.log("Map Function");
// Using string literal in map function
const dummy = companies.map((comp, index) => {
  return `${comp.name} ${comp.category}`;
});
console.log(dummy);

// Sort Function
// Takes a callback
console.log("Sort Function");
const sorted = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
}); // in ascending order just change c1.start < c2.start to sort in descending order
console.log(sorted);

const sort1 = companies.sort((c1, c2) => (c1.start < c2.start ? 1 : -1));
console.log(sort1);

// sort ages in descending order
const age1 = ages.sort((a, b) => b - a);
console.log(age1);

// Reduce Function
console.log("Reduce Funcrion");
// Let say we need to add all the ages from the ages array
// Method 1
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
console.log(sum);

// Method 2 =>  Using Reduce function
const sumAge = ages.reduce(function (total, age) {
  return total + age;
}, 0); // 0 means total = 0
console.log(sumAge);
// we can also use arrow function to make it shorter and one liner

const sumAge1 = ages.reduce((total, age) => total + age, 0);
console.log(sumAge1);
