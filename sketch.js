
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope5,bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;
    bobDiameter = 40;
	//Create the Bodies Here.
	roof = new Roof();
	startBobPositionX = width/2;
	startBobPositionY = height/4+500;
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter/2);
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter/2);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter/2);
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter/2);
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter/2);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3 = new Rope(bob3.body,roof.body,0, 0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1, 0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2, 0)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  ellipseMode(RADIUS);
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-15,y:0});
	}
}