// Function scope vs Block scope

// Function Scope - variables declared in the function are only accessible in the function and any other nested functions in the function

function myFunc() {
    if (true) {
        var name = 'javascript';
        console.log(name);
    }
    console.log(name);  // name var is accessed in the function scope
}

// myFunc();

// Block Scope

function myFunc1() {
    if (true) {
        const greet = "Hi";
        const course = "JavaScript";
        console.log(greet, course);
    }
    // console.log(greet, course);
}

myFunc1();