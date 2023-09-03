// We do not want our Jquery code to run before our html renders so we use something like document.ready() to say that if document is ready then load our jquery
// instead of $(document),ready()
// we can also write it like $(function(){})
$(document).ready(function () {
  // Our Jquery code here
  console.log("Jquery");
  // It is a write less do more kind of library
  // Simplifies JS Code
  // Help in DOM manipulation
  // We have pluggins which are useful
  console.log("We are using Jquery");
  // $('selector').action(); is our Jquery Syntax
  $("p").click(function () {
    console.log("You clicked on p ", this);
    //   $("p").hide(); // hide this <p> on click
    // Let say we have multiple p in index.html then
    $(this).hide(); // Jis bhi p par click ho usko hide krdo

    // We can also select id or class using
    //   $('#id').action()
    //   $('.class').action()

    // 3 most important selectors in Jquery
    // 1. Element Selector
    // Above <p> is an example of Element Selector

    // 2. Id Selector
    $("#idSelector").click(function () {
      $(this).hide();
    });

    // 3. Class Selector
    $("h2").click(function () {
      $(this).animate({
        left: "250px",
        opacity: "0.5",
        height: "150px",
        width: "150px",
      });
    });

    // Other Selectors
  }); // When you click on p, do this
});
