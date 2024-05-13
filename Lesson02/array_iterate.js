// iterating arrays using for loop and for-of loop

let names = ['Alice', 'Bob', 'Charlie', 'David'];

// let len = names.length;
// console.log(len);

// 1. For Loop
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// 2. For of Loop
// for (let name of names) {
//     console.log(name);
// }

// Iterating arrays using for in and while loop
// 1. For in Loop
// for (let name in names) {
//     console.log(name);
// }

// 2. While loop
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// push values of array1 into a new array and make the values UPPERCASE
const arr1 = ['banana', 'orange', 'apple', 'grapes'];
const arr2 = []

// Using for loop
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i].toUpperCase());
}
console.log(arr2);