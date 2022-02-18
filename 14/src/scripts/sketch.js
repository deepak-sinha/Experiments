
function setup(){
  canvasWidth = window.innerWidth;
  canvasHeight =window.innerHeight;
  createCanvas(canvasWidth,canvasHeight,WEBGL);
  angleMode(DEGREES);
}
function draw(){
	background(30);
	noFill();
	stroke(255);
	rotateX(180);
	strokeWeight(3);
	for(var i=0;i<30;i++){
		var r = map(sin(frameCount/2),-1,1,101,201);
		var g = map(i,0,15,101,201);
		var b = map(cos(frameCount),-1,1,201,101);
		stroke(r,g,b);
    rotateX(180);
		beginShape();
    for(var j =0;j<360;j+=30){
    	var  rad = i*10;
    	var x = rad*cos(j);
    	var y = rad*sin(j)
      var z = sin(frameCount*2+i*5)*50;
      vertex(x,y,z);
    }
		endShape(CLOSE);
	}
}
