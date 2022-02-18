var fireworks = [];
var gravity;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight);
  gravity = createVector(0,0.2);
  stroke(255);
  strokeWeight(4);
}

function draw(){
	background(0);
	if(random(1)<0.03){
	  fireworks.push(new Firework());
	}
	for(var i=0;i<fireworks.length;i++){
		fireworks[i].update();
		fireworks[i].show();
}
}


function Particle(x,y){
	this.pos = createVector(x,y);
	this.vel = createVector(0,random(-8,-18));
	this.acc = createVector(0,0);

	this.applyForce=function(force){
		this.acc.add(force);
	}

	this.update=function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);    //multiplying acc to 0 so that is dont keeps on increasing every framecount
	}

	this.show=function(){
		point(this.pos.x,this.pos.y);
	}
}


function Firework(){
	  this.firework = new Particle(random(width),height);
    this.exploded =false;
    this.particles=[];

  this.update=function(){
  	if(!this.exploded){
  		this.firework.applyForce(gravity);
	    this.firework.update();
	    	    if(this.firework.vel.y>=0){
	    	this.exploded=true;         //when it reaches at the top 
	      this.explode();
	      }
   }
           	for(var i =0;i<this.particles.length;i++){
           		this.particles[i].applyForce(gravity);
           		this.particles[i].update();
           	}
  }

    this.explode=function(){
    	for(var i =0;i<100;i++){
    		var p = new Particle(this.firework.pos.x,this.firework.pos.y);
    		this.particles.push(p);
    	}
    }

  this.show=function(){
  	  	if(!this.exploded){
     	this.firework.show();
     }
     	for(var i =0;i<this.particles.length;i++){
     		this.particles[i].show();
  }
  }
}