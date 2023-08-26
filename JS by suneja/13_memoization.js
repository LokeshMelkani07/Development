// Memoization in JS
// It is a optimization technique that can be used to reduce time consuming calculation by saving previous input to something called cache and returing result from it.
// Saving the result already will save the execution time and will help in optimization of code
let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.time(); // It is used to calculate time of execution
// console.log(calc(5));
console.timeEnd(); // Time used : 3ms

// Now Let us optimize it
// We will store the result of n=5 in cache so that when again result need to be calculated for n=5 the loop should not run again and our code get optimized

const memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    // console.log("n is : ", n);
    if (n in cache) {
      // console.log(cache);
      // console.log("cache");
      return cache[n];
    } else {
      // console.log("Calc first time");
      let res = fun(n);
      cache[n] = res;
      return res;
    }
  };
};

console.time();
let eff = memoize(calc);
console.log(eff(4));
console.timeEnd();

console.time();

console.log(eff(4));
console.timeEnd();
// This is also called caching in JS

console.log(eff(3));
console.log(eff(2));
console.log(eff(3));
console.log(eff(2));
