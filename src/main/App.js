import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import injectTapEventPlugin from "react-tap-event-plugin";

/**
 * Component Imports
 */
import AppNavBar from "./components/AppNavBar";
import Home from "./components/HomeTest";
import Catalogue from "./components/CatalogueTest";
import Contact from "./components/ContactTest";
import Checkout from "./components/CartTest";

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
            <Route path="/" exact component={Home} />
            <Route path="/catalogue" exact component={Catalogue} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/checkout" exact component={Checkout} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
