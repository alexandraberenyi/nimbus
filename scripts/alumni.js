function optionListing(currentYear){
  for(let i = currentYear+1; i >= 1954; --i){
    if(i == currentYear+1) {
      var opt = document.createElement('option');
      opt.textContent = "Évfolyam...";
      opt.setAttribute("value", "index.html");
    } else {
    var opt = document.createElement('option');
    opt.textContent = i;
    opt.setAttribute("value", "./alumni" + i + ".html");
    }
    if(i < 1958 || i > 1961) {
      document.getElementById("optionContainer").appendChild(opt);
    }
  }
}
