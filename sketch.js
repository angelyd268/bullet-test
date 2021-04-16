  var wall, thickness;
  var bullet,speed,weigth;

 function setup(){
 createCanvas(1600,400)
 speed=random(55,90);
 weigth=random(400,1500);
 thickness=random(22,83);
  bullet = createSprite(50,200,60,20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "80,80,80"
  bullet.velocityX = speed;
  
}
         

  function draw(){

  background(0);
  thickness = random(22,83);
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation = 0.5 * weigth*speed*speed/22500;
  if(deformation>180) {
    bullet.shapeColor=color(225,0,0);
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor=color(230,230,0);
  }
  if(deformation<100){
    bullet.shapeColor=color(0,255,0);
  }
  }

  drawSprites();
  }
  

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width
  WallLeftEdge=lWall.x
  if (bulletRightEdge>=WallLeftEdge){
    return true;
  }
    return false;
}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var Damage=0.5*weigth*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor = color(225,0,0);
  }

  if(damage<10){
   wall.shapeColor = color(0,225,0);
  }
}




    
  

