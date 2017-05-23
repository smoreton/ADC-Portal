import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import styled from "styled-components";


export const NavLinkReferences = [
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
        link: "/checkout",
        name: "Service Checkout"
    }
];

const Name = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;



class NavButtons extends Component {

    render() {
        return (
            <Name>
                {NavLinkReferences.map(item => (
                    <div key={ item.name }>
                        <Link to={ item.link }>
                            <FlatButton>{ item.name }</FlatButton>
                        </Link>
                    </div>
                ))}
            </Name>
        )
    }
}

export default NavButtons;
