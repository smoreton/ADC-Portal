import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import DropDown from "./DropDownList";

const SummaryCard = styled(Card)`
width: 90%;
margin: auto;
padding:10px;
`;

class ServiceSummaryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRangeValue: 0,
      businessUnitValue: 0
    };
  }

  updateServiceSelected = update => {
    this.props.onServiceUpdate(update);
  };

  userRangeUpdate = (selectedService, value, newValue) => {
    this.setState({ userRangeValue: value });

    let selectedServiceArray = this.props.serviceData;

    selectedServiceArray.forEach((item, index) => {
      if (item.serviceName === selectedService.serviceName) {
        item.selectedUserRange = newValue;
        this.props.serviceData[index] = item;
      }
    });

    this.updateServiceSelected(selectedServiceArray);
  };

  businessUnitUpdate = (selectedService, value, newValue) => {
    this.setState({ businessUnitValue: value });

    let selectedServiceArray = this.props.serviceData;

    selectedServiceArray.forEach((item, index) => {
      if (item.serviceName === selectedService.serviceName) {
        item.selectedBusinessUnit = newValue;
        this.props.serviceData[index] = item;
      }
    });

    this.updateServiceSelected(selectedServiceArray);
  };

  render() {
    return (
      <SummaryCard>
        <table>
          <tr>
            <th>Service</th>
            <th>User Range</th>
            <th>Business Unit</th>
            <th>Cost Rate</th>
          </tr>

          {this.props.serviceData.map((item, index) =>
            <tr key={index}>
              <td>
                {item.serviceLogo}
                {item.serviceName}
                {item.serviceCategory}
              </td>

              <td>
                <DropDown
                  selectedService={item}
                  dropDownContent={this.props.userRanges}
                  onUpdate={this.userRangeUpdate}
                />
              </td>

              <td>
                <DropDown
                  selectedService={item}
                  dropDownContent={this.props.businessUnits}
                  onUpdate={this.businessUnitUpdate}
                />
              </td>

              <td>
                {item.serviceCost}
              </td>
            </tr>
          )}
        </table>
      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
