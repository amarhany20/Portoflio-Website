/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "index.html") {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar-light").style.top = "0";
      $(".navbar-collapse").collapse("hide");
    } else {
      document.getElementById("navbar-light").style.top = "-70px";
      $(".navbar-collapse").collapse("hide");
    }
    prevScrollpos = currentScrollPos;
  };
}
else if(page == "home-dark.html") {
   window.onscroll = function () {
     var currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
       document.getElementById("navbar-dark").style.top = "0";
       $(".navbar-collapse").collapse("hide");
     } else {
       document.getElementById("navbar-dark").style.top = "-70px";
       $(".navbar-collapse").collapse("hide");
     }
     prevScrollpos = currentScrollPos;
   };
}

/* ----------------------- contact-section ----------------------- */

// Auto Collabse on scroll on sml screens
