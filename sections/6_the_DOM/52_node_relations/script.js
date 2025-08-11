// Node Relationships

// The '.children' property returns all child elements of an element as an HTMLCollection.
let article = document.querySelector('article');
console.log(article.children);

// Convert the HTMLCollection to an Array.
article = Array.from(article.children);
console.log(article);

// Add a class to each child element.
article.forEach(child => {
    child.classList.add('article-element');
});

// You can also get the parent, next sibling, or previous sibling of an element.
// You can chain multiple elements.
const title = document.querySelector('h2');
console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
console.log(title.parentElement.parentElement.children);



