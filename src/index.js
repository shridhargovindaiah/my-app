import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing/Routing";

const element = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
  element
);
