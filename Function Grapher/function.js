
let nonDefined = "None Defined";

let xIncrement = 0.001, xDecrement = -0.001;
// In case of not wanting slides, you have to specify borders!
// In case of wanting slides, borders should be specified as nonDefined (declared above).
// In case of not wanting borders, you should make them nonDefined!
let borderXMinus = nonDefined, borderXPlus = nonDefined, borderYMinus = nonDefined, borderYPlus = nonDefined;

// points per frame
let animSpeed = 1000;

// Main function is fx. So, the only function sketch.js uses is this. Don't try to delete it!
// You may want to look at examples, examples.js is for that...
// An important note: You should return a list - array - vector.
// Meaning, for each x you can have multiple values(y).
function fx(x){
     return batmanFunction(x);
    // return circleFunction(x);
    // return sinFunction(x);
    // return [x * x * x];
    // return [3 * x];
}