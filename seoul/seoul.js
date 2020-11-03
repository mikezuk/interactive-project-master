let img;
let img2;

function preload() {
  img = loadImage('namsan-tower/assets/seoul/NAMSAN.PNG');
  img2 = loadImage('hongdae/assets/seoul/HONGDAE.PNG')
}

function setup() {
  createCanvas(1280, 770)
}

function draw() {
  let scale = 1.2 / 10
  let scale2 = 2 / 10
  imageMode(CENTER);
  image(img, 1150, 220, img.width * scale, img.height * scale);
  image(img2, 350, 480, img.width * scale2, img.height * scale2);
  position = ('SCALE');

}

function openWin() {
  window.open("namsan-tower/index2.html");
}

function openWin2() {
  window.open("hongdae/index3.html");
}

function openWin3() {
  window.open("../index.html");
}
