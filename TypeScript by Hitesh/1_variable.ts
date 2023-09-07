// let varibale-name: variable-type = default-value
// In TS, all variable-types are lowercase
let greetings: string = "Hello Lokesh";

// greetings = 6, cannot do this as its a string
let myNum = 6;

greetings.toLowerCase();
// myNum.toUppercase() cannot do as its a type NUMBER
console.log(greetings);

// number
let userId: number = 33564.5;
// let userId = 33564.5; is also correct syntax becuase typescipt is smart enough to guess from 33564.5 that this will have a type "number" so we do not need to use :number or :type everywhere.
console.log(userId.toString());
// userId = "lokesh" gives errors as we can't assign string to number

// boolean
let isLoggedIn: boolean = false;
// isLoggedIn.valueOf is method for boolean type

// any
// Another type of typescript
// if we do not know what type will come in our variable, TS assumes it to be "any" which is not a good practice
// "any" is not type checked by TS

// let hero;

// if we mention its type as "string" it will make sure that this value will be of only string type
let hero: string;

// say hero is assigned using this function below
function getHero() {
  //   return true; error it only return string
  return "loki";
}

// now we cannot return any other type from getHero(), other than string
hero = getHero();

export {};
