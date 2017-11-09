import React, { Component } from "react";
import { GridLayout, GridBox } from "./FlexBox";
import FilterCategoryComponent from "./FilterCategoryComponent";
import CatalogueCardComponent from "./CatalogueCardComponent";
import AppNavBar from "./AppNavBar";

class CataloguePage extends Component {
  constructor(props) {
    super(props);

    this.categoryChange = this.categoryChange.bind(this);
    this.selectedService = this.selectedService.bind(this);
    this.deselectedService = this.deselectedService.bind(this);
  }

  /**
     * Updates service category contained in state for service filtering
     */
  categoryChange = value => {
    this.props.onServiceCategoryChange(value);
  };

  /**
     * Updates the selected service list contained in state to include a selected service
     */
  selectedService = value => {
    this.props.onServiceSelected(value);
  };

  /**
     *Updates the selected service list contained in state to remove a deselected service
     */
  deselectedService = value => {
    this.props.onServiceDeselected(value);
  };

  renderServiceCatalogueCards = array => {
    return array.map(item => {
      return (
        <GridBox key={item.serviceTitle}>
          <CatalogueCardComponent
            tag={this.getColor(this.props.serviceCategories, item.category)}
            service={item}
            onChecked={this.selectedService}
            onUnchecked={this.deselectedService}
            checkedService={this.props.selectedServices}
            popupText={item.PopupText}
          />
        </GridBox>
      );
    });
  };

  componentWillUnmount() {
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
        <AppNavBar auth={this.props.auth}/>
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
