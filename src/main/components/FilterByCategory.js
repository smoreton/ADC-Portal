import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 180
  }
};

class FilterByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "All" };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >

          <MenuItem value="All" primaryText="All Categories" />
          <MenuItem value="Tools/Software" primaryText="Tools/Software" />
          <MenuItem value="Infrastructure" primaryText="Infrastructure" />
          <MenuItem value="Networks" primaryText="Networks" />
        </DropDownMenu>
      </div>
    );
  }
}

export default FilterByCategory;
