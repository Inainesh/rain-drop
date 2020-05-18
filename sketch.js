var rdrop = new Array();
const SCL = 25;
var dropSpeed = 10;
function setup() {
  createCanvas(500, 500);
  frameRate(60);
  for (var i = 0; i < 100; i++) rdrop[i] = new Raindrop();
}

function draw() {
  background(255,192,203);
  stroke(128,0,128);
  for (var i = 0; i < 100; i++) rdrop[i].drop();
  if (mouseIsPressed) {
    if (mouseX < width && mouseY < height) {
      dropSpeed = map(mouseY, 0, height, 5, 100);
    }
  }
}

function Raindrop() {
  this.len = round(random(50));
  this.x = round(random(width));
  this.y = -round(random(height));
  this.drop = function() {
    line(this.x, this.y, this.x, this.y + this.len);
    if (this.y < height) this.y += dropSpeed;
    else {
      this.x = round(random(width));
      this.y = -round(random(height));
    }
  }
}