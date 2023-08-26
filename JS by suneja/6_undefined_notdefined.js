// What is Difference Between not defined and undefined ?

console.log(a); // undefined
// before execution variable a is in the memory so is assigned a placeholder called 'undefined'
var a = "lokesh";
// After execution the variable is assigned its actual value 'lokesh'
console.log(a); // lokesh
a = 4;
// now it will change the value from lokesh to 4 after the execution of line number 8 but it will not become undefined again
console.log(a); // 4
// b is not in the memeory so it shows it is not defined
console.log(b); // it is not defined

// let say we are getting a object and if object is undefined or null we will print obj.name else we will print nothing
// obj !== undefined || obj !== null ? obj.name : "";
