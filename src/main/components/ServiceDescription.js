import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "material-ui/Card";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";

import DescriptionCard from "./DescriptionCard";

const ServiceWrapper = styled(Card)`
width: 100%;
margin: auto;
`;

const ServiceInformation = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const ServiceAcquisition = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const ButtonGroup = styled.div`
width: 50%;
display: flex;
flex-direction: row;
margin: auto;
`;

let cost = 0;
let businessUnitList = [];
let userList = [];

for (let i = 0; i < this.props.service.businessUnit.size(); i++) {
  businessUnitList.push(
    <MenuItem
      key={i}
      value={this.props.service.businessUnit.value}
      primaryText={this.props.service.businessUnit.name}
    />
  );
}

for (let i = 0; i < this.props.service.userList.size(); i++) {
  userList.push(
    <MenuItem
      key={i}
      value={this.props.service.userRange.value}
      primaryText={this.props.service.userRange.name}
    />
  );
}

class ServiceDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = () => {
    this.setState({
      businessUnit: this.state.businessUnit.value,
      userRange: this.state.userRange.value
    });
  };

  saveService = () => {
    //TODO: add service details to selectedService array and store in props/state (3.5)
  };

  render() {
    let service = this.props.serviceDetails[this.props.service];
    return (
      <ServiceWrapper>

        <ServiceInformation>
          //service logo (imported component)
          <DescriptionCard description={service.description} />
        </ServiceInformation>

        <ServiceAcquisition>
          <DropDownMenu
            maxHeight={150}
            value={this.state.businessUnit.value}
            onChange={this.handleChange}
          >
            {businessUnitList}
          </DropDownMenu>

          <DropDownMenu
            maxHeight={150}
            value={this.state.userRange.value}
            onChange={this.handleChange}
          >
            {userList}
          </DropDownMenu>
        </ServiceAcquisition>

        <ButtonGroup>
          <Link to="/catalog">
            <RaisedButton label="Add to Cart" onTouchTap={this.saveService} />
          </Link>
          <Link to="/checkout">
            <RaisedButton label="Submit" onTouchTap={this.saveService} />
          </Link>
        </ButtonGroup>

      </ServiceWrapper>
    );
  }
}

export default ServiceDescription;
