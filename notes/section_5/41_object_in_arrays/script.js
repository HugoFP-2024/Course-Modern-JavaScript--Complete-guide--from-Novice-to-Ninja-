// Objects in Arrays

const blogs = [

]

let user = {
    name: 'Joseph',
    age: 30,
    email: 'joseph@gmail.com',
    married: true,
    blogs:[{
        title: '10 things i like',
        likes: 10,
        available: true
        },
        {
        title: 'Lovely tales from Mars',
        likes: 23,
        available: false
        }
    ],
    logBlogs(){
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
};

user.logBlogs();