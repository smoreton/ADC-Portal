import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

import CssMixin from "../model/cssMixin";

import RaisedButton from "material-ui/RaisedButton";
import { GridLayout } from "./FlexBox";

let mixin = new CssMixin();
mixin.addCssProperty("width", "50%");
mixin.addCssProperty("justify-content", "space-between");

class UserDetailsUpload extends Component {
  handleFiles = files => {
    let reader = new FileReader();

    reader.onload = result => {
      console.log(reader.result.split(","));
    };
    reader.readAsText(files.fileList[0]);

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
