/**
 * Created by SCMORETO on 14/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import DescriptionCard from "../../main/components/DescriptionCard";

describe("Description Card Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  //Define the data to be sent into the Description Card
  const desc =
    "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:" +
    "Scrum boards " +
    "Kanban boards " +
    "Agile reporting " +
    "Customizable workflows " +
    "Agile roadmap planning ";

  it("Renders the Description Card and Checks the data is passed correctly through the props", () => {
    const wrapper = mount(<DescriptionCard description={desc} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.props().description).to.equal(desc);
  });
});
