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
    // To select all elements together
    $("*").click(() => {
      console.log("* method used");
    });

    // To select p with id Lokesh
    $("p.idSelector").click(() => {
      console.log("p.idSelector");
    });

    // To select First p tag
    $("p:first").click(() => {
      console.log("p.first");
    });
  }); // When you click on p, do this

  // Event?
  /*
  All things user do with your website like click,hover etc etc is called event
  Mouse Event : click, dblclick, onclick, mouseEnter, mouseLeave
  Keyboard Event: keyPress, keyUp, keyDown
  Form Event: submit, change, focus, blur
  Document/window Event: load, resize, scroll, unload
  */

  $("p").dblclick(function () {
    console.log("You Double clicked on ", this);
  });

  $("#imageID").mouseenter(function () {
    // Similarly there are mouseLeave and mouseDown, mouseup event
    console.log("Mouse Entered in the image");
  });

  $("#imageViratID").hover(function () {
    document.getElementById(this.id).style.transform = "scale(1.1)";
  });

  $("#imageViratID").mouseleave(function () {
    document.getElementById(this.id).style.transform = "scale(1.0)";
  });

  // on Method
  // We can next more than one event on using "on"
  // But we need to use : (colon)
  $("#clickMeButton").on({
    click: function () {
      document.getElementById("thanksClick").innerHTML =
        "Thanks for Clicking Me";
    },
    mouseleave: function () {
      document.getElementById("thanksClick").innerHTML = "";
    },
  });

  // hide and show event
  // $("#hideShowDiv").mouseover().show();
  // we can pass arguments to it, if we pass 1000 then it will takes 1 sec to hide slowly slowly
  // we can also pass a callback function to arguments

  $("#hideShowDiv").click(function () {
    $("#hideShowDiv").hide(1000, () => {
      console.log("Hidden Successfully");
    });
  });

  // Click button to see a animation of an image
  $("#clickAnimationButton").click(function () {
    $("#hideShowAnimation").hide(1000, () => {
      console.log("Animation Started");
    });

    $("#hideShowAnimation").show(1000, () => {
      console.log("Animation Ended");
    });
  });

  // we also have fadeIn(),fadeOut(), fadeToggle(), fadeTo() which takes timer and callback function as arguments

  // Sliding Effect in Jquery
  // slideUp(), slideDown(), slideToggle()
  // Takes speed and callback as arguments
  // Arguments are optional
  $(".slideUpDownEffect").slideUp(1000, function () {
    console.log("Slide up");
  });
  $(".slideUpDownEffect").slideDown(1000, function () {
    console.log("Slide Down");
  });
  // slide Toggle means if khula h toh band hoja, band h toh khulja
  $(".slideUpDownEffect").slideToggle(2000, function () {
    console.log("Slide Toggle");
  });

  // Animate Method in Jquery
  // Opacity of image will go 0.8 in 2 sec
  // we can pass multiple properties
  // Instead of 2000, we can also pass "slow" or "fast"
  $("#animateMethod").animate(
    { opacity: 0.8, height: "400px", width: "400px" },
    2000
  );

  // Queue Functionality
  // if we apply multiple actions one after another, they will get queued up and will be implented in a queue
  $("#animateMethod").animate({ opacity: 0.8 }, 2000);
  $("#animateMethod").animate({ height: "100px" }, 2000);
  $("#animateMethod").animate({ width: "200px" }, "fast");
  $("#animateMethod").animate({ opacity: 1 }, "12000");

  // we can also use .stop() to stop the animation at that point
  $("#animateMethod").stop();

  // To change attribute of an element using Jquery
  $("#animateMethod").attr("src", "sample.avif");

  // DOM manipulation using jquery
  // we can use .text('Set text to this); to set text or just do .text() to get text of a element
  // we can use .html(); to get the HTML and pass argument to change it

  // Changing input and text Area value
  // For form fields we use .val()
  $("#textA").val("set it to Lokesh");
  $("#inp").val("set it to Lokesh input");

  // Remove an Elements
  $("#animateMethod").remove();

  // Empty an Element like div means make value inside it empty
  $("#hideShowDiv").empty();

  // we can also add class inside an element
  $("#hideShowDiv").addClass("myclass1");
  // if we add one more class, one more gets added
  $("#hideShowDiv").addClass("myclass2");
  // we can remove class also
  $("#hideShowDiv").removeClass("myclass2");
  $("#hideShowDiv").removeClass("myclass1");

  // We can also set CSS of an element using jQuery
  // make bg color of input with id inp as red
  $("#inp").css("background-color", "red");
  // below line give us bg color of inp
  $("#inp").css("background-color");

  // AJAX
  // we make a call to this pokemon API and show output response in the screen in a h1 tag
  $.get("https://pokeapi.co/api/v2/pokemon/ditto", function (data, status) {
    console.log("data: ", data.abilities);
    console.log("status :", status);
    $("#ajaxGet").text(
      data.abilities.map((ele) => {
        return ele.ability.name;
      })
    );
  });
  // other methods are also there like

  $.post(
    "url",
    {
      name: "Lokesh",
      level: 21,
    },
    function (data, status) {
      console.log(data, status);
    }
  );
});
