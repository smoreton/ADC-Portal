import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import { MemoryRouter } from "react-router-dom";

//Import Components
import ContactPage from "../../main/components/ContactPage";
import ContactCard from "../../main/components/ContactCard";
import ContactForm from "../../main/components/ContactForm";

describe("ContactPage Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  //Define array to contain the contacts data - Passed into the Contact Page Component
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

  it("The Contact Page Renders the ContactCard and ContactForm Components", () => {
    const wrapper = shallow(
      <MemoryRouter>
        <ContactPage contactList={contacts} />
      </MemoryRouter>,
      {
        context: context,
        childContextTypes: childContextTypes
      }
    );
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

  it("Checks the correct number of ContactCard Component Instances", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ContactPage contactList={contacts} />
      </MemoryRouter>,
      {
        context,
        childContextTypes
      }
    );
    expect(wrapper.find(ContactCard)).to.have.length(3);
  });

  it("Checks the correct number of ContactForm Component Instances", () => {
    const wrapper = mount(<ContactPage contactList={contacts} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(ContactForm)).to.have.length(1);
  });
});
