/*Gets divs id with a same class*/
const parentDOM = document.getElementById("content_id");
const elements = parentDOM.getElementsByClassName('box');
const elementLength = elements.length;


filterSelection("all")



function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tag_container");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  switchDisplay();
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



var btnContainer = document.getElementById("tagFilter");
var btns = btnContainer.getElementsByClassName("btn");
for (var z = 0; z < btns.length; z++) {
  btns[z].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn active");
    /*current[0].classList.remove('active')*/
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function switchDisplay() {

    x = document.getElementsByClassName("tag_container");
    xLength = x.length;
    for( var i = 0; i < xLength; i++) {
        const element = elements[i].id
        const parentElement = document.getElementById(element)
        const elementID = x[i].id;
        const tagClass = document.getElementById(elementID);
        if(!tagClass.classList.contains('show')) {
            parentElement.style.display = 'none'
        } else {
            parentElement.style.removeProperty('display')
        }
    }
}


/*function reqTag(usedTag){
    for( var i = 0; i < elementLength; i++) {
        const element = elements[i].id
        const parentElement = document.getElementById(element)
        console.log(parentElement)
        const tagClassID = parentElement.getElementsByClassName('tag_container')[0].id
        const tagClass = document.getElementById(tagClassID)
        console.log(tagClass)
            
        if(!tagClass.classList.contains(usedTag)) {
            if(parentElement.className === 'box') {
                parentElement.className += ' deactive';
                console.log(usedTag)
            } else {
                parentElement.className = 'box';
            }
        } else {
            if(parentElement.className === 'box') {
                parentElement.className += ' active';
                console.log(usedTag)
            } else {
                parentElement.className = 'box';
            }
        }  
    }
} 
*/






