// Loose Comparisons (Different types CAN still be equal):

let age = 25;

console.log(age == 25);
console.log(age == '25');
console.log(age != '25');
// Behind the scenes, JS does a type conversion automatically

// Strict Comparisons (Different types CANNOT be equal):

console.log(age === 25);
console.log(age === '25');
console.log(age !== '25');
