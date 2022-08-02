img = "";
status = "";
object = [];

function modelLoaded(){
    console.log("Model Loaded");
    satus = "true";
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function preload()
{
img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas= createCanvas(640, 420);
    canvas.centre();    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img, 0, 0, 640,420);
    if(status != ""){
        for(i = 0;i < object.length;i++){
            document.getElementById("Status").innerHTML="Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text (objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
}