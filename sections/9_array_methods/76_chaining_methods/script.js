// Chaining Methods
// Chaining allows you to call multiple array methods in a single statement, passing the result of one method to the next.

const items = [
    {name: 'gold star', price: 60},
    {name: 'mushroom', price: 10},
    {name: 'beetle shell', price: 25},
    {name: 'kart', price: 100},
    {name: 'banana skin', price: 15},
];

// const filteredItems = items.filter(product => product.price > 20);

// const saleItems = filteredItems.map(product => `The pruduct ${product.name} is $${product.price / 2} dollars!`);

// Aplying chaining of methods:
const saleItems = items
    .filter(product => product.price > 20)
    .map(product => `The product ${product.name} is $${product.price / 2} dollars!`);

console.log(saleItems);

// Note: Chaining also works with other data types, like strings, but you need to ensure that the methods used return a value compatible with the next method in the chain.