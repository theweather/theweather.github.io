//Set global variable that would contain the position, velocity and the html element "ball"

//write a function that can change the position of the html element "ball"

var ball = document.getElementById('ball');
var ball2 = document.getElementById('ball2');

var positionX = 20;
var positionY = 100;
var velocity = 5;
var reverseX = false;
var reverseY = false;

function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (reverseX) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
    ball2.style.left = (positionX * 2) + "px";
  } else {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
    ball2.style.left = (positionX * 2) + "px";
  }

  if (reverseY) {
    positionY = positionY - velocity;
    ball.style.top = positionY + "px";
    ball2.style.top = (positionY * 2) + "px";
  } else {
    positionY = positionY + velocity;
    ball.style.top = positionY + "px";
    ball2.style.top = (positionY * 2) + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin
  ) {
    reverseX = !reverseX;
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverseY = !reverseY;
  }
}


// This call the moveBall function every 50ms
setInterval(moveBall, 50);
