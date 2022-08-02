let isPaused = false;

let piString = Math.PI.toString();

let iterations = 0, piVar = 4;

let history = [];

let canvasWidth = 400, canvasHeight = 400;

let divs;

function setup(){
  createCanvas(canvasWidth, canvasHeight);  
  background(0);
  noFill();
  divs = createDiv('').style('font-size', '64pt');
}

function draw() {
  if(isPaused) return;
  for(let turn = 0; turn < 1000; turn++){
    background(0);
    let div = (iterations * 2 + 3) * (iterations % 2 == 0 ? -1 : 1);
    piVar += 4 / div;
    history.push(piVar);

    console.log(piVar);

    let w = canvasWidth / history.length;

    stroke(0, 255, 0);

    beginShape();
    for(let i = 0; i < history.length; i++){
      let x = i * w;
      let y = map(history[i], 2, 4, 0, canvasHeight);
      vertex(x, y); 
    }
    endShape();

    stroke(255);
    let piVarY = map(Math.PI, 2, 4, 0, canvasHeight);
    line(0, piVarY, canvasWidth, piVarY);
    iterations++;
  }
  divs.html(piVar.toString());
}

function keyPressed(){
  if(key == ' '){
    isPaused = !isPaused;
  }
}
