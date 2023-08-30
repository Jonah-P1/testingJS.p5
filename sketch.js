const full_squares_max_width = 30;
const full_squares_max_height = 45;
const row_shift = 30;
const full_squares_X1 = 10;
const full_squares_Y1 = 10; //variable to deterrmine the size of the rectangle and its squares

function multipleSquares() {
  for (var x = 0; x <= 11; x++) {
    fill(256);
    strokeWeight(1);
    rect(x * 20, 0, 20, 20);
    console.log(x);
  }
} //The function above generates twelve squares (20x20 pixels) in a line following the x - axis

function moreSquares(mheight) {
  for (var a = 0; a <= mheight; a++) {
    mvalue_Y_to_add = a * mheight;
    rect(
      width / 2,
      height / 2 + mvalue_Y_to_add / 2,
      full_squares_X1,
      full_squares_Y1
    );
  }
} //The function above is derived from multipleSquares() and generates twelve 20x20 squares in a line following the y - axis

function fullSquares() {
  var max_width = full_squares_max_width;
  var max_height = full_squares_max_height;
  var X1 = full_squares_X1;
  var Y1 = full_squares_Y1;
  let animation = frameCount * 0.5; //parameter for animation
  for (let y = 0; y <= max_height; y++) {
    let value_Y_to_add = y * Y1;
    let gradient = map(y, 0, max_height, 0 + animation, 55 + animation); //animated gradient effect
    //stroke(45, 70, 100);
    strokeWeight(1);
    for (let x = 0; x <= max_width; x++) {
      let value_X_to_add = x * X1;
      fill(gradient, 95, 75);
      if (x % 2 === 0) {
        value_Y_to_add += Y1 + row_shift;
      } else {
        value_Y_to_add -= Y1 + row_shift;
      }
      //if conditional creates visual effect of columns shifting
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
//determines the size of the rectangle created through fullSquares()

function randomColor() {
  var random_value1 = floor(random(210, 187));
  return random_value1;
}

function randomValue() {
  var random_value2 = floor(random(80, 100));
  return random_value2;
}

function interference() {
  fill(0, 0, 0);
  moreSquares(6);
}

function setup() {
  createCanvas(800, 800);
  frameRate(30);
  //noLoop();
  console.log(
    full_squares_max_width,
    full_squares_max_height,
    full_squares_X1,
    full_squares_Y1
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
  //background(210, 0, 50);
  fullSquares();
  noStroke();
  //interference();
}

// p.93

function RowfullSquares() {
  var square_width = full_squares_max_width;
  var rect_x = full_squares_X1;
  var rect_y = full_squares_Y1;
  var square_height = full_squares_max_height;
  for (let x = 0; x <= square_width; x++) {
    let value_X_to_add = x * full_squares_X1;
    let animation = frameRate * 0.1;
    let gradient = map(x, 0, square_height, 0 + animation, 55 + animation);
    strokeWeight(1);
    for (let y = 0; y <= square_height; y++) {
      let value_Y_to_add = y * rect_y;
      fill(gradient, 80, 100);

      if (y % 2 === 0) {
        value_X_to_add += full_squares_X1 + 30;
      } else {
        value_X_to_add -= full_squares_X1 + 30;
      }

      rect(
        width / 2 + value_X_to_add - global_total_square_width / 2 + spacer,
        height / 2 + value_Y_to_add - global_total_square_height / 2,
        rect_x,
        rect_y
      );
    }
  }
}
