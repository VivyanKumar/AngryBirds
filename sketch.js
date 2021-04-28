
// Modules - Engine, World, Bodies

// Nicknames - namespacing

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground, box;
var ground_options,box_options;

function setup(){
    createCanvas(800,500);

    engine = Engine.create(); // engine = Matter.Engine.create();
    world = engine.world;

    ground_options = {
        isStatic : true,
    };

    box_options = {
        restitution : 1.5
    };

    ground = Bodies.rectangle(400,480,800,20,ground_options);
    World.add(world,ground);

    box = Bodies.rectangle(400,100,50,50,box_options);
    World.add(world,box);

    console.log(ground);
    console.log(box);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(box.position.x,box.position.y,50,50);
}