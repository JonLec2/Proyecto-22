var starImg,bgImg, hadaImg, hadaImg2, starImg1;
var star, starBody;
var hada, hadaBody;
var sonido
var bloque1, bloque2;
var star1, starBody1

var world
var engine

//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
hadaImg= loadImage("images/fairyImage1.png")
hadaImg2=loadImage("images/fairyImage20.png")
sonido=loadSound("sound/JoyMusic.mp3")
starImg1=loadImage("images/star.png")

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;
	//escribe el código para reproducir el sonido fairyVoice
sonido.loop();

	//crea el sprite del hada, y agrega la animación para el hada

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.07;
	
star1=createSprite(250, 30);
star1.addImage(starImg1);
star1.scale=0.3

	hada=createSprite(200, 530, 10, 10)
	hada.addAnimation("volar", hadaImg, hadaImg2);
    hada.scale=0.2;


	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	starBody1 = Bodies.circle(250 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody1);
	

	Engine.run(engine);

}


function draw() {
  background(bgImg);


  star.x= starBody.position.x 
  star.y= starBody.position.y 

star1.x=starBody1.position.x
star1.y=starBody1.position.y

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada

if(star.y> 470 && starBody.position.y>470 && hada.x>550){
	Matter.Body.setStatic(starBody, true)

}

if(star1.y> 470 && starBody1.position.y>470 && hada.x<250){
	Matter.Body.setStatic(starBody1, true)

}


keyPressed();


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		Matter.Body.setStatic(starBody1,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	
	if(keyDown("left_arrow")){
		hada.x=hada.x-6
	}

    if(keyDown("right_arrow")){
		hada.x=hada.x+6
	}

}
