import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

import CssMixin from "../model/cssMixin";
import FileRead from "../utils/fileReader";

import RaisedButton from "material-ui/RaisedButton";
import { GridLayout } from "./FlexBox";

let mixin = new CssMixin();
mixin.addCssProperty("width", "50%");
mixin.addCssProperty("justify-content", "space-between");

class UserDetailsUpload extends Component {
  handleFiles = files => {
    FileRead(files.fileList[0]).then(result => {
      console.log(result);
    });
    //this.props.onUserUpload();
  };

  render() {
    return (
      <GridLayout mixin={mixin}>
        <a href="/UserUploadTemplate.csv" download>
          <RaisedButton label="Download Template" />
        </a>

        <ReactFileReader
          base64={true}
          multipleFiles={true}
          handleFiles={this.handleFiles}
        >
          <RaisedButton label="User Details Upload" />
        </ReactFileReader>
      </GridLayout>
    );
  }
}

export default UserDetailsUpload;
