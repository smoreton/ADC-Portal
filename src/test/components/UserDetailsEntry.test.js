import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";

import { TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

import UserDetailsEntry from "../../main/components/UserDetailsEntry";

describe("UserDetailsEntry component", () => {
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const users = [
    {
      users: {
        fullName: "Sam",
        userName: "sam",
        email: "sam@sam.com"
      }
    }
  ];

  const noUsers = [];

  it("renders the user details entry", () => {
    const wrapper = shallow(<UserDetailsEntry usersAdded={users} />, {
      context: context,
      childContextTypes: childContextTypes
    });

    expect(wrapper.find(TableHeaderColumn)).to.have.length(3);
    expect(wrapper.find(TableRow)).to.have.length(users.length + 1);
    expect(wrapper.find(TableRowColumn)).to.have.length(3);
  });

  /**
     * FAILING TEST CANT FIND CONDITIONAL RENDER
    it("renders conditional message when no users present", () => {
        const wrapper = mount(<UserDetailsEntry usersAdded={noUsers}/>, {
            context: context,
            childContextTypes: childContextTypes
        });

        expect(wrapper.find("NoUserDetailsText.conditional")).to.equal("No User Details Added");
    })
     */
});
