// Rest Parameter
// The rest parameter is responsible for collecting multiple arguments in a function and bundling them all up in an array.
// It allows functions to accept an indefinite number of arguments.

const double = (...nums) => {
    console.log(nums); // Shows the array containing all passed arguments
    return nums.map(num => num * 2)
};

const result = double(1, 2, 3, 4)
console.log(result);

// Spread Syntax
// It is responsible for 'spreading' each item of the array individually. For example, in the log, it displays each element of the array. 
// When used in another array, it creates new elements in that array based on the elements of the array being spread.
// Works the same with objects!

const people = ['marcus', 'cesar'];
console.log(...people); // Outputs: marcus cesar (not as an array, but as individual values)

const members = ['carlos', 'teresa', ...people];
console.log(members); // Outputs: ['carlos', 'teresa', 'marcus', 'cesar']

const person = { name: 'Silva', age: 25 };
const personClone = { ...person, email: 'manchester@hotmail.com' } // Creates a new object with all properties from person plus the email
console.log(person, personClone);