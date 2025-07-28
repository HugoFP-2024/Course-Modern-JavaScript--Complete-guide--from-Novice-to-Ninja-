// Keyboard validation using RegExp:

// Select the form, username input field, and feedback element
const form = document.querySelector('.signup-form');
const textField = document.querySelector('#username');
const liveFeedback = document.querySelector('.liveFeedback');

// The 'keyup' event is fired when the user releases a key. It can also check if Ctrl, Alt, or Shift keys are pressed. 'keydown' is fired when the key is first pressed.
form.addEventListener('keyup', event => {
    console.log(event);
    console.log(event.getModifierState('CapsLock'));

    // Get the current value of the username field
    const username = form.username.value;
    // Pattern allows only letters, 1 to 12 characters
    const pattern = /^[a-zA-Z]{1,12}$/;

    if (pattern.test(username)) {
        textField.setAttribute('class', 'success');
        // textField.classList.add('success');
        liveFeedback.textContent = 'Keep going!';
    } else {
        textField.setAttribute('class', 'error');
        // textField.classList.add('error');
        liveFeedback.textContent = 'Oh no!';
    }
});