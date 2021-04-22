import React from "react";
import "./search.css";
import Select from "react-select";

const options = [];
function renderCountires() {
  let url = "https://restcountries.eu/rest/v2/all";

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      data.map((el) => {
        let push = { value: [el.name], label: [el.name] };
        options.push(push);
      });
      console.log(typeof options);
    });
}

renderCountires();

export default class Search extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
