const root = document.querySelector("#app");

function Child(props) {
  return (
    <p>
      Hi, my name is {props.name} and I am {props.age} years old
    </p>
  );
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 9,
    };
    this.changeAge = this.changeAge.bind(this);
  }

  changeAge() {
    const newAge = Math.floor(Math.random() * 10);
    this.setState({ age: newAge }); // correct
  }

  render() {
    return (
      <div>
        <h1>This is a title</h1>
        <Child name="Alice" age={this.state.age} />
        <button onClick={this.changeAge}>Get Age</button>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, root);
