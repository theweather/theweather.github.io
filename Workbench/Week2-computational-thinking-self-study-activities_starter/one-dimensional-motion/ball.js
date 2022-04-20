//Set global variable that would contain the position, velocity and the html element "ball"

//write a function that can change the position of the html element "ball"

var ball = document.getElementById('ball');
var positionX = 20;
var positionY = 45;
var velocity = 5;
var reverse = false;

function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}


// This call the moveBall function every 50ms
setInterval(moveBall, 50);
