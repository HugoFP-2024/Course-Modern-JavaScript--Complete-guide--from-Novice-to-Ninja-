// Querrying the DOM:
// The '.querySelector' method in the 'document' object is used to get a part of the HTML. In the following exemple, it goes up to bottom of the 'document' and returns the first 'p' tag in the HTML
const paragraph1 = document.querySelector('p');

// In the second example, it goes after the first specfied class in the HTML, wich is '.error'
const paragraph2 = document.querySelector('.error');

// In the third example, it returns a 'div' that has the class 'error'.
const paragraph3 = document.querySelector('div.error');

// The '.querrySelectorAll method returns all nodes in the HTML who match the respective CSS selectors, as an node list, wich is very similar to an array (Note: A node list don't have all array's methods). In the following example, all 'p' tags are returned as a node list
const paragraph4 = document.querySelectorAll('p');
paragraph4.forEach(paragraph =>{
    console.log(paragraph);
})

// In the second example, it returns all elements with the '.error' class
const paragraph5 = document.querySelectorAll('.error');
paragraph5.forEach(paragraph =>{
    console.log(paragraph);
})

// Note: You can also get an element by an ID, you just have to use the # notation.