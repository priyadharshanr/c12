var garden,rabbit, orange, apple;
var gardenImg, rabbitImg, appleImg, orangeImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("unnamed.jpg");
  orangeImg  = loadImage("orange.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX=-1
garden.scale=2
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
    if(garden.x<=0){
    garden.x = garden.width/2;
   
    }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createOranges();

 
  

  drawSprites();
}

function createApples(){
  //create sprite
  if(frameCount%80===0){
    //create sprite for apple
    apple = createSprite(Math.round(random(1,400)),30);
    apple.addImage(appleImg)
    apple.scale=0.05
    apple.velocityY=1
    apple.lifeTime=330
  
  }
}

function createOranges(){
  //create sprite of the orange
  if(frameCount%100===0){
    //create sprite for oranges
    orange = createSprite(Math.round(random(1,400)),50);
    orange.addImage(orangeImg);
    orange.scale=0.06;
    orange.velocityY=1
    orange.lifeTime=330
  }
}