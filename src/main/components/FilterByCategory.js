import React from "react";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

class FilterByCategory extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event, index, value) => this.setState({ value });

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
          <MenuItem value={1} primaryText="All Categories" />
          <MenuItem value={2} primaryText="Tools/Software" />
          <MenuItem value={3} primaryText="Infrastructure" />
          <MenuItem value={4} primaryText="Networks" />

        </SelectField>
      </div>
    );
  }
}

export default FilterByCategory;
