import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import HomePage from "../main/components/HomePage";
import DescriptionCard from "../main/components/DescriptionCard";
import CardListing from "../main/components/CardListing";
import Issues from "../main/model/issues";
import ComingSoon from "../main/model/comingSoon";

describe("HomePage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

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

  let comingSoonArray = [];
  let issuesArray = [];

  function makeIssuesArray() {
    issueContent.messages.forEach(item => {
      let issue = new Issues(
        item.id,
        item.dateTime,
        item.header,
        item.description
      );
      issuesArray.push(issue);
    }, this);
  }

  function makecomingSoonArray() {
    comingSoonContent.messages.forEach(item => {
      let cs = new ComingSoon(
        item.id,
        item.dateTime,
        item.header,
        item.description
      );
      comingSoonArray.push(cs);
    }, this);
  }

  makeIssuesArray();
  makecomingSoonArray();

  it("renders the correct components", () => {
    const wrapper = shallow(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
      />,
      { context: context, childContextTypes: childContextTypes }
    );
    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);

    //expect(wrapper.contains(<CardListing listItem={comingSoonContent}/>)).to.equal(true);
    //expect(wrapper.contains(<CardListing listItem={issueContent}/>)).to.equal(true);
  });

  it("contains correct number of DescriptionCard components", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
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
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
      />,
      {
        context,
        childContextTypes
      }
    );
    //assert.ok(wrapper);

    expect(
      wrapper.contains(<DescriptionCard description={descriptionContent} />)
    ).to.equal(true);
  });

  it("contains correct number of CardListing components", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
      />,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(CardListing)).to.have.length(2);

    //assert.lengthOf(wrapper.find("CardListing"), 2);
  });

  it("contains CardListing component for coming soon information", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
      />,
      {
        context,
        childContextTypes
      }
    );
    //assert.ok(wrapper);

    expect(
      wrapper.contains(<CardListing listItem={comingSoonArray[0]} />)
    ).to.equal(true);
  });

  it("contains CardListing component for issues/maintenance information", () => {
    const wrapper = mount(
      <HomePage
        description={descriptionContent}
        comingSoon={comingSoonArray}
        issues={issuesArray}
      />,
      { context, childContextTypes }
    );
    //assert.ok(wrapper);

    expect(
      wrapper.contains(<CardListing listItem={issuesArray[0]} />)
    ).to.equal(true);
  });
});
