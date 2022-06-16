class Box {

  constructor(x,y) {
  this.x = x;
  this.y = x;
  this.width = 50;
  this.height = 50;
  //this.color = color;
}

  display(box) {
  
  fill(255,255,255);
  rect(box.x, box.y, box.width, box.height);

  }
  
  update(box) {
    
    this.x = random(50,350);
    this.y = random(50,350);
    
  }
  
}
