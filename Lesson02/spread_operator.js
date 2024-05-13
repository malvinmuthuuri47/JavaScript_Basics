// spread operator (...)

// clone arrays
// merge arrays
// adding elements

// const originalArray = [33, 22, 11];

// Cloning arrays using the spread operator
    // const copiedArray = [...originalArray];

    // console.log(copiedArray);



// merging arrays using the spread operator
    // const arr1 = [10, 20, 30];
    // const arr2 = [40, 50, 60];
    // const arr3 = [70, 80, 90];

    // const mergedArray = [...arr1, ...arr2, ...arr3];
    // console.log(mergedArray);



// Add elements in an array
    // const arr1 = [10, 20, 30];

    // const newArr = [...arr1, 76, 54, 43];
    // console.log(newArr);


// Object
// copy objects
// merge objects
// add properties

// Copy objects
    // const originalObj = { name: 'Matt', age: '43'};

    // const copiedObj = {...originalObj}
    // console.log(copiedObj);


// merge Objects
const obj1 = { name: 'Gregory' };
const obj2 = { age: 35 };

const mergedObj = { ...obj1, ...obj2 };
    // console.log(mergedObj);


// Adding properties inside an object
const updateObj = { ...mergedObj, gender: 'Male', hobbies: ['learning', 'cricket', 'football'] };
console.log(updateObj);