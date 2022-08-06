// For details, you may want to look @http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html 
// For video tutorial, you may want to look @https://www.youtube.com/watch?v=0dwJ-bkJwDI&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=79https://www.youtube.com/watch?v=f5QBExMNB1I
// A warning! The tutorial The Coding Train made is in processing not the P5.js.

// Changes up to user...

// Mode is variable k in the link representing the ratio between each circle's speed. 
let mode = 5;

// Variable for filling the where points the smallest circle goes.
let fillThePoints = false;

// The speed of the second circle can be represented as the starting speed.
let angularSpeed = 0.001;

// Simply, iterations per each single frame.
// No doubt that, it will make points or the circles drawn much better but will process them much more.
// So, thinking twice may be useful :)
let iterationsPerFrame = 1;

// To draw next circle either inner or outer.
let circleMode = 1;
// For inner, -1 and outer 1.

let isPaused = false;

let parentNode = null, nodeCount = 40;

let points = [];

class Circle{
  constructor(x, y, r, parentNode, angularSpeed){
    this.x = x;
    this.y = y;
    this.r = r;
    this.parentNode = parentNode;
    this.angularSpeed = angularSpeed;
    this.child = null;
    this.angle = 0;
  }
  update(ratio){
    this.angle += this.angularSpeed;
    this.newX = (this.r + circleMode * this.parentNode.r) * Math.cos(this.angle * ratio);
    this.newY = (this.r + circleMode * this.parentNode.r) * Math.sin(this.angle * ratio);
    this.x = this.newX + this.parentNode.x;
    this.y = this.newY + this.parentNode.y;
  }
  draw(){
    noFill();
    stroke(255);
    circle(this.x, this.y, 2 * this.r);
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  parentNode = new Circle(windowWidth / 2, windowHeight / 2, 100, null, angularSpeed);
  let currentNode = parentNode;
  for(let i = 0; i < nodeCount - 1; i++){
    currentNode.child = new Circle(currentNode.x + currentNode.r * 1.5, currentNode.y, currentNode.r / 2, currentNode, -mode * currentNode.angularSpeed);
    currentNode = currentNode.child;
  }  
}

function draw(){
  if(isPaused){
    return;
  }
  background(0);
  for(let iteration = 0; iteration < iterationsPerFrame; iteration++){
    let currentNode = parentNode.child;
    while(currentNode != null){
      currentNode.update(1 / iterationsPerFrame);
      currentNode = currentNode.child;
    }
    currentNode = parentNode;
    while(currentNode != null){
      currentNode.draw();
      if(currentNode.child == null){
        points.push(currentNode.x, currentNode.y)
      }
      currentNode = currentNode.child;
    }
    if(fillThePoints){
      fill(255);
      beginShape();
    }
    else{
      noFill();
      beginShape(POINTS);
    }
    for(let i = 0; i < points.length; i+=2){
      vertex(points[i], points[i + 1]);
    }
    endShape();
  }
}

function mousePressed(){

}

function keyPressed(){
  if(key == ' '){
    isPaused = !isPaused;
  }
}