// Symbols
// Symbols are a primitive type used to create unique values. Even if two symbols have the same description, each symbol will ALWAYS be a unique value.

const symbolOne = Symbol('a generic name'); // Creates a symbol with description 'a generic name'
const symbolTwo = Symbol('a generic name'); // Creates another symbol with the same description

console.log(symbolOne, typeof symbolOne); 
console.log(symbolOne === symbolTwo); // Returns false - symbols are always unique

const ninja = {};

// Regular property assignment
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black'; 

// Using symbols as property keys - they won't collide even with the same description
ninja[symbolOne] = 'ryu'; // Property identified by symbolOne
ninja[symbolTwo] = 'shaun'; // Property identified by symbolTwo

console.log(ninja); 
console.log(ninja[symbolOne], ninja[symbolTwo]);

// Note: Symbol-keyed properties are not included in for...in loops or Object.keys()
// They are considered "hidden" properties, useful for adding metadata that won't conflict with other code