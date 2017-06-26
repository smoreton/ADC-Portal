import React, { Component } from "react";
import styled from "styled-components";

import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";

import { GridLayout, GridBox } from "./FlexBox";
import CatalogueCardComponent from "./CatalogueCardComponent";

const DropDownContainer = styled.div`
 width:100%;
  margin:auto;
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  padding-right:10px;
  `;

class CataloguePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    let newCategory;
    switch (value) {
      case 0:
        newCategory = "all";
        break;
      case 1:
        newCategory = "Tools/Software";
        break;
      case 2:
        newCategory = "Infrastructure";
        break;
      case 3:
        newCategory = "Networks";
        break;
      default:
        newCategory = "all";
    }

    this.props.onServiceCategoryChange(newCategory);
    this.setState({ value: value });
  };

  renderServiceCatalogueCards = array => {
    return array.map(item => {
      return (
        <GridBox key={item.serviceTitle}>
          <CatalogueCardComponent service={item} />
        </GridBox>
      );
    });
  };

  createFilteredServiceArray = (array, category) => {
    if (category === "All") {
      return this.renderServiceCatalogueCards(array);
    } else {
      return this.renderServiceCatalogueCards(
        array.filter(item => {
          return item.category === category;
        })
      );
    }
  };

  render() {
    return (
      <div>
        <DropDownContainer>
          <SelectField
            floatingLabelStyle={{ color: "#00bcd4" }}
            floatingLabelText="Category Type"
            maxHeight={175}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={0} primaryText="All Categories" />
            <MenuItem value={1} primaryText="Tools/Software" />
            <MenuItem value={2} primaryText="Infrastructure" />
            <MenuItem value={3} primaryText="Networks" />
          </SelectField>
        </DropDownContainer>

        <GridLayout>
          {this.createFilteredServiceArray(
            this.props.serviceDetails,
            this.props.selectedServiceCategory
          )}
        </GridLayout>
      </div>
    );
  }
}
export default CataloguePage;
