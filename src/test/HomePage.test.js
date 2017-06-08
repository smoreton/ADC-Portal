import React from "react";
import PropTypes from "prop-types";
import { expect, assert } from "chai";
import { mount, shallow } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import HomePage from "../main/components/HomePage";
import DescriptionCard from "../main/components/DescriptionCard";
import CardListing from "../main/components/CardListing";

describe("HomePage Component", () => {
  //------------ TEST DATA SETUP ------------
  const muiTheme = getMuiTheme();

  const descriptionContent = "description text";

  const comingSoonContent = {
    messages: [
      {
        id: 1,
        dateTime: "Coming soon date",
        header: "Coming soon header",
        description: "Coming soon description"
      }
    ]
  };

  const issueContent = {
    messages: [
      {
        id: 1,
        dateTime: "Downtime date",
        header: "Downtime header",
        description: "Downtime description"
      }
    ]
  };

  //------------ TEST DEFINITIONS ------------
  it("renders the correct components", () => {
    const wrapper = shallow(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      {
        context: { muiTheme },
        childContextTypes: { muiTheme: PropTypes.object }
      }
    );
    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);

    expect(
      wrapper.contains(<CardListing listItem={comingSoonContent} />)
    ).to.equal(true);
    expect(wrapper.contains(<CardListing listItem={issueContent} />)).to.equal(
      true
    );
  });
});
