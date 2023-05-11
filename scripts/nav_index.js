/* Reszponzív navigációs menü*/
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


/* Az almenü megnyitása kattintásra*/
var eventHallgatoknak = document.querySelector(".hallgatoknak");
eventHallgatoknak.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("dropd_oncl_stud").classList.toggle("show");
  document.getElementById("mobileTopnav").classList.toggle("dp_resp1");
  var openDropdown = document.getElementById("dropd_oncl_dep");
  console.log(openDropdown)
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    document.getElementById("mobileTopnav").classList.remove("dp_resp2");
  }
});

var eventHallgatoknak = document.querySelector(".deptinfo");
eventHallgatoknak.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("dropd_oncl_dep").classList.toggle("show");
  document.getElementById("mobileTopnav").classList.toggle("dp_resp2");
  var openDropdown = document.getElementById("dropd_oncl_stud");
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
    document.getElementById("mobileTopnav").classList.remove("dp_resp1");
  }
})


/*window.onclick = function(event) {
  console.log("valami tortent");
  if (!event.target.matches('.hallgatoknak')) {
    var dropdowns = document.getElementsByClassName("dc_hall");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("mobileTopnav").classList.remove("dp_resp1");
      }
    }
  }
  if (!event.target.matches('.deptinfo')) {
    var dropdowns = document.getElementsByClassName("dc_dept");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("mobileTopnav").classList.remove("dp_resp2");
      }
    }
  }
}



window.addEventListener("click", (event) => {
  if(!event.target.matches(nodes)){
    console.log("valami")
  }
});
*/

//ESEMÉNYEK GÖRGETÉSNÉL
window.onscroll = function() {
  scrollFunction();
  scrollFunction2(); 
  //scrollFunction3(); 
  scrollFunction4();
};


function scrollFunction3(){
  if (document.documentElement.scrollTop > 80) {
    document.getElementById("mobileTopnav").classList.remove("responsive");
    document.getElementById("dropd_oncl_stud").classList.remove("show");
    document.getElementById("dropd_oncl_dep").classList.remove("show");
    document.getElementById("mobileTopnav").classList.remove("dp_resp1");
    document.getElementById("mobileTopnav").classList.remove("dp_resp2");
  }
}

/* A fejléc összenyomása nagyobb képernyőn*/
function scrollFunction() {
  var x = document.getElementById("main-head_id");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if (x.className === "main-head") {
      x.className += " scroll";
    } 
  } else {
    x.className = "main-head";
  }
}

/* Margó igazítása az összenyomott fejléchez*/
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

/* A logó változtatása az  összenyomott fejléchez */
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

var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop;
   //console.log(st)
   var x = document.getElementById("header_id");
   if (st > lastScrollTop && st > 120){
    if (x.className === "header_class") {
       x.className += " scroll";
    }
   } else if(st < lastScrollTop){
    document.getElementById("header_id").classList.remove("scroll");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

//ESEMÉNYEK ABLAKÁTMÉRETEZÉSNÉL
window.onresize = function() {
  document.getElementById("mobileTopnav").classList.remove("responsive");
  document.getElementById("dropd_oncl_stud").classList.remove("show");
  document.getElementById("dropd_oncl_dep").classList.remove("show");
};