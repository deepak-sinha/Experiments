var d = 8;
var n = 5 ;
var sliderD;
var sliderN;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(600,600);
  sliderD=createSlider(2,10,6);
  sliderN=createSlider(2,10,7);
}

function draw(){
	d = sliderD.value();
	n = sliderN.value();
	var K = n/d;
	background(0);
	translate(width/2,height/2);
	beginShape();
	stroke(255);
	strokeWeight(4);
	noFill();
	for(var a = 0; a < TWO_PI * d;a+=0.02){
		var r = 200*cos(K*a);
		var x = r* cos(a);
		var y = r* sin(a);
		vertex(x,y)
	}
	endShape(CLOSE);
}
