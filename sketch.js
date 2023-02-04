var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom1
var obsBottom2
var obsBottom3
function preload(){
bgImg = loadImage("assets/bg.png")
obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(1000,720)
//background image
bg = createSprite(width/2,height/2,1,1);
bg.addImage(bgImg);
bg.scale = 1

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.5;
 spawnBottomObstacles()
        drawSprites();
        
}

function spawnBottomObstacles(){
  if (frameCount % 100==0)
  {
    console.log(frameCount)
  var bottomobstacles=createSprite(width,710,10,50)
  bottomobstacles.velocityX=-0.5

  var rand=Math.round(random(1,3))
  switch (rand){
    case 1:bottomobstacles.addImage("obstacle",obsBottom1)
    break;
    case 2:bottomobstacles.addImage("obstacle",obsBottom2)
    break;
    case 3:bottomobstacles.addImage("obstacle",obsBottom3)
    break;
  }
  bottomobstacles.scale=0.2
}}