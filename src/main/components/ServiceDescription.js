import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "material-ui/Card";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import TileComponent from "./TileComponent";

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

class ServiceDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessUnitSelectedValue: "CBS",
      userSelectedValue: "15 users or less"
    };
  }

  handleChangeBusinessUnit = (event, key, value) => {
    this.setState({
      businessUnitSelectedValue: value
    });
  };

  handleChangeUser = (event, key, value) => {
    this.setState({
      userSelectedValue: value
    });
  };

  saveService = () => {
    //TODO: add service details to selectedService array and store in props/state (3.5)
  };

  render() {
    let service = this.props.serviceDetails[this.props.service];

    const businessUnitList = ["CBS", "AD&I", "HMRC"];

    const userList = [
      "15 users or less",
      "16 to 25",
      "26 to 50",
      "51 to 100",
      "101 to 500"
    ];

    return (
      <ServiceWrapper>

        <ServiceInformation>
          <TileComponent service={service} />
          <DescriptionCard description={service.description} />
        </ServiceInformation>

        <ServiceAcquisition>
          <DropDownMenu
            maxHeight={150}
            value={this.state.businessUnitSelectedValue}
            onChange={this.handleChangeBusinessUnit}
          >
            {businessUnitList.map((businessUnit, key) => {
              return (
                <MenuItem
                  key={key}
                  value={businessUnit}
                  primaryText={businessUnit}
                />
              );
            })}
          </DropDownMenu>
        </ServiceAcquisition>
        <ServiceAcquisition>
          <DropDownMenu
            maxHeight={150}
            value={this.state.userSelectedValue}
            onChange={this.handleChangeUser}
          >
            {userList.map((userGroup, key) => {
              return (
                <MenuItem key={key} value={userGroup} primaryText={userGroup} />
              );
            })}
          </DropDownMenu>
        </ServiceAcquisition>

        <ButtonGroup>
          <Link to="/catalogue">
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
