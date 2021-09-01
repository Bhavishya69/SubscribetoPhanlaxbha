const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3,boggies4,boggies5,boggies6;
var chain1;
var trainSound 
var crashSound
var flag = 0;



function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  Buggie1= new Buggies(50,170,50,50);
  Buggie2= new Buggies(200,170,50,50);
  Buggie3= new Buggies(350,170,50,50); 
  Buggie4= new Buggies(500,170,50,50);
  Buggie5= new Buggies(650,170,50,50);
  Buggie6= new Buggies(800,170,50,50);
  rock1= new rock(1100,170,90,90);
  chain1= new chain(Buggie1.body,Buggie2.body);
  chain2= new chain(Buggie2.body,Buggie3.body);
  chain3= new chain(Buggie3.body,Buggie4.body);
  chain4= new chain(Buggie4.body,Buggie5.body);
  chain5= new chain(Buggie5.body,Buggie6.body);



}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  Buggie1.show();
  Buggie2.show();
  Buggie3.show();
  Buggie4.show();
  Buggie5.show();
  Buggie6.show();
  rock1.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();  
  chain5.show();

 

    var collision = Matter.SAT.collides(Buggie6.body,rock1.body);
  if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }



  }





  



function keyPressed()
{
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(Buggie6.body,{x:Buggie6.body.position.x,y:Buggie6.body.position.y},
      {x:0.5,y:0});
      trainSound.play();
  }
}