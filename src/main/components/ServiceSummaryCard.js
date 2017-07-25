import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import DropDown from "./DropDownList";
import { GridLayout, GridBox } from "./FlexBox";
import cross from "../../../public/img/crossButton.png";
import Checkbox from "material-ui/Checkbox";

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
width: 95%;
margin: auto;
padding:5px;
margin-top:20px;
`;

const DropDownStyle = styled.div`
  width: 100%;
  height: 50%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServicePicture = styled.div`
  height: 100px;
  width: 125px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.src});
`;

const CheckBoxOuter = styled.div`
  display: block;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`;

const ImageOuter = styled.div`
  z-index: 1;
  display: block;
  position: relative;
`;

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

class ServiceSummaryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRangeValue: 0,
      businessUnitValue: 0,
      serviceChecked: true
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.removeService = this.removeService.bind(this);
  }

  /**
     * pass the 'item' from your array.map into this function so you can pass it instead of your make believe prop
     *
     * havent checked but this should give you the service title from your selected service object
     *
     * console.log(item.service.serviceTitle);
     *
     * if it does then you need to pass in the service object from the selected service object (something like item.service)
     * it would need to be something like that because the method in app.js requires a 'deselectedService' for the condition in the array.filter so it wont work if you just pass the item in
     *
     * another way would be to pass item.service into this instead of the item but either way i think this is what you need to do
     */
  handleCheck(event, checked) {
    if (checked) {
      this.setState({
        serviceChecked: false
      });
      /**
             * this.props.service
             * dont know what this is - component doesnt have a service prop passed to it so this is always undefined
             */
      this.removeService(this.props.service); //WHAT IS THIS PROP SUPPOSED TO BE?
    }
  }

  removeService = service => {
    this.props.onUnchecked(service);
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

          {this.props.serviceData.map((item, index) => (
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
                <DropDownStyle>
                  <DropDown
                    selectedService={item}
                    dropDownContent={this.props.userRanges}
                    onUpdate={this.userRangeUpdate}
                  />
                </DropDownStyle>
              </td>

              <td>
                <DropDownStyle>
                  <DropDown
                    selectedService={item}
                    dropDownContent={this.props.businessUnits}
                    onUpdate={this.businessUnitUpdate}
                  />
                </DropDownStyle>
              </td>

              <td>
                {item.serviceCost}
              </td>
              <td>
                <div className="checkBoxDiv">
                  <div style={styles.block}>
                    <CheckBoxOuter>
                      <Checkbox
                        checked={this.state.serviceChecked}
                        onCheck={this.handleCheck}
                        /** declare your handler inline so you can pass the item -> () => this.handleCheck(item)*/
                      />
                    </CheckBoxOuter>
                    <ImageOuter>
                      <img
                        src={cross}
                        alt=""
                        style={{ width: 15, height: 15, paddingRight: 15 }}
                      />
                    </ImageOuter>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
