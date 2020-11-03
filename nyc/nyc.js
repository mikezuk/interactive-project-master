let img;
let img2;

function preload() {
  img = loadImage('empire/assets/nyc/EMPIRE.PNG');
  img2 = loadImage('chinatown/assets/nyc/CHINATOWN.PNG')
}

function setup() {
  createCanvas(1280, 770);
}

function draw() {
  let scale = 3.5 / 10
  let scale2 = 1.5 / 10
  imageMode(CENTER);
  image(img, 905, 380, img.width * scale, img.height * scale); 
  image(img2, 650, 420, img.width * scale2, img.height * scale2);
  position = ('FIXED');

}

function openWin() {
  window.open("empire/empire-index.html");
}

function openWin2() {
  window.open("chinatown/ctown-index.html"); 
}

function openWin3() {
  window.open("../index.html");
}

