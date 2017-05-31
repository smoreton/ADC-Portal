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
import Checkout from "./components/CartPage";

/**
 * Model Imports
 */
import ComingSoon from "./model/comingSoon";
import Issues from "./model/issues";

var csJson = require("./data/comingSoon.json");
const issuesJson = require("./data/issues.json");

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit a turpis rhoncus commodo ac eu lorem. Nam auctor urna libero, mollis luctus diam euismod vitae. Nam auctor aliquam massa, tincidunt aliquet massa pretium eget. Aenean vitae tellus tincidunt, lacinia lectus vitae, volutpat nibh. Maecenas iaculis leo elit, semper pulvinar nisl dignissim lacinia. Proin dignissim dapibus augue, id ultricies odio. Pellentesque blandit nisi ante, ac commodo lacus dictum quis. Duis hendrerit nec enim non iaculis.";

const comingSoonArray = Object.values(csJson.messages);
const issuesArray = Object.values(issuesJson.messages);

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
    profilePicture: "",
    name: "Scott Moreton",
    location: "Aston",
    description: "Software Engineer, working within the ADC",
    email: "scott.moreton@capgemini.com",
    phoneNumber: "044789623579"
  },
  {
    profilePicture: "",
    name: "Sam Eade",
    location: "Aston",
    description: "Software Engineer working for the AIE",
    email: "sam@sam.com",
    phoneNumber: "0445987654321"
  },
  {
    profilePicture: "",
    name: "Joe Bloggs",
    location: "Holborn",
    description: "Software Engineer working for the AIE",
    email: "random@random.com",
    phoneNumber: "044598186321"
  }
];

//End of testing information

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }
  populateComingSoon() {
    for (var i = 0; i < csJson.length; i++) {
      comingSoonArray.push(csJson[i]);
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
            <Route path="/catalogue" exact component={Catalogue} />
            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} />}
            />
            <Route path="/checkout" exact component={Checkout} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
