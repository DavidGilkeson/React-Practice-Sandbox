//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "David Gilkeson";
const year = new Date().getFullYear();

//It should display 2 paragraph HTML elements.

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright by {year} </p>
  </div>,
  document.getElementById("root")
);

