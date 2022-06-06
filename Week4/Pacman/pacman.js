var pos = 0;
const pacArray = [['./images/PacMan1.png','./images/PacMan2.png'],['./images/PacMan3.png','./images/PacMan4.png']
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
  }
}
setInterval(Run, 200);

var pageWidth = window.innerWidth;
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) {
    direction = 1;
    console.log('pos? ' + pos + ' | 0 or 1? ' + direction);
  }
  if (direction == 1 && pos < 0) {
    direction = 0;
    console.log('pos? ' + pos + ' | 1 or 0? ' + direction);
  }
  return direction
}

//Please do not change
if (typeof module !== 'undefined') {
  module.exports = checkPageBounds; Run
}
