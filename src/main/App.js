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

const descriptionText =
    "The ADC employs leading edge techniques and accelerators in order to support the visioning and design process; along with the development and implementation of software solutions for APPS UK projects. "+
    "The ADC is also highly active in supporting sales bids, customer visits and technical demonstration exercises. We have a dedicated technical team of experts who leverage these ADC capabilities to provide the following core services: "+
      "Hosting of projects (technical infrastructure), "+
      "Software engineering support (DevOps), "+
      "Network & server consultancy services, "+
    "The market drives us to deliver increased value at lower cost. The ADC offers a fully mutualised, high value and versatile hosting proposition with the ability to react and evolve quickly in order to meet a project's requirements.";
const comingSoonArray = [
  {
    id: 1,
    dateTime: "1st June 2017",
    header: "TBA",
    description: "To be announced"
  }
];

const issuesArray = [
  {
    id: 1,
    dateTime: "1st June 2017",
    header: "Future downtimes will be announced here.",
    description: "Downtimes that are going to happen will appear here"
  }
];

const serviceValues = {
  1: {
    serviceTitle: "Jira",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg ",
    description: "JIRA provides a variety of tools and functionality for agile teams for planning and delivery of their projects. It includes:"+
      "Scrum boards "+
      "Kanban boards "+
      "Agile reporting "+
      "Customizable workflows "+
      "Agile roadmap planning "
  },
  2: {
    serviceTitle: "Confluence",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg",
      description: "Create edit and collborate on "+
      "meeting notes "+
      "project plans "+
      "product requirements "+
      "and more. "+
          "Include multimedia, dynamic content, and integrate with JIRA reporting. "
  },
  3: {
    serviceTitle: "Atlassian",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg",
      description: "The ADC hosts the Atlassian suite in the Merlin datacentre. " +
      "They maintain and support the Atlassian tools with a robust and reslilient network, and support staff based in Woking and Aston."
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

const contactList = [
  {
    id: 1,
    profilePicture: "",
    name: "Service Desk",
    //location: "",
    description: "The service desk for any questions you have",
    email: "adcuk@capgemini.com",
    phoneNumber: "700 8858 / 0870 238 8858 "
  },
  {
    id: 2,
    profilePicture: "",
    name: "Kevin Page",
    //location: "",
    description: "ADC Centre Manager",
    email: "n/a",
    phoneNumber: "n/a"
  },
  {
    id: 3,
    profilePicture: "",
    name: "Paul Bullen",
    //location: "",
    description: "Business operations",
    email: "n/a",
    phoneNumber: "n/a"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
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
                />
              )}
            />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
