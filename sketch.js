var fixedRect,fixedRect2, movingRect;

function setup() {
  createCanvas(1200,800);
  //
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "yellow";
  fixedRect.debug = true;
  fixedRect.velocityX = -3;
  //
  fixedRect2 = createSprite(300, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect2.velocityX = 3;
  //
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  //
  
}

function draw() {
  background(0,0,0);  


  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";

  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "yellow";
//
  }
  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "white";
    fixedRect2.shapeColor = "white";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "green";
  }
 
//
  bounceOff(fixedRect,fixedRect2);  
  drawSprites();
}
