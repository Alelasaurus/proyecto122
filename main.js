function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(110,400);
video=createCapture(VIDEO);
video.hide();
color="";
}

function draw(){
image(video,0,0,640,480);
tint(color);
}

function take_snapshot(){
    save('ivan.png');
}

function filtro(){
    color=document.getElementById("color_name").value;
}