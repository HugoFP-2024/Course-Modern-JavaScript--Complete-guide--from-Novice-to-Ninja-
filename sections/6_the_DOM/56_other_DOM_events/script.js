const copy = document.querySelector('.copy-me');
const box = document.querySelector('.box');

// The 'copy' event is triggered when the user copies the content of the element.
copy.addEventListener('copy', () => {
    console.log('Hello?');
});

// The 'mousemove' event is triggered when the mouse pointer moves over the element.
box.addEventListener('mousemove', event => {
    box.textContent = `X Position - ${event.offsetX} Y Position - ${event.offsetY}`;
});

// The 'wheel' event is triggered when the user scrolls the mouse wheel anywhere in the document.
document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY);
});