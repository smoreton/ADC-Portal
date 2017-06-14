import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import CartDataCapture from "../../main/components/CartDataCapture";

describe("CartDataCapture Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("Renders the CartDataCapture and Checks the TextFields Exist with correct hints and attributes", () => {
    const wrapper = shallow(<CartDataCapture />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.contains(<TextField hintText="Project Name" />)).to.equal(
      true
    );
    expect(wrapper.contains(<TextField hintText="Project Code" />)).to.equal(
      true
    );
    expect(wrapper.contains(<TextField hintText="Owner Email" />)).to.equal(
      true
    );
    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });
});
