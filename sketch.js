var jake,jakeImg,pathImg,path,left_boundary,right_boundary
var i

function preload(){
  //pre-load images
  jakeImg = loadAnimation("Runner-1.png","Runner-2.png");
 pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //moving background
  path=createSprite(200,200)
  path.addImage(pathImg);
  
  path.scale=1.2;
  
  // jake
  jake=createSprite(180,340,50,170);
  jake.addAnimation("JakeRunning",jakeImg);
  jake.scale=0.4;

  //boundaries
  left_boundary=createSprite(0,0,100,600);
  left_boundary.visible=false;

right_boundary=createSprite(400,0,100,600);
right_boundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;

  jake.x=world.mouseX;

  jake.collide(left_boundary);
jake.collide(right_boundary)
jake.collide(edges[3]);

  if(path.y>400){
    path.y=height/2;
  }
 




drawSprites();


}
