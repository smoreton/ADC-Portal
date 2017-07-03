import React, { Component } from "react";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconButton from "material-ui/IconButton";

import FlatButton from "material-ui/FlatButton";
import styled from "styled-components";

const ButtonGroupStyling = styled.div`
  font-family: "roboto";
  display: flex;
  flex-direction: row;
  margin-right: 15px;
`;

const ListStyle = styled.div`
  list-style: none;
  padding: 0 10px;
  margin-top: 10px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

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

export const NavLinkReferences = [
  {
    link: "/catalogue",
    name: "Service Catalogue"
  },
  {
    link: "/checkout",
    name: "Checkout"
  },
  {
    link: "/contact",
    name: "Contact Us"
  },
  {
    link: "/faq",
    name: "Need Help?"
  }
];

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
              {NavLinkReferences.map((item, index) => (
                <ListStyle key={index}>
                  <li>
                    <Link to={item.link}>
                      <MenuItem>
                        {item.name}
                      </MenuItem>
                    </Link>
                  </li>
                </ListStyle>
              ))}
            </IconMenu>
          </ButtonGroupStyling>
        </MobileMenu>
        <DesktopMenu>
          <ButtonGroupStyling>
            {NavLinkReferences.map((item, index) => (
              <ListStyle key={index}>
                <li>
                  <Link to={item.link}>
                    <FlatButton>
                      {item.name}
                    </FlatButton>
                  </Link>
                </li>
              </ListStyle>
            ))}
          </ButtonGroupStyling>
        </DesktopMenu>
      </div>
    );
  }
}

export default NavButtons;
