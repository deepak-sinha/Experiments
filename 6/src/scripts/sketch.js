let s;
 let scal = 40;
let food;

function setup() {
  createCanvas(1000,600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scal);
  let rows = floor(height / scal);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scal);
}

   function mousePressed() {
    s.total++;
   }

function draw() {
  background(0);
    if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scal, scal);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
 
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
   this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
        let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  };

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scal;
    this.y = this.y + this.yspeed * scal;

    this.x = constrain(this.x, 0, width - scal);
    this.y = constrain(this.y, 0, height - scal);
  };

  this.show = function() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scal, scal);
    }
    rect(this.x, this.y, scal, scal);
  };
}