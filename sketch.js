var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy , fairyImg
var fairySound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png" ,
	 "images/fairyImage2.png")

	 fairySound = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(400,400,20,20)
	fairy.addAnimation("fairy" , fairyImg)
	fairy.scale = 0.25
	fairy.debug = false
	fairy.setCollider("rectangle",500,-20,50,50)


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
keyPressed()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true); 
    fairySound.play()
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyDown("left_arrow")){

fairy.x = fairy.x - 5
	}

	if(keyDown("right_arrow")){

		fairy.x = fairy.x + 5
			}
	//writw code to move fairy left and right
	
}
