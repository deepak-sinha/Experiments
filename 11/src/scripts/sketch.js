var angle= 2;

function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight,WEBGL);
  // rectMode(CENTER);
   angleMode(DEGREES);
}
function draw(){
	background(22);
	// let camX= map(mouseX,0,width,-200,100);
	// camera(camX,0,(height/2)/tan(15),0,0,0,0,1,0);
	translate(0,0,mouseX);
	ambientLight(255);
	push(); 
	rotateX(angle*0.3);
	rotateY(angle*0.3);
	rotateZ(angle*0.3);
	noStroke();
	normalMaterial();
	box(200);
	pop();

	translate(0,200);
	rotateX(90);
   ambientMaterial(100);
   noStroke();
   plane(1000,1000);
	angle++;
}
