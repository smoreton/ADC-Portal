import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

/**
 * Component Imports
 */
import AppNavBar from "./components/AppNavBar";
import HomePage from "./components/HomePage";
import Catalogue from "./components/CataloguePage";
import Contact from "./components/ContactPage";
import Checkout from "./components/CartPage";

const descriptionText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit a turpis rhoncus commodo ac eu lorem. Nam auctor urna libero, mollis luctus diam euismod vitae. Nam auctor aliquam massa, tincidunt aliquet massa pretium eget. Aenean vitae tellus tincidunt, lacinia lectus vitae, volutpat nibh. Maecenas iaculis leo elit, semper pulvinar nisl dignissim lacinia. Proin dignissim dapibus augue, id ultricies odio. Pellentesque blandit nisi ante, ac commodo lacus dictum quis. Duis hendrerit nec enim non iaculis.";

const contactList = [
  {
    profilePicture: "",
    name: "Scott Moreton",
    descripiton: "Software Engineer, working within the ADC",
    email: "scott.moreton@capgemini.com",
    phoneNo: +44789623579
  },
  {
    profilePicture: "",
    name: "Sam Eade",
    description: "Software Engoineer working for the AIE",
    email: "sam@sam.com",
    phoneNo: +445987654321
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppNavBar />
            <Route
              path="/"
              exact
              render={props => <HomePage description={descriptionText} />}
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
