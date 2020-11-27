const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,550,10);
	bob2=new Bob(220,550,10);
	bob3=new Bob(240,550,10);
	bob4=new Bob(260,550,10);
	bob5=new Bob(280,550,10);

	roof=new Roof(240,100,100,15);

	string1=new Rope(bob1.body,{1,12});
	string2=new Roof(bob2.body,{2,24});
	string3=new Roof(bob3.body,{3,36});
	string4=new Roof(bob4.body,{4,48});
	string5=new Roof(bob5.body,{5,60});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}



