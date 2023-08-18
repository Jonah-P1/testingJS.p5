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
    this.color = color;
  }
  display() {
    fill(this.color);
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
const squares_generated_width = 7;
const squares_generated_height = 8;
const square_size = 15;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  noLoop();

  let total_squares = calculateGridSize();
  let total_square_height = total_squares[0];
  let total_square_width = total_squares[1];

  getSquareList(50);
  let c = rectangles.length;
  console.log(c);
}

function calculateGridSize() {
  let total_squares_width = squares_generated_width * square_size;
  let total_squares_height = squares_generated_height * square_size;
  console.log(total_squares_height, total_squares_width);
  return [total_squares_height, total_squares_width];
}

function getSquareList(separation_value) {
  for (let i = 0; i <= squares_generated_width; i++) {
    let shift_x = i * separation_value;

    for (let j = 0; j <= squares_generated_height; j++) {
      let shift_y = j * separation_value;
      let x = 200 + shift_x;
      let y = 200 + shift_y;
      let object_name = "rectangle_" + i + "_" + j;

      let fill_color = color(floor(random(360)), floor(random(100)), 100);
      console.log(object_name);
      rectangles.push(
        new Rectangle(object_name, x, y, square_size, fill_color)
      );
    }
  }
}

function draw() {
  background("white");
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].display();
  }
}
//rectange1 = new Rectangle(object_name, 400, 400, 10);
