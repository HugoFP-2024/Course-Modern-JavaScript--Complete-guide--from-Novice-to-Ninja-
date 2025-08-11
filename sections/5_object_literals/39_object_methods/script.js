// Methods
// Methods within an object are like functions, but just like other methods within JS, they are bound within their object.

let user = {
    name: 'Joseph',
    age: 30,
    email: 'joseph@gmail.com',
    married: true,
    blogs: ['10 things i like', 'funny moments'],

    login: () => {
        console.log('User logged in!');
    }
};

user.login();