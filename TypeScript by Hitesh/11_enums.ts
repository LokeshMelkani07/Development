// Why Enums?
// When we want to restrict the choices for someone we use enums
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// But above way, we can update the values
// Let's use enum
// enum is executed as IIFE in enums.js
// const enum seatChoice{}
enum seatChoice {
  // default, AISLE = 0, MIDDLE = 1, WINDOW = 2
  // if we make, AISLE = 10, then MIDDLE = 11, WINDOW = 12 automatically
  AISLE = 10,
  MIDDLE = 11,
  WINDOW = 12,
  INDIA = "India",
}

const seats = seatChoice.AISLE; // we only see 3 options now

export {};
