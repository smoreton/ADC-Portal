import React, { Component } from "react";
import styled from "styled-components";

import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";

const ButtonContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 10px;
  ${props => props.mixin && props.mixin.cssStyles};
`;

const InnerButtonContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
        <FlatButton
          key={arrayItem.serviceTypeCategory}
          label={arrayItem.serviceTypeCategory}
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
      <ButtonContainer>
        <InnerButtonContainer>
          {this.generateMenuItems(this.props.categoryList)}
        </InnerButtonContainer>
      </ButtonContainer>
    );
  }
}

export default FilterCategoryComponent;
