let particles;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight);
  particles=Array(100).fill().map(p=>new Particle());

}
function draw(){
	background(0);
	for(let i = 0;i<9;i++){
		let p = new Particle();
        particles.push(p);
	}
	for(let particle of particles){
        particle.update();
        particle.show();
	}
	particles=particles.filter(p=>!p.finished());

	// for(let i =particle.length;i>=0;i--){
	// 	particles[i].update();
	// 	particles[i].show();
	// 	if(particles[i].finished()){
	// 		particles.splice(i,1);
	// 	}
	// }
	
}

class Particle{
	constructor(){
		this.x=width/2;
		this.y=height-100;
		this.vx=random(-1.5,1.5);
		this.vy=random(-6,1);
		this.alpha=400;
	}
	finished(){
		return this.alpha<0;
	}
	update(){
		this.x+=this.vx;
		this.y+=this.vy;
        this.alpha-=5;
	}
	show(){
		noStroke();
		fill(255,0,0);
		ellipse(this.x,this.y,random(2,15));
	}
}