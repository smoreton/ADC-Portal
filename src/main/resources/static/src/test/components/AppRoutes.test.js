import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { assert, expect } from "chai";
import { shallow, mount } from "enzyme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import PropTypes from "prop-types";
import App from "../../main/App";
import HomePage from "../../main/components/HomePage";

describe("App Component", () => {
  it("has the all 5 route components", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Route)).to.have.length(5);
  });

  it("has the home page route", () => {
    const wrapper = mount(<App />);
    const routes = wrapper.find(Route);
    routes.forEach(route => {
      if (route.props().path === "/") {
        expect(route.props().path).to.equal("/");
      }
    });
  });

  it("has the contact page route", () => {
    const wrapper = mount(<App />);
    const routes = wrapper.find(Route);
    routes.forEach(route => {
      if (route.props().path === "/contact") {
        expect(route.props().path).to.equal("/contact");
      }
    });
  });

  it("has the catalogue page route", () => {
    const wrapper = mount(<App />);
    const routes = wrapper.find(Route);
    routes.forEach(route => {
      if (route.props().path === "/catalogue") {
        expect(route.props().path).to.equal("/catalogue");
      }
    });
  });

  it("has the checkout page route", () => {
    const wrapper = mount(<App />);
    const routes = wrapper.find(Route);
    routes.forEach(route => {
      if (route.props().path === "/checkout") {
        expect(route.props().path).to.equal("/checkout");
      }
    });
  });

  it("has the FAQ page route", () => {
    const wrapper = mount(<App />);
    const routes = wrapper.find(Route);
    routes.forEach(route => {
      if (route.props().path === "/faq") {
        expect(route.props().path).to.equal("/faq");
      }
    });
  });
});
