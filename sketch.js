var starImg,bgImg;
var star, starBody;
var fada;
var imgfada;

//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

    
 starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgfada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    
}

function setup() {
    createCanvas(800, 750);
    

    //escrever código para tocar o som vozFada

    fada = createSprite(400,400);
    fada.addAnimation("asas",imgfada);
    fada.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg);
    
    if(star.y > 470 && starBody.position.y > 470 ){
        Matter.Body.setStatic(starBody,true);
    } 

    if (keyDown("right")) {
        fada.velocityX = 2;
        fada.velocityY = 0;
      }
      
      if (keyDown("left")) {
        fada.velocityX = -2;
        fada.velocityY = 0;
      }
    


    drawSprites();
}