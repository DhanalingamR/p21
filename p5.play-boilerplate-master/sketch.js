var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  wall=createSprite(1000,200,thickness,height/2)
  bullet=createSprite(200,200,20,50)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0
    var damage=0.5*speed*speed/(thickness*thickness*thickness);
    if (damage>10) {
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}