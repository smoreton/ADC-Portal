import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import RaisedButton from "material-ui/RaisedButton";

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
    } /**,
    2: {
      serviceTitle: "Confluence",
      logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg",
      description: "Create edit and collborate on " +
      "meeting notes " +
      "project plans " +
      "product requirements " +
      "and more. " +
      "Include multimedia, dynamic content, and integrate with JIRA reporting. ",
      category: "Tools/Software"
    },
    3: {
      serviceTitle: "Atlassian",
      logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg",
      description: "The ADC hosts the Atlassian suite in the Merlin datacentre. " +
      "They maintain and support the Atlassian tools with a robust and reslilient network, and support staff based in Woking and Aston.",
      category: "Tools/Software"
    }*/
  };

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
      <ServiceDescription
        description={descriptionContent}
        service={1}
        serviceDetails={serviceValues}
      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(DescriptionCard)).to.have.length(1);
  });

  it("contains DescriptionCard component for description information", () => {
    const wrapper = mount(
      <ServiceDescription
        description={descriptionContent}
        service={1}
        serviceDetails={serviceValues}
      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().description).to.equal(descriptionContent);
  });

  it("contains correct number of TileComponent components", () => {
    const wrapper = mount(<ServiceDescription service={1} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(TileComponent)).to.have.length(1);
  });

  it("contains TileComponent component for tile information", () => {
    const wrapper = mount(<ServiceDescription service={1} />, {
      context,
      childContextTypes
    });

    expect(wrapper.props().description).to.equal(descriptionContent);
  });

  /** it("contains correct number of Buttons", () => {
    const wrapper = mount(
      <ServiceDescription

      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(RaisedButton).to.have.length(1);
  });

  it("contains Button for add to cart button", () => {
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

  it("contains Button for submit button", () => {
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

      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(SelectField)).to.have.length(1);
  });

  it("contains DropDown for Users Required DropDown", () => {
    const wrapper = mount(
      <ServiceDescription

      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().select).to.equal(userList);
  });

  it("contains DropDown for BU DropDown", () => {
    const wrapper = mount(
      <ServiceDescription

      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().select).to.equal(businessUnitList);
  });*/
});
