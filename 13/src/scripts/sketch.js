var angle = 1.5;
var sponge = [];
function setup(){
	    canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;
      createCanvas(canvasWidth, canvasHeight,WEBGL);
  angleMode(DEGREES);
  normalMaterial();
  b = new Box(0,0,0,200);
  sponge.push(b);

}
function mousePressed() {
  // Generate the next set of boxes
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw(){
	background(0);
	pointLight(0,0,255,-200,0,0);
	pointLight(255,0,0,200,0,0);
	stroke(255);
	noFill();
	rotateX(angle);
	rotateY(angle*1)
  rotateZ(angle*1)

	for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
	}
	angle+=0.1;
}
function Box(x,y,z,r){
	this.pos = createVector(x,y,z);
	this.r=r;

	this.generate=function(){
	let boxes=[];
	for(var x = -1;x<2;x++){
		for(var y=-1;y<2;y++){
			for(var z=-1;z<2;z++){

				var sum = abs(x)+abs(y)+abs(z);
       var newR = this.r/3;
       if(sum>1){
       let b = new Box(this.pos.x + x * newR,this.pos.y + y * newR,
              this.pos.z + z * newR,newR);
       boxes.push(b);
     }
			}
		}
	}
	return boxes;
}

	this.show=function(){
		push();
		translate(this.pos.x,this.pos.y,this.pos.z);
		fill(255,100);
		box(r);
		pop();
		
	}

}
