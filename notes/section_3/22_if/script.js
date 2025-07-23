// If Statement

// Responsible for running a code block only if its specified condition equals 'true'
// Also has the 'else' statement, wich runs another code block if the condition in the 'if' it's not satisfied

let age = 40;
if (age === 40) {
    console.log(age);
} 
else if (age >= 40) {
    console.log('Damn!');
}
else{
    console.log('Really?');
}