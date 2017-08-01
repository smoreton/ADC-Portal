import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ImageIcon from "../../../public/img/LogoSmaller.png";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

const BackgroundColour = styled.div`
height: 100%;
background-color: #00BFFF;
font-weight: bold;
`;

const styles = {
  largeIcon: {
    width: 40,
    height: 40
  },

  drawerStyle: {
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
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >

          <BackgroundColour>
            <img src={ImageIcon} alt="ADC Service Portal Logo" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
            </Link>
            <Link to="/catalogue" style={{ textDecoration: "none" }}>
              <MenuItem onTouchTap={this.handleClose}>Catalogue</MenuItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <MenuItem onTouchTap={this.handleClose}>Contact Us</MenuItem>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <MenuItem onTouchTap={this.handleClose}>FAQ's</MenuItem>
            </Link>

          </BackgroundColour>

        </Drawer>
      </div>
    );
  }
}

export default DrawerComponent;
