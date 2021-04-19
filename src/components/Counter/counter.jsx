import React from "react";
import "./counter.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: Number(localStorage.getItem("count")) || 0,
      maxValue: localStorage.getItem("maxValue") || 100,
      minValue: localStorage.getItem("minValue") || 0,
      stepValue: Number(localStorage.getItem("stepValue")) || 1,
    };
  }

  componentDidUpdate() {
    localStorage.setItem("count", this.state.counter);
    localStorage.setItem("maxValue", this.state.maxValue);
    localStorage.setItem("minValue", this.state.minValue);
    localStorage.setItem("stepValue", this.state.stepValue);
  }

  handleMaxValue = (e) => {
    this.setState((prevState) => ({
      maxValue: Number(e.target.value),
    }));
  };

  handleMinValue = (e) => {
    this.setState((prevState) => ({
      minValue: Number(e.target.value),
    }));
  };

  handleStepValue = (e) => {
    this.setState((prevState) => ({
      stepValue: Number(e.target.value),
    }));
  };

  handleInc = () => {
    console.log(typeof Number(localStorage.getItem("stepValue")));
    this.setState((prevState) => ({
      counter: prevState.counter + this.state.stepValue,
    }));
  };

  handleDec = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - this.state.stepValue,
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
        <label>
          max value
          <input
            type="number"
            onChange={this.handleMaxValue}
            value={this.state.maxValue}
          />
        </label>
        <label>
          min value
          <input
            type="number"
            onChange={this.handleMinValue}
            value={this.state.minValue}
            min="0"
          />
        </label>
        <label>
          step value
          <input
            type="number"
            onChange={this.handleStepValue}
            value={this.state.stepValue}
            min="1"
          />
        </label>

        <p>{this.state.counter}</p>
        <button
          onClick={this.handleInc}
          disabled={this.state.counter >= this.state.maxValue}
        >
          +
        </button>
        <button
          onClick={this.handleDec}
          disabled={this.state.counter <= this.state.minValue}
        >
          -
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
