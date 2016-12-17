'use strict';
var angle = 0;
var slider;
function setup() {
  createCanvas(800, 600);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(200, height-100);
  branch(16, 50);
}

function branch(n, len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4){
    push();
    rotate(angle);
    branch(n * 2, len * 0.90);
    pop();
    if (n !== 4 && (n - 1) % 3 === 0){
      push();
      rotate(-angle);
      branch((n - 1)/3, len * 0.80);
      pop();
    }
  }
}
