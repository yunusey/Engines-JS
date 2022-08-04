// For more details, you may want to look @https://www.youtube.com/watch?v=jsYwFizhncE
// For video tutorial, you may want to look @https://www.youtube.com/watch?v=PoW8g67XNxA

let block1, block2;
let ground, wall;

let collisionCount = 0;

let mass_ratio = 1000000000000;
let digits = Math.log10(Math.sqrt(mass_ratio)) + 1;
let timeSteps = 1000000;

// For more details, you may want to look Euler's algorithm @https://en.wikipedia.org/wiki/Euler_method#:~:text=The%20Euler%20method%20is%20a,proportional%20to%20the%20step%20size.

let isPaused = false, isFinished = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  collisionCount = 0;
  wall = new Wall(20, 300, 20, 0);
  ground = new Wall(20, 300, windowWidth, 300);
  block1 = new Block(200, 300, 50, 50, 1, 0.0);
  block2 = new Block(500, 300, 150, 150, mass_ratio, -1.0/timeSteps);
  isFinished = false;
}

function draw() {
  background(0);
  if(!isPaused){
    for(let i = 0; i < timeSteps; i++){

      block1.update();
      block2.update();

      block1.checkCollision();
      block2.checkCollision();

      if(areColliding(block1.x, block1.w, block2.x, block2.w)){
        collisionCount++;
        let newV1 = block1.bounce(block2);
        let newV2 = block2.bounce(block1);
        block1.v = newV1;
        block2.v = newV2;
      }
    }
  }
  if(block1.v >= 0 && block2.v > block1.v){
    isFinished = true;
  }
  fill(255, 0, 0);
    
  wall.show();
  ground.show();
  block1.show();
  block2.show();

  fill(255);
  textSize(20);
  text('Collisions : ' + collisionCount.toString(), windowWidth - 250, 20);

  if(isFinished){
    textAlign(CENTER);
    text('Animation Ended!', 0, 400, windowWidth, 430);
    text("There won't be any collisions now on!", 0, 450, windowWidth, 480);
  }
}

function keyPressed(){
  if(key == 'r' || key == 'R'){
    setup();
  }
  else if(key == ' '){
    isPaused = !isPaused;
  }
}