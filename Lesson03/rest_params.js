// Rest Parameters in Functions

// calculate sum using rest parameters
        // function calculateSum(...nums) {
        //     let sum = 0;
        //     for (let num of nums) {
        //         sum = sum + num;
        //     }
        //     return sum;
        // }

        // const sum = calculateSum(10, 20, 30, 40);
        // console.log(sum);

// concat string using rest parameters
        // function concatStr(separator, ...str) {
        //     return str.join(separator);
        // }

        // const Strings = concatStr(' - ', 'apple', 'banana', 'grapes', 'watermelon', 'orange', 'berries');
        // console.log(Strings);

// find the maximum number among all arguments
function findMaxVal (...rest) {
    return Math.max(...rest);
}

const maxVal = findMaxVal(10, 20, 30, 50, 60, 79, 79.1);
console.log(maxVal);