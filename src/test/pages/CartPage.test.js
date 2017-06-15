import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

import CartPage from "../../main/components/CartPage";
import CartDataCapture from "../../main/components/CartDataCapture";
import ServiceSummaryCard from "../../main/components/ServiceSummaryCard";

describe("CartPage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const testData = [
    {
      service: {
        serviceTitle: "Jira",
        logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
        description: "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
        category: "Tools/Software"
      },
      businessUnit: "AD&I",
      userRange: "16-25"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = mount(<CartPage selectedServices={testData} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(ServiceSummaryCard)).to.have.length(1);
    expect(wrapper.find(CartDataCapture)).to.have.length(1);
    expect(wrapper.find(RaisedButton)).to.have.length(2);
  });
});
