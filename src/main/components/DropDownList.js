import React, { Component } from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 40px;
  width: 45%;
  border: 1px solid;
  border-color: #ddd;
  border-radius: 3px;
  text-align: center;
`;

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
      <Select onChange={this.handleChange}>
        {this.generateDropDownList(this.props.dropDownContent)}
      </Select>
    );
  }
}

export default DropDownList;
