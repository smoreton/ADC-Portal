/**
 * Created by SCMORETO on 12/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import ContactPage from "../main/components/ContactPage";
import ContactCard from "../main/components/ContactCard";
import ContactForm from "../main/components/ContactForm";

describe("ContactPage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const contacts = [
    {
      id: 1,
      profilePicture: "",
      name: "Service Desk",
      description: "The service desk for any questions you have",
      email: "adcuk@capgemini.com",
      phoneNumber: "700 8858 / 0870 238 8858 "
    },
    {
      id: 2,
      profilePicture: "",
      name: "Kevin Page",
      description: "ADC Centre Manager",
      email: "n/a",
      phoneNumber: "n/a"
    },
    {
      id: 3,
      profilePicture: "",
      name: "Paul Bullen",
      description: "Business operations",
      email: "n/a",
      phoneNumber: "n/a"
    }
  ];

  it("renders the correct components", () => {
    const wrapper = shallow(<ContactPage contactList={contacts} />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.contains(<ContactCard contact={contacts[0]} />)).to.equal(
      true
    );
    expect(wrapper.contains(<ContactCard contact={contacts[1]} />)).to.equal(
      true
    );
    expect(wrapper.contains(<ContactCard contact={contacts[2]} />)).to.equal(
      true
    );
    expect(wrapper.contains(<ContactForm />)).to.equal(true);
  });

  it("contains correct number of ContactCard components", () => {
    const wrapper = mount(<ContactPage contactList={contacts} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(ContactCard)).to.have.length(3);
  });

  it("contains correct number of ContactForm components", () => {
    const wrapper = mount(<ContactPage contactList={contacts} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(ContactForm)).to.have.length(1);
  });
});
