/* responsive navigation bar*/
function respTopnav() {
    var x = document.getElementById("mobileTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
      document.getElementById("dropd_oncl_stud").classList.remove("show");
      document.getElementById("dropd_oncl_dep").classList.remove("show");
    }
}


/* small screen dropdown on click*/
function dropMenuStud() {
  document.getElementById("dropd_oncl_stud").classList.toggle("show");
}

function dropMenuDep() {
  document.getElementById("dropd_oncl_dep").classList.toggle("show");
}


/* shrinks the headbar on scroll on bigger screens*/
window.onscroll = function() {scrollFunction(), scrollFunction2(), scrollFunction3(), scrollFunction4()};

function scrollFunction3(){
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("mobileTopnav").classList.remove("responsive");
  }
}


function scrollFunction() {
  var x = document.getElementById("main-head_id");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    if (x.className === "main-head") {
      x.className += " scroll";
    } 
  } else {
    x.className = "main-head";
  }
}

/* margin adjustment when shrink*/
function scrollFunction4() {
  var x = document.getElementById("currloc_id");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    if (x.className === "currloc") {
      x.className += " scroll";
    } 
  } else {
    x.className = "currloc";
  }
}

/* changig the opacity of the logo in small screens on scroll */
function scrollFunction2() {
  var z = document.getElementById("mobile_logo_id");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    if (z.className === "mobile_logo") {
      z.className += " scroll";
    } 
  } else {
    z.className = "mobile_logo";
  }
}

/* moving the menubar at the right size in screens bigger than 1107px 
function scrollFunction3() {
  var z = document.getElementById("mobileTopnav");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    if (z.className === "topnav") {
      z.className += " scroll";
    } 
  } else {
    z.className = "topnav";
  }
}
*/