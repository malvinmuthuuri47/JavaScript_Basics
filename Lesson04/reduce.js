// Reduce Method - Aggregates the elements of an array into a single value

// Q1. Sum of all numbers

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, current) => {
    acc = acc + current;
    return acc;
}, 0);

// console.log(sum);

// Q2. Find the max value

const vals = [10, 4, 20, 31, 56];

const maxVal = vals.reduce((acc, curr) => {
    return Math.max(acc, curr);
}, 0);

// console.log(maxVal);

// Q3. Find the min value

const arr1 = [10, 20, 30, 1, 34];

const minVal = arr1.reduce((acc, curr) => {
    return Math.min(acc, curr);
}, Infinity);

console.log(minVal);