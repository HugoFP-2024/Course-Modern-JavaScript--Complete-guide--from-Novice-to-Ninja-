// Form Validation (using Reg.Ex):

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')

// Listen for the submit event and validate the username using a regular expression
form.addEventListener('submit', event => {
    event.preventDefault(); 

    const username = form.username.value;
    const pattern = /^[a-zA-Z]{12}$/;

    if (pattern.test(username)) {
        feedback.textContent = 'Username valid!';
    }
    else{
        feedback.textContent = 'Invalid username!';
    }
});
