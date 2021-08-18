var BULLET,WALL;
var SPEED,WEIGHT,THICKNESS;
function setup() {
  createCanvas(1600,400);
  SPEED=random(223,321);
  WEIGHT=random(30,52);
  THICKNESS=random(22,83)
  BULLET=createSprite(50, 200, 50, 50);
  BULLET.shapeColor= "purple";
  BULLET.debug=true;
  WALL=createSprite(1200, 200, THICKNESS, height/2)
  WALL.shapeColor="purple";
  WALL.debug=true;
}

function draw() {
  background(0,255,0);  
  BULLET.collide(WALL);
  BULLET.velocityX=SPEED;

  if(hasCOLLIDED(BULLET,WALL))
  {
    BULLET.velocityX=0;
    var DAMAGE=0.5*WEIGHT*SPEED*SPEED/(THICKNESS*THICKNESS*THICKNESS);
    
    if(DAMAGE>10)
    {
      WALL.shapeColor=color(0,255,0);
    }
    if(DAMAGE<10)
    {
      WALL.shapeColor=color(0,255,0);
    }
    
  }
  
  drawSprites();
}

function hasCOLLIDED(BULLET,WALL)
{
  BULLETRightEdge+BULLET.x +BULLET.width;
  WALLLeftEdge=WALL.x
  if(BULLETRightEdge>=WALLLeftEdge){
   return true 
  }
  return false;
}