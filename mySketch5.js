function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
  text("Click each box as quickly as possible to test your reaction time.")
  
newBox = new Box(50,50);
newBox.display(newBox);
  
  
}


var clickedTime;
var createdTime = Date.now();
var reactionTime;
var times = [];
var sum = 0;
var average;

function calcAverage() {
  //create reaction times array and push all times into it, then calculated the average of all the reaction times and display it on the screen
  
    // var sum = 0;
    for (var i = 0; i < times.length; i++) {
      sum += times[i];
    }
    
    average = sum/times.length;
   
}

function Text() {
  
  fill(255);
  textSize(15);
  text("Your reaction time is: " + reactionTime + " seconds", 50,40)
   text("Your average reaction time is: " + average + " seconds", 50, 70);
  
}

function draw() {
  
  
  
  //console.log(createdTime);
  //console.log(clickedTime);
  //console.log(reactionTime);
  console.log(sum);
  console.log(average)
}



function mouseClicked() {

  if (mouseX >= newBox.x && mouseX <= newBox.x+50 && mouseY >= newBox.y && mouseY <= newBox.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    newBox.update(newBox);
    newBox.display(newBox);
    
    reactionTime = (clickedTime - createdTime)/1000;
    times.push(reactionTime);
    calcAverage();
    Text();
    createdTime = Date.now();

    /*if (((Date.now() - clickedTime)/1000) === 2) { 
      drawBox(newerBox);
      createdTime = Date.now();
    }*/
  }
}
