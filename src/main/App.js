
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory, Redirect} from 'react-router';
import HomeTest from './components/HomeTest';
import CatalogueTest from './components/CatalogueTest';
import ContactTest from './components/ContactTest';
import CartTest from './components/CartTest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    let browserHistory = BrowserHistory;
    return (
        <MuiThemeProvider>
      <div>
        <Router history={browserHistory}>
          <div>
            <NavBar />
            <Route name="home" path="/home" component={HomeTest} />
            <Route path="/catalogue" component={CatalogueTest} />
            <Route path="/contact" component={ContactTest} />
            <Route path="/cart" component={CartTest} />
            <Redirect from="/" to="home" />
          </div>
        </Router>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
