// 'This' keyword
// 'this' is a context object, representing the context in which it is executed. In the following example, 'this' refers to the object 'user'

let user = {
    name: 'Joseph',
    age: 30,
    email: 'joseph@gmail.com',
    married: true,
    blogs: ['10 things i like', 'funny moments'],

    // When writing methods in an object, use the following shorthand notation to write them down:

    logBlogs(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
    // Note: If you use an arrow function, the keyword 'this' will be determined where you invoked the function, not where it was created.
};

user.logBlogs();