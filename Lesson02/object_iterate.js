// iterating an object using for in, for of loop and Object keys

const car = {
    name: 'Toyota',
    model: 'Camry',
    year: 2002
}

// for in loop
    // for (let key in car) {
    //     console.log(key, ":", car[key]);
    // }

// Object.keys
    // console.log(Array.isArray(Object.keys(car)));
    // console.log(Object.keys(car));

// for of loop
    // for (let key of Object.keys(car)) {
    //     console.log(car[key]);
    // }

// Iterating through an array of objects using for of loop
const array = [
    { name: 'John', age: 22 },
    { name: 'Bob', age: 34 },
    { name: 'Grandy', age: 32 },
    { name: 'Tony', age: 54 }
]
for (let obj of array) {
    console.log(obj.name);
}