import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

import icon from "../../../public/img/LogoSmaller.png";
import DrawerComponent from "./DrawerComponent";

const AdcLogo = styled.div`
  position: absolute;
  right: 43%;
  margin-top: 10px;
`;

const Burger = styled.div`
  content: "";
  position: absolute;
  left: 0.25em;
  top: 0.25em;
  width: 2em;
  height: 0.20em;
  background: black;
  box-shadow: 0 0.5em 0 0 #242424, 0 1.0em 0 0 #242424;
`;

const styles = {
  largeIcon: {
    width: 40,
    height: 40
  },

  AppBarStyle: {
    lineHeight: "30px",
    backgroundColor: "white",
    backgroundImage: "linear-gradient(#D3D3D3, #FFF)"
  }
};

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.burgerClicked = this.burgerClicked.bind(this);
  }

  burgerClicked = () => {
    console.log("clicked on the burger menu");
  };

  render() {
    return (
      <AppBar
        style={styles.AppBarStyle}
        iconElementLeft={<DrawerComponent />}
        iconElementRight={<NavButtons />}
      >
        <AdcLogo>
          <Link to={"/"}>
            <img src={icon} alt="ADC Service Portal Logo" />
          </Link>
        </AdcLogo>
      </AppBar>
    );
  }
}

export default AppNavBar;
