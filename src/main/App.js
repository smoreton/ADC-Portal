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
import CartPage from "./components/CartPage";

/**
 * Model Imports
 */
import ComingSoon from "./model/comingSoon";
import Issues from "./model/issues";

const csJson = require("./data/comingSoon.json");
const issuesJson = require("./data/issues.json");
const contactsJson = require("./data/contacts.json");

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit a turpis rhoncus commodo ac eu lorem. Nam auctor urna libero, mollis luctus diam euismod vitae. Nam auctor aliquam massa, tincidunt aliquet massa pretium eget. Aenean vitae tellus tincidunt, lacinia lectus vitae, volutpat nibh. Maecenas iaculis leo elit, semper pulvinar nisl dignissim lacinia. Proin dignissim dapibus augue, id ultricies odio. Pellentesque blandit nisi ante, ac commodo lacus dictum quis. Duis hendrerit nec enim non iaculis.";

const comingSoonArray1 = Object.values(csJson.messages);
const issuesArray1 = Object.values(issuesJson.messages);
var comingSoonArray = [];
var issuesArray = [];

function makeIssuesArray() {
  issuesArray1.forEach(function(item) {
    var issue = new Issues(
      item.id,
      item.dateTime,
      item.header,
      item.description
    );
    issuesArray.push(issue);
  }, this);
}

function makecomingSoonArray() {
  comingSoonArray1.forEach(function(item) {
    var cs = new ComingSoon(
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
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg"
  },
  2: {
    serviceTitle: "Confluence",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg"
  },
  3: {
    serviceTitle: "Atlassian",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg"
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
    makecomingSoonArray();
  }

  search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].serviceTitle === nameKey) {
        return myArray[i];
      }
    }
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
              path="/checkout/:serviceId"
              exact
              render={props => (
                <CartPage
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
