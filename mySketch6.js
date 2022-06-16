function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 250);
  fill(255);
  text("Click each box as quickly as possible to test your reaction time.", 25, 25);
  
newBox = new Box(50,50);
newBox.display(newBox);
  

}


var clickedTime;
var createdTime = Date.now();
var reactionTime;
var times = [];
var sum;
var average;
var delayStart;
var show = true;


function Text() {
  
  fill(255);
  textSize(15);
  text("Your reaction time is: " + reactionTime + " seconds", 50,40)
  text("Your average reaction time is: " + average + " seconds", 50, 70);
  
  
}

function draw() {
  
  if (show === false) {
  reDraw();
  }
  
}



function mouseClicked() {

  if (mouseX >= newBox.x && mouseX <= newBox.x+50 && mouseY >= newBox.y && mouseY <= newBox.y+50) {
    clickedTime = Date.now();
    delayStart = Date.now();
    show = false;

    background(100,100,250);

    
    //calculate reaction time
    reactionTime = (clickedTime - createdTime)/1000;
    
    //push latest reactionTime into times array, then calculate the average of all the reaction times and display it on the screen
    times.push(reactionTime);
    
    var sum = 0;

    //loop through each element in the array and add it to the sum
    for (var i = 0; i < times.length; i++) {
      sum += times[i];
    }
    
    average = sum/times.length;
    
    Text();
    createdTime = Date.now();

  }
}


function reDraw() {

  if ((Date.now() - delayStart)/1000 >= 1) {
    newBox.update(newBox);
    newBox.display(newBox);
    
    show = true;
  }
  
}
