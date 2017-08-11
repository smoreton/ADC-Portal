import React, { Component } from "react";
import ReactFileReader from "react-file-reader";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import FileRead from "../utils/fileReader";
import RaisedButton from "material-ui/RaisedButton";
import UserDetails from "../model/userDetails";

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

    this.onUserAdded = this.onUserAdded.bind(this);
    this.userViewUpl = this.userViewUpl.bind(this);

    //  this.closeUserDetails = this.closeUserDetails.bind(this);
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

  onUserAdded = () => {
    this.props.onUserAdded();
  };

  userViewUpl = () => {
    this.props.userViewUpl();
  };

  //   closeUserDetails = () => {
  //     this.props.userDetails
  // <RaisedButton(false);
  //   };
  // label="Confirm User Entry"
  // onTouchTap={this.closeUserDetails}
  // />

  render() {
    return (
      <UserDetailsLoad>
        <ReactTooltip />
        <a href="/UserUploadTemplate.csv" download>
          <RaisedButton
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
          <RaisedButton
            label="User Details Upload"
            data-tip="Upload a .csv file cotaining users requiring access"
          />
        </ReactFileReader>

      </UserDetailsLoad>
    );
  }
}

export default UserDetailsUpload;
