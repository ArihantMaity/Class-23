const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box,box2;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

ground=new grounds(200,350,400,10);

box2=new boxes(220,300,50,80);
 box=new boxes(200,200,50,80);

    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box.display();
    box2.display();
   
    ground.display();
}