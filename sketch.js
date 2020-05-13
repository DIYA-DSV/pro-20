 r = 0;
var g = 50;
var b=255;
var ellipse 

function setup(){
  createCanvas(1200,400);
}

function draw(){
background(r,g-30,b*3);
  r = map(mouseX,0,1200,200,300);
  g = map(mouseX,300,900,200,300);
  b = map(mouseX,600,800,200,300);
  // Create an ellipse 
  fill("orange");
  ellipse(mouseX,200,40,40);
}