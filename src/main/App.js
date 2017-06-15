import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

/**
 * Component Imports
 */
import AppNavBar from "./components/AppNavBar";
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";
import ContactPage from "./components/ContactPage";
import ServiceDescription from "./components/ServiceDescription";
import CartPage from "./components/CartPage";

/**
 * Model Imports
 */
import ComingSoon from "./model/comingSoon";
import Issues from "./model/issues";

document.body.style.backgroundColor = "#F5F5F5";

const csJson = require("./data/comingSoon.json");
const issuesJson = require("./data/issues.json");
const contactsJson = require("./data/contacts.json");

const descriptionText =
  "The ADC employs leading edge techniques and accelerators in order to support the visioning and design process; along with the development and implementation of software solutions for APPS UK projects. " +
  "The ADC is also highly active in supporting sales bids, customer visits and technical demonstration exercises. We have a dedicated technical team of experts who leverage these ADC capabilities to provide the following core services: " +
  "Hosting of projects (technical infrastructure), " +
  "Software engineering support (DevOps), " +
  "Network & server consultancy services, " +
  "The market drives us to deliver increased value at lower cost. The ADC offers a fully mutualised, high value and versatile hosting proposition with the ability to react and evolve quickly in order to meet a project's requirements.";

const comingSoonData = Object.values(csJson.messages);
const issuesData = Object.values(issuesJson.messages);
let comingSoonArray = [];
let issuesArray = [];

function makeIssuesArray() {
  issuesData.forEach(item => {
    let issue = new Issues(
      item.id,
      item.dateTime,
      item.header,
      item.description
    );
    issuesArray.push(issue);
  }, this);
}

function makeComingSoonArray() {
  comingSoonData.forEach(item => {
    let cs = new ComingSoon(
      item.id,
      item.dateTime,
      item.header,
      item.description
    );
    comingSoonArray.push(cs);
  }, this);
}

const serviceValues = {
  1: {
    serviceTitle: "Jira",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
    description: "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes: Scrum boards Kanban boards Agile reporting Customizable workflows Agile roadmap planning ",
    category: "Tools/Software",
    pricing: {
      "0-15": 60,
      "16-25": 110,
      "26-50": 210,
      "51-100": 340,
      "101-500": 560
    }
  },
  2: {
    serviceTitle: "Confluence",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg",
    description: "Create edit and collborate on meeting notes project plans product requirements and more. Include multimedia, dynamic content, and integrate with JIRA reporting. ",
    category: "Tools/Software",
    pricing: {
      "0-15": 40,
      "16-25": 70,
      "26-50": 140,
      "51-100": 230,
      "101-500": 370
    }
  },
  3: {
    serviceTitle: "Atlassian",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg",
    description: "The ADC hosts the Atlassian suite in the Merlin datacentre. They maintain and support the Atlassian tools with a robust and reslilient network, and support staff based in Woking and Aston.",
    category: "Tools/Software",
    pricing: {
      "0-15": 50,
      "16-25": 100,
      "26-50": 150,
      "51-100": 200,
      "101-500": 300
    }
  }
};

const servicesArray = ["1", "2", "3"];

comingSoonArray.sort(function(a, b) {
  let dateA = new Date(a.dateTime), dateB = new Date(b.dateTime);
  return dateB - dateA;
});

issuesArray.sort(function(a, b) {
  let dateA = new Date(a.dateTime), dateB = new Date(b.dateTime);
  return dateB - dateA;
});

const contactList = Object.values(contactsJson.contacts);

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
    makeIssuesArray();
    makeComingSoonArray();

    this.state = {
      selectedServices: []
    };

    this.addService = this.addService.bind(this);
  }

  addService(newSelectedService) {
    this.setState({
      selectedServices: this.state.selectedServices.concat([newSelectedService])
    });
  }

  render() {
    let browserHistory = BrowserHistory;
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <div>
            <AppNavBar />
            <Route
              path="/"
              exact
              render={props => (
                <HomePage
                  description={descriptionText}
                  comingSoon={comingSoonArray}
                  issues={issuesArray}
                />
              )}
            />

            <Route
              path="/catalogue"
              exact
              render={props => (
                <Catalogue
                  services={servicesArray}
                  serviceDetails={serviceValues}
                />
              )}
            />

            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} />}
            />

            <Route
              path="/service/:serviceId"
              exact
              render={props => (
                <ServiceDescription
                  service={props.match.params.serviceId}
                  serviceDetails={serviceValues}
                  onServiceSelected={this.addService}
                />
              )}
            />

            <Route
              path="/checkout"
              exact
              render={props => (
                <CartPage selectedServices={this.state.selectedServices} />
              )}
            />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
