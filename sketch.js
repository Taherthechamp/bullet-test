var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4;
var speed1, weight1,speed2, weight2,speed3, weight3,speed4, weight4;
var line1,line2,line3;
var thickness1,thickness2,thickness3,thickness4;
function setup() {
  createCanvas(1600,400);

speed1=random(223,321)
weight1=random(30,52)
speed2=random(223,321)
weight2=random(30,52)
speed3=random(223,321)
weight3=random(30,52)
speed4=random(223,321)
weight4=random(30,52)
thickness1=random(22,83)
thickness2=random(22,83)
thickness3=random(22,83)
thickness4=random(22,83)

wall1=createSprite(800, 50, 50, 50);
bullet1=createSprite(50,50,20,10);
wall2=createSprite(800, 150, 50, 50);
bullet2=createSprite(50,150,20,10);
wall3=createSprite(800, 250, 50, 50);
bullet3=createSprite(50,250,20,10);
wall4=createSprite(800, 350, 50, 50);
bullet4=createSprite(50,350,20,10);
line1=createSprite(400,100,800,10);
line2=createSprite(400,200,800,10);
line3=createSprite(400,300,800,10);

bullet1.velocityX=speed1;
bullet2.velocityX=speed2;
bullet3.velocityX=speed3;
bullet4.velocityX=speed4;
}

function draw() {
  background("black");  
 

bullet1.shapeColor="white"
bullet2.shapeColor="white"
bullet3.shapeColor="white"
bullet4.shapeColor="white"
wall1.shapeColor=color(80,80,80)
wall2.shapeColor=color(80,80,80)
wall3.shapeColor=color(80,80,80)
wall4.shapeColor=color(80,80,80)
line1.shapeColor="white"
line2.shapeColor="white"
line3.shapeColor="white"

if(hasCollided(bullet1,wall1)){
  bullet1.velocityX=0;
  var damage1=0.5 * weight1 * speed1 * speed1/(thickness1*thickness1*thickness1)
  
  if (damage1>10)
  {
    wall1.shapeColor=color(255,0,0);
  if (damage1<10){
    wall1.shapeColor=color(0,255,0);
  }
  }
  }
  if(Collided(bullet2,wall2)){
    bullet2.velocityX=0;
    var damage2=0.5 * weight2 * speed2 * speed2/(thickness2*thickness2*thickness2)
    
    if (damage2>10)
    {
      wall2.shapeColor=color(255,0,0);
    if (damage2<10){
      wall2.shapeColor=color(0,255,0);
    }
    }
    }
    if(Collide(bullet3,wall3)){
      bullet3.velocityX=0;
      var damage3=0.5 * weight3 * speed3 * speed3/(thickness3*thickness3*thickness3)
      
      if (damage3>10)
      {
        wall3.shapeColor=color(255,0,0);
      if (damage1<10){
        wall3.shapeColor=color(0,255,0);
      }
      }
      }
      if(sCollided(bullet4,wall4)){
        bullet4.velocityX=0;
        var damage4=0.5 * weight4 * speed4 * speed4/(thickness4*thickness4*thickness4)
        
        if (damage4>10)
        {
          wall4.shapeColor=color(255,0,0);
        if (damage1<10){
          wall4.shapeColor=color(0,255,0);
        }
        }
        }
      
drawSprites();
}
function hasCollided(lbullet,lwall){
  bullet1RightEdge=lbullet.x+lbullet.width;
  wall1LeftEdge=lwall.x;
  if (bullet1RightEdge>=wall1LeftEdge)
  {
    return true
  }
  return false
}
function Collided(lbullet,lwall){
  bullet2RightEdge=lbullet.x+lbullet.width;
  wall2LeftEdge=lwall.x;
  if (bullet2RightEdge>=wall2LeftEdge)
  {
    return true
  }
  return false
}
function Collide(lbullet,lwall){
  bullet3RightEdge=lbullet.x+lbullet.width;
  wall3LeftEdge=lwall.x;
  if (bullet3RightEdge>=wall3LeftEdge)
  {
    return true
  }
  return false
}
function sCollided(lbullet,lwall){
  bullet4RightEdge=lbullet.x+lbullet.width;
  wall4LeftEdge=lwall.x;
  if (bullet4RightEdge>=wall4LeftEdge)
  {
    return true
  }
  return false
}
