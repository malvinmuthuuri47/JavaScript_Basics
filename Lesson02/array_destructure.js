// Array Destructuring

const array = ['apple', 'banana', 'grapes', 'orange', 'mangos', 'watermelon'];

// basic array destructuring
// let [a, b, c, d] = array;
// console.log(a);

// Skipping values with rest destructuring
let [a, b, ...rest]  = array;
console.log(rest);