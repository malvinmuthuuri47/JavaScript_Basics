// More about functions
// return Keyword
// parameters - parameters that act as placeholders that specify the type and name of the data the function expects to receive.
// arguments - The actual values that are passed to the function when it is called.
// default parameters

// function myFunction() {
//     // console.log("Inside My Function");
//     return "Inside Function";
// }

// const myFunc = myFunction();
// console.log(myFunc);

// myFunction();

// function addTwoNumbers(a, b) {   
//     return a + b;
// }

// const sum = addTwoNumbers(2, 2);
// console.log(sum);

// Function to convert lowercase to uppercase
function converttoUpperCase(a = "hello there!") {
    return a.toUpperCase();
}

let str = converttoUpperCase('python and javascript');
const str2 = converttoUpperCase("maximum miracle center");

// console.log(str, str2);

// Default Parameters
const str3 = converttoUpperCase();
// console.log(str3);

// Passing an array object as an argument and finding the index of the target value.
function findIdx(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 5, 6]

const val1 = findIdx(array, 4);
const val2 = findIdx([11, 22, 33, 44], 33)

console.log(val1, val2);