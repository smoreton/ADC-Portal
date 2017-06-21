import React from "react";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import styled from "styled-components";

const DropDownContainer = styled.div`
  width:90%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end ; 
 `;

class FilterByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <DropDownContainer>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="All Categories" />
          <MenuItem value={2} primaryText="Tools/Software" />
          <MenuItem value={3} primaryText="Infrastructure" />
          <MenuItem value={4} primaryText="Networks" />
        </DropDownMenu>
      </DropDownContainer>
    );
  }
}

export default FilterByCategory;
