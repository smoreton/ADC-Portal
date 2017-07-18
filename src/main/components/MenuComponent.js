import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "material-ui/MenuItem";

export const BurgerLinkReferences = [
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
        {BurgerLinkReferences.map((item, index) =>
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
