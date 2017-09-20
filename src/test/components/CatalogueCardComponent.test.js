import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import CatalogueCardComponent from "../../main/components/CatalogueCardComponent";

describe("Tile Card Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const serviceData = {
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

  //TESTS THE DATA IS RENDERED INTO THE CORRECT TAGS
  it("Renders the Tiled Component and Checks the data is rendered into the relevant tags", () => {
    const wrapper = mount(
      <CatalogueCardComponent
        service={serviceData}
        checkedService={selectedServices}
      />,
      {
        context: context,
        childContextTypes: childContextTypes
      }
    );

    expect(wrapper.find("h1.serviceName").text()).to.equal("Jira");
    expect(wrapper.find("div.serviceCat").text()).to.equal("Tools/Software");
  });
});
