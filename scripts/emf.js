/*$.get("index.html").done(function () {
  
  
}).fail(function () {
   alert("failed.");
});

const text = 'Lorem ipsum dolor sit amet, consectetur ';

const matches = [];

for (const div of document.querySelectorAll('p')) {
  if (div.textContent.includes(text)) {
    matches.push(div);
  }
}

console.log(matches); // 👉️ [div.box]*/

for(var j = 23; j <=50 ; j++){

  $.get('/oktatas/metfuzet/EMF0' + j + '/EMF' + j + '.htm').done(function () {
    emfszam = j;

    $( "#noID" ).load( "oktatas/metfuzet/EMF0" +j+ "/EMF" +j+ ".htm #noID" );
    $( "#editorID" ).load( "oktatas/metfuzet/EMF0" +j+ "/EMF" +j+ ".htm #editorID" );
    $( "#titleID" ).load( "oktatas/metfuzet/EMF0" +j+ "/EMF" +j+ ".htm #titleID" );
    $( "#yearID" ).load("oktatas/metfuzet/EMF0" +j+ "/EMF" +j+ ".htm #yearID" );
    document.getElementById("titleID").setAttribute("href", "index.html");


    //console.log(emfszam)
  }).fail(function () {
    //console.log("failed.");
  });
}



