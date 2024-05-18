// Every Method - Returns true if all elements satisfy a specified condition and false otherwise


// Every
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const allPositive = nums.every((num) => num > 0);

// console.log(allPositive);

// Check if all students have grades above 50
const students = [
    { id: 1, name: 'John', grade: 76 },
    { id: 2, name: 'Dan', grade: 98 },
    { id: 3, name: 'Maxwell', grade: 43 },
    { id: 4, name: 'George', grade: 65 }
]

const allPassed = students.every((student) => student.grade > 50);

console.log(allPassed);
