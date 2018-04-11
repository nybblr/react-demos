const container = document.querySelector('.react-root');
const h = React.createElement;

// let greeting = h('h1', { className: 'greeting' }, "Hello world!");
// ReactDOM.render(greeting, container);

// let Greeting = ({ person }) => h('h1', { className: 'greeting' }, `Hello ${person}!`);
// ReactDOM.render(Greeting({ person: 'Jonathan' }), container);

let Greeting = ({ person }) => h('h1', { className: 'greeting' }, `Hello ${person}!`);
let Title = () => h('h1', null, 'React');
let Footer = () => h('footer', null, 'Copyright 2018');
// let Page = () => h('div', null, [
//     h(Title, null, []),
//     h(Greeting, { person: 'Jonathan' }, []),
//     h(Footer, null, [])
// ]);
// ReactDOM.render(h(Page, null, []), container);

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        let { counter } = this.state;
        let onClick = () => {
            this.setState({ counter: counter + 1 });
        };

        return h('p', null, [
            h('span', null, `${counter}`),
            h('button', { onClick }, 'Increment')
        ]);
    }
}

let Page = () => h('div', null, [
    h(Title, null, []),
    h(Greeting, { person: 'Jonathan' }, []),
    h(Counter, null, []),
    h(Footer, null, [])
]);
ReactDOM.render(h(Page, null, []), container);