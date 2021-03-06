import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import { MemoryRouter } from "react-router-dom";

import CheckoutPage from "../../src/main/components/CheckoutPage";
import CartDataCapture from "../../src/main/components/ProjectDetailsCaptureComponent";
import ServiceSummaryCard from "../../src/main/components/ServiceSummaryCard";

describe("CheckoutPage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const testData = [
    {
      service: {
        serviceTitle: "Jira",
        logoSource: "",
        description:
          "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
        category: "Tools/Software"
      },
      businessUnit: "AD&I",
      userRange: "16-25"
    }
  ];

  const userRange = [
    {
      id: 0,
      key: "0-15",
      value: "15 users or less"
    },
    {
      id: 1,
      key: "16-25",
      value: "16 to 25"
    },
    {
      id: 2,
      key: "26-50",
      value: "26 to 50"
    },
    {
      id: 3,
      key: "51-100",
      value: "51 to 100"
    },
    {
      id: 4,
      key: "100-500",
      value: "100 to 500"
    }
  ];

  const businessUnits = [
    {
      id: 0,
      key: "CBS",
      value: "CBS"
    },
    {
      id: 1,
      key: "AD&I",
      value: "AD&I"
    },
    {
      id: 2,
      key: "HMRC",
      value: "HMRC"
    }
  ];

  const userList = [{}];

  const progressSteps = [
    {
      title: "Service Summary"
    },
    {
      title: "User Details"
    },
    {
      title: "Project Details"
    },
    {
      title: "Done"
    }
  ];
  const checkoutMainPath = [
    {
      pathName: "/postCheckoutRequest/servicesummary"
    },
    {
      pathName: "/postCheckoutRequest/userentry"
    },
    {
      pathName: "/postCheckoutRequest/projectinfo"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = mount(
      <MemoryRouter>
        <CheckoutPage
          selectedServices={testData}
          userRangeValues={userRange}
          businessUnitValues={businessUnits}
          userList={userList}
          progressSteps={progressSteps}
          checkoutPaths={checkoutMainPath}
        />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
  });
});
