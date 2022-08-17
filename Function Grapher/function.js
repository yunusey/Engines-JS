
let nonDefined = "None Defined";

let xIncrement = 0.001, xDecrement = -0.001;
// In case of not wanting slides, you have to specify borders!
// In case of wanting slides, borders should be specified - initialized as nonDefined (declared above).
// In case of not wanting borders, you should make them nonDefined!
// An example : borderXMinus = nonDefined;
// So it means that -x will go to infinite!
let borderXMinus = -10, borderXPlus = 10, borderYMinus = -5, borderYPlus = 5;

// points - xs per frame
let animSpeed = 10;

// You may want to look at examples, examples.js is just for that...
// An important note: You should return a list - array - vector in your functions.
// Meaning, for each x you can have multiple values(y)!

function fx(x){
    return batmanFunction(x);
}

function fx2(x){
    return sinFunction(x);
}

function fx3(x){
    return [x * x * x];
}

push(circleFunction, 0, 255, 0);
push(fx, 255, 0, 0);
push(fx2, 255, 0, 255);
push(fx3, 0, 0, 255);