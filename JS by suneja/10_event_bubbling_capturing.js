// Event Bubbling , Capturing and Propagation and Prevent Default

// Event bubbling means child to parent
// If we click the button the event will propagate from div to body to parent

var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");

/*
div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", () => {
  console.log("button");
});
*/

// In the above example first button will be printed on click and then div will be printed this is event bubbling

// Event Capturing is same as Bubbling but this is from parent to child that is HTML , body , div , child
// To do event capturing just give true to eventListener and now output will be div then button as now we move from parent to child
// Event Capturing is used very rarely mostly bubbling is used

/*
div.addEventListener(
  "click",
  () => {
    console.log("div");
  },
  true
);

button.addEventListener(
  "click",
  () => {
    console.log("button");
  },
  true
);
*/

// Stop Propagation
// Let say we want to stop the proapagtion from child to parent or parent to child
// Means button ka kaam chala do but we do not need to go to parent
// just write event.stopPropagation() in the eventListener

// Now the output become button , not div because we have stopped the propagation

/*
div.addEventListener("click", () => {
  console.log("div");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button");
});
*/

// Immediate Propagation
// Let say we put two event listeners to same button and click it
// Output will have both button , button1 on clicking and then it will get stopped
// When we want 2 or more event listener in a button and need to stop after the second event has been listened then we use stopimmediatePropagation()
// We can also put stopPropagation() in the last event listener

/*
button.addEventListener("click", () => {
  console.log("button");
});

button.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("button1");
});
*/

// Prevent Default
// We know by default behaviour of <a> is to refer to a link or button is to submit
// There are many tags like that so to stop this default behaviour of any tag we just need to use preventDefault()
// Now page will not refresh on clicking anchor tag and not go to any other link
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("anchor tag working");
});
