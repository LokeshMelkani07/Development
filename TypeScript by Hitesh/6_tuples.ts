// It is an special type of array given by TS with some conditions
const user: (string | number)[] = [1, "lokesh"];
// below syntax also correct
const user1: (string | number)[] = ["lokesh", 1];
// but sometimes we need to push specific things in array in a specific order
// tuples help us here
// It specifies the type of value at each index and number of values that can come inside that array
let user2: [string, number, boolean];

user2 = ["lokesh", 123, true];
// user2 = ["lokesh",true,123]; gives error as order is specific

let rgb: [number, number, number];

rgb = [255, 255, 255];
// rgb = [255,256,234,0] gives error as number of argument are 3 only

type User = [number, string];

const newUser: User = [112, "lokesh.com"];

newUser[1] = "k.com"; // can be modified like this
// newUser.push(true); gives error

export {};
