// More Array Methods

// find() - A HOF used to retrieve the first element in an array that satisfies a test implemented by a provided function. It returns an element if found and undefined otherwise

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

// Find users with id === 2
const foundUser = users.find((user) => user.id === 2);
// console.log(foundUser);

// reverse() - This method reverses the order of elements in an array in-place(modified the original array directly)

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// fill() - This method fills all elements/a specific portion of an array with a static value in-place

const newArr = [1, 2, 3, 4, 5, 6, 7];
// console.log(newArr);
// newArr.fill(0, 2, 4);
// console.log(newArr);

// splice() - This method allows you to remove existing elements, insert new elements, or both, all at a specified position in-place

const fruits = ['apple', 'banana', 'cherries', 'grapes'];

// remove banana from the array and add other fruits
// const removefruit = fruits.splice(1, 3, 'kiwi', 'mango', 'wild berry');
// console.log(removefruit);
// console.log(fruits);

// remove banana from the array
const removeBanana = fruits.splice(1, 1);
console.log(fruits);
console.log(removeBanana);