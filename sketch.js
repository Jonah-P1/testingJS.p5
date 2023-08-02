function setup() {
  frameRate(60);
  createCanvas(1000, 1000, WEBGL);
  noFill();
  console.log("Hallo");
  multipleSquares();
  draw();
}

function draw() {
  noFill();
  strokeWeight(1);
  rect(60, 60, 20, 20);
}

function multipleSquares() {
  for (var i = 0; i <= 14; i++) {
    fill(256);
    strokeWeight(1);
    rect(i * 20, 0, 20, 20);
    console.log(i);
  }
}
