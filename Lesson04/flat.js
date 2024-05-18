// Flat method - Its used to create a new array with all sub-array elements concatenated into it up to a specified depth.

const nestedArr = [1, [2, 3], [4, [5, 6]]];

const flatArr = nestedArr.flat(2);

console.log(flatArr);