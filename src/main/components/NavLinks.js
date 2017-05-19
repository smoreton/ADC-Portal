import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const InlineList = styled.ul`
    display: inline;
`;

const NavLinkText = styled.li`
//insert styling here
`;

export const NavLinkItems = [
    {
        link: "/",
        name: "Home"
    },
    {
        link: "/catalogue",
        name: "Service Catalogue"
    },
    {
        link: "/contact",
        name: "Contact Us"
    },
    {
        link: "/cart",
        name: "Service Cart"
    }
];

class NavLinks extends Component {
    render() {
        return (
            <InlineList>
                {NavLinkItems.map(item => (
                    <NavLinkText key={item.name}>
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                    </NavLinkText>
                ))}
            </InlineList>
        );
    }
}

export default NavLinks;