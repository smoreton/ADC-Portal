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

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit a turpis rhoncus commodo ac eu lorem. Nam auctor urna libero, mollis luctus diam euismod vitae. Nam auctor aliquam massa, tincidunt aliquet massa pretium eget. Aenean vitae tellus tincidunt, lacinia lectus vitae, volutpat nibh. Maecenas iaculis leo elit, semper pulvinar nisl dignissim lacinia. Proin dignissim dapibus augue, id ultricies odio. Pellentesque blandit nisi ante, ac commodo lacus dictum quis. Duis hendrerit nec enim non iaculis.";

const comingSoonArray = [
  {
    id: 1,
    dateTime: "23 March 2017",
    header: "Jira is coming to us soon :)",
    description: "As an agreement has been reached with Jira, we will soon be able to offer their serviecs to projects"
  },
  {
    id: 2,
    dateTime: "12 January 1998",
    header: "Confluence is coming to us soon :)",
    description: "As an agreement has been reached with Confluence, we will soon be able to offer their serviecs to projects"
  },
  {
    id: 3,
    dateTime: "11 January 2016",
    header: "We have started a new Project",
    description: "This project (ADC) will be a good training ground"
  },
  {
    id: 4,
    dateTime: "1 January 2016",
    header: "Happy New Years",
    description: "As seen above"
  }
];

const issuesArray = [
  {
    id: 1,
    dateTime: "23 March 2017",
    header: "There are major problems",
    description: "We are currently having major issues with our systems and will not abe able to process any requests"
  },
  {
    id: 2,
    dateTime: "19 September 2017",
    header: "There are minor problems",
    description: "We are currently having minor issues with our systems and will not abe able to process any requests"
  },
  {
    id: 3,
    dateTime: "21 July 2016",
    header: "No problems today",
    description: "End of testing information"
  },
  {
    id: 4,
    dateTime: "1 January 2017",
    header: "Happy New Years",
    description: "As seen above"
  }
];

const servicesArray = [
  {
    id: 1,
    serviceTitle: "Jira",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/jira_logo.jpg"
  },
  {
    id: 2,
    serviceTitle: "Confluence",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/confluence_logo.jpg"
  },
  {
    id: 3,
    serviceTitle: "Atlassian",
    logoSource: "https://www.atlassian.com/docroot/wac/resources/wac/img/social-icons/atlassian_logo.jpg"
  }
];
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
    name: "Scott Moreton",
    location: "Aston",
    description: "Software Engineer, working within the ADC",
    email: "scott.moreton@capgemini.com",
    phoneNumber: "044789623579"
  },
  {
    id: 2,
    profilePicture: "",
    name: "Sam Eade",
    location: "Aston",
    description: "Software Engineer working for the AIE",
    email: "sam@sam.com",
    phoneNumber: "0445987654321"
  },
  {
    id: 3,
    profilePicture: "",
    name: "Joe Bloggs",
    location: "Holborn",
    description: "Software Engineer working for the AIE",
    email: "random@random.com",
    phoneNumber: "044598186321"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
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
              render={props => <Catalogue services={servicesArray} />}
            />
            <Route
              path="/contact"
              exact
              render={props => <ContactPage contactList={contactList} />}
            />

            <Route
              path="/checkout/:serviceTitle"
              exact
              render={props => <CartPage />}
            />

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
