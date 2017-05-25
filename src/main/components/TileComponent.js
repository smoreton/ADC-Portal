/**
 * Created by tsadler on 25/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardMedia } from "material-ui";
import {Link} from 'react-router-dom';



const Tile = styled(Card)`
    padding-top: 2em;
    height: 20em;
    width: 20em;
    margin: 3em;
    
`;

const Image = styled.img`
    width: 20em;
    height: 15em;
`;

class TileComponent extends Component {
    render() {
            return (
                <Link to="/checkout">
                    <Tile>
                        <Image src={this.props.logoSource} alt={this.props.title} />
                    </Tile>
                </Link>

            );
        }
}


export default TileComponent;