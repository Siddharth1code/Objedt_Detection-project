function back()
{
    window.location="index.html";
}

img="";
Status="";
function preload()
{
    img=loadImage('desktop.jpg');
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
    text("laptop",200,130);
    noFill();
    stroke("blue");
    rect(200,100,200,250);

    
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

