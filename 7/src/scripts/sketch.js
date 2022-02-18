let star = [];
let speed;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight);
  for(i=0;i<800;i++){
  	star[i] = new Star();
  }

}
function draw(){
	speed=map(mouseX,0,width,0,20);
	background(0);
	 fill(255);
   textAlign(CENTER);
   text("MOVE CURSOR LEFT-RIGHT", width/2, 100);
   textSize(35);
	translate(width/2,height/2);
	for(i=0;i<star.length;i++){
		star[i].update();
	   star[i].show();
}
}

function Star(){
	this.x=random(-width,width);
	this.y=random(-height,height);
	this.z=random(width);

	this.update=function(){
		this.z=this.z-speed;
		if(this.z<1){
           	this.x=random(-width,width);
	        this.y=random(-height,height);
	        this.z=random(width);
		}
	}

	this.show=function(){
		noStroke();
		fill(255);
        
        var sx= map(this.x/this.z,0,1,0,width);
        var sy= map(this.y/this.z,0,1,0,height);
         
        this.r=map(this.z,0,width,16,0); 
		ellipse(sx,sy,this.r,this.r);
			}
			
}