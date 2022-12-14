var clicks = 0;

function easterEgg(var_id) {
  clicks++;
  var x = document.getElementById(var_id);
  if (clicks>=5) {
    if (x.className === "easter") {
      x.className += " surp";
    } else {
      x.className = "easter";
    }
  }
} 
