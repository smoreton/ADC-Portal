import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import DropDown from "./DropDownList";
import cross from "../../../public/img/crossButton.png";
import Checkbox from "material-ui/Checkbox";

const GridLayout = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 50%;
`;

const GridBox = styled.div`
     width: 50%;
     height: 50%;
     align-content: center;


`;

const SummaryCard = styled(Card)`
  width: 90%;
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
      deleteService: false
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.removeService = this.removeService.bind(this);
  }

  handleCheck(event, checked, item) {
    if (!checked) {
      this.setState({
        deleteService: true
      });
      this.removeService(item);
    }
  }

  removeService = service => {
    this.props.onUnchecked(service.service);
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
        <div>
          <table>
            <tbody>
              <tr>
                <style>
                  {"service{width:40%;}"}
                  {"user{width:30%;}"}
                  {"business{width:30%;}"}
                </style>
                <th id="service">Service</th>
                <th id="user">User Range</th>
                <th id="business">Business Unit</th>
              </tr>

              {this.props.serviceData.map((item, index) =>
                <tr key={index}>
                  <td>
                    <GridLayout>
                      <GridBox>
                        <ServicePicture src={item.serviceLogo} />
                      </GridBox>
                      <GridBox>
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
                    <div className="checkBoxDiv">
                      <div style={styles.block}>
                        <CheckBoxOuter>
                          <Checkbox
                            checked={this.state.deleteService}
                            onCheck={() =>
                              this.handleCheck(
                                event,
                                event.target.checked,
                                item
                              )}
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
              )}
            </tbody>
          </table>
        </div>
      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
