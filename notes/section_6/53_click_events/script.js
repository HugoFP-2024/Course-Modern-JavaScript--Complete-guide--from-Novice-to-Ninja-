// Click events, adding and removing elements, and event bubbling/delegation:
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('You have clicked me!');

    // ul.innerHTML += '<li> Hello! </li>';

    const li = document.createElement('li');
    li.textContent = 'Something new...';
    ul.append(li);
    ul.prepend(li);
    ul.event
});

// Example of adding click events to each 'li' element individually:

// const items = document.querySelectorAll('li');
// items.forEach(item =>{
//     item.addEventListener("click", event =>{
//         console.log('Item clicked!');
//         console.log(event);
//         console.log(event.target);

//         event.target.style.textDecoration = 'line-through';

//         // Remove the clicked element:
//         event.target.remove();

//         // Stop event bubbling
//         event.stopPropagation();
//     })
// })

// Use event delegation to handle clicks on 'li' elements.
ul.addEventListener('click', event =>{
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
