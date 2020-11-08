
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImg;

function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj=new stone(235,420,30);
treeObj=new tree(600,350,50,50);
mangoObj1=new mango
mangoObj2=new mango
mangoObj3=new mango
mangoObj4=new mango
mangoObj5=new mango
groundObj=new Ground(400,680,400,20);
boy=createSprite(200,400,50,100);
boy.addImage("boyImg");
slingshot = new SlingShot(stoneObj.body,{x:200,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeObj.display();
  stoneObj.display();
  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  groundObj.display();
  boy.display();
  slingshot.display();

  detectollision(stoneObj,mangoObj1);
  detectollision(stoneObj,mangoObj2);
  detectollision(stoneObj,mangoObj3);
  detectollision(stoneObj,mangoObj4);
  detectollision(stoneObj,mangoObj5);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
function detectollision(lstane,lmango){
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
		launcherObject.attach(stoneObj.body);
	}
}

