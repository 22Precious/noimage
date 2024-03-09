status="";
img="";

function preload(){
    img=loadImage('Curtains.jpeg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    status=true;
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    }