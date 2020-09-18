class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = { visible: false };
  }

  handleToggle() {
    console.log(this.state.visible);
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>VISIBILITY TOGGLE</h1>
        <button onClick={this.handleToggle}>
          {this.state.visible ? "Hide Message" : "Show Message"}
        </button>
        {this.state.visible ? <p>This Is Massage</p> : <p></p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("root"));

// let visible = false;
// 5;
// const isVisible = (visible) => {
//   return visible === true ? <h4>Hey its visible</h4> : <h4></h4>;
//   rerenderingElement();
// };

// const onClicking = (event) => {
//   visible = !visible;
//   console.log(!visible);
//   rerenderingElement();
// };

// const rerenderingElement = () => {
//   const Visibility = (
//     <div>
//       <h1>Visibility Toggle: </h1>
//       <button onClick={onClicking} name="action">
//         {visible ? "Hide Action" : "Show Action"}
//       </button>
//       {isVisible(visible)}
//     </div>
//   );

//   ReactDOM.render(Visibility, document.getElementById("root"));
// };

// rerenderingElement();
