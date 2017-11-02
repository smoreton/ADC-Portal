/**
 * Created by SCMORETO on 13/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import ContactCard from "../../main/components/ContactCard";

describe("ContactCard Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  /*Define a contact object containing a contact-
    Mimics the data from the Contact Page providing
    a contact into the Contact Card Component*/
  const contactObj = {
    id: 1,
    profilePicture: "",
    name: "Service Desk",
    description: "The service desk for any questions you have",
    email: "adcuk@capgemini.com",
    phoneNumber: "700 8858 / 0870 238 8858 "
  };

  //TESTS THE DATA IS RENDERED INTO THE CORRECT TAGS
  it("Renders the Contact Card and Checks the Relevant Fields Exist with correct attributes", () => {
    const wrapper = shallow(<ContactCard contact={contactObj} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.find("div.name").text()).to.equal("Name: Service Desk");
    expect(wrapper.find("div.aboutMe").text()).to.equal(
      "About Me: The service desk for any questions you have"
    );
    expect(wrapper.find("div.email").text()).to.equal(
      "Email: adcuk@capgemini.com"
    );
  });
});
