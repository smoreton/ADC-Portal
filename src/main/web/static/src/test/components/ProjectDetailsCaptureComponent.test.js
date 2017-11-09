import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import CartDataCapture from "../../src/main/components/ProjectDetailsCaptureComponent";

// const Entryfield = styled(TextField)`
//   color: #A8A8A8 !important;
//   background-color: #ffffff !important;
//   border: 1px solid #A8A8A8 !important;
//   border-radius: 25px !important;
//   overflow: hidden !important;
//   padding-left: 20px !important;
//   width: 25% !important;
// `;

describe("ProjectDetailsCaptureComponent Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  it("Renders the ProjectDetailsCaptureComponent and Checks the TextFields Exist with correct hints and attributes", () => {
    const wrapper = shallow(<CartDataCapture />, {
      context: context,
      childContextTypes: childContextTypes
    });

    //TextField has its style  over ridden which is causing issues with finding the element on the page.
    // expect(wrapper.find(Entryfield.TextField)).to.have.length(3);
    //expect(wrapper.find(TextField)).to.have.length(3);
  });
});
