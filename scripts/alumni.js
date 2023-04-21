function optionListing(currentYear){
  for(let i = currentYear; i >= 1954; --i){
    var opt = document.createElement('option');
    opt.textContent = i;
    opt.setAttribute("value", "alumni/alumni" + i + ".html");
    if(i < 1958 || i > 1961) {
      document.getElementById("optionContainer").appendChild(opt);
    }
  }
}

function openInNewTab(obj){
  console.log(obj.value)
  $( "#alumniContainer" ).load( obj.value );

  var phd = document.querySelector(".direct_container");
  phd.style.display = "none";
}
