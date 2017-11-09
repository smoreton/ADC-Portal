import React, { Component } from 'react';
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

const StyledButton = styled(RaisedButton)` 
  display: flex;
  flex-flow: row wrap;
  color: #00BFFF !important;
  border: 2px solid #448AC9  !important;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important
`;

class AdminButton extends Component {


  render() {
    return (
     <StyledButton
     label={this.props.button.label}
     onTouchTap={event => this.props.handler(event,this.props.button.name)}/>
    );
  }
}

export default AdminButton;