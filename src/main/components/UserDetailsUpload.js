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
    console.log(files);
    //CREATE USER DETAIL OBJECTS AND ADD TO ARRAY
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
          multipleFiles={false}
          handleFiles={this.handleFiles}
        >
          <RaisedButton label="User Details Upload" />
        </ReactFileReader>
      </GridLayout>
    );
  }
}

export default UserDetailsUpload;
