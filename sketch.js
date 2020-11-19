
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
var boy,boyImg;
var launchForce=100;

function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj=new stone(235,420,30);
treeObj=new tree(600,350,50,50);
mangoObj1=new mango(200,200,50,50)
/*mangoObj2=new mango
mangoObj3=new mango
mangoObj4=new mango
mangoObj5=new mango
mangoObj6=new mango
mangoObj7=new mango
mangoObj8=new mango
mangoObj9=new mango
mangoObj10=new mango
mangoObj11=new mango
mangoObj12=new mango*/
groundObj=new Ground(1050,580);
boy=createSprite(200,400,50,100);
boy.addImage(boyImg);
boy.scale=0.1;
slingshotObj = new SlingShot(stoneObj.body,{x:200,y:100});

var render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeObj.display();
  stoneObj.display();
  mangoObj1.display();
  /*mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();*/
  groundObj.display();
  boy.display();
  slingshotObj.display();

  detectollision(stoneObj,mangoObj1);
  /*detectollision(stoneObj,mangoObj2);
  detectollision(stoneObj,mangoObj3);
  detectollision(stoneObj,mangoObj4);
  detectollision(stoneObj,mangoObj5);*/
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.setPosition
	stoneBodyPosition=lstone.body.setPosition

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body.false);
		}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		slingshotObj.attach(stoneObj.body);
	}
}

