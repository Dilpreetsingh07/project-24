
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50,400,40);
	ground = new Ground(400,680);
	standstick1 = new Standstick(700,580,10,100);
	standstick2 = new Standstick(850,580,10,100);
	downstick = new Downstick(780,680,150,10);

	Engine.run(engine);
	
}


function draw() {
  background("blue");
  Engine.update(engine)
  paper1.display();
  ground.display();
  standstick1.display();
  standstick2.display();
  downstick.display();

  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === (UP_ARROW)){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
	}
}


