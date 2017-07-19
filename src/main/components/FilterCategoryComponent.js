import React, { Component } from "react";
import styled from "styled-components";

import FlatButton from "material-ui/FlatButton";

const ButtonContainer = styled.div`
  width: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  backgroundColor: white;
  border-style: 3px groove;
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
          onTouchTap={() => {
            this.handleChange(arrayItem.serviceTypeCategory);
          }}
        />
      );
    });
  };

  handleChange = value => {
    let newCategory = this.updateServiceCategory(
      this.props.categoryList,
      value
    );

    this.props.onCategoryChange(newCategory[0].serviceTypeCategory);
    this.setState({ value: newCategory.id });
  };

  updateServiceCategory = (array, value) => {
    return array.filter(item => {
      return item.serviceTypeCategory === value;
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
