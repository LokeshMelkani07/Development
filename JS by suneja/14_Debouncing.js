// Debouncing in JS
// Debouncing is achieved using setTimeout web API not given by JS
// To prevent calling of unwanted functions while resizing window , scrolling or search bar or wherever unwanted function calling happens
// Like if we search 'LAPTOP' in search bar of flipkart it should not everytime with typing each character do function call and return us the result
// Once we write the whole "LAPTOP" atfter some ms it should show laptop as a result . This is called as Debouncing
let counter = 0;
function getData() {
  counter++;
  console.log("fetching data " + counter);
}
// getData is getting called with each character input so we need to put a time delay

// If timer has some value then clear it and again start timer
function myDebounce(call, delay) {
  let timer;
  return function (...args) {
    // if user started typing before the delay time ends means timer already has some value so in that case. we check if(timer) then clear it and set it according to delay
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  };
}

const betterFunction = myDebounce(getData, 1000);
