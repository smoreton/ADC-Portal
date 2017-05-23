import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserHistory } from "react-router";
import HomeTest from "./components/HomeTest";
import CatalogueTest from "./components/CatalogueTest";
import ContactTest from "./components/ContactTest";
import CartTest from "./components/CartTest";

import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    let browserHistory = BrowserHistory;
    return (
      <div>
        <Router history={browserHistory}>
          <div>
            <NavBar />

            <Route path="/" exact component={HomeTest} />
            <Route path="/catalogue" component={CatalogueTest} />
            <Route path="/cart" component={CartTest} />
            <Route path="/contact" component={ContactTest} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
