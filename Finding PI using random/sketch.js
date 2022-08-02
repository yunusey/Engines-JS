let radius = 40;

let rx, ry;

let piCount = 0, totalCount = 0;

let isPaused = false;

let bestRatioFound = 0, theCountFound = 0;

let piString = Math.PI.toString();

function setup(){
  createCanvas(405, 500);  
  background(0);
  noFill();
  stroke(255);
  strokeWeight(4);
  rx = 400 / 2, ry = 400 / 2;
  circle(rx, ry, 400);
  rect(rx - 200, ry - 200, 400, 400);
  strokeWeight(1);
}

function draw() {
  if(isPaused) return;
  for(let turn = 0; turn < 10000; turn++){
    let x = random(0, 2 * rx);
    let y = random(0, 2 * ry);
    let distance = Math.sqrt(Math.pow(Math.abs(x - 200), 2) + Math.pow(Math.abs(y - 200), 2));
    if(distance <= 200){
      stroke(0, 255, 0);
      piCount++;
    }
    else{
      stroke(0, 0, 255);
    }
    totalCount++;
    point(x, y);
    let ratio = 4 * piCount / totalCount;
    ratioString = ratio.toString();
    for(let i = 0; ;){
      if(piString[i] == ratioString[i]){
        i++;
      }
      else{
        theCountFound = max(theCountFound, i);
        break;
      }
      if(i >= theCountFound){
        bestRatioFound = ratio;
      }
    }
    fill(0);
    noStroke();
    rect(0, 405, 405, 100);
    fill(255);
    text("Actual Value Of PI (π)    : " + piString, 20, 425);
    text("The best approximation : " + bestRatioFound, 20, 450);
  }
}

function keyPressed(){
  if(key == ' '){
    isPaused = !isPaused;
  }
}