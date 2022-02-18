var particle=[];
function setup(){
	createCanvas(window.innerWidth,window.innerHeight);
	for(i=0;i<10;i++){
		particle[i]=new Particle();
	}

}

function draw(){
	background(0,150);
   fill(255);
   textAlign(CENTER);
   text("CLICK OVER SCREEN", width/2, 100);
   textSize(35);
	for(i=0;i<particle.length;i++){
	particle[i].update();
	particle[i].show();
}
}

function mousePressed(){
	particle.push(new Particle(mouseX,mouseY));
}



function Particle(x,y){
	this.x=x;
	this.y=y;
    
    this.yspeed=0;	
    this.gravity=0.1;

    this.update=function(){
    	this.y += this.yspeed;
    	this.yspeed += this.gravity;

    	if(this.y > height){
    	    this.y=height;   		
    		this.yspeed*=-0.8;
    	}

    }
    
    this.show=function(){
    	 noStroke();
    	 fill(193,215,232);
    	 ellipse(this.x,this.y,50,50);
    }
}