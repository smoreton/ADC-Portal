import React, { Component } from "react";

import { GridLayout, GridBox } from "./FlexBox";
import FilterCategoryComponent from "./FilterCategoryComponent";
import CatalogueCardComponent from "./CatalogueCardComponent";

class CataloguePage extends Component {
  categoryChange = value => {
    this.props.onServiceCategoryChange(value);
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
        <FilterCategoryComponent
          categoryList={this.props.serviceCategories}
          onCategoryChange={this.categoryChange}
        />

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
