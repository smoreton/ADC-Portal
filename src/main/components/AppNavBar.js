import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavButtons from "./NavButtons";

import icon from "../../../public/img/logo.jpg";

class AppNavBar extends Component {
  leftIconClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <AppBar
        style={{ lineHeight: "60px", background: "white" }}
        onLeftIconButtonTouchTap={this.leftIconClick}
        iconElementLeft={
          <IconButton> <img src={icon} alt="ADC Service Portal" /> </IconButton>
        }
        iconElementRight={<NavButtons style={{ width: "65", height: "60" }} />}
      />
    );
  }
}

export default AppNavBar;
