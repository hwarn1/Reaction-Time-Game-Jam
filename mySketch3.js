function setup() {
  createCanvas(400, 400);
  background(100, 100, 250);
  
  drawBox(newBox);

}

var Box = function(x,y) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 50;
  //this.color = color;
}

newBox = new Box(50,50);
newBox2 = new Box(100,100);
newBox3 = new Box(300,100);
newBox4 = new Box(150,300);
newBox5 = new Box(50,350);
newBox6 = new Box(300,90);
newBox7 = new Box(175,260);
newBox8 = new Box(250,250);
newBox9 = new Box(320,110);
newBox10 = new Box(90,340);


var clickedTime;
var createdTime = Date.now();
var reactionTime;


var drawBox = function(box) {
  
  fill(255,255,255);
  rect(box.x, box.y, box.width, box.height);
  
}



function draw() {
  
  fill(255);
  text("Your reaction time is: " + reactionTime + " seconds", 50,40)
  //console.log(createdTime);
  //console.log(clickedTime);
  //console.log(reactionTime);
}



function mouseClicked() {

  if (mouseX >= newBox.x && mouseX <= newBox.x+50 && mouseY >= newBox.y && mouseY <= newBox.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox2);    
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();

    /*if (((Date.now() - clickedTime)/1000) === 2) { 
      drawBox(newerBox);
      createdTime = Date.now();
    }*/
  }
  
  
    if (mouseX >= newBox2.x && mouseX <= newBox2.x+50 && mouseY >= newBox2.y && mouseY <= newBox2.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox3);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox3.x && mouseX <= newBox3.x+50 && mouseY >= newBox3.y && mouseY <= newBox3.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox4);
    
    reactionTime = (clickedTime - createdTime)/1000;
    console.log(reactionTime);
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox4.x && mouseX <= newBox4.x+50 && mouseY >= newBox4.y && mouseY <= newBox4.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox5);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox5.x && mouseX <= newBox5.x+50 && mouseY >= newBox5.y && mouseY <= newBox5.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox6);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox6.x && mouseX <= newBox6.x+50 && mouseY >= newBox6.y && mouseY <= newBox6.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox7);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox7.x && mouseX <= newBox7.x+50 && mouseY >= newBox7.y && mouseY <= newBox7.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox8);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox8.x && mouseX <= newBox8.x+50 && mouseY >= newBox8.y && mouseY <= newBox8.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox9);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox9.x && mouseX <= newBox9.x+50 && mouseY >= newBox.y && mouseY <= newBox9.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    drawBox(newBox10);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }
  
  if (mouseX >= newBox10.x && mouseX <= newBox10.x+50 && mouseY >= newBox10.y && mouseY <= newBox10.y+50) {
    clickedTime = Date.now();
    background(100,100,250);
    //drawBox(newBox);
    
    reactionTime = (clickedTime - createdTime)/1000;
    createdTime = Date.now();
    
  }

}

