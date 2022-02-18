
function setup(){
  canvasWidth = window.innerWidth;
  canvasHeight =window.innerHeight;
  createCanvas(canvasWidth,canvasHeight,WEBGL);
  angleMode(DEGREES);
}
function draw(){
	background(30);
	rotateX(60);
	noFill();
	stroke(255);
	for(var i=0;i<40;i++){
		var r = map(sin(frameCount/2),-1,1,0,255);
		var g = map(i,0,40,0,255);
		var b = map(cos(frameCount),-1,1,255,0);
		stroke(r,g,b);
		rotate(frameCount/50);
		beginShape();
    for(var j =0;j<360;j+=60){
    	var  rad = i*8;
    	var x = rad*cos(j);
    	var y = rad*sin(j)
      var z = sin(frameCount*2+i*8)*60;
      vertex(x,y,z);
    }
		endShape(CLOSE);
	}
}
