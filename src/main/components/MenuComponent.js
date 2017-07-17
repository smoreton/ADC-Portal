import React, { Component } from "react";
import { Link } from "react-router-dom";

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

class MenuComponent extends Component {
  render() {
    return (
      <div>
        {NavLinkReferences.map((item, index) =>
          <ListStyle key={index}>
            <li>
              <Link to={item.link}>
                <MenuItem>
                  {item.name}
                </MenuItem>
              </Link>
            </li>
          </ListStyle>
        )}
      </div>
    );
  }
}

export default MenuComponent;
