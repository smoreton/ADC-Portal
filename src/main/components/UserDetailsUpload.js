import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";

import FileRead from "../utils/fileReader";
import RaisedButton from "material-ui/RaisedButton";
import UserDetails from "../model/userDetails";

const StyledButton = styled(RaisedButton)`
    color: #00BFFF !important;
    background-color: #F5F5F5 !important;
    border: 2px solid #00BFFF !important;
    border-radius: 25px !important;
    overflow: hidden !important;
`;

const UserDetailsLoad = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 75%;
  margin: auto;
`;

class UserDetailsUpload extends Component {
  constructor(props) {
    super(props);

    this.closeUserDetails = this.closeUserDetails.bind(this);
  }

  handleFiles = files => {
    FileRead(files.fileList[0]).then(result => {
      for (let i = 0; i < result.length; i++) {
        let userItem = result[i].split(",");
        let completeUserObject = new UserDetails(
          userItem[0],
          userItem[1],
          userItem[2]
        );
        this.props.onUserUpload(completeUserObject);
      }
    });
  };

  closeUserDetails = () => {
    this.props.userDetails(false);
  };

  render() {
    return (
      <UserDetailsLoad>
        <a href="/UserUploadTemplate.csv" download>
          <StyledButton label="Download Template" />
        </a>
        <ReactFileReader
          base64={true}
          multipleFiles={true}
          handleFiles={this.handleFiles}
          fileTypes={".csv"}
        >
          <StyledButton label="User Details Upload" />
        </ReactFileReader>
        <StyledButton
          label="Confirm User Entry"
          onTouchTap={this.closeUserDetails}
        />
      </UserDetailsLoad>
    );
  }
}

export default UserDetailsUpload;
