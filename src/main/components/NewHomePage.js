import React from "react";

import ImgPathVar from "../../../public/img/ADC.jpg";
import logo from "../../../public/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

//Sets the background for the screen
const BackgroundPicture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${ImgPathVar});
  opacity: 0.6;
  z-index: -1;
  background-repeat: no-repeat;
`;

//Positions the logo
const AdcLogo = styled.div`
  position: absolute;
  top: 33%;
  left: 30%;
`;

class NewHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <DrawerComponent />

        <BackgroundPicture />

        <AdcLogo>
          <Link to="/catalogue">
            <img src={logo} alt="" />
          </Link>
        </AdcLogo>
      </div>
    );
  }
}

export default NewHomePage;
