var clicks = 0;

function easterEgg(var_id) {
  clicks++;
  console.log(clicks)
  var x = document.getElementById(var_id);
  if (clicks>=5) {
    if (x.className === "easter_egg") {
      x.className += " surp";
      clicks = 0;
    } else {
      x.className = "easter_egg";
    }
  }

} 

function easterEggRemove(var_id) {
  clicks++;
  if (clicks>=2) {
    document.getElementById(var_id).classList.remove("surp");
    clicks = 0;
  }
}