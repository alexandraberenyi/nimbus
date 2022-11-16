function respTopnav() {
    var x = document.getElementById("mobileTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = document.getElementById("main-head_id");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (x.className === "main-head") {
      x.className += " scroll";
    } 
  } else {
    x.className = "main-head";
  }
}
