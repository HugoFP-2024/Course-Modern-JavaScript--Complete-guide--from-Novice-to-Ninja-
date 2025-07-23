// Switch Statements

// Checks for a 'key' argument, and runs it's respective case (Must add a 'break', otherwise it will run all the next ones!)
// Note: it also considerates the type!

let grade = 'B';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    default:
        console.log('Invalid grade!');
        break;
}