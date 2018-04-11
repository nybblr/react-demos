const container = document.querySelector('.react-root');

let Greeting = ({ person }) => <h1 className="greeting">Hello {person}!</h1>
let Title = () => <h1>React</h1>
let Footer = () => <footer>Copyright 2018</footer>

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

        return (
            <p>
                <span>{counter}</span>
                <button onClick={onClick}>Increment</button>
            </p>
        );
    }
}

let Page = () =>
    <div>
        <Title />
        <Greeting person="Jonathan" />
        <Counter />
        <Footer />
    </div>

ReactDOM.render(<Page />, container);