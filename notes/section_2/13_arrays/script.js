// Arrays
let costumers = ['Hugo', 'Paul', 'Marcus'];

console.log(costumers);
console.log(costumers[1]);

costumers[1] = 'Franchesca' // Replaces the item at the specified index
console.log(costumers[1]);

// Array - Properties and Methods:

console.log(costumers.length); 
// Returns the length of the array

console.log(costumers.join(','));
// Joins all the elements from the array with the specified argument

console.log(costumers.indexOf('Marcus'));
// Returns the index of the argument in the array

console.log(costumers.concat(['Ken', 'Chelsea']));
// Concatenates the array with another

console.log(costumers.push('Robert'));
console.log(costumers);
// 'push' adds a new value to the array and returns its length

console.log(costumers.pop('Robert'));
// 'pop' removes the last value from the array and returns it
