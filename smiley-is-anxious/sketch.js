canvasPixels = 400
radioEye = 100
radioPupil = radioEye/2

function setup() {
  createCanvas(canvasPixels, canvasPixels, WEBGL);
}

function drawEye(posX, posY) {
  // white part
  push()
  fill('white');
  circle(posX, posY, radioEye);
  
  // movement
  let maxMovement = radioPupil / 2;
  let pupilX = sin(frameCount * 0.008) * maxMovement; 
  translate(pupilX, 0);
  
  // pupil
  fill('black');
  circle(posX, posY, radioPupil);
  
  pop()
}

function makeSmile(posY) {
  fill('red')
  arc(0, posY, radioEye -40 , radioEye, 0, PI);
}

function draw() {
  background('white');
  strokeWeight(0)
  
  fill('rgb(248,248,29)')
  circle(0,0, 250)
  
  

  
  space = 10
  drawEye(radioPupil + space , 0)
  drawEye(-radioPupil- space, 0)  
  makeSmile(canvasPixels/6)
  
}
