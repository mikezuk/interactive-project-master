let img;
let canvas2;

function preload() {
  img = loadImage('PARIS.jpg');
  eiffel = loadImage ('eiffel/eiffel.jpg')
 louvre = loadImage ('Louvre/louvre.jpg')
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  image(img, 0, 0, img.width *1.3, img.height *1.3);
  imageMode(CENTER)

  image (eiffel,368,257,eiffel.width/1.5,eiffel.height/1.5)
  image (louvre, 1004,605, louvre.width/1.7, louvre.height/1.8)
  imageMode(CENTER)


}

function openWin3() {
  window.open("../index.html")
}

function openWin() {
  window.open("Louvre/louvre-index.html");
}

function openWin2() {
  window.open("eiffel/eiffel-index.html"); 


  
  

}

function mousePressed(){
  console.info (mouseX, mouseY)
}

