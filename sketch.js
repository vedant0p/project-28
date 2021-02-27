
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Constraint = Matter.Constraint;

  function preload()
  {	
	boy=loadImage("Plucking mangoes/boy.png");

  }

  function setup() {
    createCanvas(1200, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = new Ground(600,580,1200,20);
    
    stoneOj = new Stone(250,400,50)

    treeOj = new Tree(1000,570,600,600)

    launcher = new Launcher(stoneOj.body,{x: 250 ,y: 400});

    mango1=new Mango(1100,100,30);
    mango2=new Mango(1170,130,30);
    mango3=new Mango(1010,140,30);
    mango4=new Mango(1000,70,30);
    mango5=new Mango(1100,70,30);
    mango6=new Mango(1000,230,30);
    mango7=new Mango(900,230,40);
    mango8=new Mango(1140,150,40);
    mango9=new Mango(1100,230,40);
    mango10=new Mango(1200,200,40);
    mango11=new Mango(1120,50,40);
    mango12=new Mango(900,160,40);
    
    


    Engine.run(engine);
    
  }

  function draw() {
    rectMode(CENTER);
    background(200);

    image(boy ,200,280,300,400);


    treeOj.display();
    ground.display();
    stoneOj.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
  
    launcher.display();

    detectCollision(stoneOj,mango1)
    detectCollision(stoneOj,mango2)
    detectCollision(stoneOj,mango3)
    detectCollision(stoneOj,mango4)
    detectCollision(stoneOj,mango5)
    detectCollision(stoneOj,mango6)
    detectCollision(stoneOj,mango7)
    detectCollision(stoneOj,mango8)
    detectCollision(stoneOj,mango9)
    detectCollision(stoneOj,mango10)
    detectCollision(stoneOj,mango11)
    detectCollision(stoneOj,mango12)


    drawSprites();
  
  }

  function mouseDragged() {
      Matter.Body.setPosition(stoneOj.body,{x: mouseX,y: mouseY});
  }

  function mouseReleased(){
      launcher.fly();
  }

  function keyPressed(){
      if (keyCode === 32){
    Matter.Body.setPosition(stoneOj.body, {x:200,y:450})
    launcher.attach(stoneOj.body)
      }
    }
    
  function detectCollision(Lstone,Lmango) {
    mangoBodyPosition = Lmango.body.position
    stoneBodyPosition = Lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance<=Lmango.r+Lstone.r) {
      Matter.Body.setStatic(Lmango.body,false);
    }
  }
