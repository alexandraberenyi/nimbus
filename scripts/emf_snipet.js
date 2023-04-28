
var asyncLoop = function(o){
  var i=22,
      length = o.length;
  
  var loop = function(){
      i++;
      if(i==length){o.callback(); return;}
      o.functionToLoop(loop, i);
  } 
  loop();//init
}

asyncLoop({
  length : 50,
  functionToLoop : function(loop, i){
      setTimeout(function(){
          emfSnippet(i);
          loop();
      },10);
  },
  callback : function(){
      console.log('All done!');
  }    
});

function emfSnippet(index) {
  $.get('./oktatas/metfuzet/EMF0' + index + '/EMF' + index + '.htm').done(function () {
      //lekérjük a parent elemet és a legfelső child elemet.
      const parentNode = document.querySelector('.content');
      let lastChild = document.querySelector(`#EMF${index-1}`) 

      //elkészítjük az aktuális számú div-et, és berakjuk a helyére
      const div = document.createElement('div');
      div.setAttribute('id', 'EMF' + index);
      div.classList.add('snipet');
      parentNode.insertBefore(div, lastChild);

      //elkészítjük a div child elemeit
      const em1 = document.createElement('em');
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      const em2 = document.createElement('em');
      const p4 = document.createElement('p');
      const a = document.createElement('a');

      //elhelyezzük őkent a parent elemben
      div.appendChild(em1);
      em1.setAttribute('id', 'noID');
      div.appendChild(p1);
      div.appendChild(p2);
      p2.setAttribute('id', 'editorID');
      div.appendChild(p3);
      div.appendChild(em2);
      em2.setAttribute('id', 'yearID');
      div.appendChild(p4);
      div.appendChild(a);
      a.setAttribute('id', 'titleID');

      //feltöltjük a nem változó elemeket
      p1.textContent = ", ";
      p3.textContent = ", ";
      p4.textContent = ", ";

      //lekérjük a megfelelő oldalról az adatokat az ID-l segítségével
      $( "#noID" ).load( "./oktatas/metfuzet/EMF0" +index+ "/EMF" +index+ ".htm #noID" );
      $( "#editorID" ).load( "./oktatas/metfuzet/EMF0" +index+ "/EMF" +index+ ".htm #editorID" );
      $( "#titleID" ).load( "./oktatas/metfuzet/EMF0" +index+ "/EMF" +index+ ".htm #titleID" );
      $( "#yearID" ).load("./oktatas/metfuzet/EMF0" +index+ "/EMF" +index+ ".htm #yearID" );
      document.getElementById("titleID").setAttribute("href", "./oktatas/metfuzet/EMF0" +index+ "/EMF" +index+ ".htm");

      //console.log(emfszam)

    }).fail(function () {
      console.log("failed.");
    });
}