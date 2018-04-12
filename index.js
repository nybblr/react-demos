const root = document.querySelector('.react-root');
const h = React.createElement;

let allBlogs = [
    { id: '1', title: 'Hello world', body: 'Lorem ipsum.' },
    { id: '2', title: 'Goodbye world', body: 'Muspi merol.' },
];

let Greeting = ({ person }) => h('h1', { className: 'greeting' }, `Hello ${person}!`);
let Title = () => h('h1', null, 'React');
let Footer = () => h('footer', { children: 'Copyright 2018' });

let removeBlog = (blogToDelete) => {
    console.log('I would like to delete ' + blogToDelete.title);
    let { id } = blogToDelete;
    allBlogs = allBlogs.filter((blog) => id !== blog.id);
    update();
};

let DeleteBlogButton = (blog) =>
    h('button', {
        className: 'big-red',
        onClick: () => removeBlog(blog)
    }, 'Remove Blog');

let BlogRow = (blog) =>
    h('div', null, [
        h('h1', null, blog.title),
        h(DeleteBlogButton, blog),
        h('p', null, blog.body),
    ]);

let BlogList = ({ blogs }) =>
    h('div', { className: 'blog-list' },
        blogs.map(blog => h(BlogRow, blog))
    );

let Page = ({ blogs }) => h('div', null, [
    Title(),
    Greeting({ person: 'Jonathan' }),
    h(BlogList, { blogs }),
    h(Footer)
]);

let update = () => {
    ReactDOM.render(h(Page, { blogs: allBlogs }, []), root);
}

update();