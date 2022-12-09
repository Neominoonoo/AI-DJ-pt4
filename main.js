sound = "";
scoreLeftWrist = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
    sound = loadSound("music.mp3");
    
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();



    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 600, 500);

    fill("#00ff00");
    stroke("#00FF00");
    if(scoreLeftWrist> 0.2){
    circle(leftWristX, leftWristY, 20);

    InnumberleftwristY = Number(leftWristY);
    remove_Decimals = floor(InnumberleftwristY);
    volume = remove_Decimals/500;
    document.getElementById("volume").innerHTML= "Volume = "+volume;
    sound.setVolume(volume);
    }

}
function playButton(){
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}
function modelLoaded(){
    console.log("Posenet has loaded.");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("left wrist score = "+scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist x coordinate = "+leftWristX+"Left Wrist y coordinate ="+  leftWristY);

        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist x coordinate = "+rightWristX+"Right Wrist y coordinate ="+  rightWristY);

    }
}