var x= 0;
var y= 0;
let spacing =30;
function setup(){
	  createCanvas(800,600);
		background(51);
}
function draw(){
	stroke(255);
	strokeWeight(4);
	if(random(1)<0.8){
		line(x,y,x+spacing,y+spacing);
	}else{
		line(x,y+spacing,x+spacing,y);
	}
	x=x+spacing;
	if(x>width){
		x=0;
		y=y+spacing;
	}
}
