import React, { Component } from "react";
import hamburger from "../images/hamburger.png";

class MobileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
    this.clickHamburger = this.clickHamburger.bind(this);
  }

  clickHamburger() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <>
        <img className="sm-img" src={hamburger} alt="hamburger menu" onClick={this.clickHamburger}/>
        <div className={`drawer ${this.state.menuOpen ? "" : "closed"}`}>
        </div>
      </>
    );
  }
};

export default MobileMenu;
