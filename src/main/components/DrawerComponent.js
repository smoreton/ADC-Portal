import React from "react";

import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

const styles = {
  largeIcon: {
    width: 40,
    height: 40
  },
  DrawerStyle: {
    backgroundColor: "#1E90FF"
  }
};

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle} iconStyle={styles.largeIcon}>
          <Icon />
        </IconButton>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          Style={styles.DrawerStyle}
        >
          <Link to="\">
            <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          </Link>
          <Link to="/catalogue">
            <MenuItem onTouchTap={this.handleClose}>Catalogue</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem onTouchTap={this.handleClose}>Contact Us</MenuItem>
          </Link>
          <Link to="/faq">
            <MenuItem onTouchTap={this.handleClose}>FAQ's</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default DrawerComponent;
