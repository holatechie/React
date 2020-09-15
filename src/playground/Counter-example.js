let count = 0;

const buttonStyle = {
  background: "pink",
  margin: "1rem",
  borderRadius: "5px",
};

const increment = () => {
  count = count + 1;
  console.log(`${count - 1} is added = ${count}`);
  renderCounterApp();
};

const decrement = () => {
  count--;
  console.log(`${count + 1} is subtracted = ${count}`);
  renderCounterApp();
};

const resetCount = () => {
  count = 0;
  console.log(count);
  console.error("just for fun lol");
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1 style={{ color: "#07660e" }}>Counter: {count}</h1>
      <button id="my-id" onClick={increment} style={buttonStyle}>
        Add 1 in your count
      </button>
      <button onClick={decrement} style={buttonStyle}>
        Subtract by 1 in your count
      </button>
      <button onClick={resetCount} style={buttonStyle}>
        Reset count
      </button>
      {/* <form>
        <input defaltValue="Hello" onChange={(e) => e.value}></input>
      </form> */}
    </div>
  );

  // this will console whole object of templateTwo
  // console.log(templateTwo);
  ReactDOM.render(templateTwo, document.getElementById("root"));
};

renderCounterApp();
