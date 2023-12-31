var img;
var colors = [];
var sortMode = null;
let slider_1;
let slider_2;
let sliderValue;

class Pixels {
  constructor(name, pointS, pointE, squareX, squareY, pictureColor) {
    this.name = name;
    this.pointS = pointS;
    this.pointE = pointE;
    this.squareX = squareX;
    this.squareY = squareY;
    this.pictureColor = pictureColor;
    this.originalColor = pictureColor;
  }
  display() {
    noStroke();
    fill(this.pictureColor);
    rect(this.pointS, this.pointE, this.squareX, this.squareY);
  }
}

function preload() {
  img = loadImage("images/pxresize.png");
}

function setup() {
  createCanvas(img.width, img.height);
  slider_1 = createSlider(0, 280, 100);
  slider_1.position(100, 600);
  slider_1.style("width", "100px");
  slider_2 = createSlider(-70, 70, 0);
  slider_2.position(100, 750);
  slider_2.style("width", "100px");
}

function draw() {
  let resolution = slider_1.value();
  let color_filter = slider_2.value();
  var tile_count = floor(width / max(resolution, 5));
  var rect_size = width / tile_count;

  img.loadPixels();
  colors = [];
  pixels = [];

  readImage(tile_count, rect_size, color_filter);
  sortColors(sortMode);
  createPixelList(tile_count, rect_size);
  //for (let i = 0; i < pixels.length; i++) {
  //  pixels[i].display();
  //}
  transformTriangle(tile_count, rect_size);
  keyPressedSorting();
}

function sortColors(mode) {
  //Sorts pixel based on their color
  switch (mode) {
    case "HUE":
      colors.sort((a, b) => hue(a) - hue(b));
      break;
    case "SATURATION":
      colors.sort((a, b) => saturation(a) - saturation(b));
      break;
    case "BRIGHTNESS":
      colors.sort((a, b) => brightness(a) - brightness(b));
      break;
    case "GRAYSCALE":
      colors.sort(
        (a, b) =>
          (red(a) + green(a) + blue(a)) / 3 - (red(b) + green(b) + blue(b)) / 3
      );
      break;
  }
}

function keyPressedSorting() {
  //Enables users to decide what sortingMode should be applied on the image
  if (key == "3") transformTriangle();
  if (key == "4") background("white");
  if (key == "5") sortMode = null;
  if (key == "6") sortMode = "HUE";
  if (key == "7") sortMode = "SATURATION";
  if (key == "8") sortMode = "BRIGHTNESS";
  if (key == "9") sortMode = "GRAYSCALE";
}

function readImage(tile_count, rect_size, color_filter) {
  //Function reads the image in rows and columns and stores read pixels colors in colors[] array
  for (var grid_y = 0; grid_y < tile_count; grid_y++) {
    for (var grid_x = 0; grid_x < tile_count; grid_x++) {
      var pixel_x = int(grid_x * rect_size);
      var pixel_y = int(grid_y * rect_size);
      var i = (pixel_y * img.width + pixel_x) * 4;
      var r = img.pixels[i] + color_filter;
      var g = img.pixels[i + 1];
      var b = img.pixels[i + 2];
      var c = color(r, g, b, img.pixels[i + 3]);
      colors.push(c);
    }
  }
  return c;
}

function createPixelList(tile_count, rect_size) {
  //creates a list of read Pixels through Pixels class and gives the according color code that has been saved earlier in colors[]
  var i = 0;
  for (var grid_y = 0; grid_y < tile_count; grid_y++) {
    for (var grid_x = 0; grid_x < tile_count; grid_x++) {
      let object_name = "Pixel_(" + grid_x + "|" + grid_y + ")";
      pixels.push(
        new Pixels(
          object_name,
          grid_x * rect_size,
          grid_y * rect_size,
          rect_size,
          rect_size,
          colors[i]
        )
      );
      i++;
    }
  }
}

function transformTriangle(tile_count, rect_size) {
  var counter = 0;

  for (var i = 0; i < tile_count; i++) {
    for (var j = 0; j < tile_count; j++) {
      var triangle_middleX = rect_size / 2 + j * rect_size;
      var triangle_middleY = rect_size / 2 + i * rect_size;
      noStroke();
      fill(colors[counter]);
      triangle(
        triangle_middleX - rect_size / 2,
        triangle_middleY - rect_size / 2,
        triangle_middleX + rect_size / 2,
        triangle_middleY - rect_size / 2,
        triangle_middleX,
        triangle_middleY + rect_size / 2
      );
      counter++;
    }
  }
}
