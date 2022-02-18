var n = 0;
var c = 4;
function setup(){
 canvasWidth = window.innerWidth;
 canvasHeight = window.innerHeight;
 createCanvas(canvasWidth,canvasHeight);
 colorMode(DEGREES);
 colorMode(HSB);
 background(0);
}
function draw(){
  var a = n * 137.5;
  var r = c * sqrt(n);

  var x = r* cos(a) + width/2;    //width/2-so hat it get draw in the center
  var y = r* sin(a) + height/2;

  noStroke();
  fill(n%256,255,255);
  ellipse(x,y,4,4);

  n++;
}