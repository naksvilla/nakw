
var background, backImg ,shark, sharkImg, redfish, purplefish, bluefish,redfishImg, purplefishImg, bluefishImg, redfishGroup, purplefishGroup,  bluefishGroup;
    
var serve=0;
var gameState = serve;
var play=1;
function preload(){

sharkImg= loadImage("shark1.png");
bigsharkImg= loadImage("bigshark.jpeg");
backImg= loadImage("seaunderwater.jpg");

redfishImg=loadImage("redfish.jpg");
purplefishImg=loadImage("purplefish.jpg");
bluefishImg=loadImage("bluefish.png");

}

function setup() {
createCanvas(600,400);
  
background= createSprite(0,0,600,400);
background.addImage(backImg);
background.scale=1.5;
//making moving background
background.x=background.width/2;
background.velocityX=-4;
  
  shark= createSprite(100,250,20,20);
  shark.addImage(sharkImg);
  shark.scale=0.05;

  
  redfishGroup = new Group();
  purplefishGroup = new Group();
  bluefishGroup = new Group();
  
  score=0
}

function draw() {

  if(gameState == serve){
    background.velocityX = 0;
    shark.velocityY=0;
    redfishGroup.setVelocityXEach(0);
    purplefishGroup.setVelocityXEach(0);
    bluefishGroup.setVelocityXEach(0);
    stroke("black");
    strokeWeight(2);
    textSize(20); 
    fill("black");
    text("Press 'space' to play " , 200,200); }
  
  if(keyDown("space")){
    gameState=play;
    background.velocityX= -4
  }
  
  if(gameState==play){ 
   if(background.x<0) {
background.x=background.width/2;
}
  


      if (keyDown("UP_ARROW")) {

 shark.y=shark.y-7;
}


if (keyDown("DOWN_ARROW")) {

   shark.y=shark.y+7;
 }        

  if(redfishGroup.isTouching(shark)){
     redfishGroup.destroyEach();
     score=score+2
     }
  
  if(purplefishGroup.isTouching(shark)){
     purplefishGroup.destroyEach();
     score=score+1
  }
       
  
  if(bluefishGroup.isTouching(shark)){
     bluefishGroup.destroyEach();
     score=score+5
     }
  
    
  redfish(); 
  purplefish();
  bluefish();     
  drawSprites();



  stroke("black");
strokeWeight(2);
textSize(20); 
fill("red");
text("Score: "+ score, 200,70);

    
    
}
}
function redfish(){

  if (frameCount % 240 === 0) {
  redfish = createSprite(600,200,40,10);
  redfish.y = random(120,200); 
  redfish.velocityX=-7;
  redfish.addImage(redfishImg);
  redfish.scale=0.1;
  redfish.lifetime = 300;
  shark.depth = redfish.depth + 1;
  redfishGroup.add(redfish)
}
} 

function purplefish(){  
 if (frameCount % 100 === 0) { 
 purplefish = createSprite(800,100,40,10);   
 purplefish.y = Math.roundrandom(180,300);    
 purplefish.velocityX=-7; 
 purplefish.addImage(purplefishImg);  
 purplefish.scale=0.1; 
 purplefish.lifetime = 300;  
 shark.depth = purplefish.depth + 1; 
 purplefishGroup.add(purplefish); } }

function bluefish(){
  if (frameCount % 400 === 0) {
  bluefish = createSprite(800,150,40,10);
  bluefish.y = random(200,300); 
  bluefish.velocityX=-10;
  bluefish.addImage(bluefishImg);
  bluefish.scale=0.1;
  bluefish.lifetime = 300;
  shark.depth = bluefish.depth + 1;
  bluefishGroup.add(bluefish);
}
}
