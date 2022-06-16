function setup() {
  //initial display
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 250);
  fill(255);
  text("Click each box as quickly as possible to test your reaction time.", 25, 25);
  
  //display first box according to class "Box"
newBox = new Box(50,50);
newBox.display(newBox);
  

}

//declare all gloabal variables
var clickedTime;
var createdTime = Date.now();
var reactionTime;
var times = [];
var sum;
var average;
var delayStart;
var show = true;


//all text that shows up after box is clicked
function Text() {
  
  fill(255);
  textSize(15);
  
  //says latest reaction time
  text("Your reaction time is: " + reactionTime + " seconds", 50,40)
  //says average of all reaction times
  text("Your average reaction time is: " + average + " seconds", 50, 70);
  
  
}


function draw() {
  
  //only call reDraw() function if show variable is false (which means it will only call it once until the next box is clicked)
  if (show === false) {
  reDraw();
  }
  
}



function mouseClicked() {

  //if mouse is clicked and mouse is inside the box:
  //set clickedTime and delayStart to now, and the show boolean to false (since box should disappear)
  //re-draw the background to hide old boxes and text
  //calculate latest and average reaction times and display text
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
    
    //calculate average
    average = sum/times.length;
    
    //display Text function
    Text();

  }
}


function reDraw() {

  //if the difference between now and the time the last box was clicked is greater than 1, draw the next box and set created time to now
  if ((Date.now() - delayStart)/1000 >= 1) {
    newBox.update(newBox);
    newBox.display(newBox);
    createdTime = Date.now();
    
    //the box is now being displayed on the screen so the show boolean should be set to true
    show = true;
  }
  
}
