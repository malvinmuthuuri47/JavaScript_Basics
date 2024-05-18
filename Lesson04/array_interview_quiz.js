// Map, reduce, filter

// Map is used when you want to apply a certain operation on each element of an array.

// Filter is used when you want to select some elements based on some criteria

// Reduce is used when you want to perform cumulative operations in arrays/return a single value

// Q1. Fetch all products whose price is less than 200

const products = [
    { id: 1, name: 'laptop', price: 2100 },
    { id: 2, name: 'Tv', price: 600 },
    { id: 3, name: 'Phone', price: 200 },
    { id: 4, name: 'Airpods', price: 120 },
    { id: 5, name: 'Home Theater', price: 199 },
];

const newProducts = products.filter((product) => {
    // return product.price < 200;
    if (product.price < 200) {
        return product;
    }
});

const productAttributes = () => {
    for (let i = 0; i < newProducts.length; i++) {
        console.log(newProducts[i].name);
    }
};

// productAttributes();

// console.log(newProducts);


// Q2. Add 10% discount to all products

const priceUpdate = products.map((product) => {
    discountPrice = (product.price - (0.1 * product.price));
    return discountPrice
});

// console.log(priceUpdate);

// Q3. Find the total price for all products

const totalPrice = products.reduce((total, product) => {
    total = total + product.price;
    return total;
}, 0);

// console.log(totalPrice);

// Q4. Find the total area of all rectangles

const rectangles = [
    {width: 10, height: 20},
    {width: 20, height: 40},
    {width: 60, height: 60},
    {width: 10, height: 20},
];

const totalArea = rectangles.reduce((totalArea, rec) => {
    totalArea = totalArea + (rec.height * rec.width);
    return totalArea;
}, 0);

// console.log(totalArea);