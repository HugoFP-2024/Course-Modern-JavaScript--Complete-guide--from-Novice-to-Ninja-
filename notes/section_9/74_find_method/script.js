// Find Method
// The find method returns the first element in an array that satisfies the test implemented by the provided callback function.

const scores = [15, 20, 5, 25, 40, 10, 15, 25];

// const firstHighScore = scores.find(score =>{
//     return score > 30;
// });
const firstHighScore = scores.find(score => score > 30);

console.log(firstHighScore);