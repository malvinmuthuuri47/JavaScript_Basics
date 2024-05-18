// callback functions - Functions passed as arguments to other functions

function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("GoodBye");
}

// greet('John', sayGoodbye);


function processArr(arr, multiplier, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i] * multiplier);
    }
}

function logVal(val) {
    console.log(val);
}

const multiplier = 3;
const num = [1, 2, 3, 4, 5];

processArr(num, multiplier, logVal);