var PLAY = 1;
var END = 0;
var gameState = PLAY;
var boy,boyImg, boyFalling;
var TruckGroup,carGroup1, carGroup2, carGroup3,car1,car2,car3,truck;
var truckImg,car1Img,car2Img,car3Img;
var CoinsGroup, CoinImg;
var road, roadImg;
var ScoreSound,GameOverSound,JumpSound;
var distance = 0;
var score=0;
var gameOver,gameOverImg, Reset, ResetImg;

function preload(){
    boyImg = loadAnimation("BoyRunning1.png","BoyRunning2.png","BoyRunning3.png","BoyRunning4.png","BoyRunning5.png","BoyRunning6.png");
    boyFalling = loadAnimation("BoyFalling1.png","BoyFalling2.png")

    roadImg = loadImage("rd.png");

    CoinImg = loadImage("Coin_Img.png");

    truckImg = loadImage("Truck_Img.png");
    car1Img = loadImage("Car1_Img.png");
    car2Img = loadImage("Car2_Img.png");
    car3Img = loadImage("Car3_Img.png");

    gameOverImg = loadImage("gameOver_Img.png");
    ResetImg = loadImage("Reset_Img.png");
  
    ScoreSound = loadSound("checkpoint.mp3");
    GameOverSound = loadSound("die.mp3");
    JumpSound = loadSound("jump.mp3");
}

function setup(){
    createCanvas(800,500);

    road = createSprite(800,250);
    road.addImage(roadImg);
    road.scale = 2.4;

    boy = createSprite(50,300,50,20);
    boy.addAnimation("running",boyImg);
    boy.scale = 0.5;

    gameOver = createSprite(300,400);
    gameOver.addImage(gameOverImg);
    
    Reset = createSprite(300,140);
    Reset.addImage(ResetImg);
    
    gameOver.scale = 0.5;
    Reset.scale = 0.5;
  
    gameOver.visible = false;
    Reset.visible = false;
    
    TruckGroup = new Group ();
    carGroup1 = new Group();
    carGroup2 = new Group();
    carGroup3 = new Group();
    CoinsGroup = new Group ();
}

function draw(){
background(0);

if (road.x < 0){
  road.x = width/4;
}

distance = distance+Math.round(getFrameRate() /50);
//road.velocityX = -(6+2*distance/150);
road.velocityX = -5;

var oppvehicle=Math.round(random(1,4));
if (World.frameCount % 150===0){
  if(oppvehicle==1){
  obstacleTruck();
  }
 else if(oppvehicle==2){
  obstacleCar1();
 }
 else if(oppvehicle==3){
  obstacleCar1();
}
  else{
    obstacleCar4();
 }
}
//text("Score: "+ score, 600,50);
  
  //if (gameState===PLAY){
  // score = score + Math.round(getFrameRate()/60);
  // road.velocityX = -(6 + 3*score/100);
  // boy.changeAnimation("running", boyImg);
  //}
    
   // if(keyDown("space") && boy.y >= 159) {
    // boy.velocityY = -12;
    //}
  
    //boy.velocityY = boy.velocityY + 0.8
  
    //if (road.x < 0){
    //  road.x = road.width/2;
    //}
    //Coins();
    //Obstacles();
  
    //if(obstaclesGroup.isTouching(boy)){
      //  gameState = END;
   // }
  //}
  //else if (gameState === END) {
    //ameOver.visible = true;
    //Reset.visible = true;
    //road.velocityX = 0;
    //boy.velocityY = 0;
   // obstaclesGroup.setVelocityXEach(0);
    //CoinsGroup.setVelocityXEach(0);
    
    //boy.changeAnimation("collided",boyFalling);
    
   // obstaclesGroup.setLifetimeEach(-1);
    //CoinsGroup.setLifetimeEach(-1);
    
   // if(mousePressedOver(Reset)) {
   //   reset();
   // }
  //}
  //obstacleTruck();
  TruckGroup.setVelocityXEach(0);
  TruckGroup.setLifetimeEach(-1);
  
  //obstacleCar1();
  carGroup1.setVelocityXEach(0);
  carGroup1.setLifetimeEach(-1);
  //obstacleCar2();
  carGroup2.setVelocityXEach(0);
  carGroup2.setLifetimeEach(-1);
  //obstacleCar3();
  carGroup3.setVelocityXEach(0);
  carGroup3.setLifetimeEach(-1);

  drawSprites();
}

function obstacleTruck(){
  //truck = createSprite(700,Math.round(random(50,250)));
  if(frameCount % 90===0){
  truck = createSprite(700,370);
  truck.addImage(truckImg);
  truck.scale = 0.6;
  //truck.velocityX = -(6+2*distance/150);
  truck.velocityX = -5;
  TruckGroup.add(truck);
  truck.setLifetime = 170;
  }
}

function obstacleCar1(){
  if(frameCount % 60===0){
  car1 = createSprite(300,350,50,20);
  car1.addImage(car1Img);
  car1.scale = 0.3;
  car1.velocityX = -3;
  carGroup1.add(car1);
  car1.setLifetime = 170;
  }
}

function obstacleCar2(){
  if(frameCount % 100===0){
  car2 = createSprite(100,400,50,20);
  car2.addImage(car2Img);
  car2.scale = 0.3;
  car2.velocityX = -3;
  carGroup2.add(car2);
  car2.setLifetime = 170;
  }
}

function obstacleCar3(){
  if(frameCount % 120===0){
  car3 = createSprite(250,380,50,20);
  car3.addImage(car3Img);
  car3.scale = 0.3;
  car3.velocityX = -3;
  carGroup3.add(car3);
  car3.setLifetime = 170;
  }
}


//function Coins(){
//if (frameCount % 60 === 0) {
    //var coin = createSprite(600,120,40,10);
   // coin.y = Math.round(random(80,120));
    //coin.addImage(CoinImg);
   // coin.scale = 0.5;
    //coin.velocityX = -2;
   // coin.lifetime = 200;
    
    //adjust the depth
   // coin.depth = boy.depth;
    //boy.depth = boy.depth + 1;
    
   // CoinsGroup.add(coin);
 // }

//}
//function reset(){
  //gameState = PLAY;
  //gameOver.visible = false;
 // Reset.visible = false;
  
  //obstaclesGroup.destroyEach();
  //CoinsGroup.destroyEach();
  //score = 0;
//}

//function Obstacles() {
  //if(frameCount % 60 === 0) {
  //  var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
   // obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
   // var vehicles = Math.round(random(1,6));
    //switch(vehicles) {
    //case 1: obstacle.addImage(truck);
    //      break;
    // case 2: obstacle.addImage(car1);
    //       break;
    // case 3: obstacle.addImage(car2);
    //        break;
    // case 4: obstacle.addImage(car3);
    //   default: break;
    //}
    
    //assign scale and lifetime to the obstacle           
   // obstacle.scale = 0.5;
    //obstacle.lifetime = 300;
    //add each obstacle to the group
   // obstaclesGroup.add(obstacle);
 // }
//}

