// Booleans and Comparisons

console.log(true, false);

// Methods related to Booleans:

let dog = 'Marley';
console.log(dog.includes('y'));
// Checks if the string contains the specified argument and returns 'true' or 'false'

let numbers = [0, 1, 2 ,3];
console.log(numbers.some(num => num > 2));
console.log(numbers.every(num => num > 2));
// '.some' checks if at least one item in the array passes a specified test, while '.every' checks if all elements pass the test

// Comparison Operators:

// '=='  = Equal Operator
// '!='  = Not-equal Operator
// '>'   = Greater than
// '<'   = Less than
// '>='  = Greater than or equal to (Can also be used with less than)