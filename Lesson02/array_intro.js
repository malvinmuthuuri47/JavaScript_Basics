// Introduction to Arrays

// Primitive datatypes are imuutable datatypes whose values cannot be changed directly. Any operation on their values results in the creation of a new value. They are stored by value in memory. (string, boolean, number, null)

// Non-primitive datatypes are mutable datatypes whose values can be changed directly. The values are stored and accessed by reference in memory. (array, object, function)

let oddNumbers = [1, 3, 5, 7, 9];

// console.log(Array.isArray(oddNumbers));
// console.log(typeof(oddNumbers));

let fruits = ['banana', 'apple', 'mango'];

let mixedArray = [1, 12, "56", "banana", null, 2n];

// Accessing data in arrays using indexes
console.log(mixedArray[3]);