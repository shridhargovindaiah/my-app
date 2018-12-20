import React, { Component } from "react";
import Button from "./../Common/Button";
import Header from "./../Common/Header";

class Counter extends Component {
  constructor() {
    super();
    //this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0
    };
  }

  handleClick = increment => {
    let count = this.state.count;
    if (isNaN(increment)) return;

    if (increment === 0) count = 0;
    else count = count + increment;
    this.setState({
      count
    });
  };

  render() {
    return (
      <div className="container m-auto text-center">
        <div className="row">
          <div className="col">
            <Header value={this.state.count} />
          </div>
        </div>
        <div className="row m-2 border-bottom-2" />
        <div className="row text-center">
          <Button
            classes="primary"
            name="Add 1"
            value="1"
            onClick={this.handleClick}
          />
          <Button
            classes="primary"
            name="Add 10"
            value="10"
            onClick={this.handleClick}
          />
          <Button
            classes="primary"
            name="Add 100"
            value="100"
            onClick={this.handleClick}
          />
          <Button
            classes="primary"
            name="Add 1000"
            value="1000"
            onClick={this.handleClick}
          />
        </div>
        <div className="row">
          <Button
            classes="danger"
            name="Reset"
            value="0"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
