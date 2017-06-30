import React, { Component } from "react";
import styled from "styled-components";

import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

const DropDownContainer = styled.div`
 width:100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  padding-right:10px;
  ${props => props.mixin && props.mixin.cssStyles}
  `;

class FilterCategoryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  generateMenuItems = array => {
    return array.map(arrayItem => {
      return (
        <MenuItem
          key={arrayItem.serviceTypeCategory}
          value={arrayItem.id}
          primaryText={arrayItem.serviceTypeCategory}
        />
      );
    });
  };

  handleChange = (event, value) => {
    let newCategory = this.updateServiceCategory(
      this.props.categoryList,
      value
    );

    this.props.onCategoryChange(newCategory[0].serviceTypeCategory);
    this.setState({ value: newCategory.id });
  };

  updateServiceCategory = (array, value) => {
    return array.filter(item => {
      return item.serviceTypeCategory === array[value].serviceTypeCategory;
    });
  };

  render() {
    return (
      <DropDownContainer>
        <SelectField
          floatingLabelStyle={{ color: "#00bcd4" }}
          floatingLabelText="Category Type"
          maxHeight={160}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.generateMenuItems(this.props.categoryList)}
        </SelectField>
      </DropDownContainer>
    );
  }
}

export default FilterCategoryComponent;
