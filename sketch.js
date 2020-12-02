
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ground;
var paper;

var dustbin1,dustbin2,dustbin3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(85,500,20);

	ground = new Ground(400,680,800,20);
	
	dustbin1 = new Dustbin (630,600,230,20);
	dustbin2 = new Dustbin (755,500,20,140);
	dustbin3 = new Dustbin (505,500,20,140);


	Engine.run(engine);
}


function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);

	ground.display();
	 
	paper.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	keyPressed();
  
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce(Paper.body,Paper.body.position,{x:205,y:85})
	}
}



