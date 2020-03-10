var gameState;
var mario;

function setup() {
  /* Create our canvas with the max windowWidth and windowHeight */
  createCanvas(windowWidth, windowHeight)
  /* Have all our rectangles in center mode */
  rectMode(CENTER);
  /* Have all our text in center mode */
  textAlign(CENTER, CENTER);
  createCanvas
  gameState = 0;
  mario = new Mario();
}

function draw() {
  background(255);
  switch(gameState){
    case 0:
      mario.draw();
  }
}
