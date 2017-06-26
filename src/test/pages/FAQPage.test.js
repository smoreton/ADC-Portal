import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import FAQPage from "../../main/components/FAQPage";
import CardListing from "../../main/components/CardListing";

describe("FAQPage Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const questionsContent = [
    {
      id: 1,
      dateTime: "",
      header: "Question 1",
      description: "answer to question 1"
    },
    {
      id: 2,
      dateTime: "",
      header: "Question 2",
      description: "answer to question 2"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = shallow(<FAQPage questions={questionsContent} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(
      wrapper.contains(<CardListing listItem={questionsContent[0]} />)
    ).to.equal(true);
  });

  it("contains correct number of CardListing components", () => {
    const wrapper = mount(<FAQPage questions={questionsContent} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(CardListing)).to.have.length(questionsContent.length);
  });
});
