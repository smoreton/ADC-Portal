/**
 * Created by SCMORETO on 13/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import ContactForm from "../../main/components/ContactForm";

describe("ContactForm Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("Renders the Contact Form and Checks the TextFields Exist with correct hints and attributes", () => {
    const wrapper = shallow(<ContactForm />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.contains(<TextField hintText="Name" />)).to.equal(true);
    expect(wrapper.contains(<TextField hintText="E-mail" />)).to.equal(true);
    expect(wrapper.contains(<TextField hintText="Business Unit" />)).to.equal(
      true
    );
    expect(wrapper.contains(<TextField hintText="Username" />)).to.equal(true);
    expect(
      wrapper.contains(
        <TextField
          hintText="Enter your Query here and this will be sent to our HelpDesk Inbox..."
          fullWidth={true}
          multiLine={true}
          rows={1}
          rowsMax={10}
        />
      )
    ).to.equal(true);
    expect(
      wrapper.contains(<RaisedButton label="SEND" primary={true} />)
    ).to.equal(true);
  });
});
