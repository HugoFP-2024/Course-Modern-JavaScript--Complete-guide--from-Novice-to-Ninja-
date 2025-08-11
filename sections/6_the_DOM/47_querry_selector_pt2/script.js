// Querrying the DOM:

// The '.getElementById' is used to get an elemnt specificly by it's ID
const lorem = document.getElementById('lorem');
console.log(lorem);

// The '.getElementByClassName', does exactly what his name says, returns elements by their respective class name. 
// IMPORTANT NOTE: This method returns a HTML Collection that, like node lists, are similar to arrays, but it doesn't have the same methods as an node list. For example, you can't use '.forEach' in it. 
const errors = document.getElementsByClassName('error');
console.log(errors);

// The '.getElementByTagName' return, like the name says, all the respective tags in the document.
// IMPORTANT NOTE: This also returns a HTML Collection!
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Note: All these methods can be replaced by the '.querrySelector()' and '.querrySelectorAll()' wich is way more convenient, since it returns always a node list, that doesn't need to be converted to an array most of the times, different than the HTML Collections.