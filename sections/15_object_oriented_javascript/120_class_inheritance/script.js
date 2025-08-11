// Class Inheritance:
// Class Inheritance is a way for us to create a new class that will have the same properties and methods of another class, but may have some new ones exclusive to itself. For example, an admin has the same properties as a regular user, but it may have some methods that a user doesn't have, like deleting a user.

class User {
    constructor(username) {
        // Set up properties of user:
        this.username = username;
        this.score = 0;
    }

    // Setting up methods:
    login() {
        console.log(`${this.username} has logged in!`);
        return this; // Returning 'this' allows for method chaining
    }
    logout() {
        console.log(`${this.username} has logged out!`);
        return this; // Returning 'this' allows for method chaining
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this; // Returning 'this' allows for method chaining
    }
}

class Admin extends User {
    constructor(username, title) {
        // The super keyword is used to access the constructor properties from the parent class, in this case, User, making it possible to create the same properties in the first constructor, but adding new ones. Super MUST be called in a derived class before creating a new property.
        super(username);
        this.title = title;
    }
    deleteUser(user) {
        // This method filters the users array to remove the specified user
        users = users.filter(u => {
            return u.username !== user.username;
        });
    }
}

const userTwo = new User('Mario');
const userThree = new Admin('Cesar', 'Ninja');

let users = [userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

// Note: This is a simplified example of inheritance. In real-world applications:
// - We might use private fields (# prefix) to protect data
// - We might implement getters and setters for controlled access to properties