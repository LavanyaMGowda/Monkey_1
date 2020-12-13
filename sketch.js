
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground
var score,obstacle


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(450,450);
  monkey = createSprite(100,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  var survivalTime=0;
  ground = createSprite(0,410,700,20);
  ground.velocityX = -2;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  

  
}


function draw() {
  background("white");
  
  if(keyDown("space")){
    monkey.velocityY=-6
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(ground.x>0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){
      ground.velocityX = 0;
      monkey.velocityY = 0;
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      FoodGroup.setLifetimeEach(-1);
    }
  food();
  spawnObstacle();
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function food(){
  if(frameCount % 80 === 0){
   banana = createSprite(600,100,40,10);
   banana.addImage("banana",bananaImage);
   banana.velocityX=-4;
   banana.scale = 0.1;
    
   banana.y = Math.round(random(100,300));         
   monkey.depth = banana.depth + 1;

    FoodGroup.add(banana);
    banana.lifetime = 420;
  }
}

function spawnObstacle(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,372,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.15;
    
    
    obstacleGroup.add(obstacle);
      obstacle.lifetime = 420;
  }
  
}
  
  
  


