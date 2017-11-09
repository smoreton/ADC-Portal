import React from "react";
import DrawerComponent from "../../src/main/components/DrawerComponent";
import { mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MemoryRouter } from "react-router-dom";
import { assert, expect } from "chai";
import Drawer from "material-ui/Drawer";

describe("DrawerComponent Tests", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const wrapper = mount(
    <MemoryRouter>
      <DrawerComponent />
    </MemoryRouter>,
    {
      context,
      childContextTypes
    }
  );

  it("has four links", () => {
    let link = wrapper.find(Link);
    expect(link).to.have.length(4);
  });

  it("the drawer menu is initially closed", () => {
    const dc = wrapper.find(Drawer);
    assert(!dc.props().open);
  });

  it("the drawer can be opened by clicking on the trigraph icon", () => {
    let clickableImg = wrapper.find(".trigraph");
    clickableImg.simulate("click");
    const dc = wrapper.find(Drawer);
    assert(dc.props().open, "The drawer is NOT open");
  });

  it("once the drawer is open it can be close by clicking on the trigraph icon", () => {
    let clickableImg = wrapper.find(".trigraph");
    clickableImg.simulate("click");
    const dc = wrapper.find(Drawer);
    assert(!dc.props().open, "The drawer is NOT closed");
  });
});
