// object interview questions


// Objects inside arrays
const products = [
    { id: 1, productName: 'Laptop', price: 1200 },
    { id: 2, productName: 'Smart Phone', price: 600 },
    { id: 3, productName: 'HeadPhones', price: 200 },
    { id: 4, productName: 'Home Theater', price: 400 },
]

// How to fetch all products Id using for of Loop
    // for (let product of products) {
    //     console.log("Product Id: ", product.id);
    // }

// How to fetch all products id and price using for of loop
    // for (let product of products) {
    //     console.log("Id:", product.id, "Name:", product.productName, "Price:", product.price);
    // }

// Using For of loop to fetch all products Id with price > 500
    // for (product of products) {
    //     if (product.price > 500) {
    //         console.log(product);
    //     } 
    //     else {
    //         continue;
    //     }
    // }


// Nested Destructuring
    // console.log(products);
    // const [, {productName, price}, {id}] = products;
    // console.log(productName, price, id);

    // rename variables
    // const [, {productName: pname}, {productName: pname2}] = products;
    // console.log(pname, pname2);


// Increasing product price by 10% for all products
const increasePrice = 0.1;

for (let product of products) {
    // console.log(product.price);
    product.price = product.price * (1 + increasePrice);
    console.log(product.price.toFixed(2));
}