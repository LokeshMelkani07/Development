// Why Enums?
// When we want to restrict the choices for someone we use enums
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// But above way, we can update the values
// Let's use enum
// enum is executed as IIFE in enums.js
// to ignore and make code less, use
var seatChoice;
(function (seatChoice) {
  // default, AISLE = 0, MIDDLE = 1, WINDOW = 2
  // if we make, AISLE = 10, then MIDDLE = 11, WINDOW = 12 automatically
  seatChoice[(seatChoice["AISLE"] = 10)] = "AISLE";
  seatChoice[(seatChoice["MIDDLE"] = 11)] = "MIDDLE";
  seatChoice[(seatChoice["WINDOW"] = 12)] = "WINDOW";
  seatChoice["INDIA"] = "India";
})(seatChoice || (seatChoice = {}));
var seats = seatChoice.AISLE; // we only see 3 options now
