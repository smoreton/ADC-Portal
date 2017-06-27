import React, { Component } from "react";

import { GridLayout, GridBox } from "./FlexBox";
import FilterCategoryComponent from "./FilterCategoryComponent";
import CatalogueCardComponent from "./CatalogueCardComponent";

class CataloguePage extends Component {
  constructor(props) {
    super(props);

    this.categoryChange = this.categoryChange.bind(this);
    this.selectedService = this.selectedService.bind(this);
  }

  /**
     * Updates service category contained in state for service filtering
     */
  categoryChange = value => {
    this.props.onServiceCategoryChange(value);
  };

  /**
     * Updates the selected service list contained in state for routing to checkout page
     */
  selectedService = value => {
    this.props.onServiceSelected(value);
  };

  renderServiceCatalogueCards = array => {
    return array.map(item => {
      return (
        <GridBox key={item.serviceTitle}>
          <CatalogueCardComponent
            tag={this.getColor(this.props.serviceCategories, item.category)}
            service={item}
            onChecked={this.selectedService}
          />
        </GridBox>
      );
    });
  };

  componentDidMount() {
    try {
      this.props.onServiceCategoryChange("All");
    } catch (e) {
      return;
    }
  }

  getColor = (array, category) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].serviceTypeCategory === category) {
        return array[i].serviceCategoryColor;
      }
    }
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
