// Creating An object
const obj = {
    name: 'John',
    age: 40,
    "my hobbies" : ['learning' , 'Football', 'cricket']
}
// dot vs bracket notation
// console.log(obj['name']);
// console.log(obj.name);

// console.log(obj.my hobbies);
// console.log(obj["my hobbies"]);

// Add and Remove values in objects

const car = {};

// console.log(typeof(car));

// Add values in an object
car.name = 'Toyota';
car.model = 'Camry';
car.year = 2002;
car['color'] = 'silver';

// Remove values from an object
delete car.color;
delete car.name;

console.log(car);