//based on: https://codepen.io/cliff538/pen/GRYXqV
var times = [];
var sum = 0;


function getRandomColor() {
  
  var colour;
  colour =  (Math.random(0,255), Math.random(100,200), Math.random(150,255));
  
  /*var letters = "0123456789ABCDEF".split(" ");
  var color = "#";
  for (var i= 0; i<6;i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  
  return color;*/
  
}


var clickedTime;
var createdTime;
var reactionTime;


//make each box
function makeBox() {
  
  var time = Math.random();
  time = time * 3000;
  
  setTimeout(function() {
    
    if(Math.random()>0.5) {
      document.getElementById("box").style.borderRadius="100px";
    } else {
      
      document.getElementById("box").style.borderRadius="0";
      
    }
    
    var top = Math.random();
      top = top * 300;
    var left = Math.random();
    left = left * 500;
    
    document.getElementById("box").style.top = top +"px";
    document.getElementById("box").style.left = left +"px";
    
    document.getElementById("box").style.backgroundColor = getRandomColor();
    
    document.getElementById("box").style.display = "block";
    
    createdTime = Date.now();

  }, time);
  
}



//when box is clicked, define variables and calculate times, then make a new box
document.getElementById("box").onclick = function() {
  
  clickedTime = Date.now();
  
  reactionTime = (clickedTime-createdTime)/1000;
  
 
  document.getElementById("printReactionTime").innerHTML = "Your Reaction Time is: " + reactionTime + " seconds";

  
  this.style.display = "none";
  
  
   //create reaction times array and push all times into it, then calculated the average of all the reaction times and display it on the screen
  // var reactimes = [];
  times.push(reactionTime);
  
    // var sum = 0;
    for (var i = 0; i < times.length; i++) {
      sum += times[i];
    }
    
    var average = sum/times.length;
    //text("Average: " + average, 20, 100);
    //console.log(average);
    //console.log(times.length);
    //console.log(sum);
    //console.log(times[length]);
  
  document.getElementById("printAverage").innerHTML = "Average: " + average + " seconds";
  
  
  makeBox();

  
}


//display the first box
makeBox();

