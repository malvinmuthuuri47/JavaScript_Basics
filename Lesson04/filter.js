// Filter method - It creates a new array with elements that pass a certain condition

// Q1. Filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(num => {
    if (num % 2 === 0) {
        return num;
    }
})

// console.log(evenNumbers);

function isEven(num) {
    return num % 2 === 0;
}

const evenNums = numbers.filter(num => {
    return isEven(num);
})

// console.log(evenNums);

// Q2. Filter a string longer than 5 characters
const words = ['apple', 'banana', 'grapes', 'cherry'];

const newWords = words.filter(word => {
    return word.length > 5;
})

// console.log(newWords);

// Q3. Filter Users whose age is over 18

const users = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Charlie", age: 32 },
    { id: 3, name: "Mike", age: 12 },
    { id: 4, name: "Peter", age: 11 }
]

const userName = users.filter(user => {
    if (user.age > 18) return user.name;
})

// console.log(userName);

// Q4. Filter prime numbers

const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeNums = allNums.filter(isPrime);

function isPrime(num) {
    if (num <= 1) return false; // 1 or less are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;    // Divisible by another number, not prime
    }
    return true;    // If loop completes without finding  a divisor, the number is prime
}

console.log(primeNums);