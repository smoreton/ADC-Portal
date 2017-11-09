import React, {Component} from "react";


class AdminWindows extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.getWindow = this.getWindow.bind(this);
  }

  getWindow(window) {
    switch (window) {
      case("userAdmin"):
        return (
          <div>user admin window</div>
        );
      case("editContent"):
        return (
          <div>edit content window</div>
        )
      default:
        return (
          null
        )

    }
  }

  render() {
    return (
      <div>
        {this.getWindow(this.props.window)}
      </div>
    );
  }
}

export default AdminWindows;
