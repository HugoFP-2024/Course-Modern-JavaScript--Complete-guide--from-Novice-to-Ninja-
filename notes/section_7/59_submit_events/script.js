// Form Events:

// When listening for a form event, you need to attach the event listener to the form itself, not to the 'submit' button!
const username = document.querySelector('#username');
const form = document.querySelector('.signup-form');

// Listen for the submit event on the form
form.addEventListener('submit', event => {
    // You can prevent default actions (like the auto-refresh of the page) with the following method:
    event.preventDefault(); 

    // Both of these work to get the value submitted in the form. In the second one, we access the form and the ID of the input we want from it.
    console.log(username.value);
    console.log(form.username.value);
});
