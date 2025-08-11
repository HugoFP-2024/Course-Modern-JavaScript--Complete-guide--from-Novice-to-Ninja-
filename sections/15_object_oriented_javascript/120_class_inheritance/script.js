// Class Inheritance:
// Class inheritance allows us to create a new class that has the same properties and methods as another class, but may also have some new ones exclusive to itself. For example, an admin has the same properties as a regular user, but may have methods that a user does not have, like deleting a user.

class User {
    constructor(username) {
        // Set up properties for the user:
        this.username = username;
        this.score = 0;
    }

    // Define methods for the user:
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
        // The super keyword is used to access the constructor of the parent class (User), allowing us to initialize the same properties as in the parent, and add new ones. Super MUST be called in a derived class before creating new properties.
        super(username);
        this.title = title;
    }
    deleteUser(user) {
        // This method filters the users array to remove the specified user.
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
// - We might use private fields (# prefix) to protect data.
// - We might implement getters and setters for controlled access to properties.