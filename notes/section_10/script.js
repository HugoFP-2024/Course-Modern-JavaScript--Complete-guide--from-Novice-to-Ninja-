const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchForm = document.querySelector('.search')

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html
};

const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLocaleLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLocaleLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};

addForm.addEventListener('submit', event => {
    event.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', event => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    };
});


searchForm.querySelector('input').addEventListener('keyup', () =>{
    const term = searchForm.querySelector('input').value.trim();
    
    filterTodos(term.toLocaleLowerCase());
});

searchForm.addEventListener('submit', event =>{
    event.preventDefault();
});