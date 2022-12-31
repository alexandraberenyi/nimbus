
drawGraphics();

/*Calculating a height of a div element*/
function getHeight(box){
    divElement = document.getElementById(box);
    boxHeight = divElement.offsetHeight;
    return boxHeight;
}


function drawGraphics(){
/*Gets divs id with a same class*/
  const parentDOM = document.getElementById("parent-id");
  const elements = parentDOM.getElementsByClassName('box')
  const elementLength = elements.length;
  
  /*Calculate the sum height of the divs*/
  var heightResult = 50; /*margin on the top*/
  for( var i = 0; i < elementLength; i++) {
    const element = parentDOM.getElementsByClassName('box')[i].id
    heightResult = heightResult + getHeight(element) + 50 /*50px margins included*/
  }
  
  /*Adjusting the heigth of the target element and the canvas*/
  document.getElementById("canvasGraphics").style.height = heightResult.toString() + 'px';
  document.getElementById("myCanvas").height = heightResult;
  
  /*Drawing the graphics on the canvas*/
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  
  
  context.beginPath();
  var yCoordinate = (getHeight(parentDOM.getElementsByClassName('box')[0].id))/2 +50
  drawCircle(context, canvasWidth/2, yCoordinate, 6, 'rgba(40, 96, 112, 1)', 'rgba(40, 96, 112, 1)')
  for( var i = 1; i < elementLength; i++) {
      context.moveTo(canvasWidth/2, yCoordinate);
      yCoordinate = yCoordinate + (getHeight(parentDOM.getElementsByClassName('box')[i-1].id))/2 + (getHeight(parentDOM.getElementsByClassName('box')[i].id))/2 + 50
      context.lineTo(canvasWidth/2, yCoordinate);
      
      context.strokeStyle = 'rgba(40, 96, 112, 1)';
      context.lineWidth = 4;
      context.stroke();
      
      drawCircle(context, canvasWidth/2, yCoordinate, 5, 'rgba(40, 96, 112, 1)', 'rgba(40, 96, 112, 1)')
  }

}   
  
/*Setting a different background color to each box*/
const parentDOM = document.getElementById("parent-id");
const elements = parentDOM.getElementsByClassName('box')
const elementLength = elements.length;
var a = 170;
var b = 120;
for( var i = 0; i < elementLength; i++) {
    const element = parentDOM.getElementsByClassName('box')[i].id
    console.log(element)
    document.getElementById(element).style.backgroundColor = 'rgba(90,'+ b + ',' + a + ', .4)'
    a = a - 10;
    b = b + 10;
}


function drawCircle(ctx, x, y, radius, fill, stroke) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
}