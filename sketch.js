
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1400,650);
	paperObject=new paper(100,400,40);
	groundObject=new ground(width/2,690,width,50);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();

  fill(0);
  text("Press up and try to throw the paper into the bin!!",500,500)
   
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:42,y:-50});
  	}
}




