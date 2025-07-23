// Booleans and Comparisons

console.log(true, false);

// Methods related to Booleans:

let dog = 'Marley';
console.log(dog.includes('y'));
// Checks if the, in this case, string, has te specified argument, and returns 'true' or 'false'

let numbers = [0, 1, 2 ,3];
console.log(numbers.some(num => num > 2));
console.log(numbers.every(num => num > 2));
// '.some' checks if at least 1 item in the array passes a specified test, while '.every' checks if all elements passes through the test

// Comparison Operators:

// '==' = Equal Operator
// '!=' = Not-equal Operator
// '>'  = Greater than
// '<'  = Less than
// '>=' = Greather than or equal to (Can be used with less than as well)