// Object Oriented Programming:
// Imagine a situation in your project where you need to store user data in an object, and for each user you use the following code:
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

// This works, but if you need to create multiple users, the code can become repetitive and lengthy. To avoid that, we can create our own class constructor function for 'User':
class User {
    constructor(username) {
        // Set up properties for the user:
        this.username = username;
        this.score = 0;
    }

    // Define methods for the user:
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

// The 'new' keyword:
// 1 - Creates a new empty object {}, which is an instance of the User class.
// 2 - Binds the value of 'this' to the new empty object.
// 3 - Calls the constructor function to 'build' the object.
const userTwo = new User('Mario');
console.log(userTwo);

userTwo.login();
userTwo.logout();
userTwo.incScore();

// We can chain methods by returning 'this' from each method, which returns the instance of the object instead of undefined by default.
userTwo.login().incScore().incScore();

// Benefits of using classes:
// - Code organization and reusability
// - Consistent object structure
// - Encapsulation of data and behavior
// - Easy to extend functionality through inheritance
// - Better maintainability as your application grows