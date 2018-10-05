import React, { Component } from "react";
import { Link, navigate } from "gatsby";
import hamburger from "../../images/hamburger.png";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const StyledListItemText = withStyles({
  primary: {
    color: "rgb(81, 40, 136)"
  }
})(ListItemText);

const tools = [
  "Myofascial Release",
  "Emotional Freedom Techniques",
  "Yoga & Meditation",
  "Sound Healing"
];

class MobileMenu extends Component {
  state = { menuOpen: false, toolsOpen: true };

  toggleDrawer = (prop) => {
    this.setState({ [prop]: !this.state[prop] });
  }

  render() {

    return (
      <>
        <img className="sm-img" src={hamburger} alt="hamburger menu" onClick={() => this.toggleDrawer("menuOpen")}/>
        <Drawer open={this.state.menuOpen} onClose={() => this.toggleDrawer("menuOpen")}>
          <div style={{ width: "100vw", maxWidth: 250 }}>
            <List component="nav">
              <ListItem button>
                <StyledListItemText onClick={() => navigate("/healing-tools")} primary="Healing Tools" />
                {/* <div onClick={() => this.toggleDrawer("toolsOpen")} style={{ paddingLeft: "1rem", borderLeft: "1px solid #aaa"}}>
                  {this.state.toolsOpen ? <ExpandLess /> : <ExpandMore />}
                </div> */}
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
                  <StyledListItemText  primary="Life Changing Packages" />
                </ListItem>
              </Link>
              <Link to="mandalas">
                <ListItem button>
                  <StyledListItemText  primary="Mandalas" />
                </ListItem>
              </Link>
              <Link to="events">
                <ListItem button>
                  <StyledListItemText  primary="Events" />
                </ListItem>
              </Link>
              <Divider />
              <Link to="about">
                <ListItem button >
                  <StyledListItemText  primary="About" />
                </ListItem>
              </Link>
              <Link to="contact">
                <ListItem button>
                  <StyledListItemText  primary="Contact" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </>
    );
  }
};

export default MobileMenu;
