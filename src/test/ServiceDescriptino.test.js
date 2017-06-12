import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import RaisedButton from "material-ui/RaisedButton";
import { MemoryRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import DescriptionCard from "../main/components/DescriptionCard";
import ServiceDescription from "../main/components/ServiceDescription";
import TileComponent from "../main/components/TileComponent";

describe("ServiceDescription Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const descriptionContent = "description";

  const serviceValues = {
    1: {
      serviceTitle: "Jira",
      logoSource:
        "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
      description:
        "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:" +
          "Scrum boards " +
          "Kanban boards " +
          "Agile reporting " +
          "Customizable workflows " +
          "Agile roadmap planning ",
      category: "Tools/Software"
    }
  };

  const servicesArray = ["1"];

  const businessUnitList = ["CBS", "AD&I", "HMRC"];

  const userList = [
    "15 users or less",
    "16 to 25",
    "26 to 50",
    "51 to 100",
    "101 to 500"
  ];

  it("renders the correct components", () => {
    const wrapper = shallow(
      <ServiceDescription
        description={descriptionContent}
        service={1}
        serviceDetails={serviceValues}
      />,
      {
        context: context,
        childContextTypes: childContextTypes
      }
    );
    expect(
      wrapper.contains(
        <DescriptionCard description={serviceValues[1].description} />
      )
    ).to.equal(true);
  });

  it("contains correct number of DescriptionCard components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ServiceDescription
          description={descriptionContent}
          service={1}
          serviceDetails={serviceValues}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(DescriptionCard)).to.have.length(1);
  });

  /**it("contains DescriptionCard component for description information", () => {
    const wrapper = mount(
    <MemoryRouter>
      <ServiceDescription
        description={descriptionContent}
        service={1}
        serviceDetails={serviceValues}
      />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().description).to.equal(descriptionContent);
  });*/

  it("renders the TileComponent components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ServiceDescription service={1} serviceDetails={serviceValues} />
      </MemoryRouter>,
      { context: context, childContextTypes: childContextTypes }
    );
    //expect(wrapper.find(TileComponent)).to.equal(true);
    expect(wrapper.find(TileComponent)).to.have.length(servicesArray.length);
  });

  it("the correct data is provided to render the service tile components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ServiceDescription service={1} serviceDetails={serviceValues} />
      </MemoryRouter>,
      { context: context, childContextTypes: childContextTypes }
    );

    let tiles = wrapper.find(TileComponent);
    expect(tiles).to.have.length(servicesArray.length);

    tiles.getNodes(tile => {
      expect(tile.props().service.serviceTitle).to.equal(
        serviceValues[tile.props().service.id].serviceTitle
      );
    });
  });

  /**it("contains correct number of RaisedButtons", () => {
    const wrapper = mount(
        <ServiceDescription

        />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(RaisedButton)).to.have.length(2);
  });

  it("contains RaisedButton for add to cart button", () => {
    const wrapper = mount(
      <ServiceDescription

      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().description).to.equal(descriptionContent);
  });

  it("contains RaisedButton for submit button", () => {
    const wrapper = mount(
      <ServiceDescription

      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().description).to.equal(descriptionContent);
  });*/

  /**it("contains correct number of DropDowns", () => {
    const wrapper = mount(
      <ServiceDescription
          businessUnit={businessUnitList}
          user={userList}
      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(SelectField)).to.have.length(2);
  });*/

  it("contains DropDown for Users Required DropDown", () => {
    const wrapper = mount(<ServiceDescription user={userList} />, {
      context,
      childContextTypes
    });

    expect(wrapper.props().user).to.equal(userList);
  });

  it("contains DropDown for BU DropDown", () => {
    const wrapper = mount(
      <ServiceDescription businessUnit={businessUnitList} />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().businessUnit).to.equal(businessUnitList);
  });
});
