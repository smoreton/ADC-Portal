import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import RaisedButton from "material-ui/RaisedButton";
import UserDetailsUpload from "../../src/main/components/UserDetailsUpload";

describe("UserDetailsUpload component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("renders the correct number of buttons", () => {
    const wrapper = mount(<UserDetailsUpload />, {
      context: context,
      childContextTypes: childContextTypes
    });

    expect(wrapper.find(RaisedButton)).to.have.length(2);
  });
});
