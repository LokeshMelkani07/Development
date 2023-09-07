const User = {
  name: "Lokesh",
  email: "lokeshmelkani@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// createUser() gives error because argument has object

// createUser({}) also gives error as object misses properties

createUser({ name: "mukesh", isPaid: false });

// Let say while calling CreateUser() we also want to pass email ID
// createUser({ name: "mukesh", isPaid: false, email: 'lokesh.com' }) gives error as we have already mentioned number of arguments and types of arguments above defination but
let newUser = { name: "mukesh", isPaid: false, email: "lokesh.com" };

// createCourse(newUser); works fine so to tackle this behaviour we will see later

// Function returning Object
// :{} means it will return a object
// { name: string; price: number } means it will return us a object with name of type string and price of type number
function createCourse(): { name: string; price: number } {
  return { name: "TS Course", price: 1000 };
}

// Aliasing in TS
// Its same as making a template of Custom Data type
// Let say we make a custom data type of type User and we pass it into many different functions
// Same as template in c++

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// now instead of using object with property name,email, isActive we can directly use User
function creatingUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

creatingUser({ name: "", email: "", isActive: true });

// Another example of type Aliasing
type Point = {
  x: number;
  y: number;
};

function printCoordinate(pt: Point) {
  console.log("The x coordinate is ", pt.x);
  console.log("The y coordinate is ", pt.y);
}

// printCoordinate({x:"lokesh",y:true}); gives error as x and y are of type number
printCoordinate({ x: 3, y: 7 });

export {};
