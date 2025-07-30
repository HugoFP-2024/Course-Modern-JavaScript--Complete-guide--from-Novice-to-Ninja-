// Filter Method
// It is responsible for check each elemnt of the array in each iteration and, receive a callback function responsible to run a check that, if the item does not pass, it will be filtered out of the array

let scores = [15, 20, 5, 25, 40, 10, 15, 25];

// Filters scores greater than or equal to 20.
scores = scores.filter(score => {
    return score >= 20;
});

console.log(scores);

// Filtering an array of objects:
const users = [
    {name: 'Cesar', premium: true},
    {name: 'Mario', premium: false},
    {name: 'Luigi', premium: true},
    {name: 'Donald', premium: false},
];

// const premiumusers = users.filter(user =>{
//     return user.premium;
// });
const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);