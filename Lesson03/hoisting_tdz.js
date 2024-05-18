// Hoiting - This is where variables and function declarations appear to be moved to the top of their scope before code execution. This happens with the let and var keywords.


// Hoisting example

// myFunc();

function myFunc() {
    console.log("Hello JavaScript");
}

// console.log(myNum);
// var myNum = 1;


// const num2 = 30;
// console.log(num2);



// temporal dead zone - Its a specific period during code execution where a variable declared using const and let exists but cannot be accessed. It starts at the beginning of the block scope where the variable is declared and ends when the code execution reaches the line where the variable is declared and initialized.

console.log(num1);
let num1 = 20;