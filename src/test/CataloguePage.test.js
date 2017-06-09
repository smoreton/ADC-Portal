import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import CataloguePage from "../main/components/CataloguePage";
import TileComponent from "../main/components/TileComponent";

describe("CataloguePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const serviceValues = {
    1: {
      serviceTitle: "Jira",
      logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
      description: "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
      category: "Tools/Software"
    },
    2: {
      serviceTitle: "Confluence",
      logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg",
      description: "Create edit and collborate on meeting notes project plans product requirements and more. Include multimedia, dynamic content, and integrate with JIRA reporting.",
      category: "Tools/Software"
    },
    3: {
      serviceTitle: "Atlassian",
      logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg",
      description: "The ADC hosts the Atlassian suite in the Merlin datacentre. They maintain and support the Atlassian tools with a robust and reslilient network, and support staff based in Woking and Aston.",
      category: "Tools/Software"
    }
  };

  const servicesArray = ["1", "2", "3"];

  it("renders the correct components", () => {
    const wrapper = shallow(
      <CataloguePage services={servicesArray} serviceDetail={serviceValues} />,
      { context: context, childContextTypes: childContextTypes }
    );

    expect(wrapper.find(<TileComponent />)).to.equal(true);
    expect(wrapper.find(<TileComponent />)).to.have.length(
      servicesArray.length
    );
  });

  it("the correct data is provided to render the service tile components", () => {
    const wrapper = mount(
      <CataloguePage services={servicesArray} serviceDetail={serviceValues} />,
      { context: context, childContextTypes: childContextTypes }
    );

    console.log("wrapper.prop('service')");
    console.log(wrapper.prop("service"));

    //expect(wrapper.prop('service')).to.equal();
  });
});
