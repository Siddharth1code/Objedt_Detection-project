function back()
{
    window.location="index.html";
}

img="";
Status="";
function preload()
{
    img=loadImage('water_bottle.jpg');
}
function setup() 
{
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetectors =ml5.objectDetector('cocossed',modelLoaded);
    document.getElementById("status").innerHTML= "Status: object Detecting";
}
function draw() 
{
    image(img,0,0,640,420);
    fill("red");
    text("water bottle",300,165);
    noFill();
    stroke("black");
    rect(280,60,90,350);

    
}
function modelLoaded()
{
    console.log("model loaded");
    Status=true;
    objectDetectors.detect(img,gotResults);
}

function gotResults()
{
    if(error)
    {
        console.log("error");
    }l
    console.log("results");
}