var hr, mn, sc, secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //createSprite(400, 0, 50, 50);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(270);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(8);
  noFill();

  push();
  stroke(255, 0, 0);
  secAngle = map(sc, 0, 60, 0, 360);
  arc (0, 0, 300, 300, 0, secAngle);
  rotate(secAngle);
  line(0, 0, 115, 0);
  pop();

  push();
  stroke(0, 255, 0);
  minAngle = map(mn, 0, 60, 0, 360);
  arc (0, 0, 280, 280, 0, minAngle);
  rotate(minAngle);
  line(0, 0, 95, 0);
  pop();

  push();
  stroke(0, 0, 255);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  rotate(hrAngle);
  line(0, 0, 70, 0);
  pop();

  drawSprites();
}