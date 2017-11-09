import React from "react";
import { assert, expect } from "chai";
import { mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import { MemoryRouter } from "react-router-dom";

import CataloguePage from "../../src/main/components/CataloguePage";
import TileComponent from "../../src/main/components/CatalogueCardComponent";
import FilterCategoryComponent from "../../src/main/components/FilterCategoryComponent";
import FlatButton from "material-ui/FlatButton";

import ServiceCategory from "../../src/main/model/serviceCategory";

describe("CataloguePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  //-------- START SERVICE OBJECT SETUP --------
  const serviceValuesJson = require("../../src/main/data/service.json");
  const serviceValues = Object.values(serviceValuesJson.services);
  //-------- END SERVICE OBJECT SETUP --------

  //-------- START SERVICE CATEGORY OBJECT SETUP --------
  const serviceTypeValuesJson = require("../../src/main/data/serviceCategory.json");
  const serviceTypes = Object.values(serviceTypeValuesJson.serviceTypes);

  let makeServiceCategoryArray = array => {
    return array.map(item => {
      return new ServiceCategory(
        item.id,
        item.logoSource,
        item.category,
        item.serviceCategoryColor
      );
    });
  };

  let serviceCategoryArray = makeServiceCategoryArray(serviceTypes);
  //-------- END SERVICE CATEGORY OBJECT SETUP --------

  const selectedServices = {
    serviceTitle: "Jira",
    logoSource: "",
    description:
      "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:" +
      "Scrum boards " +
      "Kanban boards " +
      "Agile reporting " +
      "Customizable workflows " +
      "Agile roadmap planning ",
    category: "Tools/Software"
  };

  it("renders the correct number of tile components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CataloguePage
          serviceDetails={serviceValues}
          serviceCategories={serviceCategoryArray}
          selectedServiceCategory={"Tools/Software"}
          selectedServices={selectedServices}
        />
      </MemoryRouter>,
      { context: context, childContextTypes: childContextTypes }
    );
    let tiles = wrapper.find(TileComponent);
    let toolsServiceValues = serviceValues.filter(
      service => service.category === "Tools/Software"
    );
    expect(tiles).to.have.length(toolsServiceValues.length);
  });

  it("the filter component is rendered with the correct number of filter options", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CataloguePage
          serviceDetails={serviceValues}
          serviceCategories={serviceCategoryArray}
          selectedServiceCategory={"Tools/Software"}
          checkedService={selectedServices}
          selectedServices={selectedServices}
        />
      </MemoryRouter>,
      { context: context, childContextTypes: childContextTypes }
    );

    let filterComponent = wrapper.find(FilterCategoryComponent);
    let flb = wrapper.find(FlatButton);
    expect(flb).to.have.length(serviceCategoryArray.length);
  });

  it("each tile component has the correct service in it", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CataloguePage
          serviceDetails={serviceValues}
          serviceCategories={serviceCategoryArray}
          selectedServiceCategory={"Tools/Software"}
          checkedService={selectedServices}
          selectedServices={selectedServices}
        />
      </MemoryRouter>,
      { context: context, childContextTypes: childContextTypes }
    );
    let tiles = wrapper.find(TileComponent);
    function bind_args_from_n(fn, n, ...bound_args) {
      return function(...args) {
        return fn(...args.slice(0, n - 1), ...bound_args);
      };
    }
    function tilePred(tile, services) {
      let service = services.filter(
        s => s.serviceTitle === tile.props().service.serviceTitle
      );
      expect(tile.props().service.serviceTitle).to.equal(
        service[0].serviceTitle
      );
    }
    tilePred = bind_args_from_n(tilePred, 2, serviceValues);
    tiles.forEach((tile, index) => {
      tilePred(tile);
    });
  });
});
