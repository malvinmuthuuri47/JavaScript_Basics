// Lexical(static) scope is a concept that determines where a variable/function can be accessed within your code based on the location of the variable/function's declaration in the source code, not necessarily where it's used.

// const num = 30; // Global scope

// function outerFunc() {

//     // const num = 20; // can be accessd by both the outerFunc and innerFunc (OuterFunc lexical scope)

//     function innerFunc() {
//         // const num = 10;
//         console.log(num);   // can only be accessed by the inner function (innerFunc lexical scope)
//     }
//     return innerFunc;
// }

// outerFunc()();

let num1 = 20;  // Gloal environment

function outerFunc() {
    console.log(num1);
    const num2 = 30;

    function innerFunc() {
        console.log(num2);
    }
    innerFunc();
}

outerFunc();