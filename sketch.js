const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var SlingShot;
var Poly;
var Ground1,Ground2;
var score = 0;



function preload(){
}

function setup(){
var canvas = createCanvas(1300,600);

engine = Engine.create();
world = engine.world;

Ground1 = new Ground(1100,300,200,20);
Ground2 = new Ground(700,550,250,20);

box1 = new Box(625,500,50,50);
box2 = new Box(625,450,50,50);
box3 = new Box(625,400,50,50);
box4 = new Box(625,350,50,50);
box5 = new Box(675,500,50,50);
box6 = new Box(675,450,50,50);
box7 = new Box(675,400,50,50);
box8 = new Box(675,350,50,50);
box9 = new Box(725,500,50,50);
box10 = new Box(725,450,50,50);
box11 = new Box(725,400,50,50);
box12 = new Box(725,350,50,50)
box13 = new Box(775,500,50,50);
box14 = new Box(775,450,50,50);
box15 = new Box(775,400,50,50);
box16 = new Box(775,350,50,50);

box17 = new Box(1050,250,50,50);
box18 = new Box(1050,200,50,50);
box19 = new Box(1050,150,50,50);
box20 = new Box(1100,250,50,50);
box21 = new Box(1100,200,50,50);
box22 = new Box(1100,150,50,50);
box23 = new Box(1150,250,50,50);
box24 = new Box(1150,200,50,50);
box25 = new Box(1150,150,50,50);

poly = new Polygon(500,400,90);

sling = new Sling(poly.body, { x: 200, y: 250 })

}

function draw(){
 background('blue');


Engine.update(engine);

textSize(30);
fill("red");
text("Score : " + score,100,100);

textSize(30);
fill('red');
text("Press Space To Get The Pentagon Back",350,100);

box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();
box17.display();
box17.score();
box18.display();
box18.score();
box19.display();
box19.score();
box20.display();
box20.score();
box21.display();
box21.score();
box22.display();
box22.score();
box23.display();
box23.score();
box24.display();
box24.score();
box25.display();
box25.score();
sling.display();
poly.display();
Ground1.display();
Ground2.display();
}

function mouseDragged() {
    Matter.Body.setPosition(poly.body, { x: mouseX, y: mouseY })
  }
  
  
  function mouseReleased() {
    sling.fly();
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(poly.body,{x:500,y:40});
    sling.Launch(poly.body);
    }
    }

   
