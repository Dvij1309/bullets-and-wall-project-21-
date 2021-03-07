var bullet;
var wall;
var thickness;
var speed;
var weight;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(45,90);
  weight = random(400,1500);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(700,200,thickness,height/2);

  bullet.velocityX = speed;

  
}

function draw() {
  background("red");  
  drawSprites();

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
  
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    
    if(deformation > 180){
    bullet.shapeColor = color(255,0,0);

  }

    if(deformation < 180 && deformation > 100){
    bullet.shapeColor = color(230,230,0);
  }

    if(deformation < 100){
    bullet.shapeColor = color(0,255,0);
  }
  
  } 

    if(hasCollided(bullet,wall)){
    
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
    wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
    wall.shapeColor = color(0,255,0);
    }



    }

    }

  function hasCollided(lbullet,lwall){
  
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >=  wallLeftEdge){
  return true;
  }
  return false;
  }

