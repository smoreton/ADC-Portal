import React from "react";
import ReactDOM from "react-dom";
import App from "../main/App";
import { shallow } from "enzyme";
import AppNavBar from "../main/components/AppNavBar";
const assert = require("assert");

function getLogoImage() {
  const nav = shallow(<AppNavBar />);

  // Looks for the child component with the id iconElementLeft
  const iconElementLeft = nav.node.props.iconElementLeft;

  // Filters through the child components of iconElementLeft to find the first image.
  const logo = iconElementLeft.props.children.filter(el => {
    return el.type === "img";
  })[0];

  return logo;
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("NavBar has image", () => {
  const logo = getLogoImage();

  // Asserts that the image component has alt text
  assert.equal(logo !== undefined, true);
});

test("NavBar image has correct alt text", () => {
  const logo = getLogoImage();

  // Asserts that the image component has correct alt text
  assert.equal(logo.props.alt === "ADC Service Portal", true);
});
