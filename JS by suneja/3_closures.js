// Closures in JS
// Lexical Scope
// In normal programming once the parameters are used they cannot be used after but due to closures we can re-use them

// Anonymous Function : A function which does not have any name

var sum = function (a) {
  console.log("Live Viewers", a);
  var c = 4;
  // Here a,b,c are accessible this scope is known as lexical scope
  return function (b) {
    return a + b + c;
  };
};

var store = sum(2);
console.log(store(5));

var sum1 = function (a1, b1, c1) {
  return {
    getSumTwo: function () {
      return a1 + b1;
    },
    getSumThree: function () {
      return a1 + b1 + c1;
    },
  };
};

var store1 = sum1(3, 4, 5);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());

var store2 = sum1(21, 14, 15);
console.log(store2.getSumTwo());
console.log(store2.getSumThree());
