import React, { Component } from "react";
import { Card } from "material-ui/Card";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

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
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: "300px",

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
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Service">Service</TableHeaderColumn>
              <TableHeaderColumn tooltip="UserRange">
                User Range
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Business unit">
                Business Unit
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Cost">Cost Rate</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.serviceData.map((item, index) => (
              <TableRow key={index}>
                <TableRowColumn>{item.serviceName}</TableRowColumn>
                <TableRowColumn>
                  <DropDown
                    selectedService={item}
                    dropDownContent={this.props.userRanges}
                    onUpdate={this.userRangeUpdate}
                  />
                </TableRowColumn>
                <TableRowColumn>
                  <DropDown
                    selectedService={item}
                    dropDownContent={this.props.businessUnits}
                    onUpdate={this.businessUnitUpdate}
                  />
                </TableRowColumn>
                <TableRowColumn>{item.serviceCost}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </SummaryCard>
    );
  }
}

export default ServiceSummaryCard;
