import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";

import icon from "../../../public/img/LogoSmaller.png";
import DrawerComponent from "./DrawerComponent";

const AdcLogo = styled.div`
  position: absolute;
  right: 43%;
  margin-top: 10px;
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
