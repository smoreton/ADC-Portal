import React, { Component } from "react";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import styled from "styled-components";

const ButtonGroupStyling = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 15px;
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
    name: "FAQ"
  }
];

class NavButtons extends Component {
  render() {
    return (
      <ButtonGroupStyling>
        {NavLinkReferences.map(item =>
          <div key={item.name}>
            <Link to={item.link}>
              <FlatButton>{item.name}</FlatButton>
            </Link>
          </div>
        )}
      </ButtonGroupStyling>
    );
  }
}

export default NavButtons;
