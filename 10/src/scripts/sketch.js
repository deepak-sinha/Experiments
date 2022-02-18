var angle= 2;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight,WEBGL);
  // rectMode(CENTER);
   angleMode(DEGREES);
}
function draw(){
	background(0);
	noStroke(); 
	pointLight(0,0,255,-200,0,0);
	pointLight(255,0,0,200,0,0);
	ambientMaterial(255);
	// translate(mouseX-width/2,mouseY-height/2);//translate(0,0,mouseX);
	rotateX(angle);
	rotateY(angle*0.3);
	rotateZ(angle*0.2);
	torus(200,30);
	angle++;
}
