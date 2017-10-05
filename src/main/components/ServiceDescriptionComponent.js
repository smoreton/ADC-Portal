/**
 * Created by SCMORETO on 05/10/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
//import FlatButton from 'material-ui/FlatButton';

const ServicePicture = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  max-width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.src});
`;

const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
`;

class ServiceDescriptionComponent extends Component {
  render() {
    return (
      <div>
        <ServicePicture src={this.props.serviceLogo} />
        <ServiceText>
          {this.props.serviceText.split("\n").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </ServiceText>
      </div>
    );
  }
}

export default ServiceDescriptionComponent;
