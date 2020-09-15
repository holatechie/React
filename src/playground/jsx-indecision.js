class Indecision extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle =
      "Your life is in your hands. So hold your rod and never give up...";
    const action =
      "Get up and never give up until it is archived... Nothing is impossible";
    const options = ["one", "two", "three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action action={action} />
        <Option options={options} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class AddOption extends React.Component {
  removeAll() {
    console.log("removed all");
  }
  render() {
    return (
      <div>
        <button>Add Options</button>
        <br />
        <button onClick={this.removeAll}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    console.log(this.props.options);
    return (
      <div>
        <ul>Option Component</ul>
        <p>length of option {this.props.options.length}</p>
        {this.props.options.map((prop) => (
          <li key={prop}>{prop} Option</li>
        ))}
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<Indecision />, document.getElementById("root"));
