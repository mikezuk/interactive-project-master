let img;
let canvas2;

function preload() {
  img = loadImage('assetsmike/map.png');
  img3 = loadImage ('assetsmike/pin2.png');
  myFont = loadFont('assetsmike/selima_.otf');
  img4 = loadImage ('assetsmike/plane.png');
 img2 = createImg('assetsmike/water.gif');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255)


img2.position (300,400,50,20);
  image (img, 0, 0 );
  imageMode (CENTER)
 
  tint (0,190)
  image (img3, 1303, 237, width/21,height/12,)
  image (img3, 387, 216, width/21,height/12,)
  image (img3, 726, 190, width/21,height/12,)
  
  
  
  
}
function draw () {
  textSize(80);
  textFont (myFont)
  textAlign (CENTER)
text('Point & Go!', width/2, height /2);
//image (img4, mouseX, mouseY)

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed () {
  console.info (mouseX, mouseY)
}


