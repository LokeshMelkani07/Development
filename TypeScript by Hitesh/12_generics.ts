// helps in making reusable components
const score: Array<number> = []; // makes an array having values of type number initialised with empty array

const names: Array<string> = []; // makes an array having values of type string initialised with empty array

// Below function gives return us number if val is of type number else return us boolean
function identity(val: boolean | number): boolean | number {
  return val;
}

// below function return us anything and val can be anything
function identityTwo(val: any): any {
  return val;
}

// what if, we want value to be of certain type which can be any type given by user and we return to return same type?
// we use generics
function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(3) gives Type = number
// identityThree("3") gives Type = string

// Same as above but short syntax
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "Bisleri",
  type: 10,
});

// Taking input as an Array using a generic
function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);
  return arg;
}

// Another way to do the same
function loggingIdentity1<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

function getSearch<T>(products: T[]): T {
  // do some DB operations
  const index = 3;
  return products[index];
}

// Converting above function to arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some operations
  const index = 4;
  return products[index];
};

console.log(getMoreSearchProducts([3, 4, 5, 6, 10])); // gives 10
console.log(
  getMoreSearchProducts(["lokesh", "mohit", "rohit", "sohit", "mukesh"])
); // gives mukesh

// Instead of using <T> for declaring generic we can also do <T,> to make sure that this is not a JSX tag like h1,h2 its a generic syntax

// Passing multiple arguments in the generic
function anotherFunction<T, U>(firstVal: T, secondVal: U): object {
  return {
    firstVal,
    secondVal,
  };
}

anotherFunction(3, "5"); // is ok

// But if we do something like this
function anotherFunction1<T, U extends number>(
  firstVal: T,
  secondVal: U
): object {
  return {
    firstVal,
    secondVal,
  };
}

// anotherFunction1(3,"4") gives error
anotherFunction1(3, 4.5); //does not gives error

// where does extends keyword useful?
// where we need our generic to be of certain interface like
interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction2<T, U extends Database>(
  firstVal: T,
  secondVal: U
): object {
  return {
    firstVal,
    secondVal,
  };
}

const obj = {
  connection: "124lok",
  username: "Lokesh",
  password: "loki1234",
};

anotherFunction2(3, obj); // now U will be of type Database only as it extends Database

// class Types in generics
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
