import React, { Component } from "react";
import styled from "styled-components";

import ReactTooltip from "react-tooltip";

import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { GridLayout } from "./FlexBox";
import UserDetails from "../model/userDetails";

import CssMixin from "../model/cssMixin";

let mixin = new CssMixin();
mixin.addCssProperty("padding", "20px");
mixin.addCssProperty("justify-content", "space-between");
mixin.addCssProperty("width", "75%");
mixin.addCssProperty("margin", "auto");

const Entryfield = styled(TextField)`
    color: #A8A8A8 !important;
    background-color: #ffffff !important;
    border: 1px solid #A8A8A8 !important;
    border-radius: 25px !important;
    overflow: hidden !important;
    padding-left: 20px !important;
    width: 25% !important;
`;

const StyledButton = styled(RaisedButton)`
    color: #00BFFF !important;
    background-color: #F5F5F5 !important;
    border: 2px solid #00BFFF !important;
    border-radius: 25px !important;
    overflow: hidden !important;
`;

const UserDetailsCard = styled(Card)`
  width: 100%;
`;

//Include font size, colour etc.
const NoUserDetailsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class UserDetailsEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manFullName: "",
      manUserName: "",
      manEmail: ""
    };

    this.setManFullName = this.setManFullName.bind(this);
    this.setManUserName = this.setManUserName.bind(this);
    this.setManEmail = this.setManEmail.bind(this);
    this.manualAddUser = this.manualAddUser.bind(this);
  }

  //------ RENDER TABLE CONTENT ------
  renderNoUserDetails = () => {
    return (
      <TableRow>
        <TableRowColumn>
          <NoUserDetailsText className="conditional">
            No User Details Added
          </NoUserDetailsText>
        </TableRowColumn>
      </TableRow>
    );
  };

  renderUserDetailsTable = () => {
    return this.props.usersAdded.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>
            {item.userFullName}
          </TableRowColumn>
          <TableRowColumn>
            {item.userName}
          </TableRowColumn>
          <TableRowColumn>
            {item.userEmail}
          </TableRowColumn>
        </TableRow>
      );
    });
  };
  //------ RENDER TABLE CONTENT ------

  setManFullName = (event, value) => {
    this.setState({ manFullName: value });
  };

  setManUserName = (event, value) => {
    this.setState({ manUserName: value });
  };

  setManEmail = (event, value) => {
    this.setState({ manEmail: value });
  };

  manualAddUser = () => {
    let newUser = new UserDetails(
      this.state.manFullName,
      this.state.manUserName,
      this.state.manEmail
    );
    this.props.onAdd(newUser);
    this.setState({
      manFullName: "",
      manUserName: "",
      manEmail: ""
    });
  };

  removeUser = user => {
    this.props.onRemove(user);
  };

  render() {
    return (
      <UserDetailsCard>
        <ReactTooltip />
        <Table displaySelectAll={false}>
          <TableHeader />
          <TableBody displayRowCheckbox={false}>
            {this.props.usersAdded[0]
              ? this.renderUserDetailsTable()
              : this.renderNoUserDetails()}
          </TableBody>
        </Table>

        <GridLayout mixin={mixin}>
          <Entryfield
            hintText="Full Name"
            value={this.state.manFullName}
            onChange={this.setManFullName}
          />
          <Entryfield
            hintText="Username"
            value={this.state.manUserName}
            onChange={this.setManUserName}
          />
          <Entryfield
            hintText="E-mail"
            value={this.state.manEmail}
            onChange={this.setManEmail}
          />

          <StyledButton
            label="+"
            onTouchTap={this.manualAddUser}
            data-tip="Adds a user to the list of access for the service(s) selected"
          />
        </GridLayout>
      </UserDetailsCard>
    );
  }
}

export default UserDetailsEntry;
