var but = document.querySelector("#switchButton");


function switchLanguage(){
  if(but.classList.contains("eng")){
    but.classList.add("hun");
    but.classList.remove("eng");
    but.textContent  = "HU";
  } else if(but.classList.contains("hun")){
    but.classList.remove("hun");
    but.classList.add("eng");
    but.textContent  = "EN";
  }
}