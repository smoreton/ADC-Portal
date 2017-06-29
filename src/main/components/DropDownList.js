import React, { Component } from "react";

import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

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
        <MenuItem
          key={uniqueKey}
          value={item.dropDownId}
          primaryText={item.dropDownValue}
        />
      );
    });
  };

  handleChange = (event, value) => {
    this.setState({ value: value });

    this.props.onUpdate(this.props.selectedService, value);
  };

  render() {
    return (
      <SelectField
        maxHeight={160}
        value={this.state.value}
        onChange={this.handleChange}
      >
        {this.generateDropDownList(this.props.content)}
      </SelectField>
    );
  }
}

export default DropDownList;
