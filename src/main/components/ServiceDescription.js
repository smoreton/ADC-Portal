import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import styled from "styled-components";
import TileComponent from "./TileComponent";
import SelectField from "material-ui/SelectField";

import DescriptionCard from "./DescriptionCard";

const ServiceWrapper = styled.div`
width: 100%;
margin: auto;
`;

const ServiceInformation = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 250px;
margin-left: 30px;
`;

const ServiceAcquisition = styled.div`
display: flex;
flex-direction: row;
justify-content: center ;
`;

const ButtonGroup = styled.div`
margin-right: 30px;
display: flex;
flex-direction: row;
justify-content: flex-end;

  }
`;

class ServiceDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessUnitSelectedValue: null,
      userSelectedValue: null
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

          <SelectField
            floatingLabelStyle={{ color: "#00bcd4" }}
            floatingLabelText="Business Unit"
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
          </SelectField>

          <SelectField
            floatingLabelStyle={{ color: "#00bcd4" }}
            floatingLabelText="Users Required"
            maxHeight={150}
            value={this.state.userSelectedValue}
            onChange={this.handleChangeUser}
          >

            {userList.map((userGroup, key) => {
              return (
                <MenuItem key={key} value={userGroup} primaryText={userGroup} />
              );
            })}
          </SelectField>
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
