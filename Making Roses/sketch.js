// For details, you may want to look @https://en.wikipedia.org/wiki/Rose_(mathematics)
// For video tutorial, you may want to look @https://www.youtube.com/watch?v=f5QBExMNB1I

let k = 1 / 3 , a = 200;
// k (variable) is defined here as n / d so,
// for the best result you may want to use two variables as n and d
// It's needed for the drawing part no doubt! 

let isPaused = false;

let precision = 10000;
// All up to user's demands...

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  if(isPaused) return;

  background(0);
  stroke(255);

  for(let iteration = 0; iteration <= 8 * precision; iteration++){
    let theta = map(iteration, 0, precision, 0, 2 * PI);
    let pr = a * cos(k * theta);
    point(pr * cos(theta) + windowWidth / 2, windowHeight / 2 + pr * sin(theta));
  }
}

function keyPressed(){
  if(key == ' '){
    isPaused = !isPaused;
  }
}