// Object Oriented Programming:
// Think about a moment in your project where you have to store data from a user in an object, and for each user you use the following code:
const userOne = {

    username: 'Mario',
    email: 'mario@gmail.com',

    login() {
        return 'The user has logged in!';
    },
    logout() {
        return 'The user has logged out!';
    },
};

console.log(userOne.username, userOne.login());

// This works, but if you need to create multiple new users, the code can get extensive and a lot of code will be repeated. To avoid that, we can create our own object class constructor function for 'User':
class User {
    constructor(username) {
        // Set up properties of user:
        this.username = username;
        this.score = 0;
    }

    // Setting up methods:
    login() {
        console.log(`${this.username} has logged in!`);
        return this;
    }
    logout() {
        console.log(`${this.username} has logged out!`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

// The 'new' keyword
// 1 - it creates a new empty object {}, creating an instance of the User class
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
const userTwo = new User('Mario');
console.log(userTwo);

userTwo.login();
userTwo.logout();
userTwo.incScore();

// We can chain methods by applying the 'return this' keyword, making the method return the instance of the object, instead of returning undefined by default.
userTwo.login().incScore().incScore();

// Benefits of using classes:
// - Code organization and reusability
// - Consistent object structure
// - Encapsulation of data and behavior
// - Easy to extend functionality through inheritance
// - Better maintainability as your application grows