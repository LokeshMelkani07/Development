// Throttling in JS
// It is same as debouncing and it is also called using setTimeout
// What we do is we make a button and click on it and make it disabled till the time backend function does not run properly

const mythrottle = (fun, delay) => {
  return function (...args) {
    document.getElementById("myId").disabled = true;
    setTimeout(() => {
      fun();
    }, delay);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myId").disabled = false;
  console.log("User clicked");
}, 2000);
