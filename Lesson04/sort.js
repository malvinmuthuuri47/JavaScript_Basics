// Sort method - It sorts the elements of an array in-place; Alphabetically for strings, numerically for numbers but you can also define a custom comparison functon to achieve more complex sorting logic.
//             - It sorts elements in ascending order; For strings, it uses Unicode character code comparisons and for numbers, it performs simple comparison

const fruits = ['watermelon', 'apple', 'banana', 'orange', 'grapes'];

// console.log(fruits);

fruits.sort();
// console.log(fruits);

// Not working
// const nums = [10, 3, 5, 1];

// console.log(nums);
// nums.sort();
// console.log(nums);

// Custom sort method
const nums = [10, 3, 1, 5];

// console.log(nums);
nums.sort((a, b) => {
    // return a - b;   // Ascending order
    return b - a;   // Descending order
})

// console.log(nums);

// Sorting based on Price

const products = [
    { id: 1, productName: 'Laptop', price: 1200 },
    { id: 2, productName: 'Phone', price: 800 },
    { id: 3, productName: 'Tv', price: 900 },
    { id: 4, productName: 'Bluetooth Speaker', price: 200 }
]

// Sort the Products based on price in ascending order
products.sort((a, b) => {
    return a.price - b.price;
})

// console.log(products);

// Sort the products based on price in descending order
products.sort((a, b) => {
    return b.price - a.price;
})

console.log(products);