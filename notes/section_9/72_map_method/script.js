// Map Method
// The map method iterates over each item in an array and creates a new array with the results of calling a provided function on every element.

const prices = [71, 49, 5, 25, 40, 52, 15, 25];

// Creates a new array with prices divided by 2.
const salePrices = prices.map(price => {
    return price / 2;
});

console.log(salePrices);

// Using map with an array of objects:
const items = [
    {name: 'gold star', price: 60},
    {name: 'mushroom', price: 10},
    {name: 'beetle shell', price: 25},
    {name: 'kart', price: 100},
    {name: 'banana skin', price: 15},
];

// Returns a new array with updated prices for items over 30, keeping others unchanged.
// It is important to return a new object to avoid mutating the original array.
const saleItems = items.map(item => {
    if (item.price > 30) {
        // It is important to return as a new object, to avoid altering the original array.
        return {name: item.name, price: item.price / 2};
    } else {
        return item;
    }
});

console.log(saleItems);