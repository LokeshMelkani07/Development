// How to write function in Typescript
function addTwo(num: number) {
  // num.toLowerCase() gives error as its a number
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: number) {}

// Arrow function
// Passing a default value to argument so that if we forget to pass value, it does not give error
var loginUser = (name: string, email: string, isPaid: boolean = true) => {};

// addTwo("2"); gives error as argument can only be number
addTwo(2);

// getUpper(4); gives error
getUpper("loki boii");

// signUpUser(1,2,4); is also right if its "any" so we need to give type so that code consistency is there and we cannot assign value of one type to another variable
signUpUser("Lokesh", "hello@gmail.com", 124);

loginUser("Rohit", "r@hmail.com", true);
// How to give default value to a arguement
loginUser("Rohit", "r@hmail.com");

// How to have a safety check for return value of function that our function do not return any ambiguous value
function addThree(num: number) {
  // return num+3;
  // return "hello"; does not give any error but it can break our app
}

// To avoid this we can do something like this
function addFour(num: number): number {
  return num + 4;
}

addThree(3);
addFour(4);

// Let say we have a function which checks a number and if condition satisfies, return true else gives us string "200 OK"
// In this case we want our function to return more than 1 type so how can we do it?
// we will use UNION which we see as we move forward
function getValue(myVal: number) {
  if (myVal == 2) {
    return true;
  }
  return "200 OK";
}

// return type for arrow function
const getHello = (s: string): string => {
  return "";
};

const heroes = ["loki", "dhoni", "rohit"];

/*
heroes.map((ele:string):string => {
  return `hero is ${ele}`;
});  is also right syntax but we do not need to mention type of value coming explicitly here because TS automatically checks the type of values inside arrays if.e string type and it detects that coming values will be string only or anything else based on elements of array
*/

heroes.map((ele): string => {
  return `hero is ${ele}`;
});

// returning void in function
function consoleErrorMessage(errmsg: string): void {
  console.log(errmsg);
  //   return 1; gives error now as return type is void
}

// Handle Error
// To Handle error, there is type "never" in TS, which means function will never return a value
// Its same as void but it is generally used to handle any error or forcefull  termination of execution of program
function handleEror(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
