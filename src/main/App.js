import React, {Component} from 'react';
import {BrowserRouter as Router, Route, BrowserHistory} from 'react-router-dom';
import {MuiThemeProvider} from 'material-ui/styles';
import Home from './components/HomeTest';
import Catalogue from './components/CatalogueTest';
import Contact from './components/ContactTest';
import Checkout from './components/CartTest';

//--------------------------------------------------
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';//link to ADC icon -> put image in appropriate location
import NavButtons from './components/NavButtons';

class App extends Component {

    handleClick = () => {
        this.context.router.history.push('/');
    };

    render() {
        let browserHistory = BrowserHistory;
        return (
            <MuiThemeProvider>
                <Router history={ browserHistory }>
                    <div>
                        <AppBar
                            title="ADC Service Portal"
                            onLeftIconButtonTouchMap={ this.handleClick }
                            iconElementLeft={ <IconButton> <HomeIcon/> </IconButton> }
                            iconElementRight={ <NavButtons/> }
                        />

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
