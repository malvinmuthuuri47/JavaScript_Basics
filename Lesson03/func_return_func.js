// Functions returning functions

function createAdder(x) {
    return function(y) {
        return x + y;
    }
}

// const add1 = createAdder(5);
// console.log(add1(4));
// console.log(createAdder(5)(2));

function createCounter() {
    let count = 0;

    return function() {
        count += 2;
        return count;
    }
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());