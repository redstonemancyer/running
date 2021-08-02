var path
var pathimg
var boy
var boy_running
var right
var left 
function preload(){
  //pre-load images
  pathimg = loadImage("path.png")
  boy_running = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage("path.png",pathimg)
  path.scale=1.5
  path.velocityY = 4;

  boy = createSprite(200,200)
  boy.addAnimation("boy_running",boy_running)
  boy.scale = 0.1;

  right = createSprite(395,200,10,400)

  left = createSprite(10,200,10,400)
}

function draw() {
  background(50);
  
  boy.x = World.mouseX;
  boy.collide(right);
  boy.collide(left);
  if(path.y > 400 ){
    path.y = height/2
  }
  drawSprites()
}
