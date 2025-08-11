// Switch Statements

// Checks for a 'key' argument and runs its respective case (Must add a 'break', otherwise it will run all the following cases!)
// Note: It also considers the type!

let grade = 'B';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    default:
        console.log('Invalid grade!');
        break;
}