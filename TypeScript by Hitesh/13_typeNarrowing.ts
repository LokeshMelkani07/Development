// typeof [] = object
// typeof is also called as Type guard in TS
function detectType(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// Now what if we pass, number[] in above function
// In below code, we are tackling  null case
function provideID(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    // means its not null
    if (typeof strs === "object") {
      // means its string array
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      // means its a simple string
      console.log(strs);
    }
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

// The "in" operator narrowing
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// check whether account is User or Admin?
// if account has isAdmin, then its a Admin but how to check it?
// we use "in" operator
function isAdminAccount(account: User | Admin) {
  // "in" operator helps us in checking whether certain thing is present or not
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

// instanceof narrowing
// To check whether or not a value is an "instance" of another value.
// we make any instance using a "new" keyword
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Type Predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// This function checks if pet is a fish then return true
// else return false
function isFish(pet: Fish | Bird): pet is Fish {
  // pet is Fish means if its true then it returns that pet is Fish
  // we take pet as fish and check if it has swim function means its a fish and it not equal to undefined so return true
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

// Discriminated unions
// we can use kind for each interface to be able to discriminate between them easily
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}

// Exhaustiveness checking
// never keyword
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;

    // if we see our value can be something else also, we use "never" and a default case

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}

export {};
