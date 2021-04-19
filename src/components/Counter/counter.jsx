import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: Number(localStorage.getItem("count")) || 0,
    };
  }

  componentDidUpdate() {
    localStorage.setItem("count", this.state.counter);
  }

  handleInc = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleDec = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });

    localStorage.clear();
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleInc}>+</button>
        <button
          onClick={this.handleDec}
          disabled={this.setState.counter < 0 ? true : false}
        >
          -
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
