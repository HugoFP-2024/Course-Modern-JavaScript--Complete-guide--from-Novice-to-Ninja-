// Quick example of uses for callback functions and 'forEach' in a practical HTML document.

const ul = document.querySelector('.people');

const people = ['Katarina', 'Ash', 'Papa Jhon'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple"> ${person} </li>`
});

ul.innerHTML = html;