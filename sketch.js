const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine,world;
var ball,ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {

  isStatic : true
  }

  ground = Bodies.rectangle(200,390,800,20,ground_options);
World.add(world,ground);


var ball_options = {
  restitution : 1
}
ball = Bodies.circle(100,100,50,ball_options);
World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  //drawSprites();
}