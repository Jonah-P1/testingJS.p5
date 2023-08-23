var img;
var colors = [];
var sortMode = null;

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
  img = loadImage("images/coastscenery.jpg");
}

function setup() {
  createCanvas(4000, 2700);
}

function draw() {
  let resolution = 20;
  var tile_count = floor(width / max(resolution, 5));
  var rect_size = width / tile_count;

  img.loadPixels();
  colors = [];
  pixels = [];

  readImage(tile_count, rect_size);
  sortColors(sortMode);
  createPixelList(tile_count, rect_size);
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].display();
  }
  keyPressedSorting();
}

function sortColors(mode) {
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
  if (key == "5") sortMode = null;
  if (key == "6") sortMode = "HUE";
  if (key == "7") sortMode = "SATURATION";
  if (key == "8") sortMode = "BRIGHTNESS";
  if (key == "9") sortMode = "GRAYSCALE";
}

function readImage(tile_count, rect_size) {
  for (var grid_y = 0; grid_y < tile_count; grid_y++) {
    for (var grid_x = 0; grid_x < tile_count; grid_x++) {
      var pixel_x = int(grid_x * rect_size);
      var pixel_y = int(grid_y * rect_size);
      var i = (pixel_y * img.width + pixel_x) * 4;
      var c = color(
        img.pixels[i],
        img.pixels[i + 1],
        img.pixels[i + 2],
        img.pixels[i + 3]
      );
      colors.push(c);
    }
  }
  return c;
}

function createPixelList(tile_count, rect_size) {
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

function keyPressedResolution(resolution) {
  switch (key) {
    case "1":
      return 5;
    case "2":
      return 25;
    case "3":
      return 35;
    case "4":
      return 95;
    default:
      return resolution;
  }
}
