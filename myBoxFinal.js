class Box {

  //base Box object and parameters
  constructor(x,y) {
  this.x = x;
  this.y = x;
  this.width = 50;
  this.height = 50;
  this.color = color;
}

  //display the box on the screen according to whatever version is called
  display(box) {
  
  //fill(255,255,255);
  rect(box.x, box.y, box.width, box.height);

  }
  
  //update the box to be drawn in a random spot and in a random color
  update(box) {
    
    this.x = random(50,windowWidth-50);
    this.y = random(50,windowHeight-50);
    this.color = fill(random(255),random(255),random(255));
    
  }
  
}
