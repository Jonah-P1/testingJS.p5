function setup() {
  frameRate(60);
  createCanvas(720, 720);
  fullSquares(16);
}

/*
function draw() {
  noFill();
  strokeWeight(1);
  rect(60, 60, 20, 20);
}
*/

function multipleSquares() {
  for (var x = 0; x <= 11; x++) {
    fill(256);
    strokeWeight(1);
    rect(x * 20, 0, 20, 20);
    console.log(x);
  }
}

/*
The function above generates twelve squares (20x20 pixels) in a line following the x - axis
*/

function moreSquares() {
  for (var y = 0; y <= 11; y++) {
    fill(256);
    strokeWeight(1);
    rect(0, y * 20, 20, 20);
    console.log(y);
  }
}

/*
The function above is derived from multipleSquares() and generates twelve
20x20 squares in a line following the y - axis
*/

function fullSquares(maxheight) {
  for (var y = 0; y <= maxheight; y++) {
    let valueToAdd = y * 20;
    fill(256);
    strokeWeight(1);
    for (var x = 0; x <= 11; x++) {
      fill(256);
      strokeWeight(1);
      rect(x * 20, valueToAdd, 20, 20);
      console.log(x);
    }
    console.log(y);
  }
}
