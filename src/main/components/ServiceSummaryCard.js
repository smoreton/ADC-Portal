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
  width: 100%;
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

const CheckBoxDelete = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: flex-end;
`;

const InputField = styled.input`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 50%;
  width: 50%;
  height: 50px;
  font-family: Roboto-Light;
  font-size: 13px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 100px;
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
      businessUnitValue: false,
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

  businessUnitUpdate = (event, service) => {
    let selectedServiceArray = this.props.serviceData;
    selectedServiceArray.forEach((item, index) => {
      //Checks to see if button Enabled property needs updating
      if (this.props.persistedBU) {
        // this.setState({ businessUnitValue: true });
        this.props.updateNextEnabledProperty(false);
      } else {
        this.props.updateNextEnabledProperty(true);
      }

      if (item.serviceName === service.serviceName) {
        item.businessUnit = event.target.value;
        this.props.updateBuState(event.target.value); //Stores The entered BU in checkout page state for persistence
        this.props.serviceData[index] = item;
      }
    });
  };

  renderUserRangeDropDown = item => {
    return (
      <DropDownStyle>
        <DropDown
          selectedService={item}
          dropDownContent={this.props.userRanges}
          onUpdate={this.userRangeUpdate}
        />
      </DropDownStyle>
    );
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
                    <FlexContainer>
                      <div>
                        {item.serviceName}
                      </div>
                    </FlexContainer>
                    <FlexContainer>
                      <div>
                        {item.serviceCategory}
                      </div>
                    </FlexContainer>
                  </Td>
                  <Td>
                    {/** Renders the user drop down list of service is not a PaaS / IaaS service*/
                    item.serviceCategory === "PaaS / IaaS"
                      ? null
                      : this.renderUserRangeDropDown(item)}
                  </Td>
                  <Td>
                    <DropDownStyle>
                      <InputField
                        placeholder="Business Unit"
                        selectedService={item}
                        value={this.props.persistedBU}
                        onChange={event => this.businessUnitUpdate(event, item)}
                      />
                    </DropDownStyle>
                  </Td>
                  <Td>
                    <div className="checkBoxDiv">
                      <div style={styles.block}>
                        <CheckBoxDelete>
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
                        </CheckBoxDelete>
                        <CheckBoxDelete>
                          <img
                            src={cross}
                            alt=""
                            style={{ width: 15, height: 15, paddingLeft: 15 }}
                          />
                        </CheckBoxDelete>
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
