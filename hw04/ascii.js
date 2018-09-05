// Marley Medema hw04
//ascii.js

"use strict";

//global variables to keep track of speed, the timer,
//frame index, frames, and the text in the textbox
var speed;
var id;
var counter = 0;
var frames;
var text;

//function to set the initial speed and disable the
//stop button on load
window.onload = function(){
  document.getElementById("stop").disabled = true;
  speed = 250;
};

//function to change the selected animation from the
//drop down menu
function changeAnimation(name){
  var animation = ANIMATIONS[name];
  document.getElementById("textbox").value = animation;
}

//funciton to change the size of the text
function changeSize(value){
  document.getElementById("textbox").style.fontSize = value;
}

//function to change the speed of the interval
function changeSpeed(){
  if(document.getElementById("speed").checked == true){
    speed = 50;
  }else{
    speed = 250;
  }
  if(id){
    clearInterval(id);
  }
  if(document.getElementById("start").disabled){
    id = setInterval(function(){displayFrame();}, speed);
  }
}

//function to display a single frame of the animation
function displayFrame(){
  document.getElementById("textbox").value = frames[counter];
  counter += 1;
  counter = counter % frames.length;
}

//funtion to play the animation
function playAnimation(){
  text = document.getElementById("textbox").value;
  frames = document.getElementById("textbox").value.split("=====\n");
  document.getElementById("start").disabled = true;
  document.getElementById("animation").disabled = true;
  document.getElementById("stop").disabled = false;
  id = setInterval(function(){displayFrame();}, speed);
}

//function to stop the animation
function stopAnimation(){
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("animation").disabled = false;
  clearInterval(id);
  document.getElementById("textbox").value = text;
}
