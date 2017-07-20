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

//Stlying design for the Buttons
const RoundButton = styled.div`
  display: block;
  width: 120px;
  height: 50px;
  line-height: 50px;
  border: 2px solid #242424;
  border-radius: 50%;
  color: #242424;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`;

//Applies appropriate spacing between the buttons
const ButtonPositioning = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
          <img src={logo} alt="" />
          <ButtonPositioning>
            <Link to="/catalogue">
              <RoundButton>BROWSE</RoundButton>
            </Link>
            <RoundButton>ADMIN</RoundButton>
          </ButtonPositioning>
        </AdcLogo>
      </div>
    );
  }
}

export default NewHomePage;
