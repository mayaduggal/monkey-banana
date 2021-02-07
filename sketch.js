const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState="onSling";
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    box1 = new Box(660,320,70,70);
    box2 = new Box(960,320,70,70);
    box3 = new Box(700,240,70,70); 
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6=new Box(810, 320, 70, 70);
   
   
    banana1 = new Pig(810, 150);
    banana2 = new Pig(810, 220);
    banana3=new Pig(730, 320);
    banana4=new Pig(890, 320);

    log1 = new Log(810,260,400, PI/2);
    log3 =  new Log(810,180,300, PI/2);
   

    bird = new Bird(200,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    background(300);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ground.display();
    log1.display();
    log3.display();

    banana1.display();
    banana2.display();
    banana3.display();
    banana4.display();

    bird.display();
   
    slingshot.display();    

    textSize(20);
    text("help the monkey get to the bananas", 400, 30)
}

function mouseDragged(){
    if (gameState!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}