nosex= 0;
nosey= 0;

function preload() {
    cn=loadImage("https://i.postimg.cc/YqVKdrs9/580b57fbd9996e24bc43bed5.png");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}

function modelLoaded() {
console.log ("modelisloaded");

}

function gotPoses(results) {
if(results.length>0) {
    console.log(results);
    console.log("nosex="+ nosex);
    console.log("nosey="+ nosey);
    nosex=results[0].pose.nose.x-20;
    nosey=results[0].pose.nose.y-15;
}

}

function draw() {
    image(video,0,0,300,300);
    image(cn,nosex,nosey,30,30);

}
