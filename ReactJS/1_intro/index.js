import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="lokesh" key="name">
    This is Lokesh Melkani
  </h1>
);

const InputComponent = () => {
  return (
    <div>
      <input type="datetime" name="" id="" />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="outer-div">
      {heading}
      {console.log("Hello world")}
      <h3>{`The result of 2 + 3 is ${2 + 3}`}</h3>
      <h2>This is another heading</h2>
      <div className="div-second">
        <h1>Another h1</h1>
      </div>
      <InputComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
