const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(200,200,50,50); 
    //box2 = new Box(240,100,50,80);

    ground1 = new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

    //box1.display();
    //box2.display();

    ground1.display();
}