let maskImage;
let confettiGraphics;
let a, a3;
let posX, posY;

let tempTestImage;

function preload() {
  testImage = loadImage("bia 09.png");
}

function setup() {
  createCanvas(800, 800);
  testImage.resize(width, 0);

  let maskGraphics = createGraphics(800, 800);
  maskGraphics.clear();
  maskGraphics.stroke(255); // extra pixel to leave no gaps
  a = width / 2;
  a3 = a * sqrt(3);
  maskGraphics.triangle(0, height - a3, 2 * a, height - a3, a, height);
  maskImage = createImage(width, height);
  maskImage.copy(maskGraphics, 0, 0, width, height, 0, 0, width, height);

  confettiGraphics = createGraphics(width, height);
  confettiGraphics.image(testImage, 0, 0);

  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let img = confettiGraphics.get();
  img.mask(maskImage);
  img = img.get();
  // image(testImage, 0, 0);

  translate(width / 2, height / 2);
  for (let i = 0; i < 3; i++) {
    image(img, 0, -height / 2);
    push();
    rotate(60);
    scale(-1, 1);
    image(img, 0, -height / 2);
    pop();
    rotate(120);
  }
}

function mouseMoved() {
  // posX = map(mouseX, 0, 800, 0, mouseX)
  // posY = map(mouseY, 0, 800, 0, mouseY)

  confettiGraphics.image(testImage, mouseX / 4, mouseY / 4);
  background(255);
}

function keyTyped() {
  if (key === "s" || key === "S") {
    saveCanvas("biaPride", "png");
    print("saving image");
  }
  return false;
}
