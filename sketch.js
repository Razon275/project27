
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Bobobj1,Bobobj2,Bobobj3,Bobobj4,Bobobj5;
var Roof,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Roof=new roof(400,200,300,20);
	Bobobj1=new Bob(300,400,50,50);
	Bobobj2=new Bob(350,400,50,50);
	Bobobj3=new Bob(400,400,50,50);
	Bobobj4=new Bob(450,400,50,50);
	Bobobj5=new Bob(500,400,50,50);
	chain1=new Chain(Bobobj1.body,Roof.body);
	chain2=new Chain(Bobobj2.body,Roof.body);
	chain3=new Chain(Bobobj3.body,Roof.body);
	chain4=new Chain(Bobobj4.body,Roof.body);
	chain5=new Chain(Bobobj5.body,Roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Roof.display();
  Bobobj1.display();
  Bobobj2.display();
  Bobobj3.display();
  Bobobj4.display();
  Bobobj5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



