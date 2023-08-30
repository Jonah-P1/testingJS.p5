class Line {
  constructor(name, x1, y1, x2, y2) {
    this.name = name;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  display() {
    line(this.x1, this.y1, this.x2, this.y2);
    console.log(this.x1, this.y1);
  }
}

class Rectangle {
  constructor(name, x1, y1, square_size, color) {
    this.name = name;
    this.x1 = x1;
    this.y1 = y1;
    this.vx1 = x1 - square_size;
    this.vy1 = y1 - square_size;
    this.vx2 = x1 - square_size;
    this.vy2 = y1 + square_size;
    this.vx3 = x1 + square_size;
    this.vy3 = y1 + square_size;
    this.vx4 = x1 + square_size;
    this.vy4 = y1 - square_size;
    this.square_size = square_size;
    this.color = color;
    this.original_color = color;
  }
  display() {
    noStroke();
    fill(this.color);
    noStroke();
    quad(
      this.vx1,
      this.vy1,
      this.vx2,
      this.vy2,
      this.vx3,
      this.vy3,
      this.vx4,
      this.vy4
    );
  }
}

rectangles = [];
const squares_generated_width = 20;
const squares_generated_height = 20;
const square_size = 18;

function setup() {
  createCanvas(1400, 1400);
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  strokeWeight(12);
  frameRate(30);

  let total_squares = calculateGridSize();
  let total_square_height = total_squares[0];
  let total_square_width = total_squares[1];
  let total_squares_amount_grid = total_squares[2];

  initSquareList(square_size * 2);
  let c = rectangles.length;
  console.log(c);
}

function calculateGridSize() {
  let total_squares_width = squares_generated_width * square_size;
  let total_squares_height = squares_generated_height * square_size;
  let total_squares_amount_grid =
    squares_generated_width * squares_generated_height;
  console.log(
    total_squares_height,
    total_squares_width,
    total_squares_amount_grid
  );
  return [total_squares_height, total_squares_width, total_squares_amount_grid];
}

function resetRectangles() {
  for (let i = 0; i < rectangles.length; i++) {
    let rectangle = rectangles[i];
    rectangle.color = rectangle.original_color; // Reset to the original color
    rectangle.vx1 = rectangle.x1 - rectangle.square_size;
    rectangle.vy1 = rectangle.y1 - rectangle.square_size;
    rectangle.vx2 = rectangle.x1 - rectangle.square_size;
    rectangle.vy2 = rectangle.y1 + rectangle.square_size;
    rectangle.vx3 = rectangle.x1 + rectangle.square_size;
    rectangle.vy3 = rectangle.y1 + rectangle.square_size;
    rectangle.vx4 = rectangle.x1 + rectangle.square_size;
    rectangle.vy4 = rectangle.y1 - rectangle.square_size;
  }
}
function lineGraphic(i) {
  stroke(0);
  var correction = 1;
  var toggle = int(random(0, 2));
  if (toggle == 0) {
    line(
      rectangles[i].vx1 + correction,
      rectangles[i].vy1 + correction,
      rectangles[i].vx3 - correction,
      rectangles[i].vy3 - correction
    );
  } else {
    line(
      rectangles[i].vx2 + correction,
      rectangles[i].vy2 - correction,
      rectangles[i].vx4 - correction,
      rectangles[i].vy4 + correction
    );
  }
  noStroke();
}

function initSquareList(separation_value) {
  for (let i = 1; i <= squares_generated_height; i++) {
    let shift_y = i * separation_value;

    for (let j = 1; j <= squares_generated_width; j++) {
      let shift_x = j * separation_value;
      let x = 200 + shift_x;
      let y = 200 + shift_y;
      let object_name = "rectangle_" + i + "_" + j;
      console.log(object_name);
      rectangles.push(
        new Rectangle(object_name, x, y, square_size, createColorPalatte())
      );
    }
  }
}

function createColorPalatte() {
  var randomizer = int(random(0, 7));
  if (randomizer === 0) {
    return color(196, 14, 52);
  } else if (randomizer === 1) {
    return color(198, 6, 62);
  } else if (randomizer === 2) {
    return color(0, 0, 75);
  } else if (randomizer === 3) {
    return color(0, 0, 56);
  } else if (randomizer === 4) {
    return color(210, 11, 29);
  } else if (randomizer === 5) {
    return color("white");
  } else {
    return color(0, 0, 20);
  }
}

function keyPressed() {
  switch (key) {
    case "0":
      resetRectangles();
      break;
    case "1":
      for (let i = 0; i <= 8; i++) {
        rectangles[i].color = "orange";
      }
      break;
    case "2":
      for (let i = 9; i <= 16; i++) {
        rectangles[i].color = "red";
      }
      break;
    case "3":
      for (let i = 0; i <= 95; i++) {
        rectangles[i].vx1 =
          rectangles[i].x1 - random(square_size, square_size * 1.3);
        rectangles[i].vy1 =
          rectangles[i].y1 - random(square_size, square_size * 1.3);
        rectangles[i].vx2 =
          rectangles[i].x1 - random(square_size, square_size * 1.3);
        rectangles[i].vy2 =
          rectangles[i].y1 + random(square_size, square_size * 1.3);
        rectangles[i].vx3 =
          rectangles[i].x1 + random(square_size, square_size * 1.3);
        rectangles[i].vy3 =
          rectangles[i].y1 + random(square_size, square_size * 1.3);
        rectangles[i].vx4 =
          rectangles[i].x1 + random(square_size, square_size * 1.3);
        rectangles[i].vy4 =
          rectangles[i].y1 - random(square_size, square_size * 1.3);
      }
      break;
    case "4":
      let faster = 5;
      for (let i = 0; i <= 95; i++) {
        if (i % 2 === 0) {
          rectangles[i].vx1 += faster;
          rectangles[i].vx2 += faster;
          rectangles[i].vx3 += faster;
          rectangles[i].vx4 += faster;
        } else {
          rectangles[i].vy1 += faster;
          rectangles[i].vy2 += faster;
          rectangles[i].vy3 += faster;
          rectangles[i].vy4 += faster;
        }
      }
      break;
    case "5":
      strokeCap(ROUND);
      break;
    case "6":
      strokeCap(SQUARE);
      break;
    case "7":
      strokeCap(PROJECT);
      break;
    case "8":
      noLoop();
      break;
    case "9":
      loop();
      break;
  }
}

function draw() {
  frameRate(1);
  background("black");
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].display();
  }
  for (let i = 0; i < rectangles.length; i++) {
    lineGraphic(i);
  }
  keyPressed();
}
//rectange1 = new Rectangle(object_name, 400, 400, 10);
