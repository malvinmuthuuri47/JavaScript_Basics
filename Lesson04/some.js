// Some Method - Checks if at least one element in an array passes a specified test implemented by a provided function

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const hasEvenNums = nums.some(num => num % 2 === 0);
const hasEvenNums = nums.every(num => num % 2 === 0);

console.log(hasEvenNums);

const students = [
    { id: 1, name: 'John', grade: 69 },
    { id: 2, name: 'Davis', grade: 97 },
    { id: 3, name: 'Dan', grade: 12 },
    { id: 4, name: 'Jane', grade: 54 },
    { id: 5, name: 'Ruth', grade: 58 }
];

// Check if the students have passed

const passedStudents = students.some(student => student.grade >= 50);

console.log(passedStudents);