import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Posts from "./Posts";

class Routing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routing;
