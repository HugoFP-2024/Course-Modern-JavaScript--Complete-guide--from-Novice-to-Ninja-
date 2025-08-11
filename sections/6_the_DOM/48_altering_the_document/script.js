// Modifying the DOM:

// The '.innerText' property returns the text content of an HTML element.
const paragraph = document.querySelector('p');
paragraph.innerText = 'I love pancakes!!'

// Update the text of all elements with the class 'error'.
const paragraphs = document.querySelectorAll('.error');
paragraphs.forEach(para => {
    para.innerText = 'Look at that dog!'
})

// The '.innerHTML' property is used to get or set the HTML content of an element.
const content = document.querySelector('.content');

const people = ['Cesar', 'Penelope'];
people.forEach(person => {
    content.innerHTML += `<p> ${person} </p>`
})