// Explicitly Type Conversion

let score = '100';
console.log(score + 1);
// It concatenates 100 with 1, resulting in 1001

score = Number(score);
console.log(score + 1);
// 'Number()' converts score to a number
// 'String()' does the same, but with strings
// 'Boolean()' with a string returns true for any string, but returns false with an empty one.
//             with a number, it returns true with positive ones, and false with 0 and negatives