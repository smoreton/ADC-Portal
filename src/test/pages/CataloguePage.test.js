import React from "react";
import { assert, expect } from "chai";
import { mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import CataloguePage from "../../main/components/CataloguePage";
import TileComponent from "../../main/components/CatalogueCardComponent";

describe("CataloguePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const serviceValues = [
    {
      serviceTitle: "Jira",
      logoSource:
        "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
      description:
        "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
      category: "Tools/Software"
    },
    {
      serviceTitle: "Confluence",
      logoSource:
        "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg",
      description:
        "Create edit and collborate on meeting notes project plans product requirements and more. Include multimedia, dynamic content, and integrate with JIRA reporting.",
      category: "Tools/Software"
    },
    {
      serviceTitle: "Atlassian",
      logoSource:
        "https://www.atlassan.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg",
      description:
        "The ADC hosts the Atlassian suite in the Merlin datacentre. They maintain and support the Atlassian tools with a robust and reslilient network, and support staff based in Woking and Aston.",
      category: "Tools/Software"
    }
  ];

  const serviceCategories = [
    {
      id: 1,
      logoSource: "",
      category: "All"
    },
    {
      id: 2,
      logoSource:
        "https://cdn.pixabay.com/photo/2014/08/14/10/38/software-417880_960_720.jpg",
      category: "Tools/Software"
    },
    {
      id: 3,
      logoSource: "http://www.necomputersolutions.com/images/itsupport.jpg",
      category: "Infrastructure"
    },
    {
      id: 4,
      logoSource:
        "http://cs.umw.edu/~finlayson/class/fall12/cpsc110/notes/images/net.jpg",
      category: "Networks"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = mount(
      <CataloguePage
        serviceDetails={serviceValues}
        serviceCategories={serviceCategories}
        selectedServiceCategory={"Tools/Software"}
      />,
      { context: context, childContextTypes: childContextTypes }
    );
    expect(wrapper.find(TileComponent)).to.have.length(serviceValues.length);
  });

  it("the correct data is provided to render the service tile components", () => {
    const wrapper = mount(
      <CataloguePage
        serviceDetails={serviceValues}
        serviceCategories={serviceCategories}
        selectedServiceCategory={"Tools/Software"}
      />,
      { context: context, childContextTypes: childContextTypes }
    );

    let tiles = wrapper.find(TileComponent);
    expect(tiles).to.have.length(serviceValues.length);

    tiles.getNodes(tile => {
      expect(tile.props().service.serviceTitle).to.equal(
        serviceValues[tile.props().service.serviceTitle]
      );
    });
  });
});
