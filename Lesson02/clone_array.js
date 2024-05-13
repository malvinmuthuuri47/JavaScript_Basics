// // 1. Cloning primitive datatypes (passed by value)

// let num1 = 34;
// let num2 = num1;

// console.log(num1, num2);

// num1++;
// console.log(num1, num2);

// // 2. Cloning non-primitive datatypes (passed by reference)
let arr1 = ['apple', 'banana', 'orange'];
// let arr2 = arr1;

// console.log(arr1, arr2);

// arr1.push('grapes');

// console.log(arr1, arr2);

// Slice()
// let arr2 = arr1.slice();

// arr1.push('grapes');

// console.log(arr1, arr2);

// //Spread
// let arr2 = [...arr1];

// console.log(arr1, arr2);

// arr1.push('Mango');
// console.log(arr1, arr2);

// // array.from()
// let arr2 = Array.from(arr1);

// console.log(arr1, arr2);
// arr1.push('Lemon');

// console.log(arr1, arr2);

// // concat
let arr2 = arr1.concat([]);

// console.log(arr1, arr2);
// arr1.push('Kiwi');

// console.log(arr1, arr2);

// console.log(arr1 === arr2);

// let arr3 = arr2;

// arr2.push("Magic");
// console.log(arr3 === arr2);

// console.log(arr3, arr2);