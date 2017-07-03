import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "material-ui/Card";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

import { GridLayout } from "./FlexBox";

import UserDetails from "../model/userDetails";

const UserDetailsCard = styled(Card)`
  width: 90%;
  margin: auto;
  padding: 10px;
`;

//Include font size, colour etc.
const NoUserDetailsText = styled.div`

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
    return <NoUserDetailsText>No User Details Added</NoUserDetailsText>;
  };

  renderUserDetailsTable = () => {
    console.log("renderuserDetailsTable");
    return this.props.usersAdded.map((item, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{item.userFullName}</TableRowColumn>
          <TableRowColumn>{item.userName}</TableRowColumn>
          <TableRowColumn>{item.userEmail}</TableRowColumn>
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
    console.log("UserDetailsEntry --> manualAddUser --> newUser");
    console.log(newUser);
    this.props.onAdd(newUser);
  };

  removeUser = value => {
    this.props.onRemove(value);
    //------ COMPLETE METHOD TO REMOVE USER DETAILS FROM TABLE
  };

  render() {
    return (
      <UserDetailsCard>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Full Name</TableHeaderColumn>
              <TableHeaderColumn>User Name</TableHeaderColumn>
              <TableHeaderColumn>E-mail</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {console.log(this.props.usersAdded)}
            {this.props.usersAdded[0]
              ? this.renderUserDetailsTable()
              : this.renderNoUserDetails()}
          </TableBody>
        </Table>

        <GridLayout>
          <TextField
            hintText="Full Name"
            value={this.state.manFullName}
            onChange={this.setManFullName}
          />
          <TextField
            hintText="Username"
            value={this.state.manUserName}
            onChange={this.setManUserName}
          />
          <TextField
            hintText="E-mail"
            value={this.state.manEmail}
            onChange={this.setManEmail}
          />

          <FlatButton label="Add User" onTouchTap={this.manualAddUser} />
        </GridLayout>

      </UserDetailsCard>
    );
  }
}

export default UserDetailsEntry;
