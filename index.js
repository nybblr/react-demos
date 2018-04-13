const root = document.querySelector('.react-root');
const h = React.createElement;

const allBlogs = [
    { id: '1', title: 'Hello world', body: 'Lorem ipsum.' },
    { id: '2', title: 'Goodbye world', body: 'Muspi merol.' },
];

let Greeting = ({ person }) => h('h1', { className: 'greeting' }, `Hello ${person}!`);
let Title = () => h('h1', null, 'React');
let Footer = () => h('footer', { children: 'Copyright 2018' });

let DeleteBlogButton = ({ blog, removeBlog }) =>
    h('button', {
        className: 'big-red',
        onClick: () => removeBlog(blog)
    }, 'Remove Blog');

let EditBlogButton = ({ blog, editBlog }) =>
    h('button', {
        onClick: () => editBlog(blog)
    }, 'Edit Blog');

let EditBlogForm = ({ blog, blogBeingEdited, updateTitle, updateBody, saveBlog }) =>
    h('form', null, [
        h('input', { value: blogBeingEdited.title, onChange: (event) => updateTitle(blogBeingEdited, event.target.value) }),
        h('input', { value: blogBeingEdited.body, onChange: (event) => updateBody(blogBeingEdited, event.target.value) }),
        h('button', { onClick: () => saveBlog(blogBeingEdited) }, 'Save'),
    ]);

let BlogRow = ({ blog, blogBeingEdited, removeBlog, editBlog, updateTitle, updateBody, saveBlog }) =>
    h('div', null, [
        h('h1', null, blog.title),
        h(DeleteBlogButton, { blog, removeBlog }),
        h(EditBlogButton, { blog, editBlog }),
        blogBeingEdited && blog.id === blogBeingEdited.id && h(EditBlogForm, { blog, blogBeingEdited, updateTitle, updateBody, saveBlog }),
        h('p', null, blog.body),
    ]);

let BlogList = ({
    blogs,
    blogBeingEdited,
    removeBlog,
    editBlog,
    updateTitle,
    updateBody,
    saveBlog
}) =>
    h('div', { className: 'blog-list' },
        blogs.map(blog => h(BlogRow, { blog, blogBeingEdited, removeBlog, editBlog, updateTitle, updateBody, saveBlog }))
    );

class BlogListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: allBlogs,
            blogBeingEdited: null
        };
    }

    render() {
        // let blogs = this.state.blogs;
        // let blogBeingEdited = this.state.blogBeingEdited;
        let { blogs, blogBeingEdited } = this.state;

        let removeBlog = (blogToDelete) => {
            let { id } = blogToDelete;
            let prunedBlogs = this.state.blogs.filter((blog) => id !== blog.id);
            this.setState({
                blogs: prunedBlogs
            });
        };

        let editBlog = (blogToEdit) => {
            this.setState({
                blogBeingEdited: Object.assign({}, blogToEdit)
            });
        };

        let updateTitle = (blogToEdit, title) => {
            this.setState({
                blogBeingEdited: Object.assign({}, blogToEdit, { title })
            });
        };

        let updateBody = (blogToEdit, body) => {
            this.setState({
                blogBeingEdited: Object.assign({}, blogToEdit, { body })
            });
        };

        let saveBlog = (blogToEdit) => {
            let blogs = this.state.blogs.slice();
            let blog = blogs.find(blog => blog.id === blogToEdit.id);
            Object.assign(blog, blogToEdit);
            this.setState({
                blogs,
                blogBeingEdited: null
            });
        };

        return h('div', null, [
            h(Title),
            h(Greeting, { person: 'Jonathan' }),
            h(BlogList, { blogs, blogBeingEdited, removeBlog, editBlog, updateTitle, updateBody, saveBlog }),
            h(Footer)
        ]);
    }
}

ReactDOM.render(h(BlogListPage), root);