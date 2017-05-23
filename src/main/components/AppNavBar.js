import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import NavButtons from './NavButtons';

class AppNavBar extends Component {

    leftIconClick = () => {
        window.location.href = '/';
    };

    render() {
        return (
            <AppBar
                title='ADC Service Portal'
                onLeftIconButtonTouchTap={ this.leftIconClick }
                iconElementLeft={ <IconButton> <HomeIcon/> </IconButton> }
                iconElementRight={ <NavButtons/> }
            />
        )
    }
}

export default AppNavBar;