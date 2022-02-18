function setup() {
  var circles = [],
      overlapping = false,
            canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth, canvasHeight);

  for (var i = 0; i < 6000; i++) {
    circle = {
      x: random(width),
      y: random(height),
      r: random(6, 36)
    };
    
    overlapping = false;
    
    for (var j = 0; j < circles.length; j++) {
      var existing = circles[j];
      var d = dist(circle.x, circle.y, existing.x, existing.y)
      if (d < circle.r + existing.r) {
        overlapping = true;
        break;
      }
    }
    if (!overlapping) {
      circles.push(circle);      
    }
    
  }
  
  background(255);
  fill(255,0,150,100);
  noStroke();
  for (var i = 0; i < circles.length; i++) {
    ellipse(circles[i].x, circles[i].y, 
            circles[i].r*2, circles[i].r*2);
  }
}
