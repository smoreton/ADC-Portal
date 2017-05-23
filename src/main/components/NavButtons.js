import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

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

class NavButtons extends Component {

    render() {
        return (
            <div>
                {NavLinkReferences.map(item => (
                    <div key={ item.name }>
                        <Link to={ item.link }>
                            <FlatButton>{ item.name }</FlatButton>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default NavButtons;
