const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,800);
  // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 790, 800, 20);
  for(var k=0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 75));
  }
  for(var j = 15; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j, 175));
  }

  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 275));
  }
  for(var j = 15; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j, 375));
  }
}
 
var divisionHeight=300;
var particles = [];
var plinko = [];
var divisions = [];

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k=0; k <divisions.length; k = k + 1) {
   divisions[k].display();

  }
  for(var k=0; k <plinko.length; k = k + 1) {
    plinko[k].display();
 
   }
   if(frameCount%50===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
  for(var k=0; k <particles.length; k = k + 1) {
    particles[k].display();
 }
   
 ground.display();
  drawSprites();
}