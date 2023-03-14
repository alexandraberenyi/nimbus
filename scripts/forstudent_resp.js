var x = document.getElementById("foldtud_id")
var xHeight = x.offsetHeight
x.style.height = "50px"

function dropDownEarthsci() {
    
    if (x.className === "box foldtud") {
        x.className += " active";
        x.style.height = xHeight + "px"
      } else {
        x.className = "box foldtud";
        x.style.height = "50px"
      }
}

var y = document.getElementById("fizika_id")
var yHeight = y.offsetHeight
y.style.height = "50px"

function dropDownPhys() {
    if (y.className === "box fizika") {
        y.className += " active";
        y.style.height = yHeight + "px"
      } else {
        y.className = "box fizika";
        y.style.height = "50px"
      }
}

var z = document.getElementById("kornytud_id")
var zHeight = z.offsetHeight
z.style.height = "50px"

function dropDownEnvsci() {
    var z = document.getElementById("kornytud_id")
    if (z.className === "box kornytud") {
        z.className += " active";
        z.style.height = zHeight + "px"
      } else {
        z.className = "box kornytud";
        z.style.height = "50px"
      }
}