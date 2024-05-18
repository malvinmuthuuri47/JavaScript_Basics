// Which way to define funcitons

// i. Traditional method
// ii. Arrow functions

// Creating a function to find if a number isEven or isOdd

    // a. Using the traditional approach
        // function isEven(n) {
        //     if (n % 2 === 0) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // const num = isEven(12);
        // console.log(num);

    // b. Using the arrow function approach
    // (function_name) (parameter) (condition)
        // const isEven = num => num % 2 === 0;

        // const num1 = isEven(10);
        // console.log(num1);

        // const isOdd = num => num % 2 !== 0;

        // const num2 = isOdd(11);
        // console.log(num2);

// Concatenation two arrays
    // a. Traditional approach

        // function concatArray(arr1, arr2) {
        //     return arr1.concat(arr2);
        // }

        // const arr1 = [1, 2, 3, 4, 5];
        // const arr2 = [7, 8, 9];

        // const newArr = concatArray(arr1, arr2);
        // console.log(newArr);

    // b. Using Arrow Functions

        // const concatArray = (arr1, arr2) => arr1.concat(arr2);

        // const arr1 = [1, 2, 3, 4];
        // const arr2 = [6, 7, 8, 9];

        // const newArr = concatArray(arr1, arr2);
        // console.log(newArr);
    

// Multiply all values of an array

        // Traditional method
            // function multiplyArr(arr1, multiplier) {
            //     const arr2 = [];
            //     for (let i = 0; i < arr1.length; i++) {
            //         arr2[i] = arr1[i] * multiplier;
            //     }
            //     return arr2;
            // }

        // Using Arrow functions
            // const multiplyArr = (arr1, multiplier) => {
            //     const arr2 = [];
            //     for (let i = 0; i < arr1.length; i++) {
            //         arr2[i] = arr1[i] * multiplier;
            //     }
            //     return arr2;
            // }

            // const newArr = multiplyArr([2, 3, 4, 5], 10);
            // console.log(newArr);