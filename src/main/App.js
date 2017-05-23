import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';

/**
 * Component Imports
 */
import AppNavBar from './components/AppNavBar';
import Home from './components/HomeTest';
import Catalogue from './components/CatalogueTest';
import Contact from './components/ContactTest';
import Checkout from './components/CartTest';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <AppNavBar/>
                        <Route path='/' exact component={ Home }/>
                        <Route path='/catalogue' component={ Catalogue }/>
                        <Route path='/contact' component={ Contact }/>
                        <Route path='/checkout' component={ Checkout }/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;