import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import DropDown from "./DropDownList";
import cross from "../../../public/img/crossButton.png";
import Checkbox from "material-ui/Checkbox";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/src/SuperResponsiveTableStyle.css";

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  height: auto;
  width: 100%;
  justify-content: center;
`;

const SummaryCard = styled(Card)`
  width: 90%;
  margin: auto;
  padding:5px;
  margin-top:20px;
`;

const DropDownStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 50%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  display: flex;
  flex-flow: row wrap;
  align-content: center;
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

    this.props.onServiceUpdate(selectedServiceArray);
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

    this.props.onServiceUpdate(selectedServiceArray);
  };

  render() {
    return (
      <SummaryCard>
        <style>
          {"table{width:100%; min-width}"}
        </style>
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th id="logo" />
                <Th id="service">Service</Th>
                <Th id="user">User Range</Th>
                <Th id="business">Business Unit</Th>
                <Th id="delete" />
              </Tr>
            </Thead>

            <Tbody>
              {this.props.serviceData.map((item, index) =>
                <Tr key={index}>
                  <Td>
                    <FlexContainer>
                      <ServicePicture src={item.serviceLogo} />
                    </FlexContainer>
                  </Td>
                  <Td>
                    <div>
                      {item.serviceName}
                    </div>
                    <div>
                      {item.serviceCategory}
                    </div>
                  </Td>
                  <Td>
                    <DropDownStyle>
                      <DropDown
                        selectedService={item}
                        dropDownContent={this.props.userRanges}
                        onUpdate={this.userRangeUpdate}
                      />
                    </DropDownStyle>
                  </Td>
                  <Td>
                    <DropDownStyle>
                      <DropDown
                        selectedService={item}
                        dropDownContent={this.props.businessUnits}
                        onUpdate={this.businessUnitUpdate}
                      />
                    </DropDownStyle>
                  </Td>
                  <Td>
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
                            style={{ width: 15, height: 15, paddingLeft: 15 }}
                          />
                        </ImageOuter>
                      </div>
                    </div>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </div>
      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
