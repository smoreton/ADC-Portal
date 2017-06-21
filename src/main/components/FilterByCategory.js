import React, { Component } from "react";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

class FilterByCategory extends Component {
  handleChange = value => {
    this.props.filterCategory(value);
  };

  render() {
    return (
      <div>
        <SelectField
          floatingLabelStyle={{ color: "#00bcd4" }}
          floatingLabelText="Category Type"
          maxHeight={175}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value="all" primaryText="All Categories" />
          <MenuItem value="Tools/Software" primaryText="Tools/Software" />
          <MenuItem value="Infrastructure" primaryText="Infrastructure" />
          <MenuItem value="Networks" primaryText="Networks" />
        </SelectField>
      </div>
    );
  }
}

export default FilterByCategory;
