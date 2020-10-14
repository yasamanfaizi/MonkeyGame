
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gameState = "play"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,500);
  monkey = createSprite(50,450,30,20);
monkey.addAnimation("monkeyImg",monkey_running);
  monkey.scale = 0.12;
 ground = createSprite(250,480,500,20); 
 foodGroup = createGroup();
obstacleGroup = createGroup();
  
}


function draw() {
background("white");
  monkey.collide(ground);
  if (gameState === "play"){
    
  
  if (keyDown("space")){
    monkey.velocityY = -8;
  }
    
  monkey.velocityY = monkey.velocityY+0.3;
  food();
  obstacles();
  if (obstacleGroup.isTouching(monkey)){
    gameState = "end"
  }
  }
  else if (gameState === "end"){
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    monkey.velocityY = 0; 
  }
drawSprites();  
}

function food() {
  if (frameCount%70===0){
    Food = createSprite(500,Math.round(random(30,300)),50,50);
    Food.addImage(bananaImage);
    Food.velocityX = -5;
    Food.scale = 0.1;
    monkey.depth = Food.depth;
    monkey.depth = monkey.depth+1;
    foodGroup.add(Food);
  }
}

function obstacles() {
  if (frameCount%100===0){
    ob = createSprite(500,440,50,50);
    ob.addImage(obstacleImage);
    ob.velocityX = -5;
    ob.scale = 0.3; 
 obstacleGroup.add(ob);   
  }
}



