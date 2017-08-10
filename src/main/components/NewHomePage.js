import React from "react";

import ImgPathVar from "../../../public/img/ADC.jpg";
import logo from "../../../public/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import Boxes from "../../../public/img/bg-people-boxes.jpg";
import Paper from "material-ui/Paper";

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
  top: 20%;
  left: 30%;
`;
const BoxLogo = styled.div`
  position: absolute;
  top: 59.80%;
  left: 25%;
`;

const style = {
  width: "100%",
  maxWidth: "none",
  height: 770,
  maxHeight: "none",
  display: "inline-block"
};

//<BackgroundPicture />

class NewHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <Paper style={style} zDepth={1}>
        <DrawerComponent />
        <AdcLogo>
          <Link to="/catalogue">
            <img src={logo} alt="" />
          </Link>
        </AdcLogo>

        <BoxLogo>
          <img src={Boxes} alt="Success" />
        </BoxLogo>
      </Paper>
    );
  }
}

export default NewHomePage;
