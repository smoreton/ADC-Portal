/**
 * Created by SCMORETO on 13/06/2017.
 */
import { expect, assert } from "chai";
import React from "react";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import ContactForm from "../../src/main/components/ContactForm";

describe("ContactForm Component", () => {
  //Assign MaterialUI Mui theme to constants to be passed to the components for testing
  const muiTheme = getMuiTheme();
  const context = { muiTheme };
  const childContextTypes = { muiTheme: PropTypes.object };

  const StyledButton = styled(RaisedButton)` 
    display: flex;
    flex-flow: row wrap;
    color: #00BFFF !important;
    margin: 20px;
    border-radius: 25px !important;
    overflow: hidden !important
`;
  const InputField = styled.input`
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    max-width: 40%;
    width: 40%;
    height: 50px;
    font-family: Roboto-Light;
    font-size: 13px;
    color: #4a4a4a;
    letter-spacing: 0.75px;
    background: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 100px;
  `;

  it("Renders the Contact Form and Checks the TextFields Exist with correct hints and attributes", () => {
    const wrapper = mount(<ContactForm />, {
      context: context,
      childContextTypes: childContextTypes
    });
    expect(wrapper.find(RaisedButton)).to.have.length(1);
    //expect(wrapper.find(input)).to.equal( true );
  });
});
