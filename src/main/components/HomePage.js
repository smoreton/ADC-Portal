import React from "react";

import logo from "../../../public/img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import Boxes from "../../../public/img/bg-people-boxes.jpg";

const AdcLogo = styled.div`
    width: 100%;q
    justify-content: center;
    text-align: center;
    & > a > img {
        max-width:50%;
        height: auto;
    }
`;
const BoxLogo = styled.div`
   width: 100%;
    justify-content: center;
    text-align: center;
    img {
        max-width:50%;
        height: auto;
    } 
`;

const WhiteBackground = styled.div`
    max-width: 100%;
    height:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
          <div>
            <img src={Boxes} alt="Success" />
          </div>
        </BoxLogo>

      </WhiteBackground>
    );
  }
}

export default NewHomePage;
