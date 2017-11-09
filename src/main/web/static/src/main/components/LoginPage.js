import React, {Component} from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router'

import logo from "../img/logo.png";
import styled from "styled-components";
import DrawerComponent from "./DrawerComponent";
import FlatButton from "material-ui/FlatButton";
import Boxes from "../img/bg-people-boxes.jpg";

const LoginButton = styled(FlatButton)`
  background-color: #5096FF !important;
  color: #ffffff !important
  border: 1px solid #A8A8A8 !important;
  float:right;
  margin: 20px;
  border-radius: 25px !important;
  overflow: hidden !important
`;
const InputField = styled.input`
  display: flex; 
  flex-flow: row wrap;
  text-align: center;
  max-width: 30%;
  min-width:400px;
  width: 30%;
  height: 50px;
  font-family: Roboto-Light;
  font-size: 13px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  background: #ffffff;
  border: 1px solid #dddddd;
`;

const InputPassword = styled.input.attrs({
  type: "password"
})` display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 30%;
  min-width:400px;
  width: 30%;
  height: 50px;
  font-family: Roboto-Light;
  font-size: 13px;
  color: #4a4a4a;
  letter-spacing: 0.75px;
  background: #ffffff;
  border: 1px solid #dddddd;
  margin-top:10px;
  margin-bottom: 10px;
`;

const AdcLogo = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  & > a > img {
    max-width: 50%;
    height: auto;
  }
`;

const Centered = styled.div`
  margin:auto;
  height:30px;
`;


const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  min-width: 100px;
`;


const WhiteBackground = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pass: "",
      valid:false,
      error:""
    }
    this.setUser = this.setUser.bind(this);
    this.setPass=this.setPass.bind(this);
    this.doLogin=this.doLogin.bind(this);
    this.validate=this.validate.bind(this);
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }



  setUser(event) {
    this.setState({userName: event.target.value});
    this.validate()
  }

  setPass(event){
    this.setState({pass:event.target.value});
    this.validate();
  }

  doLogin(event){
    if(this.validate()) {
      let valid=this.props.doLogin(this.state.userName, this.state.pass);
      if(localStorage.getItem("jwtToken")) {
        this.props.history.push("/admin")
      }
    }
  }

  validate(){
    if(this.state.userName.length<1){
      this.setState({error:"User Name must be provided"})
      return false;
    }
    if(this.state.pass.length<1){
      this.setState({error:" A Password must be provided"})
      return false;
    }
    this.setState({error:""});
    return true;
  }

  render() {
    return (
      <WhiteBackground>
        <DrawerComponent/>
        <Centered>
          <FlexBox>
            <InputField
              tabIndex={1}
              placeholder="User Name"
              value={this.state.userName}
              onChange={event => this.setUser(event)}
            />
          </FlexBox>
          <FlexBox>
            <InputPassword
              tabIndex={2}
              placeholder={"Password"}
              value={this.state.pass}
              onChange={event => this.setPass(event)}
            />
          </FlexBox>
          <LoginButton
            tabIndex={3}
            label="Login"
            onTouchTap={this.doLogin}
            data-tip="Log In to Management Console"
            onKeyUp={event => (event.keyCode===13)?this.doLogin:""}
          />
        </Centered>
        <div>
          {this.state.error}
        </div>
        <AdcLogo>
          <img src={logo} alt=""/>
        </AdcLogo>

      </WhiteBackground>
    );
  }
}

export default withRouter(LoginPage);
