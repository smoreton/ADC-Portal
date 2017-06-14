import React from "react";
import { assert, expect } from "chai";
import { mount, shallow } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

import CartPage from "../../main/components/CartPage";
import CartDataCapture from "../../main/components/CartDataCapture";

describe("CartPage Component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("renders the correct components", () => {
    const wrapper = mount(<CartPage component={CartPage} />, {
      context,
      childContextTypes
    });
    expect(wrapper.find(CartDataCapture)).to.have.length(1);
    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });
});
