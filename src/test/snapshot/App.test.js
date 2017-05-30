import React from "react";
import ReactDOM from "react-dom";
import App from "../../main/App";
import { shallow } from "enzyme";
import AppNavBar from "../../main/components/AppNavBar";
const assert = require("assert");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("NavBar has image", () => {
  const nav = shallow(<AppNavBar />);
  const logo = nav.find("img");
  assert.equal(logo.prop("alt"), true);
});
