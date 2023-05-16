function optionListing(currentYear){
  for(let i = currentYear; i >= 1954; --i){
    var opt = document.createElement('option');
    opt.textContent = i;
    opt.setAttribute("value", "http://berenyia.web.elte.hu/nimbus_prot/alumni/alumni" + i + ".html");
    if(i < 1958 || i > 1961) {
      document.getElementById("optionContainer").appendChild(opt);
    }
  }
}

function openInNewTab(obj){
  console.log(obj.value)
  $( "#alumniContainer" ).load( obj.value );

  var footNote = document.querySelector(".footnote_cont");
  footNote.style.display = "none";
}
