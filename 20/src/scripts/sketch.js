let bubble= [];
function setup(){
	canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    createCanvas(canvasWidth,canvasHeight);
    for(var i=0;i<20;i++){
       let  x=random(width);
        let y=random(height);
        let r=random(10,40);
        let b=new Bubble(x,y,r);
        bubble.push(b);
    }
}
function mousePressed(){
	for(let i=bubble.length-1;i>=0;i--){
		if(bubble[i].contain(mouseX,mouseY)){
			bubble.splice(i,1);
		}
	}
}


function draw(){
	background(0);
        fill(255);
        textAlign(CENTER);
        text("CLICK OVER CIRCLE TO DELETE THEM", width/2, 100);
        textSize(35);
for(let i=0;i<bubble.length;i++){
		if(bubble[i].contain(mouseX,mouseY)){
			bubble[i].changeColor(255);
		}else{
			bubble[i].changeColor(0);
		}
        bubble[i].move();
        bubble[i].display();
        }
}

class Bubble{
    constructor(x,y,r){
    	this.x=x;
    	this.y=y;
    	this.r=r;
    	this.brightness=0;
    }
    changeColor(bright){
    	this.brightness=bright;
    }
    contain(px,py){
    	let d = dist(px,py,this.x,this.y);
    	if(d<this.r){
          return true;
    	}
    	else{
    		return false;
    	}
    }

    move(){
    	this.x+=random(-3,3);
    	this.y+=random(-3,3);
    }
    display(){
    	stroke(255);
    	strokeWeight(2);
        fill(this.brightness,125);
        ellipse(this.x,this.y,this.r*2);
    }
}
