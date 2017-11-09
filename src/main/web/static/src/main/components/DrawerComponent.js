import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ImageIcon from "../img/whiteAdcLogo.png";
// import IconButton from "material-ui/IconButton";
// import Icon from "material-ui/svg-icons/action/reorder";
import BurgerIcon from "../img/Burger.png";
import { MemoryRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
`;

const BackgroundColour = styled.div`
  min-height: 100%;
  min-width: 100%
  background-color: #00BFFF;
  transform: skew(-0.1rad) translate(-40px);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
`;

const OuterFlexGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifycontent: space-between;
  transform: skew(0.1rad);
`;

//Adds better spacing between the side menu elements
const TextPosition = styled.div`
  margin-top: 10%;
`;

//Positions the image at the bottom of the slide out menu
const PositionLogo = styled.div`
  margin-top: 70%;
`;

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  loginLink(){
    if(this.props.auth){
      return (
        null
      )}else{
        return (
          <TextPosition>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <MenuItem
                style={{
                  color: "white",
                  fontFamily: "Arial",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
                onTouchTap={this.handleClose}
              >
                Log In
                <span style={{color:"red",fontSize:"15px",marginTop:"-15px",fontWeight:"normal"}}> - ADC Staff Only</span>
              </MenuItem>
            </Link>
          </TextPosition>
        )
      }
    }

    adminLink(){
    if(this.props.auth && window.location.pathname!=="/admin"){
      return(

        <TextPosition>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <MenuItem
              style={{
                color: "white",
                fontFamily: "Arial",
                fontSize: "20px",
                fontWeight: "bold"
              }}
              onTouchTap={this.handleClose}
            >
              Administration
            </MenuItem>
          </Link>
        </TextPosition>
      )
    }else{
      return (null)
    }
    }


  //UX Team Burger Menu
  // <img src={BurgerIcon} style={{width: 35, height: 20, cursor: 'hand'}}
  // onClick={this.handleToggle}/>
  //
  // <Icon style={{width: 35, height: 20, cursor: 'hand'}}
  // onClick={this.handleToggle}/>

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <Container className="drawerContainer">
        <img
          className="trigraph"
          src={BurgerIcon}
          style={{ width: 35, height: 20, cursor: "pointer" }}
          onClick={this.handleToggle}
          alt=""
        />

        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          containerStyle={{
            background: "transparent",
            boxShadow: "0",
            overflowX: "hidden"
          }}
        >
          <BackgroundColour>
            <OuterFlexGrid>

              {window.location.pathname!=="/"?
                <TextPosition>
                  <Link
                    className="drawerLink"
                    to="/"
                    style={{textDecoration: "none"}}
                  >
                    <MenuItem
                      style={{
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                      onTouchTap={this.handleClose}
                    >
                      Home
                    </MenuItem>
                  </Link>
                </TextPosition>:null
              }
              {window.location.pathname!=="/catalogue"?
                <TextPosition>
                  <Link to="/catalogue" style={{textDecoration: "none"}}>
                    <MenuItem
                      style={{
                        color: "white",
                        fontFamily: "Arial",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                      onTouchTap={this.handleClose}
                    >
                      Catalogue
                    </MenuItem>
                  </Link>
                </TextPosition>:null
              }
              {window.location.pathname!=="/contact"?
                <TextPosition>
                  <Link to="/contact" style={{textDecoration: "none"}}>
                    <MenuItem
                      style={{
                        color: "white",
                        fontFamily: "Arial",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                      onTouchTap={this.handleClose}
                    >
                      Contact Us
                    </MenuItem>
                  </Link>
                </TextPosition>:null
              }
              {window.location.pathname!=="/faq"?
              <TextPosition>
                <Link to="/faq" style={{ textDecoration: "none" }}>
                  <MenuItem
                    style={{
                      color: "white",
                      fontFamily: "Arial",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                    onTouchTap={this.handleClose}
                  >
                    FAQ's
                  </MenuItem>
                </Link>
              </TextPosition>:null
              }

              {this.adminLink()}

              {this.loginLink()}


              <PositionLogo>
                <img src={ImageIcon} alt="ADC Service Portal Logo" />
              </PositionLogo>
            </OuterFlexGrid>
          </BackgroundColour>
        </Drawer>
      </Container>
    );
  }
}

export default DrawerComponent;
