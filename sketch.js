//Create variables here
var dog,happyDog,sadDog;
var foodStock,foods;
var database

function preload()
{
  sadDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
   
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog=createSprite(400,400)
  dog.addImage(happyDog);
  dog.scale=0.5;
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  foods=foods-1;
  writeStock(foods);
  dog.addImage(sadDog);
}
  drawSprites();
  //add styles here
textSize(20);
fill("white")
text("To feed the dog press UP_ARROW key",40,50)
text("Food= "+foods,200,100)

}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  
  database.ref('/').update({
    food:x
  })
}

