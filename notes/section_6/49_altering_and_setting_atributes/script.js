// Altering the Atributes:

// The '.getAttribute' method returns the value of the specified attribute of an element.
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// The '.setAttribute' method sets the value of the specified attribute for an element.
link.setAttribute('href', "https://www.google.com/webhp?hl=pt-BR&ictx=0&sa=X&ved=0ahUKEwii8-3bidiOAxX6q5UCHWNyLL0QpYkNCAo")

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');
console.log(msg.getAttribute('class'));