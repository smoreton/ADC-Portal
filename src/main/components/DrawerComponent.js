import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ImageIcon from "../../../public/img/whiteAdcLogo.png";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/svg-icons/action/reorder";

const BackgroundColour = styled.div`
  height: 100%;
  width: 100%
  background-color: #00BFFF;

`;

const OutterFlexGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justifyContent: space-between;
`;

//Adds better spacing between the side menu elements
const TextPosition = styled.div`
  margin-top: 10%;
`;

//Positions the image at the bottom of the slide out menu
const PositionLogo = styled.div` 
  margin-top: 120%;
`;

const styles = {
  largeIcon: {
    width: 40,
    height: 40
  },

  drawerStyle: {
    backgroundColor: "#1E90FF"
  }
};

class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>

        <IconButton onTouchTap={this.handleToggle} iconStyle={styles.largeIcon}>
          <Icon />
        </IconButton>

        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <BackgroundColour>
            <OutterFlexGrid>

              <TextPosition>
                <Link to="/" style={{ textDecoration: "none" }}>
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
              </TextPosition>

              <TextPosition>
                <Link to="/catalogue" style={{ textDecoration: "none" }}>
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
              </TextPosition>

              <TextPosition>
                <Link to="/contact" style={{ textDecoration: "none" }}>
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
              </TextPosition>

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
              </TextPosition>

              <PositionLogo>
                <img src={ImageIcon} alt="ADC Service Portal Logo" />
              </PositionLogo>

            </OutterFlexGrid>
          </BackgroundColour>

        </Drawer>
      </div>
    );
  }
}

export default DrawerComponent;
