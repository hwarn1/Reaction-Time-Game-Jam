function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
  
newBox = new Box(50,50);
newBox.display(newBox);
  
}


var clickedTime;
var createdTime = Date.now();
var reactionTime;


function draw() {
  
  fill(255);
  textSize(15);
  text("Your reaction time is: " + reactionTime + " seconds", 50,40)
  //console.log(createdTime);
  //console.log(clickedTime);
  //console.log(reactionTime);
}



function mouseClicked() {

  if (mouseX >= newBox.x && mouseX <= newBox.x+50 && mouseY >= newBox.y && mouseY <= newBox.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    newBox.update(newBox);
    newBox.display(newBox);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();

    /*if (((Date.now() - clickedTime)/1000) === 2) { 
      drawBox(newerBox);
      createdTime = Date.now();
    }*/
  }
}
