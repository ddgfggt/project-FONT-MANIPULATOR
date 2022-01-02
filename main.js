function setup(){
    canvas=createCanvas(550,400);
    canvas.position(750,120);
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,80);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is enesilised");
}
function gotPoses(result){
console.log("result");
}