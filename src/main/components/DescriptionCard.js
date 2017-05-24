import React, { Component } from "react";
import { Card, CardText } from "material-ui/Card";
import styled from "styled-components";

const Description = styled(Card)`
    margin: 25px;
    margin-top: 30px;
`;

class DescriptionCard extends Component {
  render() {
    return (
      <Description>
        <CardText>{this.props.description}</CardText>
      </Description>
    );
  }
}

export default DescriptionCard;
