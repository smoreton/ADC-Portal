import React from "react";

import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

const styles = {
  DrawerStyle: {
    backgroundColor: "black"
  }
};

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.burgerClicked = this.burgerClicked.bind(this);
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  burgerClicked = () => {
    console.log("clicked on the burger menu");
  };

  render() {
    return (
      <div>
        <IconButton onTouchTap={this.handleToggle} iconStyle={styles.largeIcon}>
          <Icon />
        </IconButton>

        <Drawer
          style={styles.DrawerStyle}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
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
