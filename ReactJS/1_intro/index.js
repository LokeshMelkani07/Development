import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "This is heading One"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "This is heading Two"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
