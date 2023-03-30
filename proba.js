var tableRows = document.querySelectorAll("tr")
console.log(tableRows);
//var input = prompt("valassz egy szamot");
var input = 2021;
var inputText = "t" + input;
//console.log(inputText)




for(let i = 0; i < tableRows.length; i++){
  //console.log(tableRows[i].id);
  if(inputText == tableRows[i].id){
    //console.log(tableRows[i].id);
    tableRows[i].className += "active";
    document.getElementById("t2022").className += "active";
  }
}
