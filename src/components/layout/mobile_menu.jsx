import React, { Component } from "react";
import { Link, navigate } from "gatsby";
import hamburger from "../../images/hamburger.png";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import scrollToElement from "scroll-to-element";

const StyledListItemText = withStyles({
  primary: {
    color: "rgb(81, 40, 136)"
  }
})(ListItemText);

const tools = [
  "Myofascial Release",
  "Emotional Freedom Techniques",
  "Yoga & Meditation",
  "Sound Bathing & Gratitude"
];

class MobileMenu extends Component {
  state = { menuOpen: false, toolsOpen: true };

  toggleDrawer = (prop) => {
    this.setState({ [prop]: !this.state[prop] });
  }

  smoothScroll = () => {
    scrollToElement("#contact", { duration: 750 });
  }

  render() {

    return (
      <>
        <img className="sm-img mobile-only" src={hamburger} alt="hamburger menu" onClick={() => this.toggleDrawer("menuOpen")}/>
        <Drawer onClick={() => this.toggleDrawer("menuOpen")} open={this.state.menuOpen} onClose={() => this.toggleDrawer("menuOpen")}>
          <div style={{ width: "100vw", maxWidth: "18rem" }}>
            <List component="nav">
              <Link to="/">
                <ListItem button>
                  <StyledListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/services">
                <ListItem button>
                  <StyledListItemText primary="Purchases" />
                </ListItem>
              </Link>
              <ListItem button>
                <StyledListItemText onClick={() => navigate("/healing-tools")} primary="Healing Tools" />
              </ListItem>

              <Collapse in={this.state.toolsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tools.map((tool, i) => (
                    <Link key={`tool-${i}`} to={`/${tool
                        .toLowerCase()
                        .replace(/&/g, "")
                        .replace(/ +/g, "-")}`}>
                      <ListItem button >
                        <StyledListItemText style={{paddingLeft: "3em"}} primary={tool} />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>

              <Link to="packages">
                <ListItem button>
                  <StyledListItemText  primary="Package Series" />
                </ListItem>
              </Link>
              <Link to="mandalas">
                <ListItem button>
                  <StyledListItemText  primary="Mandalas" />
                </ListItem>
              </Link>
              <Divider />
              <Link to="about">
                <ListItem button >
                  <StyledListItemText  primary="About" />
                </ListItem>
              </Link>
              <div onClick={this.smoothScroll}>
                <ListItem button>
                  <StyledListItemText  primary="Connect" />
                </ListItem>
              </div>
            </List>
          </div>
        </Drawer>
      </>
    );
  }
};

export default MobileMenu;
