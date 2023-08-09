var full_squares_max_width = 200;
var full_squares_max_height = 200;
var full_squares_X1 = 3;
var full_squares_Y1 = 3; //global variables

function multipleSquares() {
  for (var x = 0; x <= 11; x++) {
    fill(256);
    strokeWeight(1);
    rect(x * 20, 0, 20, 20);
    console.log(x);
  }
} //The function above generates twelve squares (20x20 pixels) in a line following the x - axis

function moreSquares() {
  for (var y = 0; y <= 11; y++) {
    fill(256);
    strokeWeight(1);
    rect(0, y * 20, 20, 20);
    console.log(y);
  }
} //The function above is derived from multipleSquares() and generates twelve 20x20 squares in a line following the y - axis

function fullSquares() {
  var max_width = full_squares_max_width;
  var max_height = full_squares_max_height;
  var X1 = full_squares_X1;
  var Y1 = full_squares_Y1;
  for (var y = 0; y <= max_height; y++) {
    let value_Y_to_add = y * Y1;
    strokeWeight(1);
    for (var x = 0; x <= max_width; x++) {
      let value_X_to_add = x * X1;
      strokeWeight(1);
      fill(randomColor(), randomValue(), randomValue());
      rect(
        width / 2 + value_X_to_add - global_total_square_width / 2,
        height / 2 + value_Y_to_add - global_total_square_height / 2,
        X1,
        Y1
      );
    }
  }
}
//The function fullSquares() creates a big square filled with smaller squares, which are randomly coloured.
//The height of the big square is defined by the parameter maxheight and the width of the square
//is defined by the paramter maxwidth.

function squareDimensions() {
  var total_square_width = full_squares_max_width * full_squares_X1;
  var total_square_height = full_squares_max_height * full_squares_Y1;
  console.log(total_square_width, total_square_height);
  return [total_square_width, total_square_height];
}

function randomColor() {
  var random_value1 = floor(random(180, 195));
  return random_value1;
}

function randomValue() {
  var random_value2 = floor(random(60, 100));
  return random_value2;
}

function setup() {
  createCanvas(800, 800);
  noLoop();
  randomColor();
  let random_color = randomColor();
  randomValue();
  let random_value = randomValue();

  console.log(
    full_squares_max_width,
    full_squares_max_height,
    full_squares_X1,
    full_squares_Y1,
    random_color,
    random_value
  );
  squareDimensions();
  let global_square_dimensions = squareDimensions();
  console.log(global_square_dimensions);

  global_total_square_width = global_square_dimensions[0];
  global_total_square_height = global_square_dimensions[1];

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
}

function draw() {
  background(210, 0, 50);
  noStroke();
  fullSquares();
}
