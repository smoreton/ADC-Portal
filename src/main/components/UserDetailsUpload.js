import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import FileRead from "../utils/fileReader";
import RaisedButton from "material-ui/RaisedButton";
import UserDetails from "../model/userDetails";

const StyledButton = styled(RaisedButton)`
    color: #00BFFF !important;
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

  render() {
    return (
      <UserDetailsLoad>
        <ReactTooltip />
        <a href="/UserUploadTemplate.csv" download>
          <StyledButton
            label="Download Template"
            data-tip="Download a .csv template for required user access"
          />
        </a>
        <ReactFileReader
          base64={true}
          multipleFiles={true}
          handleFiles={this.handleFiles}
          fileTypes={".csv"}
        >
          <StyledButton
            label="User Details Upload"
            data-tip="Upload a .csv file cotaining users requiring access"
          />
        </ReactFileReader>
      </UserDetailsLoad>
    );
  }
}

export default UserDetailsUpload;
