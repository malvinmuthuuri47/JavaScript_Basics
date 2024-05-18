// Function inside another function

// function outerFunc() {
//     console.log("Outer function is executing");

//     function innerFunc() {
//         console.log("Inner Function is Executing");
//     }

//     innerFunc();
// }

function outerFunc() {
    console.log("Outer Function is Executing");

    function innerFunc() {
        console.log("Inner Function is Executing");
    }

    return innerFunc;
}

outerFunc()();