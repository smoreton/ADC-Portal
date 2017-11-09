import React, {Component} from "react";
import AdminButton from "./AdminButton";


class AdminLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [{label: "User Admin", name: "userAdmin",role:"ROLE_USERADMIN"}, {label: "Edit Content", name: "editContent",role:"ROLE_CONTENTEDITOR"}]
    }
    this.updateWindow=this.updateWindow.bind(this);
    this.getButtons=this.getButtons.bind(this);
    this.checkRoles=this.checkRoles.bind(this);
  }

  componentWillReceiveProps(){
    console.log(this.props);
  }

  updateWindow(event,name){
    this.props.setwindow(name);
  }

  checkRoles(button){
    if(this.props.roles.includes("ROLE_ADMIN") || this.props.roles.includes(button.role)){
      return true;
    }
    return false;
  }

  getButtons(){
    return this.state.buttons.map( button => {
      if(this.checkRoles(button)){
        return (
          <AdminButton key={button.label} button={button} handler={this.updateWindow}/>
        )
      }else{
        return (null)
      }
    })
  }

  render() {
    const buttons=this.getButtons();
    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default AdminLinks;         