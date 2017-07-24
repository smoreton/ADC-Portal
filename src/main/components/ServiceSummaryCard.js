import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import DropDown from "./DropDownList";
import { GridLayout, GridBox } from "./FlexBox";

import CssMixin from "../model/cssMixin";

let mixin = new CssMixin();
mixin.addCssProperty("height", "50%");
mixin.addCssProperty("justify-content", "space-between");
mixin.addCssProperty("align-items", "center");
mixin.addCssProperty("flex-wrap", "nowrap");

let innerMixin = new CssMixin();
innerMixin.addCssProperty("width", "50%");
innerMixin.addCssProperty("height", "50%");

const SummaryCard = styled(Card)`
width: 90%;
margin: auto;
padding:10px;
margin-top:20px;
`;

/*const InnerServiceStyle = styled.div`
  width: 50%;
  height: 50%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
`;*/

const ServicePicture = styled.div`
  height: 100px;
  width: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.src});
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
        <style>
          {"table{width:100%;}"}
        </style>
        <table>
          <tr>
            <style>
              {"th{width:25%;}"}
            </style>
            <th>Service</th>
            <th>User Range</th>
            <th>Business Unit</th>
            <th>Cost Rate</th>
          </tr>

          {this.props.serviceData.map((item, index) =>
            <tr key={index}>
              <td>
                <GridLayout mixin={mixin}>
                  <GridBox mixin={innerMixin}>
                    <ServicePicture src={item.serviceLogo} />
                  </GridBox>
                  <GridBox mixin={innerMixin}>
                    <div>
                      {item.serviceName}
                    </div>
                    <div>
                      {item.serviceCategory}
                    </div>
                  </GridBox>
                </GridLayout>
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
