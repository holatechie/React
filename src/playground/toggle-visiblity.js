let visible = false;
5;
const isVisible = (visible) => {
  return visible === true ? <h4>Hey its visible</h4> : <h4></h4>;
  rerenderingElement();
};

const onClicking = (event) => {
  visible = !visible;
  console.log(!visible);
  rerenderingElement();
};

const rerenderingElement = () => {
  const Visibility = (
    <div>
      <h1>Visibility Toggle: </h1>
      <button onClick={onClicking} name="action">
        {visible ? "Hide Action" : "Show Action"}
      </button>
      {isVisible(visible)}
    </div>
  );

  ReactDOM.render(Visibility, document.getElementById("root"));
};

rerenderingElement();
