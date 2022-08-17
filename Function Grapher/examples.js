function batmanFunction(x){
    let pointsY = [];
    if(Math.abs(x) >= 3){
        let y = Math.sqrt(1 - Math.pow(x / 7, 2)) * 3;
        pointsY.push(y);
        if(-y > -3 * Math.sqrt(33) / 7){
            pointsY.push(-y);
        }
    }
    if(Math.abs(x) <= 0.5){
        pointsY.push(2.25);
    }
    if(Math.abs(x) <= 0.75 && Math.abs(x) >= 0.5){
        let y = 3 * Math.abs(x) + 0.75;
        pointsY.push(y);
    }
    if(Math.abs(x) >= 0.75 && Math.abs(x) <= 1){
        let y = 9 - 8 * Math.abs(x);
        pointsY.push(y);
    }
    if(Math.abs(x) > 1){
        let y = 6 * Math.sqrt(10) / 7 + (-0.5 * Math.abs(x) + 1.5) - 3 * sqrt(10) / 7 * sqrt(4 - pow(Math.abs(x) - 1, 2));
        pointsY.push(y);
    }
    let y = abs(x / 2) - ((3 * sqrt(33) - 7) / 112) * x * x - 3 + sqrt(1 - pow(abs(abs(x) - 2) - 1, 2));
    pointsY.push(y);
    return pointsY;
}

function circleFunction(x){
    // What we do here is to say x is cos(a) and for that cos which sin(a)'s can be pointed.
    // And just because of that x values should be between [-1, 1].
    // Unless it returns - doesn't do any single thing.
    if(x <= -1 || x >= 1){
        return [];
    }
    // The best results can be found using these lines because it won't increase x!
    // borderXMinus = -1, borderXPlus = 1;
    // borderYMinus = -1, borderYPlus = 1;
    let y = sqrt(1 - x * x); 
    return [y, -y];
}

function sinFunction(x){
    return [Math.sin(x)];
}