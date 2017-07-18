import React from "react";

import ImgPathVar from "../../../public/img/ADC.jpg";
import logo from "../../../public/img/LOGO.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

//Sets the background for the screen
const BackgroundPicture = styled.div`
    position: absolute;
    top:0;
    left:0;
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
    display:block;
    width:120px;
    height:50px;
    line-height:50px;
    border: 2px solid #242424;
    border-radius: 50%;
    color:#242424;
    text-align:center;
    text-decoration:none;
    font-size:20px;
    font-weight:bold;
   
`;

//Applies appropriate spacing between the buttons
const ButtonPositioning = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-around;
`;

const Burger = styled.div`
  content: "";
  position: absolute;
  left: 0.25em;
  top: 0.25em;
  width: 2em;
  height: 0.20em;
  background: black;
  box-shadow: 
    0 0.5em 0 0 #242424,
    0 1.0em 0 0 #242424;

`;

const styles = {
  largeIcon: {
    width: 40,
    height: 40
  }
};

class NewHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.burgerClicked = this.burgerClicked.bind(this);
  }

  burgerClicked = () => {
    console.log("clicked on the burger menu");
  };

  render() {
    return (
      <div>
        <IconButton
          onTouchTap={this.burgerClicked}
          iconStyle={styles.largeIcon}
        >
          <Icon />
        </IconButton>
        <BackgroundPicture />
        <AdcLogo>
          <img src={logo} alt="" />
          <ButtonPositioning>
            <Link to="/catalogue">
              <RoundButton>
                BROWSE
              </RoundButton>
            </Link>
            <RoundButton>
              ADMIN
            </RoundButton>
          </ButtonPositioning>
        </AdcLogo>

      </div>
    );
  }
}

export default NewHomePage;
