// Reduce Method
// The reduce method is an array function that processes each element in an array and accumulates a single result in the accumulator (acc).
// It takes a callback function and an optional initial value as arguments.
// The callback receives an accumulator and the current element, and returns the updated accumulator.
// Reduce is commonly used for summing values, combining objects, or transforming arrays into a single value.

const scores = [15, 20, 5, 25, 40, 10, 15, 25];

// Counts how many scores are greater than or equal to 20.
const results = scores.reduce((acc, score) => {
    if (score >= 20) {
        acc++;
    }
    return acc;
}, 0);

// Using reduce with an array of objects:
const userScores = [
    {player: 'Felipe', score: 70},
    {player: 'Maria', score: 50},
    {player: 'Carlos', score: 20},
    {player: 'Chipita', score: 1},
    {player: 'Felipe', score: 20},
];

// Sums the scores for the player 'Felipe'.
const felipeTotal = userScores.reduce((acc, score) => {
    if (score.player === 'Felipe') {
        acc += score.score;
    }
    return acc;
}, 0);

console.log(felipeTotal);