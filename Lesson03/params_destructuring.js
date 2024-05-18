// Params destructuring

const user = {
    name: 'John',
    age: 21,
    country: 'United States'
};


// const { name, age, country } = user;
// console.log(name, age);

// Object destructuring in function parameters
// function myFunc({ name, age, country }) {
//     console.log(`Name: ${name}`);
//     console.log('Age: ', age);
//     console.log(`Country: ${country}`);
// };

// myFunc(user);

// Array destructuring in function parameters

function arrDest([x, y]) {
    console.log(`X Coordinate: ${x}`);
    console.log(`Y Coordinate: ${y}`);
}

const arr = [20, 30];
const [ x, y ] = arr;

arrDest(arr);