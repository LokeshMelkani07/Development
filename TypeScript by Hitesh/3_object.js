"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Lokesh",
    email: "lokeshmelkani@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser() gives error because argument has object
// createUser({}) also gives error as object misses properties
createUser({ name: "mukesh", isPaid: false });
// Let say while calling CreateUser() we also want to pass email ID
// createUser({ name: "mukesh", isPaid: false, email: 'lokesh.com' }) gives error as we have already mentioned number of arguments and types of arguments above defination but
var newUser = { name: "mukesh", isPaid: false, email: "lokesh.com" };
// createCourse(newUser); works fine so to tackle this behaviour we will see later
// Function returning Object
// :{} means it will return a object
// { name: string; price: number } means it will return us a object with name of type string and price of type number
function createCourse() {
    return { name: "TS Course", price: 1000 };
}
// now instead of using object with property name,email, isActive we can directly use User
function creatingUser(user) {
    return { name: "", email: "", isActive: true };
}
creatingUser({ name: "", email: "", isActive: true });
function printCoordinate(pt) {
    console.log("The x coordinate is ", pt.x);
    console.log("The y coordinate is ", pt.y);
}
// printCoordinate({x:"lokesh",y:true}); gives error as x and y are of type number
printCoordinate({ x: 3, y: 7 });
