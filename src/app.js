class Indecision extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Option />
        <Form></Form>
        <Options></Options>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>title</h1>
        <h2>Subtitle</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.hell.value;
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <h3>Action</h3>
        <form onSubmit={this.handlAddOption}>
          <input type="text" name="hell"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log("df");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>REMOVE ALL</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ul>Option Component</ul>
      </div>
    );
  }
}

class Form extends React.Component {
  handleAdd(e) {
    e.preventDefault();
    const focus = e.target.elements.focus.value;
    if (focus) {
      console.log(`Radius: ${focus / 2}`);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input type="number" name="focus" placeholder="Diameter"></input>
          <button>Calculate</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Indecision />, document.getElementById("root"));
