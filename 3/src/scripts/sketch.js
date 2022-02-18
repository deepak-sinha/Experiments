 
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}
function draw(){
	background(10,20,30);
	noFill();
	stroke(255);
	translate(width/2,height/2);

	for(var i = 0;i<200;i++){
	push();
	rotate(sin(frameCount+i*2)*100);
  var r = map(sin(frameCount),-1,1,50,255);
	var g =map(cos(frameCount/2),-1,1,50,255);
	var b =map(sin(frameCount/4),-1,1,50,255);
	stroke(r,g,b);	
	rect(0,0,600-i*3,600-i*3,200-i); //in order to create more sqaure we are gonna use for loop
  pop();
}
}
