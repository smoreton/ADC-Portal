import React, {Component} from "react";
import AppNavBar from "./AppNavBar";
import AdminLinks from "./AdminLinks"
import AdminWindows from "./AdminWindows"


class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWindow: ""
    }

    this.updateWindow = this.updateWindow.bind(this);
  }

  updateWindow(window){
    this.setState({currentWindow:window});
  }

  render() {
    return (
      <div>
        <AppNavBar auth={this.props.auth}/>
        <AdminLinks setwindow={this.updateWindow} roles={this.props.roles}/>
        <AdminWindows window={this.state.currentWindow} />
      </div>
    );
  }
}

export default Admin;