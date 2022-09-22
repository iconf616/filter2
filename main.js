lips_x = 0 ;
lips_y = 0 ;

function preload()
{

}

function setup()
{
    canvas = createCanvas(400 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400 , 400);
    video.hide();
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("lips x = " + results[0].pose.lips.x);
        console.log("lips y = " + results[0].pose.lips.y);

    }
}



function draw()
{
image( video , 0 , 0 , 400 ,400 );
}

function take_snapshot()
{
    save("myselfie_png");
}

