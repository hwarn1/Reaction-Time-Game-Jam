function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
}

var Box = function(x,y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  //this.color = color;
}

newBox = new Box(50,50);
newerBox = new Box(100,100);

var clickedTime;
var createdTime;
var reactionTime;


var drawBox = function(box) {
  
  fill(255,255,255);
  rect(box.x, box.y, box.width, box.height);
}



function draw() {
  
  drawBox(newBox);
  
}


function mouseClicked() {
  if (mouseX >= newBox.x && mouseX <= newBox.x+50 && mouseY >= newBox.y && mouseY <= newBox.y+50) {
    background(100,100,250);
    drawBox(newerBox);
  }
  
  
}





















