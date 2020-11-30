var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies,
Constraint=Matter.Constraint;

var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var ball;
var Rope;

function setup() 
{
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
ground= new Ground(400,780,800,40);
box1=new Boxes(600,740,60,60);
box2=new Boxes(530,740,60,60);
box3=new Boxes(530,680,60,60);
box4=new Boxes(530,620,60,60);
box5=new Boxes(530,560,60,60);
box6=new Boxes(600,680,60,60);
box7=new Boxes(600,620,60,60);
box8=new Boxes(530,500,60,60);
box9=new Boxes(600,560,60,60);
ball = new WB (300,300,40);
Rope = new rope (ball.body,{x:300,y:300})
}
function draw()
{
   background("black");
   Engine.update(engine);
   textSize(20)
   text("Score : ",20,30);
   fill("white");
  
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   ball.display();
   Rope.display();
}
function mouseDragged(){
   
       Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
       
   }
