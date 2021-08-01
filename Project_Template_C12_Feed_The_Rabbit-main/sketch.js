var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  var apple=Math.round(random(1,2));
  var leaves=Math.round(random(1,2));
  if(frameCount%80==0){
    if(apple==1){
      createApple();
    }
    else{
      createLeaves();
    }

  }
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
  
  

  drawSprites();
}
function createApple(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=2;
  apple.liftime=300; 
}
function createLeaves(){
  leaves=createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale=0.06;
  leaves.velocityY=2;
  leaves.liftime=300; 
}

