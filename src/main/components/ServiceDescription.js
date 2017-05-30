import React, { Component } from "react";
import { Card } from "material-ui/Card";
import DropDownMenu from "material-ui/DropDownMenu";
import styled from "styled-components";

const ServiceWrapper = styled(Card)`

`;

const ServiceInformation = styled.div`

`;

const ServiceAcquisition = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const ServiceRequirementMenu = styled(DropDownMenu)`

`;

const ServiceCost = styled.div`

`;

const ButtonGroup = styled.div`

`;

class ServiceDescription extends Component {
  render() {
    return (
      <ServiceWrapper>

        <ServiceInformation>
          //service logo & description (import components in)
        </ServiceInformation>

        <ServiceAcquisition>
          <ServiceRequirementMenu>
            //business unit dropdown
          </ServiceRequirementMenu>

          <ServiceRequirementMenu>
            //number of users dropdown
          </ServiceRequirementMenu>

          <ServiceCost>
            //cost
          </ServiceCost>
        </ServiceAcquisition>

        <ButtonGroup>
          //add to cart & checkout buttons
        </ButtonGroup>

      </ServiceWrapper>
    );
  }
}

export default ServiceDescription;
