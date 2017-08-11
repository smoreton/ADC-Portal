import React from "react";

import logo from "../../../public/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const AdcLogo = styled.div`
    width:50%;
    justify-content: center;
`;

const BoxLogo = styled.div`
    width: 50%;
`;

const WhiteBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

class NewHomePage extends React.Component {
  render() {
    return (
      <WhiteBackground>
        <DrawerComponent />
        <AdcLogo>
          <Link to="/catalogue">
            <img src={logo} alt="" />
          </Link>
        </AdcLogo>
        <BoxLogo>
          <img src={Boxes} alt="Success" />
        </BoxLogo>
      </WhiteBackground>
    );
  }
}

export default NewHomePage;
