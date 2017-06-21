import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import styled from "styled-components";

/**const DropDownContainer = styled.div`
 width:90%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end ;
 `;*/

const styles = {
  customWidth: {
    width: 180
  }
};

class FilterByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
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
