// map() method - A HOF that creates a new array by applying a function to each element of an existing array

// Q1. Perform a square operation on each element of an array

const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.map((num, idx) => {
    // console.log(idx);
    return num * num;
})

// console.log(newArr);

// Q2. Make the first letter of each string in an array to be in UpperCase
const fruits = ['apple', 'banana', 'grapes'];

const Upper = fruits.map((fruit) => {
    return fruit.charAt(0).toUpperCase() + fruit.slice(1);
})

// console.log(Upper);

// Q3. Extract a particular property from an array of objects

const users = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Travis", age: 25 },
    { id: 3, name: "Mark", age: 28 },
    { id: 4, name: "Dan", age: 35 },
]

const userName = users.map((user) => {
    return user.name
})

// console.log(userName);

// Q4.Convert temperature rfom degrees to ferenheit

const temp = [0, 25, 50, 100];
const tempInFerenheit = temp.map((celcius) => {
    return (celcius * 9/5) + 32;
})

// console.log(tempInFerenheit);

// Q5. When an odd number is encounteres, it should be doubled
const allNumbers = [1, 2, 3, 4, 5, 6, 7 , 8 , 9, 10];
const doubledOddNumbers = allNumbers.map(num => {
    if (num % 2 === 0) {
        return num;
    } else {
        return num * 2;
    }
})

console.log(doubledOddNumbers);