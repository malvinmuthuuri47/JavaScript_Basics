// ForEach Loop

const colors = ['red', 'green', 'yellow', 'blue'];

colors.forEach((color) => {
    // console.log(color)
});

const nums = [1, 2, 3, 4, 5];

nums.forEach((num, idx) => {
    // console.log(num * 2);
    // console.log('Num: ', num, 'Index:', idx)
});

// ForEach vs For - When you need to work with indexes, use the for loop and when you don't need direct interaction with indexes, use ForEach loop

// ForEach vs Map

const values = [2, 3, 4];

// multiply the array values by 3
const mulArr = values.map((num) => {
    return num * 3
})

// console.log(mulArr);

values.forEach((val) => console.log(val * 3));