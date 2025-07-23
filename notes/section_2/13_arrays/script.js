// Arrays
let costumers = ['Hugo', 'Paul', 'Marcus'];

console.log(costumers);
console.log(costumers[1]);

costumers[1] = 'Franchesca' // Replace the item in the specified index
console.log(costumers[1]);

// Arrays - Properties and Methods:

console.log(costumers.length); 
//Returns the lenght of the array

console.log(costumers.join(','));
// Join all the methods form the array with the specified argument

console.log(costumers.indexOf('Marcus'));
// Returns the index of the argument in the array

console.log(costumers.concat(['Ken', 'Chelsea']));
// Concatenates the array with another

console.log(costumers.push('Robert'));
console.log(costumers);
// 'push' add a new value to the array, and returns it's lenght

console.log(costumers.pop('Robert'));
// 'pop' the last value of the array, and returns it
