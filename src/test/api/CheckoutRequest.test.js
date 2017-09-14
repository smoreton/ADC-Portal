import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import "babel-polyfill";

//IMPORT THE API CALL COMPONENT
import App from "../../main/App";

describe("Sends POST to API", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("POST IS SUCCESSFUL", () => {
    const wrapper = shallow(<App />, {
      context: context,
      childContextTypes: childContextTypes
    });

    const inst = wrapper.instance();
    inst.postCheckoutRequest().then(result => {
      expect(result).to.equal({ message: "POST Function Hit!" });
    });
  });
});
