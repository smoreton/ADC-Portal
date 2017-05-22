/**
 * Created by CSHEFIK on 22/05/2017.
 */
import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import styled from 'styled-components';

const Description = styled(Card)`
    margin: 25px;
    margin-top: 30px;

`;

const Title = styled.h1`
    padding-left: 20px;
    padding-top: 20px;
    font-size: 30px;
`;
/*
const Header = styled(CardTitle)`
    & > span {
        font-size: 100px!important;
    }
`;*/


class DescriptionCard extends Component {

    render() {
        return (
                <Description>
                    <Title>{this.props.title}</Title>
                    <CardText >{this.props.description}</CardText>
                </Description>

        );
    }
}

export default DescriptionCard;