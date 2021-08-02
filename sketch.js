var ship, sea, shipImg1, seaImg;


function preload(){

  seaImg = loadImage("sea.png");

  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(100, 200, 200, 100);
  ship.addAnimation("moving", shipImg1);
  

  sea = createSprite(0, 200, 0, 0);
  sea.addImage(seaImg);
  sea.velocityX = -4;
}

function draw() {
  background("blue");


ship.scale = 0.25;
sea.scale = 0.24;

ship.depth = 1;

sea.depth = 0;

if(sea.x < -100 ){

  sea.x = 400;

}

drawSprites();
}