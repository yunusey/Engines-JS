
let isPaused = false;

let graphX1, graphX2, graphY1, graphY2;
function setup(){
    graphX1 = 90, graphX2 = windowWidth - 100, graphY1 = 20, graphY2 = windowHeight - 30;
    createCanvas(windowWidth, windowHeight);
}


let points = [], colors = [];
let maxValue = 0, minValue = 0;
let minX = 0, maxX = 0;

function update(){
    for(let turn = 0; turn < animSpeed; turn++){
        for(let functionInd = 0; functionInd < functions.length; functionInd++){
            let fx = functions[functionInd][0];
            if((borderXPlus != nonDefined ? maxX <= borderXPlus : true)){
                maxX += xIncrement;
                let y1 = fx(maxX);
                if(y1 != nonDefined){
                    for(let ind = 0; ind < y1.length; ind++){
                        let y = y1[ind];
                        if(isNaN(y)) {
                            continue;
                        }
                        points.push(maxX);
                        points.push(y);
                        colors.push([functions[functionInd][1], functions[functionInd][2], functions[functionInd][3]]);
                        maxValue = max(maxValue, y);
                        minValue = min(minValue, y);
                    }
                } 
            }
            if((borderXMinus != nonDefined ? minX >= borderXMinus : true)){
                minX += xDecrement;
                let y1 = fx(minX);
                if(y1 != nonDefined){
                    for(let ind = 0; ind < y1.length; ind++){
                        let y = y1[ind];
                        if(isNaN(y)) {
                            continue;
                        }
                        points.push(minX);
                        points.push(y);
                        colors.push([functions[functionInd][1], functions[functionInd][2], functions[functionInd][3]]);
                        maxValue = max(maxValue, y);
                        minValue = min(minValue, y);
                    }
                } 
            }
        }
    }
}

function draw(){

    if(isPaused){
        return;
    }

    background(0);

    update();

    let left = borderXMinus, right = borderXPlus, bottom = borderYMinus, top = borderYPlus;
    if(left == nonDefined){
        left = minX;
    }
    if(right == nonDefined){
        right = maxX;
    }
    if(bottom == nonDefined){
        bottom = minValue;
    }
    if(top == nonDefined){
        top = maxValue;
    }

    stroke(255);

    let zeroPY = map(0, bottom, top, graphY2, graphY1);
    let zeroPX = map(0, left, right, graphX1, graphX2);
    line(zeroPX, graphY1, zeroPX, graphY2);
    line(graphX2, zeroPY, graphX1, zeroPY);
    
    for(let pointT = 0; pointT < points.length; pointT += 2){
        let pointX = map(points[pointT], left, right, graphX1, graphX2);
        let pointY = map(points[pointT + 1], bottom, top, graphY2, graphY1);
        stroke(colors[pointT / 2][0], colors[pointT / 2][1], colors[pointT / 2][2])
        point(pointX, pointY);
    }
}

function mousePressed(){

}

function keyPressed(){
    if(key == ' '){
      isPaused = !isPaused;
   }
}