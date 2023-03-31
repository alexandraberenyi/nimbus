
var fileName = location.href.split("/").slice(-1);
//console.log(fileName) 
var nameString = String(fileName)
var year = document.querySelector("#year").textContent
var yearBefore = String(Number(year) - 1);

var yNowPlace = document.querySelectorAll("#yearNow")
var yBefPlace = document.querySelectorAll("#yearBef")

yNowPlace.forEach((place) => {
  place.textContent = year;
});

yBefPlace.forEach((place) => {
  place.textContent = yearBefore;
});