//Főmenü elágazások
mainDraw();
function mainDraw(){
  var canvas = document.querySelector(`#canvasMain`);
  var context = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  context.beginPath();
  context.moveTo(canvasWidth/2, 0);
  context.lineTo(canvasWidth/2, canvasHeight/2);
  context.moveTo(125, canvasHeight/2);
  context.lineTo(canvasWidth-125, canvasHeight/2);
  context.moveTo(125, canvasHeight/2-2);
  context.lineTo(125, canvasHeight);
  context.moveTo(canvasWidth-125, canvasHeight/2-2);
  context.lineTo(canvasWidth-125, canvasHeight);
  context.moveTo(375, canvasHeight/2-2);
  context.lineTo(375, canvasHeight);
  context.moveTo(625, canvasHeight/2-2);
  context.lineTo(625, canvasHeight);

  context.strokeStyle = 'rgba(40, 96, 112, 1)';
  context.lineWidth = 4;
  context.stroke();
}

subDraw();
function subDraw(){
  var canvas = document.querySelector(`#subsubCanv1`);
  var context = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  context.beginPath();
  context.moveTo(0, canvasHeight-23);
  context.lineTo(canvasWidth/2, canvasHeight-23);
  context.lineTo(canvasWidth/2, 43);
  context.lineTo(canvasWidth, 43);
  context.moveTo(canvasWidth/2, 109);
  context.lineTo(canvasWidth, 109);
  context.moveTo(canvasWidth/2, canvasHeight-23);
  context.lineTo(canvasWidth, canvasHeight-23);

  context.strokeStyle = 'rgba(40, 96, 112, 1)';
  context.lineWidth = 4;
  context.stroke();
};

//Egyenes vonalak a menük között
function drawLine(iteration){
  var canvas = document.querySelector(`#canvasSub${iteration}`);
  var context = canvas.getContext('2d');

  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;

  context.beginPath();
  context.moveTo(canvasWidth/2, 0);
  context.lineTo(canvasWidth/2, canvasHeight);
  context.strokeStyle = 'rgba(40, 96, 112, 1)';
  context.lineWidth = 4;
  context.stroke();
}

var canvasNum = document.querySelectorAll("canvas").length;
console.log(canvasNum)


for(var i = 1; i<=canvasNum; i++){
  drawLine(i);
}