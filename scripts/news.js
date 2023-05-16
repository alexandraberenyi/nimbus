
setTimeout(function(){
  newsLoad();
},100);

function newsLoad(){
  var x = document.getElementById("news1");
  var xHeight = x.offsetHeight;
  x.style.height = "150px";

  var y = document.getElementById("news2");
  var yHeight = y.offsetHeight;
  y.style.height = "150px";


  var newsOne = document.querySelector("#news1Click");
  var chevron1 = document.querySelector("#turnDown1");
  newsOne.addEventListener("click", () => {
    if (x.className === "news1") {
      x.className += " active";
      chevron1.classList.add("active");
      x.style.height = xHeight + "px";
    } else {
      x.className = "news1";
      x.style.height = "150px";
      chevron1.classList.remove("active");
    }
  });


  var newsTwo = document.querySelector("#news2Click");
  var chevron2 = document.querySelector("#turnDown2");
  newsTwo.addEventListener("click", () => {
    if (y.className === "news2") {
      y.className += " active";
      chevron2.classList.add("active");
      y.style.height =  yHeight + "px";
    } else {
      y.className = "news2";
      y.style.height = "150px";
      chevron2.classList.remove("active");
    }
  });
};