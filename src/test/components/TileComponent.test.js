/**
 * Created by SCMORETO on 14/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import TileComponent from "../../main/components/TileComponent";

describe("Tile Card Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  //Define the data to be sent into the Description Card
  const serviceData = {
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
  };

  it("Renders the Tiled Component and Checks the data is passed correctly through the props", () => {
    const wrapper = mount(<TileComponent service={serviceData} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.props().service.logoSource).to.equal(serviceData.logoSource);
    expect(wrapper.props().service.serviceTitle).to.equal(
      serviceData.serviceTitle
    );
    expect(wrapper.props().service.category).to.equal(serviceData.category);
  });
});
