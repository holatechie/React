class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = { count: 700, name: "change me by clicking on + 1" }; //** it is default value **/
  }

  handleAddOne() {
    this.setState(() => {
      return { count: this.state.count + 1, name: "Yay! you changed it" };
    });
  }

  handleMinusOne() {
    //** You can also pass parameter or just write this.state.variableName ***/
    console.log(this.state.count);
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  handleReset() {
    console.log(this.state.count);
    this.setState(() => {
      return { count: 0, name: "It's Reseted" };
    });
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

// let count = 0;

// const buttonStyle = {
//   background: "pink",
//   margin: "1rem",
//   borderRadius: "5px",
// };

// const increment = () => {
//   count = count + 1;
//   console.log(`${count - 1} is added = ${count}`);
//   renderCounterApp();
// };

// const decrement = () => {
//   count--;
//   console.log(`${count + 1} is subtracted = ${count}`);
//   renderCounterApp();
// };

// const resetCount = () => {
//   count = 0;
//   console.log(count);
//   console.error("just for fun lol");
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1 style={{ color: "#07660e" }}>Counter: {count}</h1>
//       <button id="my-id" onClick={increment} style={buttonStyle}>
//         Add 1 in your count
//       </button>
//       <button onClick={decrement} style={buttonStyle}>
//         Subtract by 1 in your count
//       </button>
//       <button onClick={resetCount} style={buttonStyle}>
//         Reset count
//       </button>
//       {/* <form>
//         <input defaltValue="Hello" onChange={(e) => e.value}></input>
//       </form> */}
//     </div>
//   );

//   // this will console whole object of templateTwo
//   // console.log(templateTwo);
//   ReactDOM.render(templateTwo, document.getElementById("root"));
// };

// renderCounterApp();
