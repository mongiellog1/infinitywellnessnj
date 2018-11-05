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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const packages = [
  "Basic",
  "Transformation",
  "Inner Divine Mothering"
];

const kebabCase = (str) => str.toLowerCase()
  .replace(/&/g, "")
  .replace(/ +/g, "-");

class MobileMenu extends Component {
  state = { menuOpen: false };

  toggleDrawer = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  smoothScroll = () => {
    scrollToElement("#contact", { duration: 750 });
  }

  render() {

    return (
      <>
      <div className="mobile-only header-nav--mobile-only">
        <FontAwesomeIcon className="inline-anchor snipcart-checkout" style={{ height: "18px", marginRight: "2rem"}} icon={["fas", "shopping-cart"]} />
        <img className="sm-img inline-anchor" src={hamburger} alt="hamburger menu" onClick={this.toggleDrawer}/>
      </div>
        <Drawer onClick={this.toggleDrawer} open={this.state.menuOpen} onClose={this.toggleDrawer}>
          <div style={{ width: "100vw", maxWidth: "18rem" }}>
            <List component="nav">
              <Link to="/">
                <ListItem button>
                  <StyledListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/services">
                <ListItem button>
                  <StyledListItemText primary="Services" />
                </ListItem>
              </Link>
              <Link to="/healing-tools">
                <ListItem button>
                  <StyledListItemText primary="Healing Tools" />
                </ListItem>
              </Link>

              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {tools.map((tool, i) => (
                    <Link key={`tool-${i}`} to={`/${kebabCase(tool)}`}>
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
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                      packages.map((_package, i) => (
                        <Link key={`package-${i}`} to={`/packages#${kebabCase(_package)}-package`}>
                          <ListItem button >
                            <StyledListItemText style={{paddingLeft: "3em"}} primary={`${_package} Package`} />
                          </ListItem>
                        </Link>
                      ))
                    }
                </List>
              </Collapse>
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
              <Link to="shop">
                <ListItem button >
                  <StyledListItemText  primary="Shop" />
                </ListItem>
              </Link>
              {/* <div onClick={this.smoothScroll}>
                <ListItem button>
                  <StyledListItemText  primary="Connect" />
                </ListItem>
              </div> */}
            </List>
          </div>
        </Drawer>
      </>
    );
  }
};

export default MobileMenu;
