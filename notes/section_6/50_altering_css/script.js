// Modifying CSS styles:

// The '.style' property is used to set or get the style properties of a document element without removing existing ones.
const title = document.querySelector('h1');
title.style.margin = '50px';

// It is better to use '.classList' with '.add()' or '.remove()' to change classes, instead of 'setAttribute'.
const message = document.querySelector('.error');
// message.setAttribute('class', 'success');
message.classList.add('success');
message.classList.remove('error');
// You can also use '.replace()' to replace one class with another.
message.classList.replace('error', 'success');

// Add classes to multiple elements based on the text they contain.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
    ['success', 'error'].forEach(type => 
        paragraph.innerText.includes(type) && paragraph.classList.add(type)
    );
});

// Note: Using '.toggle()' on '.classList' can also add or remove classes.