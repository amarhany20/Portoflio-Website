
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    $(".navbar-collapse").collapse("hide");
  } else {
    document.getElementById("navbar").style.top = "-70px";
    $(".navbar-collapse").collapse("hide");
    
  }
  prevScrollpos = currentScrollPos;
};

/* ----------------------- contact-section ----------------------- */

// Auto Collabse on scroll on sml screens