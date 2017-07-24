import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import ServiceSummaryCard from "../../main/components/ServiceSummaryCard";
import { tr, th, td } from "../../main/components/ServiceSummaryCard";

describe("ServiceSummaryCard rendering", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const testData = [
    {
      service: {
        serviceTitle: "Jira",
        logoSource:
          "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
        description:
          "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
        category: "Tools/Software"
      },
      businessUnit: "AD&I",
      userRange: "16-25"
    }
  ];

  it("renders the component with the correct table format", () => {
    const wrapper = shallow(<ServiceSummaryCard serviceData={testData} />, {
      context,
      childContextTypes
    });

    expect(wrapper.find(<th />)).to.have.length(4);
    expect(wrapper.find(<tr />)).to.have.length(2);
    expect(wrapper.find(<td />)).to.have.length(4);
  });
});
