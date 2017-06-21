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

  //DEFINE THE DATA TO BE SENT INTO THE DESCRIPTION CARD
  const desc =
    "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:" +
    "Scrum boards " +
    "Kanban boards " +
    "Agile reporting " +
    "Customizable workflows " +
    "Agile roadmap planning ";

  //TESTS THE DATA IS RENDERED INTO THE CORRECT TAGS
  it("Renders the Description Card and Checks the Relevant Fields Exist with correct attributes", () => {
    const wrapper = shallow(<DescriptionCard description={desc} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.find("div.descText").text()).to.equal(
      "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:" +
        "Scrum boards " +
        "Kanban boards " +
        "Agile reporting " +
        "Customizable workflows " +
        "Agile roadmap planning "
    );
  });
});
