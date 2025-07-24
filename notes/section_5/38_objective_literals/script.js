// Object Literal notation:
// Object literals are objects that receive properties that relate to something, like a user.
let user = {
    name: 'Joseph',
    age: 30,
    email: 'joseph@gmail.com',
    married: true,
    blogs: ['10 things i like', 'funny moments']
};

// These are some ways to display a value within an object
console.log(user);
console.log(user.name);
console.log(user['name']);

// These are some ways to update a value in an object
user.age = 35;
user['name'] = 'Cesar';
