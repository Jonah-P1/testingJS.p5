var stepX;
var stepY;

function setup() {
  createCanvas(1920, 1080);
  colorMode(HSB, 360, 100, 100);
  fullSquares(20, 35);
}

/*
function draw() {
  noFill();
  strokeWeight(1);
  rect(0, 0, 240, 340);
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

function fullSquares(maxwidth, maxheight) {
  for (var y = 0; y <= maxheight; y++) {
    let valueToAdd = y * 20;
    strokeWeight(1);
    for (var x = 0; x <= maxwidth; x++) {
      let h = random(360);
      let s = random(100);
      let b = random(100);
      fill(h, s, b);
      strokeWeight(1);
      rect(x * 20, valueToAdd, 20, 20);
      console.log(x);
    }
    console.log(y);
  }
}

/*
The function fullSquares() creates a big square filled with smaller squares, which are randomly coloured.
The height of the big square is defined by the parameter maxheight and the width of the square
is defined by the paramter maxwidth.
*/
