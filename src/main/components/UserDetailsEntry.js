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
      manualUser: {
        manFullName: "",
        manUserName: "",
        manEmail: ""
      }
    };
  }

  //------ RENDER TABLE CONTENT ------
  renderNoUserDetails = () => {
    return <NoUserDetailsText>No User Details Added</NoUserDetailsText>;
  };

  renderUserDetailsTable = () => {
    this.props.userList.map((item, index) => {
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

  setManFullName = value => {
    this.setState({ manualUser: { manFullName: value } });
  };

  setManUserName = value => {
    this.setState({ manualUser: { manUserName: value } });
  };

  setManEmail = value => {
    this.setState({ manualUser: { manEmail: value } });
  };

  manualAddUser = () => {
    let newUser = new UserDetails(
      this.state.manualUser.manFullName,
      this.state.manualUser.manUserName,
      this.state.manualUser.manEmail
    );
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
            {this.props.userList
              ? this.renderUserDetailsTable()
              : this.renderNoUserDetails()}
          </TableBody>
        </Table>

        <GridLayout>
          <TextField hintText="Full Name" onChange={this.setManFullName} />
          <TextField hintText="Username" onChange={this.setManUserName} />
          <TextField hintText="E-mail" onChange={this.setManEmail} />

          <FlatButton label="Add User" onTouchTap={this.manualAddUser} />
        </GridLayout>

      </UserDetailsCard>
    );
  }
}

export default UserDetailsEntry;
