"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// It is an special type of array given by TS with some conditions
var user = [1, "lokesh"];
// below syntax also correct
var user1 = ["lokesh", 1];
// but sometimes we need to push specific things in array in a specific order
// tuples help us here
// It specifies the type of value at each index and number of values that can come inside that array
var user2;
user2 = ["lokesh", 123, true];
// user2 = ["lokesh",true,123]; gives error as order is specific
var rgb;
rgb = [255, 255, 255];
var newUser = [112, "lokesh.com"];
newUser[1] = "k.com"; // can be modified like this
