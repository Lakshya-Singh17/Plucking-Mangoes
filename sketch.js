
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,stone;
var slingshot,treeImg,tree;
var boyImg,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;


function preload()
{
	boyImg = loadImage("Sprites/boy.png");
	tree = loadImage("Sprites/tree.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(80,350,40,40);
	slingshot = new SlingShot(stone.body,{x:100,y:600});

	mango1 = new Mango(600,100);
	mango2 = new Mango(700,130);
	mango3 = new Mango(650,200);
	mango4 = new Mango(850,250);
	mango5 = new Mango(540,230);
	mango6 = new Mango(800,180);
	mango7 = new Mango(920,175);
	mango8 = new Mango(760,80);

	boy = createSprite(150,400);
	boy.addImage("boy",boyImg);
	boy.scale = 0.12;

	ground = new Ground(500,490,1000,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER);
  image(tree,700,280,600,500);

  //mouseDragged();
  mouseReleased();

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
	//Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}


