import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";
import cart from "../../../public/img/Cart.png";
import house from "../../../public/img/HouseIcon.png";

import styled from "styled-components";

const ButtonGroupStyling = styled.div`
  font-family: "roboto";
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  margin-top: 12px;
`;

const Spacer = styled.div`margin-right: 20px;`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const DesktopMenu = styled.div`
  display: Block;

  @media (max-width: 767px) {
    display: none;
  }
`;

class NavButtons extends Component {
  render() {
    return (
      <div>
        <MobileMenu>
          <ButtonGroupStyling>
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            >
              <Link to={"/"}>
                <img src={house} alt="Home Page" />
              </Link>
              <Spacer />
              <Link to={"/checkout/servicesummary"}>
                <img src={cart} alt="Cart Page" />
              </Link>
            </IconMenu>
          </ButtonGroupStyling>
        </MobileMenu>
        <DesktopMenu>
          <ButtonGroupStyling>
            <Link to={"/"}>
              <img src={house} alt="Home Page" />
            </Link>
            <Spacer />
            <Link to={"/checkout/servicesummary"}>
              <img src={cart} alt="Cart Page" />
            </Link>
          </ButtonGroupStyling>
        </DesktopMenu>
      </div>
    );
  }
}

export default NavButtons;
