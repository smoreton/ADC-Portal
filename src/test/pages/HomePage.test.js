import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import HomePage from "../../main/components/HomePage";
import DescriptionCard from "../../main/components/DescriptionCard";
import CardListing from "../../main/components/CardListing";

describe("HomePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const descriptionContent = "description text";

  const comingSoonContent = [
    {
      id: 1,
      dateTime: "Coming soon date",
      header: "Coming soon header",
      description: "Coming soon description"
    }
  ];

  const issueContent = [
    {
      id: 1,
      dateTime: "Downtime date",
      header: "Downtime header",
      description: "Downtime description"
    }
    /** -- BUG IN TEST WITH DATA INCLUDED
    ,
    {
      id: 2,
      dateTime: "Downtime date",
      header: "Downtime header",
      description: "Downtime description"
    }
     */
  ];

  it("renders the correct components", () => {
    const wrapper = shallow(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      { context: context, childContextTypes: childContextTypes }
    );
    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);

    expect(
      wrapper.contains(<CardListing listItem={comingSoonContent[0]} />)
    ).to.equal(true);
    expect(
      wrapper.contains(<CardListing listItem={issueContent[0]} />)
    ).to.equal(true);
  });

  it("contains correct number of DescriptionCard components", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(DescriptionCard)).to.have.length(1);
  });

  it("contains prop for description information", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().description).to.equal(descriptionContent);
  });

  it("contains correct number of CardListing components", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(CardListing)).to.have.length(2);
  });

  it("contains prop for coming soon information", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      {
        context,
        childContextTypes
      }
    );

    expect(wrapper.props().comingSoon).to.equal(comingSoonContent);
  });

  it("contains prop for issues/maintenance information", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonContent}
        issues={issueContent}
      />,
      { context, childContextTypes }
    );

    expect(wrapper.props().issues).to.equal(issueContent);
  });
});
