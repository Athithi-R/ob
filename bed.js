img="";
status="";
obj=[];

function mainpg(){
   window.location="index.html";
}

function preload(){
  img=loadImage('bedroom.jpg');
  
}

function setup(){
   canvas=createCanvas(640,420);
   canvas.center();
   canvas.position(450,220);
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  obj=results;
}


function draw() {
  image(img,0,0,640,420);
  if (status != ""){
    for(i=0; i<obj.length; i++ ){
        document.getElementById("status").innerHTML="status:objectdetector";
        fill("green");
        percent=floor(obj[i].confidence*100);
        text(obj[i].label+""+percent+"%",obj[i].x+15,obj[i].y+15);
        noFill();
        stroke("green");
        rect(obj[i].x, obj[i].y,obj[i].width,obj[i].height);
    }
}

  
}




