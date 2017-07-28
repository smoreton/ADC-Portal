import React, { Component } from "react";

class DropDownList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  generateDropDownList = array => {
    return array.map((item, uniqueKey) => {
      return (
        <option
          key={uniqueKey}
          value={item.dropDownId}
          label={item.dropDownValue}
        />
      );
    });
  };

  handleChange = (event, key, value) => {
    this.setState({ value: value });

    let dropDownItem = this.props.dropDownContent[value].dropDownKey;

    this.props.onUpdate(this.props.selectedService, value, dropDownItem);
  };

  render() {
    return (
      <select onChange={this.handleChange}>
        <option value={this.state.value}>Select</option>
        {this.generateDropDownList(this.props.dropDownContent)}
      </select>
    );
  }
}

export default DropDownList;
