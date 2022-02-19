let max_distance;
function setup(){
	      canvasWidth = window.innerWidth,
      canvasHeight = window.innerHeight;

  createCanvas(canvasWidth,canvasHeight);
   angleMode(DEGREES)
  colorMode(HSB)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textAlign(CENTER, CENTER)
  smooth()

  max_distance = dist(0, 0, width, height)
}
function draw() {
  background(map(mouseX, 0, width, 0, 100), map(mouseY, 0, height, 0, 100), map(mouseX + mouseY, 0, width + height, 0, 100))

  for (let i = 0; i <= width + 30; i += 30) {
    for (let j = 0; j <= height + 20; j += 20) {
      let size = dist(mouseX, mouseY, i, j)
      size = (size / max_distance) * 100
      fill(0)

      circle(i, j, size)
    }
  }
}
