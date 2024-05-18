// Different ways of defining a function

// 1. Function declaration (traditional way)
    // function greet(name) {
    //     console.log(`Hello ${name}`);
    //     // return `Hello ${name}`
    // }

    // greet('John');
    // const greeting = greet("John");
    // console.log(greeting); 


// 2. Function Expression (anonymous functions)
    // const greet = function(name) {
    //     console.log(`Hello ${name}`);
    // }

    // greet('Matt Davis');


// 3. Arrow Functions
    // const greet = (name) => (
    //     console.log(`Hello ${name}`)
    // )
    // greet('Charlie')


// 4. IIFE(Immediately Invoked Function Expressions)
(function(name) {
    console.log(`Hello ${name}`);
})('David');