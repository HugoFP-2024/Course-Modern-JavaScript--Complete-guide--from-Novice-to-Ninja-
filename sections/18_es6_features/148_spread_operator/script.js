// Rest Parameter
// The rest parameter will be resposnible for getting multiple arguments in said respective function, and it will bundle them all up in an array.

const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num * 2)
};

const result = double(1, 2, 3, 4)
console.log(result);

// Spread Syntax
// It is responsible for 'spreading' each item of the array individually. For exemple, in the log, it displays each element of the array. Using it in another array, crates a new element in such array based of the array that is being spreaded.
// Works the same with objects!

const people = ['marcus', 'cesar'];
console.log(...people);

const members = ['carlos', 'teresa', ...people];
console.log(members);

const person = {name: 'Silva', age: 25};
const personClone = {...person, email: 'manchester@hotmail.com'}
console.log(person, personClone);