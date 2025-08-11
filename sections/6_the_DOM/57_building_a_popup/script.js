const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

// Show the popup when the button is clicked.
button.addEventListener('click', () =>{
    popup.style.display = 'block';
});

// Hide the popup when the close button is clicked.
closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Hide the popup when clicking outside the popup content.
popup.addEventListener('click', event => {
    popup.style.display = 'none';
});
