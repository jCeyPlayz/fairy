var starImg, fairyImg, bgImg, fairyImg2;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
    fairyImg2=loadImage("fairy.png")

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
    fairy.addAnimation("stop",fairyImg2);  

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5,     isStatic:true});
	World.add(world, starBody);
    star.x= starBody.position.x
    star.y= starBody.position.y
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  //fairyVoice.play()
      
    
    if (keyDown(LEFT_ARROW)){
        fairy.velocityX=-5
       }
  
    if (keyDown(RIGHT_ARROW)){
        fairy.velocityX=5
       }
   
    if (keyDown(DOWN_ARROW)){
        star.velocityY=5
       }
  
    if (star.position.y>470){
        fairy.changeAnimation("stop", fairyImg2)
        fairy.velocityX=0
        star.velocityY=0
       }  
   
  drawSprites();

}

function keyPressed() {
	//write code here
}
